import { FichatecnicaModule } from './fichatecnica.module';

describe('FichatecnicaModule', () => {
  let fichatecnicaModule: FichatecnicaModule;

  beforeEach(() => {
    fichatecnicaModule = new FichatecnicaModule();
  });

  it('should create an instance', () => {
    expect(fichatecnicaModule).toBeTruthy();
  });
});
