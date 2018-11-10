import { TestBed, inject } from '@angular/core/testing';

import { AdministradorService } from './administrador.service';

describe('AdministradorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdministradorService]
    });
  });

  it('should be created', inject([AdministradorService], (service: AdministradorService) => {
    expect(service).toBeTruthy();
  }));
});
