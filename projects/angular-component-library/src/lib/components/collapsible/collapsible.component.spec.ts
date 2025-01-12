import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { TranslateModule } from '@ngx-translate/core';
import { CollapsibleComponent } from 'angular-component-library';

describe('CollapsibleComponent', () => {
  let component: CollapsibleComponent;
  let fixture: ComponentFixture<CollapsibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CollapsibleComponent,
        TranslateModule.forRoot(),
        FontAwesomeTestingModule,
      ],
      providers: [],
    }).compileComponents();

    fixture = TestBed.createComponent(CollapsibleComponent);

    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create collapsible component', () => {
    expect(component).toBeTruthy();
  });

  it('should create collapsible-header', () => {
    const header = fixture.debugElement.query(By.css('.collapsible-header'));
    expect(header).toBeTruthy();
  });

  it('should create collapsible-content', () => {
    const content = fixture.debugElement.query(By.css('.collapsible-content'));
    expect(content).toBeTruthy();
  });

  it('content has no class show before collapse', () => {
    expect(fixture.debugElement.query(By.css('.show'))).toBeFalsy();
  });

  it('content has class show after collapse', () => {
    const header = fixture.debugElement.query(
      By.css('.collapsible-header'),
    ).nativeElement;
    header.click();
    fixture.detectChanges();
    const content = fixture.debugElement.query(
      By.css('.collapsible-content'),
    ).nativeElement;
    expect(content).toHaveClass('show');
  });
});
