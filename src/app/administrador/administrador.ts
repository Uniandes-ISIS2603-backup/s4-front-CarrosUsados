import { Usuario } from "../usuario/usuario";

export class Administrador extends Usuario {
    /**
     * El cargo del administrador.
     */
     cargo: string;

    /**
   * La fecha de inicio del cargo del administrador.
   */
     fechaInicio: Date;

     
      /**
   * El rol del usuario, por defecto un string vacío.
   */
  public role: String = 'Administrador';

    /**
   * Retorna el rol de un usuario
   * @returns El rol de administrador.
   */
  public getRole(): String {
    let administrador:String =  'Administrador';
    return administrador;
  }

}