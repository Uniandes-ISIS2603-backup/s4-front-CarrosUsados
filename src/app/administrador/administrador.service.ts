import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Administrador } from './administrador'
import { HttpClient } from '@angular/common/http';
import { AdministradorDetail } from './administrador-detail';
import { environment } from 'src/environments/environment';

const administradores = "/administradores";
@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

     /**
 * La lista de administradores.
 */
administradores: Administrador[];

  /**
    * El constructor del servicio
    * @param http Necesario para hacer peticiones
    */
  constructor(private http: HttpClient) { }

  getAdministradores(): Observable<Administrador[]> {
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
    administrador.fechaInicio = new Date(administrador.fechaInicio);
    administrador.fechaNacimiento = new Date(administrador.fechaNacimiento);
    return this.http.post<Administrador>(environment.apiURL + administradores, administrador);
  }

  /**
     * Updates an author
     * @param author The author's information updated
     * @returns The confirmation that the author was updated
     */
  updateAdministrador(administrador): Observable<AdministradorDetail> {
    return this.http.put<AdministradorDetail>(environment.apiURL + administradores + '/' + administrador.id, administrador);
  }

  /**
  * Deletes an author from the BookStore
  * @param authorId The id of the author
  * @returns The confirmation that the author was deleted
  */
  deleteAdministrador(administradorId): Observable<boolean> {
    return this.http.delete<boolean>(environment.apiURL + administradores + '/' + administradorId);
  }
}
