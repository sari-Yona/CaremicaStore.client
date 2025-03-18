import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ShoppingDetail } from '../classes/ShoppingDetail';
import { Shopping } from '../classes/Shopping';
import { Observable } from 'rxjs';
import { Product } from '../classes/Product';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  constructor(public server: HttpClient) { }

  finishShopping(lsd:Array<ShoppingDetail>,customerId:number): Observable<Shopping> {
    return this.server.post<Shopping>(`https://localhost:7056/api/Shopping/finishShopping/${customerId}`, lsd);
  }
  
  shopping:Shopping=new Shopping()
  outOfStock:Map<number, Product> = new Map();
  outOfStockArray: Array<Product> =new Array();

  isLess:boolean=false

}
