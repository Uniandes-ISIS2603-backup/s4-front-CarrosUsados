import { TestBed, inject } from '@angular/core/testing';

import { CalificacionService } from './calificacion.service';

describe('CalificacionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalificacionService]
    });
  });

  it('should be created', inject([CalificacionService], (service: CalificacionService) => {
    expect(service).toBeTruthy();
  }));
});
