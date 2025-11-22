import {
    AfterViewChecked,
    ContentChild,
    Directive,
    EventEmitter,
    HostListener,
    Input,
    Output
} from '@angular/core';
import {
    IconDefinition
} from '@fortawesome/angular-fontawesome';
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
    exportAs: 'sortResizeableColumn'
})
export class SortResizeableColumnDirective implements AfterViewChecked {
    @Input() sortDirection: SortDirection = '';

    @Output() sort = new EventEmitter<SortDirection>();

    public directiveIcon: IconDefinition = faSort;

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
        switch (this.sortDirection) {
            case 'asc':
                this.directiveIcon = faSortUp;
                break;
            case 'desc':
                this.directiveIcon = faSortDown;
                break;
            default:
                this.directiveIcon = faSort;
        }
    }
}
