import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
    faCheck,
    faExclamation,
    faInfo,
    faSpinner,
    faTrash
} from '@fortawesome/free-solid-svg-icons';
import { Meta, StoryObj } from '@storybook/angular';
import { BorderedBtnComponent } from 'angular-component-library';
import { HoverStyle } from '../../model/hover-style.enum';

const iconOptions: Record<string, IconDefinition> = {
    faCheck: faCheck,
    faExclamation: faExclamation,
    faInfo: faInfo,
    faSpinner: faSpinner,
    faTrash: faTrash
};
const hoverStyles: typeof HoverStyle = HoverStyle;

const meta: Meta<BorderedBtnComponent> = {
    title: 'Components/Buttons/BorderedBtn',
    component: BorderedBtnComponent,
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
        styleClass: {
            control: 'select',
            options: ['simple', 'filling', 'shining', 'delete', 'inverted']
        },
        width: { control: 'text' },
        isSpinning: { control: 'boolean' },
        isActive: { control: 'boolean' }
    },
    tags: ['autodocs']
};
export default meta;

type Story = StoryObj<BorderedBtnComponent>;

export const Default: Story = {
    args: {
        label: 'Default',
        isDisabled: false
    }
};

export const Delete: Story = {
    args: {
        label: 'Delete',
        isDisabled: false,
        faIcon: faTrash,
        styleClass: 'delete',
        width: '200px'
    }
};

export const Inverted: Story = {
    args: {
        label: 'Inverted',
        isDisabled: false,
        faIcon: faInfo,
        styleClass: 'inverted'
    }
};

export const Active: Story = {
    args: {
        label: 'Active',
        isDisabled: false,
        isActive: true,
        faIcon: faInfo
    }
};

export const Spinning: Story = {
    args: {
        label: 'Spinning',
        isDisabled: false,
        isSpinning: true,
        faIcon: faSpinner
    }
};

export const Disabled: Story = {
    args: {
        label: 'Disabled',
        isDisabled: true,
        faIcon: faInfo,
        styleClass: 'inverted'
    }
};
