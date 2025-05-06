import { Meta, StoryObj } from '@storybook/angular';
import { activeBtn, btnArray, SegmentedBtnComponent } from './segmented-btn.component';


const meta: Meta<SegmentedBtnComponent> = {
    title: 'Components/Segmented Btn',
    component: SegmentedBtnComponent,
    parameters: {
        docs: {
            description: {
                story: '### Wichtig\n\nDieser Button ist für Primäraktionen gedacht.',
              }
        },
    },
    argTypes: {
        btnArray: {control: 'object'},
        activeBtn: {control: 'object'},
    },
    tags: ['autodocs']
};
export default meta;

type Story = StoryObj<SegmentedBtnComponent>;

export const Default: Story = {
    args: {
        btnArray: btnArray,
        activeBtn: activeBtn,
    },
    parameters: {
        docs: {
          description: {
            story: 'Default component with items to select',
          },
        },
      },
};