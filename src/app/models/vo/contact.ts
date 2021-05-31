export class Contact {
    constructor(
        public name: string,
        public value: string
    ) {}

    static createVoid(): Contact {
        return new Contact('','');
    }
}
