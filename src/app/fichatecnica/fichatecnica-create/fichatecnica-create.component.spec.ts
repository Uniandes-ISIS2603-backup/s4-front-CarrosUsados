import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichatecnicaCreateComponent } from './fichatecnica-create.component';

describe('FichatecnicaCreateComponent', () => {
  let component: FichatecnicaCreateComponent;
  let fixture: ComponentFixture<FichatecnicaCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichatecnicaCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichatecnicaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
