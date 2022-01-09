import { Component, OnInit } from '@angular/core';
import { Storage} from '@ionic/storage';
import { Features, Product } from 'src/models/product';
import { FirestoreDataService } from '../firestore-data.service';

@Component({
  selector: 'app-historic',
  templateUrl: './historic.page.html',
  styleUrls: ['./historic.page.scss'],
})
export class HistoricPage implements OnInit {

  browsing: Product[]=[];
  items: Product[];
  constructor(private storage: Storage, private fData: FirestoreDataService) 
  { 
    this.items = [];
    this.getBrowsingHistoric();
    
  }

  ngOnInit() {
  }

  getBrowsingHistoric(){
    this.storage.get("browsing").then((historic:Product[])=>{
        this.browsing = historic;
    }).catch(err=>{
      console.log("no browsing data found");
    });
   return this.browsing;
  }

  
}


