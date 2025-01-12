import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BadgeComponent } from './badge.component';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { By } from '@angular/platform-browser';

describe('BadgeComponent', () => {
  let component: BadgeComponent;
  let fixture: ComponentFixture<BadgeComponent>;
  const title = 'SUCCESSFUL';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BadgeComponent, FontAwesomeTestingModule],
      providers: [],
    });

    fixture = TestBed.createComponent(BadgeComponent);

    component = fixture.componentInstance;
    component.label = title;

    fixture.detectChanges();
  });

  it('should create badge component', () => {
    expect(component).toBeTruthy();
  });

  it('should show label', () => {
    const titleEl = fixture.debugElement.query(By.css('p')).nativeElement;
    expect(titleEl.innerHTML).toEqual(title);
  });

  /*  it('should change background color to rgb(53, 200, 50) on class style success', () => {
        component.classStyle = 'success';
        fixture.detectChanges();

        const badgeEl = fixture.debugElement.query(By.css('.badge'));
        const styles = window.getComputedStyle(badgeEl.nativeElement);

        expect(styles.backgroundColor).toEqual('rgb(53, 200, 50)');
    });

    it('should change background color to rgb(226, 118, 29) on class style failed', () => {
        component.classStyle = 'failed';
        fixture.detectChanges();

        const badgeEl = fixture.debugElement.query(By.css('.badge'));
        const styles = window.getComputedStyle(badgeEl.nativeElement);

        expect(styles.backgroundColor).toEqual('rgb(226, 118, 29)');
    });*/

  it('should change class style to pos-absolute', () => {
    component.classStyle = 'pos-absolute';
    fixture.detectChanges();

    const badgeEl = fixture.debugElement.query(By.css('.badge'));
    const styles = window.getComputedStyle(badgeEl.nativeElement);

    expect(styles.width).toEqual('10px');
    expect(styles.height).toEqual('10px');
    expect(styles.position).toEqual('absolute');
    expect(styles.zIndex).toEqual('1500');
    expect(styles.padding).toEqual('2px');
  });

  it('should change class style to pos-absolute xs', () => {
    component.classStyle = 'pos-absolute xs';
    fixture.detectChanges();

    const badgeEl = fixture.debugElement.query(By.css('.badge'));
    const styles = window.getComputedStyle(badgeEl.nativeElement);

    expect(styles.padding).toEqual('0px');
  });
});
