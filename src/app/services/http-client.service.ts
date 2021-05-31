import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(protected httpClient: HttpClient) { }

  get(url: string) {
    return this.httpClient.get(url);
  }

  post(url: string, body: any) {
    return this.httpClient.post(url, body);
  }

  put(url: string, body: any) {
    return this.httpClient.put(url, body);
  }

  patch(url: string, body: any) {
    return this.httpClient.patch(url, body);
  }

  delete(url: string) {
    return this.httpClient.delete(url);
  } 
  
}


  // protected post(url: string)
