import { User } from "./user";

export interface Accommodation {
  name: string;
  location: Address;
  coodinates: Coordinates;
  isFull: boolean;
  price: number;
  manager: User;
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