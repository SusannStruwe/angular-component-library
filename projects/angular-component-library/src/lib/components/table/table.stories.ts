import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { TableComponent } from './table.component';
import { TableHeaderComponent } from './table-header/table-header.component';
import { action } from 'storybook/actions';
import { TableContentComponent } from './table-content/table-content.component';
import {
    headerItems,
    filters,
    multiSelectList,
    contentItems
} from '../../stories/util';
import { TableStyle } from '../../model/table-style.enum';

const defaultTemplateMock = `   <table-component [style.width]="'600px'" [scrollbarWidth]="15">
        <div header>
            <table-header-component 
                [headerItemsTasks]="items" 
                [searchFilters]="filters" 
                [multiSelectList]="multiSelectList" 
                [showSearchLine]="showSearchLine"
                [tableStyle]="tableStyle"
                (searchFilterChange)="searchFilterChange($event)" 
                (selectFilterChange)="selectFilterChange($event)"
                (sortColumnChange)="sortColumnChange($event)">
            </table-header-component>
        </div>
        <div content>
            <table-content-component
                [tableItems]="contentItems" 
                (tableItemSelected)="tableItemSelected($event)"
                [tableStyle]="tableStyle">
            </table-content-component>
        </div>
    </table-component>
 `;

const meta: Meta<TableComponent> = {
    title: 'Components/Table/ Table',
    component: TableComponent,
    decorators: [
        moduleMetadata({
            imports: [
                TableComponent,
                TableHeaderComponent,
                TableContentComponent
            ]
        })
    ],
    parameters: {
        docs: {
            description: {
                component: `
A table component provides per default only a \`<div header></div>\` and \`<div content></div>\`, so you can fill the table how you want.

You can also use the table component with a \`table-header-component\` and a \`table-content-component\`. 
To use it you have to create the following items:

table-header-component
- headerItemsTasks from type \`ColumnHeaderItem\`
- searchFilters from type  \`SearchFilter\`
- multiSelectList from type \`{ [key: string]: TableColumnType[]}\`

table-content-component
- tableItems should have a parameter called \`columns\` from  type \`Map<string, TableColumnType>)\`

Note: Every logic to sort the content has to be implemented by yourself. You have also to set scrollbarWidth, if table table can be scrolled.

                `
            }
        }
    },
    tags: ['autodocs']
};
export default meta;

type Story = StoryObj<TableComponent>;

export const Sample: Story = {
    render: (args) => ({
        props: {
            ...args,
            items: headerItems,
            filters: filters,
            multiSelectList: multiSelectList,
            contentItems: contentItems,
            showSearchLine: true,
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

export const TableLightWithoutSearchLine: Story = {
    render: (args) => ({
        props: {
            ...args,
            items: headerItems,
            filters: filters,
            multiSelectList: multiSelectList,
            contentItems: contentItems,
            showSearchLine: false,
            tableStyle: TableStyle.LIGHT,
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

export const TableDarkWithoutSearchLine: Story = {
    render: (args) => ({
        props: {
            ...args,
            items: headerItems,
            filters: filters,
            multiSelectList: multiSelectList,
            contentItems: contentItems,
            showSearchLine: false,
            tableStyle: TableStyle.DARK,
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
