import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { CartService } from '../services/cart.service';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;

  productList= <any>[];

  constructor(private apiService: ApiService, 
    private cartService: CartService) { }

  ngOnInit(): void {
    // this.productList = this.apiService.getProducts()
    this.apiService.getProducts()
    .subscribe(
      (response) => {
        console.log(response);
        this.productList = response;
        this.productList.forEach( (product: { image: string; }) => product.image = 'https://mk-img-upload.s3.us-west-1.amazonaws.com/'+product.image);
      },
      (error) => console.log(error)
    )

  }

  addToCart(item: any) {
    this.cartService.addToCart(item);
    this.apiService.addToCart(item)
    .subscribe(
      (response) => {
        console.log(response);
      },
      (error) => console.log(error)
    )
  }

}
