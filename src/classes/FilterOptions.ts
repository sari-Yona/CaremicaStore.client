export class FilterOptions{

    constructor(public categoryId?:number,
        public companyId?:number, public maxPrice?:number,public minPrice?:number) {
            this.categoryId=0;
            this.companyId=0;
            this.maxPrice=0;
            this.minPrice=0;
    }
}