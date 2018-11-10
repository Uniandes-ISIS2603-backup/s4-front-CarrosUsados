import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Marca } from './marca'


//const API_URL = "../../assets/";
const API_URL = "http://localhost:8080/s4_CarrosUsados-api/api"
//const marcas = '/marcas.json';
const marcas = '/marcas';

@Injectable()
export class MarcaService {

    headers = new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
    });

  /**
   * El constructor del servicio
   * @param http Necesario para hacer peticiones
   */
  constructor(private http:HttpClient) { }

  getMarcas():Observable<Marca[]>{
    return this.http.get<Marca[]>(API_URL + marcas);
  }
  
     createMarca(marca): Observable<boolean> {
        return this.http.post<boolean>(API_URL + marcas, marca);
    }
    
        private handleError(error: any) {
        return throwError(error.error.errorMessage);
    }

}
