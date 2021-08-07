import { User } from "./user";

export function createEmptyAccommodation(): Accommodation {
  return {
    name: '',
    location: {
      city: '',
      district: '',
      outDoorNumber: 0,
      state: '',
      street: '',
      zipCode: 0
    },
    coordinates: {
      latitude: 0,
      longitude: 0
    },
    isFull: true,
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
  location: Address;
  coordinates: Coordinates;
  isFull: boolean;
  price: number;
  manager: User;
  rooms: number;
  schedule: Schedule;
  users?: User[];
  photo?: AccommodationImage[];
  id?: string;
}

export interface Address {
  city: string;
  street: string;
  outDoorNumber: number;
  district: string;
  state: string;
  zipCode: number;
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