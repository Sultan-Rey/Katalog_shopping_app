import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireDatabase } from '@angular/fire/database';
import { Storage } from '@ionic/storage';
import { Features, Product } from '../../../models/product';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Displays } from 'src/models/display';
import { isNullOrUndefined } from 'util';
import { FirestoreDataService } from '../../firestore-data.service';
import { IonImg } from '@ionic/angular';
import { Order, Shipment } from 'src/models/order';
import { CartItem } from 'src/models/cartItem';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})

export class ProductPage implements OnInit {

  @ViewChild('image', { static: false }) imageRef: IonImg;

  slidersOpts = {
    slidesPerView: 3
  };
  data: Product;
  product: Product[];
  url = [];
  colores = [];
  sizes = [];
  pictures: string[];
  db = [];
  recommended = [];
  price: number = 0;
  sizing: string = "";
  color: string = "";
  orderQty: number = 1;
  image: string = "";
  name: string = "";
  description: string = "";
  brand: string = "";
  rating: number = 0;
  features: Features[] = [];
  category: string = "";
  qty: number = 0;
  shipment: string = "";
  policy: boolean;
  shippingFee: number = 0.00;
  deliveryFee: number = 0.00;
  taxFee: number = 0.00;
  about: Text = null;
  status: boolean = false;
  ref?: string = "";
  availability: string = "";
  display: Displays;
  connected: boolean;
  haspicture: boolean = false;
  hascolor: boolean = false;
  hassize: boolean = false;
  paused = false
  viewImage = false;


  constructor(private route: ActivatedRoute, private router: Router, private afSG: AngularFireStorage,
    private afAuth: AngularFireAuth, private firestoreData: FirestoreDataService, private storage: Storage) {
    this.display = {} as Displays;
    this.data = {} as Product;
    this.features = [];
    this.pictures = [];
    this.afAuth.authState.subscribe(auth => {
      if (!auth) {
        this.connected = false;
      } else {
        this.connected = true;
      }
    });

    //this.getPicturesURL(this.color);

    this.db = [
      'assets/images/lbjsneaker.png',
      'assets/images/lvshoes.png',
      'assets/images/nike.png',

    ];

    /*   this.product = this.firestoreData.getFirestoreData(); */
    this.getPriceByFeature(this.color, this.sizing);

  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.product;
      }
    });
    this.getProductDetails();

  }

  getProductDetails() {
    // console.log(this.data);
    this.name = this.data.name;
    this.description = this.data.description;
    this.brand = this.data.brand;
    this.rating = this.data.rating;
    this.features = this.data.features;
    this.category = this.data.category;
    this.qty = this.data.qty;
    this.shipment = this.data.shipment;
    this.policy = this.data.policy;
    this.shippingFee = this.data.shippingFee;
    this.deliveryFee = this.data.deliveryFee;
    this.about = this.data.about;
    this.status = this.data.status;
    this.ref = this.data.ref;
    this.availability = this.data.availability;
    this.display = this.data.display;
    this.browsingHistoric(this.data);
    if (!isNullOrUndefined(this.features)) {
      this.data.features.map(hexa => {
        if (hexa.color !== "") {
          this.colores.push({
            strColor: hexa.color
          });
        }

      });
      this.data.features.map(size => {
        if (size.size !== "") {
          this.sizes.push({
            itemsize: size.size
          });
        }

      });

      if (this.colores.length > 1) {
        this.hascolor = true;
        this.color = this.colores[0].strColor;
        this.getPicturesURL(this.colores[0].strColor);
      } else {
        this.getPicturesURL("");
      }
      if (this.sizes.length > 1) {
        this.hassize = true;
        this.sizing = this.sizes[0].itemsize;
      }
      if (this.sizes.length > 1 && this.colores.length > 1) {
        this.getPriceByFeature(this.colores[0].strColor, this.sizes[0].itemsize);
      } else
        if (this.colores.length < 1 && this.sizes.length > 1) {
          this.getPriceByFeature("", this.sizes[0].itemsize);
        } else {
          this.getPriceByFeature(this.colores[0].strColor, "");
        }
    } //if !isNullOrUndefined

  }
  setsize(size: string) {
    this.sizing = size;
    this.getPriceByFeature(this.color, size);
  }
  setcolor(color: string) {
    this.color = color;
    this.getPicturesURL(color);
  }
  getPicturesURL(color: string) {
    let fireUrl: string[] = [];
    if (color !== "" && color !== null) {
      for (let feat of this.features) {
        if (feat.color == color) {
          fireUrl = feat.pictures;
        }
      }
    } else {
      for (let feat of this.features) {
        if (color !== feat.color) {
          fireUrl = feat.pictures;
        }
      }

    }
    /* if(fireUrl.length > 0){
      this.haspicture = true;
      this.pictures.length = 0;
      fireUrl.forEach(pic=>{
        this.afSG.ref(pic).getDownloadURL().subscribe(url=>{
            this.pictures.push(url);
        });
      });
    } */
    fireUrl.forEach(pic => {
      this.haspicture = true;
      this.pictures.push(pic);
    });
    console.log(this.pictures);
  }
  getPriceByFeature(color: string, size: string) {

    if (color !== null && color !== "" && size !== null && size !== "") {
      for (let feature of this.features) {
        if (feature.color === color && feature.size === size) {
          this.price = feature.price;
        }
      }
    } else
      if (color === "" && size !== "") {
        for (let feature of this.features) {
          if (feature.size === size) {
            this.price = feature.price;
          }
        }
      } else
        if (color !== "" && size === "") {
          for (let feature of this.features) {
            if (feature.color === color) {
              this.price = feature.price;
            }
          }
        }
        else {
          for (let feature of this.features) {
            if (feature.color === color && feature.size == size) {
              this.price = feature.price;
            }
          }

        }
    //console.log(this.price); 

  }

  loadImage() {
    this.viewImage = true;
    
  }
  willLoadImage(image:string) {
    this.viewImage = false;
    this.image = image;
  }
  errorLoad() {
    this.imageRef.src = '<your_default_img>';
  }

  adjustqty(pressed: string) {
    if (pressed === 'minus') {
      if (this.orderQty !== 1) {
        this.orderQty--;
      } else {

      }
    }
    if (pressed === 'plus') {
      this.orderQty++;
    }
  }

  crypto() {
    let date = Date.now();
    let productname = this.data.name.substring(0, 2).toUpperCase();
    let _character = ['F', 'A', 'S', 'H', 'I', 'O', 'N', 'T', 'R', 'B', 'E', 'U', 'Y'];
    let sequence: number = Math.floor(Math.random() * 100);
    let index: number = Math.floor(Math.random() * 12);
    let encryption: string = _character[index] + _character[index + 1] + sequence + productname + "-" + date;
    return encryption;
  }

  addToCart(item_details: Product) {
    let isAdded: boolean = false;
    let features = {} as Features;
    features.price = this.price;
    features.size = this.sizing;
    features.color = this.color;
    item_details.features = [];
    item_details.features.push(features);
    this.storage.get("cart").then((data: CartItem[]) => {
      if (data === null || data.length === 0) {
        data = [];
        data.push({
          product: item_details,
          item_qty: this.orderQty
         
        });
      } else {
        for (let item of data) {
          if (item.product.ref === item_details.ref) {
            item.item_qty = this.orderQty;
            
            isAdded = true;
          }
        }
        if (!isAdded) {
          data.push({
            product: item_details,
            item_qty: this.orderQty,
           
          });
        }
      }
      this.storage.set("cart", data);
      this.router.navigate(['/cart']);
    }); 
   

  }

  prepareOrder() {
    let features = {} as Features;
    let myItem = {} as Product;
    let shipment = {} as Shipment;
    myItem.features = [];
    let products: Product[] = [];
    features.price = this.price;
    features.size = this.sizing;
    features.color = this.color;
    myItem = this.data;
    myItem.ref = this.image;
    myItem.qty = this.orderQty;
    myItem.features.push(features);
    shipment.goods_departure = myItem.shipment;
    products.push(myItem);
    let prepareOrder: Order = {
      orderId: this.crypto(),
      product: products,
      date_order: new Date(Date.now()),
      order_qty: this.orderQty,
      amount: this.orderQty * features.price,
      shipment: shipment
    }
    // console.log(prepareOrder);
    return prepareOrder;
  }

  authorized() {

     if (this.connected === true){
    const navigationExtras: NavigationExtras = {
      state: {
        order: this.prepareOrder()
      }
    };
    this.router.navigate(['/place-order'], navigationExtras);
     }else{
     const navigationExtras: NavigationExtras = {
       state: {
         order: this.prepareOrder(),
         returnway: '/place-order'
       }
     };
     this.router.navigate(['/login'], navigationExtras);
      }
  }

  browsingHistoric(reference: Product) {
    
    if (!isNullOrUndefined(reference)) {
      let isAdded: boolean = false;
      this.storage.get("browsing").then((historic: Product[]) => {
        if (historic === null || historic.length === 0) {
          historic = [];
          historic.push(reference);
        } else {
          for (let _string of historic) {
            if (_string === reference) {
              _string = reference;
              isAdded = true;
            }
          }
          if (!isAdded) {
            historic.push(reference);
          }
        }
        this.storage.set("browsing", historic);
      });
    }


  }

  liked(reference: string) {
    let isAdded: boolean = false;
    this.storage.get("liked").then((liked: string[]) => {
      if (liked === null || liked.length === 0) {
        liked = [];
        liked.push(reference);
      } else {
        for (let _string of liked) {
          if (_string === reference) {
            _string = reference;
            isAdded = true;
          }
        }
        if (!isAdded) {
          liked.push(reference);
        }
      }
      this.storage.set("liked", liked);
    });
  }
}


