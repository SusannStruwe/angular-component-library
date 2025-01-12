import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

/**
 * Component to create a navbar button.
 *
 * @howToUse
 * ```
 * <navbar-btn-component
 *  [label]="'scheduler.today' | translate "
 *  [faIcon] = "faCog">
 * </navbar-btn-component>
 * ```
 */
@Component({
  selector: 'navbar-btn-component',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './navbar-btn.component.html',
  styleUrls: ['./navbar-btn.component.scss'],
})
export class NavbarBtnComponent {
  @Input() label?: string;

  @Input() faIcon?: IconDefinition;

  @Input() disabled?: boolean;
  // example --> gray, delete
  @Input() classStyle?: string = '';

  // example --> active or not
  @Input() active?: boolean;
}
