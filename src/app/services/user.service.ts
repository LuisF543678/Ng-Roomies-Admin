import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { UpdateProfile } from '../models/vo/update-profile';
import { UploadImage } from '../models/vo/upload-image';
import { HttpClientService } from './http-client.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClientService) { }
  api = 'https://afternoon-reaches-14063.herokuapp.com/api/v1/';
  public registerUser(user: any) {
    return this.httpClient.post(`${this.api}auth/account`, user);
  }

  public confirmAccount(token: string) {
    return this.httpClient.patch(`${this.api}auth/account`, token);
  }

  public confirmAccountAgain(token: string) {
    return this.httpClient.put(`${this.api}auth/account`, token);
  }

  public auth(request: any) {
    return this.httpClient.post(`${this.api}auth`, request);
  }

  public changePasswordLink(username: string) {
    return this.httpClient.patch(`${this.api}auth/change_password`, username);
  }
 
  public changePassword(token: string, id: string) {
    return this.httpClient.patch(`${this.api}auth/${id}`, token);
  }

  public refreshToken(token: string) {
    return this.httpClient.post(`${this.api}auth/refresh_token`, token);
  }

  public updateProfile(id: number, user: UpdateProfile) {
    return this.httpClient.put(`${this.api}clients/${id}`, user);
  }

  public getUserByID(id: number) {
    return this.httpClient.get(`${this.api}clients/${id}`);
  }

  public uploadPhoto(id: number, file: UploadImage) {
    return this.httpClient.patch(`${this.api}clients/${id}`, file);
  }
}
