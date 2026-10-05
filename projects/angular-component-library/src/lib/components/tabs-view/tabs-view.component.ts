import {
    AfterContentInit,
    Component,
    ContentChildren,
    EventEmitter,
    Output,
    QueryList
} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TabComponent } from './tab/tab.component';
import { TooltipDirective } from '../../directives/tooltip.directive';

export const templateMock = `   <tabs-view-component [style.width.px]="200" [style.height.px]="100"
        (selectedTabChanged)="selectedTabChanged($event)">
        <tab-component [tabTitle]="'Tab 1'"> <p> Inhalt 1 </p> </tab-component>
        <tab-component [tabTitle]="'Tab 2'"> <p> Inhalt 2 </p> </tab-component>
    </tabs-view-component>
 `;

/**
 * Component to tab view with tabs to select.
 *
 * @howToUse
 * ```
 * <tabs-view-component
 *  (selectedTabChanged)="selectedTabChanged($event)">
 *
 *  <tab-component
 *     tabTitle="production"
 *     [tabIcon]="faBoxArchive"
 *     [active]="true"
 *     tooltip="Production data">
 *      <p>Production content</p>
 *  </tab-component>
 *
 *  <tab-component
 *     tabTitle="staff"
 *     tooltip="Staff related data">
 *      <p>Staff content</p>
 *  </tab-component>
 *
 * </tabs-view-component>
 *
 * Key inputs:
 * - Child `tab-component` instances define the available tabs.
 * - `selectedTabChanged` emits the selected `tabTitle`.
 * - Each tab can provide `tabIcon`, `tooltip`, and `active` state.
 * ```
 */
@Component({
    selector: 'tabs-view-component',
    imports: [FontAwesomeModule, TooltipDirective],
    templateUrl: './tabs-view.component.html',
    styleUrls: ['./tabs-view.component.scss']
})
export class TabsViewComponent implements AfterContentInit {
    @ContentChildren(TabComponent) tabs?: QueryList<TabComponent>;

    @Output() selectedTabChanged = new EventEmitter<string>();

    ngAfterContentInit() {
        const actives = this.tabs?.filter((tab) => tab.active);
        if (this.tabs && (!actives || actives.length === 0)) {
            this.selectTab(this.tabs?.first);
        }
    }

    selectTab(tab: TabComponent): void {
        this.tabs?.forEach((tab) => {
            tab.active = false;
        });
        tab.active = true;
        this.selectedTabChanged.emit(tab.tabTitle);
    }
}
