import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewUser } from './new-user';
import { provideForRootGuard } from '@angular/router/src/router_module';

import { environment } from '../../../environments/environment';
import { CursoPesquisa } from 'src/app/core/cursos/cursopesquisa';

const API = environment.ApiUrl;

@Injectable()
export class SignUpService {
  
    constructor(private http: HttpClient) {
        
    }

    checknomeUsuarioTaken(nomeUsuario: string) {

        return this.http.get(API + '/user/exists/' + nomeUsuario);
    }

    signup(newUser: NewUser) {
        return this.http.post(API + '/usuarios', newUser);
    }

    buscaCursos(){
        return this.http
        .get<CursoPesquisa[]>(API+'/Cursos')
    }

}