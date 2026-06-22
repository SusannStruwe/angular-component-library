import {
    Directive,
    ElementRef,
    EventEmitter,
    HostListener,
    Input,
    Output,
    inject
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
    selector: '[resizableColumn]'
})
export class ResizableColumnDirective {
    private el = inject(ElementRef);

    @Input() columnKey!: string;
    @Output() resizeStart = new EventEmitter<{
        column: string;
        startX: number;
    }>();

    resizing = false;

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
