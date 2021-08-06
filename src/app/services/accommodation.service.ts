import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Accommodation } from '../models/accomodation';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AccommodationService {

  constructor(private database: AngularFireDatabase) { }

  public createAccommodation(accommodation: Accommodation, manager: User): void {
    accommodation.manager = manager;
    this.database.list<Accommodation>('alojamientos').push(accommodation);
  }
}
