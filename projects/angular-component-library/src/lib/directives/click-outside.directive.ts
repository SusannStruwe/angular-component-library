import {
    Directive,
    ElementRef,
    EventEmitter,
    HostListener,
    Output,
    inject
} from '@angular/core';

/**
 * Directive to handle click outside event
 *
 * @howToUse
 * ```
 * <some-element (clickOutside)="handleClickOutside()">...</some-element>
 * ```
 */
@Directive({
    selector: '[clickOutside]'
})
export class ClickOutsideDirective {
    private elementRef = inject(ElementRef);

    @Output('clickOutside') outsideClick = new EventEmitter<MouseEvent>();
    nestedChilds: any[] = [];

    @HostListener('document:click', ['$event', '$event.target'])
    onClick(event: Event, target: EventTarget | null): void {
        event.stopPropagation();
        const childNodes = this.elementRef.nativeElement.childNodes;
        this.getAllChilds(childNodes);
        // const clickedInside = this.elementRef.nativeElement.contains(targetElement);
        if (this.nestedChilds.filter((item) => item === target).length === 0) {
            this.outsideClick.emit();
        }
    }

    getAllChilds(childNodes: any): void {
        childNodes.forEach((item: any) => {
            if (item.childNodes) {
                this.nestedChilds.push(item);
                this.getAllChilds(item.childNodes);
            }
        });
    }
}
