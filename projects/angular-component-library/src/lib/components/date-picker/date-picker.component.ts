import { CommonModule, formatDate } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Platform, PlatformModule } from '@angular/cdk/platform';
import { cloneDeep } from 'lodash';
import { TranslateService } from '@ngx-translate/core';
import { IconService } from '../../services/icon.service';


/**
 * Component select date
 * Note -> :not(p) is only a pseudo-selector with no effect,
 * it is used to  handle Component ID generation collision errors
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
    selector: 'date-picker-component:not(p)',
    standalone: true,
    imports: [CommonModule, FormsModule, FontAwesomeModule, PlatformModule],
    templateUrl: './date-picker.component.html',
    styleUrls: ['./date-picker.component.scss'],
})
export class DatePickerComponent implements OnInit {
    @Input() date?: Date | string; // date is string after change in date picker
    @Input() withInput?: boolean = true;
    @Input() clear?: boolean = true;

    @Output() dateChanged = new EventEmitter<Date>();

    faCalender: IconDefinition;
    showOverlayBtn = true;
    randomId: string = Math.floor(Math.random() * 16777215).toString(16);

    dateBefore: Date | string = '';

    constructor(
        public platform: Platform,
        private iconService: IconService,
        private translateService: TranslateService,
    ) {
        this.faCalender = this.iconService.faCalendar;
    }

    ngOnInit() {
        //hide overlay button on ios, safari or webkit because it does not work
        if (this.platform.IOS || this.platform.SAFARI || this.platform.WEBKIT) {
            this.showOverlayBtn = false;
        }

        if (this.date) {
            this.dateBefore = cloneDeep(this.date);
        }
    }

    /**
     * Changes selected date
     */
    changeDate(event: Event): void {
        if (this.date) {
            if (typeof this.date === 'string') {
                this.date = new Date(this.date);
            }

            this.dateBefore = cloneDeep(this.date);

            this.dateChanged.emit(this.date);
        } else {
            // date is cleared by clear button
            // note: clear button is not shown in every browser -> handle state
            // if date is invalid date and clearing is false/ not supported -> reset invalid date with date before
            if (!this.clear) {
                this.date = new Date(this.dateBefore);

                this.dateBefore = cloneDeep(this.date);

                const inputDateElement: HTMLInputElement | null = document.querySelector(
                    '#date-input-' + this.randomId,
                );

                const localeId =
                    this.translateService.currentLang +
                    '-' +
                    this.translateService.currentLang.toUpperCase();

                if (inputDateElement) {
                    inputDateElement.value = formatDate(this.date, 'yyyy-MM-dd', localeId);
                }
            }
        }
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
