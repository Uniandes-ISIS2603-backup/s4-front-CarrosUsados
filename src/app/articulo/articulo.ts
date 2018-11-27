import {AutomovilDetail} from '../automovil/automovil-detail'
import {Factura} from '../factura/factura'

export class Articulo{
    /**
     * El id del articulo
     */
    id:number;
    /**
     * El id del modelo en el articulo
     */
    idMod:number;
    /**
     * El id del auto asociado a este automovil
     */
    idAuto:number;
    /**
     * El automovil asociado al articulo
     */
    automovil:AutomovilDetail;
    /**
     * El precio del articulo
     */
    precio:number;
    /**
     * La factura del articulo
     */
    factura:Factura;
    /**
     * La descripcion del articulo
     */
    descripcion:string;
    /**
     * La disponibilidad del articulo
     */
    disponibilidad:boolean;
    /**
     * El link de la imagen del articulo
     */
    imagen:string;    
}