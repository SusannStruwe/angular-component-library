import { ColumnHeaderItem } from './column-header-item.model';

export type SortDirection = 'asc' | 'desc' | '';

export class SortColumnEvent {
    constructor(
        public column: ColumnHeaderItem,
        public direction: SortDirection
    ) {}
}
