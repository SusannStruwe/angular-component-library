import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

/**
 * Component to create tab in tab view.
 *
 * @howToUse
 * ```
 *  <tab-component
 *     [tabTitle]="tab1">
 *  </tab-component>
 * ```
 */
@Component({
    selector: 'tab-component',
    standalone: true,
    imports: [FontAwesomeModule],
    templateUrl: './tab.component.html',
    styleUrls: ['./tab.component.scss'],
})
export class TabComponent {
    @Input() tabTitle = '';
    @Input() active = false;
}
