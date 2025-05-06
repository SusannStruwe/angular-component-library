import { ColumnHeaderItem } from "./column-header-item.model";
import { SearchFilter } from "./search-filter.model";

/**
 * Gets search filters to header items
 */
export function getSearchFilters(headerItemsTasks: ColumnHeaderItem[]): SearchFilter[] {
    return headerItemsTasks.map((item) => {
        return new SearchFilter(item.property, item.type, [], '');
    });
}