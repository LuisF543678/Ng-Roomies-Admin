import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private httpClient: HttpClientService) { }
  api = 'https://afternoon-reaches-14063.herokuapp.com/api/v1/';

  getRequestsAccommodation(accommodation_id: any) {
    return this.httpClient.get(
      `${this.api}accommodations/requests/accommodation/${accommodation_id}`);
  }

  public AcceptRequests(id: any) {
    return this.httpClient.patch(
      `${this.api}accommodations/requests/${id}`,{});
  }

  public RejectRequests(id: any, reason:string) {
    return this.httpClient.patch(
      `${this.api}accommodations/requests/rejected/${id}`, reason)
  }

}
