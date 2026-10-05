import { CommonModule } from '@angular/common';
import { Component, HostBinding, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

/**
 * Component to create a badge.
 *
 * @howToUse
 * ```
 * <badge-component
 *   [label]="'Success'"
 *   [borderRadius]="12"
 *   [preIcon]="faInfoCircle"
 *   [postIcon]="faCheck"
 *   [isDisabled]="false"
 *   [customClass]="'success my-app-badge'">
 * </badge-component>
 *
 * Key inputs:
 * - `label` defines the badge text or number.
 * - `preIcon` and `postIcon` add icons before or after the label.
 * - `borderRadius` and `isDisabled` control the visual state.
 * - `customClass` can be used to pass additional project-specific classes.
 * ```
 */
@Component({
    selector: 'badge-component',
    imports: [CommonModule, FontAwesomeModule],
    templateUrl: './badge.component.html',
    styleUrls: ['./badge.component.scss']
})
export class BadgeComponent {
    @Input() label: string | number = '';
    @Input() borderRadius: number = 0;
    /** Optional custom CSS classes for project-specific styling. */
    @Input() customClass?: string;
    /** @deprecated Use customClass instead. */
    @Input() classStyle?: string;
    @Input() isDisabled? = false;
    @Input() postIcon?: IconDefinition;
    @Input() preIcon?: IconDefinition;

    get customClassName(): string {
        return this.customClass ?? this.classStyle ?? '';
    }

    @HostBinding('class')
    get hostClassName(): string {
        return this.customClassName;
    }
}
