export class UploadImage {
    constructor(
        public filename: string,
        public file: any,
    ) {}
    
    static createVoid() {
        return new UploadImage('', undefined);
    }
}
