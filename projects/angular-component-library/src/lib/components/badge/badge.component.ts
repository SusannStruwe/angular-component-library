import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

/**
 * Component to create a badge.
 *
 * @howToUse
 * ```
 * <badge-component
 *  [label]="'scheduler.today' | translate ">
 * </badge-component>
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
    @Input() customClass?: string;
    /** @deprecated Use customClass instead. */
    @Input() classStyle?: string;
    @Input() isDisabled? = false;
    @Input() postIcon?: IconDefinition;
    @Input() preIcon?: IconDefinition;

    get customClassName(): string {
        return this.customClass ?? this.classStyle ?? '';
    }
}
