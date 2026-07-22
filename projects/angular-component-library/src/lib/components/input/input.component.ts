import { CommonModule } from '@angular/common';
import {
    Component,
    EventEmitter,
    HostBinding,
    Input,
    Output
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

/**
 * Component to add input
 *
 * @howToUse
 * ```
 * <input-component
 *   [(input)]="username"
 *   [placeholderText]="'Username'"
 *   type="text"
 *   width="280px"
 *   [icon]="faUser"
 *   [customClass]="'full-width my-app-input'">
 * </input-component>
 *
 * Key inputs:
 * - `input` enables two-way binding for the current value.
 * - `placeholderText`, `type`, `width`, and `icon` configure the input behavior and layout.
 * - `customClass` can be used to pass additional project-specific classes.
 * ```
 */
@Component({
    selector: 'input-component',
    imports: [CommonModule, FontAwesomeModule, FormsModule],
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss']
})
export class InputComponent {
    @Input() input: string | number = '';
    /** Optional custom CSS classes for project-specific styling. */
    @Input() customClass?: string;
    /** @deprecated Use customClass instead. */
    @Input() classStyles?: string;
    @Input() placeholderText? = '';
    @Input() type = 'text';
    @Input() width = '160px';
    @Input() icon?: IconDefinition;

    @Output() inputChange = new EventEmitter<string | number>();

    randomId: string = Math.floor(Math.random() * 16777215).toString(16);

    get customClassName(): string {
        return this.customClass ?? this.classStyles ?? '';
    }

    @HostBinding('class')
    get hostClassName(): string {
        return this.customClassName;
    }

    /**
     * Input string has changed
     */
    inputChanged(): void {
        this.inputChange.emit(this.input);
    }
}
