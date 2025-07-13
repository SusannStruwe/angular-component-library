import { Meta, StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { DurationInputComponent } from './duration-input.component';
import { EditMode } from '../../model/edit-mode.enum';

const types: typeof EditMode = EditMode;

const meta: Meta<DurationInputComponent> = {
    title: 'Components/Duration Input',
    component: DurationInputComponent,
    argTypes: {
        seconds: { control: 'number' },
        mode: {
            control: {
                type: 'select'
            },
            options: Object.values(types),
            mapping: EditMode,
            value: EditMode.WRITE
        },
        maxDuration: { control: 'number' },
        height: { control: 'text' },
        secondsChange: { action: 'change' }
    },
    args: {
        secondsChange: fn()
    },
    tags: ['autodocs']
};
export default meta;

type Story = StoryObj<DurationInputComponent>;

export const Sample: Story = {
    args: {}
};
