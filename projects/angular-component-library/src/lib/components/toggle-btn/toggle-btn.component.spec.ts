import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { ToggleBtnComponent } from './toggle-btn.component';
import { By } from '@angular/platform-browser';

describe('ToggleBtnComponent', () => {
    let component: ToggleBtnComponent;
    let fixture: ComponentFixture<ToggleBtnComponent>;

    const text = 'Tip';

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ToggleBtnComponent],
            providers: []
        });

        fixture = TestBed.createComponent(ToggleBtnComponent);

        component = fixture.componentInstance;
        component.label = text;

        fixture.detectChanges();
    });

    it('should create toggle button component', () => {
        expect(component).toBeTruthy();
    });

    it('should have toggle btn label', () => {
        const toggleBtnText = fixture.debugElement.query(By.css('p'));
        expect(toggleBtnText).toBeTruthy();
    });

    it('toggle btn label should be', () => {
        const toggleBtnText = fixture.debugElement.query(By.css('p'));
        const content = toggleBtnText.nativeElement.textContent;
        expect(content).toEqual(text);
    });

    it('toggle btn should toggle state', fakeAsync(() => {
        const toggleInput = fixture.debugElement.query(
            By.css('.checkbox')
        ).nativeElement;
        toggleInput.dispatchEvent(new Event('change'));
        fixture.detectChanges();
        expect(component.checked).toBe(false);
    }));

    it('should apply classStyle to label and toggle wrapper', () => {
        component.classStyle = 'success-toggle settings';
        fixture.detectChanges();

        const labelEl = fixture.debugElement.query(By.css('p')).nativeElement;
        const toggleEl = fixture.debugElement.query(
            By.css('.toggle')
        ).nativeElement;

        expect(labelEl.classList.contains('success-toggle')).toBeTrue();
        expect(labelEl.classList.contains('settings')).toBeTrue();
        expect(toggleEl.classList.contains('success-toggle')).toBeTrue();
        expect(toggleEl.classList.contains('settings')).toBeTrue();
    });

    it('should apply brand appearance and compact size classes', () => {
        component.appearance = 'brand';
        component.toggleHeight = '25';
        fixture.detectChanges();

        const toggleEl = fixture.debugElement.query(
            By.css('.toggle')
        ).nativeElement;

        expect(toggleEl.classList.contains('appearance-brand')).toBeTrue();
        expect(toggleEl.classList.contains('size-25')).toBeTrue();
    });

    it('should apply the tiny size class', () => {
        component.toggleHeight = '20';
        fixture.detectChanges();

        const toggleEl = fixture.debugElement.query(
            By.css('.toggle')
        ).nativeElement;

        expect(toggleEl.classList.contains('size-20')).toBeTrue();
    });

    it('should accept a numeric binding for toggle height', () => {
        component.toggleHeight = 25;
        fixture.detectChanges();

        const toggleEl = fixture.debugElement.query(
            By.css('.toggle')
        ).nativeElement;

        expect(toggleEl.classList.contains('size-25')).toBeTrue();
    });
});
