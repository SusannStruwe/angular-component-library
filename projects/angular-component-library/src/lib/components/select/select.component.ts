import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    EventEmitter,
    Input,
    OnChanges,
    OnInit,
    Output,
    ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { ClickOutsideDirective } from '../../directives/click-outside.directive';
import { SelectItem } from '../../model/select-item.model';
import { cloneDeep } from 'lodash';
import { TranslateModule } from '@ngx-translate/core';
import { PlanStateIconComponent } from '../plan-state-icon/plan-state-icon.component';
import { SearchInputComponent } from '../search-input/search-input.component';


/**
 * Component to create and show  select
 *
 * @howToUse
 * ```
 * <select-component
 *    [items]="selectItems"
 *    [faIcon]="faCaretDown"
 *    [label]="'Plan: '"
 *    [withFilter]="false"
 *    [selectedItem]="selectedItem.text"
 *    (itemSelected)="selectItemProduction($event)">
 * </select-component>
 * ```
 */
@Component({
    selector: 'select-component',
    standalone: true,
    imports: [
        CommonModule,
        FontAwesomeModule,
        FormsModule,
        ClickOutsideDirective,
        PlanStateIconComponent,
        SearchInputComponent,
        TranslateModule,
    ],
    templateUrl: './select.component.html',
    styleUrls: ['./select.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectComponent implements OnInit, OnChanges {
    @Input() items: SelectItem[] = [];
    @Input() selectedItem?: SelectItem;
    @Input() text = '';
    @Input() faIcon?: IconDefinition;
    @Input() faIconBefore?: IconDefinition;
    @Input() withFilter?: boolean;
    @Input() filterPlaceholder?: string;
    @Input() classStyle?: string;
    @Input() withBlankOption = false;
    @Input() withDeselect = true;

    @Output() itemSelected = new EventEmitter<SelectItem>();

    @ViewChild('filterInput') filterInput?: ElementRef<HTMLDivElement>;
    @ViewChild('btn') btn?: ElementRef<HTMLDivElement>;
    @ViewChild('menu') menu?: ElementRef<HTMLDivElement>;

    itemsBefore: SelectItem[] = [];
    filter = '';
    show = false;

    ngOnInit(): void {
        this.itemsBefore = cloneDeep(this.items);

        if(this.items.length === 1){
            this.selectElement(this.items[0]);
        }
    }

    ngOnChanges() {
        this.itemsBefore = cloneDeep(this.items);
    }

    /**
     * Toggle show state of menu
     */
    toggleMenu(): void {
        this.show = !this.show;
    }

    /**
     * Updates alignment of menu to left or right according to the available space
     * @returns
     */
    alignmentLeft(): boolean {
        const boundingMenu = this.menu?.nativeElement.getBoundingClientRect();
        const boundingBtn = this.btn?.nativeElement.getBoundingClientRect();

        if (boundingBtn && boundingMenu) {
            const right = document.body.scrollWidth - boundingBtn.right;
            //as long as there is enough space on the right, align it to the right
            return right > boundingMenu.width;
        } else {
            return false;
        }
    }

    /**
     * Handles click outside of menu to close menu
     */
    handleClickOutside(): void {
        if (this.show) {
            this.show = !this.show;
        }
    }

    /**
     * Select element in menu
     * @param item
     */
    selectElement(item: SelectItem): void {
        if (this.selectedItem) {
            if (
                this.selectedItem.text === item.text &&
                this.selectedItem.timestamp === item.timestamp &&
                this.withDeselect
            ) {
                this.selectedItem = new SelectItem('');
            } else {
                this.selectedItem = item;
            }

            this.itemSelected.emit(this.selectedItem);

            if (this.show) {
                this.show = !this.show;
            }
        }
    }

    /**
     * Set blank select item text
     * @param item
     */
    selectEmptyElement(): void {
        if (this.selectedItem) {
            this.selectedItem.text = '';
            this.itemSelected.emit(this.selectedItem);
            if (this.show) {
                this.show = !this.show;
            }
        }
    }

    /**
     * Compares elements in menu alphabetically by text param
     * @param list
     * @returns
     */
    getSortedFilterList(list: string[]): string[] {
        list = list.sort((a, b) => a.localeCompare(b));
        return list;
    }

    /**
     * Filters list
     */
    filterAndSort(): void {
        this.items = this.itemsBefore.filter(
            (item: SelectItem) =>
                !this.filter || item.text.toLowerCase().includes(this.filter.toLowerCase()),
        );
    }
}
