import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { Platform, PlatformModule } from '@angular/cdk/platform';
import { parseISO } from 'date-fns';
import { DatePickerComponent } from '../date-picker/date-picker.component';

/**
 * Component select date
 *
 * @howToUse
 * ```
 * <date-range-picker-component
 *   (startDateChange)="startDateChanged($event)"
 *   (endDateChange)="endDateChanged($event)">
 * </date-range-picker-component>
 * ```
 */
@Component({
    selector: 'date-range-picker-component',
    imports: [
        CommonModule,
        FormsModule,
        FontAwesomeModule,
        PlatformModule,
        DatePickerComponent
    ],
    templateUrl: './date-range-picker.component.html',
    styleUrls: ['./date-range-picker.component.scss']
})
export class DateRangePickerComponent {
    @Input() startDate: Date = new Date();
    @Input() endDate: Date = new Date();
    @Input() randomIdStart?: string = Math.floor(
        Math.random() * 16777215
    ).toString(16);
    @Input() randomIdEnd?: string = Math.floor(
        Math.random() * 16777215
    ).toString(16);

    @Output() startDateChange = new EventEmitter<Date>();
    @Output() endDateChange = new EventEmitter<Date>();

    faCalender: IconDefinition = faCalendar;
    randomId: string = Math.floor(Math.random() * 16777215).toString(16);

    constructor(public platform: Platform) {}

    /**
     * Changes selected date
     */
    startChanged(event: Event): void {
        if (typeof this.startDate === 'string') {
            this.startDate = parseISO(this.startDate);
        }
        this.startDateChange.emit(this.startDate);
    }

    /**
     * Changes selected date
     */
    endChanged(event: Event): void {
        if (typeof this.endDate === 'string') {
            this.endDate = parseISO(this.endDate);
        }
        this.endDateChange.emit(this.endDate);
    }
}
