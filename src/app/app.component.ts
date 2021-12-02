import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from './services/api.service';
// import { MsalService } from '@azure/msal-angular';
// import { AuthenticationResult } from '@azure/msal-common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'marvels-app';
  subscription: Subscription = new Subscription;
  isAuthenticated : boolean = false;

  constructor(private apiService: ApiService){
  }

  ngOnInit(): void {
    this.subscription = this.apiService.isAuthenticated.subscribe(
      (value) => {
        this.isAuthenticated = value;
      }
    )
    // this.msalService.instance.handleRedirectPromise().then(
    //   res => {
    //     if(res != null && res.account !=null){
    //       this.msalService.instance.setActiveAccount(res.account);
    //     }
    //   }
    // )
  }

  // isLoggedIn(): boolean {
  //   return this.msalService.instance.getActiveAccount() != null
  // }

  // login(){
  //   this.msalService.loginRedirect();
  //   // this.msalService.loginPopup().subscribe((response: AuthenticationResult) => {
  //   //   this.msalService.instance.setActiveAccount(response.account)
  //   // });
  // }

  // logout() {
  //   this.msalService.logout();
  // }
}
