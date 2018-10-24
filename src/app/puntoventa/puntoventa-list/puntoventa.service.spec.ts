import { TestBed, inject } from '@angular/core/testing';

import { PuntoventaService } from './puntoventa.service';

describe('PuntoventaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PuntoventaService]
    });
  });

  it('should be created', inject([PuntoventaService], (service: PuntoventaService) => {
    expect(service).toBeTruthy();
  }));
});
