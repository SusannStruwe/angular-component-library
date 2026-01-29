import { Meta, StoryObj } from '@storybook/angular';
import { contentItems } from '../../../stories/util';
import { TableContentComponent } from './table-content.component';
import { fn } from 'storybook/test';
import { action } from 'storybook/actions';

const meta: Meta<TableContentComponent> = {
    title: 'Components/Table/Table Content',
    component: TableContentComponent,
    parameters: {
        docs: {
            description: {
                component: `
A table content component.
                `
            }
        }
    },
    decorators: [
        (story) => ({
            template: `<div [style.width.px]="'600'">${story().template}</div>`,
            props: story().props
        })
    ],
    argTypes: {
        tableItems: { control: 'object' },
        tableHeight: { control: 'text' },
        selectedTableItem: { control: 'object' },
        selectedTableItemChange: { action: 'select' }
    },
    args: {
        selectedTableItemChange: fn(),
        tableHeight: '275px'
    },
    tags: ['autodocs']
};
export default meta;

type Story = StoryObj<TableContentComponent>;

export const Sample: Story = {
    args: {
        tableItems: contentItems,
        tableHeight: '200px',
        selectedTableItemChange: (event: any) => {
            action('selected row')(event);
        }
    }
};
