import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ToggleBtnComponent } from './toggle-btn.component';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { TranslateModule } from '@ngx-translate/core';
import { By } from '@angular/platform-browser';

describe('ToggleBtnComponent', () => {
    let component: ToggleBtnComponent;
    let fixture: ComponentFixture<ToggleBtnComponent>;

    const text = 'Tip';

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ToggleBtnComponent, TranslateModule.forRoot(), FontAwesomeTestingModule],
            providers: [],
        });

        fixture = TestBed.createComponent(ToggleBtnComponent);

        component = fixture.componentInstance;
        component.label = text;

        fixture.detectChanges();
    });

    it('should create toggle button component', () => {
        expect(component).toBeTruthy();
    });

    it('should have toggle btn text', () => {
        const toggleBtnText = fixture.debugElement.query(By.css('span'));
        expect(toggleBtnText).toBeTruthy();
    });

    it('toggle btn text should be', () => {
        const toggleBtnText = fixture.debugElement.query(By.css('span'));
        const content = toggleBtnText.nativeElement.textContent;
        expect(content).toBe(text);
    });

    it('toggle btn should toggle state', fakeAsync(() => {
        const toggleInput = fixture.debugElement.query(By.css('.checkbox')).nativeElement;
        toggleInput.dispatchEvent(new Event('change'));
        fixture.detectChanges();
        expect(component.checked).toBe(false);
    }));
});
