import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CircleBtnComponent } from './circle-btn.component';
import { By } from '@angular/platform-browser';
import { Icons } from '../../model/icons';

describe('CircleBtnComponent', () => {
  let component: CircleBtnComponent;
  let fixture: ComponentFixture<CircleBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CircleBtnComponent],
      providers: [],
    });

    fixture = TestBed.createComponent(CircleBtnComponent);

    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create circle btn component', () => {
    expect(component).toBeTruthy();
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
});
