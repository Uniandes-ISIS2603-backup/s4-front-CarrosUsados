import { CalificacionModule } from './calificacion.module';

describe('CalificacionModule', () => {
  let calificacionModule: CalificacionModule;

  beforeEach(() => {
    calificacionModule = new CalificacionModule();
  });

  it('should create an instance', () => {
    expect(calificacionModule).toBeTruthy();
  });
});
