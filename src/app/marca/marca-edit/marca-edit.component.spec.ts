import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcaEditComponent } from './marca-edit.component';

describe('MarcaEditComponent', () => {
  let component: MarcaEditComponent;
  let fixture: ComponentFixture<MarcaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
