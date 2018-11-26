import { Puntoventa } from "../puntoventa/puntoventa";

export class Calificacion {

    /**
     * El identificador de la ficha tecnica
     */
    id:number;
    
    numEstrellas:number;
    /**
     * comentario de calificacion
     */
    comentario:string;


    /**punto de venta de la calificacion */
    puntoventa:Puntoventa;
}