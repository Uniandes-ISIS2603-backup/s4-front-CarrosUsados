import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradorEditComponent } from './administrador-edit.component';

describe('AdministradorEditComponent', () => {
  let component: AdministradorEditComponent;
  let fixture: ComponentFixture<AdministradorEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministradorEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministradorEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
