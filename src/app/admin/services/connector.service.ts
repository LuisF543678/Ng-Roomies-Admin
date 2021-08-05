import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ConnectorService {

  constructor(private firedb: AngularFireDatabase) { }

  reference(ref: string) {
    return this.firedb.database.ref(ref);
  }



}
