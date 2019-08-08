import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../core/auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PlatformDetectorService } from '../../core/plataform-detector/platform-detector.service';
import { HttpClient } from '@angular/common/http';
import { Usuario } from 'src/app/core/modelo/user/usuario';
import { PendenciaTrabalho } from 'src/app/core/modelo/trabalho/pendenciatrabalho';
import { HomeFuncionarioService } from '../homefuncionario.service';

@Component({
    templateUrl: './pedidos.component.html'
})
export class PedidosComponent implements OnInit {
    private http: HttpClient;
    private usuario : Usuario;
    
    private pendencias: PendenciaTrabalho[];
    
    
    constructor(
        private formBuilder: FormBuilder,
        private homefuncionarioService: HomeFuncionarioService,
        private router: Router,
        private platformDetectorService: PlatformDetectorService,
        private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
        this.usuario = JSON.parse(sessionStorage.getItem('Usuario'));

        this.homefuncionarioService.CarregarPendencias(2,this.usuario.usuarioId)
        .subscribe(
            pendencias => this.pendencias = pendencias,
            err => alert('Não existe nenhuma pendência para Orientação')
        )
        

          
    } 

   
}