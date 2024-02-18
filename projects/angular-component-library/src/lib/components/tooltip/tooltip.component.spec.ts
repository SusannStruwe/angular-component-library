import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TooltipComponent } from './tooltip.component';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { TranslateModule } from '@ngx-translate/core';
import { By } from '@angular/platform-browser';

describe('TooltipComponent', () => {
    let component: TooltipComponent;
    let fixture: ComponentFixture<TooltipComponent>;

    const toolTipText = 'Tip';

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [TooltipComponent, TranslateModule.forRoot(), FontAwesomeTestingModule],
            providers: [],
        });

        fixture = TestBed.createComponent(TooltipComponent);

        component = fixture.componentInstance;
        component.tooltip = toolTipText;

        fixture.detectChanges();
    });

    it('should create tooltip component', () => {
        expect(component).toBeTruthy();
    });

    it('should have tooltip text', () => {
        const tooltipEl = fixture.debugElement.query(By.css('.tooltip'));
        expect(tooltipEl).toBeTruthy();
    });

    it('tooltip text should be', () => {
        const tooltipEl = fixture.debugElement.query(By.css('.tooltip'));
        const content = tooltipEl.nativeElement.textContent;
        expect(content).toBe(toolTipText);
    });
});
