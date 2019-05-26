import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PlatformDetectorService } from '../core/plataform-detector/platform-detector.service';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { AlunoService } from './aluno.service';

@Component({
  selector: 'tg-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})


export class AlunoComponent implements OnInit {

  fromUrl: string;
  trabalhoForm: FormGroup;
  private http: HttpClient;
  private API_URL = 'http://localhost:8080';

  constructor(
    private formBuilder: FormBuilder,
    private platformDetectorService: PlatformDetectorService,
    private activatedRoute: ActivatedRoute,
    private alunoService: AlunoService) { }

ngOnInit(): void {
    this.activatedRoute
        .queryParams
        .subscribe(params => this.fromUrl = params['fromUrl']);

    this.trabalhoForm = this.formBuilder.group({
        titulo: ['', Validators.required],
        descricao: ['', Validators.required]
    });
    this.platformDetectorService.isPlatformBrowser()      
} 
cadastrarTrabalho() {
  const nome = this.trabalhoForm.get('titulo').value;
  const cursoId = this.trabalhoForm.get('descricao').value;

  this.alunoService
  .cadastro(nome,cursoId)
  .subscribe(
    () => alert('Cadastrado com sucesso')
    ,
    err => {
        console.log(err);
        this.trabalhoForm.reset();
        this.platformDetectorService.isPlatformBrowser()
        alert('Ocorreu um erro ao cadastrar trabalho');
    }
);;
}

}
