import { ColumnType } from './column-header-item.model';

export class SearchFilter {
    constructor(
        public property: string,
        public type: ColumnType,
        public values?: string[],
        public value?: string
    ) {}
}
