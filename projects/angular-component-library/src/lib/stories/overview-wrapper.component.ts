import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { TranslateModule } from '@ngx-translate/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToggleBtnComponent } from '../components/toggle-btn/toggle-btn.component';
import { SegmentedBtnComponent } from '../components/segmented-btn/segmented-btn.component';
import { SelectComponent } from '../components/select/select.component';
import { MultiSelectComponent } from '../components/multi-select/multi-select.component';
import { DurationInputComponent } from '../components/duration-input/duration-input.component';
import { DatePickerComponent } from '../components/date-picker/date-picker.component';
import { DateTimePickerComponent } from '../components/date-time-picker/date-time-picker.component';
import { SearchInputComponent } from '../components/search-input/search-input.component';
import { TagBtnComponent } from '../components/tag-btn/tag-btn.component';
import { CollapsibleComponent } from '../components/collapsible/collapsible.component';
import { AlertComponent } from '../components/alert/alert.component';
import { InputComponent } from '../components/input/input.component';
import { DateRangePickerComponent } from '../components/date-range-picker/date-range-picker.component';
import { BadgeComponent } from '../components/badge/badge.component';
import { BorderedBtnComponent } from '../components/bordered-btn/bordered-btn.component';
import { CheckboxComponent } from '../components/checkbox/checkbox.component';
import { CircleBtnComponent } from '../components/circle-btn/circle-btn.component';
import { BorderlessBtnComponent } from '../components/borderless-btn/borderless-btn.component';
import { FilledBtnComponent } from '../components/filled-btn/filled-btn.component';
import { Icons } from '../model/icons';
import { SegmentedBtnItem } from '../model/segmented-btn.model';
import { SelectItem } from '../model/select-item.model';
import { AlertType } from '../model/alert-type.enum';


/**
 * This is a wrapper component to give an overview oever all components 
 *
 * @howToUse
 * ```
 * <overview-wrapper-component></overview-wrapper-component>
 * ```
 */@Component({
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
    templateUrl: './overview-wrapper.component.html'
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
        new SegmentedBtnItem('btn.month', '3', false, false, Icons.faInfoCircle)
    ];
    activeBtn: SegmentedBtnItem = this.btnArray[1];

    // selects
    selectItems = [
        new SelectItem('select1', undefined, Icons.faInfoCircle),
        new SelectItem('select2', undefined, Icons.faInfoCircle),
        new SelectItem('select3')
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
