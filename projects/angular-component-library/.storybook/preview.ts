import { applicationConfig, type Preview } from '@storybook/angular';
import { setCompodocJson } from '@storybook/addon-docs/angular';
import docJson from '../documentation.json';
import {
    MissingTranslationHandler,
    TranslateCompiler,
    TranslateDefaultParser,
    TranslateLoader,
    TranslateParser,
    TranslateService,
    TranslateStore,
} from '@ngx-translate/core';
import { provideAppInitializer } from '@angular/core';
setCompodocJson(docJson);
import { FakeCompiler, FakeLoader, NoopMissingTranslationHandler } from '../src/lib/fake-translate-helper';

const preview: Preview = {
    parameters: {
        layout: 'centered',
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i
            }
        },
        actions: {
            argTypesRegex: '(Change|Clicked|Selected)$'
        },
        designToken: {
            defaultTab: 'Colors',
            tokens: {
                color: ['../assets/styles.scss']
            }
        },
        a11y: {
            options: {
                /*
                 * Opt in to running WCAG 2.x AAA rules
                 * Note that you must explicitly re-specify the defaults (all but the last array entry)
                 * See https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#options-parameter-examples for more details
                 */
                runOnly: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']
            }
        }
    },
    decorators: [
        applicationConfig({
            providers: [
                { provide: TranslateLoader, useClass: FakeLoader },
                { provide: TranslateCompiler, useClass: FakeCompiler },
                { provide: TranslateParser, useClass: TranslateDefaultParser },
                { provide: MissingTranslationHandler, useClass: NoopMissingTranslationHandler },
                TranslateStore,
                TranslateService
            ]
        })
    ]
};

export default preview;
