import { TestBed, inject } from '@angular/core/testing';

import { ModeloService } from './modelo.service';

describe('ModeloService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModeloService]
    });
  });

  it('should be created', inject([ModeloService], (service: ModeloService) => {
    expect(service).toBeTruthy();
  }));
});
