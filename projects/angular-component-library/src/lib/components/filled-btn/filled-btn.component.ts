import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { HoverStyle } from '../../model/hover-style.enum';

/**
 * Component to create a filled button.
 *
 * @howToUse
 * ```
 * <filled-btn-component
 *  [ariaLabel]= "'scheduler.today' | translate "
 *  [label]="'scheduler.today' | translate "
 *  [faIcon] = "faCog">
 * </filled-btn-component>
 * ```
 */
@Component({
    selector: 'filled-btn-component',
    standalone: true,
    imports: [CommonModule, FontAwesomeModule],
    templateUrl: './filled-btn.component.html',
    styleUrls: ['./filled-btn.component.scss'],
})
export class FilledBtnComponent {
    @Input() ariaLabel: string = '';

    @Input() label?: string;

    @Input() faIcon?: IconDefinition;

    @Input() showIcon = true;
    // example --> spin or not
    @Input() isSpinning = false;
    
    @Input() isDisabled?: boolean;

    // example --> active or not
    @Input() isActive?: boolean;

    // example --> gray, delete
    @Input() styleClass?: string = '';
    // example --> filling or shining
    @Input() hoverStyle = HoverStyle.RIPPLE;
    // example --> 100% or not
    @Input() width?: string;
}
