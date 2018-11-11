import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradorCreateComponent } from './administrador-create.component';

describe('AdministradorCreateComponent', () => {
  let component: AdministradorCreateComponent;
  let fixture: ComponentFixture<AdministradorCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministradorCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministradorCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
