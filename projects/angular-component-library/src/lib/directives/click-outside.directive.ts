import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
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
  selector: '[clickOutside]',
  standalone: true,
})
export class ClickOutsideDirective {
  @Output('clickOutside') outsideClick = new EventEmitter<MouseEvent>();
  nestedChilds: any[] = [];

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event', '$event.target'])
  onClick(event: Event, targetElement: HTMLElement): void {
    event.stopPropagation();
    const childNodes = this.elementRef.nativeElement.childNodes;
    this.getAllChilds(childNodes);
    // const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    if (
      this.nestedChilds.filter((item) => item === targetElement).length === 0
    ) {
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
