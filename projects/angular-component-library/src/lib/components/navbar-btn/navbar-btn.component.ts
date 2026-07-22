import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

/**
 * Component to create a navbar button.
 *
 * @howToUse
 * ```
 * <navbar-btn-component
 *   [label]="'Settings'"
 *   [faIcon]="faCog">
 * </navbar-btn-component>
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
    // example --> gray, delete
    @Input() customClass?: string = '';
    /** @deprecated Use customClass instead. */
    @Input() classStyle?: string = '';

    // example --> active or not
    @Input() active?: boolean;

    get customClassName(): string {
        return this.customClass ?? this.classStyle ?? '';
    }
}
