import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public products: any = [];
  public grandTotal !: number;
  public orderPlaced: boolean = false;

  constructor(private cartService: CartService, private apiService: ApiService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe( res => {
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }

  removeItem(item: any) {
    this.cartService.removeCartItem(item);
    this.grandTotal = this.cartService.getTotalPrice();
  }

  emptyCart() {
    this.cartService.removeAllCart();
    this.grandTotal = this.cartService.getTotalPrice();
  }

  placeOrder(products: any){
    this.cartService.removeAllCart();
    this.orderPlaced = true;
    this.apiService.placeOrder(products)
    .subscribe(
      (response: any) => {
        console.log(response)
      },
      (error) => console.log(error)
    )
  }

}
