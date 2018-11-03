import { FacturaModule } from './factura.module';

describe('FacturaModule', () => {
  let facturaModule: FacturaModule;

  beforeEach(() => {
    facturaModule = new FacturaModule();
  });

  it('should create an instance', () => {
    expect(facturaModule).toBeTruthy();
  });
});