import { TestBed, inject } from '@angular/core/testing';

import { FichatecnicaService } from './fichatecnica.service';

describe('FichatecnicaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FichatecnicaService]
    });
  });

  it('should be created', inject([FichatecnicaService], (service: FichatecnicaService) => {
    expect(service).toBeTruthy();
  }));
});
