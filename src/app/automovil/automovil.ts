import { Fichatecnica } from '../fichatecnica/fichatecnica'
import { Puntoventa } from '../puntoventa/puntoventa'
import { Modelo } from '../modelo/modelo';

export class Automovil{
    /**
     * El id del automovil
     */
    id:number;
    /**
     * El modelo del automovil
     */

    //modelo:string;
    /**
     * La marca del automóvil
     */
    marca:string;
    /**
     * El año del automovil
     */
    anio:number;
    /**
     * El color del automovil
     */
    color:string;
    /**
     * El numero de chasis del automovil
     */
    numChasis:string;
    /**
     * La placa del automovil
     */
    placa:string;
    /**
     * La fecha de agregacion del automovil
     */
    fechaAgregacion:Date;
    /**
     * El precio original del automovil
     */
    precioOriginal:string;

    /**
     * La ficha tecnica del automovil
     */
    fichaTecnica:Fichatecnica;
    /**
     * El punto venta del automovil
     */
    puntoVenta:Puntoventa;
    /**
     * El modelo asociado del automovil
     */
    modeloAsociado: Modelo;

}