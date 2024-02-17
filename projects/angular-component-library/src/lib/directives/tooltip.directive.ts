import { Directive, ElementRef, HostListener, Input, OnDestroy } from '@angular/core';

/**
 * Directive to show tooltip on mouse over
 *
 * @howToUse
 * ```
 * <some-element [tooltip]=" 'tooltip.link' | translate">...</some-element>
 * ```
 */
@Directive({
    selector: '[tooltip]',
    standalone: true
})
export class TooltipDirective implements OnDestroy {
    @Input() tooltip = ''; // The text for the tooltip to display
    @Input() placement? = 'bottom';
    @Input() delay? = 100;

    timer: any = 0;
    private tooltipEl: HTMLElement | null = null;

    constructor(private el: ElementRef) {}

    ngOnDestroy() {
        if (this.tooltipEl) {
            this.tooltipEl.remove();
        }
    }

    @HostListener('mouseenter', ['$event']) onMouseEnter(event: MouseEvent) {
        this.timer = setTimeout(() => {
            const y =
                this.el.nativeElement.getBoundingClientRect().top +
                this.el.nativeElement.offsetHeight +
                6; // Get the bottom of the element
            this.createTooltipPopup(event.clientX, y);
        }, this.delay);
    }

    @HostListener('mouseleave', ['$event']) onMouseLeave(event: MouseEvent) {
        clearTimeout(this.timer);
        if (this.tooltipEl) {
            this.tooltipEl.remove();
        }
    }

    private createTooltipPopup(x: number, y: number) {
        const popup = document.createElement('div');
        popup.innerHTML = this.tooltip;
        popup.setAttribute('class', 'tooltip-container bottom ');
        popup.style.top = y + 'px';
        popup.style.left = x + 'px';

        document.body.appendChild(popup);
        this.tooltipEl = popup;
    }
}
