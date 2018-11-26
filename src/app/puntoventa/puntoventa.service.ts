import { Injectable } from '@angular/core';

import {Puntoventa} from './puntoventa';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PuntoventaDetail } from './puntoventa-detail';
import { Calificacion } from '../calificacion/calificacion';
//import 'rxjs/add/operator/catch';



const puntos ='/puntos';
const API_URL = "http://localhost:8080/s4_CarrosUsados-api/api";
const calificaciones= '/calificaciones';
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

  getPuntoventaDetail(puntoId): Observable<PuntoventaDetail>{
    return this.http.get<PuntoventaDetail>(API_URL +puntos+"/"+puntoId);
  }

  createPunto(punto): Observable<Puntoventa>
  {
    return this.http.post<Puntoventa>(API_URL + puntos, punto);
  }

  editPunto(punto): Observable<PuntoventaDetail>
  {
    return this.http.put<PuntoventaDetail>(API_URL+puntos+"/"+punto.id,punto);
  }

  deletePunto(puntoId): Observable<boolean> {
    return this.http.delete<boolean>(API_URL + puntos + '/' + puntoId);
}


createCalificacion(puntoId, calificacion): Observable<Calificacion> {
  return this.http.post<Calificacion>(API_URL + puntos + '/' + puntoId + calificaciones, calificacion);
}

 
}
