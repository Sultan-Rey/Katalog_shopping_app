import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { PaymentCredential, Paymethod } from 'src/models/paymethod';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

  expandable : boolean;
  expandable1: boolean;
  expandable2: boolean;
  paymentMethod : Paymethod[];
  paymethod: Paymethod;
  moncash: {
    owner:string,
    phone: string,
    secret: number
  };
  paypal:{email:string, password:string};

  constructor(private router: Router, private storage: Storage, private loadingcontroller: LoadingController)
   { this.paymethod = {} as Paymethod
     this.paymethod.credential = {} as PaymentCredential 
     this.moncash = {} as any;
     this.paypal = {} as any;
     this.getPaymethod();
    }

  ngOnInit() {
    this.expandable = false;
    this.expandable1 = false;
    this.expandable2 = false;
  }


  getPaymethod(){
    this.storage.get("paymethod").then((data:Paymethod[])=>{
        this.paymentMethod= data;
    }).catch(err=>{
      console.log("cart not found or empty");
    });
   
  }

  expandableClick(expandableNumber: number):void{
    if(expandableNumber ==1){
      this.paymethod = {} as Paymethod
    this.expandable1 = !this.expandable1;
    this.expandable2 = false;
    this.expandable = false;
    }else if(expandableNumber==2){
      this.paymethod = {} as Paymethod
      this.expandable2 = !this.expandable2;
      this.expandable1 = false;
      this.expandable = false;
    }else{
      this.paymethod = {} as Paymethod
      this.expandable = !this.expandable;
      this.expandable1 = false;
      this.expandable2 = false;
    }
    }

 paymentmethod(method: any, provider:string){
  this.paymethod.credential = {} as PaymentCredential 
    if(provider == 'MonCash'){
      this.paymethod.id = "My$"+Math.floor(Math.random() * 11);
      this.paymethod.method = "MonCash";
      this.paymethod.provider= "Digicel";
      this.paymethod.credential.phone = method.phone;
      this.paymethod.credential.code = method.secret;
      this.saveMethod(this.paymethod);
    }else
    if(provider== 'PayPal'){
      this.paymethod.id = "Pal"+Math.floor(Math.random() * 11);
      this.paymethod.method = "PayPal";
      this.paymethod.provider= "PayPal";
      this.paymethod.credential.email = method.email;
      this.saveMethod(this.paymethod);
    }
 }

 setDefault(method: Paymethod){
   let set:boolean=false;
  this.storage.get("paymethod").then((data: Paymethod[]) => {
      for (let item of data) {
        if (item.id === method.id) {
            item.default = true;
            set=true;
        }
    }
    if(set){ 
      for (let item of data) {
        if (item.id !== method.id) {
            item.default = false;
        }
    }
    this.setLoading(data);
    }
    
  }).catch(err=>{alert(err)});
 }

 saveMethod(method: Paymethod){
   let isAdded: boolean = false;
  this.storage.get("paymethod").then((data: Paymethod[]) => {
    if (data === null || data.length === 0) {
      data = [];
      data.push(method);
    } else {
      for (let item of data) {
        if (item.id === method.id) {
        
      item.method = method.id;
      item.provider= method.provider;
      item.credential.options = method.credential.options;
      item.credential.code = method.credential.code;
      item.credential.email = method.credential.email;
      item.credential.phone = method.credential.phone;
          isAdded = true;
        }
      }
      if (!isAdded) {
        data.push(method);
      }
    }
    this.setLoading(data);
  });
 }

 async setLoading(method: Paymethod[]){
   const loading = await this.loadingcontroller.create({
    cssClass: 'my-custom-class',
    message: 'Please wait...',
    duration: 2000
   }).then((control)=>{
     control.present();
     control.onWillDismiss().then((load)=>{
      this.paymentMethod = method;
       this.storage.set("paymethod", method);
        this.paymethod = {} as Paymethod;
        this.paymethod.credential = {} as PaymentCredential 
        this.expandable = false;
        this.expandable1 = false;
        this.expandable2 = false;
        
      });
   })
 }

}
