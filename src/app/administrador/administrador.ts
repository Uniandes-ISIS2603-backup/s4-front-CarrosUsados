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

}