import { Meta, StoryObj } from '@storybook/angular';
import { DateTimePickerComponent } from './date-time-picker.component';
import { EditMode } from '../../model/edit-mode.enum';
import { fn } from '@storybook/test';

const types: typeof EditMode = EditMode;

const meta: Meta<DateTimePickerComponent> = {
    title: 'Components/Date Picker/Date time',
    component: DateTimePickerComponent,
    parameters: {
        docs: {
            description: {
                component: `
 A date time picker component.

 A date is from type string. The format has to be \`yyyy-mm-dd\` or \`yyyy-mm-ddTHH:MM\`  -> no time zone.
 
                 `
            }
        }
    },
    argTypes: {
        date: { control: 'text', value: '' },
        mode: {
            control: {
                type: 'select'
            },
            options: Object.values(types),
            mapping: EditMode,
            value: EditMode.WRITE
        },
        height: { control: 'number' },
        minWidth: { control: 'number' },
        dateChange: { action: 'changed' }
    },
    args: { dateChange: fn() },
    tags: ['autodocs']
};
export default meta;

type Story = StoryObj<DateTimePickerComponent>;

export const Sample: Story = {
    args: {
        date: '2025-05-11',
        withInput: true
    }
};
