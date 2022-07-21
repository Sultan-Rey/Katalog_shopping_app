import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Storage} from '@ionic/storage';
import { Product} from '../../models/product';
import { Observable} from 'rxjs';
import { FirestoreDataService } from '../firestore-data.service';
import * as firebase from 'firebase';
import { HomeDesign } from 'src/models/homeDesign';
import { CartItem } from 'src/models/cartItem';
import { IonImg, NavController, Platform } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { Categories } from 'src/models/category';
import { Brands } from 'src/models/brands';
import { Slides } from 'src/models/slides';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  //Document collections
  @ViewChild('image', { static: false }) imageRef: IonImg;

  items: Product[];
  connected: boolean;
  product$: Observable<Product[]>;
  test$: Observable<Product[]>;
  categories$: Observable<Categories[]>
  brands$: Observable<Brands[]>
  slides$: Observable<Slides>;
  counter = [0,1,2,3];
  testImage = "../../assets/icon/icon.png";
  doc: any;
  homepane$: Observable<HomeDesign[]>;
  //--------------------------
  brands = [];
  slides = [];
  categories =[];
  navigation = [];
  images = [];
  browsing: Product[]=[];
  likeItem: Product[]=[];
  savedItem: CartItem[]=[];
  saveLater: CartItem[]=[];
  // main slider
  sliderOpts = {
    autoplay: true,
    initialSlide: 0,
    speed: 1000
  };

  slidersOpts = {
    autoplay:true,
    zoom: false, 
    speed:'4000',
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
      },
      // when window width is >= 820px
      620: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      // when window width is >= 9200px
      820: {
        slidesPerView: 4,
        spaceBetween: 100
      }
    }
  };
  
  numberOfMessage = 0;


  
  constructor(private router: Router, private firestoreData: FirestoreDataService, private db: AngularFirestore,
              private storage: Storage, private navCtrl: NavController) {
                this.connected = this.firestoreData.getConnexionState();
                this.navigation = ["Buy by categories", "Wish List", "Recent Views","Today Deals","Ready To Ship", "Our Brands"];
                
                this.product$ = this.firestoreData.getProducts();
                this.homepane$ = this.firestoreData.getHomeDesign();
                this.categories$ = this.firestoreData.getCategories();
                this.brands$ = this.firestoreData.getBrands();
                this.slides$ = this.firestoreData.getMainSlides();
               
               
  }


  reload(){
    globalThis.location.reload();
  }

  
  submitquery(contact: string, question:string){
    if(question!=='' && contact!==''){
      contact='';
      question = '';
    }
  }

  calculateDiscount(price: number, percentage: any, endTime: any){
   let  retail: number = price/100 * percentage;
   let discount: number = price - retail;
   this.comptor(endTime);
   return discount;
  }

  comptor(timing: any){
    // Set the date we're counting down to
//var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();
var countDownDate = new Date(timing).getTime();
// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  /* document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s "; */
  document.getElementById("HR").innerHTML = hours+"&nbsp;hr ";
  document.getElementById("MN").innerHTML = minutes + "&nbsp;&nbsp;m "
  document.getElementById("SEC").innerHTML= seconds + "&nbsp;&nbsp;s "

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

  }


  navigateTo(args: string, extra?:string|'navigation_directive'){
    if(args == 'Today Deals'){
      extra = args;
      args='p103'; //p103 is panelId string reference from collection homepane in firestore firebase
    }
    if(args == 'Ready To Ship'){
      extra = args;
      args='p105'; 
    }
    const navigationExtras: NavigationExtras = {
      state: {
        direction: extra
      }
    };
    this.router.navigateByUrl(`categories/${args}`,navigationExtras);
  }
 

  goTo(item: any): void {
    this.navCtrl.navigateForward(`product/${item.code}`);
  }

  

  
  prev(slides){
    slides.slidePrev();
  }
  next(slides){
    slides.slideNext();
  }
  

 
}



