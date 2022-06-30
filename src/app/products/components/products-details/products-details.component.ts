import { ProductstsService } from './../../services/productsts.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss']
})
export class ProductsDetailsComponent implements OnInit {

  id;
  product:any;
  spinner: boolean;
  constructor(private route: ActivatedRoute, private productstsService:ProductstsService) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id'); // get the id from the url
    this.getProductById(this.id); // get product by id from the server
  }

  getProductById(id) {  // get product by id from the server
    this.spinner = true; // start spinner
    this.productstsService.getProductById(id).subscribe(
      (data: any) => { 
        this.spinner = false; // stop spinner
        this.product = data; // get product by id from the server
      }, err => {
        console.log(err); // if error, print the error
      }
    ); 
  } // end getProductById fn

}
