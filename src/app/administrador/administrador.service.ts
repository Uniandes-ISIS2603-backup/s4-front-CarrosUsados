import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Administrador } from './administrador'
import { HttpClient } from '@angular/common/http';

const API_URL = "../../assets/";
const clientes = '/clientes.json';
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
    return this.http.get<Administrador[]>(API_URL + clientes);
  }
}
