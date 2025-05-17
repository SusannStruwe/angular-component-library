import { ColumnHeaderItem } from '../model/column-header-item.model';
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
        public columns: Map<string, TableColumnType>) {}
}

export enum DefaultColumKeys {
    id = 'id',
    name = 'name',
    email = 'email',
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
): { [key: string]: TableColumnType[]} {
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
