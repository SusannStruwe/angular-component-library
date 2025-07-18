import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableComponent } from './table.component';

describe('TableComponent', () => {
    let component: TableComponent;
    let fixture: ComponentFixture<TableComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [TableComponent],
            providers: []
        });

        fixture = TestBed.createComponent(TableComponent);

        component = fixture.componentInstance;

        fixture.detectChanges();
    });

    it('should create table component', () => {
        expect(component).toBeTruthy();
    });
});
