import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-docs',
        '@storybook/addon-essentials',
        '@storybook/addon-onboarding',
        '@storybook/addon-interactions',
        { name: 'storybook-design-token', options: { preserveCSSVars: true } }
    ],
    framework: {
        name: '@storybook/angular',
        options: {}
    }
};

export default config;
