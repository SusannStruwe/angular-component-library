import { TranslateLoader } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';

export class FakeLoader implements TranslateLoader {
    getTranslation(lang: string): Observable<any> {
        const translations: { [key: string]: any } = {
            en: {
                upload: {
                    dropElement: {
                        choseFile: 'Datei wählen',
                        dropIt: '... oder per Drag & Drop reinziehen'
                    }
                },
                time: {
                    hoursShort: 'hours',
                    days: 'days',
                    minutesShort: 'min',
                },
                validation: {
                    maxDuration: '365 Tage'
                },
                scheduler: {
                    clock: 'Uhr'
                },
                btn: {
                    day: 'Tag',
                    week: 'Woche',
                    month: 'Monat'
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
                    hoursShort: 'hours',
                    days: 'days',
                    minutesShort: 'min',
                },
                validation: {
                    maxDuration: '365 Tage'
                },
                scheduler: {
                    clock: 'Uhr'
                },
                btn: {
                    day: 'Tag',
                    week: 'Woche',
                    month: 'Monat'
                }
            }
        };
        return of(translations[lang] || {});
    }
}
