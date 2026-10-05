import { Component, OnInit } from '@angular/core';
import { Colors } from '../../model/colors';

/**
 * Component to show colors from color service in a grid
 *
 * @howToUse
 * ```
 * <color-palette-component></color-palette-component>
 *
 * Key behavior:
 * - This component has no public inputs.
 * - It renders the standard library colors and CSS colors as a visual reference grid.
 * ```
 */
@Component({
    selector: 'color-palette-component',
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
