import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { Accommodation } from '../models/accomodation';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AccommodationService {

  constructor(
    private database: AngularFireDatabase,
    private storage: AngularFireStorage
  ) { }

  public createAccommodation(accommodation: Accommodation, manager: User): void {
    accommodation.manager = manager;
    this.database.list<Accommodation>('alojamientos').push(accommodation);
  }

  public async addFirstPhoto(file: any): Promise<string> {
    const id = Date.now();
    const response = this.storage.ref(`photos/${id}`).put(file);
    const ref = (await response).ref
    return await ref.getDownloadURL();
  }
}
