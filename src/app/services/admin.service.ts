import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
/* import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user'; */

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private firestore: AngularFirestore) { }

}
