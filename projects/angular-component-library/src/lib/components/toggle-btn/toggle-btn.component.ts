import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

export const TOGGLE_BTN_APPEARANCES = ['default', 'brand'] as const;
export type ToggleBtnAppearance = (typeof TOGGLE_BTN_APPEARANCES)[number];
type ToggleBtnAppearanceInput = ToggleBtnAppearance | 'custom';
export const TOGGLE_BTN_HEIGHTS = [20, 25, 30] as const;
export type ToggleBtnHeightValue = (typeof TOGGLE_BTN_HEIGHTS)[number];
export type ToggleBtnHeight = ToggleBtnHeightValue | number | `${number}`;

const DEFAULT_TOGGLE_BTN_HEIGHT: ToggleBtnHeightValue = 30;

/**
 * Component to create segmented buttons.
 *
 * @howToUse
 * ```
 * <toggle-btn-component
 *   [label]="'Notifications'"
 *   [(checked)]="notificationsEnabled"
 *   appearance="brand">
 * </toggle-btn-component>
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
    @Input() customClass?: string;
    /** @deprecated Use customClass instead. */
    @Input() classStyle?: string;
    @Input() appearance: ToggleBtnAppearanceInput = 'default';

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

    get normalizedAppearance(): ToggleBtnAppearance {
        return this.appearance === 'custom' ? 'brand' : this.appearance;
    }

    get appearanceClass(): string {
        return `appearance-${this.normalizedAppearance}`;
    }

    get sizeClass(): string {
        return `size-${this.toggleHeight}`;
    }

    get customClassName(): string {
        return this.customClass ?? this.classStyle ?? '';
    }

    toggleState(): void {
        this.checkedChange.emit(this.checked);
    }
}
