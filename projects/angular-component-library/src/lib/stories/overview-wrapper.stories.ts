import { Meta, StoryObj } from '@storybook/angular';
import { OverviewWrapperComponent } from './overview-wrapper.component';

const meta: Meta<OverviewWrapperComponent> = {
    title: 'Overview',
    component: OverviewWrapperComponent,
    tags: ['autodocs', 'test-only']
};
export default meta;

type Story = StoryObj<OverviewWrapperComponent>;

export const Sample: Story = {};
