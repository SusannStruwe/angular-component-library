import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { LangChangeEvent, TranslateModule, TranslateService } from '@ngx-translate/core';
import { FileDragNDropDirective } from '../../directives/drag-drop-file.directive';
import { IconService } from '../../services/icon.service';
import { ModalService } from '../../services/modal.service';

/**
 * Component to upload files by drag and drop or simple upload button
 *
 * @howToUse
 * ```
 * <dropzone-component
 *   [files]="planningInputFiles"
 *   [fileArrayLength]="100"
 *   (filesChanged)="filesChanged($event)">
 * </dropzone-component>
 * ```
 */
@Component({
    selector: 'dropzone-component',
    standalone: true,
    imports: [CommonModule, FontAwesomeModule, FileDragNDropDirective, TranslateModule],
    templateUrl: './dropzone.component.html',
    styleUrls: ['./dropzone.component.scss'],
})
export class DropzoneComponent implements OnInit {
    @Input() dropHeight = 100;
    @Input() allowedExtension: string[] = ['json'];
    @Input() fileArrayLength = 1;
    @Input() files: File[] = [];
    @Input() choseFileLabel: string = "";
    @Input() dropItLabel: string = "";

    @Output() filesChanged = new EventEmitter<File[]>(); // When true, deliver events asynchronously.

    localeId = 'de-DE';
    faUpload: IconDefinition;
    faFile: IconDefinition;
    faRemove: IconDefinition;
    randomId: string = Math.floor(Math.random() * 16777215).toString(16);

    constructor(
        private modalService: ModalService,
        private translate: TranslateService,
        private iconService: IconService,
    ) {
        this.faUpload = this.iconService.faUpload;
        this.faFile = this.iconService.faFile;
        this.faRemove = this.iconService.faTrash;
    }

    ngOnInit() {
        this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
            this.localeId = event.lang + '-' + event.lang.toUpperCase();
        });
    }

    /**
     * Triggered if file changed
     * @param event
     */
    onFileChange(event: any) {
        if (this.files.length < this.fileArrayLength) {
            this.addFile(event);
        } else {
            this.replaceFile(event);
        }
        this.filesChanged.emit(this.files);
    }

    /**
     * Adds file to array
     * @param event
     */
    addFile(event: any): void {
        if (event instanceof FileList) {
            Array.from(event as FileList).forEach(async (file) => {
                if (this.isAllowedFileType(file) && !this.files.some((f) => f.name === file.name)) {
                    this.files.push(file);
                }
            });
        } else {
            for (let i = 0; i < event.target.files.length; i++) {
                const file = event.target.files[i];
                if (
                    this.isAllowedFileType(file) &&
                    this.files.length < this.fileArrayLength &&
                    !this.files.some((f) => f.name === file.name)
                ) {
                    this.files.push(file);
                }
            }
        }
    }

    /**
     * Replaces file to array
     * @param event
     */
    replaceFile(event: any): void {
        if (event instanceof FileList) {
            Array.from(event as FileList).forEach(async (file) => {
                if (this.isAllowedFileType(file)) this.files[this.files.length - 1] = file;
            });
        } else {
            for (let i = 0; i < event.target.files.length; i++) {
                if (this.isAllowedFileType(event.target.files[i])) {
                    this.files[this.files.length - 1] = event.target.files[i];
                }
            }
        }
    }

    /**
     * Checks file type is allowed
     * @param file
     * @returns
     */
    isAllowedFileType(file: File): boolean {
        const type = file.name.split('.').pop();
        if (type && this.allowedExtension.includes(type)) {
            return true;
        } else {
            const title = this.translate.instant('modal.note');
            const description = this.translate.instant('modal.allowedExtensionNote');
            this.modalService.showInfoModal(title, description);
            return false;
        }
    }

    /**
     * Removed file from array
     * @param f
     */
    removeFile(f: File) {
        this.files = this.files.filter(function (item) {
            return item.name !== f.name;
        });
        this.filesChanged.emit(this.files);
    }
}
