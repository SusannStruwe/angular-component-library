import type { StorybookConfig } from '@storybook/angular';
import * as webpack from 'webpack';

const config: StorybookConfig = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-docs',
        '@storybook/addon-essentials',
        '@storybook/addon-onboarding',
        '@storybook/addon-interactions',
        '@storybook/addon-a11y',
    ],
    framework: {
        name: '@storybook/angular',
        options: {}
    },
    docs: {
        autodocs: true
    },
    webpackFinal: async (config, { configType }) => {
        const mode =
            typeof configType === 'string'
                ? configType.toLowerCase()
                : 'development';

        config.performance = {
            hints: false
        };
        // Remove old DefinePlugin with NODE_ENV
        config.plugins = config.plugins?.filter(
            (plugin) =>
                !(
                    plugin instanceof webpack.DefinePlugin &&
                    'process.env.NODE_ENV' in (plugin.definitions || {})
                )
        );
        // Add new DefinePlugin with consistent NODE_ENV
        config.plugins?.push(
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify(mode)
            })
        );

        return config;
    },
    staticDirs: ['static']
};

export default config;
