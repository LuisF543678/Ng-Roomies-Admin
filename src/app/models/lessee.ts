import {User} from './user';

export class Lessee {
    constructor(
        public ID: number,
        public UserID: number,
        public User: User,
        public Accommodations: any[],
        public Contacts: Contact[],    
    ) {}

    static createVoid(): Lessee {
        return new Lessee(
            0,
            0,
            User.createVoid(),
            [],
            []       
        );
    }
}

export class Accommodation {
    constructor(
        public ID: number,
        public Name: string,
        public Street: string,
        public Number: number,
        public District: string,
        public City: string,
        public State: string,
        public ZipCode: string,
        public Latitude: number,
        public Longitude: number,
        public IsFull: boolean,
        public QuantityOfRooms: number,
        public LesseeID: number,
        public Price: number,
        public Users: User[],
        public Images: AccommodationImage[]
    ) {}
}

export class AccommodationImage {
    constructor(
        public ID: number,
        public URL: string,
        public Name: string
    ) {}
}

export class Contact {
    constructor(
        public ID: number,
        public Name: string,
        public Value: string,
    ) {}
}
