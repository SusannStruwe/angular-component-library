import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabsViewComponent, templateMock } from './tabs-view.component';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { TabComponent } from './tab/tab.component';
import { Component } from '@angular/core';

@Component({
    selector: 'tabs-view-mock-component',
    template: templateMock
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
                FontAwesomeTestingModule,
                TabComponent
            ],
            providers: []
        });

        fixture = TestBed.createComponent(TabsViewMockComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create tabs view component', () => {
        expect(component).toBeTruthy();
    });
});
