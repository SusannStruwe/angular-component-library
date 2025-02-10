import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

/**
 * Component to add input
 *
 * @howToUse
 * ```
 * <search-input-component
 *  [(input)]="input">
 * </search-input-component>
 * ```
 */
@Component({
  selector: 'input-component',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, FormsModule],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() input = '';
  @Input() classStyles?: string;
  @Input() placeholderText? = '';
  @Input() type = 'text';
  @Input() icon?: IconDefinition;

  @Output() inputChange = new EventEmitter<string>();

  randomId: string = Math.floor(Math.random() * 16777215).toString(16);

  /**
   * Input string has changed
   */
  inputChanged(): void {
    this.inputChange.emit(this.input);
  }
}
