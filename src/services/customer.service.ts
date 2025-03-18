import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../classes/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(public server: HttpClient) { }
 logIn(customer: Customer): Observable<Customer> {
    return this.server.post<Customer>(`https://localhost:7056/api/Customer/login`, customer);
}

signIn(customer: Customer): Observable<Customer> {
  return this.server.post<Customer>(`https://localhost:7056/api/Customer/signin`, customer);
}

currentUser:Customer=new Customer()


}
