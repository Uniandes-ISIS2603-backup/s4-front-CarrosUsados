import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomovilCreateComponent } from './automovil-create.component';

describe('AutomovilCreateComponent', () => {
  let component: AutomovilCreateComponent;
  let fixture: ComponentFixture<AutomovilCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutomovilCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomovilCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
