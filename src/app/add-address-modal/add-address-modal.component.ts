import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { Address } from 'src/models/addresses';
import { Storage} from '@ionic/storage';

@Component({
  selector: 'app-add-address-modal',
  templateUrl: './add-address-modal.component.html',
  styleUrls: ['./add-address-modal.component.scss'],
})
export class AddAddressModalComponent implements OnInit {

  addresses: Address[];
  addressmodel: Address;
  constructor(private modalcontroller: ModalController, private storage: Storage, 
            private loadingcontroller: LoadingController) { 
              this.addressmodel = {} as Address;
            }

  ngOnInit() {}

  modalDismiss() {
    this.modalcontroller.dismiss(null, 'cancelled');
  }
  saveAddress(address: Address){

    if(this.validAddress(address)){
      
      let idAddress: string = Math.random()*100+"-"+Math.random()*1000;
      this.storage.get("address").then((data:Address[])=>{
        if(data === null || data.length === 0){
          data=[];
          data.push({
            id: idAddress,
            name: address.name,
            address1: address.address1,
            address2: address.address2,
            city: address.city,
            phone: address.phone,
            state: address.state,
            zipcode: address.zipcode,
            default: false
          });
        }else{
            data.push({
            id: idAddress,
            name: address.name,
            address1: address.address1,
            address2: address.address2,
            city: address.city,
            phone: address.phone,
            state: address.state,
            zipcode: address.zipcode,
            default: false
            });
          
        }
       this.setLoading(data);
       
      });
    }
  }

  validAddress(address: Address){
     let isvalid: boolean = false;
     if(address.address1!=="" && address.address1!==null && address.city!==""
     && address.city!==null && address.state!=="" && address.state!==null &&
     address.zipcode!==0 && address.name!=="" && address.name!==null){
       isvalid = true
     }else{
       isvalid = false;
     }
     return isvalid;
  }
  async setLoading(address: Address[]){
    const loading = await this.loadingcontroller.create({
      cssClass: 'my-custom-class',
      message: 'Saving Address...',
      duration: 2000
    });
    await loading.present();
    this.storage.set("address",address);
    this.modalDismiss();
  }

}
