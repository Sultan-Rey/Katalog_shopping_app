import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { observable, Observable } from 'rxjs';
import { Product } from 'src/models/product';
import { FirestoreDataService } from 'src/app/firestore-data.service';
import { Storage } from '@ionic/storage'
import { decimalDigest } from '@angular/compiler/src/i18n/digest';
import { LocalStorageService } from 'src/app/local-storage.service';
import { isNullOrUndefined } from 'util';
import { NavController } from '@ionic/angular';
import { map } from 'rxjs/operators';
import { Categories } from 'src/models/category';
import { Brands } from 'src/models/brands';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  data: string = '';
  option: string = '';
  query: string = '';
  islike: boolean = false;
  result: number = 0;
  product$: Observable<Product[]>;
  categories$: Observable<Categories[]>;
  brands$: Observable<Brands[]>;
  likeItems: Product[];
  items: Product[];
  constructor(private route: ActivatedRoute, private router: Router, private lstorage: LocalStorageService,
    private storage: Storage, private firestoreData: FirestoreDataService, private navCtrl: NavController) {
    this.likeItems = [];
    this.likeItems = this.lstorage.getLiked();
    
  }


  ngOnInit() {
    const query:string = this.route.snapshot.params['query_args'];
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.option = this.router.getCurrentNavigation().extras.state.direction;
        if(this.option !== 'navigation_directive'){
         
          this.data = this.option;
          this.product$ = this.firestoreData.getProducts().pipe(
            map(products=>products
              .filter(product => 
                                product.name.toUpperCase().includes(query.toUpperCase()) 
                                || product.description.toUpperCase().includes(query.toUpperCase())
                                || product.category == query
                                || product.brand ==query
                                || product.display.position == query
                                )
        )
        )

        }else{
          
         
            this.data = query;
            switch(this.data){
              case 'Buy by categories': this.categories$ = this.firestoreData.getCategories();
              break;
              case 'Recent Views':
                this.getStorageData('browsing');
              break;
              case 'Wish List': 
                this.getStorageData('liked');
              break;
              case 'Our Brands':  this.brands$ = this.firestoreData.getBrands();
              break;
            }
          
        }
      }
    }); 

  }


  getStorageData(db_name: string){
    this.storage.get(db_name).then((db_data:Product[])=>{
      if(db_data.length!==0 && db_data!==null){
        this.items = db_data;
      }
    }).catch(err=>{
      console.log("no recent data found");
    });
    return this.items;
  }

  goTo(item: any) {
    this.navCtrl.navigateForward(`product/${item.code}`);
  }


  isItemInWishList(description: string) {
    let isInList: boolean = false;
    this.storage.get("liked").then((db_data:Product[])=>{
      if(db_data.length!==0 && db_data!==null){
        db_data.forEach(item=>{
          if(item.description == description){
            isInList = true;
          }
        })
      }
    }).catch(err=>{
      console.log("Item not in like items list");
    });

    return isInList;
  }

  putItemInWishList(item: Product) {
    console.log('it works');
    this.lstorage.addInWishList(item).then(() => {
      document.getElementById(item.description).style.display = "none";
      this.isItemInWishList(item.description);
    }).catch((reason) => {
      console.log('Exception : ' + reason);
    });
  }


}
