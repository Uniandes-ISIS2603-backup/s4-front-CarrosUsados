import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntoventaAddCalificacionComponent } from './puntoventa-add-calificacion.component';

describe('PuntoventaAddCalificacionComponent', () => {
  let component: PuntoventaAddCalificacionComponent;
  let fixture: ComponentFixture<PuntoventaAddCalificacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuntoventaAddCalificacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntoventaAddCalificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
