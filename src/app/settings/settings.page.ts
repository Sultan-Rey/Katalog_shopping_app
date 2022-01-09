import { Component, OnInit } from '@angular/core';
import { Animation, AnimationController } from '@ionic/angular';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { Observable} from 'rxjs';
import { NewproductModalComponent } from '../newproduct-modal/newproduct-modal.component';
import { Product} from '../../models/product';
import { LoadingController, PickerController, AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  activeVariation: string;
  productCollection: AngularFirestoreCollection<Product>;
  product: Observable<Product[]>;
  items: Product[];
  isSelected: string;
  constructor( private modalcontroller: ModalController,private animatioCntrl: AnimationController,public afs: AngularFirestore, public angularefireSG: AngularFireStorage) { }

  ngOnInit() {
     this.activeVariation = 'size';
     this.isSelected = 'product';
  }

/*   getFirestoreData(){
    this.items = new Array();
    this.productCollection = this.afs.collection('product');
    this.product = this.productCollection.valueChanges();
    this.product.subscribe(observer => {
      observer.forEach(e => {
      
        this.items.push({
          name: e.name,
          description: e.description,
          brand: e.brand,
          pictures: e.pictures,
          rating: e.rating,
          size: e.size,
          color: e.color,
          category: e.category,
          qty: e.qty,
          price: e.price,
          shipment: e.shipment,
          policy: e.policy,
          about: e.about,
          status: e.status,
          styleposition: e.styleposition
        });
  

      });
    });
  } */

  getProductDownloadURL(simpleUrl: any){
    try{
    this.angularefireSG.ref(simpleUrl).getDownloadURL().subscribe( url => {
        return url;
     });
    }catch(err){
      console.log('url not found check connection: '+err);
    }
   
  }
  
  segmentChanged(e: any) {
    this.activeVariation = e.detail.value;

    if (this.activeVariation == 'size') {
      this.isSelected = 'product';
    }
    
     else if(this.activeVariation == 'color'){
      
      this.isSelected = 'customers';
    
    }else{
      this.isSelected = 'interface'
    }
  }


  async openModal(){
    const modal = await this.modalcontroller.create({
      component: NewproductModalComponent,
      //componentProps: {method: payment}
    });
    modal.present();

    const {data: moncash, role} = await modal.onWillDismiss();
    if (role !== 'cancelled'){
      
    }else{
     // this.method = null;
    }
  }

}
