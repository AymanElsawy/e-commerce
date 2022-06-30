import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartProducts: any[] = [];
  success: boolean;

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.getCartProducts(); // start getCartProducts fn to get the cart from localStorage
  }

  getCartProducts() {
    if ('cart' in localStorage) { // if cart is in localStorage
      this.cartProducts = JSON.parse(localStorage.getItem('cart')); // get the cart from localStorage
    }
    console.log(this.cartProducts);
  }

  getCartTotalPrice() {
    let total = 0; // start total
    for (let i = 0; i < this.cartProducts.length; i++) {
      total += this.cartProducts[i].item.price * this.cartProducts[i].quantity; // get the total price of the cart
    }
    return total; // return the total price of the cart
  } // end getCartTotalPrice fn


  addAmount(index) {
    this.cartProducts[index].quantity++; // add 1 to the quantity
    localStorage.setItem('cart', JSON.stringify(this.cartProducts)); // set the cart to localStorage
  } // end addAmount fn


  minsAmount(index) {
    this.cartProducts[index].quantity--; // minus 1 to the quantity
    localStorage.setItem('cart', JSON.stringify(this.cartProducts)); // set the cart to localStorage
  } // end minsAmount fn

  detectChange() { // detect the change in the cart
    localStorage.setItem('cart', JSON.stringify(this.cartProducts)); // set the cart to localStorage
  } // end detectChange fn

  clearCart() {
    this.cartProducts = []; //clear the cart
    localStorage.setItem('cart', JSON.stringify(this.cartProducts)); // set the cart to localStorage
  }// end clearCart fn


  deleteProduct(index) {
    this.cartProducts.splice(index, 1); // delete the product from the cart
    localStorage.setItem('cart', JSON.stringify(this.cartProducts)); // set the cart to localStorage
  }// end deleteProduct fn

  addCart() {
    let productsId = this.cartProducts.map((product) => {
     return { productId: product.item.id, quantity: product.quantity }
    }); // get the products id from the cart
    let cartItems = {
      userId: 5, // get the user id from the server
      date: new Date(), // get the date
      products: productsId // add the products id to the cartItems

    } // create the cartItems object
    this.cartService.addToCart(cartItems).subscribe( 
      data => {
        this.success = true; // if the cart is added to the server, show the success message
        this.clearCart(); // clear the cart
      }, err => {
        console.log(err);
      }
    )
  }
}
