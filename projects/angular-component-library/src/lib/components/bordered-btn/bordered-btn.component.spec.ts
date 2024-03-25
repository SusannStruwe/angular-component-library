import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { BorderedBtnComponent } from './bordered-btn.component';
import { By } from '@angular/platform-browser';
import { IconService } from '../../services/icon.service';


describe('BorderedBtnComponent', () => {
    let component: BorderedBtnComponent;
    let fixture: ComponentFixture<BorderedBtnComponent>;
    const iconService = new IconService();

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [BorderedBtnComponent],
            providers: [],
        });

        fixture = TestBed.createComponent(BorderedBtnComponent);

        component = fixture.componentInstance;

        fixture.detectChanges();
    });

    it('should create bordered btn component', () => {
        expect(component).toBeTruthy();
    });

    it('should show button text', () => {
        component.buttonText = 'Start';
        fixture.detectChanges();

        const btnText = fixture.debugElement.query(By.css('span')).nativeElement;
        expect(btnText.innerHTML).toEqual('Start');
    });

    it('should show fa-icon check', () => {
        component.showIcon = true;
        component.faIcon = iconService.faCheck;
        fixture.detectChanges();

        expect(fixture.debugElement.query(By.css('svg')).nativeElement).toBeTruthy();

        const faIconName = fixture.debugElement
            .query(By.css('svg'))
            .nativeElement.getAttribute('data-icon');

        expect(faIconName).toEqual('check');
    });

    it('should be disabled', () => {
        component.disabled = true;
        fixture.detectChanges();

        const button = fixture.debugElement.query(By.css('button')).nativeElement;
        expect(button.disabled).toBeTruthy();
    });

    it('should be filled on active', fakeAsync(() => {
        const button = fixture.debugElement.query(By.css('.simple'));
        const styles = window.getComputedStyle(button.nativeElement);

        expect(styles.backgroundColor).toEqual('rgba(0, 0, 0, 0)');

        component.active = true;
        fixture.detectChanges();

        expect(styles.backgroundColor).toEqual('rgb(199, 206, 250)');
    }));
});
