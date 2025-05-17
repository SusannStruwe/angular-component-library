import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
    activeBtn,
    btnArray,
    SegmentedBtnComponent
} from './segmented-btn.component';
import { By } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';

describe('SegmentedBtnComponent', () => {
    let component: SegmentedBtnComponent;
    let fixture: ComponentFixture<SegmentedBtnComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [SegmentedBtnComponent, TranslateModule.forRoot(),],
            providers: []
        });

        fixture = TestBed.createComponent(SegmentedBtnComponent);

        component = fixture.componentInstance;

        fixture.detectChanges();
    });

    it('should create table component', () => {
        expect(component).toBeTruthy();
    });

    it('should have 3 buttons', () => {
        component.btnArray = btnArray;
        component.activeBtn = activeBtn;

        fixture.detectChanges();

        const buttons = fixture.debugElement.queryAll(By.css('button'));

        expect(buttons.length).toEqual(btnArray.length);
    });
});
