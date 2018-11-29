import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomovilAgregarcalificacionComponent } from './automovil-agregarcalificacion.component';

describe('AutomovilAgregarcalificacionComponent', () => {
  let component: AutomovilAgregarcalificacionComponent;
  let fixture: ComponentFixture<AutomovilAgregarcalificacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutomovilAgregarcalificacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomovilAgregarcalificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
