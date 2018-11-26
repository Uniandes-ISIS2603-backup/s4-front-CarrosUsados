import { Usuario } from "../usuario/usuario";

export class Cliente extends Usuario {
    /**
     * El teléfono del cliente.
     */
    telefono: string;

    /**
     * La dirección del cliente.
     */
    direccion: string;   

    
      /**
   * El rol del usuario, por defecto un string vacío.
   */
  public role: String = 'Cliente';

        /**
   * Retorna el rol de un usuario
   * @returns El rol de cliente.
   */
 public getRole(): String {
    let cliente:String =  'Cliente';
    return cliente;
  }

}