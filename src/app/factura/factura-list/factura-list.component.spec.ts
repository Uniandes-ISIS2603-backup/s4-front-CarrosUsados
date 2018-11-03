import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaListComponent } from './factura-list.component';

describe('FacturaListComponent', () => {
  let component: FacturaListComponent;
  let fixture: ComponentFixture<FacturaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacturaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
