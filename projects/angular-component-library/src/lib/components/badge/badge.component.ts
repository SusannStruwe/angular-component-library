import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

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
    standalone: true,
    imports: [CommonModule],
    templateUrl: './badge.component.html',
    styleUrls: ['./badge.component.scss'],
})
export class BadgeComponent {
    @Input() label: string | number = '';
    @Input() borderRadius: number = 0;
    @Input() classStyle?: string;
    @Input() isDisabled? = false;
}
