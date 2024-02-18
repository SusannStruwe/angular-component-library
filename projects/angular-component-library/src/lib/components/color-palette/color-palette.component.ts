import { Component, OnInit } from '@angular/core';
import { ColorService } from '../../services/color.service';


/**
 * Component to show colors from color service in a grid
 *
 * @howToUse
 * ```
 * <color-palette-component></color-palette-component>
 * ```
 */
@Component({
    selector: 'color-palette-component',
    standalone: true,
    imports: [],
    templateUrl: './color-palette.component.html',
    styleUrls: ['./color-palette.component.scss'],
})
export class ColorPaletteComponent implements OnInit {
    colors: string[] = [];

    constructor(private colorService: ColorService) {}

    ngOnInit() {
        this.colors = this.colorService.colors;
    }
}
