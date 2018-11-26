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
     cliente.fechaNacimiento = new Date (cliente.fechaNacimiento ); 
    return this.http.post<Cliente>(environment.apiURL + clientes, cliente);
  }
   /**
     * Updates an author
     * @param author The author's information updated
     * @returns The confirmation that the author was updated
     */
    updateCliente(cliente): Observable<ClienteDetail> {
      return this.http.put<ClienteDetail>(environment.apiURL + clientes + '/' + cliente.id, cliente);
    }
  
    /**
    * Deletes an author from the BookStore
    * @param authorId The id of the author
    * @returns The confirmation that the author was deleted
    */
   deleteCliente(clienteId): Observable<boolean> {
      return this.http.delete<boolean>(environment.apiURL + clientes + '/' + clienteId);
    }
}

