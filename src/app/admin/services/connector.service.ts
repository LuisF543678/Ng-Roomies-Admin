import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { Usuario } from 'src/app/models/users';

@Injectable({
  providedIn: 'root'
})
export class ConnectorService {


  private dbPath = '/tutorials';

  tutorialsRef: AngularFireList<Usuario> = null;

  constructor(private firedb: AngularFireDatabase, private firestore: AngularFirestore) { }

  reference(ref: string) {
    return this.firedb.database.ref(ref);
  }
  
  /* getCategories() {
    return this.firestore.collection('users').valueChanges();
  }
 */

  getAll(): AngularFireList<Usuario> {
    return this.tutorialsRef;
  }

  deleteAll(): Promise<void> {
    return this.tutorialsRef.remove();
  }

}
