import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {
  products= <any>[];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getProductsByUser()
    .subscribe(
      (response) => {
        console.log(response);
        this.products = response;
        this.products.forEach( (product: { image: string; }) => product.image = 'https://mk-img-upload.s3.us-west-1.amazonaws.com/'+product.image);
      },
      (error) => console.log(error)
    )
 }
}
