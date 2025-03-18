import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ShoppingDetail } from '../../classes/ShoppingDetail';
import { Router } from '@angular/router';
import { ShoppingService } from '../../services/shopping.service';
import { CustomerService } from '../../services/customer.service';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,ButtonComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  constructor(public p:ProductService,public r: Router,public s:ShoppingService,public c:CustomerService) { 
    console.log(s.outOfStock);
console.log(s.isLess);
console.log(s.outOfStockArray);


  }
  plus(item:ShoppingDetail){
    item.quantity!++
    this.p.totalPrice+=item.price!
  }
  minus(item:ShoppingDetail){
    if(item.quantity!>1){
    item.quantity!-- 
    this.p.totalPrice-=item.price!}

  }
  remove(item:ShoppingDetail){
    this.p.cart.splice(this.p.cart.indexOf(item),1)
    this.p.totalPrice-=item.price!*item.quantity!
  }

  payment(b:string){
    const dateBirth = this.c.currentUser.dateBirth ? new Date(this.c.currentUser.dateBirth) : new Date(); // המרה לאובייקט Date
    const monthOfBirth = dateBirth.getMonth(); // קבלת החודש של תאריך הלידה
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth(); // קבלת החודש הנוכחי
    
    if (this.c.currentUser.customerName) {
        if (currentMonth === monthOfBirth) {
            // swal("Happy Birthday", "Greetings and best wishes!", "success");
            swal({
              title: "Happy Birthday",
              text: "Greetings and best wishes!",
              icon: "success",
              content: {
              element: "img",
              attributes: {
                src: "h.jpg",
                width: "400",
                height: "200"
              }
              }
            });
        }
    
      this.r.navigate(["./payment"])
      this.s.isLess=false
    }
    else{
      swal("Oops!!","Pleas Log In!", "error")
      this.r.navigate(["./home"])

    }
  }

}
