import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TooltipDirective } from './tooltip.directive';

@Component({
    template: `<p [tooltip]="'Hello'">Hello Directive</p>`,
    changeDetection: ChangeDetectionStrategy.Eager,
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
