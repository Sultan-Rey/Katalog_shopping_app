import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Order } from 'src/models/order';
import { User } from 'src/models/user';
import { isNullOrUndefined } from 'util';
import { FirestoreDataService } from '../firestore-data.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {
  data: string;
  orders: Order[];
  user: User;
  userType: string='';
  constructor(private router: Router, private route: ActivatedRoute, private afirestore: AngularFirestore, 
    private fdservice: FirestoreDataService, private storage: Storage) { 
      this.orders = [];
      this.checkTypeUser();
     
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.refundstatus;
             }
    });

  }

  getDate(date:any){
    let dating: Date= new Date(date.seconds*1000 + date.nanoseconds);
      return dating.toDateString() ;
    }

    checkTypeUser(){
      this.storage.get("user").then((logUser: User) => {
        
        if(!isNullOrUndefined(logUser)){
          if (logUser.type == "ADMIN") {
            this.user = this.fdservice.getUsers().find((user) => { user.type == "ADMIN"; });
            if (!isNullOrUndefined(this.user)) {
              if (this.user.password == logUser.password && this.user.email == logUser.email) {
                this.orders = this.fdservice.getOrderAsadmin();
                this.userType = "ADMIN";
              }
            }
          } else if (logUser.type == "ASSISTANT") {
            this.user = this.fdservice.getUsers().find((user) => { user.type == "ASSISTANT"; });
            if (!isNullOrUndefined(this.user)) {
              if (this.user.password == logUser.password && this.user.email == logUser.email) {
                this.orders = this.fdservice.getOrderAsadmin();
                this.userType = "ASSISTANT";
              }
            }
          } else {
            
            this.fdservice.getFirestoreOrder().then((order) => { this.orders = order})
            this.userType = "USER";
          }    
        }
        


      });


    }

   /*  reorder(order:Order){
      const navigationExtras:NavigationExtras = {
        state:{ data: order}
      }
      this.router.navigate(['/'], navigationExtras);
    } */
    details(order:Order){
      const navigationExtras:NavigationExtras = {
        state:{ order: order, type: this.userType}
      }
      this.router.navigate(['/order-details'], navigationExtras);
    }
  
}
