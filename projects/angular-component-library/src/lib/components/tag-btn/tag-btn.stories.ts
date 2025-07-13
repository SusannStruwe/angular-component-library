import { Meta, StoryObj } from '@storybook/angular';
import { TagBtnComponent } from './tag-btn.component';
import { fn } from '@storybook/test';

const meta: Meta<TagBtnComponent> = {
    title: 'Components/Tag',
    component: TagBtnComponent,
    argTypes: {
        label: { control: 'text' },
        backgroundColor: { control: 'text' },
        removeTagSelected: { action: 'changed' }
    },
    args: { removeTagSelected: fn() },
    tags: ['autodocs']
};
export default meta;

type Story = StoryObj<TagBtnComponent>;

export const Tag: Story = {
    args: {
        label: 'Tag 1'
    }
};

export const TagBackgroundGreen: Story = {
    args: {
        label: 'Tag 2',
        backgroundColor: 'green'
    }
};
