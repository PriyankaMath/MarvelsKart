import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SellerComponent } from './seller/seller.component';
import { AdminComponent } from './admin/admin.component';
import { HeaderComponent } from './header/header.component';
import { CartComponent } from './cart/cart.component';
import { AddProductComponent } from './seller/add-product/add-product.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { MsalModule, MsalService, MSAL_INSTANCE } from '@azure/msal-angular';
// import { IPublicClientApplication, PublicClientApplication } from '@azure/msal-browser';
// import { AuthModule } from '@auth0/auth0-angular';
// import { environment as env } from 'src/environments/environment';

// export function MSALInstanceFactory(): IPublicClientApplication {
//   return new PublicClientApplication({
//     auth: {
//       clientId: '4678f100-a630-4d68-b53b-50f0a92d2fc1',
//       redirectUri: 'http://localhost:4200/home'
//     }
//   })
// }
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SellerComponent,
    AdminComponent,
    HeaderComponent,
    CartComponent,
    AddProductComponent,
    SignInComponent,
    SignUpComponent,
    // LandingPageComponent,
    // LoginButtonComponent,
    // LoginComponent,
    // RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    // AuthModule.forRoot({
    //   ... env.auth,
    // })
  ],
  providers: [
    // authInterceptorProviders
    // {
    //   provide: MSAL_INSTANCE,
    //   useFactory: MSALInstanceFactory
    // },
    // MsalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
