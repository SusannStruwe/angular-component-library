import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoaderStyle } from '../../model/loader-style.enum';

/**
 * Component to create and show a loader/ spinner.
 *
 * @howToUse
 * ```
 * <loader-component
 *   [style.border]="'1px solid #ddd'"
 *   [loaderStyle]="dotLoader2"
 *   [label]="'Daten werden geladen...'">
 * </loader-component>
 * ```
 */
@Component({
  selector: 'loader-component',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent {
  @Input() loaderStyle?: LoaderStyle;
  //example -> linear, ease
  @Input() animation?: string;

  @Input() label?: string;
}
