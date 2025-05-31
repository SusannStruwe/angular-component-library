import { Meta, StoryObj } from '@storybook/angular';
import { DateTimePickerComponent } from './date-time-picker.component';
import { EditMode } from '../../model/edit-mode.enum';
import { fn, userEvent, waitFor, within, expect } from '@storybook/test';

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
        randomId: { control: 'text' },
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
        withInput: true,
        randomId: 'test123'
    },
    /*play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        const input = (await canvas.findByTestId(
            'date-input-test123'
        )) as HTMLInputElement;

        const newDate = '2025-06-01T14:30';

        await userEvent.clear(input);
        await userEvent.type(input, newDate);

        // trigger ngModelChange
        await userEvent.tab();

        await waitFor(() => {
            expect(input.value).toBe(newDate);
        });
    }*/
};
