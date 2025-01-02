import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

/**
 * Loader service to hide and show loader
 */
@Injectable({
    providedIn: 'root',
})
export class LoaderService {
    public loader$: Subject<any>;
    public loaderLabel$: BehaviorSubject<string>;

    constructor() {
        this.loader$ = new Subject<any>();
        this.loaderLabel$ = new BehaviorSubject<string>('');
    }

    showLoader() {
        this.loader$.next(true);
    }

    hideLoader() {
        this.loader$.next(false);
    }

    setLoaderLabel(label: string) {
        this.loaderLabel$.next(label);
    }

}
