import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { TabsViewComponent, templateMock } from './tabs-view.component';
import { TabComponent } from './tab/tab.component';


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
    tags: ['autodocs']
};
export default meta;

type Story = StoryObj<TabsViewComponent>;

export const Default: Story = {
    render: () => ({
        template: templateMock
    }),
};
