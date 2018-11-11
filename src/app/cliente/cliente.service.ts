import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from './cliente'
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ClienteDetail } from './cliente-detail';

const API_URL = "../../assets/";
const clientes = '/clientes';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {

 /**
   * El constructor del servicio
   * @param http Necesario para hacer peticiones
   */
  constructor(private http:HttpClient) { }

  getClientes():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(environment.apiURL + clientes);
  }

   /**
    * Retorna el objeto observable del detalle de ficha tecnica del API
    * @returns Los detalles del autor
    */
   getClienteDetail(clienteId): Observable<ClienteDetail> {
    return this.http.get<ClienteDetail>(environment.apiURL + clientes + '/' + clienteId);
}
}

