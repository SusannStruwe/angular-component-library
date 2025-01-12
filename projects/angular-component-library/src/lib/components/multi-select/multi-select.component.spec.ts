import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MultiSelectComponent } from './multi-select.component';
import { By } from '@angular/platform-browser';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';

describe('MultiSelectComponent', () => {
  let component: MultiSelectComponent;
  let fixture: ComponentFixture<MultiSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiSelectComponent, FontAwesomeTestingModule],
      providers: [],
    }).compileComponents();

    fixture = TestBed.createComponent(MultiSelectComponent);

    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create multi select component', () => {
    expect(component).toBeTruthy();
  });

  it('should create button', () => {
    const button = fixture.debugElement.query(By.css('button'));
    expect(button).toBeTruthy();
  });

  it('should create menu', () => {
    const menu = fixture.debugElement.query(By.css('.menu'));
    expect(menu).toBeTruthy();
  });

  it('menu has no class show before click', () => {
    expect(fixture.debugElement.query(By.css('.show'))).toBeFalsy();
  });

  it('menu has class show after click', () => {
    const button = fixture.debugElement.query(By.css('button')).nativeElement;
    button.click();
    fixture.detectChanges();
    const menu = fixture.debugElement.query(By.css('.menu')).nativeElement;
    expect(menu).toHaveClass('show');
  });

  it('show filter if withFilter is true', () => {
    const withFilter = component.withFilter;
    const input = fixture.debugElement.query(By.css('input'));
    if (withFilter) {
      expect(input).toBeTruthy();
    } else {
      expect(input).toBeFalsy();
    }
  });
});
