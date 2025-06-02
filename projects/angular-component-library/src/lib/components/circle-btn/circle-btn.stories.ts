import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
    faCheck,
    faExclamation,
    faInfoCircle,
    faSpinner,
    faTrash
} from '@fortawesome/free-solid-svg-icons';
import { Meta, StoryObj } from '@storybook/angular';
import { CircleBtnComponent } from './circle-btn.component';

const iconOptions: Record<string, IconDefinition> = {
    faCheck: faCheck,
    faExclamation: faExclamation,
    faInfoCircle: faInfoCircle,
    faSpinner: faSpinner,
    faTrash: faTrash
};

const meta: Meta<CircleBtnComponent> = {
    title: 'Components/Buttons/Circle Btn',
    component: CircleBtnComponent,
    tags: ['autodocs'],
    argTypes: {
        ariaLabel: { control: 'text' },
        faIcon: {
            control: {
                type: 'select'
            },
            options: Object.keys(iconOptions),
            mapping: iconOptions
        },
        backgroundColor: { control: 'text' },
        isDisabled: { control: 'boolean' },
        classStyle: { control: 'text' },
        width: { control: 'text' },
        isSpinning: { control: 'boolean' },
        isActive: { control: 'boolean' }
    }
};
export default meta;

type Story = StoryObj<CircleBtnComponent>;

export const Sample: Story = {
    args: {
        isDisabled: false,
        faIcon: faCheck
    }
};

export const Active: Story = {
    args: {
        isDisabled: false,
        isActive: true,
        faIcon: faInfoCircle
    }
};

export const Disabled: Story = {
    args: {
        isDisabled: true,
        faIcon: faInfoCircle
    }
};

export const Spinning: Story = {
    args: {
        isDisabled: false,
        isSpinning: true,
        faIcon: faSpinner
    }
};
