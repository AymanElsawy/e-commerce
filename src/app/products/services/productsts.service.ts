import { environment } from './../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductstsService {

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get(`${environment.apiUrl}/products`); // get all products from the server
  }

  getAllCategories() {
    return this.http.get(`${environment.apiUrl}/products/categories`); // get all categories from the server
  }

  getProductsByCategory(categoryName: string) {
    return this.http.get(`${environment.apiUrl}/products/category/${categoryName}`); // get all products by category from the server
  }

  getProductById(id: number) {
    return this.http.get(`${environment.apiUrl}/products/${id}`); // get product by id from the server

  }
}
