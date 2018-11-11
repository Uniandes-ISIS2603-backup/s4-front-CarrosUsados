import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaCreateComponent } from './factura-create.component';

describe('FacturaListComponent', () => {
  let component: FacturaCreateComponent;
  let fixture: ComponentFixture<FacturaCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacturaCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
