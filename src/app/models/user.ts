export class User {
    constructor(
        public ID: number,
        public UUID: string,
        public user_name: string,
        public name: string,
        public father_surname: string,
        public mother_surname: string,
        public ProfileImage: string,
        public user_role_id: number,
        public gender: string,
        public UserRole: UserRole
    ) {}

    static createVoid(): User {
        const role = new UserRole(0,'','');
        return new User(0, '', '', '', '','','',0,'',role);
    }
}

export class UserRole {
    constructor(
        public ID: number,
        public Name: string,
        public SlugName: string
    ) {}
}