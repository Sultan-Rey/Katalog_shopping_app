import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Product } from 'src/models/product';
import { Storage} from '@ionic/storage';
import { Order } from 'src/models/order';
import { isNullOrUndefined } from 'util';
import { CartItem } from 'src/models/cartItem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  cart: CartItem[] = [];
  saved: CartItem[]=[];
  noItem: boolean;
  nosaved: boolean;
  orderQty:number = 0;
  totalcost:number = 0.00;
  constructor(private router: Router, private route: ActivatedRoute, private storage: Storage) {
    this.getsavedforlater();this.getCartItems();}

  ngOnInit() {
   this.noItem = false;
   this.nosaved = false;
  }
 
  getCartItems(){
    this.totalcost = 0.00;
    this.storage.get("cart").then((data:CartItem[])=>{
      this.cart= data;
       
    }).catch(err=>{
      console.log("cart not found or empty");
      
    });
   
  }
  getsavedforlater(){
    this.storage.get("savedforlater").then((data:CartItem[])=>{
        this.saved=data;
        this.nosaved = false;
    }).catch(err=>{
      console.log("saved not found or empty");
      this.nosaved = true;
    });
   
  }


  adjustqty(pressed: string, item: CartItem)
  {
    if(pressed === 'minus'){
      if(item.item_qty !== 1){
       item.item_qty--;
      }else{

      } 
    }
    if(pressed === 'plus'){
      item.item_qty++;
    }
  }

  calculCost(){
    
    let totalamount: number=0;
    this.totalcost = 0.00;
    this.cart.forEach(element=>{
          totalamount += element.product.features[0].price * element.item_qty;
        });
        this.cart.forEach(element=>{
            this.orderQty+= element.item_qty;
        });
     return this.totalcost = totalamount;   
  }

  savedForLater(item: CartItem){
    let deleted: boolean = false;
   for(let cartItem of this.cart){
     if(cartItem === item){
       this.cart.splice(this.cart.indexOf(item),1);
       this.saved.push(cartItem);
       deleted = true
           }
   }
   if(deleted){
    this.storage.set("cart",this.cart);
     this.storage.set("savedforlater",this.saved);
     //this.getsavedforlater()
   }
  }

  remove(item:CartItem){
    let deleted:boolean=false;
    for(let cartItem of this.cart){
      if(cartItem === item){
        this.cart.splice(this.cart.indexOf(cartItem),1);
        deleted = true
            }
    }
    if(deleted){
      this.storage.set("cart",this.cart);
      //this.getCartItems();
    }
  }

  moveToCart(item:CartItem){
    let move:boolean=false;
          for(let saved of this.saved){
            if(saved === item){
              this.saved.splice(this.saved.indexOf(item),1);
              this.cart.push(saved);
              move=true;
            }
          }
          if(move){
            this.storage.set("savedforlater",this.saved);
            this.storage.set("cart",this.cart);
            //this.getCartItems();
          }
    
  }
  crypto(){
    let date =  Date.now();
    let id: string = "CA"+Math.floor(Math.random()*1000)+"-"+date;
    return id;
  }
  checkout(){
    if(this.totalcost>0.00){
      let cartProducts: Product[]=[];
      this.cart.forEach(item=>{
        item.product.qty = item.item_qty;
        cartProducts.push(item.product);
      });
      let prepareOrder: Order = {
        orderId: this.crypto(),
        product:cartProducts,
        date_order: new Date(Date.now()),
        order_qty: this.orderQty,
        amount: this.totalcost
      }
      const navigationExtras: NavigationExtras = {
        state: {
          order: prepareOrder
        }
      };
      this.router.navigate(['/place-order'], navigationExtras);
      
    }

  }

  goTo(item: any): void {
    const navigationExtras: NavigationExtras = {
      state: {
        product: item
      }
    };
    this.router.navigate(['/product'], navigationExtras);
  }

  // crypto(){
  //   let date =  Date.now();
  //   let productname = this..name.substring(0,2).toUpperCase();
  //   let id: string = productname+Math.random() +date;
  //   return id;
  // }

}
