import { AutomovilModule } from './automovil.module';

describe('AutomovilModule', () => {
  let automovilModule: AutomovilModule;

  beforeEach(() => {
    automovilModule = new AutomovilModule();
  });

  it('should create an instance', () => {
    expect(automovilModule).toBeTruthy();
  });
});