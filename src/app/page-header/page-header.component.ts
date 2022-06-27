import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Storage} from '@ionic/storage';
import { CartItem } from 'src/models/cartItem';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
})
export class PageHeaderComponent implements OnInit {

  location: string;
  cartLenght: number = 0;
  query='';
  logUid = 'Login';
  constructor(private router: Router, private navCtrl: NavController, private storage: Storage) { 
    this.location = this.router.url;
    this.getUid();
    this.getCartItems();
  }

  ngOnInit() {}

  routeTo(route:string){
    //console.log('mi casa'+route)
      this.navCtrl.navigateForward(route);
  }

  logOrNot(){
    if(this.logUid!=='Login'){
      this.navCtrl.navigateForward('/account');
    }else{
      this.navCtrl.navigateForward('/login');
    }
    
  }

  getUid(){
    this.storage.get("user").then((uid:string)=>{
      if(uid !== '' && uid!==null){
        this.logUid = 'Hi, dear !';
      }
    });
  }
  getCartItems(){
    this.storage.get("cart").then((data:CartItem[])=>{
      if(data.length!==0 && data!==null){
        this.cartLenght = data.length;
      }  
    }).catch(err=>{
      console.log("cart not found or empty");
      
    }); 
  }

  search(event){
    if(this.query!=='' && this.query!==null){
      if(event.key=='Enter' || event.type == 'click'){
        const navigationExtras: NavigationExtras = {
          state: {
            query: this.query
          }
        };
       
        this.router.navigate(['/searchquery'], navigationExtras);
      }
    }
   
  }

}
