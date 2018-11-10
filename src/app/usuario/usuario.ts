import { Persona } from "../persona/persona";

export class Usuario extends Persona{
    /**
     * El id único del usuario.
     */
    protected id: number;

   /**
   * El correo único del usuario.
   */
    protected correo: string;

    /**
     * La contraseña del usuario.
     */
    protected contrasena: string;

    /**
     * El nombre de usuario del usuario.
     */
    protected nombreUsuario: string;

    /**
   * La fecha de nacimiento del usuario.
   */
    protected fechaNacimiento: Date;

}