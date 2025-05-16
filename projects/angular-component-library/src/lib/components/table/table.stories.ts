import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { TableComponent } from './table.component';
import {
    ColumnHeaderItem,
    ColumnType
} from '../../model/column-header-item.model';
import { ContentItem, getSearchFilters, getSelectList, TableColumnType } from '../../model/util';
import { TableHeaderComponent } from './table-header/table-header.component';
import { action } from '@storybook/addon-actions';
import { TableContentComponent } from './table-content/table-content.component';

const headerItems: ColumnHeaderItem[] = [
    new ColumnHeaderItem('Id', 'id', ColumnType.STRING, false),
    new ColumnHeaderItem('Name', 'name', ColumnType.STRING, true),
    new ColumnHeaderItem('Email', 'email', ColumnType.STRING, true),
];
const filters = getSearchFilters(headerItems);

/**
 * Table cells are filled by column/ Map 
 */
const contentItems: ContentItem[] = [
    new ContentItem("1", "user1", 'user1@localhost.de', new Map<string, TableColumnType>([ ["id", "1"], ["name", 'user1'], ["email", 'user1@localhost.de'] ])),
    new ContentItem("2", "user2",'user2@localhost.de', new Map<string, TableColumnType>([ ["id", "2"], ["name", 'user2'], ["email", 'user2@localhost.de'] ])),
    new ContentItem("3", "user3",'user3@localhost.de', new Map<string, TableColumnType>([ ["id", "3"], ["name", 'user3'], ["email", 'user3@localhost.de'] ])),
];

const multiSelectList = getSelectList(headerItems, contentItems);
console.log(contentItems)

const defaultTemplateMock = `   <table-component [style.width]="'100%'">
        <div header>
            <table-header-component 
                [headerItemsTasks]="items" 
                [searchFilters]="filters" 
                [multiSelectList]="multiSelectList" 
                (searchFilterChange)="searchFilterChange($event)" 
                (selectFilterChange)="selectFilterChange($event)"
                (sortColumnChange)="sortColumnChange($event)">
            </table-header-component>
        </div>
        <div content>
            <table-content-component
                [tableItems]="contentItems" 
                (tableItemSelected)="tableItemSelected($event)">
            </table-content-component>
        </div>
    </table-component>
 `;

const meta: Meta<TableComponent> = {
    title: 'Components/Table',
    component: TableComponent,
    decorators: [
        moduleMetadata({
            imports: [
                TableComponent, 
                TableHeaderComponent, 
                TableContentComponent]
        })
    ],
    parameters: {
        docs: {
            description: {
                story: 'Table component'
            }
        }
    },
    tags: ['autodocs']
};
export default meta;

type Story = StoryObj<TableComponent>;

export const Default: Story = {
    render: (args) => ({
        props: {
            ...args,
            items: headerItems,
            filters: filters,
            multiSelectList: multiSelectList,
            contentItems: contentItems,
            searchFilterChange: (event: any) => {
                action('filter')(event);
            },
            sortColumnChange: (event: any) => {
                action('sort')(event);
            },
            selectFilterChange: (event: any) => {
                action('select')(event);
            },
            tableItemSelected: (event: any) => {
                action('selected row')(event);
            }
        },
        template: defaultTemplateMock
    })
};
