import {
    AfterViewChecked,
    ContentChild,
    Directive,
    EventEmitter,
    HostListener,
    Input,
    OnDestroy,
    OnInit,
    Output
} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {
    faSort,
    faSortDown,
    faSortUp
} from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import {
    SortColumnEvent,
    SortDirection
} from '../model/sort-column-event.model';
import { SortService } from '../services/sort.service';
import { ColumnHeaderItem } from '../model/column-header-item.model';

const rotate: { [key: string]: SortDirection } = {
    asc: 'desc',
    desc: '',
    '': 'asc'
};

/**
 * Attribute Directive to sorts column
 *
 * @howToUse
 * ```
 * <some-element
 * sortColumn
 * [sortable]="item"
 * (sort)="sortColumn($event)" >...</some-element>
 * ```
 */
@Directive({
    selector: '[sortColumn]',
    standalone: true
})
export class SortColumnDirective
    implements OnInit, OnDestroy, AfterViewChecked
{
    @Input() sortable?: ColumnHeaderItem;
    @Input() sortDirection: SortDirection = '';

    @Output() sort = new EventEmitter<SortColumnEvent>();

    @ContentChild(FaIconComponent) sortIcon?: FaIconComponent;

    private sortSubscription?: Subscription;

    constructor(private sortService: SortService) {}

    ngOnInit(): void {
        this.sortSubscription = this.sortService.columnSorted$.subscribe(
            (event) => {
                if (this.sortable?.title !== event.column.title) {
                    this.sortDirection = '';

                    if (this.sortIcon) {
                        this.sortIcon.icon = faSort;
                        this.sortIcon.render();
                    }
                }
            }
        );
    }

    ngAfterViewChecked(): void {
        this.setSortDirection();
    }

    ngOnDestroy(): void {
        this.sortSubscription?.unsubscribe();
    }

    @HostListener('click')
    public click() {
        this.sortDirection = rotate[this.sortDirection];

        this.setSortDirection();

        if (this.sortable) {
            this.sort.emit(
                new SortColumnEvent(this.sortable, this.sortDirection)
            );
            this.sortService.columnSorted(
                new SortColumnEvent(this.sortable, this.sortDirection)
            );
        }
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
