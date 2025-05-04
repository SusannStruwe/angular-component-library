import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
    IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { TranslateModule } from '@ngx-translate/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToggleBtnComponent } from './toggle-btn/toggle-btn.component';
import { SegmentedBtnComponent } from './segmented-btn/segmented-btn.component';
import { SelectComponent } from './select/select.component';
import { MultiSelectComponent } from './multi-select/multi-select.component';
import { DurationInputComponent } from './duration-input/duration-input.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { DateTimePickerComponent } from './date-time-picker/date-time-picker.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { TagBtnComponent } from './tag-btn/tag-btn.component';
import { CollapsibleComponent } from './collapsible/collapsible.component';
import { AlertComponent } from './alert/alert.component';
import { InputComponent } from './input/input.component';
import { DateRangePickerComponent } from './date-range-picker/date-range-picker.component';
import { BadgeComponent } from './badge/badge.component';
import { BorderedBtnComponent } from './bordered-btn/bordered-btn.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { CircleBtnComponent } from './circle-btn/circle-btn.component';
import { BorderlessBtnComponent } from './borderless-btn/borderless-btn.component';
import { FilledBtnComponent } from './filled-btn/filled-btn.component';
import { Icons } from '../model/icons';
import { SegmentedBtnItem } from '../model/segmented-btn.model';
import { SelectItem } from '../model/select-item.model';
import { AlertType } from '../model/alert-type.enum';

@Component({
    selector: 'overview-wrapper-component',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        FontAwesomeModule,
        TranslateModule,
        ToggleBtnComponent,
        TagBtnComponent,
        SearchInputComponent,
        SelectComponent,
        MultiSelectComponent,
        AlertComponent,
        DurationInputComponent,
        InputComponent,
        DatePickerComponent,
        DateTimePickerComponent,
        DateRangePickerComponent,
        BadgeComponent,
        SegmentedBtnComponent,
        CheckboxComponent,
        CollapsibleComponent,
        BorderedBtnComponent,
        BorderlessBtnComponent,
        FilledBtnComponent,
        CircleBtnComponent
    ],
    templateUrl: './overview-wrapper.component.html',
})
export class OverviewWrapperComponent {

    faInfoCircle: IconDefinition = Icons.faInfoCircle;
    faFilter: IconDefinition = Icons.faFilter;
    faSpinner: IconDefinition = Icons.faLoader;
    faChevronDown: IconDefinition = Icons.faChevronDown;
    faChevronUp: IconDefinition = Icons.faChevronUp;
    faPalette: IconDefinition = Icons.faPalette;
    faEyeSlash: IconDefinition = Icons.faEyeSlash;

    open = false;

    btnArray = [
        new SegmentedBtnItem('btn.day', '1', true, false, Icons.faInfoCircle),
        new SegmentedBtnItem('btn.week', '2', false, false, Icons.faInfoCircle),
        new SegmentedBtnItem('btn.month', '3', false, false, Icons.faInfoCircle),
    ];
    activeBtn: SegmentedBtnItem = this.btnArray[1];

    // selects
    selectItems = [
        new SelectItem('select1', undefined, Icons.faInfoCircle),
        new SelectItem('select2', undefined, Icons.faInfoCircle),
        new SelectItem('select3'),
    ];
    selectedItem = new SelectItem('select1', undefined, Icons.faInfoCircle);
    multiSelectItems = ['multi-select1', 'multi-select2'];

    // alters
    showAlert = true;
    alertTypes: typeof AlertType = AlertType;

    // inputs
    duration = 7400;
    username = '';

    //datePicker
    selectedDate: Date = new Date();
    selectedDatetime: string = '2025-01-12T16:59:30';

    // checkbox
    checked = true;
    checked2 = false;

}
