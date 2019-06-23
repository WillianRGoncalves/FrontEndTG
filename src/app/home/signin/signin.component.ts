import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../core/auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PlatformDetectorService } from '../../core/plataform-detector/platform-detector.service';
import { Title } from '@angular/platform-browser';
import { Usuario } from 'src/app/core/modelo/user/usuario';

@Component({
    templateUrl: './signin.component.html'
})
export class SignInComponent implements OnInit {
    
    fromUrl: string;
    loginForm: FormGroup;
    @ViewChild('nomeUsuarioInput') nomeUsuarioInput: ElementRef<HTMLInputElement>;
    usuario: Usuario;
    
    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private router: Router,
        private platformDetectorService: PlatformDetectorService,
        private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
        this.activatedRoute
            .queryParams
            .subscribe(params => this.fromUrl = params['fromUrl']);

        this.loginForm = this.formBuilder.group({
            nomeUsuario: ['', Validators.required],
            senha: ['', Validators.required]
        });
        this.platformDetectorService.isPlatformBrowser() && 
        this.nomeUsuarioInput.nativeElement.focus();        
    } 

    login() {
        const nomeUsuario = this.loginForm.get('nomeUsuario').value;
        const senha = this.loginForm.get('senha').value;

        this.authService
            .authenticate(nomeUsuario, senha)
            .subscribe(
                () => {
                   this.authService.buscaUsuario(nomeUsuario)
                   .subscribe(
                        usuario => {
                            this.usuario = usuario;
                            sessionStorage.setItem('Usuario',JSON.stringify(this.usuario));
                            if(usuario.tipoUsuario == '4'){
                                this.router.navigateByUrl('/aluno');
                            }else{
                                this.router.navigateByUrl('/funcionario'); 
                            }
                            
                        },
                        err => alert ('Erro ao importar infomações sobre o usuário')
                    );  
                }
                ,
                err => {
                    console.log(err);
                    this.loginForm.reset();
                    this.platformDetectorService.isPlatformBrowser() && 
                        this.nomeUsuarioInput.nativeElement.focus();
                    alert('Usuário ou senha inválidos');
                }
            );
    }
}