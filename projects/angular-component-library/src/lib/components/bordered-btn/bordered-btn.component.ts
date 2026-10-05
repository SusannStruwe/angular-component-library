import { CommonModule } from '@angular/common';
import { Component, HostBinding, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { HoverStyle } from '../../model/hover-style.enum';

export const BORDERED_BTN_APPEARANCES = ['default', 'gray', 'delete'] as const;
export type BorderedBtnAppearance = (typeof BORDERED_BTN_APPEARANCES)[number];

function isBorderedBtnAppearance(
    value: string | undefined
): value is Exclude<BorderedBtnAppearance, 'default'> {
    return value === 'gray' || value === 'delete';
}

/**
 * Component to create a bordered button.
 *
 * @howToUse
 * ```
 * <bordered-btn-component
 *   type="button"
 *   [ariaLabel]="'Delete item'"
 *   [label]="'Delete item'"
 *   [faIcon]="faTrash"
 *   [showIcon]="true"
 *   appearance="delete"
 *   hoverStyle="simple"
 *   [isDisabled]="false"
 *   [isActive]="false"
 *   width="220px"
 *   [customClass]="'my-app-btn'">
 * </bordered-btn-component>
 *
 * Key inputs:
 * - `appearance` controls the built-in visual variant.
 * - `hoverStyle` controls the interaction behavior.
 * - `customClass` can be used to pass additional project-specific classes.
 * - `isActive`, `isDisabled`, and `width` control state and layout.
 * ```
 */
@Component({
    selector: 'bordered-btn-component',
    imports: [CommonModule, FontAwesomeModule],
    templateUrl: './bordered-btn.component.html',
    styleUrls: ['./bordered-btn.component.scss']
})
export class BorderedBtnComponent {
    @Input() type: 'button' | 'submit' | 'reset' = 'button';
    @Input() ariaLabel: string = 'no-title';
    @Input() label?: string;
    @Input() faIcon?: IconDefinition;
    @Input() showIcon = true;
    @Input() isDisabled?: boolean = false;
    /** Built-in appearance variant of the component. */
    @Input() appearance: BorderedBtnAppearance = 'default';
    /** Optional custom CSS classes for project-specific styling. */
    @Input() customClass?: string = '';
    /** @deprecated Use appearance or customClass instead. */
    @Input() classStyle?: string = '';
    // example --> filling or shining
    @Input() hoverStyle = HoverStyle.SIMPLE;
    // example --> spin or not
    @Input() isSpinning = false;
    // example --> active or not
    @Input() isActive?: boolean;
    // example --> 100% or not
    @Input() width?: string;

    get appearanceClass(): string {
        if (this.appearance !== 'default') {
            return this.appearance;
        }

        return isBorderedBtnAppearance(this.classStyle) ? this.classStyle : '';
    }

    get customClassName(): string {
        if (this.customClass) {
            return this.customClass;
        }

        return this.classStyle && !isBorderedBtnAppearance(this.classStyle)
            ? this.classStyle
            : '';
    }

    @HostBinding('class')
    get hostClassName(): string {
        return this.customClassName;
    }
}
