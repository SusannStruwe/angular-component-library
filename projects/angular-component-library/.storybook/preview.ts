import { applicationConfig, type Preview } from '@storybook/angular';
import { setCompodocJson } from '@storybook/addon-docs/angular';
import docJson from '../documentation.json';
import {
    DEFAULT_LANGUAGE,
    ISOALTE_TRANSLATE_SERVICE,
    MissingTranslationHandler,
    TranslateCompiler,
    TranslateDefaultParser,
    TranslateFakeCompiler,
    TranslateLoader,
    TranslateParser,
    TranslateService,
    TranslateStore,
    USE_DEFAULT_LANG,
    USE_EXTEND
} from '@ngx-translate/core';
import { APP_INITIALIZER } from '@angular/core';
setCompodocJson(docJson);
import { FakeLoader } from '../src/lib/fake-translate-loader';

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
                runOnly: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'best-practice', 'wcag2aaa'],
            },
        },
    },
    decorators: [
        applicationConfig({
            providers: [
                {
                    provide: TranslateLoader,
                    useClass: FakeLoader
                },
                {
                    provide: TranslateCompiler,
                    useClass: TranslateFakeCompiler
                },
                {
                    provide: TranslateParser,
                    useClass: TranslateDefaultParser
                },
                {
                    provide: MissingTranslationHandler,
                    useValue: null
                },
                {
                    provide: USE_DEFAULT_LANG,
                    useValue: true
                },
                {
                    provide: DEFAULT_LANGUAGE,
                    useValue: true
                },
                {
                    provide: USE_EXTEND,
                    useValue: false
                },
                { provide: ISOALTE_TRANSLATE_SERVICE, useValue: false },
                TranslateStore,
                {
                    provide: APP_INITIALIZER,
                    useFactory: (translate: TranslateService) => () => {
                        translate.setDefaultLang('de');
                        translate.use('de');
                        return Promise.resolve();
                    },
                    deps: [TranslateService],
                    multi: true
                }
            ]
        })
    ]
};

export default preview;
