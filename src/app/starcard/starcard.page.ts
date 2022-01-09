import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AlertController, LoadingController } from '@ionic/angular';
import { Reedeem, StarCard, Transactions } from 'src/models/starcard';
import { Observable} from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { isNullOrUndefined } from 'util';
import {Storage} from '@ionic/storage';
import { Paymethod } from 'src/models/paymethod';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-starcard',
  templateUrl: './starcard.page.html',
  styleUrls: ['./starcard.page.scss'],
})
export class StarcardPage implements OnInit {

  connected: boolean=false;
  cardCollection: AngularFirestoreCollection<StarCard>;
  obcard: Observable<StarCard[]>;
  card: StarCard[];
  paymentMethod: Paymethod[];
  devise = ['USD','HTG'];
  starReedemUSD = ['20','50','100','200','250','500'];
  starReedemHTG = ['250','500','750','1000','5000','10.000'];
  tagDefaultColor = Array(this.devise.length).fill("medium");
  slidersOpts = {
    loop: true,
    slidesPerView: 2,
  };
  starcard: StarCard;
  constructor(private afirestore: AngularFirestore, private alertcontroller:AlertController, private payment: PaymentService,
   private storage:Storage, private loadingcontroller: LoadingController, private fireAuth: AngularFireAuth) {
      this.starcard = {} as StarCard;
      this.starcard.transactions = [];
      this.starcard.reedem = [];
      this.paymentMethod = []; 
   }
   

  ngOnInit() {
    this.fireAuth.authState.subscribe(auth=>{
      if (!auth){
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
          this.payment.payWithPaypal(amount, btoa('Reedem'));
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
      this.starcard.id = card.payload.get("id");
      this.starcard.devise = card.payload.get("devise");
      this.starcard.amount = card.payload.get("amount");
      this.starcard.reedem = card.payload.get("reedem");
      this.starcard.transactions = card.payload.get("transactions");
      this.starcard.activation = card.payload.get("activation");
    });
    
  }

  async register(card: StarCard){
    let reedems: Reedeem = {} as Reedeem;
    let transactions: Transactions = {} as Transactions;
    this.cardCollection = this.afirestore.collection('starcard');
    if(card.devise!=="" && card.devise!==null){
      this.starcard.id = this.crypto();
      this.starcard.amount = 0.00;
      this.starcard.reedem.push(reedems)
      this.starcard.transactions.push(transactions);
      this.starcard.activation = true;
      this.cardCollection.doc((await this.fireAuth.currentUser).uid).set(this.starcard).then( async ()=>{
        const loading = await this.loadingcontroller.create({
          cssClass: 'my-custom-class',
          message: 'Please wait...',
          duration: 2000
        }).then((loaded)=>{
          loaded.present();
          loaded.onDidDismiss().then((dismiss)=>{
            console.log(dismiss);
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
