import { ProductstsService } from './../../services/productsts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {

  products:any[]=[]; 
  categories: any[] = []; 
  spinner: boolean;
  constructor(private productstsService: ProductstsService) { }

  ngOnInit(): void {
    this.getAllProducts();  // start getAllProduct fn to get all products from the server
    this.getAllCategories(); // start getAllCategories fn to get all categories from the server
  }

  getAllProducts() {
    this.spinner = true; // start spinner
    this.productstsService.getAllProducts().subscribe( 
      (data: any) => {
        this.spinner = false; // stop spinner
        this.products = data; //get all products from the server
      }, err => {
        this.spinner = false; // stop spinner
        console.log(err);  // if error, print the error
      }
    )

  } // end getAllProducts fn

  getAllCategories() {
    this.productstsService.getAllCategories().subscribe( 
      (data:any) => {
        this.categories = data; //get all categories from the server
      }, err => {
        console.log(err);  // if error, print the error
      }
    )
   
  }// end getAllCategories fn

  getProductsByCategory(event) {
    const category = event.target.value; // get the category from the event
    if (category == 'all') {
      this.getAllProducts(); // if category is all, get all products from the server
    } else { 
      this.spinner = true; // start spinner
      this.productstsService.getProductsByCategory(category).subscribe( 
        (data: any) => {
          this.spinner = false; // stop spinner
          this.products = data; //get all products by category from the server
        }, err => {
          this.spinner = false; // stop spinner
          console.log(err);  // if error, print the error
        }
      )
    
     }
   }
}
