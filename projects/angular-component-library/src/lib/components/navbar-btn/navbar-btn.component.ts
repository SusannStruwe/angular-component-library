import { CommonModule } from '@angular/common';
import { Component, HostBinding, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

/**
 * Component to create a navbar button.
 *
 * @howToUse
 * ```
 * <navbar-btn-component
 *   [label]="'Settings'"
 *   [faIcon]="faCog"
 *   [active]="true"
 *   [disabled]="false"
 *   [customClass]="'my-app-navbar-btn'">
 * </navbar-btn-component>
 *
 * Key inputs:
 * - `label` and `faIcon` define the button content.
 * - `active` and `disabled` control the visual state.
 * - `customClass` can be used to pass additional project-specific classes.
 * ```
 */
@Component({
    selector: 'navbar-btn-component',
    imports: [CommonModule, FontAwesomeModule],
    templateUrl: './navbar-btn.component.html',
    styleUrls: ['./navbar-btn.component.scss']
})
export class NavbarBtnComponent {
    @Input() label?: string;

    @Input() faIcon?: IconDefinition;

    @Input() disabled?: boolean = false;
    /** Optional custom CSS classes for project-specific styling. */
    @Input() customClass?: string = '';
    /** @deprecated Use customClass instead. */
    @Input() classStyle?: string = '';

    // example --> active or not
    @Input() active?: boolean;

    get customClassName(): string {
        return this.customClass ?? this.classStyle ?? '';
    }

    @HostBinding('class')
    get hostClassName(): string {
        return this.customClassName;
    }
}
