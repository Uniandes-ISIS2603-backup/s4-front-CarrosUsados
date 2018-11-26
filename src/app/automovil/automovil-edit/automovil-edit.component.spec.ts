import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomovilEditComponent } from './automovil-edit.component';

describe('AutomovilEditComponent', () => {
  let component: AutomovilEditComponent;
  let fixture: ComponentFixture<AutomovilEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutomovilEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomovilEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
