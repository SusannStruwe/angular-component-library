import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { Icons } from '../../model/icons';

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
    imports: [CommonModule, FontAwesomeModule, FormsModule],
    templateUrl: './search-input.component.html',
    styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent {
    @Input() filter = '';
    @Input() classStyles?: string;
    @Input() placeholderText? = '';

    @Output() filterChange = new EventEmitter<string>();

    faMagnifyingGlass: IconDefinition = Icons.faMagnifyingGlass;
    faCloseCircle: IconDefinition = Icons.faCircleXmark;

    randomId: string = Math.floor(Math.random() * 16777215).toString(16);

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
