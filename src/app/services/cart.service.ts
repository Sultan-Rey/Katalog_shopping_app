import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem, Product } from 'src/models/cartItem';
import { Storage} from '@ionic/storage';



@Injectable({
  providedIn: 'root'
})
export class CartService {
  data: Product[] = [
    { id: 0, name: 'Pizza Salami', price: 8.99, amount: 0 },
    { id: 1, name: 'Pizza Classic', price: 5.49, amount: 0 },
    { id: 2, name: 'Sliced Bread', price: 4.99, amount: 0 },
    { id: 3, name: 'Salad', price: 6.99, amount: 0 }
  ];
 
  private cart: CartItem[];
  private cartItemCount = new BehaviorSubject(0);
 
  constructor(private storage: Storage) {
   
  }
 
  getProducts() {
    return this.data;
  }
 
  getCart() {
    this.storage.get("cart").then((data:CartItem[])=>{
      this.cart = data;
    }).catch(err=>{
      console.log("cart not found or empty");  
    });
    return this.cart
  }
 
  getCartItemCount() {
    return this.cartItemCount;
  }
 
  
  
  addTocart(item_details: CartItem){
    let isAdded: boolean = false;
    
   return this.storage.get("cart").then((data: CartItem[]) => {
      if (data === null || data.length === 0) {
        data = [];
        data.push(item_details)
      } else {
        for (let item of data) {
          if (item.description === item_details.description) {
            item.qty+=1;
            isAdded = true; 
          }
        }
        if (!isAdded) {
          data.push(item_details)
        }
      }
      this.storage.set("cart", data).then(()=>{
        this.cartItemCount.next(this.cartItemCount.value + 1);
      });
      
    }); 
  }
  
  addProduct(product) {
    let added = false;
    for (let p of this.cart) {
      if (p.description === product.id) {
        p.qty += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      product.amount = 1;
      this.cart.push(product);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }
 
  decreaseProduct(product) {
   
    for (let [index, p] of this.cart.entries()) {
      if (p.description === product.description) {
        console.log(p.qty);
        p.qty -= 1;
        if (p.qty == 0) {
          this.cart.splice(index, 1);
        }
      }
    }
    this.cartItemCount.next(this.cartItemCount.value - 1);
  }
 
  removeProduct(product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.description === product.description) {
        this.cartItemCount.next(this.cartItemCount.value - p.qty);
        this.cart.splice(index, 1);
      }
    }
  }
}
