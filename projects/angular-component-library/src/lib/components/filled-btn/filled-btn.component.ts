import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { HoverStyle } from '../../model/hover-style.enum';

export const FILLED_BTN_APPEARANCES = [
    'default',
    'delete',
    'not-emphrazed',
    'navbar-btn'
] as const;
export type FilledBtnAppearance = (typeof FILLED_BTN_APPEARANCES)[number];

function isFilledBtnAppearance(
    value: string | undefined
): value is Exclude<FilledBtnAppearance, 'default'> {
    return (
        value === 'delete' ||
        value === 'not-emphrazed' ||
        value === 'navbar-btn'
    );
}

/**
 * Component to create a filled button.
 *
 * @howToUse
 * ```
 * <filled-btn-component
 *   [ariaLabel]="'Save changes'"
 *   [label]="'Save'"
 *   [faIcon]="faCheck">
 * </filled-btn-component>
 * ```
 */
@Component({
    selector: 'filled-btn-component',
    imports: [CommonModule, FontAwesomeModule],
    templateUrl: './filled-btn.component.html',
    styleUrls: ['./filled-btn.component.scss']
})
export class FilledBtnComponent {
    @Input() type: 'button' | 'submit' | 'reset' = 'button';
    @Input() ariaLabel: string = 'no-title';
    @Input() label?: string;
    @Input() faIcon?: IconDefinition;
    @Input() showIcon = true;
    // example --> spin or not
    @Input() isSpinning = false;
    @Input() isDisabled?: boolean = false;
    // example --> active or not
    @Input() isActive?: boolean;
    @Input() appearance: FilledBtnAppearance = 'default';
    @Input() customClass?: string = '';
    /** @deprecated Use appearance or customClass instead. */
    @Input() classStyle?: string = '';
    // example --> filling or shining
    @Input() hoverStyle = HoverStyle.SIMPLE;
    // example --> 100% or not
    @Input() width?: string;

    get appearanceClass(): string {
        if (this.appearance !== 'default') {
            return this.appearance;
        }

        return isFilledBtnAppearance(this.classStyle) ? this.classStyle : '';
    }

    get customClassName(): string {
        if (this.customClass) {
            return this.customClass;
        }

        return this.classStyle && !isFilledBtnAppearance(this.classStyle)
            ? this.classStyle
            : '';
    }
}
