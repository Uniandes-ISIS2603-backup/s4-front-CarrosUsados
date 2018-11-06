import { ModeloModule } from './modelo.module';

describe('ModeloModule', () => {
  let modeloModule: ModeloModule;

  beforeEach(() => {
    modeloModule = new ModeloModule();
  });

  it('should create an instance', () => {
    expect(modeloModule).toBeTruthy();
  });
});
