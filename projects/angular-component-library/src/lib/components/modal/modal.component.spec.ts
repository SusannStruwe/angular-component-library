import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { ModalComponent } from './modal.component';

describe('ModalComponent', () => {
    let component: ModalComponent;
    let fixture: ComponentFixture<ModalComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ModalComponent, FontAwesomeTestingModule],
            providers: []
        }).compileComponents();

        fixture = TestBed.createComponent(ModalComponent);

        component = fixture.componentInstance;
        component.id = 'test-modal';

        fixture.detectChanges();
    });

    it('should create modal component', () => {
        expect(component).toBeTruthy();
    });
});
