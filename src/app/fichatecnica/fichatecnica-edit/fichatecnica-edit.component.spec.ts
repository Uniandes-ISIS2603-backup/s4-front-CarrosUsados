import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichatecnicaEditComponent } from './fichatecnica-edit.component';

describe('FichatecnicaEditComponent', () => {
  let component: FichatecnicaEditComponent;
  let fixture: ComponentFixture<FichatecnicaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichatecnicaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichatecnicaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
