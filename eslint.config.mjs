import js from '@eslint/js';
import angular from 'angular-eslint';
import prettier from 'eslint-config-prettier/flat';
import storybook from 'eslint-plugin-storybook';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    {
        ignores: ['coverage/**', 'dist/**', 'storybook-static/**']
    },
    {
        files: ['projects/angular-component-library/**/*.ts'],
        extends: [
            js.configs.recommended,
            ...tseslint.configs.recommended,
            ...angular.configs.tsRecommended,
            prettier
        ],
        processor: angular.processInlineTemplates,
        rules: {
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-unused-vars': 'off',
            '@angular-eslint/directive-selector': [
                'error',
                {
                    type: 'attribute',
                    prefix: [],
                    style: 'camelCase'
                }
            ],
            '@angular-eslint/component-selector': [
                'error',
                {
                    type: 'element',
                    prefix: [],
                    style: 'kebab-case'
                }
            ]
        }
    },
    {
        files: ['projects/angular-component-library/**/*.html'],
        extends: [
            ...angular.configs.templateRecommended,
            ...angular.configs.templateAccessibility,
            prettier
        ],
        rules: {}
    },
    {
        files: ['projects/angular-component-library/src/lib/stories/**/*.ts'],
        rules: {
            '@typescript-eslint/consistent-type-imports': [
                'error',
                { disallowTypeAnnotations: false }
            ]
        }
    },
    ...storybook.configs['flat/recommended']
);
