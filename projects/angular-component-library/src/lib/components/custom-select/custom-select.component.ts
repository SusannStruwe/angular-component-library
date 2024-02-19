import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    OnInit,
    ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ClickOutsideDirective } from '../../directives/click-outside.directive';


/**
 * Component to create and show custom select with own button content and menu content
 *
 * @howToUse
 * ```
 * <custom-select-component>
 *   <div header>
 *     <bordered-btn-component
 *      [hoverStyle]="shiningStyle"
 *      [faIcon]="faElipsis">
 *    </bordered-btn-component>
 *   </div>
 *   <div body>
 *      <p>Put your content inside</p>
 *   </div>
 * </custom-select-component>
 * ```
 */
@Component({
    selector: 'custom-select-component',
    standalone: true,
    imports: [
        CommonModule, 
        FontAwesomeModule, 
        FormsModule, 
        ClickOutsideDirective
    ],
    templateUrl: './custom-select.component.html',
    styleUrls: ['./custom-select.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomSelectComponent implements OnInit {
    show = false;

    @ViewChild('btn') btn?: ElementRef<HTMLDivElement>;
    @ViewChild('menu') menu?: ElementRef<HTMLDivElement>;

    constructor(private changeDetector: ChangeDetectorRef) {}

    ngOnInit(): void {
        this.changeDetector.detectChanges();
    }

    toggleFilter(): void {
        this.show = !this.show;
    }

    getBtnHeight(): number {
        const boundingBtn = this.btn?.nativeElement.getBoundingClientRect();
        if (boundingBtn) {
            return boundingBtn.height;
        } else {
            return 0;
        }
    }

    aligmentLeft(): boolean {
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

    handleClickOutside(): void {
        if (this.show) {
            this.show = !this.show;
        }
    }
}
