import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticuloCreateComponent } from './articulo-create.component';

describe('ArticuloListComponent', () => {
  let component: ArticuloCreateComponent;
  let fixture: ComponentFixture<ArticuloCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticuloCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticuloCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
