import { Component, OnInit } from '@angular/core';
import { AcompanhamentoTrabalhoService } from './acompanhamentotrabalho.service';
import { Capitulo } from '../core/modelo/capitulos/capitulo';
import { ActivatedRoute } from '@angular/router';
import { PlatformDetectorService } from '../core/plataform-detector/platform-detector.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'tg-acompanhamento',
  templateUrl: './acompanhamentotrabalho.component.html'
})
export class AcompanhamentotrabalhoComponent implements OnInit {
  capitulos : Capitulo[];
  acompanhamentoForm: FormGroup;

  constructor(
    private acompanhamentoService : AcompanhamentoTrabalhoService,
    private formBuilder: FormBuilder,
    private platformDetectorService: PlatformDetectorService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.acompanhamentoService
    .buscarCapitulos()
    .subscribe(
      capitulos => this.capitulos = capitulos,
      err => alert('Capítulos não carregados, por favor tente novamente')
    )

    this.acompanhamentoForm = this.formBuilder.group({
      titulo: ['', Validators.required],
      descricao: ['', Validators.required]
  });

  }

  geraAcompanhamento(){
    alert('Deu certo');
  }

}
