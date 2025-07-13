import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlertComponent } from './alert.component';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { By } from '@angular/platform-browser';
import { AlertType } from '../../model/alert-type.enum';

describe('AlertComponent', () => {
    let component: AlertComponent;
    let fixture: ComponentFixture<AlertComponent>;
    const title = 'Attention';

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [AlertComponent, FontAwesomeTestingModule],
            providers: []
        });

        fixture = TestBed.createComponent(AlertComponent);

        component = fixture.componentInstance;
        component.title = title;
        component.visibleState = true;

        fixture.detectChanges();
    });

    it('should create alert component', () => {
        expect(component).toBeTruthy();
    });

    it('should show title', () => {
        const titleEl = fixture.debugElement.query(By.css('b')).nativeElement;
        expect(titleEl.innerHTML).toEqual(title);
    });

    it('should show circle-xmark icon if alert type is error', () => {
        component.type = AlertType.ERROR;
        fixture.detectChanges();

        const faIconName = fixture.debugElement
            .query(By.css('svg'))
            .nativeElement.getAttribute('data-icon');
        expect(faIconName).toEqual('circle-xmark');
    });

    it('should show circle-exclamation icon if alert type is warning', () => {
        component.type = AlertType.WARNING;
        fixture.detectChanges();

        const faIconName = fixture.debugElement
            .query(By.css('svg'))
            .nativeElement.getAttribute('data-icon');
        expect(faIconName).toEqual('circle-exclamation');
    });

    it('should show circle-check icon if alert type is success', () => {
        component.type = AlertType.SUCCESS;
        fixture.detectChanges();

        const faIconName = fixture.debugElement
            .query(By.css('svg'))
            .nativeElement.getAttribute('data-icon');
        expect(faIconName).toEqual('circle-check');
    });

    it('should show circle-exclamation icon if alert type is info', () => {
        component.type = AlertType.INFO;
        fixture.detectChanges();

        const faIconName = fixture.debugElement
            .query(By.css('svg'))
            .nativeElement.getAttribute('data-icon');
        expect(faIconName).toEqual('circle-exclamation');
    });

    it('should hide alert on click close btn', () => {
        fixture.detectChanges();

        const closeBtn = fixture.debugElement.query(
            By.css('.close')
        ).nativeElement;
        closeBtn.click();

        fixture.detectChanges();
        expect(component.visibleState).toBeFalse();
    });
});
