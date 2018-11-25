import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Administrador } from './administrador'
import { HttpClient } from '@angular/common/http';
import { AdministradorDetail } from './administrador-detail';
import { environment } from 'src/environments/environment';

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

  /**
    * Crea un cliente en la base de datos mediante un POST al servidor.
    * @param cliente El nuevo cliente a persistir.
    * @returns Mensaje del POST
    */
   createAdministrador(administrador): Observable<Administrador> {
    administrador.fechaInicio = new Date (administrador.fechaInicio ); 
    administrador.fechaNacimiento = new Date (administrador.fechaNacimiento ); 
   return this.http.post<Administrador>(environment.apiURL + administradores, administrador);
 }
}
