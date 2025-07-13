import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomSelectComponent } from './custom-select.component';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { By } from '@angular/platform-browser';

describe('CustomSelectComponent', () => {
    let component: CustomSelectComponent;
    let fixture: ComponentFixture<CustomSelectComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [CustomSelectComponent, FontAwesomeTestingModule],
            providers: []
        }).compileComponents();

        fixture = TestBed.createComponent(CustomSelectComponent);

        component = fixture.componentInstance;

        fixture.detectChanges();
    });

    it('should create context select component', () => {
        expect(component).toBeTruthy();
    });

    it('should create button', () => {
        const button = fixture.debugElement.query(By.css('button'));
        expect(button).toBeTruthy();
    });

    it('should create menu', () => {
        const menu = fixture.debugElement.query(By.css('.menu'));
        expect(menu).toBeTruthy();
    });

    it('menu has no class show before click', () => {
        expect(fixture.debugElement.query(By.css('.show'))).toBeFalsy();
    });

    it('menu has class show after click', () => {
        const button = fixture.debugElement.query(
            By.css('button')
        ).nativeElement;
        button.click();
        fixture.detectChanges();
        const menu = fixture.debugElement.query(By.css('.menu')).nativeElement;
        expect(menu).toHaveClass('show');
    });
});
