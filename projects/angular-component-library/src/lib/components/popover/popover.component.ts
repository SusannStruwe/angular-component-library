import { Component, Input } from '@angular/core';

/**
 * Component to create and show popover.
 *
 * @howToUse
 * ```
 * <popover-component
 *   [show]="showHelpPopover"
 *   [alignmentRight]="true">
 *   <p>Popover content goes here.</p>
 * </popover-component>
 *
 * Key inputs:
 * - `show` controls whether the popover is visible.
 * - `alignmentRight` switches the popover alignment.
 * - The content is projected into the popover body.
 * ```
 */
@Component({
    selector: 'popover-component',
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
