import { PuntoventaModule } from './puntoventa.module';

describe('PuntoventaModule', () => {
  let puntoventaModule: PuntoventaModule;

  beforeEach(() => {
    puntoventaModule = new PuntoventaModule();
  });

  it('should create an instance', () => {
    expect(puntoventaModule).toBeTruthy();
  });
});
