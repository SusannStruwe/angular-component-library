import { Meta, StoryObj } from '@storybook/angular';
import { SelectComponent, SelectStyle } from './select.component';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
    faCheck,
    faChevronDown,
    faExclamation,
    faInfoCircle,
    faSpinner,
    faTrash
} from '@fortawesome/free-solid-svg-icons';
import { Icons } from '../../model/icons';
import { SelectItem } from '../../model/select-item.model';
import { fn } from '@storybook/test';

const iconOptions: Record<string, IconDefinition> = {
    faChevronDown: faChevronDown,
    faCheck: faCheck,
    faExclamation: faExclamation,
    faInfoCircle: faInfoCircle,
    faSpinner: faSpinner,
    faTrash: faTrash
};

const selectStyle: typeof SelectStyle = SelectStyle;

const selectItems = [
    new SelectItem('select1', undefined, Icons.faInfoCircle),
    new SelectItem('select2', undefined, Icons.faInfoCircle),
    new SelectItem('select3')
];
const selectedItem = new SelectItem('select1', undefined, Icons.faInfoCircle);

const meta: Meta<SelectComponent> = {
    title: 'Components/Select/ Single',
    component: SelectComponent,
    parameters: {
        docs: {
            description: {
                story: 'Component to select items.'
            }
        }
    },
    argTypes: {
        items: { control: 'object' },
        selectedItem: { control: 'object' },
        label: { control: 'text' },
        faIcon: {
            control: {
                type: 'select'
            },
            options: Object.keys(iconOptions),
            mapping: iconOptions
        },
        faIconBefore: {
            control: {
                type: 'select'
            },
            options: Object.keys(iconOptions),
            mapping: iconOptions
        },
        classStyle: {  
            control: {
                type: 'select'
            },
            options: Object.keys(selectStyle),
             mapping: SelectStyle 
        },
        withBlankOption: { control: 'boolean' },
        withDeselect: { control: 'boolean' },
        withFilter: { control: 'boolean' },
        filterPlaceholder: { control: 'text' },
        show: { control: 'boolean' },
        btnWidth: { control: 'text' },
        maxMenuHeight: { control: 'text' },
        showChange: { action: 'show' },
        itemSelected: { action: 'selected' }
    },
    args: {
        showChange: fn(),
        itemSelected: fn()
    },
    tags: ['autodocs']
};
export default meta;

type Story = StoryObj<SelectComponent>;

export const Sample: Story = {
    args: {
        label: 'Label: ',
        items: selectItems,
        selectedItem: selectedItem,
        filterPlaceholder: 'Select...',
        show: true
    },
    parameters: {
        docs: {
            description: {
                story: 'Component to select items'
            }
        }
    }
};


export const Light: Story = {
    args: {
        label: 'Label: ',
        items: selectItems,
        selectedItem: selectedItem,
        filterPlaceholder: 'Select...',
        show: true,
        classStyle: SelectStyle.LIGHT,
        btnWidth: '600px',
        maxMenuHeight: '100px'
    },
    parameters: {
        docs: {
            description: {
                story: 'Component to select items'
            }
        }
    }
};
