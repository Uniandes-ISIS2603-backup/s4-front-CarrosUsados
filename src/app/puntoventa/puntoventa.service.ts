import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {Puntoventa} from './puntoventa';
import { HttpClient } from '@angular/common/http';



const puntos ='/puntoVenta.json';
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
