import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ModalType } from '../model/modal-type.enum';
import { ModalComponent } from '../components/modal/modal.component';
import { NonModalComponent } from '../components/non-modal/non-modal.component';

/**
 * Modal service to create and show modal
 */
@Injectable({
    providedIn: 'root',
})
export class ModalService {
    onConfirm$: Subject<string> = new Subject<string>();
    onClose$: Subject<string> = new Subject<string>();

    modals: ModalComponent[] = [];
    private nonModals: NonModalComponent[] = [];

    /**
     * Adds a modal to list
     * Called by modalComponent
     * @param modal
     */
    addModal(modal: ModalComponent) {
        this.modals.push(modal);
    }

    /**
     * Adds a non modal to list
     * Called by nonModalComponent
     * @param modal
     */
    addNonModal(modal: NonModalComponent) {
        this.nonModals.push(modal);
    }

    /**
     * Removes a modal from list
     * Called by modalComponent
     * @param modalId
     */
    removeModal(modalId: string) {
        this.modals = this.modals.filter((x) => x.id !== modalId);
    }

    /**
     * Removes a non modal from list
     * Called by nonModalComponent
     * @param modalId
     */
    removeNonModal(modalId: string) {
        this.nonModals = this.nonModals.filter((x) => x.id !== modalId);
    }

    /**
     * Shows a custom modal by id
     * Called on ModalComponent
     * @param modalId
     */
    showCustomModal(modalId: string) {
        const modal: ModalComponent | undefined = this.modals.find((x) => x.id === modalId);
        if (modal) {
            modal.openCustomModal();
        }
    }

    /**
     * Shows a generic modal with modal type error
     * Called on ModalComponent
     * @param title
     * @param description
     */
    showErrorModal(title: string, description: string): void {
        const id = 'generic-modal';
        const modal: ModalComponent | undefined = this.modals.find((x) => x.id === id);
        if (modal) {
            modal.openGenericModal(title, description, ModalType.error);
        }
    }

    /**
     * Shows a generic modal with modal type info
     * Called on ModalComponent
     * @param title
     * @param description
     */
    showInfoModal(title: string, description: string): void {
        const id = 'generic-modal';
        const modal: ModalComponent | undefined = this.modals.find((x) => x.id === id);
        if (modal) {
            modal.openGenericModal(title, description, ModalType.info);
        }
    }

    /**
     * Shows non modal
     * Called on NonModalComponent
     * @param nonModalId
     */
    showNonModal(nonModalId: string) {
        const modal: NonModalComponent | undefined = this.nonModals.find(
            (x) => x.id === nonModalId,
        );
        if (modal) {
            modal.open();
        }
    }

    /**
     * Confirms a modal by id
     * Called by ModalComponent
     * Subscribe to subject to get modalId on confirmation
     * @param modalId
     */
    confirmModal(modalId: string) {
        this.onConfirm$.next(modalId);
    }

    /**
     * Confirms a modal by id
     * Called by ModalComponent
     * Subscribe to subject to get modalId on confirmation
     * @param modalId
     */
    closeModal(modalId: string) {
        this.onClose$.next(modalId);
    }

    /**
     * Closes a non modal by id
     * Called by NonModalComponent
     * Subscribe to subject to get modalId on confirmation
     * @param nonModalId
     */
    closeNonModal(nonModalId: string) {
        this.onClose$.next(nonModalId);
    }
}
