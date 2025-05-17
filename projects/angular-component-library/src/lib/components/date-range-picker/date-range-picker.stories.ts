import { Meta, StoryObj } from '@storybook/angular';
import { DateRangePickerComponent } from './date-range-picker.component';
import { fn } from '@storybook/test';


const meta: Meta<DateRangePickerComponent> = {
    title: 'Components/Date Picker/Date Range',
    component: DateRangePickerComponent,
    parameters: {
        docs: {
            description: {
                component: `
 A date range picker component. 
                 `
            }
        }
    },
    argTypes: {
        startDate: { control: 'date' , value: new Date()},
        endDate: { control: 'date' , value: new Date()},
        startDateChange: { action: 'changed' },
        endDateChange: { action: 'changed' },
    },
    args: { 
        startDateChange: fn(),
        endDateChange: fn()
    },
    tags: ['autodocs']
};
export default meta;

type Story = StoryObj<DateRangePickerComponent>;

export const Sample: Story = {
    args: {
        startDate: new Date(),
        endDate: new Date()
    }
};
