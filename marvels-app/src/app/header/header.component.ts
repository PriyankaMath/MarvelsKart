import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
// import { MsalService } from '@azure/msal-angular';
import { Router } from '@angular/router';
import { CognitoUserPool } from 'amazon-cognito-identity-js';
import { environment } from './../../environments/environment';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public totalItem: number = 0;
  userrole: any;

  constructor(private cartService: CartService, 
    private router: Router, 
    private apiService: ApiService) { }

  ngOnInit(): void {
    this.userrole = this.apiService.currentUser.userrole;
    this.cartService.getProducts()
    .subscribe(res =>{
      this.totalItem = res.length;
    })
  }

  onLogout(): void {
    let poolData = {
      UserPoolId: environment.cognitoUserPoolId,
      ClientId: environment.cognitoAppClientId
    };
    let userPool = new CognitoUserPool(poolData);
    let cognitoUser = userPool.getCurrentUser();
    cognitoUser?.signOut();
    this.router.navigate(["signin"])
  }



  // getName(): string {
  //   console.log(this.msalService.instance.getActiveAccount);
  //   return this.msalService.instance.getActiveAccount.name;
  // }
  
  // isLoggedIn(): boolean {
  //   return this.msalService.instance.getActiveAccount() != null
  // }

  // logout() {
  //   this.msalService.logout();
  // }

}
