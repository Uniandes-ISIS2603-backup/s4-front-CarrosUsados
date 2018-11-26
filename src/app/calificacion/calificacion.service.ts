import { Injectable } from '@angular/core';

import {Calificacion} from '../calificacion/calificacion';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import 'rxjs/add/operator/catch';

const calificaciones ='/calificaciones';
const API_URL = "http://localhost:8080/s4_CarrosUsados-api/api";

@Injectable({
  providedIn: 'root'
})


export class CalificacionService {


   

//     /**
//     * The headers sent in every request to the API
//     */
//    headers = new HttpHeaders({
//     'Access-Control-Allow-Origin': '*'
// });

  constructor(private http: HttpClient) { }
  getCalificaciones(): Observable<Calificacion[]>{
      return this.http.get<Calificacion[]>(API_URL+ calificaciones);
  }

  getCalificacionDetail(calificacionId){
    return this.http.get<Calificacion>(API_URL +calificaciones+"/"+calificacionId);
  }

  createCalificacion(calificacion): Observable<Calificacion>
  {
    return this.http.post<Calificacion>(API_URL + calificaciones,calificacion);
  }

}
