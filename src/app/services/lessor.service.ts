import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientService } from './http-client.service';
import { Response } from 'src/app/models/response';
import { Contact } from '../models/vo/contact';

@Injectable({
  providedIn: 'root'
})
export class LessorService {

  constructor(private httpClient: HttpClientService) { }
  api = 'https://afternoon-reaches-14063.herokuapp.com/api/v1/';

  createAccomodation(id: any, accommodation: any) {
    return this.httpClient.post(`${this.api}lessee/${id}/accommodations`, accommodation);
  }

  accommodationInfo(id: any) {
    return this.httpClient.get(`${this.api}accomodations/${id}`);
  }

  updateAccommodation(id: any, data: any) {
    return this.httpClient.put(`${this.api}lessee/${id}`, data);
  }

  addContactInfo(id: any, info: any) {
    return this.httpClient.post(`${this.api}lessee/${id}/contacts`, info);
  }

  addAccommodationImage(id: any, image: any) {
    return this.httpClient.post(`${this.api}accommodations/${id}/images`, image);
  }

  getLesseeByUserID(id: number) {
    return this.httpClient.get(`${this.api}lessee/user/${id}`);
  }

  addContact(id: number, contact: Contact) {
    return this.httpClient.post(`${this.api}lessee/${id}/contacts`, contact);
  }

  updateContact(id: number, contact: Contact) {
    return this.httpClient.put(`${this.api}lessee/contacts/${id}`, contact);
  }

  deleteContact(id: number) {
    return this.httpClient.delete(`${this.api}lessee/contacts/${id}`);
  }
}
