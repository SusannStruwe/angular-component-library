import { Meta, StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { InputComponent } from './input.component';

const meta: Meta<InputComponent> = {
    title: 'Components/Input',
    component: InputComponent,
    argTypes: {
        input: { control: 'text' },
        classStyles: {
            control: 'select',
            options: [
                '',
                'no-radius',
                'full-width',
                'small left',
                'small right'
            ]
        },
        placeholderText: { control: 'text' },
        type: { control: 'text' },
        width: { control: 'text' },
        inputChange: { action: 'change' }
    },
    args: {
        type: 'text',
        inputChange: fn()
    },
    tags: ['autodocs']
};
export default meta;

type Story = StoryObj<InputComponent>;

export const Sample: Story = {
    args: {
        input: '123456',
        width: '160px'
    }
};
