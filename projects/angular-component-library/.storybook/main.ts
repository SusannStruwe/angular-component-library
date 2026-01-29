import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
    stories: [
        '../src/**/*.mdx',
        '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'
    ],

    addons: [
        '@storybook/addon-docs',
        '@storybook/addon-onboarding',
        '@storybook/addon-a11y',
        { name: 'storybook-design-token', options: { preserveCSSVars: true } }
        // note @angular-devkit/build-angular" only needed for storybook version. angular upgrade removed this lib
    ],

    framework: {
        name: '@storybook/angular',
        options: {}
    },

    core: {
        builder: {
            name: '@storybook/builder-webpack5',
            options: {
                fsCache: false,
                lazyCompilation: false
            }
        }
    },

    webpackFinal: async (config, { configType }) => {
        const mode =
            typeof configType === 'string'
                ? configType.toLowerCase()
                : 'development';

        config.performance = {
            maxAssetSize: 5000000,
            maxEntrypointSize: 5000000
        };

        // stop lazy loading
        config.experiments = {
            ...config.experiments,
            lazyCompilation: false
        };

        config.plugins = config.plugins?.filter(
            (plugin: any) =>
                !(
                    plugin?.constructor?.name === 'DefinePlugin' &&
                    plugin?.definitions?.['process.env.NODE_ENV'] !== undefined
                )
        );

        return config;
    },

    staticDirs: ['static']
};

export default config;
