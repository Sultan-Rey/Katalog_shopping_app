import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { Storage} from '@ionic/storage';
import { Features, Product} from '../../models/product';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { Observable} from 'rxjs';
import { FirestoreDataService } from '../firestore-data.service';
import { Displays } from 'src/models/display';
import { FirebaseDataService } from '../firebase-data.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  //Document collections
 
  items: Product[];

  //--------------------------
  feature: Features;
  brands = [];
  slides = [];
  categories =[];
  commonCategory = [];
  viewed = [];
  db = [];
  question: string;
  contact: string;
  isEmpty: boolean;
  ref:any;
  // main slider
  sliderOpts = {
    autoplay: true,
    initialSlide: 0,
    speed: 1000,
        zoom: {
          maxRatio: 5
        }
  };

  slidersOpts = {
    loop: true,
    slidesPerView: 2,
  };
  
 

  //highlight icon in the header
  slidersheading = {
    loop: true,
    slidesPerView: 5,
  };
  
  public labels = ['Electronics et accessoires', 'Sports et Loisirs', 'Fashion et Vetements', 'Productivite', 'Cosmetiques et Soins Capillaires', 'Recently Viewed'];
  constructor(private router: Router, private firestoreData: FirestoreDataService,
              private storage: Storage, private firebaseData: FirebaseDataService) {

                this.items = [];
                this.items = this.firestoreData.getFirestoreData();
                this.slides = this.firebaseData.getSlidesDatabase();
    //this.getSlidesDatabase();
  //this.getCategoriesDatabase();
    //this.getBrandsDatabase();
    //this.getPopularBrands
    /* if(this.getPopularBrands.length == 0){
      this.isEmpty = true
    } */

    
    this.db=[
      'assets/images/lbjsneaker.png',
      'assets/images/lvshoes.png',
      'assets/images/nike.png',
      
    ];
    
      this.ref = this.storage.get("reference");
    
  }




  isContainsProduct(category: any): boolean{
    let isvalid: boolean = false;
    for(let item of this.items){
      if(item.category == category){
        isvalid = true;
      }
    }
    return isvalid;
  }

  isnobrand():boolean{
    let nobrands: boolean;
    if(this.brands.length < 2){
      nobrands = true;
    }else{
      nobrands = false;
    }
    return nobrands;
  }

  submitquery(contact: string, question:string){

  }



/*
* Drop to link with data transfer
*/

  navigateTo(category: string){
    const navigationExtras: NavigationExtras = {
      state: {
        product: category
      }
    };
    this.router.navigate(['/categories'], navigationExtras);
  }
  LinkTo(category: string){
    const navigationExtras: NavigationExtras = {
      state: {
        refundstatus: category
      }
    };
    this.router.navigate(['/order'], navigationExtras);
  }

  goTo(item: any): void {
    const navigationExtras: NavigationExtras = {
      state: {
        product: item
      }
    };
    this.router.navigate(['/product'], navigationExtras);
  }

  

  

  

 
}



