import { Component, OnInit } from '@angular/core';
import {  AngularFirestoreCollection} from '@angular/fire/firestore';
import { Observable} from 'rxjs';
import { NewproductModalComponent } from '../newproduct-modal/newproduct-modal.component';
import { Product} from '../../models/product';
import {  AlertController, ModalController } from '@ionic/angular';
import { FirestoreDataService } from '../firestore-data.service';
import { User } from 'src/models/user';
import { Slides } from 'src/models/slides';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  activeVariation: string;
  productCollection: AngularFirestoreCollection<Product>;
  product: Observable<Product[]>;
  users: Observable<User[]>;
  slides$: Observable<Slides>;
  isSelected: string;
  constructor( private modalcontroller: ModalController,private alertcontroller: AlertController, 
                private fireData: FirestoreDataService) { 
   //this.items = this.fireData.getFirestoreData();
   this.product = this.fireData.getProducts();
   this.users = this.fireData.getUsers();
   this.slides$ = this.fireData.getMainSlides();
  }


  ngOnInit() {
     this.activeVariation = 'size';
     this.isSelected = 'product';
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
  }

  

  async remove(item:any){
    const alert = await this.alertcontroller.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'Do you really want to remove this item',
      buttons: [
        {text:'OK',cssClass: '',handler:(ok)=>{ this.fireData.removeProduct(item) }},
        {text:'Cancel', cssClass:'my-custom-class'}
      ]
    });
    await alert.present();
  }

  hide(item:any){

  }
 async edit(item:any){
    const modal = await this.modalcontroller.create({
      component: NewproductModalComponent,
      componentProps: {product: item}
    });
    modal.present();
  }

  deleteSlide(slide:any){
  
  }


}
