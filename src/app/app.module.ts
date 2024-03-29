import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'; 


import { AppRoutingModule } from './app.routing.module';
import { ErrorsModule } from './errors/errors.module';
import { CoreModule } from './core/core.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AlunoModule } from './aluno/aluno.module';
import { AcompanhamentoTrabalhoModule } from './acompanhamentotrabalho/acompanhamentotrabalho.module';
import { HomeFuncionarioModule } from './homefuncionario/homefuncionario.module';
import { CadastroFuncionarioModule } from './cadastrofuncionario/cadastrofuncionario.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ErrorsModule,
    CoreModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AlunoModule,
    AcompanhamentoTrabalhoModule,
    HomeFuncionarioModule,
    CadastroFuncionarioModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
