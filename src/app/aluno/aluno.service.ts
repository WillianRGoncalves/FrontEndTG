import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

const API_URL = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  constructor(
    private http: HttpClient,
    ) { }

  cadastro(nome: string, cursoId: string) {
    return this.http
      .post(
        API_URL + '/trabalhos', 
        { cursoId, nome }, 
        { observe: 'response'} 
      )
      .pipe(tap(res => {
        console.log(res);
        
      }));
    
  }
}