import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ColorPaletteComponent } from './color-palette.component';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { By } from '@angular/platform-browser';
import { Colors } from '../../model/colors';


describe('ColorPaletteComponent', () => {
    let component: ColorPaletteComponent;
    let fixture: ComponentFixture<ColorPaletteComponent>;
    const colorLength = Colors.standard.concat(Colors.cssColors).length;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ColorPaletteComponent, FontAwesomeTestingModule],
            providers: []
        }).compileComponents();

        fixture = TestBed.createComponent(ColorPaletteComponent);

        component = fixture.componentInstance;
        component.colors = Colors.standard.concat(Colors.cssColors);

        fixture.detectChanges();
    });

    it('should create color palette component', () => {
        expect(component).toBeTruthy();
    });

    it('color items length should equal to color service colors length', () => {
        const items = fixture.debugElement.queryAll(By.css('.color-item'));
        expect(items.length).toEqual(colorLength);
    });
});
