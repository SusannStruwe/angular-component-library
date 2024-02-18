import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ColorPaletteComponent } from './color-palette.component';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { TranslateModule } from '@ngx-translate/core';
import { ColorService } from 'src/app/service/color.service';
import { By } from '@angular/platform-browser';

describe('ColorPaletteComponent', () => {
    let component: ColorPaletteComponent;
    let fixture: ComponentFixture<ColorPaletteComponent>;
    const colorService = new ColorService();
    const colorLength = colorService.getColors().length;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ColorPaletteComponent, TranslateModule.forRoot(), FontAwesomeTestingModule],
            providers: [ColorService],
        }).compileComponents();

        fixture = TestBed.createComponent(ColorPaletteComponent);

        component = fixture.componentInstance;
        component.colors = colorService.getColors();

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
