import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/product';
import { UploadService } from './../../services/upload.service';
import { Router } from '@angular/router';
import { ApiService } from './../../services/api.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product: Product = new Product();
  

  public selectedFile: any;
  imgURL: any;

  constructor( private uploadService: UploadService,
    private apiService: ApiService,
    // private httpClientService: HttpClientService,
    // private activedRoute: ActivatedRoute,
    private router: Router
    // private httpClient: HttpClient
    ) { }

  ngOnInit(): void {
  }

  public onFileChanged(event: any) {
    console.log(event.target.files);
    this.selectedFile = event.target.files[0];

    // Below part is used to display the selected image
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event2) => {
      this.imgURL = reader.result;
    };
  }

  addProduct(form: NgForm) {
    const file = this.selectedFile;
    form.value.image = file.name;
    this.uploadService.uploadFile(file);
    this.apiService.addProduct(form.value)
    .subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
    this.router.navigate(['/seller']);
  }

}
