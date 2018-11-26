import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntoventaEditComponent } from './puntoventa-edit.component';

describe('PuntoventaEditComponent', () => {
  let component: PuntoventaEditComponent;
  let fixture: ComponentFixture<PuntoventaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuntoventaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntoventaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
