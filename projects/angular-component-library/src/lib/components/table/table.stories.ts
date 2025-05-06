import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { TableComponent } from './table.component';
import { ColumnHeaderItem, ColumnType } from '../../model/column-header-item.model';
import { getSearchFilters } from '../../model/util';
import { TableHeaderComponent } from './table-header/table-header.component';

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
                (filterRowChange)="filterRows($event)" 
                (sortColumnChange)="sortColumn($event)">
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
    render: () => ({
        props: {
          items: headerItemsTasks,
          filters: filters,
          filterRows: (event: any) => console.log('Filter Rows', event),
          sortColumn: (event: any) => console.log('Sort Column', event),
        },
        template: defaultTemplateMock,
      }),
};
