import { Meta, StoryObj } from '@storybook/angular';
import { DateRangePickerComponent } from './date-range-picker.component';
import { fn, userEvent, waitFor, within, expect } from '@storybook/test';

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
        startDate: { control: 'date', value: new Date() },
        endDate: { control: 'date', value: new Date() },
        randomIdStart: { control: 'text' },
        randomIdEnd: { control: 'text' },
        startDateChange: { action: 'changed' },
        endDateChange: { action: 'changed' }
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
        endDate: new Date(),
        randomIdStart: '123',
        randomIdEnd: '456'
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        const inputStart = (await canvas.findByTestId(
            'date-input-123'
        )) as HTMLInputElement;
        const inputEnd = (await canvas.findByTestId(
            'date-input-456'
        )) as HTMLInputElement;

        const newStartDate = '2025-06-01';
        const newEndDate = '2025-06-30';

        await userEvent.clear(inputStart);
        await userEvent.type(inputStart, newStartDate);

        // trigger ngModelChange
        await userEvent.tab();

        await waitFor(() => {
            expect(inputStart.value).toBe(newStartDate);
        });

        await userEvent.clear(inputEnd);
        await userEvent.type(inputEnd, newEndDate);

        await userEvent.tab();

        await waitFor(() => {
            expect(inputEnd.value).toBe(newEndDate);
        });
    }
};
