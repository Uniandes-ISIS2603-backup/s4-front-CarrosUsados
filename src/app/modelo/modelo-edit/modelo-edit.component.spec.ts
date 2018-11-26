import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloEditComponent } from './modelo-edit.component';

describe('ModeloEditComponent', () => {
  let component: ModeloEditComponent;
  let fixture: ComponentFixture<ModeloEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeloEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeloEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
