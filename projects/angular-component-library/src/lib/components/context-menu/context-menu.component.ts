import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    EventEmitter,
    HostBinding,
    Input,
    Output,
    ViewChild
} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { ContextMenuItem } from '../../model/context-menu-item.model';
import { ClickOutsideDirective } from '../../directives/click-outside.directive';

/**
 * Component to create and show  select
 *
 * @howToUse
 * ```
 * <context-menu-component
 *   [items]="menuItems"
 *   [ariaLabel]="'Open actions'"
 *   [label]="'Actions'"
 *   [faIcon]="faEllipsisVertical"
 *   [minWidth]="220"
 *   [customClass]="'my-app-menu'"
 *   (itemSelected)="onSelectAction($event)">
 * </context-menu-component>
 *
 * Key inputs:
 * - `items` defines the available context menu actions.
 * - `label` and `faIcon` define the menu trigger content.
 * - `minWidth` controls the minimum dropdown width.
 * - `customClass` can be used to pass additional project-specific classes.
 * ```
 */
@Component({
    selector: 'context-menu-component',
    imports: [CommonModule, FontAwesomeModule, ClickOutsideDirective],
    templateUrl: './context-menu.component.html',
    styleUrls: ['./context-menu.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContextMenuComponent {
    @Input() items: ContextMenuItem[] = [];
    @Input() label = '';
    @Input() ariaLabel: string = '';
    @Input() faIcon?: IconDefinition;
    /** Optional custom CSS classes for project-specific styling. */
    @Input() customClass?: string;
    /** @deprecated Use customClass instead. */
    @Input() classStyle?: string;
    @Input() minWidth? = 0;

    @Output() itemSelected = new EventEmitter<ContextMenuItem>();

    @ViewChild('btn') btn?: ElementRef<HTMLDivElement>;
    @ViewChild('menu') menu?: ElementRef<HTMLDivElement>;

    show = false;

    get customClassName(): string {
        return this.customClass ?? this.classStyle ?? '';
    }

    @HostBinding('class')
    get hostClassName(): string {
        return this.customClassName;
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
    selectElement(item: ContextMenuItem): void {
        this.itemSelected.emit(item);
        this.show = false;
    }
}
