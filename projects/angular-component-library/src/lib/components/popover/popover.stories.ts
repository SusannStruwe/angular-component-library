import { Meta, StoryObj } from '@storybook/angular';
import { PopoverComponent } from './popover.component';

const meta: Meta<PopoverComponent> = {
    title: 'Components/Popover',
    component: PopoverComponent,
    parameters: {
        docs: {
            description: {
                component: `
A popover.

A popover component .

<img src="https://img.shields.io/badge/version-1.0.2-blue" alt="Version: 1.0.2" />

                `
            }
        }
    },
    tags: ['autodocs']
};
export default meta;

type Story = StoryObj<PopoverComponent>;

export const Sample: Story = {
    render: () => ({
        template: `<div [style.border]="'1px solid black'" [style.position]="'relative'" [style.height.px]="30" [style.width.px]="30"><popover-component [show]=true><p>Hello</p></popover-component></div>`
    })
};
