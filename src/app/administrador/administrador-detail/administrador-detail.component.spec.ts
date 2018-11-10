import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradorDetailComponent } from './administrador-detail.component';

describe('AdministradorDetailComponent', () => {
  let component: AdministradorDetailComponent;
  let fixture: ComponentFixture<AdministradorDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministradorDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministradorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
