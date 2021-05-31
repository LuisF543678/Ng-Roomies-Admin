import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {

  constructor(private httpClient: HttpClientService) { }

  api = 'https://afternoon-reaches-14063.herokuapp.com/api/v1/';
  uploadDocument(file: string, filename: string) {
    return this.httpClient.post(this.api, {file: file, filename: filename});
  }

}
