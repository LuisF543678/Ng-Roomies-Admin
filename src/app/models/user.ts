import { Accommodation } from "./accomodation";

export interface User {
    username: string;
    firstName: string;
    fatherSurname: string;
    motherSurname: string;
    profileImage: string;
    gender: string;
    role: UserRole;
    id?: string;
    accommodations?: Accommodation[];
    contacts?: Contact[]; 
}

export interface UserRole {
    name: string;
    slugName: string;
}

export interface Contact {
    name: string;
    value: string;
}
