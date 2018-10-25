import { ClienteModule } from './cliente.module';

describe('ClienteModule', () => {
  let clienteModule: ClienteModule;

  beforeEach(() => {
    clienteModule = new ClienteModule();
  });

  it('should create an instance', () => {
    expect(clienteModule).toBeTruthy();
  });
});
