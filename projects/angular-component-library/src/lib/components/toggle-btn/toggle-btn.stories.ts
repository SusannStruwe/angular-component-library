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
        classStyle: { control: 'text' },
        appearance: { control: 'radio', options: ['default', 'custom'] },
        toggleHeight: {
            control: 'radio',
            options: [...TOGGLE_BTN_HEIGHTS].reverse()
        },
        checkedChange: { action: 'changed' }
    },
    args: {
        checkedChange: fn(),
        appearance: 'default',
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

export const Custom: Story = {
    args: {
        label: 'Enabled',
        checked: true,
        appearance: 'custom',
        toggleHeight: 30
    }
};

export const CustomSmall: Story = {
    args: {
        label: 'Compact',
        checked: false,
        appearance: 'custom',
        toggleHeight: 25
    }
};

export const CustomTiny: Story = {
    args: {
        label: 'Tiny',
        checked: true,
        appearance: 'custom',
        toggleHeight: 20
    }
};
