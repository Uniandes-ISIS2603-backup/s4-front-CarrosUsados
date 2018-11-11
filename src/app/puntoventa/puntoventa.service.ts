import { Injectable } from '@angular/core';

import {Puntoventa} from './puntoventa';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import 'rxjs/add/operator/catch';



const puntos ='/puntoVenta.json';
const API_URL = "../../assets/";
@Injectable({
  providedIn: 'root'
})
export class PuntoventaService {
  

    /**
    * The headers sent in every request to the API
    */
   headers = new HttpHeaders({
    'Access-Control-Allow-Origin': '*'
});

  constructor(private http: HttpClient) { }
  getPuntos(): Observable<Puntoventa[]>{
      return this.http.get<Puntoventa[]>(API_URL+ puntos);
  }

  getPuntoventaDetail(puntoId){
    return this.http.get<Puntoventa>(API_URL +puntos+"/"+puntoId);
  }

  createPunto(puntoId): Observable<Puntoventa>
  {
    return this.http.post<Puntoventa>(API_URL + puntos + '/' + puntoId, { headers: this.headers });
  }

 
}
