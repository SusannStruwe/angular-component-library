import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabsViewComponent } from './tabs-view.component';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { TabComponent } from './tab/tab.component';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'tabs-view-mock-component',
    template: `<tabs-view-component>
        <tab-component [tabTitle]="tab1"> </tab-component>
        <tab-component [tabTitle]="tab2"> </tab-component>
    </tabs-view-component>`,
})
class TabsViewMockComponent {}

describe('TabsViewComponent', () => {
    let component: TabsViewMockComponent;
    let fixture: ComponentFixture<TabsViewMockComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TabsViewMockComponent],
            imports: [
                TabsViewComponent,
                TranslateModule.forRoot(),
                FontAwesomeTestingModule,
                TabComponent,
            ],
            providers: [],
        });

        fixture = TestBed.createComponent(TabsViewMockComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create tabs view component', () => {
        expect(component).toBeTruthy();
    });
});
