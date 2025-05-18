import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-docs',
        '@storybook/addon-essentials',
        '@storybook/addon-onboarding',
        '@storybook/addon-interactions'
    ],
    framework: {
        name: '@storybook/angular',
        options: {}
    },
    docs: {
        autodocs: true
    },
    webpackFinal: async (config) => {
        config.performance = {
            hints: false
        };
        return config;
    },
    staticDirs: ['static']
};

export default config;
