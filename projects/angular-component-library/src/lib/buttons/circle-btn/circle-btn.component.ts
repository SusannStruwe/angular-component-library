import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

/**
 * Component to create and show circle button with icon.
 *
 * @howToUse
 * ```
 * <circle-btn-component
 *   [faIcon]="faCog"
 *   [backgroundColor]="red"
 * ></circle-btn-component>
 * ```
 */
@Component({
    selector: 'circle-btn-component',
    standalone: true,
    imports: [CommonModule, FontAwesomeModule],
    templateUrl: './circle-btn.component.html',
    styleUrls: ['./circle-btn.component.scss'],
})
export class CircleBtnComponent {
    @Input() ariaLabel: string = '';

    @Input() text?: string;

    @Input() faIcon?: IconDefinition;

    @Input() isDisabled?: boolean;
    // example --> spin or not
    @Input() isSpinning = false;
    // example --> active or not
    @Input() isActive?: boolean;

    @Input() backgroundColor?: string;

    // example --> gray, delete
    @Input() styleClass?: string = '';

    // example --> 100% or not
    @Input() width?: string;  
}
