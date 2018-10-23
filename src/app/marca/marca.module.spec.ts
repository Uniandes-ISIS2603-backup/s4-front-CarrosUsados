import { MarcaModule } from './marca.module';

describe('MarcaModule', () => {
  let marcaModule: MarcaModule;

  beforeEach(() => {
    marcaModule = new MarcaModule();
  });

  it('should create an instance', () => {
    expect(marcaModule).toBeTruthy();
  });
});
