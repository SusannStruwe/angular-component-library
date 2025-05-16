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
 *     [tabTitle]="tab1">
 *  </tab-component>
 *
 *  <tab-component
 *     [tabTitle]="tab2">
 *  </tab-component>
 *
 * </tabs-view-component>
 * ```
 */
@Component({
    selector: 'tabs-view-component',
    standalone: true,
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
