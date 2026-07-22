import { CommonModule } from '@angular/common';
import { Component, HostBinding, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

/**
 * Component to create and show circle button with icon.
 *
 * @howToUse
 * ```
 * <circle-btn-component
 *   [ariaLabel]="'Reload data'"
 *   [faIcon]="faCog"
 *   [backgroundColor]="'#486bff'"
 *   [isSpinning]="false"
 *   [isDisabled]="false"
 *   [isActive]="false"
 *   width="44px"
 *   [customClass]="'my-app-circle-btn'"
 * ></circle-btn-component>
 *
 * Key inputs:
 * - `faIcon` and `ariaLabel` define the button content and accessibility label.
 * - `backgroundColor` provides a quick color override.
 * - `isActive`, `isDisabled`, `isSpinning`, and `width` control state and layout.
 * - `customClass` can be used to pass additional project-specific classes.
 * ```
 */
@Component({
    selector: 'circle-btn-component',
    imports: [CommonModule, FontAwesomeModule],
    templateUrl: './circle-btn.component.html',
    styleUrls: ['./circle-btn.component.scss']
})
export class CircleBtnComponent {
    @Input() ariaLabel: string = 'circle-btn';

    @Input() faIcon?: IconDefinition;

    @Input() isDisabled?: boolean;
    // example --> spin or not
    @Input() isSpinning = false;
    // example --> active or not
    @Input() isActive?: boolean;

    @Input() backgroundColor?: string;

    /** Optional custom CSS classes for project-specific styling. */
    @Input() customClass?: string = '';
    /** @deprecated Use customClass instead. */
    @Input() classStyle?: string = '';

    // example --> 100% or not
    @Input() width?: string;

    get customClassName(): string {
        return this.customClass ?? this.classStyle ?? '';
    }

    @HostBinding('class')
    get hostClassName(): string {
        return this.customClassName;
    }
}
