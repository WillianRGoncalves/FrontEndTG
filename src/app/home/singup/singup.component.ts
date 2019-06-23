import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { lowerCaseValidator } from '../../shared/validators/lower-case.validator';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';
import { NewUser } from './new-user';
import { SignUpService } from './signup.service';
import { PlatformDetectorService } from '../../core/plataform-detector/platform-detector.service';
import { nomeUsuariosenha } from './nomeUsuario-senha.validator';
import { CursoPesquisa } from 'src/app/core/modelo/cursos/cursopesquisa';


@Component({
    templateUrl: './signup.component.html',
    providers: [ UserNotTakenValidatorService ]
})
export class SignUpComponent implements OnInit {
    
    signupForm: FormGroup;
    cursos: CursoPesquisa[];
    public selectedValue;
    

    
    constructor(
        private formBuilder: FormBuilder,
        private userNotTakenValidatorService: UserNotTakenValidatorService,
        private signUpService: SignUpService,
        private router: Router,
        private platformDetectorService: PlatformDetectorService) {
        }
    
        
        
    ngOnInit(): void {
        this.signUpService.buscaCursos().subscribe(
            cursos => this.cursos = cursos,
            err => alert ('Cursos não carregados, por favor recarregue a página')
        );

        this.signupForm = this.formBuilder.group({
            nomeUsuario: ['', 
                [
                    Validators.required,
                    lowerCaseValidator,
                    Validators.minLength(2),
                    Validators.maxLength(30)
                ],
                
            ],
            senha: ['', 
                [
                    Validators.required,
                    Validators.minLength(8),
                    Validators.maxLength(14)
                ]
            ]
        }, {
            validator: nomeUsuariosenha
        });

    } 
    
    signup(cursoId: string) {
        if(this.signupForm.valid && !this.signupForm.pending) {
            const newUser = this.signupForm.getRawValue() as NewUser;
            newUser.cursoId = cursoId;
            newUser.nome = this.signupForm.get('nomeUsuario').value;
            
            this.signUpService
                .signup(newUser)
                .subscribe(
                    () => {
                        alert("Usuário Cadastrado com Sucesso");
                        this.router.navigate(['']);
                    },
                    err => console.log(err)
                );
        }
    }
}