import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  addToCart(cartItems) {
    return this.http.post(`${environment.apiUrl}/carts`,cartItems); // add to cart from the server
  }
}
