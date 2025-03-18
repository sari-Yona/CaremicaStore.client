import { Component } from '@angular/core';
import { Customer } from '../../classes/Customer';
import { FormsModule } from '@angular/forms';
import { CustomerService } from '../../services/customer.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  today:string = ''

  constructor(public c:CustomerService,public r: Router) { 
    const todayDate = new Date();
    this.today = todayDate.toISOString().split('T')[0]; 
    }
  newCustomer:Customer=new Customer()
  onRegister(){
    this.serverLogIn(this.newCustomer)
  } 

  serverLogIn(customer:Customer){
    this.c.signIn(customer).subscribe(
      res=>{
        this.c.currentUser= res
        swal("Welcome You are now logged in!!!", res.customerName || 'User', "success")
          this.r.navigate(['/home']);   
      }, 
      error=>{
       

      }
    )
  }

}
