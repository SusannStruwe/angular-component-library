import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { HoverStyle } from '../../model/hoverstyle.enum';


/**
 * Component to create a bordered button.
 *
 * @howToUse
 * ```
 * <bordered-btn-component
 *  [ariaLabel]= "'scheduler.today' | translate "
 *  [buttonText]="'scheduler.today' | translate "
 *  [faIcon] = "faCog">
 * </bordered-btn-component>
 * ```
 */
@Component({
    selector: 'bordered-btn-component',
    standalone: true,
    imports: [CommonModule, FontAwesomeModule],
    templateUrl: './bordered-btn.component.html',
    styleUrls: ['./bordered-btn.component.scss'],
})
export class BorderedBtnComponent {
    @Input() ariaLabel: string = '';

    @Input() buttonText?: string;

    @Input() faIcon?: IconDefinition;
    // example --> 100% or not
    @Input() showIcon = true;

    @Input() disabled?: boolean;
    // example --> gray, delete
    @Input() styleClass?: string = '';
    // example --> filling or shining
    @Input() hoverStyle = HoverStyle.SIMPLE;
    // example --> spin or not
    @Input() spinning = false;
    // example --> active or not
    @Input() active?: boolean;
    // example --> 100% or not
    @Input() width?: string;
}
