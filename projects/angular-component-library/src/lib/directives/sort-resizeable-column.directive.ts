import {
    AfterViewChecked,
    ContentChild,
    Directive,
    EventEmitter,
    HostListener,
    Input,
    Output
} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {
    faSort,
    faSortDown,
    faSortUp
} from '@fortawesome/free-solid-svg-icons';
import { SortDirection } from 'angular-component-library';

const rotate: { [key: string]: SortDirection } = {
    asc: 'desc',
    desc: '',
    '': 'asc'
};

/**
 * Attribute Directive to sorts resizeable column
 *
 * @howToUse
 * ```
 * <some-element
 * sortResizeableColumn
 * (sort)="sortColumn($event)" >...</some-element>
 * ```
 */
@Directive({
    selector: '[sortResizeableColumn]',
    standalone: true
})
export class SortResizeableColumnDirective implements AfterViewChecked {
    @Input() sortDirection: SortDirection = '';

    @Output() sort = new EventEmitter<SortDirection>();

    @ContentChild(FaIconComponent) sortIcon?: FaIconComponent;

    ngAfterViewChecked(): void {
        this.setSortDirection();
    }

    @HostListener('click')
    public click() {
        this.sortDirection = rotate[this.sortDirection];
        this.setSortDirection();
        this.sort.emit(this.sortDirection);
    }

    setSortDirection(): void {
        if (this.sortIcon) {
            this.sortIcon.icon =
                this.sortDirection === 'desc'
                    ? faSortDown
                    : this.sortDirection === 'asc'
                      ? faSortUp
                      : faSort;
            this.sortIcon.render();
        }
    }
}
