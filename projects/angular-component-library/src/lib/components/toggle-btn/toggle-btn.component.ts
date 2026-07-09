import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

export type ToggleBtnAppearance = 'default' | 'custom';
export const TOGGLE_BTN_HEIGHTS = [20, 25, 30] as const;
export type ToggleBtnHeightValue = (typeof TOGGLE_BTN_HEIGHTS)[number];
export type ToggleBtnHeight = ToggleBtnHeightValue | `${ToggleBtnHeightValue}`;

const DEFAULT_TOGGLE_BTN_HEIGHT: ToggleBtnHeightValue = 30;

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
    imports: [CommonModule, FormsModule],
    templateUrl: './toggle-btn.component.html',
    styleUrls: ['./toggle-btn.component.scss']
})
export class ToggleBtnComponent {
    @Input() label?: string;
    @Input() checked = true;
    @Input() isDisabled = false;
    @Input() classStyle?: string;
    @Input() appearance: ToggleBtnAppearance = 'default';

    private _toggleHeight: ToggleBtnHeightValue = DEFAULT_TOGGLE_BTN_HEIGHT;

    @Input()
    set toggleHeight(value: ToggleBtnHeight | null | undefined) {
        const normalizedHeight = Number(value) as ToggleBtnHeightValue;

        this._toggleHeight = TOGGLE_BTN_HEIGHTS.includes(normalizedHeight)
            ? normalizedHeight
            : DEFAULT_TOGGLE_BTN_HEIGHT;
    }

    get toggleHeight(): ToggleBtnHeightValue {
        return this._toggleHeight;
    }

    @Output() checkedChange = new EventEmitter<boolean>();

    get appearanceClass(): string {
        return `appearance-${this.appearance}`;
    }

    get sizeClass(): string {
        return `size-${this.toggleHeight}`;
    }

    toggleState(): void {
        this.checkedChange.emit(this.checked);
    }
}
