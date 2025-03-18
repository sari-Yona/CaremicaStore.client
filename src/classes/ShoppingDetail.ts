export class ShoppingDetail {
  
    constructor(public id?: string,
      public productId?: number,
      public nameProduct?: string,
      public  description?: string,
      public  price?: number,
      public quantity?:number,
      public picture?: string
      ) {    
        this.picture=""    
    }
    
}
