import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Platform, PlatformModule } from '@angular/cdk/platform';
import { IconService } from '../../services/icon.service';


/**
 * Component select date
 *
 * @howToUse
 * ```
 * <date-picker-component
 *   [date]="selectedDate"
 *   [withInput]="true"
 *   (dateChanged)="dateChanged($event)">
 * </date-picker-component>
 * ```
 */
@Component({
    selector: 'date-picker-component',
    standalone: true,
    imports: [CommonModule, FormsModule, FontAwesomeModule, PlatformModule],
    templateUrl: './date-picker.component.html',
    styleUrls: ['./date-picker.component.scss'],
})
export class DatePickerComponent implements OnInit {
    @Input() date?: Date | string; // date is string after change in date picker
    @Input() withInput?: boolean = true;

    @Output() dateChanged = new EventEmitter<Date>();

    faCalender: IconDefinition;
    showOverlayBtn = true;
    randomId: string = Math.floor(Math.random() * 16777215).toString(16);

    constructor(
        public platform: Platform,
        private iconService: IconService,
    ) {
        this.faCalender = this.iconService.faCalendar;
    }

    ngOnInit() {
        //hide overlay button on ios, safari or webkit because it does not work
        if (this.platform.IOS || this.platform.SAFARI || this.platform.WEBKIT) {
            this.showOverlayBtn = false;
        }
    }

    /**
     * Changes selected date
     */
    changeDate(event: Event): void {
        if (typeof this.date === 'string') {
            this.date = new Date(this.date);
        }
        this.dateChanged.emit(this.date);
    }

    /**
     * Show menu to input type date
     */
    showDatePicker() {
        const inputDateElement: HTMLInputElement | null = document.querySelector(
            '#date-input-' + this.randomId,
        );
        if (inputDateElement) {
            inputDateElement.showPicker();
        }
    }
}
