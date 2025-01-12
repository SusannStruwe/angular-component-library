import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { IconService } from '../../services/icon.service';
import { EditMode } from '../../model/edit-mode.enum';

/**
 * Component to select or check a value
 *
 * @howToUse
 * ```
 * <checkbox-component
 *   [(value)]="checked">
 * </checkbox-component>
 * ```
 */
@Component({
  selector: 'checkbox-component',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent {
  @Input() value = false;
  @Input() mode: EditMode = EditMode.WRITE;
  @Input() height?: number;

  @Output() valueChange = new EventEmitter<boolean>();

  modes: typeof EditMode = EditMode;

  faSquare: IconDefinition;
  faSquareCheck: IconDefinition;
  faCheck: IconDefinition;

  randomId: string = Math.floor(Math.random() * 16777215).toString(16);

  constructor(private iconService: IconService) {
    this.faSquare = this.iconService.faSquare;
    this.faSquareCheck = this.iconService.faSquareCheck;
    this.faCheck = this.iconService.faCheck;
  }

  toggleValue(): void {
    this.value = !this.value;
    this.valueChange.emit(this.value);
  }
}
