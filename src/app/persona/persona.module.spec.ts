import { PersonaModule } from './persona.module';

describe('PersonaModule', () => {
  let personaModule: PersonaModule;

  beforeEach(() => {
    personaModule = new PersonaModule();
  });

  it('should create an instance', () => {
    expect(personaModule).toBeTruthy();
  });
});
