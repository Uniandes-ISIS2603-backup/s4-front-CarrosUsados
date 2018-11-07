import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichatecnicaListComponent } from './fichatecnica-list.component';

describe('FichatecnicaListComponent', () => {
  let component: FichatecnicaListComponent;
  let fixture: ComponentFixture<FichatecnicaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichatecnicaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichatecnicaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
