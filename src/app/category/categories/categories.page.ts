import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { Product } from 'src/models/product';
import { FirestoreDataService} from 'src/app/firestore-data.service';
import { Storage } from '@ionic/storage'
import { decimalDigest } from '@angular/compiler/src/i18n/digest';
import { LocalStorageService } from 'src/app/local-storage.service';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  data: string='';
  option: string = '';
  query: string='';
  islike: boolean = false;
  result: number =0;
  product: Observable<Product[]>;
  constructor(private route: ActivatedRoute, private router: Router, private lstorage: LocalStorageService,
              private storage: Storage, private firestoreData: FirestoreDataService) {
               
                      }

 
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.item;
        this.option = this.router.getCurrentNavigation().extras.state.option;
        if(this.option == 'category'){
          this.product = this.firestoreData.filterByCategory(this.data);
        }else if(this.option == 'brand'){
          this.product = this.firestoreData.filterByBrand(this.data);
        }
      }
    });
     }
     

  goTo(item: any): void {
    const navigationExtras: NavigationExtras = {
      state: {
        product: item
      }
    };
    this.router.navigate(['/product'], navigationExtras);
  }

  
  isItemInWishList(description: string){
    let isInList: boolean = false
    this.lstorage.getLiked().forEach(item=>{
      if(item.description == description){
        isInList = true;
         document.getElementById("icoIn"+item.description).style.display="";
      }
    })
    return isInList;
  }

  putItemInWishList(item:Product){
    this.lstorage.addInWishList(item).then(()=>{
      document.getElementById("icoAdd"+item.description).style.display="none";
     this.isItemInWishList(item.description);
    }).catch((reason)=>{
      console.log('Exception : '+reason);
    });
  }

  
}
