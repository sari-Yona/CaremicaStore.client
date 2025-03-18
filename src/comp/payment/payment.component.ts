import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { ShoppingService } from '../../services/shopping.service';
import { CustomerService } from '../../services/customer.service';
import { FormsModule } from '@angular/forms';
import { ShoppingDetail } from '../../classes/ShoppingDetail';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [FormsModule,ButtonComponent],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent implements OnInit {

  constructor(public p: ProductService, public r: Router, public s: ShoppingService, public c: CustomerService) { }
  ngOnInit(): void {
    this.finishS()

  }
  finishS() {
    console.log(this.p.cart);
    console.log(this.c.currentUser.id);
    this.s.finishShopping(this.p.cart, this.c.currentUser.id!).subscribe(
      res => {
        this.s.shopping = res
        if(this.c.currentUser.dateBirth?.getMonth()==new Date().getMonth()){
          swal("Happy Birthday!!", "You have a 20% discount on your order 🎇🎈", "success")
        }
      },
      error => {
        if(error.status==409){
          console.log(error.error);
          for (const key in error.error) {
            if (error.error.hasOwnProperty(key)) {
                const product = error.error[key];
                this.s.outOfStock.set(Number(key), product); 
            }
          }
          // this.s.outOfStock=error.error
          this.s.isLess=true
          this.s.outOfStockArray=Array.from(this.s.outOfStock.values());
          this.r.navigate(["./cart"])        
          swal("Oops!!","Some products are out of stock ", "error")
        }
        console.log(error.message);
      }
    )
  }

  useSavedCard: boolean = true;
  shippingDetails: any = {
    name: '',
    address: '',
    city: '',
    zip: ''
  };
  creditCardDetails: any = {
    cardNumber: '',
    cardHolderName: '',
    expirationDate: '',
    cvv: ''
  };
  onSubmit(b:string) {
    this.p.cart = []
    this.p.totalPrice = 0
    swal("Thank you!", "Your order has been placed successfully", "success")
    this.r.navigate(["./home"])
  }
}
