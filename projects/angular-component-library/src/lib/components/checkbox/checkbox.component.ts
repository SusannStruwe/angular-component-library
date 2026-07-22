import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { Icons } from '../../model/icons';
import { EditMode } from '../../model/edit-mode.enum';

/**
 * Component to select or check a value
 *
 * @howToUse
 * ```
 * <checkbox-component
 *   [(value)]="acceptTerms"
 *   [mode]="editModeWrite"
 *   [height]="20">
 * </checkbox-component>
 *
 * Key inputs:
 * - `value` enables two-way binding for the checked state.
 * - `mode` switches between interactive and read-only behavior.
 * - `height` controls the rendered checkbox size.
 * ```
 */
@Component({
    selector: 'checkbox-component',
    imports: [FontAwesomeModule],
    templateUrl: './checkbox.component.html',
    styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {
    @Input() value = false;
    @Input() mode: EditMode = EditMode.WRITE;
    @Input() height?: number;

    @Output() valueChange = new EventEmitter<boolean>();

    modes: typeof EditMode = EditMode;

    faSquare: IconDefinition = Icons.faSquare;
    faSquareCheck: IconDefinition = Icons.faSquareCheck;
    faCheck: IconDefinition = Icons.faCheck;

    randomId: string = Math.floor(Math.random() * 16777215).toString(16);

    toggleValue(): void {
        this.value = !this.value;
        this.valueChange.emit(this.value);
    }
}
