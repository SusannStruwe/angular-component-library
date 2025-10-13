import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { Icons } from '../../model/icons';
import { CommonModule } from '@angular/common';

/**
 * Component to create segmented buttons.
 *
 * @howToUse
 * ```
 * <toggle-btn-component
 *    [label] = "show"
 *    [(state)]="stateChanged($event)">
 *  </toggle-btn-component>
 * ```
 */
@Component({
    selector: 'toggle-btn-component',
    imports: [CommonModule, FontAwesomeModule, FormsModule],
    templateUrl: './toggle-btn.component.html',
    styleUrls: ['./toggle-btn.component.scss']
})
export class ToggleBtnComponent {
    @Input() label?: string;
    @Input() checked = true;
    @Input() isDisabled = false;
    @Input() classStyle?: string;

    @Output() checkedChange = new EventEmitter<boolean>();

    faCheck: IconDefinition = Icons.faCheck;

    randomId: string = Math.floor(Math.random() * 16777215).toString(16);

    toggleState(): void {
        this.checkedChange.emit(this.checked);
    }
}
