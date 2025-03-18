import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Directive({
  selector: '[appAddToCart]',
  standalone: true
})
export class AddToCartDirective implements OnInit {
  @Input() productId?: number;

  constructor(private er: ElementRef, public p: ProductService) {}

  ngOnInit() {
    console.log(this.productId);
    if (this.productId != undefined && this.p.cart.findIndex(item => item.productId == this.productId) != -1) {
      this.er.nativeElement.style.opacity = '40%';
    }
  }


}
