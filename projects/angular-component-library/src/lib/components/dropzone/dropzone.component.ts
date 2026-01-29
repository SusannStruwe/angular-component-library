import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { FileDragNDropDirective } from '../../directives/drag-drop-file.directive';
import { Icons } from '../../model/icons';

/**
 * Component to upload files by drag and drop or simple upload button
 *
 * @howToUse
 * ```
 * <dropzone-component
 *   [files]="planningInputFiles"
 *   [fileArrayLength]="100"
 *   [fileArraySize]="100"
 *   (filesChanged)="filesChanged($event)">
 * </dropzone-component>
 * ```
 */
@Component({
    selector: 'dropzone-component',
    imports: [CommonModule, FontAwesomeModule, FileDragNDropDirective],
    templateUrl: './dropzone.component.html',
    styleUrls: ['./dropzone.component.scss']
})
export class DropzoneComponent {
    @Input() allowedExtension: string[] = ['json'];
    @Input() choseFileLabel: string = '';
    @Input() fileArrayLength = 100;
    @Input() files: File[] = [];
    @Input() maxSizeOfFiles = 5000; // 10 MB
    @Input() height?: string = '100px';
    @Input() width?: string;

    @Output() filesChanged = new EventEmitter<File[]>(); // When true, deliver events asynchronously.
    @Output() fileExistsError = new EventEmitter<File>();
    @Output() maxListSizeReachedError = new EventEmitter<number>();
    @Output() fileTypeNotAllowedError = new EventEmitter<string>();

    faUpload: IconDefinition = Icons.faUpload;
    faFile: IconDefinition = Icons.faFile;
    faRemove: IconDefinition = Icons.faTrash;
    randomId: string = Math.floor(Math.random() * 16777215).toString(16);

    onLangChangeSubscription?: Subscription;

    FILE_SIZE_CONVERTER = 1024;

    constructor(private translate: TranslateService) {}

    /**
     * Provides the current lang
     */
    getLocale() {
        return this.translate.getCurrentLang();
    }

    /**
     * Triggered if file changed in drop zone
     * @param files
     */
    onFileChange(fileList: File[]) {
        if (fileList.length < this.fileArrayLength) {
            this.addFile(fileList);
        } else {
            this.replaceFileWithLastItems(fileList);
        }
    }

    /**
     * Triggered if file changed in drop zone
     * @param event
     */
    onInputFileChange(event: Event) {
        if (
            (event.target as HTMLInputElement).files &&
            (event.target as HTMLInputElement).files!.length
        ) {
            const fileList: FileList | null = (event.target as HTMLInputElement)
                .files;
            const files = Array.from(fileList as FileList);

            if (files && files.length < this.fileArrayLength) {
                this.addFile(files);
            } else {
                this.replaceFileWithLastItems(files);
            }
        }
    }

    /**
     * Adds file to array
     * @param event
     */
    addFile(files: File[] | FileList): void {
        const fileArray = Array.from(files);

        fileArray.forEach((file: File) => {
            if (
                !this.fileExists(file) &&
                this.isAllowedFileType(file) &&
                !this.maxListSizeReached(file)
            ) {
                this.files.push(file);
                this.filesChanged.emit(this.files);
            }
        });
    }

    /**
     * Replaces file in array with last items
     * @param event
     */
    replaceFileWithLastItems(files: File[]): void {
        files.forEach((file: File) => {
            if (
                this.isAllowedFileType(file) &&
                !this.maxListSizeReached(file)
            ) {
                this.files[this.files.length - 1] = file;
                this.filesChanged.emit(this.files);
            }
        });
    }

    /**
     * Gets a list of files from event
     * @param event
     * @returns
     */
    getFilesFromEvent(event: any): File[] {
        let files = [];
        if (event instanceof FileList) {
            files = Array.from(event as FileList);
        } else {
            files = event.target.files;
        }
        return files;
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
            this.fileTypeNotAllowedError.emit(type);
            return false;
        }
    }

    /**
     * Checks if file exists in List
     * @param file
     * @returns
     */
    fileExists(file: File): boolean {
        if (this.files.some((f) => f.name === file.name)) {
            this.fileExistsError.emit(file);
            return true;
        } else {
            return false;
        }
    }

    /**
     * Checks if max size of list reached (with new files)
     * @param file
     * @returns
     */
    maxListSizeReached(file: File): boolean {
        let kbSize = 0;
        // get size of all olf files
        this.files.forEach((f) => (kbSize = kbSize + f.size));

        // add size of new file
        kbSize = (kbSize + file.size) / this.FILE_SIZE_CONVERTER;

        if (kbSize <= this.maxSizeOfFiles) {
            return false;
        } else {
            this.maxListSizeReachedError.emit(kbSize);
            return true;
        }
    }

    /**
     * Removed file from array
     * @param f
     */
    removeFile(f: File) {
        this.files = this.files.filter(function (item) {
            return (
                item.name !== f.name &&
                item.lastModified !== f.lastModified &&
                item.size !== f.size
            );
        });
        this.filesChanged.emit(this.files);
    }
}
