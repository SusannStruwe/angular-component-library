import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { Icons } from '../../model/icons';

/**
 * Component to create a tag.
 *
 * @howToUse
 * ```
 * <tag-btn-component
 *  [label]="'Status: active'"
 *  [backgroundColor]="'#444'"
 *  (removeTagSelected)="removeStatusTag($event)">
 * </tag-btn-component>
 *
 * Key inputs:
 * - `label` defines the visible tag text.
 * - `backgroundColor` controls the tag background.
 * - `removeTagSelected` emits the label when the remove action is clicked.
 * ```
 */
@Component({
    selector: 'tag-btn-component',
    imports: [FontAwesomeModule],
    templateUrl: './tag-btn.component.html',
    styleUrls: ['./tag-btn.component.scss']
})
export class TagBtnComponent {
    @Input() label?: string;
    @Input() backgroundColor?: string;
    @Output() removeTagSelected = new EventEmitter<string>();

    faClose: IconDefinition = Icons.faXmark;

    /**
     * Remove tag
     */
    removeTag() {
        this.removeTagSelected.emit(this.label);
    }
}
