import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


import { Marca } from './marca'
import { HttpClient } from '@angular/common/http';

const API_URL = "../../assets/";
const marcas = '/marcas.json';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {

  /**
   * El constructor del servicio
   * @param http Necesario para hacer peticiones
   */
  constructor(private http:HttpClient) { }

  getMarcas():Observable<Marca[]>{
    return this.http.get<Marca[]>(API_URL + marcas);
  }

}
