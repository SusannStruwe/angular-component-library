import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

/**
 * Component to create tooltip
 *
 * @howToUse
 * ```
 * <tooltip-component>
 * </tooltip-component>
 * ```
 */
@Component({
  selector: 'tooltip-component',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
})
export class TooltipComponent {
  tooltip = '';
  left = 0;
  top = 0;
}
