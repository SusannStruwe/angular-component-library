import { Meta, StoryObj } from '@storybook/angular';
import { DatePickerComponent } from './date-picker.component';

const meta: Meta<DatePickerComponent> = {
    title: 'Components/Date Picker',
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
        clear: { control: 'boolean' },
        dateChanged: { action: 'changed' }
    },
    tags: ['autodocs']
};
export default meta;

type Story = StoryObj<DatePickerComponent>;

export const Default: Story = {
    args: {
        date: '2025-05-11',
        withInput: true
    }
};
