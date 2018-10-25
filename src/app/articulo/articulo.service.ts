import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Articulo } from './articulo'
import { HttpClient } from '@angular/common/http';

const API_URL = "../../assets/";
const articulos = '/articulos.json';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

  constructor(private http:HttpClient) { }

  getArticulos():Observable<Articulo[]>{
      return this.http.get<Articulo[]>(API_URL + articulos);
  }

}
