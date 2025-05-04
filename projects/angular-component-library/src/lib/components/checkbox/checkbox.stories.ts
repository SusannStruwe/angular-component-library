import { Meta, StoryObj } from '@storybook/angular';
import { CheckboxComponent } from './checkbox.component';
import { EditMode } from '../../model/edit-mode.enum';

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
        height: { control: 'number' }
    }
};
export default meta;

type Story = StoryObj<CheckboxComponent>;

export const Default: Story = {
    args: {
        value: true,
        mode: EditMode.WRITE
    }
};
