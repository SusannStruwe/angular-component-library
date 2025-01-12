import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { EditMode } from '../../model/edit-mode.enum';

/**
 * Component to select duration
 *
 * @howToUse
 * ```
 * <duration-input-component [seconds]="3000">
 * </duration-input-component>
 * ```
 */
@Component({
  selector: 'duration-input-component',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './duration-input.component.html',
  styleUrls: ['./duration-input.component.scss'],
})
export class DurationInputComponent implements OnChanges {
  @Input() seconds: string | number = 0;
  @Input() mode: EditMode = EditMode.WRITE;
  @Input() maxDuration?: number;
  @Input() daysLabel: string = '';
  @Input() hoursShortLabel: string = '';
  @Input() minutesShortTLabel: string = '';
  @Input() maxDurationLabel: string = '';

  @Output() secondsChange = new EventEmitter<number>();

  minutes = 0;
  hours = 0;
  days = 0;

  durationInputForm = new FormGroup({
    days: new FormControl('', [
      Validators.required,
      Validators.min(0),
      Validators.max(365),
    ]),
    hours: new FormControl('', [
      Validators.required,
      Validators.min(0),
      Validators.max(24),
    ]),
    minutes: new FormControl('', [
      Validators.required,
      Validators.min(0),
      Validators.max(60),
    ]),
  });

  modes: typeof EditMode = EditMode;

  randomId: string = Math.floor(Math.random() * 16777215).toString(16);

  numSeconds = 0;

  ngOnChanges(): void {
    if (this.seconds) {
      this.numSeconds = this.seconds as number;
      this.days = Math.floor((this.seconds as number) / 60 / 60 / 24);
      this.hours = Math.floor((this.seconds as number) / 3600) - this.days * 24;
      this.minutes = Math.floor(((this.seconds as number) % 3600) / 60);
    }
  }

  /**
   * Duration changed
   */
  durationChanged(): void {
    const dayToSeconds = Math.floor(this.days * 60 * 60 * 24);
    const hourToSeconds = Math.floor(this.hours * 3600);
    const minutesToSeconds = Math.floor(this.minutes * 60);

    this.seconds = dayToSeconds + hourToSeconds + minutesToSeconds;

    if (this.maxDuration && this.seconds > this.maxDuration) {
      this.seconds = this.maxDuration;
    }

    this.numSeconds = this.seconds;

    this.secondsChange.emit(this.seconds);
  }
}
