import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContextMenuComponent } from './context-menu.component';
import { By } from '@angular/platform-browser';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';

describe('ContextMenuComponent', () => {
    let component: ContextMenuComponent;
    let fixture: ComponentFixture<ContextMenuComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ContextMenuComponent, FontAwesomeTestingModule],
            providers: []
        }).compileComponents();

        fixture = TestBed.createComponent(ContextMenuComponent);

        component = fixture.componentInstance;

        fixture.detectChanges();
    });

    it('should create context menu component', () => {
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
