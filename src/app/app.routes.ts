import { Routes } from '@angular/router';
import { HomeComponent } from '../comp/home/home.component';
import { AboutUsComponent } from '../comp/about-us/about-us.component';
import { ProductsComponent } from '../comp/products/products.component';
import { CartComponent } from '../comp/cart/cart.component';
import { BathtubComponent } from '../comp/bathtub/bathtub.component';
import { SigninComponent } from '../comp/signin/signin.component';
import { LoginComponent } from '../comp/login/login.component';
import { MoreDetailsComponent } from '../comp/more-details/more-details.component';
import { PaymentComponent } from '../comp/payment/payment.component';


export const routes: Routes = [
    {path:'home',component:HomeComponent,children:[
        {path:'login',component:LoginComponent}
    ]},
    {path:'aboutUs',component:AboutUsComponent},
    {path:'products',component:ProductsComponent},
    {path:'cart',component:CartComponent},
    {path:'bathtub',component:BathtubComponent},
    {path:'signIn',component:SigninComponent},
    {path:'payment',component:PaymentComponent},
    {path:'more-details/:id',component:MoreDetailsComponent},
    {path:'',component:HomeComponent}

];
