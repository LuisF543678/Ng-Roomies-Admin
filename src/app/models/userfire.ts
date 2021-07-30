import { Role } from "./role";

export interface User {
  id: number;
  userName: string;
  name: string;
  fatherSurname: string;
  motherSurname: string;
  profileImage: string;
  gender: string;
  role: Role; 
}