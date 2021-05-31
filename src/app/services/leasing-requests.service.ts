import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';

@Injectable({
  providedIn: 'root'
})
export class LeasingRequestsService {

  constructor(private httpClient: HttpClientService) { }

  api = 'https://afternoon-reaches-14063.herokuapp.com/api/v1/';
 
  getRequestsByAccomodation(id: any) {
    return this.httpClient.get(`${this.api}accommodations/requests${id}`);
  }

  getRequestDetail(accommodationId: any, userId: any) {
    return this.httpClient.get(`${this.api}accommodations/requests/${accommodationId}/${userId}`);
  }

  acceptRequest(accommodationId: any, userId: any) {
    return this.httpClient.patch(`${this.api}/accommodations/requests/${accommodationId}/${userId}`, {});
  }

  denyRequest(accommodationId: any, userId: any) {
    return this.httpClient.patch(`${this.api}/accommodations/requests/rejected/${accommodationId}/${userId}`, {});
  }

}
