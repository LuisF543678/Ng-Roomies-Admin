import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, SnapshotAction } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
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

  public getAccommodationById(id: number): Observable<Accommodation> {
    return this.database.list<Accommodation>('alojamientos', ref => ref.orderByChild('id').equalTo(id))
      .snapshotChanges().pipe(
        map(
          (data: SnapshotAction<Accommodation>[]) => {
            const accommodation = data[0].payload.val();
            accommodation.key = data[0].key;
            return accommodation;
          }
        ));
  }

  public getAccommodationsByManager({ username }: User): Observable<Accommodation[]> {
    return this.database.list<Accommodation>('alojamientos').snapshotChanges().pipe(
      map(
        data => {
          const newData = data.filter(action => {
            const accommodation: Accommodation = action.payload.val();

            if (accommodation.manager) {
              return (accommodation.manager.username == username);
            }

            return false;
          });

          return newData.map(action => {
            const accommodation = action.payload.val();
            accommodation.key = action.key;
            console.log(accommodation);
            return accommodation;
          });
        }
      )
    );
  }

  public async updateAccommodation(accommodation: Accommodation): Promise<void> {
    await this.database.database.ref(`alojamientos/${accommodation.key}`).update(accommodation);
  }

  public async deleteAccommodation(key: string): Promise<void> {
    await this.database.database.ref(`alojamientos/${key}`).remove();
  }
}
