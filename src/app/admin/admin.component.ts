import { Component, OnInit } from '@angular/core';
import { User } from './../models/user';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  // users: User[] = [
  //   new User('Priyanka', 'Buyer'),
  //   new User('Jithesh', 'Seller'),
  //   new User('Tharun', 'Seller'),
  //   new User('Rajvi', 'Seller')
  // ];
  users = <any>[];
  orders = <any>[];

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.apiService.getUsers()
    .subscribe(
      (response) => {
        console.log(response);
        this.users = response;
        this.users.forEach((element: any) => {
          if(element.userrole == 1){
            element.userrole = 'Admin';
          } else if(element.userrole == 2){
            element.userrole = 'Seller';
          } else {
            element.userrole = 'Customer';
          }
        });
      },
      (error) => console.log(error)
    );

    this.apiService.getOrders()
    .subscribe(
      (response) => {
        console.log(response);
        this.orders = response;
        this.orders.forEach( (order: { image: string; }) => order.image = 'https://mk-img-upload.s3.us-west-1.amazonaws.com/'+order.image);
      },
      (error) => console.log(error)
    );
  }

  deleteUser(user: any) {
    console.log(user);
    this.apiService.deleteUser(user.id)
    .subscribe(
      (response) => {
        console.log(response);
      },
      (error) => console.log(error)
    );

    this.apiService.getUsers()
    .subscribe(
      (response) => {
        console.log(response);
        this.users = response;
        this.users.forEach((element: any) => {
          if(element.username == 1){
            element.username = 'Admin';
          } else if(element.username == 2){
            element.username = 'Seller';
          } else {
            element.username = 'Customer';
          }
        });
      },
      (error) => console.log(error)
    );
  }

}
