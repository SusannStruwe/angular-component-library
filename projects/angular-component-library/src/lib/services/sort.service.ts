import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SortColumnEvent } from '../model/sort-column-event.model';


/**
 * Sort service to get selected sort column event
 */
@Injectable({
    providedIn: 'root'
})
export class SortService {
    private columnSortedSource = new Subject<SortColumnEvent>();

    columnSorted$ = this.columnSortedSource.asObservable();

    columnSorted(event: SortColumnEvent) {
        this.columnSortedSource.next(event);
    }
}
