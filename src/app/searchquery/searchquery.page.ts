import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { CartItem } from 'src/models/cartItem';
import { Product } from 'src/models/product';
import { FirestoreDataService } from '../firestore-data.service';
import{Storage} from '@ionic/storage';

@Component({
  selector: 'app-searchquery',
  templateUrl: './searchquery.page.html',
  styleUrls: ['./searchquery.page.scss'],
})
export class SearchqueryPage implements OnInit {
  query:string = '';
  items:Product[]=[];
  constructor(private route: ActivatedRoute, private router: Router, private firestoreData: FirestoreDataService,
              private storage: Storage, private toastcontroller: ToastController) {
    
   }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.query = this.router.getCurrentNavigation().extras.state.query;
      }
    });
    this.search();
  }

  search(){
    if(this.query!==''){
      this.items = this.firestoreData.fireStoreSimulation().filter((product)=>product.name.toUpperCase().includes(this.query.toUpperCase()) || product.description.toUpperCase().includes(this.query.toUpperCase()));
    }else{
      
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

  addToCart(item_details: Product) {
    let isAdded: boolean = false;
    
    
    this.storage.get("cart").then((data: CartItem[]) => {
      if (data === null || data.length === 0) {
        data = [];
        data.push({
          product: item_details,
          item_qty: 1
        });
        this.presentToast(1);
      } else {
        for (let item of data) {
          if (item.product.ref === item_details.ref) {
            item.item_qty+=1;
            isAdded = true;
            this.presentToast(2);
          }
        }
        if (!isAdded) {
          data.push({
            product: item_details,
            item_qty: 1,
           
          });
          this.presentToast(1);
        }
      }
      this.storage.set("cart", data);
      
    }); 
   

  }

  async presentToast(control: number){
    if(control==1){
      const toast = await this.toastcontroller.create({
        header : "Add To Cart",
        message: "Item added to your cart",
        duration: 2000
      });
      await toast.present();
    }
    if(control ==2){
      const toast = await this.toastcontroller.create({
        header : "Add To Cart",
        cssClass: "my-custom-class",
        message: "Item already in the cart or not saved",
        duration: 2000
      });
      await toast.present();
    }
  }



}
