import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const userEncoded = localStorage.getItem('user');
    let token = '';
    if (userEncoded) {
      token = JSON.parse(atob(userEncoded)).access_token;
    }

    const requestToken = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      }
    });
    //console.log(token);
    return next.handle(requestToken);
  }
}
