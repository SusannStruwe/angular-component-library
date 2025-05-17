import { Meta, StoryObj } from '@storybook/angular';
import { TooltipComponent } from './tooltip.component';

const meta: Meta<TooltipComponent> = {
    title: 'Components/Tooltip',
    component: TooltipComponent,
    parameters: {
        docs: {
            description: {
                component: `
A tooltip.

Instead of this component you can use the tooltip directve \`[tooltip]=" 'text'"\`

<img src="https://img.shields.io/badge/version-1.0.2-blue" alt="Version: 1.0.2" />

                `
            }
        }
    },
    tags: ['autodocs']
};
export default meta;

type Story = StoryObj<TooltipComponent>;

export const Default: Story = {
    render: () => ({
        template: `<tooltip-component [style.position]="'relative'"></tooltip-component>`
    })
};
