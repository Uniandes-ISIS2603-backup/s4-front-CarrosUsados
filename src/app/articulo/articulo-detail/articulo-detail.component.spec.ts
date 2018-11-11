import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticuloDetailComponent } from './articulo-detail.component';

describe('ArticuloDetailComponent', () => {
  let component: ArticuloDetailComponent;
  let fixture: ComponentFixture<ArticuloDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticuloDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticuloDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
