import { Directive, EventEmitter, Input, OnInit, Output } from '@angular/core';

/**
 * Directive checks if is last element
 *
 * @howToUse
 * ```
 * <some-element [isLast]="last" (lastDone)="function()">...</some-element>
 * ```
 */
@Directive({
    selector: '[isLast]'
})
export class IsLastDirective implements OnInit {
    @Input() isLast = false;

    @Output() lastDone: EventEmitter<boolean> = new EventEmitter<boolean>();

    ngOnInit() {
        if (this.isLast) {
            this.lastDone.emit(true);
        }
    }
}
