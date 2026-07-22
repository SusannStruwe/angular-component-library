import { CommonModule } from '@angular/common';
import {
    Component,
    ElementRef,
    Input,
    OnDestroy,
    OnInit,
    ViewChild,
    inject
} from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { ModalResult } from '../../model/modal-result.enum';
import { ModalService } from '../../services/modal.service';
import { Icons } from '../../model/icons';

/**
 * Component to create and show a modal.
 *
 * @howToUse
 * ```
 * <non-modal-component
 *   [id]="'details-panel'"
 *   [title]="'Details'"
 *   [sizeClass]="'m'">
 *   <div>
 *       <h3>Selected item</h3>
 *       <p>Place your non-modal content here.</p>
 *   </div>
 * </non-modal-component>
 *
 * Key inputs:
 * - `id` is required and is used by the modal service.
 * - `title` and `sizeClass` define the panel header and size.
 * - The main content is projected into the body.
 *
 * Open the panel through the `ModalService` with the configured `id`.
 * ```
 */
@Component({
    selector: 'non-modal-component',
    imports: [CommonModule, FontAwesomeModule, DragDropModule],
    templateUrl: './non-modal.component.html',
    styleUrls: ['./non-modal.component.scss']
})
export class NonModalComponent implements OnInit, OnDestroy {
    private modalService = inject(ModalService);
    private el = inject(ElementRef);

    @Input() id: string = '';
    @Input() title = ' ';
    @Input() sizeClass = 'm';

    @ViewChild('nonModalContent')
    nonModalContentRef?: ElementRef<HTMLDivElement>;

    modalResult: typeof ModalResult = ModalResult;

    faClose: IconDefinition = Icons.faXmark;

    private element: any;

    constructor() {
        this.element = this.el.nativeElement;
    }

    ngOnInit(): void {
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }
        document.body.appendChild(this.element);
        this.modalService.addNonModal(this);
    }

    ngOnDestroy(): void {
        this.modalService.removeNonModal(this.id);
        this.element.remove();
    }

    /**
     * Opens modal
     */
    open(): void {
        this.element.style.display = 'flex';
    }

    /**
     * Closes modal
     * @param reason
     */
    close(): void {
        this.modalService.closeNonModal(this.id);
        this.element.style.display = 'none';

        if (this.nonModalContentRef?.nativeElement.style.transform) {
            this.nonModalContentRef.nativeElement.style.transform = 'initial';
        }
    }

    /**
     * Close modal on click outside of non-modal-content
     */
    /*handleClickOutside(event: MouseEvent): void {
        const className = (event.target as HTMLElement).className;
        if (className === 'non-modal') {
            this.close();
        }
    }*/
}
