import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { IconService } from '../../services/icon.service';

/**
 * Component to create a tag.
 *
 * @howToUse
 * ```
 * <tag-btn-component
 *  [text]="string | translate ">
 * </tag-btn-component>
 * ```
 */
@Component({
    selector: 'tag-btn-component',
    standalone: true,
    imports: [FontAwesomeModule],
    templateUrl: './tag-btn.component.html',
    styleUrls: ['./tag-btn.component.scss']
})
export class TagBtnComponent {

    @Input() label?: string;
    
    @Input() backgroundColor?: string;

    @Output() removeTagSelected = new EventEmitter<string>();

    faClose: IconDefinition = faClose;

    constructor(private iconService: IconService) {
        this.faClose = this.iconService.faXmark;
    }

    /**
     * Remove tag
     */
    removeTag() {
        this.removeTagSelected.emit(this.text);
    }
}
