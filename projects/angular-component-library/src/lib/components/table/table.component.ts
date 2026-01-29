import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

/**
 * Component to create and show  table
 *
 * @howToUse
 * ```
 * <table-component>
 *     <div header>
 *         ...
 *     </div>
 *     <div content>
 *         ...
 *     </div>
 * </table-component>
 */
@Component({
    selector: 'table-component',
    imports: [CommonModule],
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})
export class TableComponent {
    @Input() scrollbarWidth = 0;
    @Input() classStyle?: string;
}
