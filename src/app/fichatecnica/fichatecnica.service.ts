import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Fichatecnica } from './fichatecnica'

import { HttpClient } from '@angular/common/http';


const API_URL = "http://localhost:8080/s4_CarrosUsados-api/api";
const fichastecnicas = '/fichastecnicas';


@Injectable({
  providedIn: 'root'
})
export class FichatecnicaService {

  constructor(private http:HttpClient) { }

  getFichasTecnicas():Observable<Fichatecnica[]>{
    return this.http.get<Fichatecnica[]>(API_URL + fichastecnicas);
  }

}
