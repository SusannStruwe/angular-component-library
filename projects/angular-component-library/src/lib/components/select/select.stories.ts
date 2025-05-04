import { Meta, StoryObj } from '@storybook/angular';
import { SelectComponent } from './select.component';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faCheck, faChevronDown, faExclamation, faInfoCircle, faSpinner, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Icons } from '../../model/icons';
import { SelectItem } from '../../model/select-item.model';


const iconOptions: Record<string, IconDefinition> = {
    faChevronDown: faChevronDown,
    faCheck: faCheck,
    faExclamation: faExclamation,
    faInfoCircle: faInfoCircle,
    faSpinner: faSpinner,
    faTrash: faTrash,
};

const selectItems = [
    new SelectItem('select1', undefined, Icons.faInfoCircle),
    new SelectItem('select2', undefined, Icons.faInfoCircle),
    new SelectItem('select3'),
];
const selectedItem = new SelectItem('select1', undefined, Icons.faInfoCircle);

const meta: Meta<SelectComponent> = {
    title: 'Components/Select',
    component: SelectComponent,
    argTypes: {
        items: {control: 'object'},
        selectedItem: {control: 'object'},
        label: {control: 'text'},
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
        classStyle: { control: 'text' },
        withBlankOption: { control: 'boolean' },
        withDeselect: { control: 'boolean' },
        withFilter: { control: 'boolean' },
        filterPlaceholder: { control: 'text' },
        show: { control: 'boolean' },
    },
    tags: ['autodocs']
};
export default meta;

type Story = StoryObj<SelectComponent>;

export const Default: Story = {
    args: {
        label: 'Label: ',
        items: selectItems,
        selectedItem: selectedItem,
        filterPlaceholder: 'Select...',
        show: true
    }
};