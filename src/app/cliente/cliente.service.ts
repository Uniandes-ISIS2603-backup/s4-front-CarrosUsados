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

  /**
    * Crea un cliente en la base de datos mediante un POST al servidor.
    * @param cliente El nuevo cliente a persistir.
    * @returns Mensaje del POST
    */
   createCliente(cliente): Observable<Cliente> {
     console.log(cliente.fechaNacimiento);
     
     cliente.fechaNacimiento = new Date (cliente.fechaNacimiento ); 
     console.log(cliente);
     console.log(cliente.fechaNacimiento);
    return this.http.post<Cliente>(environment.apiURL + clientes, cliente);
  }
}

