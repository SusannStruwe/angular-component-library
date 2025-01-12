import { CommonModule } from '@angular/common';
import {
    Component,
    ElementRef,
    EventEmitter,
    HostListener,
    Input,
    OnInit,
    Output,
    ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Platform, PlatformModule } from '@angular/cdk/platform';
import { TranslateModule } from '@ngx-translate/core';
import { EditMode } from '../../model/edit-mode.enum';
import { IconService } from '../../services/icon.service';



/**
 * Component select date time
 * Note -> :not(p) is only a pseudo-selector with no effect,
 * it is used to  handle Component ID generation collision errors
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
    selector: 'date-time-picker-component:not(p)',
    standalone: true,
    imports: [CommonModule, FormsModule, FontAwesomeModule, PlatformModule, TranslateModule],
    templateUrl: './date-time-picker.component.html',
    styleUrls: ['./date-time-picker.component.scss'],
})
export class DateTimePickerComponent implements OnInit {
    @Input() date: string | null = '';
    @Input() withInput?: boolean = true; // shows only calender btn
    @Input() mode: EditMode = EditMode.WRITE;
    @Input() height?: number;
    @Input() minWidth?: number;

    @Output() dateChange = new EventEmitter<string | null>();
    @Output() pickerClosed = new EventEmitter<boolean>();

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
     * Show menu to input type date
     */
    showDatePicker() {
        if (this.dateTimePickerRef) {
            this.dateTimePickerRef.nativeElement.showPicker();
            this.dateTimePickerRef.nativeElement.focus();
        }
    }

    /**
     * Use focusout instead of change, because change is triggered on every character changed
     * the element loses its focus on an emit events an stops so the input
     * focusout is only called if the focus is out and the change has been completed
     */
    @HostListener('focusout')
    onFocusout() {
        this.dateChange.emit(this.date);
    }
}
