import { AdministradorModule } from './administrador.module';

describe('AdministradorModule', () => {
  let administradorModule: AdministradorModule;

  beforeEach(() => {
    administradorModule = new AdministradorModule();
  });

  it('should create an instance', () => {
    expect(administradorModule).toBeTruthy();
  });
});
