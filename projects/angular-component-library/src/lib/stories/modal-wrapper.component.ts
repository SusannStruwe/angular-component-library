import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModalService } from '../services/modal.service';
import { ModalComponent } from '../components/modal/modal.component';
import { FilledBtnComponent } from '../components/filled-btn/filled-btn.component';
import { FormsModule } from '@angular/forms';

/**
 * Wrapper to create and show a modal.
 *
 * @howToUse
 * ```
 * <modal-wrapper-component>
 * </modal-wrapper-component>
 * ```
 */
@Component({
    selector: 'modal-wrapper-component',
    standalone: true,
    imports: [
        CommonModule,
        FontAwesomeModule,
        FormsModule,
        ModalComponent,
        FilledBtnComponent
    ],
    templateUrl: './modal-wrapper.component.html'
})
export class ModalWrapperComponent {
    modalId1: string = Math.random().toString();
    modalId2: string = Math.random().toString();
    modalId3: string = Math.random().toString();
    modalId4: string = Math.random().toString();

    inputText: string | null = null;

    constructor(public modalService: ModalService) {}

    openModal1() {
        this.modalService.showCustomModal(this.modalId1);
    }

    openModal2() {
        this.modalService.showCustomModal(this.modalId2);
    }

    openModal3() {
        this.modalService.showCustomModal(this.modalId3);
    }

    openModal4() {
        this.modalService.showCustomModal(this.modalId4);
    }
}
