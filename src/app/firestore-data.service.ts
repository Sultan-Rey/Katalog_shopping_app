import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { Product} from '../models/product';
import { AngularFirestore, AngularFirestoreCollection, DocumentData} from '@angular/fire/firestore';
import { Observable} from 'rxjs';
import { Order } from 'src/models/order';
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'src/models/user';
import { Message } from 'src/models/message';

@Injectable({
  providedIn: 'root'
})
export class FirestoreDataService {

  productCollection: AngularFirestoreCollection<Product>;
  ordersCollection: AngularFirestoreCollection<Order>;
  usersCollection: AngularFirestoreCollection<User>;
  msgCollection: AngularFirestoreCollection<Message>;
  message: Observable<Message[]>;
  product: Observable<Product[]>;
  user: Observable<User[]>;
  orderData: Observable<DocumentData[]>;
  msg: Message[];
  items: Product[];
  app_user: User[];
  items_ordered: Order[];
  userType: string='';

  constructor(private angularefireSG: AngularFireStorage, private afs: AngularFirestore, private afAuth: AngularFireAuth) { }

   getFirestoreData(){
    this.items = new Array();
    this.productCollection = this.afs.collection('product');
    this.product = this.productCollection.valueChanges();

    /*
    * Product subscription for uploading
    */

   this.product.subscribe(observer => {
      observer.forEach(e => {
        this.angularefireSG.ref(e.features[0].pictures[0]).getDownloadURL().subscribe(url => {

          this.items.push({
            name: e.name,
            description: e.description,
            brand: e.brand,
            features: e.features,
            rating: e.rating,
            category: e.category,
            qty: e.qty,
            shipment: e.shipment,
            policy: e.policy,
            shippingFee: e.shippingFee,
            deliveryFee: e.deliveryFee,
            taxFee:e.taxFee,
            about: e.about,
            ref: url,
            status: e.status,
            availability: e.availability,
            display: e.display
          });

        });


      });

    }); 

    return this.items;
   
  
  
  }

  getOrderAsadmin(){
    this.items_ordered = new Array();
    this.ordersCollection = this.afs.collection('orders');
    this.orderData = this.ordersCollection.doc().collection("customer_order").valueChanges();
    this.orderData.subscribe(observer=>{
      
      observer.forEach(e => {
       
        this.items_ordered.push({
              orderId: e.orderId,
              product: e.product,
              date_order: e.date_order,
              order_qty: e.order_qty,
              amount: e.amount,
              payment: e.payment,
              shipment: e.shipment
        });

    });
    });
    return this.items_ordered;
  }
  async getFirestoreOrder(){
    let userId= (await this.afAuth.currentUser).uid;
    this.items_ordered = new Array();
    this.ordersCollection = this.afs.collection('orders');
    this.orderData = this.ordersCollection.doc(userId).collection("customer_order").valueChanges();
    this.orderData.subscribe(observer => {
    
      observer.forEach(e => {
       
          this.items_ordered.push({
              orderId: e.orderId,
              product: e.product,
              date_order: e.date_order,
              order_qty: e.order_qty,
              amount: e.amount,
              payment: e.payment,
              shipment: e.shipment
          });

      });

    });  return this.items_ordered;
   
  }

  getUsers(){
    this.app_user = new Array();
    this.usersCollection = this.afs.collection('user');
    this.user = this.usersCollection.valueChanges();
    this.user.subscribe(observer => {
      observer.forEach(e => {
        
          this.app_user.push({
            type: e.type,
            name: e.name,
            civilite: e.civilite,
            birthday: e.birthday,
            address: e.address,
            email: e.email,
            password: e.password,
            phone: e.phone,
            method: e.method,
            connection: e.connection,
            status: e.status
          });

      });

    });
    return this.app_user;
  }

getMessage(){
  this.msg = new Array();
  this.msgCollection = this.afs.collection('message');
  this.message = this.msgCollection.valueChanges();
  this.message.subscribe(observer => {
    observer.forEach(e => {
        this.msg.push({
          author: e.author,
          destination: e.destination,
          object: e.object,
          content: e.content,
          date_msg: e.date_msg
      });

    });

  }); 
  return this.msg;
}




}
