import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { Product } from 'src/models/product';
import { FirestoreDataService} from 'src/app/firestore-data.service';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  hotdeals =[];
  data: string;
  product: Product[]=[];
  constructor(private route: ActivatedRoute, private router: Router, private angularefireSG: AngularFireStorage,
              private afs: AngularFirestore, private firestoreData: FirestoreDataService) {
                this.hotdeals = [
                  'assets/images/hotdeals/img1.jpg',
                  'assets/images/hotdeals/img3.jpeg',
                  'assets/images/hotdeals/img4.jpg',
                  'assets/images/hotdeals/img5.jpg',
                  'assets/images/hotdeals/img6.jpeg',
                  'assets/images/hotdeals/img5.jpg',
                  'assets/images/hotdeals/img6.jpeg'
                ];

               }

 
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.product;
      }
    });
  
    console.log(this.data);
    console.log(this.firestoreData.getFirestoreData());
    for(let data of this.firestoreData.getFirestoreData()){
      if(data.category == this.data){
        this.product.push(data);
      }
    }
  }

  
}
