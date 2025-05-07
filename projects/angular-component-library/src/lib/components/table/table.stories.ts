import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { TableComponent } from './table.component';
import { ColumnHeaderItem, ColumnType } from '../../model/column-header-item.model';
import { getSearchFilters } from '../../model/util';
import { TableHeaderComponent } from './table-header/table-header.component';
import { action } from '@storybook/addon-actions';
import { fn } from '@storybook/test';

const headerItemsTasks: ColumnHeaderItem[] = [
    new ColumnHeaderItem('Id', 'id', ColumnType.STRING, false),
    new ColumnHeaderItem('Email', 'email', ColumnType.STRING, true),
    new ColumnHeaderItem('Name', 'name', ColumnType.STRING, true),
];

const filters = getSearchFilters(headerItemsTasks);

const defaultTemplateMock = 
`   <table-component [style.width]="'100%'">
        <div header>
            <table-header-component 
                [headerItemsTasks]="items" 
                [searchFilters]="filters" 
                (filterRowChange)="filterRowChange($event)" 
                (sortColumnChange)="sortColumnChange($event)">
            </table-header-component>
        </div>
        <div content></div>
    </table-component>
 `;


  
const meta: Meta<TableComponent> = {
    title: 'Components/Table',
    component: TableComponent,
    decorators: [
        moduleMetadata({
          imports: [TableComponent, TableHeaderComponent],
        }),
      ],
    parameters: {
        docs: {
            description: {
                story: 'Table component',
              }
        },
    },
    tags: ['autodocs']
};
export default meta;

type Story = StoryObj<TableComponent>;

export const Default: Story = {
    render: (args) => ({
        props: {
            ...args,
            items: headerItemsTasks,
            filters: filters,
            filterRowChange: (event: any) => { action('filter')(event) },
            sortColumnChange: (event: any) =>  { action('sort')(event) },
        },
        template: defaultTemplateMock,
      }),
};
