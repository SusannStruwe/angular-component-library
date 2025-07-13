import { Component, Input } from '@angular/core';

/**
 * Component to create and show popover.
 *
 * @howToUse
 * ```
 * <popover-component>
 * </popover-component>
 * ```
 */
@Component({
    selector: 'popover-component',
    standalone: true,
    imports: [],
    templateUrl: './popover.component.html',
    styleUrls: ['./popover.component.scss']
})
export class PopoverComponent {
    @Input() alignmentRight = false;
    @Input() show = false;

    /**
     * Toggle show state
     */
    togglePopover(): void {
        this.show = !this.show;
    }
}
