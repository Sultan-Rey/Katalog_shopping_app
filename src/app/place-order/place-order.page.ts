import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, PickerController } from '@ionic/angular';
import { PickerOptions } from '@ionic/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Product } from 'src/models/product';
import { Order, Shipment } from 'src/models/order';
import { Address } from 'src/models/addresses';
import { Storage} from '@ionic/storage';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { PaymentCredential, Paymethod } from 'src/models/paymethod';
import { isNullOrUndefined } from 'util';
import { isUndefined } from 'typescript-collections/dist/lib/util';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { OrderPage } from '../order/order.page';
import { User } from 'src/models/user';
import { async } from '@angular/core/testing';
import { PaymentService } from '../payment.service';



@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.page.html',
  styleUrls: ['./place-order.page.scss'],
})
export class PlaceOrderPage implements OnInit {

    cost:string= btoa("600");
   id: string=btoa("12345");
  
  data: Order;
  products: Product[];
  addresses: Address[];
  shippingAddress: string='';
  defaultaddress: Address;
  selectAddress: string='';
  productqty = 0;
  amountOrder: number = 0
  paymentMethod: string;
  orderCost: string;
  deliverydate: Date;
  tracknum: string;
  method: string;
  shippingfee = 0.00;
  taxfee = 0.00;
  deliveryfee = 0.00;
  promotion = 0.00;
  totalfee = 0.00;
  constructor(private http: HttpClient, private pickerCtrl: PickerController, private route: ActivatedRoute,
     private loadingcontroller: LoadingController,private storage: Storage, private alertcontroller: AlertController,
      private router: Router, private afirestore: AngularFirestore, private fireAuth: AngularFireAuth,
      private payservice: PaymentService) {
    this.products=[];
    this.defaultaddress = {} as Address;
    this.getAdresses();
    this.getMethod();
       }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.order;
      }
    });
    
      this.products = this.data.product;
      this.productqty = this.data.order_qty;
      this.amountOrder=this.data.amount; 
     this.data.product.map(product=>{this.shippingfee=product.shippingFee;});
     this.data.product.map(product=>{this.deliveryfee=product.deliveryFee;});
     this.data.product.map(product=>{this.taxfee=product.taxFee;});
      this.totalfee = this.amountOrder+this.shippingfee+this.deliveryfee+this.taxfee;
   
    }
 
  shipaddressChange(){
    this.shippingAddress = this.selectAddress;
  }
  getAdresses(){
    
    this.storage.get("address").then((data:Address[])=>{
        this.addresses= data;
        for(let address of data){
          if(address.default){
            this.defaultaddress = address;
          }
        }
        if(!isNullOrUndefined(this.defaultaddress.address1) && isUndefined(this.defaultaddress.address2)){
          this.shippingAddress = this.defaultaddress.address1;
        }else if(!isNullOrUndefined(this.defaultaddress.address2) && isUndefined(this.defaultaddress.address1)){
          this.shippingAddress = this.defaultaddress.address2;
        }else if(!isNullOrUndefined(this.defaultaddress.address1) && !isNullOrUndefined(this.defaultaddress.address2)){
          this.shippingAddress = this.defaultaddress.address1;
        }else{this.shippingAddress="No default address set yet";}
    }).catch(err=>{
      console.log("addresses not found or empty");
    });
   
  }

  getMethod(){
    this.storage.get("paymethod").then((data:Paymethod[])=>{
        for(let method of data){
          if(method.default){
            this.method = method.method;
          }
        }
    }).catch(err=>{
      console.log("addresses not found or empty");
    });
   
  }

  async showMethod() {
    const opts: PickerOptions = {
      buttons: [
        {
          text: 'Done',
          role: 'Done'
        }
      ],
      columns: [
        {
          name: 'method',
          options: [
            { text: 'MonCash$', value: 'moncash' },
            { text: 'Star Card Balance', value: 'sc' },
            { text: 'PayPal', value: 'pp' },
            { text: 'Cashapp', value: 'cashapp' }
          ]

        }
      ]
    };
    const picker = await this.pickerCtrl.create(opts);
    picker.present();
    picker.onDidDismiss().then(async data => {
      const col = await picker.getColumn('method');
      this.method = col.options[col.selectedIndex].text;
    });
    return this.method;
  }
  
  
  onSubmit(postData:any){
    const SERVER_URL = "https://sandbox.moncashbutton.digicelgroup.com/Moncash-middleware/Checkout/{UVdZeU0yMVlYMVpOUlhjOSBlbDlLUzBsU1kxbFpNVXQ0VUdSNU1UbFlRbXR0VVQwOQ==}";
    const formData = new FormData();
    formData.append("amount",btoa("600"));
    formData.append("orderId", btoa("123456"));
    console.log(formData);
    this.http.post<any>(SERVER_URL, formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );

  }

   place_order(items_cost: number){
    let order: Order[]=[];
    let items_ordered: Order;
    items_ordered.shipment = {} as Shipment;
    items_ordered.payment = {} as Paymethod;
    items_ordered.payment.credential = {} as PaymentCredential;
    items_ordered = this.data;
    items_ordered.shipment.shipping_destination = this.shippingAddress;
    items_ordered.shipment.status="Not shipped yet";
    items_ordered.amount = items_cost;
    items_ordered.payment.method = this.method;
    
    this.storage.get('user').then(async (userLogged:User)=>{
      if(!isNullOrUndefined(userLogged)){

        if(!userLogged.connection){

        }else{

          if(items_ordered.payment.method == 'PayPal'){
              this.payservice.payWithPaypal(items_ordered.amount.toLocaleString(),"Item order: "+items_ordered.orderId)
          }

          await this.loadingcontroller.create({
            cssClass: 'my-custom-class',
            message: 'processing your order...'
          }).then(async (loaded)=>{
            loaded.present();
            this.afirestore.collection("orders").doc((await this.fireAuth.currentUser).uid)
                            .collection("customer_order").doc(items_ordered.orderId)
                            .set(items_ordered).then(()=>{
                                loaded.dismiss();
                                this.sendToConfirm(items_ordered);
                            }).catch((reason)=>{ loaded.dismiss(reason, "failed");});
            loaded.onDidDismiss().then((obj)=>{
              if(obj.role == "failed"){
                this.msgOrderFailed();
              }
            });
          });
         
        } //if user is authentified


      }
     

    });
  }  
   
 async msgOrderFailed(){
    const alert = await this.alertcontroller.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Network Faillure',
      message: 'Current order process failed.',
      buttons: ['Ok']
    });
    await alert.present();
  }
   
  sendToConfirm(orderToconfirm: Order){
    const navigationExtras: NavigationExtras = {
      state: {
        order: orderToconfirm
        
      }
    };
    this.router.navigate(['/confirm'], navigationExtras);
  }

}
