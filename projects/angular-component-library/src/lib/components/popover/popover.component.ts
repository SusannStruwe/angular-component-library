import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

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
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./popover.component.scss']
})
export class PopoverComponent {
    @Input() alignmentRight = false;
    @Input() show = false;
    @Input() maxWidth = '450px';

    /**
     * Toggle show state
     */
    togglePopover(): void {
        this.show = !this.show;
    }
}
