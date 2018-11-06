import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Factura } from './factura'
import { HttpClient } from '@angular/common/http';

const API_URL = "../../assets/";
const facturas = '/facturas.json';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  constructor(private http:HttpClient) { }

  getFacturas():Observable<Factura[]>{
      return this.http.get<Factura[]>(API_URL + facturas);
  }

}
