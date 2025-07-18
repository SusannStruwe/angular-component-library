import { Meta, StoryObj } from '@storybook/angular';
import { ToggleBtnComponent } from './toggle-btn.component';
import { fn } from '@storybook/test';

const meta: Meta<ToggleBtnComponent> = {
    title: 'Components/Toggle Btn',
    component: ToggleBtnComponent,
    argTypes: {
        label: { control: 'text' },
        checked: { control: 'boolean' },
        isDisabled: { control: 'boolean' },
        classStyle: { control: 'text' },
        checkedChange: { action: 'changed' }
    },
    args: { checkedChange: fn() },
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
