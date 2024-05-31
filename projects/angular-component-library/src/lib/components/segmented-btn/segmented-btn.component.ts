import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';
import { SegmentedBtnItem } from '../../model/segmented-btn.model';

/**
 * Component to create segmented buttons.
 *
 * @howToUse
 * ```
 * <segmented-btn-component
 *    [btnArray] = "buttons"
 *    [(activeBtn)]="activeTimeSpanBtn"
 *    (btnSelected)="timeSpanBtnClicked($event)">
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
    // example --> primary or gray
    @Input() color?: string;
    // example ->   buttons = [{text:"left", value: "", isDisabled: false, icon: faXing}]
    @Input() btnArray: SegmentedBtnItem[] = [];
    // example ->   left
    @Input() activeBtn?: SegmentedBtnItem;

    @Output() btnSelected = new EventEmitter<SegmentedBtnItem>();
    @Output() activeBtnChange = new EventEmitter<SegmentedBtnItem>();

    btnClick(item: SegmentedBtnItem): void {
        this.activeBtn = item;
        this.activeBtnChange.emit(item);
        this.btnSelected.emit(item);
    }
}
