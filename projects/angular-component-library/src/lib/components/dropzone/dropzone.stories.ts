import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { DropzoneComponent } from './dropzone.component';

const meta: Meta<DropzoneComponent> = {
    title: 'Components/Dropzone',
    component: DropzoneComponent,
    tags: ['autodocs'],
    argTypes: {
        dropHeight: { control: 'number' },
        allowedExtension: { control: 'check', options: ['json'] },
        fileArrayLength: { control: 'number' },
        files: { control: { type: 'file', accept: '.json' } },
        maxSizeOfFiles: { control: 'number' }
    }
};
export default meta;

type Story = StoryObj<DropzoneComponent>;

export const Default: Story = {
    args: {
        dropHeight: 100
    }
};
