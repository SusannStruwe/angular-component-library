import { Meta, StoryObj } from '@storybook/angular';
import { DatePickerComponent } from './date-picker.component';
import { fn } from '@storybook/test';

const meta: Meta<DatePickerComponent> = {
    title: 'Components/Date Picker/Date',
    component: DatePickerComponent,
    parameters: {
        docs: {
            description: {
                component: `
 A date picker component.

 A date can be from type Date or string. The format has to be \`yyyy-mm-dd\` or \`yyyy-mm-ddTHH:MM\`  -> no time zone.
 
                 `
            }
        }
    },
    argTypes: {
        date: { control: 'text' },
        withInput: { control: 'boolean' },
        clear: { control: 'boolean', value: true },
        dateChanged: { action: 'changed', value: true  }
    },
    args: { dateChanged: fn() },
    tags: ['autodocs']
};
export default meta;

type Story = StoryObj<DatePickerComponent>;

export const Sample: Story = {
    args: {
        date: '2025-05-11',
        withInput: true
    }
};
