import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Articulo } from './articulo'
import { HttpClient } from '@angular/common/http';

const API_URL = "../../assets";
const articulos = '/articulos.json';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

  constructor(private http:HttpClient) { }

  getArticulos():Observable<Articulo[]>{
      return this.http.get<Articulo[]>(API_URL + articulos);
  }
  
   /**
    * Creates an author
    * @param author The new author
    * @returns The new author with the new id
    */
    createArticulo(articulo): Observable<Articulo> {
        return this.http.post<Articulo>(API_URL + articulos, articulo);
    }
}
