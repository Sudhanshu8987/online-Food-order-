import { Injectable } from '@angular/core';
import { cart } from '../Shared/Models/cart';
import { Foods } from '../Shared/Models/Food';
import { CartItem } from '../Shared/Models/cartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService { 
  

  private cart:cart = new cart();
  
  addToCart(food: Foods): void {
    let cartItem = this.cart.items.find(item => item.food.id === food.id);
    if (cartItem) {
        this.changeQuantity(food.id, cartItem.quantity + 1);
    } else {
        // cartItem is undefined or null, create a new cartItem
        this.cart.items.push(new CartItem(food));
    }
}


  removeFromCart(foodId:number): void{
    this.cart.items = this.cart.items.filter(item => item.food.id != foodId);
  }

  changeQuantity(foodId:number, quantity:number){
    let cartItem = this.cart.items.find(item => item.food.id === foodId);
    if(!cartItem) return;
    cartItem.quantity = quantity;
  }

  getCartItemCount(): number {
    let count = 0;
    this.cart.items.forEach(item => count += item.quantity);
    return count;
  }


  getCart():cart{
    return this.cart;
  }
}
