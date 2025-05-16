import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { TabsViewComponent, templateMock } from './tabs-view.component';
import { TabComponent } from './tab/tab.component';
import { action } from '@storybook/addon-actions';
import { fn } from '@storybook/test';

const meta: Meta<TabsViewComponent> = {
    title: 'Components/TabsView',
    component: TabsViewComponent,
    decorators: [
        moduleMetadata({
            imports: [TabsViewComponent, TabComponent]
        })
    ],
    parameters: {
        docs: {
            description: {
                story: 'TabsView to switch content'
            }
        }
    },
    argTypes: {
        selectedTabChanged: { action: 'changed' }
    },
    args: { selectedTabChanged: fn() },
    tags: ['autodocs']
};
export default meta;

type Story = StoryObj<TabsViewComponent>;

export const Default: Story = {
    render: (args) => ({
        props: args,
        template: templateMock
    })
};

export const WithAlert: Story = {
    render: (args) => ({
        props: {
            ...args,
            selectedTabChanged: (payload: string) => {
                action('tabSwitched')(payload);
            }
        },
        template: templateMock
    })
};
