import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntoventaCreateComponent } from './puntoventa-create.component';

describe('PuntoventaCreateComponent', () => {
  let component: PuntoventaCreateComponent;
  let fixture: ComponentFixture<PuntoventaCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuntoventaCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntoventaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
