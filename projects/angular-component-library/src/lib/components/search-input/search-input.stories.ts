import { Meta, StoryObj } from '@storybook/angular';
import { SearchInputComponent } from './search-input.component';
import { fn } from '@storybook/test';

const meta: Meta<SearchInputComponent> = {
    title: 'Components/Search Input',
    component: SearchInputComponent,
    argTypes: {
        filter: { control: 'text' },
        classStyles: {
            control: 'select',
            options: [
                '',
                'no-radius',
                'full-width',
                'small left',
                'small right'
            ]
        },
        placeholderText: { control: 'text' },
        filterChange: { action: 'change' }
    },
    args: { filterChange: fn() },
    tags: ['autodocs']
};
export default meta;

type Story = StoryObj<SearchInputComponent>;

export const Sample: Story = {
    args: {
        filter: '123456'
    }
};
