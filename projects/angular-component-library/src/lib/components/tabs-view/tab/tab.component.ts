import { Component, HostBinding, Input } from '@angular/core';
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
 *     tabTitle="production"
 *     [tabIcon]="faBoxArchive"
 *     [active]="true"
 *     tooltip="Production environment"
 *     [customClass]="'my-app-tab'">
 *  </tab-component>
 *
 * Key inputs:
 * - `tabTitle` defines the built-in tab type.
 * - `tabIcon` and `tooltip` add extra context for the tab.
 * - `active` controls the selected visual state.
 * - `customClass` can be used to pass additional project-specific classes.
 * ```
 */
@Component({
    selector: 'tab-component',
    imports: [CommonModule, FontAwesomeModule],
    templateUrl: './tab.component.html',
    styleUrls: ['./tab.component.scss']
})
export class TabComponent {
    @Input() tabTitle: TabViewType = TabViewType.PRODUCTION;
    @Input() tabIcon?: IconDefinition;
    @Input() active = false;
    @Input() tooltip = '';
    /** Optional custom CSS classes for project-specific styling. */
    @Input() customClass: string = '';
    /** @deprecated Use customClass instead. */
    @Input() classStyle: string = '';

    get customClassName(): string {
        return this.customClass || this.classStyle;
    }

    @HostBinding('class')
    get hostClassName(): string {
        return this.customClassName;
    }
}
