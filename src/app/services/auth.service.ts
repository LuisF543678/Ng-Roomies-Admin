import { Injectable } from '@angular/core';
import { AngularFirestore, QuerySnapshot } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../models/userfire';
import { Observable, Subscription } from 'rxjs';
import { Extractor } from '../models/vo/extractor';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private database: AngularFirestore,
    private auth: AngularFireAuth,
    private extractor: Extractor<User>,
    ) { }

  /**
   * Finds an user given his email and roleName.
   * @param email 
   * @param roleName 
   * @returns QuerySnapshot<User>: a reference to query results.
   */
  private searchUser(email: string, roleName: string): Observable<QuerySnapshot<User>> {
    const response = this.database.collection<User>('users', (ref) => ref.where('email', '==', email).where('role.name', '==', roleName).limit(1)).get();
    return response;
  }

  /**
   * Signs in an user given the arguments.
   * @param email the email of the user.
   * @param password the password of the user.
   * @param roleName the name of the user role.
   */
  public signIn(email: string, password: string, roleName: string): void {
    let subscriber: Subscription;
    const userRef = this.searchUser(email, roleName);
    subscriber = userRef.subscribe(
      data => {
        const user = data.docs.map(this.extractor.extractData)[0];
        if (user) {
          this.auth.signInWithEmailAndPassword(email, password);
          localStorage.setItem('user', JSON.stringify(user));
        }
      },
      console.error
    );
    subscriber.unsubscribe();
  }

  /**
   * Logout the current user.
   */
  public signOut(): void {
    this.auth.signOut();
  }
}
