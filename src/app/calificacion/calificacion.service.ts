import { Injectable } from '@angular/core';

import {Calificacion} from '../calificacion/calificacion';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import 'rxjs/add/operator/catch';

const calificacion ='/calificaciones.json';
const API_URL = "../../assets/";

@Injectable({
  providedIn: 'root'
})


export class CalificacionService {


   

    /**
    * The headers sent in every request to the API
    */
   headers = new HttpHeaders({
    'Access-Control-Allow-Origin': '*'
});

  constructor(private http: HttpClient) { }
  getCalificaciones(): Observable<Calificacion[]>{
      return this.http.get<Calificacion[]>(API_URL+ calificacion);
  }

  getCalificacionDetail(calificacionId){
    return this.http.get<Calificacion>(API_URL +calificacion+"/"+calificacionId);
  }

  createCalificacion(calificacionId): Observable<Calificacion>
  {
    return this.http.post<Calificacion>(API_URL + calificacion + '/' + calificacionId, { headers: this.headers });
  }

}
