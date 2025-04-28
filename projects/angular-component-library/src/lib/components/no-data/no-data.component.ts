import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { TranslateModule } from '@ngx-translate/core';
import { Icons } from '../../model/icons';

/**
 * Component to create and show a no-data available.
 *
 * @howToUse
 * ```
 * <no-data-component
 *   [translationKey]="'no.data'">
 * </no-data-component>
 * ```
 */
@Component({
  selector: 'no-data-component',
  standalone: true,
  imports: [FontAwesomeModule, TranslateModule],
  templateUrl: './no-data.component.html',
  styleUrls: ['./no-data.component.scss'],
})
export class NoDataComponent {
  @Input() translationKey = 'general.noData';

  faCircleInfo: IconDefinition = Icons.faCircleInfo;
}
