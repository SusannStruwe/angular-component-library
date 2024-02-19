import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { HoverStyle } from '../../model/hover-style.enum';


/**
 * Component to create a bordered button.
 *
 * @howToUse
 * ```
 * <bordered-btn-component
 *  [ariaLabel]= "'scheduler.today' | translate "
 *  [text]="'scheduler.today' | translate "
 *  [faIcon] = "faCog">
 * </bordered-btn-component>
 * ```
 */
@Component({
    selector: 'bordered-btn-component',
    standalone: true,
    imports: [CommonModule, FontAwesomeModule],
    templateUrl: './bordered-btn.component.html',
    styleUrls: ['./bordered-btn.component.scss']
})
export class BorderedBtnComponent{
    @Input() ariaLabel: string = '';
    // example --> filling or shining
    @Input() classStyle: string = HoverStyle.SIMPLE;

    @Input() label?: string;

    @Input() faIcon?: IconDefinition;

    @Input() isDisabled?: boolean;
    // example --> spin or not
    @Input() isSpinning = false;
    // example --> active or not
    @Input() isActive?: boolean;
    // example --> 100% or not
    @Input() width?: string;

}
