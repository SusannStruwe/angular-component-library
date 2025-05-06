import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { TabsViewComponent, templateMock } from './tabs-view.component';
import { TabComponent } from './tab/tab.component';
import { fn } from '@storybook/test';


const meta: Meta<TabsViewComponent> = {
    title: 'Components/TabsView',
    component: TabsViewComponent,
    decorators: [
        moduleMetadata({
          imports: [TabsViewComponent, TabComponent],
        }),
      ],
    parameters: {
        docs: {
            description: {
                story: 'TabsView to switch between dfferent contents',
              }
        },
    },
    args: { 
        selectedTabChanged: fn() 
    },
    tags: ['autodocs']
};
export default meta;

type Story = StoryObj<TabsViewComponent>;

export const Default: Story = {
    render: () => ({
        props: {
            selectedTabChange: (event: any) => alert('Selected tab changed to ' + event),
        },
        template: templateMock
    }),
};
