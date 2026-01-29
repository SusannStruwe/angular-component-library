import { CommonModule } from '@angular/common';
import {
    ChangeDetectorRef,
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ClickOutsideDirective } from '../../directives/click-outside.directive';

/**
 * Component to show and hide content by button click
 *
 * @howToUse
 * ```
 * <collapsible-component>
 *     <div header #collapsible>
 *         ...
 *     </div>
 *     <div content #collapsibleContent>
 *         ...
 *     </div>
 * </collapsible-component>
 * ```
 */
@Component({
    selector: 'collapsible-component',
    imports: [CommonModule, FontAwesomeModule, FormsModule],
    templateUrl: './collapsible.component.html',
    styleUrls: ['./collapsible.component.scss']
})
export class CollapsibleComponent implements OnInit {
    @Input() classStyles = '';
    @Input() show = false;

    @Output() showChange = new EventEmitter<boolean>();

    constructor(private changeDetector: ChangeDetectorRef) {}

    ngOnInit(): void {
        this.changeDetector.detectChanges();
    }

    collapseContent(): void {
        this.show = !this.show;
        this.showChange.emit(this.show);
    }
}
