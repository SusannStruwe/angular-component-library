import {
    Directive,
    EventEmitter,
    HostListener,
    Input,
    OnDestroy,
    OnInit,
    Output,
    ViewContainerRef
} from '@angular/core';
import {
    IconDefinition
} from '@fortawesome/angular-fontawesome';
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
    exportAs: 'sortColumn'
})
export class SortColumnDirective implements OnInit, OnDestroy {
    @Input() sortable?: ColumnHeaderItem;
    @Input() sortDirection: SortDirection = '';

    @Output() sort = new EventEmitter<SortColumnEvent>();

    public directiveIcon: IconDefinition = faSort;

    private sortSubscription?: Subscription;

    constructor(private sortService: SortService) {}

    ngOnInit(): void {
        this.sortSubscription = this.sortService.columnSorted$.subscribe(
            (event) => {
                if (this.sortable?.title !== event.column.title) {
                    this.sortDirection = '';
                    this.updateIcon();
                }
            }
        );
        this.updateIcon();
    }

    ngOnDestroy(): void {
        this.sortSubscription?.unsubscribe();
    }

    @HostListener('click')
    public click() {
        this.sortDirection = rotate[this.sortDirection];

        this.updateIcon();

        if (this.sortable) {
            this.sort.emit(
                new SortColumnEvent(this.sortable, this.sortDirection)
            );
            this.sortService.columnSorted(
                new SortColumnEvent(this.sortable, this.sortDirection)
            );
        }
    }

    private updateIcon() {
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
