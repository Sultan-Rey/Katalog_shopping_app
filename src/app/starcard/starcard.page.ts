import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AlertController, LoadingController } from '@ionic/angular';
import { Reedeem, StarCard, Transactions } from 'src/models/starcard';
import { Observable} from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { isNullOrUndefined } from 'util';
import {Storage} from '@ionic/storage';
import { Paymethod } from 'src/models/paymethod';
import * as firebase from 'firebase';
import { FirestoreDataService } from '../firestore-data.service';

@Component({
  selector: 'app-starcard',
  templateUrl: './starcard.page.html',
  styleUrls: ['./starcard.page.scss'],
})
export class StarcardPage implements OnInit {

  connected: boolean;
  isRegistred: boolean;
  cardCollection: AngularFirestoreCollection<StarCard>;
  obcard: Observable<StarCard[]>;
  card: StarCard[];
  paymentMethod: Paymethod[];
  defaultMethod: Paymethod;
  devise = ['USD','HTG'];
  starReedemUSD = ['20','50','100','200','250','500'];
  starReedemHTG = ['250','500','750','1000','5000','10.000'];
  tagDefaultColor = Array(this.devise.length).fill("medium");
  slidersOpts = {
    loop: true,
    slidesPerView: 2,
  };
  starcard: StarCard;
  constructor(private afirestore: AngularFirestore, private alertcontroller:AlertController,
   private storage:Storage, private loadingcontroller: LoadingController, private fireAuth: AngularFireAuth, private fsdataService: FirestoreDataService) {
      this.starcard = {} as StarCard;
      this.starcard.transactions = [];
      this.starcard.reedem = [];
      this.paymentMethod = []; 
   }
   

  ngOnInit() {
    this.fireAuth.authState.subscribe(auth=>{
      if (!auth.emailVerified){
        this.connected = false;
      }else {
        this.connected = true;
        this.getCardAccount();
      }
    });
  }


  getPaymethod(){
    
    this.storage.get("paymethod").then((data:Paymethod[])=>{
        this.paymentMethod= data;
        if(this.paymentMethod.length!==0 && this.paymentMethod!==null){
          this.paymentMethod.forEach(method=>{
            if(method.default == true){
              this.defaultMethod = method;
            }
          })
        }
    }).catch(err=>{
      console.log("cart not found or empty");
    });
   
  }
  
  async refill(devise: string, amount: string){
    this.getPaymethod();
    if(devise == 'USD'){
        let paypal = this.paymentMethod.find((paymethod)=>paymethod.method=='PayPal' && paymethod.default==true);
        let mc = this.paymentMethod.find((paymethod)=>paymethod.method=='MasterCard'&& paymethod.default==true);
        if(!isNullOrUndefined(paypal)){
        
        }else if(!isNullOrUndefined(mc)){

        }else{
          const alert = await this.alertcontroller.create({
            cssClass: 'my-custom-class',
            header: 'Alert',
            subHeader: 'Subtitle',
            message: 'No default payment method available.',
            buttons: ['Ok']
          });
          await alert.present();
        }
    }
    if(devise == 'HTG'){

    }
  }

  crypto(){
    let _character=['*','C',')','#','&','!','?','%','@','^',':','D','?'];
    let sequence:number = Math.floor(Math.random()*100);
    let index:number= Math.floor(Math.random() * 12);
    let encryption:string = _character[index]+_character[index+1]+sequence+"-"+Date.now();
    return encryption;
  }
  async getCardAccount(){
    let userId = (await this.fireAuth.currentUser).uid
    this.card = new Array();
    this.cardCollection = this.afirestore.collection('starcard');
    this.cardCollection.doc(userId).snapshotChanges().subscribe(card=>{
      this.isRegistred=true;
      this.starcard.id = card.payload.get("id");
      this.starcard.devise = card.payload.get("devise");
      this.starcard.amount = card.payload.get("amount");
      this.starcard.reedem = card.payload.get("reedem");
      this.starcard.transactions = card.payload.get("transactions");
      this.starcard.activation = card.payload.get("activation");
    }).unsubscribe();
    
  }

  async register(card: StarCard){
    this.cardCollection = this.afirestore.collection('starcard');
    if(card.devise!=="" && card.devise!==null){
      this.starcard.id = this.crypto();
      this.starcard.amount = 0.00;
      this.starcard.reedem =[]
      this.starcard.transactions =[]
      this.starcard.activation = true;
      this.cardCollection.doc((await this.fireAuth.currentUser).uid).set(this.starcard).then( async ()=>{
        const loading = await this.loadingcontroller.create({
          cssClass: 'my-custom-class',
          message: 'Please wait...',
          duration: 2000
        }).then((loaded)=>{
          loaded.present();
          loaded.onDidDismiss().then((dismiss)=>{
            this.isRegistred=true;
            console.log(dismiss);
            let starmethod: Paymethod = {
              id: this.starcard.id,
              method: 'StarCard',
              provider: 'KATALOG',
              credential: {},
              default: false
            }
            this.saveMethod(starmethod);
            this.getCardAccount();})
        });
        
      }, (rejected)=>{
          console.log("reason"+rejected);
          this.starcard.activation = false;
      });
    }else{
      const alert = await this.alertcontroller.create({
        cssClass: 'my-custom-class',
        header: 'Alert',
        subHeader: 'Subtitle',
        message: 'please select a currency before.',
        buttons: ['Ok']
      });
      await alert.present();
    }
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
       });
      }
 
      selected(name:string){
        this.starcard.devise = name;
      }
  changeTagColor(i:number) {
    
    if (this.tagDefaultColor[i] === "medium") {
      this.tagDefaultColor[0] = "medium";
      this.tagDefaultColor[1] = "medium"
      this.tagDefaultColor[i] = "primary"
    } else {
     
      // event.target.setAttribute('color', 'secondary') this is redundant
    }
  }
  
}
