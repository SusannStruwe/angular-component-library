import { Meta, StoryObj } from '@storybook/angular';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { DropzoneComponent } from './dropzone.component';
import { Icons } from '../../model/icons';

const iconOptions: Record<string, IconDefinition> = {
    upload: Icons.faUpload,
    file: Icons.faFile,
    info: Icons.faCircleInfo
};

const meta: Meta<DropzoneComponent> = {
    title: 'Components/Dropzone',
    component: DropzoneComponent,
    tags: ['autodocs'],
    argTypes: {
        choseFileLabel: { control: 'text' },
        title: { control: 'text' },
        subtitle: { control: 'text' },
        icon: {
            control: 'select',
            options: Object.keys(iconOptions),
            mapping: iconOptions
        },
        fileListDisplay: {
            control: 'select',
            options: ['detailed', 'summary', 'none']
        },
        showButtonIcon: { control: 'boolean' },
        allowedExtension: { control: 'object' },
        fileArrayLength: { control: 'number' },
        files: { control: { type: 'file', accept: '.json' } },
        maxSizeOfFiles: { control: 'number' },
        height: { control: 'text' },
        width: { control: 'text' }
    },
    decorators: [
        (story) => ({
            template: `<div style="width: 600px;">${story().template}</div>`,
            props: story().props
        })
    ]
};
export default meta;

type Story = StoryObj<DropzoneComponent>;

export const Sample: Story = {
    args: {
        height: '220px',
        width: '600px',
        title: 'JSON-Dateien hierher ziehen',
        subtitle: 'Mehrere Dateien koennen gleichzeitig ausgewaehlt werden.',
        icon: Icons.faUpload,
        showButtonIcon: false,
        fileListDisplay: 'summary',
        allowedExtension: ['json'],
        choseFileLabel: 'Load Input files',
        maxSizeOfFiles: null
    }
};
