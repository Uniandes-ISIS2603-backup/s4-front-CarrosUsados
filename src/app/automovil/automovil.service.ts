import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


import { Automovil } from './automovil'
import { HttpClient } from '@angular/common/http';

const API_URL = "../../assets/";
const automoviles = '/automoviles.json';
/*
const API_URL = "http://localhost:8080/s4_CarrosUsados-api";
const automoviles = '/automoviles';
*/

@Injectable({
  providedIn: 'root'
})
export class AutomovilService {

  /**
   * El constructor del servicio
   * @param http Necesario para hacer peticiones
   */
  constructor(private http:HttpClient) { }

  getAutomoviles():Observable<Automovil[]>{
    return this.http.get<Automovil[]>(API_URL + automoviles);
  }

}
