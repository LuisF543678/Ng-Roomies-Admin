import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      
      catchError((error: HttpErrorResponse) => {
        const errorCode: number = error.status;
        const errorMessage: string = error.message;

        switch(errorCode) {
          case 400:
            console.error('Asegurate de estar haciendo una petición correcta: ' + errorMessage);
            break;
          case 403:
            console.error('No tienes autorización para acceder a esta ruta: ' + errorMessage);
            break;
          case 404:
            console.error('No se encontró la ruta solicitada: '+ errorMessage);
            break;
          case 405:
            console.error('El método HTTP que quieres ejecutar no está permitido: ' + errorMessage);
            break;
          case 500:
            console.error('Error interno del servidor: ' + errorMessage);
            break;
        }
        return throwError(error);
      })
    
    );
  }

}
