import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


import { Modelo } from './modelo'
import { HttpClient } from '@angular/common/http';

const API_URL = "../../assets/";
const modelos = '/modelos.json';

@Injectable({
  providedIn: 'root'
})
export class ModeloService {

  /**
   * El constructor del servicio
   * @param http Necesario para hacer peticiones
   */
  constructor(private http:HttpClient) { }

  getModelos():Observable<Modelo[]>{
    return this.http.get<Modelo[]>(API_URL + modelos);
  }

}
