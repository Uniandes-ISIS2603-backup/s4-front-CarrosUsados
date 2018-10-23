import { TestBed, inject } from '@angular/core/testing';

import { AutomovilService } from './automovil.service';

describe('AutomovilService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutomovilService]
    });
  });

  it('should be created', inject([AutomovilService], (service: AutomovilService) => {
    expect(service).toBeTruthy();
  }));
});
