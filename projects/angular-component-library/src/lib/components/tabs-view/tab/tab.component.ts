import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { TabViewType } from '../../../model/tab-view-type.enum';
import { CommonModule } from '@angular/common';

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
    imports: [CommonModule, FontAwesomeModule],
    templateUrl: './tab.component.html',
    styleUrls: ['./tab.component.scss'],
})
export class TabComponent {
    @Input() tabTitle: TabViewType = TabViewType.PRODUCTION;;
    @Input() tabIcon?: IconDefinition;
    @Input() active = false;
    @Input() tooltip = '';
    @Input() classStyle: string = '';
}
