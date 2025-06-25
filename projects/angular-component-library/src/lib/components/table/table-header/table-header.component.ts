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
import { TableStyle } from '../../../model/table-style.enum';

export interface SelectFilterChangeEvent {
  filteredValues: string[];            
  headerItem: ColumnHeaderItem;
}

/**
 * Component to create and show table header
 *
 * @howToUse
 * ```
 * <table-header-component
 *     [headerItemsTasks]="items"
 *     [searchFilters]="filters"
 *     [multiSelectList]="multiSelectList"
 *     (searchFilterChange)="searchFilterChange($event)"
 *     (selectFilterChange)="selectFilterChange($event)"
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
        FormsModule,
        MultiSelectComponent
    ],
    templateUrl: './table-header.component.html',
    styleUrls: ['./table-header.component.scss']
})
export class TableHeaderComponent {
    @Input() headerItemsTasks: ColumnHeaderItem[] = [];
    @Input() searchFilters: SearchFilter[] = [];
    @Input() multiSelectList: any = null;
    @Input() scrollbarWidth: number = 0;
    @Input() showSearchLine: boolean = true;
    @Input() tableStyle?: TableStyle;

    @Output() searchFilterChange = new EventEmitter<SearchFilter[]>();
    @Output() sortColumnChange = new EventEmitter<SortColumnEvent>();
    @Output() selectFilterChange = new EventEmitter<SelectFilterChangeEvent>();

    faSort = Icons.faSort;
    faFilter = Icons.faFilter;

    filterRowsByInput(): void {
        this.searchFilterChange.emit(this.searchFilters);
    }

    sortColumn(sortEvent: SortColumnEvent): void {
        this.sortColumnChange.emit(sortEvent);
    }

    filterRowsBySelect(filteredValues: string[], headerItem: ColumnHeaderItem): void {
        this.selectFilterChange.emit({ filteredValues: filteredValues, headerItem: headerItem});
    }
}