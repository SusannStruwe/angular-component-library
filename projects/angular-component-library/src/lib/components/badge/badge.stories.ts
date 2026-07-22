import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
    faCheck,
    faExclamation,
    faInfo
} from '@fortawesome/free-solid-svg-icons';
import { Meta, StoryObj } from '@storybook/angular';
import { BadgeComponent } from './badge.component';

const iconOptions: Record<string, IconDefinition> = {
    faCheck: faCheck,
    faExclamation: faExclamation,
    faInfo: faInfo
};

const meta: Meta<BadgeComponent> = {
    title: 'Components/Badge',
    component: BadgeComponent,
    tags: ['autodocs'],
    argTypes: {
        label: { control: 'text' },
        borderRadius: { control: 'number' },
        customClass: {
            control: 'select',
            options: [
                'running',
                'failed',
                'success',
                'pending',
                'changes',
                'urgent',
                'frozen',
                'current',
                'manual',
                'free'
            ],
            description:
                'Optional custom CSS classes for project-specific styling.'
        },
        classStyle: {
            control: false,
            description: 'Deprecated: use customClass instead.'
        },
        isDisabled: { control: 'boolean' },
        postIcon: {
            control: {
                type: 'select'
            },
            options: Object.keys(iconOptions),
            mapping: iconOptions
        },
        preIcon: {
            control: {
                type: 'select'
            },
            options: Object.keys(iconOptions),
            mapping: iconOptions
        }
    }
};
export default meta;

type Story = StoryObj<BadgeComponent>;

export const Sample: Story = {
    args: {
        label: 'Sample',
        borderRadius: 10,
        isDisabled: false,
        postIcon: undefined,
        preIcon: undefined
    }
};

export const RunningWithPostIcon: Story = {
    args: {
        label: 'Running',
        borderRadius: 10,
        customClass: 'running',
        isDisabled: false,
        postIcon: faCheck,
        preIcon: undefined
    }
};

export const SuccessWithPreIcon: Story = {
    args: {
        label: 'Success',
        borderRadius: 10,
        customClass: 'success',
        isDisabled: false,
        postIcon: undefined,
        preIcon: faInfo
    }
};

export const Changes: Story = {
    args: {
        label: 1,
        borderRadius: 50,
        customClass: 'changes',
        isDisabled: false
    }
};
