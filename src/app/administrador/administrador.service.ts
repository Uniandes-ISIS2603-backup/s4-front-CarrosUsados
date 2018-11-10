import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Administrador } from './administrador'
import { HttpClient } from '@angular/common/http';
import { AdministradorDetail } from './administrador-detail';
import { environment } from 'src/environments/environment.prod';

const API_URL = "../../assets/";
const clientes = '/clientes.json';
const administradores = "/administradores";
@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

 /**
   * El constructor del servicio
   * @param http Necesario para hacer peticiones
   */
  constructor(private http:HttpClient) { }

  getAdministradores():Observable<Administrador[]>{
    return this.http.get<Administrador[]>(environment.apiURL + administradores);
  }

  
  /**
    * Retorna el objeto observable del detalle de ficha tecnica del API
    * @returns Los detalles del autor
    */
   getAdministradorDetail(administradorId): Observable<AdministradorDetail> {
    return this.http.get<AdministradorDetail>(environment.apiURL + administradores + '/' + administradorId);
}
}
