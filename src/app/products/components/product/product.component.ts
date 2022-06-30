import { product } from './../../models/products';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input('product') product: product; 
  @Output('item') item = new EventEmitter();
  addBtn: boolean;
  amount: number = 0;

  constructor() { }

  ngOnInit(): void {
   
  }

  addToCart() {
    this.item.emit({ item:this.product , quantity:this.amount });
  }

}
