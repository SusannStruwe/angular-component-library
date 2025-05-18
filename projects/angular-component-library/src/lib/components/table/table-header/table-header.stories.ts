import { Meta, StoryObj } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { filters, headerItems } from '../../../stories/util';
import { TableHeaderComponent } from './table-header.component';
import { fn } from '@storybook/test';

const meta: Meta<TableHeaderComponent> = {
    title: 'Components/Table/Table Header',
    component: TableHeaderComponent,
    parameters: {
        docs: {
            description: {
                component: `
A table header component.
                `
            }
        }
    },
    argTypes: {
        headerItemsTasks: { control: 'object' },
        searchFilters: { control: 'object' },
        multiSelectList: { control: 'object' },
        searchFilterChange: { action: 'search' },
        sortColumnChange: { action: 'sort' },
        selectFilterChange: { action: 'multi select' }
    },
    args: {
        searchFilterChange: fn(),
        sortColumnChange: fn(),
        selectFilterChange: fn()
    },
    tags: ['autodocs']
};
export default meta;

type Story = StoryObj<TableHeaderComponent>;

export const Sample: Story = {
    args: {
        headerItemsTasks: headerItems,
        searchFilters: filters,
        searchFilterChange: (event: any) => {
            action('filter')(event);
        },
        sortColumnChange: (event: any) => {
            action('sort')(event);
        },
        selectFilterChange: (event: any) => {
            action('select')(event);
        }
    }
};
