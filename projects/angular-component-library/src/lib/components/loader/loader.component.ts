import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AnimationStyle, LoaderStyle } from '../../model/loader-style.enum';

/**
 * Component to create and show a loader/ spinner.
 *
 * @howToUse
 * ```
 * <loader-component
 *   [style.border]="'1px solid #ddd'"
 *   [loaderStyle]="loaderStyleDotLoader2"
 *   [animation]="'linear'"
 *   [label]="'Loading data...'"
 *   [paddingTop]="'80px'">
 * </loader-component>
 *
 * Key inputs:
 * - `loaderStyle` controls the visual loader variant.
 * - `animation` controls the timing function.
 * - `label` adds optional descriptive text.
 * - `paddingTop` controls the vertical spacing around the loader.
 * ```
 */
@Component({
    selector: 'loader-component',
    imports: [CommonModule, FontAwesomeModule],
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
    @Input() loaderStyle?: LoaderStyle;
    //example -> linear, ease
    @Input() animation?: string | AnimationStyle;

    @Input() label?: string;

    @Input() paddingTop?: string = '20%';
}
