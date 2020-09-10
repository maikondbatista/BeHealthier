import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';

import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  isRefreshingToken: boolean;
  tokenSubject: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  constructor() {}

  addToken(req: HttpRequest<any>, token: string): HttpRequest<any> {
    return req.clone({ setHeaders: { Authorization: 'Bearer ' + token } });
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    const token = this.getToken();
    // pega a requisição, clona e repassa adicionando o token como header
    return next.handle(
      req.clone({
        setHeaders: { teste: 'teste ' + token },
        // setHeaders: { Authorization: 'Bearer ' + token }, // TODO: descomentar apos implementação do token
      })
    );
  }

  public getToken() {
    // TODO: pegar o token
    return 'teste';
  }
}
