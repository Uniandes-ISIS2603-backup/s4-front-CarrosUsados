import { TestBed, inject } from '@angular/core/testing';

import { ArticuloService } from './articulo.service';

describe('AutomovilService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArticuloService]
    });
  });

  it('should be created', inject([ArticuloService], (service: ArticuloService) => {
    expect(service).toBeTruthy();
  }));
});
