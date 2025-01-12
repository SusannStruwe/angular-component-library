import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { IconService } from '../../services/icon.service';

/**
 * Component to search
 *
 * @howToUse
 * ```
 * <search-input-component
 *  [(filter)]="filter">
 * </search-input-component>
 * ```
 */
@Component({
  selector: 'search-input-component',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, FormsModule],
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent {
  @Input() filter = '';
  @Input() classStyles?: string;
  @Input() placeholderText? = '';

  @Output() filterChange = new EventEmitter<string>();

  faMagnifyingGlass: IconDefinition;
  faCloseCircle: IconDefinition;

  randomId: string = Math.floor(Math.random() * 16777215).toString(16);

  constructor(private iconService: IconService) {
    this.faMagnifyingGlass = this.iconService.faMagnifyingGlass;
    this.faCloseCircle = this.iconService.faCircleXmark;
  }

  /**
   * Filter string has changed
   */
  filterChanged(): void {
    this.filterChange.emit(this.filter);
  }

  /**
   * Clear filter
   */
  clearFilter(event: Event): void {
    event.stopPropagation();
    this.filter = '';
    this.filterChange.emit(this.filter);
  }
}
