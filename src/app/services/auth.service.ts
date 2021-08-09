import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject, SnapshotAction } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../models/user';
import { Observable, Subscription } from 'rxjs';
import { Extractor } from '../models/vo/extractor';
import { UserSignUp } from '../models/vo/usersignup';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  extractor: Extractor<User>;

  constructor(
    private auth: AngularFireAuth,
    private database: AngularFireDatabase,
    private storage: AngularFireStorage,
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
    return response;
  }

  /**
   * This is an alternative method to the Gera's method used to authenticate and store user's data
   * Also this is not the best way and this method needs security fixes
   * @param email the user's email
   * @param password the user's password
   */
  public signIn(email: string, password: string): void {
    let subscriber: Subscription;
    const user = this.searchUser(email);
    subscriber = user.snapshotChanges().subscribe(
      (data: SnapshotAction<User>[]) => {
        if (data.length > 0) {
          this.auth.signInWithEmailAndPassword(email, password).then(
            () => {
              const user = data[0].payload.val();
              user.key = data[0].key;
              localStorage.setItem('user', JSON.stringify(user));
            },
          ).catch(console.error);      
        }
      },
      console.error
    );
    subscriber.unsubscribe();
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

  public async resetPassword(email: string) {
    let success: boolean;
    await this.auth.sendPasswordResetEmail(email)
    .then(() => {
      console.log('Email sent')
      success = true
    }, (error) => {
      console.log(error)
      success = false;
    })
    return success;
  }

  public async updateUser(userData: User): Promise<void> {
    await this.database.database.ref(`users/${userData.key}`).update(userData);
  }

  public async uploadProfilePhoto(file: File, key: any): Promise<string> {
    const name = `user-${key}-${Date.now()}`;
    const fileRef = await this.storage.ref(`users/${name}`).put(file);
    return await fileRef.ref.getDownloadURL();
  }
}
