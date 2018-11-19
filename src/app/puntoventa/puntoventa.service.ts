import { Injectable } from '@angular/core';

import {Puntoventa} from './puntoventa';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import 'rxjs/add/operator/catch';



const puntos ='/puntos';
const API_URL = "http://localhost:8080/s4_CarrosUsados-api/api";
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

  createPunto(punto): Observable<Puntoventa>
  {
    return this.http.post<Puntoventa>(API_URL + puntos, punto);
  }

 
}
