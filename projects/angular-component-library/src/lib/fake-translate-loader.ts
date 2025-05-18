import { TranslateLoader } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';

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
