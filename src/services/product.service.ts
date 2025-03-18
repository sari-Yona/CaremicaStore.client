import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../classes/Product';
import { ShoppingDetail } from '../classes/ShoppingDetail';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public server: HttpClient) { }
  allP:Array<Product>=new Array<Product>()
  cart:Array<ShoppingDetail>=new Array<ShoppingDetail>()
  totalPrice:number=0
  getProducts(): Observable<Array<Product>> {
    return this.server.get<Array<Product>>(`https://localhost:7056/api/Product`);
  }

  // getProductById(id: number): Observable<any> {
  //   return this.server.get(`https://localhost:7056/api/Product/${id}`);
  // }




}
