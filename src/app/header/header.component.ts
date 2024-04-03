import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  cartItemCount: number;
  cart: any;

  constructor(public cartService: CartService){
    this.cartItemCount = 0;
  }

  ngOnInit() {
   this.setCart();
  }
  setCart(){
    this.cart = this.cartService.getCart();
  }
}
