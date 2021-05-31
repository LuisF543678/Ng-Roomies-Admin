import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }
// Crear un interceptor
  protected authUser(user: any) {
    this.getResponse(this.httpClient.post('', user));
  }

  private getResponse(http: any) {
    return new Promise((resolve: any, reject: any)=> {
      http.subscribe((res: any) => {
        resolve(res)
      },
      (error: any) => {
        reject(error);
        console.log(error);
      });
    })
   }
}
