import { Component, OnInit } from '@angular/core';
import { AngularFirestore, DocumentData } from '@angular/fire/firestore';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';
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
  orders: Observable<DocumentData[]>;
  user: User;
  userType: string='';
  constructor(private router: Router, private route: ActivatedRoute, private afirestore: AngularFirestore, 
    private fdservice: FirestoreDataService, private storage: Storage) { 
     this.fdservice.getFirestoreOrder().then((your_order)=> this.orders = your_order);
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
