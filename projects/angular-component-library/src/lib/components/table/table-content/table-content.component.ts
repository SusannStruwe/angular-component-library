import { CommonModule, KeyValue } from '@angular/common';
import { AfterViewInit, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';
import { CdkVirtualScrollViewport, ScrollingModule } from '@angular/cdk/scrolling';
import { ColumnType } from '../../../model/column-header-item.model';
import { DefaultColumKeys } from '../../../model/default-column-key.enum';
import { TableColumnType } from '../../../stories/util';


/**
 * Component to create and show  table content
 *
 * @howToUse
 * ```
 * <table-content-component
 *     [headerItemsTasks]="items"
 *     [searchFilters]="filters"
 * *     [searchFilters]="filters"
 *     (filterRowChange)="filterRows($event)"
 *     (sortColumnChange)="sortColumn($event)">
 * </table-content-component>
 */
@Component({
    selector: 'table-content-component',
    standalone: true,
    imports: [
        CommonModule,
        FontAwesomeModule,
        TranslateModule,
        ScrollingModule
    ],
    templateUrl: './table-content.component.html',
    styleUrls: ['./table-content.component.scss']
})
export class TableContentComponent {

    @Input() tableHeight: string = '275px';
    @Input() tableItems: any = [];

    @Output() tableItemSelected = new EventEmitter<any>();

    @ViewChild(CdkVirtualScrollViewport) viewport!: CdkVirtualScrollViewport;

    selectedTableItem = null;
    
    defaultColumKeys: typeof DefaultColumKeys = DefaultColumKeys;


    tableItemClicked(item: any): void {
        this.tableItemSelected.emit(item);
    }

    /**
     * Order items
     * Preserve original property order with returning 0
     * @param a
     * @param b
     * @returns
     */
    asIsOrder(a: KeyValue<string, TableColumnType>, b: KeyValue<string, TableColumnType>): number {
        return 0;
    }
    

}
