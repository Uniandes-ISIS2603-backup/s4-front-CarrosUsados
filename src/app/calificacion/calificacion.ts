import { Puntoventa } from "../puntoventa/puntoventa";

export class Calificacion {

    /**
     * El identificador de la ficha tecnica
     */
    id:number;
    
    num_estrellas:number;
    /**
     * comentario de calificacion
     */
    comentario:string;

    publishedDate:Date;

    /**punto de venta de la calificacion */
    puntoventa:Puntoventa;

    /**id del punto de venta al cuala perteneece calificacion */
    puntoventa_id:number;
}