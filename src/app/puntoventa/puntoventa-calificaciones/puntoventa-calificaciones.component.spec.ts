import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntoventaCalificacionesComponent } from './puntoventa-calificaciones.component';

describe('PuntoventaCalificacionesComponent', () => {
  let component: PuntoventaCalificacionesComponent;
  let fixture: ComponentFixture<PuntoventaCalificacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuntoventaCalificacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntoventaCalificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
