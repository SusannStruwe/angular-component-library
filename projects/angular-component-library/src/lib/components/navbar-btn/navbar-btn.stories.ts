import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
    faCheck,
    faExclamation,
    faInfoCircle,
    faSpinner,
    faTrash
} from '@fortawesome/free-solid-svg-icons';
import { Meta, StoryObj } from '@storybook/angular';
import { NavbarBtnComponent } from './navbar-btn.component';

const iconOptions: Record<string, IconDefinition> = {
    faCheck: faCheck,
    faExclamation: faExclamation,
    faInfoCircle: faInfoCircle,
    faSpinner: faSpinner,
    faTrash: faTrash
};

const meta: Meta<NavbarBtnComponent> = {
    title: 'Components/Buttons/Navbar Btn',
    component: NavbarBtnComponent,
    decorators: [
        (story) => ({
            template: `<div [style.background]="'black'">${story().template}</div>`,
            props: story().props
        })
    ],
    argTypes: {
        label: { control: 'text' },
        faIcon: {
            control: {
                type: 'select'
            },
            options: Object.keys(iconOptions),
            mapping: iconOptions
        },
        disabled: { control: 'boolean' },
        classStyle: { control: 'text' },
        active: { control: 'boolean' }
    },
    tags: ['autodocs']
};
export default meta;

type Story = StoryObj<NavbarBtnComponent>;

export const Sample: Story = {
    args: {
        faIcon: faCheck
    }
};

export const Active: Story = {
    args: {
        active: true,
        faIcon: faInfoCircle
    }
};

export const Disabled: Story = {
    args: {
        disabled: true,
        faIcon: faInfoCircle
    }
};
