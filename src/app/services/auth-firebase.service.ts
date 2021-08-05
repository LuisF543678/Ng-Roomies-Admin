import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthFirebaseService {

  constructor(
    private firestore: AngularFirestore,
    private auth: AngularFireAuth,
  ) { }
}
