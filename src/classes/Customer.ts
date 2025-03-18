export class Customer{

    constructor(public id?:number,
        public customerName?:string,public phone?:string,public email?:string,public dateBirth?:Date) {
        this.phone=""
    }
}