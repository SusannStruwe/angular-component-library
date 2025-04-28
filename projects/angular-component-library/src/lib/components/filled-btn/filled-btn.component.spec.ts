import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilledBtnComponent } from './filled-btn.component';
import { By } from '@angular/platform-browser';
import { Icons } from '../../model/icons';

describe('FilledBtnComponent', () => {
  let component: FilledBtnComponent;
  let fixture: ComponentFixture<FilledBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FilledBtnComponent],
      providers: [],
    });

    fixture = TestBed.createComponent(FilledBtnComponent);

    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create bordered btn component', () => {
    expect(component).toBeTruthy();
  });

  it('should show button text', () => {
    component.label = 'Start';
    fixture.detectChanges();

    const btnText = fixture.debugElement.query(By.css('span')).nativeElement;
    expect(btnText.innerHTML).toEqual('Start');
  });

  it('should show fa-icon check', () => {
    component.faIcon = Icons.faCheck;
    fixture.detectChanges();

    expect(
      fixture.debugElement.query(By.css('svg')).nativeElement,
    ).toBeTruthy();

    const faIconName = fixture.debugElement
      .query(By.css('svg'))
      .nativeElement.getAttribute('data-icon');

    expect(faIconName).toEqual('check');
  });

  it('should be disabled', () => {
    component.isDisabled = true;
    fixture.detectChanges();

    const button = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(button.disabled).toBeTruthy();
  });
});
