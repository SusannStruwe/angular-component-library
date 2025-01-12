import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { ToggleBtnComponent } from './toggle-btn.component';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { By } from '@angular/platform-browser';

describe('ToggleBtnComponent', () => {
  let component: ToggleBtnComponent;
  let fixture: ComponentFixture<ToggleBtnComponent>;

  const text = 'Tip';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ToggleBtnComponent, FontAwesomeTestingModule],
      providers: [],
    });

    fixture = TestBed.createComponent(ToggleBtnComponent);

    component = fixture.componentInstance;
    component.label = text;

    fixture.detectChanges();
  });

  it('should create toggle button component', () => {
    expect(component).toBeTruthy();
  });

  it('should have toggle btn label', () => {
    const toggleBtnText = fixture.debugElement.query(By.css('p'));
    expect(toggleBtnText).toBeTruthy();
  });

  it('toggle btn label should be', () => {
    const toggleBtnText = fixture.debugElement.query(By.css('p'));
    const content = toggleBtnText.nativeElement.textContent;
    expect(content).toEqual(text);
  });

  it('toggle btn should toggle state', fakeAsync(() => {
    const toggleInput = fixture.debugElement.query(
      By.css('.checkbox'),
    ).nativeElement;
    toggleInput.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    expect(component.checked).toBe(false);
  }));
});
