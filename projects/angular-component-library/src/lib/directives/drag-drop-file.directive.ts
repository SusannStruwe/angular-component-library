import { Directive, EventEmitter, HostBinding, HostListener, Output } from '@angular/core';

/**
 * Directive to handle droped file event in dropzone
 *
 * @howToUse
 * ```
 * <some-element dragDropFile (filesChangeEmitter)="onFileChange($event)">...</some-element>
 * ```
 */
@Directive({
    selector: '[dragDropFile]',
    standalone: true
})
export class FileDragNDropDirective {
    @Output() filesChangeEmitter: EventEmitter<File[]> = new EventEmitter();

    @HostBinding('style.border') borderStyle = '2px dashed';
    @HostBinding('style.border-color') borderColor = '#aaa';
    @HostBinding('style.border-radius') borderRadius = '3px';

    @HostListener('dragover', ['$event']) public onDragOver(evt: Event) {
        evt.preventDefault();
        evt.stopPropagation();

        const bodyStyles = window.getComputedStyle(document.body);
        const primayColor = bodyStyles.getPropertyValue('--primary-color');
        this.borderColor = primayColor;
        this.borderStyle = '2px solid';
    }

    @HostListener('dragleave', ['$event']) public onDragLeave(evt: Event) {
        evt.preventDefault();
        evt.stopPropagation();
        this.borderColor = '#aaa';
        this.borderStyle = '2px dashed';
    }

    @HostListener('drop', ['$event']) public onDrop(evt: any) {
        evt.preventDefault();
        evt.stopPropagation();
        this.borderColor = '#aaa';
        this.borderStyle = '2px dashed';
        const files = evt.dataTransfer.files;
        const valid_files: Array<File> = files;
        this.filesChangeEmitter.emit(valid_files);
    }
}
