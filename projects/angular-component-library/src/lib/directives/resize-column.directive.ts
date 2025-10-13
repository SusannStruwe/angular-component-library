import {
    Directive,
    ElementRef,
    EventEmitter,
    HostListener,
    Input,
    Output
} from '@angular/core';

/**
 * Attribute Directive to resize column
 *
 * @howToUse
 * ```
 * <some-element
 * resizableColumn
 * >...</some-element>
 * ```
 */

@Directive({
    selector: '[resizableColumn]',
    standalone: true
})
export class ResizableColumnDirective {
    @Input() columnKey!: string;
    @Output() resizeStart = new EventEmitter<{
        column: string;
        startX: number;
    }>();

    resizing = false;

    constructor(private el: ElementRef) {}

    @HostListener('pointerdown', ['$event'])
    onPointerDown(event: PointerEvent) {
        if (!(event.target as HTMLElement).classList.contains('resizer'))
            return;

        event.stopPropagation();
        event.preventDefault();

        this.resizing = true;
        this.resizeStart.emit({
            column: this.columnKey,
            startX: event.clientX
        });
    }
}
