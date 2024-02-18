import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FilledBtnComponent } from '../filled-btn/filled-btn.component';
import { BorderedBtnComponent } from '../bordered-btn/bordered-btn.component';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Subscription } from 'rxjs';;
import { ModalResult } from '../../model/modal-result.enum';
import { ModalType } from '../../model/modal-type.enum';
import { ModalService } from '../../services/modal.service';
import { IconService } from '../../services/icon.service';
import { SassHelperComponent } from '../sass-helper.component';

/**
 * Component to create and show a modal.
 *
 * @howToUse
 * ```
 * <modal-component>
 * </modal-component>
 * ```
 */
@Component({
    selector: 'modal-component',
    standalone: true,
    imports: [CommonModule, FilledBtnComponent, FontAwesomeModule, BorderedBtnComponent],
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit, OnDestroy {
    @ViewChild(SassHelperComponent) sassHelper?: SassHelperComponent;

    @Input() id: string = "";
    @Input() title = ' ';
    @Input() confirmBtn = true;
    @Input() confirmBtnText = 'Ok';
    @Input() showConfirmBtnLoader = false;
    @Input() confirmDisabled? = false;
    @Input() cancelBtn? = false;
    @Input() cancelBtnText? = 'Cancel';
    @Input() sizeClass = ['m'];

    faLoader: IconDefinition;
    faClose: IconDefinition;
    faCircleInfo: IconDefinition;
    faCircleXmark: IconDefinition;

    type: ModalType = ModalType.custom;
    modalType: typeof ModalType = ModalType;
    modalResult: typeof ModalResult = ModalResult;

    zIndex = 1000; // z-index-6 var TODO read var value from sassHelper Service

    description: string | null = null;
    private element: any;

    subscriptionOnClose?: Subscription;

    constructor(
        private modalService: ModalService,
        private el: ElementRef,
        private iconService: IconService,
    ) {
        this.element = this.el.nativeElement;
        this.faLoader = this.iconService.faLoader;
        this.faClose = this.iconService.faXmark;
        this.faCircleInfo = this.iconService.faCircleInfo;
        this.faCircleXmark = this.iconService.faCircleXmark;
    }

    ngOnInit(): void {
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }

        document.body.appendChild(this.element);
        this.modalService.addModal(this);
    }

    ngOnDestroy(): void {
        this.modalService.removeModal(this.id);
        this.element.remove();

        if (this.subscriptionOnClose) {
            this.subscriptionOnClose.unsubscribe();
        }
    }

    /**
     * Opens modal
     */
    openCustomModal(): void {
        this.zIndex = 1000 + this.modalService.modals.length;
        this.type = this.modalType.custom;
        this.element.style.display = 'flex';
    }

    /**
     * Closes modal
     * @param reason
     */
    closeModal(): void {
        this.modalService.closeModal(this.id);
        this.element.style.display = 'none';
    }

    /**
     * Closes and confirms modal
     * @param reason
     */
    confirmModal(): void {
        this.modalService.confirmModal(this.id);

        this.subscriptionOnClose = this.modalService.onClose$.subscribe((modalId) => {
            if (this.id === modalId && this.subscriptionOnClose) {
                this.subscriptionOnClose.unsubscribe();
                this.element.style.display = 'none';
            }
        });
    }

    /**
     * Close modal on click outside of modal-content
     */
    handleClickOutside(event: MouseEvent): void {
        const className = (event.target as HTMLElement).className;
        if (className === 'modal') {
            this.modalService.closeModal(this.id);
            this.element.style.display = 'none';
        }
    }

    /**
     * Shows info modal
     */
    openGenericModal(title: string, description: string, modalType: ModalType): void {
        this.type = modalType;
        this.title = title;
        this.description = description;
        this.element.style.display = 'flex';
    }
}
