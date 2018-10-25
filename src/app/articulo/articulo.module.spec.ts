import { ArticuloModule } from './articulo.module';

describe('ArticuloModule', () => {
  let articuloModule: ArticuloModule;

  beforeEach(() => {
    articuloModule = new ArticuloModule();
  });

  it('should create an instance', () => {
    expect(articuloModule).toBeTruthy();
  });
});