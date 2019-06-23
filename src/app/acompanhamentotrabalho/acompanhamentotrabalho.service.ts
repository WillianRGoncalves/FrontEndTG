import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Capitulo } from '../core/modelo/capitulos/capitulo';

const API_URL = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class AcompanhamentoTrabalhoService {

  constructor(
    private http: HttpClient,
    ) { }

  buscarCapitulos(){
    return this.http
        .get<Capitulo[]>(API_URL+'/capitulos')
  }
}