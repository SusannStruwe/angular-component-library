import {
    ColumnHeaderItem,
    ColumnType
} from '../model/column-header-item.model';
import { MultiSelectItem } from '../model/multi-select.model';
import { SearchFilter } from '../model/search-filter.model';
import { DateTime, Duration } from 'luxon';

export type TableColumnType = string | DateTime | number | Duration;

/**
 * Helper class to create table
 */
export class ContentItem {
    constructor(
        public id: string,
        public name: string,
        public email: string,
        public columns: Map<string, TableColumnType>
    ) {}
}

export enum DefaultColumKeys {
    id = 'id',
    name = 'name',
    email = 'email'
}

export const headerItems: ColumnHeaderItem[] = [
    new ColumnHeaderItem('Id', 'id', ColumnType.STRING, false),
    new ColumnHeaderItem('Name', 'name', ColumnType.STRING, false),
    new ColumnHeaderItem('Email', 'email', ColumnType.STRING, true)
];

export const filters = getSearchFilters(headerItems);

/**
 * Table cells are filled by column/ Map
 */
export const contentItems: ContentItem[] = [
    new ContentItem(
        '1',
        'user1',
        'user1@localhost.de',
        new Map<string, TableColumnType>([
            ['id', '1'],
            ['name', 'user1'],
            ['email', 'user1@localhost.de']
        ])
    ),
    new ContentItem(
        '2',
        'user2',
        'user2@localhost.de',
        new Map<string, TableColumnType>([
            ['id', '2'],
            ['name', 'user2'],
            ['email', 'user2@localhost.de']
        ])
    ),
    new ContentItem(
        '3',
        'user3',
        'user3@localhost.de',
        new Map<string, TableColumnType>([
            ['id', '3'],
            ['name', 'user3'],
            ['email', 'user3@localhost.de']
        ])
    ),
    new ContentItem(
        '4',
        'user4',
        'user4@localhost.de',
        new Map<string, TableColumnType>([
            ['id', '4'],
            ['name', 'user4'],
            ['email', 'user4@localhost.de']
        ])
    ),
    new ContentItem(
        '5',
        'user5',
        'user5@localhost.de',
        new Map<string, TableColumnType>([
            ['id', '5'],
            ['name', 'user5'],
            ['email', 'user5@localhost.de']
        ])
    )
];

export const multiSelectList = getSelectList(headerItems, contentItems);

export const resizeableTableData = [
    {
        id: '123456',
        tardiness: '83 day(s)',
        start_at: '12.03.2026 07:00',
        finish_at: '24.05.2026 08:03',
        latest_end: '02.03.2026 00:00'
    },
    {
        id: '789101',
        tardiness: '69 day(s)',
        start_at: '15.12.2025 05:02',
        finish_at: '15.12.2025 05:03',
        latest_end: '07.10.2025 00:00'
    },
    {
        id: '112345',
        tardiness: '54 day(s)',
        start_at: '09.02.2026 07:00',
        finish_at: '09.02.2026 07:05',
        latest_end: '17.12.2025 00:00'
    }
];

export function formatLabel(key: string): string {
    return key
        .replace(/_/g, ' ') // snake_case → "snake case"
        .replace(/([a-z])([A-Z])/g, '$1 $2') // camelCase → "camel Case"
        .replace(/\b\w/g, (char) => char.toUpperCase()); // capitalize words
}

export function getColumns(entry: any): string[] {
    return Object.keys(entry);
}

export function getColumnKeys(entry: any): any {
    const columnKeys: any = {};
    for (const key of Object.keys(entry)) {
        columnKeys[key] = formatLabel(key);
    }
    return columnKeys;
}

/**
 * Gets search filters to header items
 */
export function getSearchFilters(
    headerItemsTasks: ColumnHeaderItem[]
): SearchFilter[] {
    return headerItemsTasks.map((item) => {
        return new SearchFilter(item.property, item.type, [], '');
    });
}

/**
 * Loads list for multi select components
 * @param headerItemsTasks
 * @param multiSelectList
 */
export function getSelectList(
    headerItemsTasks: ColumnHeaderItem[],
    multiSelectList: any
): { [key: string]: TableColumnType[] } {
    const itemsWithMultiSelect: MultiSelectItem[] = headerItemsTasks
        .filter((item: ColumnHeaderItem) => item.canFiltered)
        .map((item: ColumnHeaderItem) => {
            return new MultiSelectItem(
                item.property,
                getSelectFilters(item, multiSelectList)
            );
        });

    multiSelectList = itemsWithMultiSelect.reduce(function (acc: any, cur) {
        acc[cur.property] = cur.items;
        return acc;
    }, {});

    return multiSelectList;
}

/**
 * Gets item list to multi select filter
 * @param item
 * @returns
 */
export function getSelectFilters(
    columnItem: ColumnHeaderItem,
    items: ContentItem[]
): string[] {
    return [
        ...new Set(
            items.map(
                (item) =>
                    item[
                        columnItem.property as keyof ContentItem
                    ]?.toString() || ''
            )
        )
    ].sort((a, b) => compare(a, b, true));
}

/**
 * Compares/ Sorts items
 * @param a
 * @param b
 * @param isAsc
 * @returns
 */
export function compare(
    a: number | string,
    b: number | string,
    isAsc: boolean
): number {
    return isAsc ? (a > b ? 1 : a < b ? -1 : 0) : a > b ? -1 : a < b ? 1 : 0;
}
