import { Injectable } from '@angular/core';

import { Puntoventa } from './puntoventa';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PuntoventaDetail } from './puntoventa-detail';
import { Calificacion } from '../calificacion/calificacion';
//import 'rxjs/add/operator/catch';



const puntos = '/puntos';
const API_URL = "http://localhost:8080/s4_CarrosUsados-api/api";
const calificaciones = '/calificaciones';
@Injectable({
  providedIn: 'root'
})
export class PuntoventaService {

  /*
  /**
  * The headers sent in every request to the API
  // */
  // headers = new HttpHeaders({
  //   'Access-Control-Allow-Origin': '*'
  // });
  // */
  constructor(private http: HttpClient) { }
  getPuntos(): Observable<Puntoventa[]> {
    return this.http.get<Puntoventa[]>(API_URL + puntos);
  }

  getPuntoventaDetail(puntoId): Observable<PuntoventaDetail> {
    // console.log(puntoId);
    return this.http.get<PuntoventaDetail>(API_URL + puntos + "/" + puntoId);
  }

  createPunto(punto): Observable<Puntoventa> {
    return this.http.post<Puntoventa>(API_URL + puntos, punto);
  }


     /**
    * Actualiza un punto de venta
    * @param punto La informacion del punto que actualiza
    * @returns La confirmacion de que punto si fue actualizado
    */
 
  updatePunto(punto): Observable<PuntoventaDetail> {
    console.log(punto.id);
    return this.http.put<PuntoventaDetail>(API_URL + puntos + "/" + punto.id, punto);
  }
 

  deletePunto(puntoId): Observable<boolean> {
    return this.http.delete<boolean>(API_URL + puntos + '/' + puntoId);
  }


  createCalificacion(puntoId, calificacion): Observable<Calificacion> {
    console.log(puntoId)
    console.log(calificacion.puntoId)
    return this.http.post<Calificacion>(API_URL + puntos + '/' + puntoId + calificaciones, calificacion);
  }

   /**
    * Obtiene calificaciones del punto dao unid
    * @param puntoId id del punto
    * @returns The list of the reviews
    */
   getReviews(puntoId): Observable<Calificacion[]> {
    return this.http.get<Calificacion[]>(API_URL + puntos + '/' + puntoId + calificaciones);
}

deleteReview(puntoId,calificacionId): Observable<Boolean>{
  return this.http.delete<Boolean>(API_URL+puntos+"/"+puntoId+calificaciones+"/"+calificacionId);
}

getPunto(puntoId): Observable<Puntoventa> {
  return this.http.get<Puntoventa>(API_URL + puntos + '/' + puntoId);
}


}
