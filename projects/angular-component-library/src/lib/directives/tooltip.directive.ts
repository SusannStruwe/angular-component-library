import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnDestroy,
} from '@angular/core';

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
  standalone: true,
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
    const elementWidth = Math.round(
      this.el.nativeElement.getBoundingClientRect().width,
    );
    const leftPosition = Math.trunc(
      this.el.nativeElement.getBoundingClientRect().left,
    );
    const windowWidth = window.innerWidth;

    this.timer = setTimeout(() => {
      let y = 0;
      let x = leftPosition + elementWidth / 2;

      if (leftPosition + elementWidth > windowWidth - 10) {
        x = leftPosition + 5;
      }

      y =
        this.el.nativeElement.getBoundingClientRect().top +
        this.el.nativeElement.offsetHeight +
        6;

      this.createTooltipPopup(x, y);
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
