import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerComponent } from './seller/seller.component';
import { AdminComponent } from './admin/admin.component';
import { CartComponent } from './cart/cart.component';
import { AddProductComponent } from './seller/add-product/add-product.component';
import { AuthService } from './auth/auth.service'; 
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { AuthGuard } from './auth/auth-guard';

const routes: Routes = [
  { path:'', redirectTo: '/home', pathMatch: 'full'},
  { path:'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path:'cart', component: CartComponent, canActivate: [AuthGuard] },
  { path:'seller', component: SellerComponent, canActivate: [AuthGuard]}, 
  { path:'addProduct', component: AddProductComponent, canActivate: [AuthGuard] },
  { path:'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'signin', component: SignInComponent},
  { path: 'signup', component: SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthService]
})
export class AppRoutingModule { }
