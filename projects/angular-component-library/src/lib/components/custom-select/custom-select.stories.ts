import { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import { CustomSelectComponent } from './custom-select.component';

const meta: Meta<CustomSelectComponent> = {
    title: 'Components/Select/ Custom Select',
    component: CustomSelectComponent,
    parameters: {
        docs: {
            description: {
                story: 'Custom select with projected trigger and menu content.'
            }
        }
    },
    argTypes: {
        show: { control: 'boolean' },
        showChange: { action: 'showChange' }
    },
    args: {
        show: false,
        showChange: fn()
    },
    tags: ['autodocs']
};

export default meta;

type Story = StoryObj<CustomSelectComponent>;

export const Default: Story = {
    render: (args) => ({
        props: args,
        template: `
            <div style="width: 280px; padding-bottom: 180px;">
                <custom-select-component [show]="show" (showChange)="showChange($event)">
                    <div
                        header
                        style="
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                            gap: 12px;
                            width: 100%;
                            min-width: 220px;
                            padding: 10px 14px;
                            border: 1px solid #d0d5dd;
                            border-radius: 8px;
                            background: #ffffff;
                            color: #101828;
                            cursor: pointer;
                        ">
                        <span>Choose an action...</span>
                    </div>

                    <div
                        body
                        style="
                            min-width: 220px;
                            padding: 8px 0;
                            background: #ffffff;
                            border-radius: 8px;
                        ">
                        <div style="padding: 10px 14px; cursor: pointer;">Open details</div>
                        <div style="padding: 10px 14px; cursor: pointer;">Duplicate entry</div>
                        <div style="padding: 10px 14px; cursor: pointer; color: #b42318;">Delete entry</div>
                    </div>
                </custom-select-component>
            </div>
        `
    })
};
