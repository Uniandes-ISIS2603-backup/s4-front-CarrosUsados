import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomovilDetailComponent } from './automovil-detail.component';

describe('AutomovilDetailComponent', () => {
  let component: AutomovilDetailComponent;
  let fixture: ComponentFixture<AutomovilDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutomovilDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomovilDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
