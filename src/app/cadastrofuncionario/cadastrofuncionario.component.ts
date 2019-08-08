import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CadastroFuncionarioService } from './cadastrofuncionarioservice';
import { Usuario } from '../core/modelo/user/usuario';
import { ListaUsuario } from '../core/modelo/user/listausuario';
import { PedidoOrientacao } from '../core/modelo/mensagem/pedidoorientacao';

@Component({
  selector: 'tg-cadastrofuncionario',
  templateUrl: './cadastrofuncionario.html'
})
export class CadastroFuncionarioComponent implements OnInit {
  usuarios : ListaUsuario[];
  cadastroForm: FormGroup;
  private usuario: Usuario;
  private funcionarioTrabalho: Boolean;


  constructor(
    private cadastroFuncionario : CadastroFuncionarioService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.usuario = JSON.parse(sessionStorage.getItem('Usuario'));
    this.cadastroFuncionario
    .buscarFuncionarios(this.usuario.curso.cursoId)
    .subscribe(
      usuarios => this.usuarios = usuarios,
      err => alert('Funcionários não carregados, por favor tente novamente')
    )

    this.cadastroFuncionario
    .verificaFuncionarioTrabalho(this.usuario.nome)
    .subscribe(
      verificado => this.funcionarioTrabalho = verificado,
      err => alert('Houve um erro ao carregar a página.')
    )

    this.cadastroForm = this.formBuilder.group({
      titulo: ['', Validators.required],
      descricao: ['', Validators.required]
  });


  }

  cadastraFuncionarios(professor: string, orientador: string){
    const pedido: PedidoOrientacao = 
    {
      remetente: this.usuario.nome,
      destinatario: professor,
      operacao: 2,
      status: 'Pendente'
    }

    this.cadastroFuncionario
    .pedidoOrientacao(pedido)
    .subscribe(
      () =>
      {
        pedido.destinatario = orientador;
        pedido.operacao = 3;
        this.cadastroFuncionario
        .pedidoOrientacao(pedido)
        .subscribe(
          () => alert('Um pedido foi enviado aos funcionários para avaliação.'),
          err => alert('Houve um erro ao enviar mensagem para o orientador, por favor recarregue a página')
        );
      },
      err => alert('Houve um erro ao enviar o pedido ao professor, por favor recarregue a página')
    );
    
  }

}
