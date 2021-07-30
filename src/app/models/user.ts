export interface User {
    username: string;
    firstName: string;
    fatherSurname: string;
    motherSurname: string;
    profileImage: string;
    gender: string;
    role: UserRole;
    id?: string;
}

export interface UserRole {
    name: string;
    slugName: string;
}
