import { Component, OnInit } from '@angular/core';
import { Colors } from '../../model/colors';

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
    styleUrls: ['./color-palette.component.scss']
})
export class ColorPaletteComponent implements OnInit {
    colors: string[] = [];

    ngOnInit() {
        this.colors = Colors.standard.concat(Colors.cssColors);
    }
}
