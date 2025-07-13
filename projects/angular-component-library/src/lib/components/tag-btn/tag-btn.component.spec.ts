import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TagBtnComponent } from './tag-btn.component';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { By } from '@angular/platform-browser';

describe('TagBtnComponent', () => {
    let component: TagBtnComponent;
    let fixture: ComponentFixture<TagBtnComponent>;

    const text = 'Tip';

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [TagBtnComponent, FontAwesomeTestingModule],
            providers: []
        });

        fixture = TestBed.createComponent(TagBtnComponent);

        component = fixture.componentInstance;
        component.label = text;

        fixture.detectChanges();
    });

    it('should create tag button component', () => {
        expect(component).toBeTruthy();
    });

    it('should have tag text', () => {
        const tagBtn = fixture.debugElement.query(By.css('span'));
        expect(tagBtn).toBeTruthy();
    });

    it('tag text should be', () => {
        const tagBtn = fixture.debugElement.query(By.css('span'));
        const content = tagBtn.nativeElement.textContent;
        expect(content).toBe(text);
    });
});
