import { Injectable } from '@angular/core';
import {Puntoventa} from './puntoventa';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/catch';



const puntos ='/puntos';
const API_URL = "../../assets/";
@Injectable({
  providedIn: 'root'
})
export class PuntoventaService {

  constructor(private http: HttpClient) { }
  getPuntos(): Observable<Puntoventa[]>{
      return this.http.get<Puntoventa[]>(API_URL+ puntos);
  }
}
