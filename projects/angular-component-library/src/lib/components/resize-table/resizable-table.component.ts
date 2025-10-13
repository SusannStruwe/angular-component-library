import {
    AfterViewInit,
    Component,
    ElementRef,
    EventEmitter,
    Input,
    Output,
    ViewChild
} from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { Icons, SortDirection, TableStyle } from 'angular-component-library';
import { CommonModule } from '@angular/common';
import { SortResizeableColumnDirective } from '../../directives/sort-resizeable-column.directive';
import { ResizableColumnDirective } from '../../directives/resize-column.directive';

@Component({
    selector: 'resizable-table',
    imports: [
        CommonModule,
        ScrollingModule,
        FontAwesomeModule,
        SortResizeableColumnDirective,
        ResizableColumnDirective
    ],
    standalone: true,
    templateUrl: './resizable-table.component.html',
    styleUrls: ['./resizable-table.component.scss']
})
export class ResizableTableComponent implements AfterViewInit {
    @Input() columns: string[] = [];
    @Input() columnLabels: { [key: string]: string } | null = null;
    @Input() data: any[] = [];
    @Input() selectedRow: any | null = null;
    @Input() disableResize: boolean = false;
    @Input() tableHeight: string = '300px';
    @Input() tableStyle?: TableStyle;


    @Output() selectedRowchange: EventEmitter<any> = new EventEmitter();

    @ViewChild('tableContainer') tableContainer?: ElementRef<HTMLDivElement>;

    columnWidths: { [key: string]: number } = {};
    sortColumn: string | null = null;
    sortDirection: SortDirection = 'asc';
    faSort: IconDefinition = Icons.faSort;

    ngAfterViewInit() {
        this.initColumnWidths();
    }

    initColumnWidths(): void {
        if (this.tableContainer) {
            setTimeout(() => {
                const containerWidth =
                    this.tableContainer!.nativeElement.getBoundingClientRect().width - 30;
                const colCount = this.columns.length;

                this.columnWidths = this.columns.reduce(
                    (acc, col) => {
                        acc[col] = Math.floor(containerWidth / colCount);
                        return acc;
                    },
                    {} as Record<string, number>
                );

                this.sortColumn = this.columns[0];
            });
        }
    }

    /**
     * Sets row selected
     * @param row 
     */
    setRowSelected(row: any): void {
        this.selectedRow = row;
        this.selectedRowchange.emit(row);
    }

    /**
     * Starts resize event
     * @param event 
     * @param column 
     */
    onResizeStart(event: { column: string; startX: number }, column: string): void {
        const startX = event.startX;
        const startWidth = this.columnWidths[column];

        const onPointerMove = (e: PointerEvent) => {
            const delta = e.clientX - startX;
            const newWidth = startWidth + delta;
            this.columnWidths[column] = Math.max(newWidth, 50); // min width
        };

        const onPointerUp = () => {
            document.removeEventListener('pointermove', onPointerMove);
            document.removeEventListener('pointerup', onPointerUp);
            console.log('end');
        };

        document.addEventListener('pointermove', onPointerMove);
        document.addEventListener('pointerup', onPointerUp);
    }

    /**
     * Updates croll index
     * @param index 
     */
    onScrolledIndexChange(index: number): void {
        if (index + 10 > this.data.length) {
            console.log('Reached end of data (infinite scroll trigger)');
        }
    }

    /**
     * Sorts rows by sort direction ('asc' | 'desc' | '') and column
     * @param sortDirection - 'asc' | 'desc' | ''
     * @param column - selected column name
     */
    sortData(sortDirection: SortDirection, column: string): void {
        this.sortColumn = column;
        this.sortDirection = sortDirection;

        const direction = this.sortDirection === 'asc' ? 1 : -1;

        this.data = [...this.data].sort((a, b) => {
            const aVal = a[column];
            const bVal = b[column];

            if (aVal == null) return 1;
            if (bVal == null) return -1;

            // try to parse strings as date
            const aDate = this.parseDate(aVal);
            const bDate = this.parseDate(bVal);

            if (aDate && bDate) {
                return (aDate.getTime() - bDate.getTime()) * direction;
            }

            // Fallback: strings or numbers
            if (typeof aVal === 'number' && typeof bVal === 'number') {
                return (aVal - bVal) * direction;
            }

            return String(aVal).localeCompare(String(bVal)) * direction;
        });
    }

    /**
     * Parses string to date if regex check do not fail
     * @param value
     * @returns
     */
    parseDate(value: string): Date | null {
        if (typeof value !== 'string') return null;

        const deDateTimeRegex = /^(\d{2})\.(\d{2})\.(\d{4}) (\d{2}):(\d{2})$/;
        if (deDateTimeRegex.test(value)) {
            const [, day, month, year, hour, minute] = value.match(deDateTimeRegex)!;
            const date = new Date(
                Number(year),
                Number(month) - 1,
                Number(day),
                Number(hour),
                Number(minute)
            );
            return isNaN(date.getTime()) ? null : date;
        }

        const isoDateRegex =
            /^\d{4}-\d{2}-\d{2}(?:[ T]\d{2}:\d{2}(:\d{2}(\.\d{1,3})?)?(Z|([+-]\d{2}:\d{2}))?)?$/;
        if (isoDateRegex.test(value)) {
            const date = new Date(value);
            return isNaN(date.getTime()) ? null : date;
        }

        return null;
    }
}
