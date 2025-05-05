import { Meta, StoryObj } from '@storybook/angular';
import { Icons } from '../../model/icons';
import { SegmentedBtnComponent } from './segmented-btn.component';
import { SegmentedBtnItem } from '../../model/segmented-btn.model';


const btnArray = [
    new SegmentedBtnItem('btn.day', '1', true, false, Icons.faInfoCircle),
    new SegmentedBtnItem('btn.week', '2', false, false, Icons.faInfoCircle),
    new SegmentedBtnItem('btn.month', '3', false, false, Icons.faInfoCircle),
];
const activeBtn: SegmentedBtnItem = btnArray[1];


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