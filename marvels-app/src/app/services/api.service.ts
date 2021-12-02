import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  currentUser: any;
  public isAuthenticated = new Subject<boolean>();

  // BASE_URL = 'http://ec2-18-218-73-147.us-east-2.compute.amazonaws.com:8080/api/';
  BASE_URL = 'http://localhost:8080/api/';

  // products: Product[] = [
  //   new Product(1,'Product1', 'Description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 100, './../../assets/images/product1.jpg'),
  //   new Product(2,'Product2', 'Description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 150, './../../assets/images/product2.jpg'),
  //   new Product(3,'Product3', 'Description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 50, './../../assets/images/product3.jpg'),
  //   new Product(4,'Product4', 'Description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 200, './../../assets/images/product4.jpg'),
  //   new Product(5,'Product5', 'Description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 250, './../../assets/images/product5.jpg')
  // ];

  constructor(private http: HttpClient) { }

  setAuthentication(isAuthenticated: boolean){
    this.isAuthenticated.next(isAuthenticated);
  }

  getProducts(): Observable<any[]>
  {
    // return this.products; ec2-3-17-180-247.us-east-2.compute.amazonaws.com
    return this.http.get<any[]>( this.BASE_URL+'product')
    // return this.http.get<any[]>("http://localhost:8080/api/product")
    .pipe(map((res: any) => {
      return res;
    }))
  }
  // getProducts(){
  //   return this.products
  // }
  getProductsByUser(): Observable<any[]>
  {
    return this.http.get<any[]>( this.BASE_URL+'product/user',{
      params: {
        userid: this.currentUser.id
      }
    })
    .pipe(map((res: any) => {
      return res;
    }))
  }

  getUsers(): Observable<any[]>{
    return this.http.get<any[]>(this.BASE_URL+'users')
    .pipe(map((res: any) => {
      console.log(res)
      return res;
    }))
  }

  getOrders(): Observable<any[]>{
    return this.http.get<any[]>(this.BASE_URL+'Orders')
    .pipe(map((res: any) => {
      console.log(res)
      return res;
    }))
  }

  getUserOrders(): Observable<any[]>{
    return this.http.get<any[]>(this.BASE_URL+'Orders', {
      params: {
        userid: this.currentUser.id
      }
    })
    .pipe(map((res: any) => {
      console.log(res)
      return res;
    }))
  }

  addProduct(product: any){
    let body = product;
    body.userid = this.currentUser.id;
    return this.http.post(this.BASE_URL+'product', body)
  }

  deleteUser(index: number){
    return this.http.delete<any[]>(this.BASE_URL+'users',{
      params: {
        userid: index
      }
    })
    .pipe(map((res: any) => {
      console.log(res)
      return res;
    }))
  }

  addToCart(item: any) {
    let product = {
      pname: item.name,
      quantity: 1,
      userid: this.currentUser.id,
      productid: item.productid,
      active: true
    };
    return this.http.post(this.BASE_URL+'cart', product)
    // return this.http.post('http://localhost:8080/api/cart', product)
  }

  placeOrder(items: any) {
    console.log(items);
    let products: any[] =[];
    items.forEach((item: any)=>{
      let product = {
        name: item.name,
        image: item.image.replace('https://mk-img-upload.s3.us-west-1.amazonaws.com/',''),
        userId: this.currentUser.id,
        amount: item.price
      }
      products.push(product);
    })
    console.log(products);
  //  let body = {
  //    products
  //  }
    return this.http.post(this.BASE_URL+'Orders', products)
  }

  getRolebyUsername(cognitoUser: any): Observable<any>{
    console.log(cognitoUser);
    return this.http.get<any>(this.BASE_URL+'users/user',{
      params: {
        email: cognitoUser.username
      }
    })
    .pipe(map((res: any) => {
      console.log(res)
      return res;
    }))
  }

}
