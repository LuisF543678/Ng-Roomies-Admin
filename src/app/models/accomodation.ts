import { User } from "./user";

export interface Accommodation {
  name: string;
  address: Address;
  coodinates: Coordinates;
  isFull: boolean;
  price: number;
  lessee: User;
  users?: User[];
  images?: AccommodationImage[];
  id?: string;
}

export interface Address {
  street: string;
  number: number;
  district: string;
  state: string;
  zipCode: string;
}

export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface AccommodationImage {
  id: string;
  url: string;
  name: string;
}