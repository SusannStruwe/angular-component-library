import type { StorybookConfig } from '@storybook/angular';

process.env.NODE_ENV = 'development';

const config: StorybookConfig = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-docs',
        '@storybook/addon-essentials',
        '@storybook/addon-onboarding',
        '@storybook/addon-interactions',
    ],
    framework: {
        name: '@storybook/angular',
        options: {}
    },
    docs: {
        autodocs: true
    }
};

export default config;
