import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { UserService } from '../user/user.service';

const API_URL = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private userService: UserService) { }

  authenticate(nome: string, senha: string) {

    return this.http
      .post(
        API_URL + '/login', 
        { senha, nome }, 
        { observe: 'response'} 
      )
      .pipe(tap(res => {
        console.log(res);
        const authToken = res.headers.get('Authorization');
        sessionStorage.setItem('Authorization', authToken);
        this.userService.setToken(authToken);
        console.log(`User ${nome} authenticated with token ${authToken}`);
      }));
  }
}