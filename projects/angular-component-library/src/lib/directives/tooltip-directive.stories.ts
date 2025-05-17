import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { TooltipDirective } from 'angular-component-library';
import { Component } from '@angular/core';

@Component({
    template: `<p [tooltip]="'Hello'">Hello Directive</p>`,
    standalone: true,
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
