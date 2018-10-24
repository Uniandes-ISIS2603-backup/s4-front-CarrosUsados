import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntoventaListComponent } from './puntoventa-list.component';

describe('PuntoventaListComponent', () => {
  let component: PuntoventaListComponent;
  let fixture: ComponentFixture<PuntoventaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuntoventaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntoventaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
