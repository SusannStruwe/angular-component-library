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
                }
            },
            de: {
                upload: {
                    dropElement: {
                        choseFile: 'Datei wählen',
                        dropIt: '... oder per Drag & Drop reinziehen'
                    }
                }
            }
        };
        return of(translations[lang] || {});
    }
}
