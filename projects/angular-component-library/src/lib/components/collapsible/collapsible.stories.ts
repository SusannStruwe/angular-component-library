import { Meta, StoryObj } from '@storybook/angular';
import { CollapsibleComponent } from './collapsible.component';
import {
    faChevronDown,
    faChevronUp,
    IconDefinition
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { within, expect, waitFor, userEvent } from 'storybook/test';

const defaultTemplateMock = `   <collapsible-component [show]="false" [classStyles]="'simple'">
        <div header>
            <p [style.width.px]="200">Header</p>
        </div>
        <div content>
            <p [style.padding-left.px]="15">Your Content</p>
        </div>
    </collapsible-component>
 `;

const faUp: IconDefinition = faChevronUp;
const faDown: IconDefinition = faChevronDown;
const show = false;
const iconTemplateMock = `   <collapsible-component [(show)]="show" [classStyles]="'simple'">
        <div header>
            <div class="flex-row">
                <p [style.width.px]="200">Header with icon</p>
                <fa-icon [icon]="show ? faUp : faDown"> </fa-icon>
            </div>
        </div>
        <div content>
            <p [style.padding-left.px]="15">Your Content</p>
        </div>
    </collapsible-component>
 `;

const meta: Meta<CollapsibleComponent> = {
    title: 'Components/Collapsible',
    component: CollapsibleComponent,
    parameters: {
        docs: {
            description: {
                component: `
 A collapsible component provides per default only a \`<div header></div>\` and \`<div content></div>\`, so you can fill the table how you want.

 You could also add a faIcon in header to show that the row can be toggled -> like in the example.
 
                 `
            }
        }
    },
    decorators: [
        (story) => {
            const storyObj = story();
            return {
                moduleMetadata: {
                    imports: [CollapsibleComponent, FontAwesomeModule]
                },
                template: storyObj.template,
                props: storyObj.props
            };
        }
    ],
    tags: ['autodocs']
};
export default meta;

type Story = StoryObj<CollapsibleComponent>;

export const Sample: Story = {
    render: (args) => ({
        props: {
            ...args
        },
        template: defaultTemplateMock
    }),
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        const header = (await canvas.findByTestId(
            'collapse-header'
        )) as HTMLInputElement;
        const content = (await canvas.findByTestId(
            'collapse-content'
        )) as HTMLInputElement;

        await waitFor(() => {
            expect(content.classList.contains('hide')).toBe(true);
            expect(content.classList.contains('show')).toBe(false);
        });

        await userEvent.click(header);

        await waitFor(() => {
            expect(content.classList.contains('show')).toBe(true);
            expect(content.classList.contains('hide')).toBe(false);
        });
    }
};

export const WithIcon: Story = {
    render: (args) => ({
        props: {
            ...args,
            faUp: faUp,
            faDown: faDown,
            show: show
        },
        template: iconTemplateMock
    }),
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        const header = (await canvas.findByTestId(
            'collapse-header'
        )) as HTMLInputElement;
        const content = (await canvas.findByTestId(
            'collapse-content'
        )) as HTMLInputElement;

        await waitFor(() => {
            expect(content.classList.contains('hide')).toBe(true);
            expect(content.classList.contains('show')).toBe(false);
        });

        await userEvent.click(header);

        await waitFor(() => {
            expect(content.classList.contains('show')).toBe(true);
            expect(content.classList.contains('hide')).toBe(false);
        });
    }
};
