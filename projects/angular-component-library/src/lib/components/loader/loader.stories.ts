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
    tags: ['autodocs'],
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
        paddingTop: { control: 'text'},
    },
    args: {
        paddingTop: '20%',
    }
};
export default meta;

type Story = StoryObj<LoaderComponent>;

export const Sample: Story = {
    args: {
       label: 'Loading...',
       animation: AnimationStyle.EASE,
       loaderStyle: LoaderStyle.SPINNER,
       paddingTop: '0px'
    }
};