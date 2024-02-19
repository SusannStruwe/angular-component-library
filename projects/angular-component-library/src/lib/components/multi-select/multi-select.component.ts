import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
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
import { TranslateModule } from '@ngx-translate/core';
import { SearchInputComponent } from '../search-input/search-input.component';
import { ClickOutsideDirective } from '../../directives/click-outside.directive';

/**
 * Component to create and show  select
 *
 * @howToUse
 * ```
 * <multi-select-component
 *   [items]="items"
 *   [faIcon]="faFilter"
 *   [withFilter]="false"
 * ></multi-select-component>
 * ```
 */
@Component({
    selector: 'multi-select-component',
    standalone: true,
    imports: [
        CommonModule,
        FontAwesomeModule,
        FormsModule,
        ClickOutsideDirective,
        TranslateModule,
        SearchInputComponent,
    ],
    templateUrl: './multi-select.component.html',
    styleUrls: ['./multi-select.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MultiSelectComponent implements OnChanges {
    @Input() items: string[] = [];
    @Input() label = '';
    @Input() faIcon?: IconDefinition;
    @Input() withFilter?: boolean;
    @Input() filterPlaceholder?: string;
    @Input() classStyle?: string;

    @Output() itemsSelected = new EventEmitter<string[]>();

    itemsBefore: string[] = [];
    selectedItems: string[] = [];
    filter = '';
    show = false;

    @ViewChild('filterInput') filterInput?: ElementRef<HTMLDivElement>;
    @ViewChild('btn') btn?: ElementRef<HTMLDivElement>;
    @ViewChild('menu') menu?: ElementRef<HTMLDivElement>;

    constructor(private changedDetectorRef: ChangeDetectorRef) {}

    ngOnChanges() {
        this.itemsBefore = JSON.parse(JSON.stringify(this.items));
    }

    /**
     * Toggle show state of menu
     */
    toggleFilter(): void {
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
            //as long as there is enough space on the right, align it to the left
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
     * Removes selected element
     * @param item
     */
    removeElement(item: string): void {
        this.selectedItems = this.selectedItems.filter((el) => el !== item);
        this.items.push(item);
        this.items = this.getSortedList(this.items);
        this.changedDetectorRef.detectChanges();
        this.itemsSelected.emit(this.selectedItems);
    }

    /**
     * Select element
     * @param item
     */
    selectElement(item: string): void {
        this.selectedItems.push(item);
        this.items = this.items.filter((el) => el !== item);
        this.items = this.getSortedList(this.items);
        this.changedDetectorRef.detectChanges();
        this.itemsSelected.emit(this.selectedItems);
    }

    /**
     * Compares elements in menu alphabetically by text param
     * @param list
     * @returns
     */
    getSortedList(list: string[]): string[] {
        list = list.sort((a, b) => a.localeCompare(b));
        return list;
    }

    /**
     * Checks if item is in filtered array
     * @param item
     * @returns
     */
    isInFilterArray(item: string): boolean {
        return this.selectedItems.some((el: string) => el === item);
    }

    /**
     * Filters list
     */
    filterAndSort(): void {
        this.items = this.itemsBefore.filter(
            (item: string) =>
                !this.filter || item.toLowerCase().includes(this.filter.toLowerCase()),
        );
        this.items = this.items.filter((el) => !this.isInFilterArray(el));
    }
}
