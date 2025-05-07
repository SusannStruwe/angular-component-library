import { Meta, StoryObj } from '@storybook/angular';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faCheck, faChevronDown, faFilter, faInfoCircle, faSpinner, faTrash } from '@fortawesome/free-solid-svg-icons';
import { fn } from '@storybook/test';
import { MultiSelectComponent } from './multi-select.component';


const iconOptions: Record<string, IconDefinition> = {
    faChevronDown: faChevronDown,
    faCheck: faCheck,
    faFilter: faFilter,
    faInfoCircle: faInfoCircle,
    faSpinner: faSpinner,
    faTrash: faTrash,
};

const selectItems = [ 'item1', 'item2', 'item3'];


const meta: Meta<MultiSelectComponent> = {
    title: 'Components/Select/ Multi',
    component: MultiSelectComponent,
    parameters: {
        docs: {
            description: {
                story: 'Component to select multiple items.',
              }
        },
    },
    argTypes: {
        items: {control: 'object'},
        label: {control: 'text'},
        faIcon: {
            control: {
                type: 'select'
            },
            options: Object.keys(iconOptions),
            mapping: iconOptions
        },
        withFilter: { control: 'boolean' },
        filterPlaceholder: { control: 'text' },
        backgroundColor: {control: 'text'},
        itemsSelected: { action: 'selected'}
    },
    args: {
        label: '',
        items: [],
        itemsSelected: fn()
    },
    tags: ['autodocs']
};
export default meta;

type Story = StoryObj<MultiSelectComponent>;

export const Default: Story = {
    args: {
        label: 'Label',
        faIcon: faFilter,
        items: selectItems,
        backgroundColor: 'green'
    },
};

export const WithFilter: Story = {
    args: {
        faIcon: faFilter,
        items: selectItems,
        withFilter: true,
        
        filterPlaceholder: 'Select...',
        backgroundColor: '#486bff'
    },
};