import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { Product } from '../../classes/Product';
import { FilterComponent } from '../filter/filter.component';
import { SortComponent } from "../sort/sort.component";
import { NgClass } from '@angular/common';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FilterComponent, SortComponent,NgClass,ButtonComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  constructor(public p:ProductService,public r: Router) { }
  ngOnInit(): void {
    this.getAllProducts()
}
 getAllProducts(){
    this.p.getProducts().subscribe(
      res=>{
       this.p.allP=res
      },
      error=>{
       
        console.log("🤧");
      }
    )
  }
  moreDet(id:number,b:number){
    this.r.navigate([`../more-details/${id}`])
  }
  openFilter(){
    this.isFilter=!this.isFilter
  }
  openSort(){
    this.isSort=!this.isSort
  }
  isFilter:boolean=false
  isSort:boolean=false 

}
