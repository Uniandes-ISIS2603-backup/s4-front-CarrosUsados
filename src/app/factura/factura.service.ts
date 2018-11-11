import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Factura } from './factura'
import { Automovil } from '../automovil/automovil';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const API_URL = "../../assets/";
const facturas = '/facturas';
const automovil = '/automovil';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  constructor(private http:HttpClient) { }

  getFacturas():Observable<Factura[]>{
      return this.http.get<Factura[]>(environment.apiURL + facturas);
  }
  
  getFactura(facturaId): Observable<Factura> {
        return this.http.get<Factura>(environment.apiURL + facturas + '/' + facturaId);
    }
    
    getAutomovilDeFactura(facturaId): Observable<Automovil> {
        return this.http.get<Automovil>(environment.apiURL + facturas + '/' + facturaId + automovil);
    }
    
    /**
    * Crea una factura
    * @param factura Una nueva factura
    * @returns La nueva factura con la nueva id
    */
    createFactura(factura): Observable<Factura> {
        return this.http.post<Factura>(environment.apiURL + facturas, factura);
    }

}
