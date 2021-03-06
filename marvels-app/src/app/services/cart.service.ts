import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList : any = []
  public productList = new BehaviorSubject<any>([])
  grandTotal: number = 0;

  constructor() { }

  getProducts() {
    return this.productList.asObservable();
  }

  setProduct(product: any) {
    this.cartItemList.push(...product);
    this.productList.next(product);
  }

  addToCart(product: any) {
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.grandTotal = this.getTotalPrice();
    console.log(this.cartItemList);
  }

  getTotalPrice(): number{
    let grandTotal = 0;
    console.log(this.cartItemList);
    this.cartItemList.map((a: any) => {
      grandTotal += a.total;
    })
    return grandTotal;
  }

  removeCartItem(index: any) {
    this.cartItemList.splice(index, 1)
    // this.cartItemList.map((a: any, index: any) => {
    //   if(product.id === a.id) {
    //     this.cartItemList.splice(index, 1);
    //   }
    // })
    this.productList.next(this.cartItemList);
  }

  removeAllCart(){
    this.cartItemList =[]
    this.productList.next(this.cartItemList);
  }
}
