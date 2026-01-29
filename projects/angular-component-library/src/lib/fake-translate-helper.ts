import {
    TranslateCompiler,
    InterpolatableTranslation
} from '@ngx-translate/core';
import {
    MissingTranslationHandler,
    MissingTranslationHandlerParams
} from '@ngx-translate/core';
import { TranslateLoader } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';

export class FakeCompiler implements TranslateCompiler {
    compile(value: string, lang: string): InterpolatableTranslation {
        // do nothing
        return value;
    }

    compileTranslations(translations: any, lang: string): any {
        const result: any = {};
        for (const key of Object.keys(translations)) {
            const value = translations[key];
            if (typeof value === 'string') {
                result[key] = this.compile(value, lang);
            } else if (typeof value === 'object') {
                result[key] = this.compileTranslations(value, lang);
            } else {
                result[key] = value;
            }
        }
        return result;
    }
}

export class NoopMissingTranslationHandler implements MissingTranslationHandler {
    handle(params: MissingTranslationHandlerParams) {
        return params.key;
    }
}

export class FakeLoader implements TranslateLoader {
    getTranslation(lang: string): Observable<any> {
        const translations: { [key: string]: any } = {
            en: {
                upload: {
                    dropElement: {
                        choseFile: 'Chose file',
                        dropIt: '... or drag & drop them in'
                    }
                },
                time: {
                    hoursShort: 'hour',
                    days: 'day(s)',
                    minutesShort: 'min'
                },
                validation: {
                    maxDuration: '365 Days'
                },
                scheduler: {
                    clock: ''
                },
                btn: {
                    day: 'Day',
                    week: 'Week',
                    month: 'Month'
                },
                general: {
                    search: 'Search ...'
                },
                data: {
                    noData: 'No data available'
                }
            },
            de: {
                upload: {
                    dropElement: {
                        choseFile: 'Datei wählen',
                        dropIt: '... oder per Drag & Drop reinziehen'
                    }
                },
                time: {
                    hoursShort: 'Stund(en)',
                    days: 'Tag(e)',
                    minutesShort: 'Min.'
                },
                validation: {
                    maxDuration: '365 Tage'
                },
                scheduler: {
                    clock: 'Uhr'
                },
                btn: {
                    day: 'Day',
                    week: 'Woche',
                    month: 'Monat'
                },
                general: {
                    search: 'Suchen ...'
                },
                data: {
                    noData: 'Keine Daten vorhanden'
                }
            }
        };
        return of(translations[lang] || {});
    }
}
