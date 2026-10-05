import {
    Component,
    EventEmitter,
    HostBinding,
    Input,
    Output
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

export const TOGGLE_BTN_HEIGHTS = [20, 25, 30] as const;
export type ToggleBtnHeightValue = (typeof TOGGLE_BTN_HEIGHTS)[number];
export type ToggleBtnHeight = ToggleBtnHeightValue | number | `${number}`;

const DEFAULT_TOGGLE_BTN_HEIGHT: ToggleBtnHeightValue = 30;

/**
 * Component to create toggle buttons.
 *
 * @howToUse
 * ```
 * <toggle-btn-component
 *   [label]="'Notifications'"
 *   [(checked)]="notificationsEnabled"
 *   [toggleHeight]="25"
 *   [isDisabled]="false"
 *   [customClass]="'my-toggle'">
 * </toggle-btn-component>
 *
 * Key inputs:
 * - `checked` enables two-way binding for the current toggle state.
 * - `toggleHeight` controls the size preset.
 * - `isDisabled` controls whether the user can change the state.
 * - `customClass` can be used to pass additional project-specific classes and CSS variable overrides such as `--toggle-thumb-bg`.
 * ```
 */
@Component({
    selector: 'toggle-btn-component',
    imports: [CommonModule, FormsModule],
    templateUrl: './toggle-btn.component.html',
    styleUrls: ['./toggle-btn.component.scss']
})
export class ToggleBtnComponent {
    @Input() label?: string;
    @Input() checked = true;
    @Input() isDisabled = false;
    /** Optional custom CSS classes for project-specific styling. */
    @Input() customClass?: string;
    /** @deprecated Use customClass instead. */
    @Input() classStyle?: string;

    private _toggleHeight: ToggleBtnHeightValue = DEFAULT_TOGGLE_BTN_HEIGHT;

    @Input()
    set toggleHeight(value: ToggleBtnHeight | null | undefined) {
        const normalizedHeight = Number(value);

        this._toggleHeight = TOGGLE_BTN_HEIGHTS.includes(
            normalizedHeight as ToggleBtnHeightValue
        )
            ? (normalizedHeight as ToggleBtnHeightValue)
            : DEFAULT_TOGGLE_BTN_HEIGHT;
    }

    get toggleHeight(): ToggleBtnHeightValue {
        return this._toggleHeight;
    }

    @Output() checkedChange = new EventEmitter<boolean>();

    get sizeClass(): string {
        return `size-${this.toggleHeight}`;
    }

    get customClassName(): string {
        return this.customClass ?? this.classStyle ?? '';
    }

    @HostBinding('class')
    get hostClassName(): string {
        return this.customClassName;
    }

    toggleState(): void {
        this.checkedChange.emit(this.checked);
    }
}
