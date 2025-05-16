import { Meta, StoryObj } from '@storybook/angular';
import { TooltipComponent } from './tooltip.component';

const meta: Meta<TooltipComponent> = {
    title: 'Components/Tooltip',
    component: TooltipComponent,
    tags: ['autodocs']
};
export default meta;

type Story = StoryObj<TooltipComponent>;

export const Default: Story = {
    render: () => ({
        template: `<tooltip-component [style.position]="'relative'"></tooltip-component>`
    })
};
