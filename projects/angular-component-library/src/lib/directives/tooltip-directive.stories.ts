import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { Component } from '@angular/core';
import { TooltipDirective } from './tooltip.directive';

@Component({
    template: `<p [tooltip]="'Hello'">Hello Directive</p>`,
    imports: [TooltipDirective]
})
class TestComponent {}

export default {
    title: 'Directives/Tooltip',
    component: TestComponent,
    decorators: [
        moduleMetadata({
            imports: [TooltipDirective]
        })
    ]
} as Meta;

type Story = StoryObj;

export const Sample: Story = {};
