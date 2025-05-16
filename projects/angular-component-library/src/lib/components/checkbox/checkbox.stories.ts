import { Meta, StoryObj } from '@storybook/angular';
import { CheckboxComponent } from './checkbox.component';
import { EditMode } from '../../model/edit-mode.enum';
import { fn } from '@storybook/test';

const types: typeof EditMode = EditMode;

const meta: Meta<CheckboxComponent> = {
    title: 'Components/Checkbox',
    component: CheckboxComponent,
    tags: ['autodocs'],
    argTypes: {
        value: { control: 'boolean' },
        mode: {
            control: {
                type: 'select'
            },
            options: Object.values(types),
            mapping: EditMode,
            value: EditMode.WRITE
        },
        height: { control: 'number' },
        valueChange: { action: 'changed' }
    },
    args: { valueChange: fn() }
};
export default meta;

type Story = StoryObj<CheckboxComponent>;

export const Default: Story = {
    args: {
        value: true,
        mode: EditMode.WRITE
    }
};

export const ReadMode: Story = {
    args: {
        value: true,
        mode: EditMode.READ
    }
};
