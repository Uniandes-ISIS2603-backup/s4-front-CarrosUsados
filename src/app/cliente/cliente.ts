import { Usuario } from "../usuario/usuario";

export class Cliente extends Usuario {
    /**
     * El teléfono del cliente.
     */
    public telefono: string;

    /**
     * La dirección del cliente.
     */
    public direccion: string;

}