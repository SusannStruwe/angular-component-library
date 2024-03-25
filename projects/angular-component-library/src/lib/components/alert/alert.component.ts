import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
    faBan,
    faCircleCheck,
    faCircleExclamation,
    faTriangleExclamation,
    faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { AlertType } from '../../model/alert-type.enum';
import { RouterModule } from '@angular/router';


/**
 * Component to create and show alert.
 *
 * @howToUse
 * ```
 * <alert-component
 *   [(visibleState)]="showAlert"
 *   [message]="errorMsg"
 *   [type]="alertTypeError"
 * ></alert-component>
 * ```
 */
@Component({
    selector: 'alert-component',
    standalone: true,
    imports: [CommonModule, FontAwesomeModule, RouterModule],
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.scss'],
})
export class AlertComponent {
    @Input() title = '';
    // message to display, realized as htmlInput
    @Input() message = '';
    // info, success, error, waring
    @Input() type: AlertType = AlertType.SUCCESS;
    // if state is true, alert is shown
    @Input() visibleState = false;

    @Input() navigationLink?: string;
    @Input() navigationLinkLabel?: string;

    //with 'Change' add the end you can realize two-way-binding
    @Output() visibleStateChange = new EventEmitter<boolean>();

    faErrorIcon = faBan;
    faWarningIcon = faTriangleExclamation;
    faSuccessIcon = faCircleCheck;
    faInfoIcon = faCircleExclamation;
    faClose = faXmark;

    removeAlert(): void {
        this.visibleState = false;
        this.visibleStateChange.emit(this.visibleState);
    }
}
