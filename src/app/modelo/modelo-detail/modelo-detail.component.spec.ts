import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloDetailComponent } from './modelo-detail.component';

describe('ModeloDetailComponent', () => {
  let component: ModeloDetailComponent;
  let fixture: ComponentFixture<ModeloDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeloDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeloDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
