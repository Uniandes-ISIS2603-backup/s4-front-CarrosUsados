import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Automovil } from './automovil'
import { AutomovilDetail } from './automovil-detail'
/*
const API_URL = "../../assets/";
const automoviles = '/automoviles.json';
*/

const API_URL = "http://localhost:8080/s4_CarrosUsados-api/api";
const modelos = '/modelos';
const automoviles = '/automoviles';


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

  getAutomovilesOfModelo(modeloId:any): Observable<Automovil[]> {
    return this.http.get<Automovil[]>(API_URL + modelos + '/' + modeloId + automoviles);
}

  /**
    * Retorna el objeto observable del detalle de automovil del API
    * @returns Los detalles del automovil
    */
   getAutomovilDetail(modeloId,automovilId): Observable<AutomovilDetail> {
    return this.http.get<AutomovilDetail>(API_URL + modelos + '/' + modeloId + automoviles + '/' + automovilId);
  }

  /**
    * Retorna el objeto observable del detalle de automovil del API
    * @returns Los detalles del automovil
    */
   getAutomovilDetailConModelo(modeloId, automovilId): Observable<AutomovilDetail> {
    return this.http.get<AutomovilDetail>(API_URL + modelos + '/' + modeloId + automoviles + '/' + automovilId);
  }

  /**
    * Crea un automovil
    * @param automovil El nuevo automovil
    * @returns La confirmacion de que el automovil fue creado
    */
   createAutomovil(automovil): Observable<Automovil> {
    return this.http.post<Automovil>(API_URL + automoviles, automovil);
  }

}
