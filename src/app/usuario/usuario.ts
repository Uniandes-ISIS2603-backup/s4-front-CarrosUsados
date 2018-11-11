import { Persona } from "../persona/persona";

export class Usuario extends Persona{
    /**
     * El id único del usuario.
     */
    public id: number;

   /**
   * El correo único del usuario.
   */
  public correo: string;

    /**
     * La contraseña del usuario.
     */
    public contrasena: string;

    /**
     * El nombre de usuario del usuario.
     */
    public nombreUsuario: string;

    /**
   * La fecha de nacimiento del usuario.
   */
  public fechaNacimiento: Date;

}