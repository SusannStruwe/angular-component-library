import { CommonModule } from '@angular/common';
import {
    Component,
    ElementRef,
    EventEmitter,
    Input,
    OnInit,
    Output,
    ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Platform, PlatformModule } from '@angular/cdk/platform';
import { EditMode } from '../../model/edit-mode.enum';
import { IconService } from '../../services/icon.service';


/**
 * Component select date time
 *
 * Note: The format is "yyyy-MM-ddThh:mm" followed by optional ":ss" or ":ss.SSS".
 *
 * @howToUse
 * ```
 * <date-time-picker-component
 *   [date]="selectedDate"
 *   [withInput]="true"
 *   (dateChanged)="dateChanged($event)">
 * </date-time-picker-component>
 * ```
 */
@Component({
    selector: 'date-time-picker-component',
    standalone: true,
    imports: [CommonModule, FormsModule, FontAwesomeModule, PlatformModule],
    templateUrl: './date-time-picker.component.html',
    styleUrls: ['./date-time-picker.component.scss'],
})
export class DateTimePickerComponent implements OnInit {
    @Input() date: string | null = null;
    @Input() mode: EditMode = EditMode.WRITE;
    @Input() clockLabel?: string = "";
    @Input() withInput?: boolean = true; // shows only calender btn
    @Input() height?: number;
    @Input() minWidth?: number;

    @Output() dateChange = new EventEmitter<string>();

    @ViewChild('dateTimePicker') dateTimePickerRef?: ElementRef;

    faCalender: IconDefinition;

    showOverlayBtn = true;

    randomId: string = Math.floor(Math.random() * 16777215).toString(16);

    modes: typeof EditMode = EditMode;

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
        const value = this.dateTimePickerRef?.nativeElement.value;
        this.date = value;

        if (this.date) {
            this.dateChange.emit(this.date);
        }
    }

    /**
     * Show menu to input type date
     */
    showDatePicker() {
        const inputDateElement: HTMLInputElement | null = document.querySelector(
            '#date-time-input-' + this.randomId,
        );
        if (inputDateElement) {
            inputDateElement.showPicker();
        }
    }
}
