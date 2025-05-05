import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { By } from '@angular/platform-browser';
import { NoDataComponent } from './no-data.component';
import { TranslateModule } from '@ngx-translate/core';

describe('NoDataComponent', () => {
    let component: NoDataComponent;
    let fixture: ComponentFixture<NoDataComponent>;

    const text = 'Beschreibung';

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [NoDataComponent, TranslateModule.forRoot(), FontAwesomeTestingModule],
            providers: []
        });

        fixture = TestBed.createComponent(NoDataComponent);

        component = fixture.componentInstance;
        component.translationKey = text;

        fixture.detectChanges();
    });

    it('should create no data component', () => {
        expect(component).toBeTruthy();
    });

    it('should have tag text', () => {
        const tagBtn = fixture.debugElement.query(By.css('span'));
        expect(tagBtn).toBeTruthy();
    });

    it('text should be', () => {
        const tagBtn = fixture.debugElement.query(By.css('span'));
        const content = tagBtn.nativeElement.textContent;
        expect(content).toBe(text);
    });
});
