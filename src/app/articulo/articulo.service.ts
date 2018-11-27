import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Articulo } from './articulo'
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const articulos = '/articulos';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

  constructor(private http:HttpClient) { }

  getArticulos():Observable<Articulo[]>{
      return this.http.get<Articulo[]>(environment.apiURL + articulos);
  }
  
  getArticulo(articuloId): Observable<Articulo> {
        return this.http.get<Articulo>(environment.apiURL + articulos + '/' + articuloId);
    }
  
   /**
    * Crea un articulo
    * @param articulo El nuevo articulo
    * @returns El nuevo articulo con la nueva id
    */
    createArticulo(articulo): Observable<Articulo> {
        return this.http.post<Articulo>(environment.apiURL + articulos, articulo);
    }
    
    /**
    * Actualiza un articulo
    * @param articulo La informacion del articulo actualizada
    * @returns La confirmacion de que el automovil si fue actualizado
    */
   updateArticulo(articulo): Observable<Articulo> {
    return this.http.put<Articulo>(environment.apiURL + articulos + '/' + articulo.id, articulo);
  }
    
    /**
      * Elimina un articulo
      * @param articuloId El id del articulo
      * @returns La confirmacion de que el articulo fue eliminado
      */
     deleteArticulo(articuloId): Observable<boolean> {
      return this.http.delete<boolean>(environment.apiURL + articulos + '/' + articuloId);
    }
}
