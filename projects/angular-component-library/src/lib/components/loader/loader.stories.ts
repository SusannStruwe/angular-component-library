import { Meta, StoryObj } from '@storybook/angular';
import { AnimationStyle, LoaderStyle } from '../../model/loader-style.enum';
import { LoaderComponent } from './loader.component';

const animationStyles: typeof AnimationStyle = AnimationStyle;

const loaderStyles: typeof LoaderStyle = LoaderStyle;

const meta: Meta<LoaderComponent> = {
    title: 'Components/Loader',
    component: LoaderComponent,
    parameters: {
        docs: {
            description: {
                component: `
 A loader component. 
                 `
            }
        }
    },
    argTypes: {
        label: { control: 'text', value: '' },
        loaderStyle: {
            control: {
                type: 'select'
            },
            options: Object.values(loaderStyles),
            mapping: LoaderStyle,
            value: LoaderStyle.DOT_LOADER
        },
        animation: {
            control: {
                type: 'select'
            },
            options: Object.values(animationStyles),
            mapping: AnimationStyle,
            value: AnimationStyle.LINEAR
        },
        paddingTop: { control: 'text' }
    },
    args: {
        paddingTop: '20%'
    },
    tags: ['autodocs', 'test-only']
};
export default meta;

type Story = StoryObj<LoaderComponent>;

export const Spinner: Story = {
    args: {
        label: 'Loading...',
        animation: AnimationStyle.EASE,
        loaderStyle: LoaderStyle.SPINNER,
        paddingTop: '0px'
    }
};

export const Spinner2: Story = {
    args: {
        label: 'Loading...',
        animation: AnimationStyle.EASE,
        loaderStyle: LoaderStyle.SPINNER2,
        paddingTop: '0px'
    }
};

export const DotLoader: Story = {
    args: {
        label: 'Loading...',
        animation: AnimationStyle.EASE,
        loaderStyle: LoaderStyle.DOT_LOADER,
        paddingTop: '0px'
    }
};

export const DotLoader2: Story = {
    args: {
        label: 'Loading...',
        animation: AnimationStyle.EASE,
        loaderStyle: LoaderStyle.DOT_LOADER2,
        paddingTop: '0px'
    }
};
