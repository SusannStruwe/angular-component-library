import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MultiSelectComponent } from '../../multi-select/multi-select.component';
import { Icons } from '../../../model/icons';
import { TranslateModule } from '@ngx-translate/core';
import { ColumnHeaderItem } from '../../../model/column-header-item.model';
import { SortColumnDirective } from '../../../directives/sort-column.directive';
import { FormsModule } from '@angular/forms';
import { SearchFilter } from '../../../model/search-filter.model';
import { SortColumnEvent } from '../../../model/sort-column-event.model';


/**
 * Component to create and show  table header
 *
 * @howToUse
 * ```
 * <table-header-component 
 *     [headerItemsTasks]="items" 
 *     [searchFilters]="filters" 
 *     (filterRowChange)="filterRows($event)" 
 *     (sortColumnChange)="sortColumn($event)">
 * </table-header-component>
 */
@Component({
    selector: 'table-header-component',
    standalone: true,
    imports: [
        CommonModule, 
        FontAwesomeModule, 
        TranslateModule,
        SortColumnDirective,
        FormsModule
    ],
    templateUrl: './table-header.component.html',
    styleUrls: ['./table-header.component.scss']
})
export class TableHeaderComponent {
    @Input() headerItemsTasks: ColumnHeaderItem[] = [];
    @Input() searchFilters: SearchFilter[] = [];

    @Output() filterRowChange = new EventEmitter<SearchFilter[]>();
    @Output() sortColumnChange = new EventEmitter<SortColumnEvent>();

    faSort = Icons.faSort;
    faFilter = Icons.faFilter;


    filterRows(): void {
        this.filterRowChange.emit(this.searchFilters);
    }

    sortColumn(sortEvent: SortColumnEvent): void {
        this.sortColumnChange.emit(sortEvent);
    }
}
