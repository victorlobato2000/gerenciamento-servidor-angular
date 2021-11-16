import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Status } from '../enums/status.enum';
import { RespostaCustomizada } from '../interface/resposta-customizada';
import { Servidor } from '../interface/servidor';

@Injectable({
  providedIn: 'root'
})
export class ServidorService {

  private readonly apiUrl = 'any';

  constructor(private http: HttpClient) { }

  servidores$ = <Observable<RespostaCustomizada>> this.http.get<RespostaCustomizada>(`${this.apiUrl}/server/listar`)
  .pipe(
    tap(console.log),
    catchError(this.handleError)
  );

  salvar$ = (servidor: Servidor ) => <Observable<RespostaCustomizada>> this.http.post<RespostaCustomizada>(`${this.apiUrl}/server/salvar`, servidor)
  .pipe(
    tap(console.log),
    catchError(this.handleError)
  );

  pingar$ = (enderecoIP: string ) => <Observable<RespostaCustomizada>> this.http.get<RespostaCustomizada>(`${this.apiUrl}/server/pingar/${enderecoIP}`)
  .pipe(
    tap(console.log),
    catchError(this.handleError)
  );

  deletar$ = (servidorID: number ) => <Observable<RespostaCustomizada>> this.http.delete<RespostaCustomizada>(`${this.apiUrl}/server/deletar/${servidorID}}`)
  .pipe(
    tap(console.log),
    catchError(this.handleError)
  );

  private handleError(erro: HttpErrorResponse) : Observable<never>{
    console.log(erro);
    return throwError (`Um erro ocorreu - CODIGO: ${erro.status}`);
  }

}

