import {Calificacion} from '../calificacion/calificacion';

export interface Puntoventa {
    
    
    /*
     * id del punto de venta
     */
    id:number;
    
    /*
     * ubicacion del punto de venta
     */
    ubicacion: string;
    
    /*
     * ciudad donde se encuentra punto de venta.
     */
     
     ciudad: string;
    /*
     * número de vendedores
     */
    numeroVendedores: number;
    
    /*
     * latitud de ubicacion punto de venta
     */
    latitud: number;
    
    /*
     * longitud de ubicacion
     */
    longitud: number;
    
    /*
     * lista de calificaciones del putno de venta
     */
     calificaciones: Calificacion[];
    
    
    
}
