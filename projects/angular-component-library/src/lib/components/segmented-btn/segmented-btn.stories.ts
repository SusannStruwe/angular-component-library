import { Meta, StoryObj } from '@storybook/angular';
import {
    activeBtn,
    btnArray,
    SegmentedBtnComponent
} from './segmented-btn.component';
import { fn } from 'storybook/test';

const meta: Meta<SegmentedBtnComponent> = {
    title: 'Components/Segmented Btn',
    component: SegmentedBtnComponent,
    parameters: {
        docs: {
            description: {
                story: 'Component to switch content'
            }
        }
    },
    argTypes: {
        btnArray: { control: 'object' },
        activeBtn: { control: 'object' },
        btnSelected: { action: 'selected' },
        activeBtnChange: { action: 'activeBtn' }
    },
    args: {
        btnSelected: fn(),
        activeBtnChange: fn()
    },
    tags: ['autodocs']
};
export default meta;

type Story = StoryObj<SegmentedBtnComponent>;

export const Sample: Story = {
    args: {
        btnArray: btnArray,
        activeBtn: activeBtn
    },
    parameters: {
        docs: {
            description: {
                story: 'Component to switch content'
            }
        }
    }
};
