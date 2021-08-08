import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../models/user';
import { Observable, Subscription } from 'rxjs';
import { Extractor } from '../models/vo/extractor';
import { UserSignUp } from '../models/vo/usersignup';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  extractor: Extractor<User>;

  constructor(
    private auth: AngularFireAuth,
    private database: AngularFireDatabase
  ) {
    this.extractor = new Extractor();
  }

  /**
   * Finds an user given his email and roleName.
   * @param email 
   * @param roleName "Inquilino" or "Arrendador" allowed.
   * @returns QuerySnapshot<User>: a reference to query results.
   */
  private searchUser(email: string): AngularFireList<User> {
    const response = this.database.list<User>('users', (ref) => ref.orderByChild('username').equalTo(email));
    // response.valueChanges().subscribe((data) => {console.log(data)})
    return response;
  }

  private search(email: string) {
    //console.log(this.database.list('users', (ref) => {ref.}))
  }

  /**
   * Signs in an user given the arguments.
   * @param email the email of the user.
   * @param password the password of the user.
   * @param roleName the name of the user role ("Inquilino" or "Arrendador" allowed).
   */
  //  public signIn(email: string, password: string): void {
  //   let subscriber: Subscription;
  //   const collectionRef = this.searchUser(email);
  //   console.log(collectionRef)
  //   subscriber = collectionRef.snapshotChanges().subscribe(
  //     async (data) => {
  //       console.log('hi' + data)
  //       const user = this.extractor.extractData(data[0]);
  //       if (user) {
  //         await this.auth.signInWithEmailAndPassword(email, password);
  //         localStorage.setItem('user', JSON.stringify(user));
  //       }
  //     },
  //     console.error
  //   );
  //   subscriber.unsubscribe();
  // }

  /**
   * This is an alternative method to the Gera's method used to authenticate and store user's data
   * Also this is not the best way and this method needs security fixes
   * @param email the user's email
   * @param password the user's password
   */
  public signIn(email: string, password: string): void {
    let subscriber: Subscription;
    const collectionRef = this.searchUser(email);
    subscriber = collectionRef.snapshotChanges().subscribe(
      async (data) => {
        const user = this.extractor.extractData(data[0]);
        if (user) {
          await this.auth.signInWithEmailAndPassword(email, password);
          localStorage.setItem('user', JSON.stringify(user));
        }
      }
    );
  }

  /**
   * Creates the account of a new user.
   * @param user the user data.
   * @returns Promise<void>
   */
  public async signUp(user: UserSignUp): Promise<boolean> {
    try {
      const response = await this.auth.createUserWithEmailAndPassword(user.username, user.password);
      if (response) {
        delete user.password;
        await this.database.list<User>('users').push(user);
        const currentUser = await this.auth.currentUser;
        await currentUser.sendEmailVerification();
        this.signOut();
      }
      return true;
    } catch (error: any) {
      console.log(error);
      return false;
    }
  }

  /**
   * Retrieve the data of the user signed in.
   * @returns User data.
   */
  public getCurrentUser(): User {
    const user = JSON.parse(localStorage.getItem('user'));
    return user;
  }

  /**
   * Logout the current user.
   */
  public signOut(): void {
    this.auth.signOut();
  }

  async loginGoogle() {
    try {
      return this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider)
    }
    catch (error) {
      console.log(error)
    }
    return null;
  }
}


