import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PendenciaTrabalho } from '../core/modelo/trabalho/pendenciatrabalho';
import { environment } from 'src/environments/environment';

const API = environment.ApiUrl;

@Injectable({
  providedIn: 'root'
})
export class HomeFuncionarioService {

  constructor(
    private http: HttpClient,
    ) { }

    CarregarPendencias(operacaoId: number, usuarioId:number) {

        return this.http.get<PendenciaTrabalho[]>(API + '/mensagem/todaspendencias/' + operacaoId + '/' + usuarioId);
    }

}