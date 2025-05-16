import { Meta, StoryObj } from '@storybook/angular';
import { DropzoneComponent } from './dropzone.component';

const meta: Meta<DropzoneComponent> = {
    title: 'Components/Dropzone',
    component: DropzoneComponent,
    tags: ['autodocs'],
    argTypes: {
        choseFileLabel: { control: 'text' },
        allowedExtension: { control: 'check', options: ['json'] },
        fileArrayLength: { control: 'number' },
        files: { control: { type: 'file', accept: '.json' } },
        maxSizeOfFiles: { control: 'number' },
        height: { control: 'text' },
        width: { control: 'text' }
    },
    decorators: [
        (story) => ({
            template: `<div style="width: 300px;">${story().template}</div>`,
            props: story().props
        })
    ]
};
export default meta;

type Story = StoryObj<DropzoneComponent>;

export const Default: Story = {
    args: {
        height: '100px',
        width: '300px',
        choseFileLabel: 'Load Input files'
    }
};
