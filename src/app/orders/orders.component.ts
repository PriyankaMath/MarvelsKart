import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders = <any>[];
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getUserOrders()
    .subscribe(
      (response) => {
        console.log(response);
        this.orders = response;
        this.orders.forEach( (order: { image: string; }) => order.image = 'https://mk-img-upload.s3.us-west-1.amazonaws.com/'+order.image);
      },
      (error) => console.log(error)
    );
  }

}
