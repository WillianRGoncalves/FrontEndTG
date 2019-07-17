import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListaUsuario } from '../core/modelo/user/listausuario';
import { PedidoOrientacao } from '../core/modelo/mensagem/pedidoorientacao';
import { environment } from 'src/environments/environment';


const API = environment.ApiUrl;

@Injectable({
  providedIn: 'root'
})
export class CadastroFuncionarioService {

  constructor(
    private http: HttpClient,
    
    ) { }

    buscarFuncionarios(cursoId: number){
      return this.http
      .get<ListaUsuario[]>(API+'/usuarios/todosFuncionarios/'+cursoId)
  }

  pedidoOrientacao(pedido:PedidoOrientacao){
    return this.http.post(API + '/mensagem/pedidoorientacao', pedido);
  }

  verificaFuncionarioTrabalho(nomeAluno:String){
    return this.http.get<Boolean>(API + '/trabalhos/verificafuncionario/' + nomeAluno);
  }
}