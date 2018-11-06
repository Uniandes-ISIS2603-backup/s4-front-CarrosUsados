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

}