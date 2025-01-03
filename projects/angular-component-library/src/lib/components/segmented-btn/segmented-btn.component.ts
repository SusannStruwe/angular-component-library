import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SegmentedBtnItem } from '../../model/segmented-btn.model';
import { TranslateModule } from '@ngx-translate/core';

/**
 * Component to create segmented buttons.
 *
 * @howToUse
 * ```
 * <segmented-btn-component
 *    [btnArray] = "buttons"
 *    [(activeBtn)]="activeTimeSpanBtn"
 *    (activeBtnChange)="timeSpanBtnClicked($event)">
 *  </segmented-btn-component>
 * ```
 */
@Component({
    selector: 'segmented-btn-component',
    standalone: true,
    imports: [FontAwesomeModule, TranslateModule],
    templateUrl: './segmented-btn.component.html',
    styleUrls: ['./segmented-btn.component.scss'],
})
export class SegmentedBtnComponent {
    // example ->   buttons = [{text:"left", value: "", isDisabled: false, icon: faXing}]
    @Input() btnArray: SegmentedBtnItem[] = [];
    // example ->   left
    @Input() activeBtn?: SegmentedBtnItem;

    @Output() activeBtnChange = new EventEmitter<SegmentedBtnItem>();

    btnClick(event: Event, item: SegmentedBtnItem): void {
        event.stopPropagation();

        this.activeBtn = item;
        this.activeBtnChange.emit(item);
    }
}
