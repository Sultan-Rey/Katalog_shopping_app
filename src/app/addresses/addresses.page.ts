import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { Storage} from '@ionic/storage';
import { Address } from 'src/models/addresses';
import { AddAddressModalComponent } from '../add-address-modal/add-address-modal.component';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.page.html',
  styleUrls: ['./addresses.page.scss'],
})
export class AddressesPage implements OnInit {

  addresses: Address[];
 
  
  constructor(private alertController: AlertController, private storage: Storage,
     private loadingcontroller: LoadingController, private modalController: ModalController) 
  {this.getAdresses();
  
  }

  ngOnInit() {
    
  }
  getAdresses(){
    
    this.storage.get("address").then((data:Address[])=>{
        this.addresses= data;
        
    }).catch(err=>{
      console.log("addresses not found or empty");
    });
   
  }
  setDefault(address: string){
    let set:boolean=false;
   this.storage.get("address").then((data: Address[]) => {
    
   for (let item of data) {
         if (item.id === address) {
             item.default = true;
             set=true;
         }
     }

     if(set){ 
       for (let item of data) {
         if (item.id !== address) {
             item.default = false;
         }
     }
     this.setLoading(data); 
     }
     
   }).catch(err=>{alert(err)});
  }

  remove(raddress:Address){
    let deleted:boolean=false;
    for(let address of this.addresses){
      if(address === raddress){
        this.addresses.splice(this.addresses.indexOf(raddress),1);
        deleted = true
            }
    }
    if(deleted){
      this.storage.set("address",this.addresses);
    }
  }

  async openModal(){
    const modal = await this.modalController.create({
      component: AddAddressModalComponent
    });
    modal.present();
    const {data: moncash, role} = await modal.onWillDismiss();
    if (role !== 'cancelled'){
      this.getAdresses();
    }else{
      this.getAdresses();
    }
  }

  async setAsDefault(addressid: string){
    let setagreed: boolean = false;
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'Set address as default.',
      buttons: [
        {text:'OK',cssClass: '',handler:(ok)=>{ this.setDefault(addressid)}},
        {text:'Cancel', cssClass:'my-custom-class'}
      ]
    });
    await alert.present();
   
  }
 
  async setLoading(newaddress: Address[]){
    const loading = await this.loadingcontroller.create({
     cssClass: 'my-custom-class',
     message: 'Please wait...',
     duration: 2000
    }).then((control)=>{
      control.present();
      control.onWillDismiss().then((load)=>{
        this.addresses= newaddress;
        this.storage.set("address",newaddress);
       });
    })
  }
  
}
