import { CommonModule } from '@angular/common';
import {
    ChangeDetectorRef,
    Component,
    EventEmitter,
    HostBinding,
    Input,
    OnInit,
    Output,
    inject
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ClickOutsideDirective } from '../../directives/click-outside.directive';

/**
 * Component to show and hide content by button click
 *
 * @howToUse
 * ```
 * <collapsible-component
 *     [(show)]="showAdvancedSettings"
 *     [customClass]="'simple my-app-collapsible'">
 *     <div header #collapsible>
 *         Advanced settings
 *     </div>
 *     <div content #collapsibleContent>
 *         Content shown when the collapsible is open.
 *     </div>
 * </collapsible-component>
 *
 * Key inputs:
 * - `show` enables two-way binding for the open state.
 * - `customClass` can be used to pass additional project-specific classes.
 * - Content is projected through the `header` and `content` slots.
 * ```
 */
@Component({
    selector: 'collapsible-component',
    imports: [CommonModule, FontAwesomeModule, FormsModule],
    templateUrl: './collapsible.component.html',
    styleUrls: ['./collapsible.component.scss']
})
export class CollapsibleComponent implements OnInit {
    private changeDetector = inject(ChangeDetectorRef);

    /** Optional custom CSS classes for project-specific styling. */
    @Input() customClass = '';
    /** @deprecated Use customClass instead. */
    @Input() classStyles = '';
    @Input() show = false;

    @Output() showChange = new EventEmitter<boolean>();

    ngOnInit(): void {
        this.changeDetector.detectChanges();
    }

    get customClassName(): string {
        return this.customClass || this.classStyles;
    }

    @HostBinding('class')
    get hostClassName(): string {
        return this.customClassName;
    }

    collapseContent(): void {
        this.show = !this.show;
        this.showChange.emit(this.show);
    }
}
