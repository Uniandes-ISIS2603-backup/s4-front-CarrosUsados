import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Fichatecnica } from './fichatecnica'
import { FichatecnicaDetail } from './fichatecnica-detail';




const API_URL = "http://localhost:8080/s4_CarrosUsados-api/api";
const fichastecnicas = '/fichastecnicas';


@Injectable({
  providedIn: 'root'
})
export class FichatecnicaService {



  /**
    * Constructor del servicio
    * @param http El HttpClient - Necesario para realizar las solicitudes
    */
  constructor(private http: HttpClient) { }


  /**
    * Retorna el objeto observable de ficha tecnica del API
    * @returns La lista de fichas tecnicas en tiempo real
    */
  getFichasTecnicas(): Observable<Fichatecnica[]> {
    return this.http.get<Fichatecnica[]>(API_URL + fichastecnicas);
  }


  /**
    * Retorna el objeto observable del detalle de ficha tecnica del API
    * @returns Los detalles del autor
    */
  getFichaTecnicaDetail(fichaTecnicaId): Observable<FichatecnicaDetail> {
    return this.http.get<FichatecnicaDetail>(API_URL + fichastecnicas + '/' + fichaTecnicaId);
  }


  /**
    * Crea una ficha tecncia
    * @param fichatecnica La nueva ficha tecnica
    * @returns The confirmation that the author was created
    */
  createFichaTecnica(fichatecnica): Observable<Fichatecnica> {
    return this.http.post<Fichatecnica>(API_URL + fichastecnicas, fichatecnica);
  }

}
