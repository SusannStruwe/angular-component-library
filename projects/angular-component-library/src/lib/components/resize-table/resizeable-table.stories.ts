import { Meta, StoryObj } from '@storybook/angular';
import {
    getColumnKeys,
    getColumns,
    resizeableTableData
} from '../../stories/util';
import { TableStyle } from '../../model/table-style.enum';
import { ResizableTableComponent } from './resizable-table.component';

const columnLabels = getColumnKeys(resizeableTableData[0]);
const columns = getColumns(resizeableTableData[0]);

const defaultTemplateMock = `   <resizable-table [tableWidth]="'600px'"
        [columnLabels]="columnLabels"
        [data]="data"
        [columns]="columns"
        [tableStyle]="tableStyle">
    </resizable-table>
 `;

const meta: Meta<ResizableTableComponent> = {
    title: 'Components/Table/ ResizeTable',
    component: ResizableTableComponent,
    argTypes: {
        columns: { control: 'object' },
        columnLabels: { control: 'object' },
        data: { control: 'object' }
    },
    tags: ['autodocs']
};
export default meta;

type Story = StoryObj<ResizableTableComponent>;

export const Sample: Story = {
    render: (args) => ({
        props: {
            ...args,
            columnLabels: columnLabels,
            data: resizeableTableData,
            columns: columns
        },
        template: defaultTemplateMock
    })
};

export const TableLightWithoutSearchLine: Story = {
    render: (args) => ({
        props: {
            ...args,
            columnLabels: columnLabels,
            data: resizeableTableData,
            columns: columns,
            tableStyle: TableStyle.LIGHT
        },
        template: defaultTemplateMock
    })
};

export const TableDarkWithoutSearchLine: Story = {
    render: (args) => ({
        props: {
            ...args,
            columnLabels: columnLabels,
            data: resizeableTableData,
            columns: columns,
            tableStyle: TableStyle.DARK
        },
        template: defaultTemplateMock
    })
};
