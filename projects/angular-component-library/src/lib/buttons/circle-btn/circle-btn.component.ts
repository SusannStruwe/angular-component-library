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
    imports: [FontAwesomeModule],
    templateUrl: './circle-btn.component.html',
    styleUrls: ['./circle-btn.component.scss'],
})
export class CircleBtnComponent {
    @Input() ariaLabel: string = '';
    @Input() faIcon?: IconDefinition;
    @Input() backgroundColor?: string;
    @Input() active?: boolean;
}
