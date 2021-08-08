import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Usuario } from 'src/app/models/users';

@Injectable({
  providedIn: 'root'
})
export class PeticionesService {

  requestList: AngularFireList<any>

  constructor(private firebaseData: AngularFireDatabase) { }

getRequest() {
  return this.requestList = this.firebaseData.list('/alojamientos/-MgWJD9_OL7IBbWdXJiy');
}

deleteRequest($key: string) {
  this.requestList.remove($key);
}

}
