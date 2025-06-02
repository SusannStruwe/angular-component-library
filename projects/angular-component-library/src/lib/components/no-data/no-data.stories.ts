import { Meta, StoryObj } from '@storybook/angular';
import { NoDataComponent } from './no-data.component';

const meta: Meta<NoDataComponent> = {
    title: 'Components/No Data',
    component: NoDataComponent,
    argTypes: {
        translationKey: { control: 'text' }
    },
    tags: ['autodocs']
};
export default meta;

type Story = StoryObj<NoDataComponent>;

export const Sample: Story = {
    args: {
        translationKey: 'data.noData'
    }
};
