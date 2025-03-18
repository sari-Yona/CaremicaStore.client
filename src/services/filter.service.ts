import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../classes/Customer';
import { Category } from '../classes/Category';
import { Company } from '../classes/Company';
import { FilterOptions } from '../classes/FilterOptions';
import { Product } from '../classes/Product';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor(public server: HttpClient) { }

getCategories(): Observable<Array<Category>> {
  return this.server.get<Array<Category>>(`https://localhost:7056/api/Category`);
}

getCompanies(): Observable<Array<Company>> {
  return this.server.get<Array<Company>>(`https://localhost:7056/api/Company`);
}

filtering(fo:FilterOptions): Observable<Array<Product>> {
  return this.server.post<Array<Product>>(`https://localhost:7056/api/Product`,fo);
}
categories:Array<Category>=new Array<Category>()
companies:Array<Company>=new Array<Company>()

}
