import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichatecnicaDetailComponent } from './fichatecnica-detail.component';

describe('FichatecnicaDetailComponent', () => {
  let component: FichatecnicaDetailComponent;
  let fixture: ComponentFixture<FichatecnicaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichatecnicaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichatecnicaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
