import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../classes/Customer';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert'
import { ButtonComponent } from '../button/button.component';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ButtonComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(public c: CustomerService, public router: Router) {
  }


  customer: Customer = new Customer()


  onLogin() {
    // if (this.customer.customerName == null || this.customer.email == null)
      this.serverLogIn(this.customer)
  }

  serverLogIn(customer: Customer) {
    this.c.logIn(customer).subscribe(
      res => {
        this.c.currentUser = res
        Swal("Hello", res.customerName!, "success")
        this.router.navigate(['../products']);
      },
      error => {
        if (error.status == 404) {
          alert("Opps! pleas log in!")
          this.router.navigate(['../signIn']);
        }

      }
    )
  }

  clickBtn(b: string) {
    this.router.navigate([`./signIn`])

  }

}
