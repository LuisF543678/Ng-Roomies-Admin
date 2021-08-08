import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Accommodation } from 'src/app/models/accomodation';
import { Usuario } from 'src/app/models/users';

@Injectable({
  providedIn: 'root'
})
export class PeticionesService {

  alojamientosList: AngularFireList<any>;


  constructor(private firebaseData: AngularFireDatabase) {

  }


  getAlojamientos(){
    return this.alojamientosList = this.firebaseData.list('/alojamientos');
  }


}
