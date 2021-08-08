import { User } from "./user";
import { AddressFormData } from "./vo/addressFormData";

export function createEmptyAccommodation(): Accommodation {
  return {
    name: '',
    firstPhoto: '',
    location: {
      city: '',
      district: '',
      outdoorNumber: 0,
      state: '',
      street: '',
      zipCode: 0
    },
    coordinates: {
      latitude: 0,
      longitude: 0
    },
    isFull: false,
    manager: {
      admin: false,
      birthDate: '',
      fatherSurname: '',
      firstName: '',
      gender: '',
      motherSurname: '',
      username: '',
    },
    price: 0,
    rooms: 0,
    schedule: {
      endDay: '',
      endHour: '',
      startDay: '',
      startHour: ''
    }
  }
}

export interface Accommodation {
  name: string;
  location: Address | AddressFormData;
  coordinates: Coordinates;
  isFull: boolean;
  price: number;
  manager: User;
  rooms: number;
  schedule: Schedule;
  key?: any;
  firstPhoto?: string;
  users?: User[];
  photo?: AccommodationImage[];
  id?: number;
}

export interface Address {
  street: string;
  outdoorNumber: number;
  district: string;
  zipCode: number;
  city: string;
  state: string;
}

export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface AccommodationImage {
  photo: string;
}

export interface Schedule {
  startDay: string;
  endDay: string;
  startHour: string;
  endHour: string;
}