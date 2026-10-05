import { Meta, StoryObj } from '@storybook/angular';
import { TOGGLE_BTN_HEIGHTS, ToggleBtnComponent } from './toggle-btn.component';
import { fn } from 'storybook/test';

const meta: Meta<ToggleBtnComponent> = {
    title: 'Components/Toggle Btn',
    component: ToggleBtnComponent,
    argTypes: {
        label: { control: 'text' },
        checked: { control: 'boolean' },
        isDisabled: { control: 'boolean' },
        customClass: {
            control: 'text',
            description:
                'Optional custom CSS classes for project-specific styling.'
        },
        classStyle: {
            control: false,
            description: 'Deprecated: use customClass instead.'
        },
        toggleHeight: {
            control: 'radio',
            options: [...TOGGLE_BTN_HEIGHTS].reverse()
        },
        checkedChange: { action: 'changed' }
    },
    args: {
        checkedChange: fn(),
        toggleHeight: 30
    },
    tags: ['autodocs']
};
export default meta;

type Story = StoryObj<ToggleBtnComponent>;

export const On: Story = {
    args: {
        label: 'On',
        checked: true
    }
};

export const Off: Story = {
    args: {
        label: 'Off',
        checked: false
    }
};

export const Disabled: Story = {
    args: {
        label: 'Disabled',
        checked: true,
        isDisabled: true
    }
};

export const DefaultLarge: Story = {
    args: {
        label: 'Enabled',
        checked: true,
        toggleHeight: 30
    }
};

export const Small: Story = {
    args: {
        label: 'Compact',
        checked: false,
        toggleHeight: 25
    }
};

export const Tiny: Story = {
    args: {
        label: 'Tiny',
        checked: true,
        toggleHeight: 20
    }
};
