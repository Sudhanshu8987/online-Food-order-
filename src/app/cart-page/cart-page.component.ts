import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { cart } from '../Shared/Models/cart';
import { CartItem } from '../Shared/Models/cartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent implements OnInit {
  cart!:cart;
  
  constructor(public cartService: CartService) { 
    this.setCart();
  }
  ngOnInit(): void {
  }

  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();
  }

  changeQuantity(cartItem:CartItem, quantityInString:string){
    const quantity= parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
    return quantity;
    
  }

  setCart(){
    this.cart = this.cartService.getCart();
  }

}