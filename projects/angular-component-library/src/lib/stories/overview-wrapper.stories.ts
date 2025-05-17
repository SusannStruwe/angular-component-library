import { Meta, StoryObj } from '@storybook/angular';
import { OverviewWrapperComponent } from './overview-wrapper.component';

const meta: Meta<OverviewWrapperComponent> = {
    title: 'Overview',
    component: OverviewWrapperComponent,
    parameters: {
        docs: {
            disable: true, // 📛 verhindert die Nutzung von Compodoc-Daten
        },
    },
    tags: ['autodocs']
};
export default meta;

type Story = StoryObj<OverviewWrapperComponent>;

export const Default: Story = {};
