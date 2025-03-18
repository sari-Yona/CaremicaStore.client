import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { get } from 'http';
import { FilterService } from '../../services/filter.service';
import { FilterOptions } from '../../classes/FilterOptions';
import { ProductService } from '../../services/product.service';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [FormsModule,ButtonComponent],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent implements OnInit {
  constructor(public f: FilterService, public p: ProductService) {
  }
  ngOnInit(): void {
    this.getCompanies()
    this.getCategories()
  }

  getCategories() {
    this.f.getCategories().subscribe(
      res => {
        this.f.categories = res

      },
      error => {

        console.log(error.message);
      }
    )
  }
  getCompanies() {
    this.f.getCompanies().subscribe(
      res => {
        this.f.companies = res
      },
      error => {

        console.log(error.message);
      }
    )
  }

  filtering() {
    this.f.filtering(this.fo).subscribe(
      res => {
        this.p.allP = res
      },
      error => {

        console.log(error.message);
      }
    )
  }

  fo: FilterOptions = new FilterOptions()

  filter(b:string) {
    console.log(this.fo);
    this.filtering()

  }

  cancelFilter(b:string){
    this.fo = new FilterOptions()
    this.filtering()

  }
}
