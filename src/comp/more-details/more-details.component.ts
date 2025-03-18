import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../classes/Product';
import { ShoppingDetail } from '../../classes/ShoppingDetail';
import { PricePipe } from '../../app/price.pipe';
import { AddToCartDirective } from '../../app/add-to-cart.directive';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-more-details',
  standalone: true,
  imports: [PricePipe,AddToCartDirective,ButtonComponent],
  templateUrl: './more-details.component.html',
  styleUrl: './more-details.component.css'
})
export class MoreDetailsComponent {
  constructor(public ar: ActivatedRoute, public p: ProductService, public r: Router) {
    ar.params.subscribe(data => {
      this.id = data['id'];
      let product = p.allP.find(x => x.id === Number(this.id))
      if (product)
        this.product = product
      else
        console.log("mistake!");

    })

  }
id:string=""
product:Product=new Product()
newItem:ShoppingDetail=new ShoppingDetail()

addToCart(product:Product){
  this.newItem.productId=product.id
  this.newItem.nameProduct=product.nameProduct
  this.newItem.description=product.description
  this.newItem.price=product.price
  this.newItem.quantity=1
  let x= this.p.cart.find(item => item.productId === this.newItem.productId)
  if(x!=null)
    x.quantity!++
  else
    this.p.cart.push(this.newItem)
  this.p.totalPrice+=this.newItem.price!
  this.r.navigate(["./cart"])
}

back(b:string){
  this.r.navigate(["./products"])
}
}
