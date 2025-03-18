import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-sort',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sort.component.html',
  styleUrl: './sort.component.css'
})
export class SortComponent {
  constructor(public p:ProductService) { }
  sortBy: string = 'price'; // ברירת מחדל
  order: string = 'asc'; // ברירת מחדל
  onSortChange(){
    console.log(this.sortBy, this.order);
    if(this.order == 'asc' && this.sortBy == 'price')
      this.p.allP.sort((a, b) => a.price! - b.price!);
    if(this.order == 'desc' && this.sortBy == 'price')
      this.p.allP.sort((a, b) => b.price! - a.price!);
    if(this.order == 'asc' && this.sortBy == 'company')
      this.p.allP.sort((a, b) => a.nameCompany!.localeCompare(b.nameCompany!));
    if(this.order == 'desc' && this.sortBy == 'company')
      this.p.allP.sort((a, b) => b.nameCompany!.localeCompare(a.nameCompany!));
    if(this.order == 'asc' && this.sortBy == 'category')
      this.p.allP.sort((a, b) => a.nameCategory!.localeCompare(b.nameCategory!));
    if(this.order == 'desc' && this.sortBy == 'category')
      this.p.allP.sort((a, b) => b.nameCategory!.localeCompare(a.nameCategory!));
  }
}
