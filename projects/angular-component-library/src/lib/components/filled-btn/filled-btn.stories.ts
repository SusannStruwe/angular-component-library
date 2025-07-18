import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
    faCheck,
    faExclamation,
    faInfoCircle,
    faSpinner,
    faTrash
} from '@fortawesome/free-solid-svg-icons';
import { Meta, StoryObj } from '@storybook/angular';
import { HoverStyle } from '../../model/hover-style.enum';
import { FilledBtnComponent } from './filled-btn.component';
import { action } from '@storybook/addon-actions';

const iconOptions: Record<string, IconDefinition> = {
    faCheck: faCheck,
    faExclamation: faExclamation,
    faInfoCircle: faInfoCircle,
    faSpinner: faSpinner,
    faTrash: faTrash
};
const hoverStyles: typeof HoverStyle = HoverStyle;

const templateMock = `   <filled-btn-component
        (click)="click($event)"
        [label]="'Click me!'">
    </filled-btn-component>
 `;

const meta: Meta<FilledBtnComponent> = {
    title: 'Components/Buttons/Filled Btn',
    component: FilledBtnComponent,
    argTypes: {
        ariaLabel: { control: 'text' },
        label: { control: 'text' },
        faIcon: {
            control: {
                type: 'select'
            },
            options: Object.keys(iconOptions),
            mapping: iconOptions
        },
        hoverStyle: {
            control: {
                type: 'select'
            },
            options: Object.values(hoverStyles),
            mapping: HoverStyle
        },
        showIcon: { control: 'boolean' },
        isDisabled: { control: 'boolean' },
        classStyle: {
            control: 'select',
            options: ['delete', 'not-emphrazed', 'navbar-btn']
        },
        width: { control: 'text' },
        isSpinning: { control: 'boolean' },
        isActive: { control: 'boolean' }
    },
    tags: ['autodocs']
};
export default meta;

type Story = StoryObj<FilledBtnComponent>;

export const Sample: Story = {
    args: {
        label: 'Sample',
        isDisabled: false
    }
};

export const WithAction: Story = {
    render: (args) => ({
        props: {
            ...args,
            click: () => {
                action('do something')();
            }
        },
        template: templateMock
    })
};

export const Active: Story = {
    args: {
        label: 'Active',
        isActive: true,
        faIcon: faInfoCircle
    }
};

export const Disabled: Story = {
    args: {
        label: 'Disabled',
        isDisabled: true,
        faIcon: faInfoCircle,
        classStyle: 'inverted'
    }
};

export const Delete: Story = {
    args: {
        label: 'Delete',
        faIcon: faTrash,
        classStyle: 'delete',
        width: '200px'
    }
};

export const DeleteActive: Story = {
    args: {
        label: 'DeleteActive',
        isActive: true,
        faIcon: faTrash,
        classStyle: 'delete',
        width: '200px'
    }
};

export const DeleteDisabled: Story = {
    args: {
        label: 'DeleteDisabled',
        isDisabled: true,
        isActive: true,
        faIcon: faTrash,
        classStyle: 'delete',
        width: '200px'
    }
};

export const Spinning: Story = {
    args: {
        label: 'Spinning',
        isSpinning: true,
        faIcon: faSpinner
    }
};

export const Icon: Story = {
    args: {
        faIcon: faInfoCircle
    }
};
