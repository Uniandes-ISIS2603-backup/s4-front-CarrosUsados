import {AutomovilDetail} from '../automovil/automovil-detail'

export class Factura{
    /**
     * El id de la factura
     */
    id:number;
    /**
     * El precio total de la factura
     */
    total:number;
    /**
     * El precio subtotal de la factura
     */
    subtotal:number;
    /**
     * La descripcion de la factura
     */
    descripcion:string;
    /**
     * El comprobante de pago de la factura
     */
    comprobantePago:boolean;
    /**
     * El automovil de la factura
     */
    automovil:AutomovilDetail;
    
}