import { Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { ModalComponent } from "./modal.component";
import { ModalWrapperComponent } from "../../stories/modal-wrapper.component";
import { ModalService } from "../../services/modal.service";

export default {
    title: 'Components/Modal (via Service)',
    component: ModalWrapperComponent,
    decorators: [
        moduleMetadata({
        imports: [ModalWrapperComponent, ModalComponent],
        providers: [ModalService],
        }),
    ],
        parameters: {
        docs: {
            description: {
                component: `
A modal component can be used via ModalService.

Create a modal with ModalComponent and open this modal via the ModalService with the method  \`showCustomModal(modalId)\`

You can subcsribe to the following events:
- onConfirm (for confirm or delete btn selected)
- onClose (for cancel btn selected)

... like this:

\`this.subscriptionOnConfirm = this.modalService.onConfirm$.subscribe((modalId) => {
        if (modalId === this.modalId) {
                ... do something
            this.modalService.closeModal(this.modalId);
            this.modalClosed.emit(true);
        }
    });
\`

Note: You have to close the modal after confirmation!


A few examples are shown in the following:

####1. Modal with confirm btn
\`<modal-component
    [id]="modalId1"
    [title]="'Modal with confirm btn'"
    [sizeClass]="['s']"
    [confirmBtn]="true"
    [confirmBtnTxt]="'Speichern'">
    <div>
        <p>Modal with confirm btn</p>
    </div>
</modal-component>\`


####2. Modal with confirm and cancel btn
\`<modal-component
    [id]="modalId2"
    [title]="'Modal with confirm and cancel btn'"
    [sizeClass]="['m']"
    [confirmBtn]="true"
    [confirmBtnTxt]="'Speichern'"
    [cancelBtn]="true"
    [cancelBtnTxt]="'Schließen'">
    <div>
        <p>Modal with confirm and cancel btn</p>
    </div>
</modal-component>\`


####3. Modal with delete and cancel btn
\`<modal-component
    [id]="modalId3"
    [title]="'Modal with delete and cancel btn'"
    [sizeClass]="['l']"
    [confirmBtn]="false"
    [deleteBtn]="true"
    [deleteBtnTxt]="'Löschen'"
    [cancelBtn]="true"
    [cancelBtnTxt]="'Schließen'">
    <div>
        <p>Content to create new item</p>
    </div>
</modal-component>\`

####4. Modal with disabled delete and cancel btn
\`<modal-component
    [id]="modalId4"
    [title]="'Modal with disabled delete and cancel btn [size l]'"
    [sizeClass]="['l']"
    [confirmBtn]="false"
    [confirmDisabled]="inputText === null || inputText === ''"
    [deleteBtn]="true"
    [deleteBtnTxt]="'Löschen'"
    [cancelBtn]="true"
    [cancelBtnTxt]="'Schließen'">
    <div>
        <p>Add some text to enable delete btn</p>
       <input
            class="custom-input"
            type="text"
            [(ngModel)]="inputText"/>
    </div>
</modal-component>\`

                `
            }
        }
    },
    tags: ['autodocs']
} as Meta;

type Story = StoryObj<ModalWrapperComponent>;

export const Sample: Story = {
  args: {},
};