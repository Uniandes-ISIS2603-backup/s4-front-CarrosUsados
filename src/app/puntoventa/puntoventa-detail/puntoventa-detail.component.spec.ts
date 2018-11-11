import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntoventaDetailComponent } from './puntoventa-detail.component';

describe('PuntoventaDetailComponent', () => {
  let component: PuntoventaDetailComponent;
  let fixture: ComponentFixture<PuntoventaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuntoventaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntoventaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
