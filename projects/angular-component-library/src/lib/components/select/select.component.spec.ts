import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectComponent } from './select.component';
import { By } from '@angular/platform-browser';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { SelectItem } from '../../model/select-item.model';

describe('SelectComponent', () => {
    let component: SelectComponent;
    let fixture: ComponentFixture<SelectComponent>;

    const selectedItem = new SelectItem('Test');

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [SelectComponent, FontAwesomeTestingModule],
            providers: []
        }).compileComponents();

        fixture = TestBed.createComponent(SelectComponent);

        component = fixture.componentInstance;
        component.selectedItem = selectedItem;

        fixture.detectChanges();
    });

    it('should create select component', () => {
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

    it('show filter if withFilter is true', () => {
        const withFilter = component.withFilter;
        const input = fixture.debugElement.query(By.css('input'));
        if (withFilter) {
            expect(input).toBeTruthy();
        } else {
            expect(input).toBeFalsy();
        }
    });

    it('check background color is transparent if class is navbar', () => {
        const button = fixture.debugElement.query(By.css('button'));
        const styles = window.getComputedStyle(button.nativeElement);

        if (button.nativeElement.classList.contains('navbar')) {
            expect(styles.backgroundColor).toEqual('rgba(0, 0, 0, 0)'); // transparent
        } else {
            expect(styles.backgroundColor).toEqual('rgba(0, 0, 0, 0)');
        }
    });
});
