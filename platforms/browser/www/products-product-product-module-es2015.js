(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-product-product-module"],{

/***/ "+FOW":
/*!**************************************************!*\
  !*** ./src/app/products/product/product.page.ts ***!
  \**************************************************/
/*! exports provided: ProductPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductPage", function() { return ProductPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_product_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./product.page.html */ "FZaj");
/* harmony import */ var _product_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product.page.scss */ "vX0C");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! util */ "MCLT");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _firestore_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../firestore-data.service */ "UbTl");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @awesome-cordova-plugins/camera/ngx */ "vaRf");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var src_models_user__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/models/user */ "Oj1a");














let ProductPage = class ProductPage {
    constructor(route, router, camera, afstore, afAuth, toastcontroller, firestoreData, storage, angularefireSG) {
        this.route = route;
        this.router = router;
        this.camera = camera;
        this.afstore = afstore;
        this.afAuth = afAuth;
        this.toastcontroller = toastcontroller;
        this.firestoreData = firestoreData;
        this.storage = storage;
        this.angularefireSG = angularefireSG;
        this.review = '';
        this.dynamicPrice = 0;
        this.dynamicQty = 0;
        this.dynamicPictures = [];
        this.reviewPicture = '../../../assets/icon/addpic.png';
        this.initialColor = '';
        this.initialSize = '';
        this.orderQty = 1;
        this.searchQuery = '';
        this.slidersOpts = {
            zoom: true,
            breakpoints: {
                // when window width is >= 320px
                320: {
                    slidesPerView: 1,
                },
                // when window width is >= 820px
                620: {
                    slidesPerView: 3,
                    spaceBetween: 10
                },
                // when window width is >= 9200px
                820: {
                    slidesPerView: 5,
                    spaceBetween: 60
                }
            }
        };
    }
    ngOnInit() {
        this.data = {};
        this.data.models = [];
        const queryString = this.route.snapshot.params['kpuin'];
        if (queryString !== null) {
            this.afstore.collection('product', q => q.where("code", "==", queryString))
                .get().subscribe(item => {
                const snap = item.docs[0];
                const product = snap.data();
                this.data = product;
                this.similar$ = this.firestoreData.filterByCategory(this.data.category);
                this.dynamicPrice = this.data.caracteristic[0].price;
                this.dynamicQty = this.data.caracteristic[0].qty;
                this.dynamicPictures = this.data.models[0].pictures;
                this.initialColor = this.data.models[0].id;
                this.initialSize = this.data.size[0];
                this.browsingHistoric(this.data);
            });
        }
        //console.log(this.data.code);
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.data = this.router.getCurrentNavigation().extras.state.product;
            }
        });
    }
    picturesLoading(color) {
        this.data.models.forEach(model => {
            if (model.id == color) {
                this.dynamicPictures = model.pictures;
            }
        });
    }
    priceLoading(color, size) {
        this.data.caracteristic.forEach(c => {
            if (c.color == this.initialColor && c.size == this.initialSize) {
                this.dynamicPrice = c.price;
            }
        });
    }
    setColor(selectedColor) {
        for (let model of this.data.models) {
            document.getElementById(model.id).style.borderRadius = "0";
        }
        this.initialColor = selectedColor;
        document.getElementById(selectedColor).style.borderRadius = "50%";
        this.priceLoading(this.initialColor, this.initialSize);
        this.picturesLoading(this.initialColor);
    }
    setSize(selectedSize) {
        for (let size of this.data.size) {
            document.getElementById(size).setAttribute('color', 'medium');
        }
        this.initialSize = selectedSize;
        document.getElementById(selectedSize).setAttribute('color', 'tertiary');
        this.priceLoading(this.initialColor, this.initialSize);
    }
    adjustqty(pressed) {
        if (pressed === 'minus') {
            if (this.orderQty !== 1) {
                this.orderQty--;
            }
            else {
            }
        }
        if (pressed === 'plus') {
            this.orderQty++;
        }
    }
    addInWishList(likeItem) {
        let isAdded = false;
        return this.storage.get("liked").then((liked) => {
            if (liked === null || liked.length === 0) {
                liked = [];
                liked.push(likeItem);
            }
            else {
                for (let items of liked) {
                    if (items === likeItem) {
                        items = likeItem;
                        isAdded = true;
                    }
                }
                if (!isAdded) {
                    liked.push(likeItem);
                }
            }
            this.storage.set("liked", liked).then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const toast = yield this.toastcontroller.create({
                    message: 'item added in your wish list',
                    duration: 3,
                    keyboardClose: true,
                    translucent: true
                });
                yield toast.present();
            }));
        });
    }
    addToCart(item) {
        let isAdded = false;
        this.storage.get("cart").then((data) => {
            if (data === null || data.length === 0) {
                data = [];
                data.push(this.setItem(item));
            }
            else {
                for (let item of data) {
                    if (item.picture === this.dynamicPictures[0]) {
                        item.qty = this.orderQty;
                        isAdded = true;
                    }
                }
                if (!isAdded) {
                    data.push(this.setItem(item));
                }
            }
            this.storage.set("cart", data);
            this.router.navigate(['/cart']);
        });
    }
    setItem(item_details) {
        this.details = {};
        this.details.name = item_details.name;
        this.details.brand = item_details.brand;
        this.details.description = item_details.description;
        this.details.category = item_details.category;
        this.details.qty = this.orderQty;
        this.details.size = this.initialSize;
        this.details.color = this.initialColor;
        this.details.shippingFee = item_details.shippingFee;
        this.details.deliveryFee = item_details.deliveryFee;
        this.details.taxFee = item_details.taxFee;
        this.details.deliveryDate = item_details.deliveryDate;
        this.details.picture = this.dynamicPictures[0];
        this.details.price = this.dynamicPrice;
        return this.details;
    }
    prepareOrder(item) {
        let shipment = {};
        shipment.goods_departure = item.shipment;
        shipment.shipping_destination = '';
        shipment.status = 'Not shipped yet';
        shipment.carrier = '';
        shipment.trackingnumber = '';
        let prepareOrder = {
            customerId: new Date(Date.now()) + "-" + "theUsername",
            orderId: this.crypto(),
            items: [this.setItem(item)],
            date_order: new Date(Date.now()),
            order_qty: this.orderQty,
            amount: this.orderQty * this.dynamicPrice,
            shipment: shipment,
        };
        return prepareOrder;
    }
    crypto() {
        let date = Date.now();
        let productname = this.data.name.substring(0, 2).toUpperCase();
        let _character = ['F', 'A', 'S', 'H', 'I', 'O', 'N', 'T', 'R', 'B', 'E', 'U', 'Y'];
        let sequence = Math.floor(Math.random() * 100);
        let index = Math.floor(Math.random() * 12);
        let encryption = _character[index] + _character[index + 1] + sequence + productname + "-" + date;
        return encryption;
    }
    willLoadImage() {
        this.getLiked();
        document.getElementById('loading').removeAttribute('hidden');
    }
    loadImage(image) {
        document.getElementById('loading').setAttribute('hidden', 'true');
    }
    errorLoad() {
        this.imageRef.src = '<your_default_img>';
    }
    authorized(args) {
        this.storage.get("user").then((uid) => {
            if (!Object(util__WEBPACK_IMPORTED_MODULE_8__["isNullOrUndefined"])(uid)) {
                const navigationExtras = {
                    state: {
                        order: this.prepareOrder(args)
                    }
                };
                this.router.navigate(['/place-order'], navigationExtras);
            }
            else {
                const navigationExtras = {
                    state: {
                        order: this.prepareOrder(args),
                    }
                };
                this.router.navigate(['/login'], navigationExtras);
            }
        });
    }
    openLibrary() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const options = {
                quality: 100,
                destinationType: this.camera.DestinationType.DATA_URL,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE,
                targetWidth: 1000,
                targetHeight: 1000,
                sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
            };
            return yield this.camera.getPicture(options);
        });
    }
    addPhoto() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const libraryImage = yield this.openLibrary();
            this.reviewPicture = 'data:image/jpg;base64,' + libraryImage;
        });
    }
    sendReviews(text) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.afstore.collection("user").doc((yield this.afAuth.currentUser).uid).get().subscribe(user => {
                this.user = new src_models_user__WEBPACK_IMPORTED_MODULE_13__["User"](user.data());
                if (this.reviewPicture !== '' && this.reviewPicture !== null) {
                    const filePath = this.user.name + new Date(Date.now());
                    const imageRef = this.angularefireSG.ref(filePath);
                    this.ngFireUploadTask = imageRef.putString(this.reviewPicture, 'data_url');
                    this.ngFireUploadTask.then(snap => {
                        console.log(snap.downloadURL);
                        this.reviewing = {};
                        this.reviewing.customerName = this.user.name;
                        this.reviewing.productId = this.data.code;
                        this.reviewing.reviewImage = this.reviewPicture;
                        this.reviewing.reviewText = text;
                        this.reviewing.reviewDate = new Date(Date.now());
                    });
                }
                else {
                    this.reviewing = {};
                    this.reviewing.customerName = this.user.name;
                    this.reviewing.productId = this.data.code;
                    this.reviewing.reviewImage = this.reviewPicture;
                    this.reviewing.reviewText = text;
                    this.reviewing.reviewDate = new Date(Date.now());
                }
                this.afstore.collection("review").add(this.reviewing);
            });
        });
    }
    prev(slides) {
        slides.slidePrev();
    }
    next(slides) {
        slides.slideNext();
    }
    /*   loadImage(image:string) {
        if(this.color!=='' && this.sizing!=''){
          document.getElementById(this.color).style.border="4px dotted #5260ff";
          document.getElementById(this.sizing).style.border="4px dotted #5260ff";
        }
        
        
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
        item_details.features = [];
        item_details.features.push(this.selectedFeature);
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
        let myItem = {} as Product;
        let shipment = {} as Shipment;
        let method = {} as Paymethod;
        let products: Product[] = [];
        myItem = this.data;
        myItem.orderedqty = this.orderQty;
        myItem.ref = this.image;
        myItem.qty = this.orderQty;
        myItem.features = [];
        myItem.features.push(this.selectedFeature);
        shipment.goods_departure = myItem.shipment;
        method.method = "";
        products.push(myItem);
        let prepareOrder: Order = {
          orderId: this.crypto(),
          product: products,
          date_order: new Date(Date.now()),
          order_qty: this.orderQty,
          amount: this.orderQty * this.selectedFeature.price,
          shipment: shipment,
          payment: method
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
      } */
    browsingHistoric(reference) {
        if (!Object(util__WEBPACK_IMPORTED_MODULE_8__["isNullOrUndefined"])(reference)) {
            let isAdded = false;
            this.storage.get("browsing").then((historic) => {
                if (historic === null || historic.length === 0) {
                    historic = [];
                    historic.push(reference);
                }
                else {
                    for (let _string of historic) {
                        if (_string.description === reference.description) {
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
    getLiked() {
        this.storage.get("likeItems").then((liked) => {
            if (liked !== null || liked.length !== 0) {
                liked.forEach(element => {
                    if (element.models[0].pictures[0] == this.data.models[0].pictures[0]) {
                        document.getElementById('heart').setAttribute('color', 'danger');
                    }
                });
            }
        }).catch(err => {
            console.log("no like items not found or empty");
        });
    }
    liked(reference) {
        let isAdded = false;
        this.storage.get("likeItems").then((liked) => {
            if (liked === null || liked.length === 0) {
                liked = [];
                liked.push(reference);
            }
            else {
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
            this.storage.set("likeItems", liked).then(() => document.getElementById('heart').setAttribute('color', 'danger'));
        });
    }
};
ProductPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_11__["Camera"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__["AngularFirestore"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuth"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ToastController"] },
    { type: _firestore_data_service__WEBPACK_IMPORTED_MODULE_9__["FirestoreDataService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"] }
];
ProductPage.propDecorators = {
    imageRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['image', { static: false },] }]
};
ProductPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-product',
        template: _raw_loader_product_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_product_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProductPage);



/***/ }),

/***/ "0qyK":
/*!************************************************************!*\
  !*** ./src/app/products/product/product-routing.module.ts ***!
  \************************************************************/
/*! exports provided: ProductPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductPageRoutingModule", function() { return ProductPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _product_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product.page */ "+FOW");




const routes = [
    {
        path: '',
        component: _product_page__WEBPACK_IMPORTED_MODULE_3__["ProductPage"]
    }
];
let ProductPageRoutingModule = class ProductPageRoutingModule {
};
ProductPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProductPageRoutingModule);



/***/ }),

/***/ "DCKC":
/*!****************************************************!*\
  !*** ./src/app/products/product/product.module.ts ***!
  \****************************************************/
/*! exports provided: ProductPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductPageModule", function() { return ProductPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _product_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-routing.module */ "0qyK");
/* harmony import */ var ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-ionic-image-viewer */ "gMqc");
/* harmony import */ var _product_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product.page */ "+FOW");
/* harmony import */ var src_app_sharedviews_sharedviews_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/sharedviews/sharedviews.module */ "l+lL");









let ProductPageModule = class ProductPageModule {
};
ProductPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            src_app_sharedviews_sharedviews_module__WEBPACK_IMPORTED_MODULE_8__["SharedviewsModule"],
            _product_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductPageRoutingModule"],
            ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_6__["NgxIonicImageViewerModule"]
        ],
        declarations: [_product_page__WEBPACK_IMPORTED_MODULE_7__["ProductPage"]]
    })
], ProductPageModule);



/***/ }),

/***/ "FZaj":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products/product/product.page.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-page-header></app-page-header>\n<ion-progress-bar *ngIf=\"data.code==undefined\" type=\"indeterminate\"></ion-progress-bar>\n<ion-content>\n\n  <div class=\"container-fluid p-2 overflow-hidden\">\n    \n    <div class=\"row g-2\" *ngIf=\"data.code!==undefined\">\n\n      <div class=\"col-md-6 col-lg-5 bg-white\">\n        <div class=\"row\">\n          <div *ngIf=\"data\" class=\"col-lg-2 col-md-4 col-12\">\n            <ion-list>\n              <ion-thumbnail (click)=\"setColor(model.id)\"  [id]=\"model.id\" class=\"border mt-1\" *ngFor=\"let model of data.models\">\n                <ion-img  [src]=\"model.pictures[0]\"></ion-img>\n              </ion-thumbnail>\n            </ion-list>\n          </div>\n          <div class=\"col-lg-10 col-md-8 col-12\">\n            <ion-slides pager=\"true\" [options]=\"{ zoom: true, grabCursor: true }\" >\n              <ion-slide *ngFor=\"let model of dynamicPictures\">\n                <img #image id=\"image\" \n          ionImgViewer\n          title=\"Image View\"\n          text=\"Double tap for zoom\"\n          scheme=\"light\" [src]=\"model\" (ionImgWillLoad)=\"willLoadImage()\"  class=\"p-4\" (ionImgDidLoad)=\"loadImage(model)\" (ionError)=\"errorLoad()\" />\n              </ion-slide>\n              <ion-card id=\"loading\" hidden>\n                <ion-spinner   name=\"crescent\"></ion-spinner>\n              </ion-card>\n            </ion-slides>\n          </div>\n        </div>\n      </div>\n \n      <div class=\"col-md-6 col-lg-4 p-4 bg-white\">\n        <div class=\"row\">\n          \n          <div class=\"col-md-10 col-lg-8\">\n            <h6>{{data.name}}</h6>\n          </div>\n          <div class=\"col-md-2 col-lg-4\"> \n            <ion-icon *ngFor=\" let star of [].constructor(data.rating)\" name=\"star\" color=\"warning\" size=\"small\"></ion-icon>\n          </div>\n          <p>{{data.description}}</p>\n        </div>\n        <div class=\"container col-md-12 col-12 p-2 bg-white\" >\n            <h6><b>Size :</b></h6>\n            <div class=\"scrollmenu\">\n              <a [id]=\"size\" (click)=\"setSize(size)\" *ngFor=\"let size of data.size\">\n                <button type=\"button\" class=\"btn btn-dark\">{{size}}</button>\n              </a>\n            </div>\n         \n        </div>\n        <div class=\"row\">\n          <ion-item>\n            <ion-label><b>About this item</b></ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-textarea readonly=\"true\" style=\"text-align: justify; font-size:14px; font-family: 'Times New Roman', Times, serif;\">\n              {{data.about}}\n            </ion-textarea>\n          </ion-item>\n        </div>\n      </div>\n\n      <div class=\"position-relative col-md-12 col-lg-3 col-12 bg-white\">\n        <div class=\"position-absolute border rounded p-4\">\n          <ion-item lines=\"none\">\n            <ion-label slot=\"start\"><h2><b>{{dynamicPrice | currency}}</b></h2></ion-label>\n            <ion-item-group slot=\"end\">\n              <ion-label>\n                <div class=\"qty-selector\">\n                  <ion-button  fill=\"clear\" (click)=\"adjustqty('minus')\">-</ion-button>\n                  <ion-label>{{orderQty}}</ion-label>\n                  <ion-button fill=\"clear\" (click)=\"adjustqty('plus')\">+</ion-button>\n                </div>\n                <ion-label *ngIf=\"dynamicQty<10 && dynamicQty>1\"><h6>Only {{dynamicQty}} left</h6></ion-label>\n              </ion-label>\n              <ion-label>\n      \n              </ion-label>\n            </ion-item-group>\n          </ion-item>\n              <ion-item-group>\n                <ion-item lines=\"none\">\n                  <ion-item-group>\n                    <h6>get it by <b>{{data.deliveryDate | date}}</b></h6>\n                    <h6>Ship from {{data.shipment}}</h6>\n                    <p style=\"font-size: 14px\" class=\"text-muted\">Over 50$ buy, shipping fee are not considered for US customers</p>\n                    <h6 class=\"text-info\">\n                        <ion-text *ngIf=\"data.shippingFee== 0\">Free shipping,</ion-text>\n                        <ion-text *ngIf=\"data.deliveryFee== 0\">free delivery,</ion-text>\n                        <ion-text *ngIf=\"!data.policy\">but no return allowed</ion-text> \n                        <ion-text *ngIf=\"data.policy\">and free return</ion-text>\n                    </h6>\n                  </ion-item-group>\n                </ion-item>\n               \n                <ion-button (click)=\"authorized(data)\"  expand=\"block\"  color=\"tertiary\">Buy Now</ion-button>\n                <ion-button (click)=\"addToCart(data)\" expand=\"block\" color=\"warning\">Add To Cart</ion-button>\n                <div style=\"margin-top: 20px;\">\n                  \n                  <h6>\n                    <ion-icon color=\"danger\" slot=\"start\" name=\"warning-outline\"></ion-icon>\n                    return will not be accepted with label is removed, \n                    you cannot return an item after 15 days delays.\n                  </h6>\n                </div>\n                <div style=\"margin-top: 20px;\" class=\"row\">\n                  <div class=\"col-lg-4 col-12 col-md-9\">\n                    <ion-badge color=\"dark\" (click)=\"addInWishList(data)\">\n                      <small>Save in Favorites\n                      </small>\n                      <ion-icon color=\"danger\" name=\"heart-outline\"></ion-icon>\n                    </ion-badge>\n                  </div>\n                  <div class=\"col-lg-3 col-12 col-md-12\"></div>\n                  <div class=\"col-lg-5 col-12 col-md-3\">\n                      <ion-buttons>\n                        <small>Favorites List</small>\n                        <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n                      </ion-buttons>\n                  </div>\n                 \n                </div>\n              </ion-item-group>\n        </div>\n       \n      </div>\n     \n    \n      <div *ngIf=\"similar$|async as _items\" class=\"col-md-12 col-12 col-lg-12 p-3 bg-white\">\n        <h2>You might considered those </h2>\n        <div class=\"row\">\n          <ion-buttons>\n            <ion-button (click)=\"prev(slides)\">\n              <ion-icon slot=\"icon-only\" name=\"chevron-back-circle-outline\"></ion-icon>\n            </ion-button>\n          \n              <ion-slides #slides style=\"width: 100%;\" [options]=\"{ slidesPerView: '4', zoom: false, grabCursor: true }\">\n                <ion-slide *ngFor=\"let item of _items\" >\n                  <div>\n                    <ion-card-content  style=\"padding-bottom: 0;\"  >\n                      <ion-img style=\"box-sizing:border-box; width: 150px; height: 150px;\"  [src]=\"item.models[0].pictures[0]\"></ion-img>\n                    </ion-card-content>\n                    <ion-card-header>\n                      <ion-text color=\"dark\">\n                        <h6>{{item.description}}</h6>\n                        <h5 class=\"text-muted\">{{item.name}}</h5>\n                      </ion-text>\n                      <ion-card-title>\n                        <ion-item lines=\"none\">\n                          <ion-label  color=\"dark\">\n                            {{item.caracteristic[0].price|currency}}\n                          </ion-label>\n                          <div style=\"text-align:center; max-width: 36px; max-height: 19.188px; overflow: hidden;\">\n                            <div class=\"circle\" *ngFor=\"let color of item.models\">\n                              <span class=\"dot\" *ngIf=\"color.id!==''\" [style.background]=\"color.id\"></span>\n                            </div>\n                          </div> \n                        </ion-item>\n                      </ion-card-title>\n                    </ion-card-header>\n                  </div>\n              </ion-slide>\n              </ion-slides>\n          \n            <ion-button (click)=\"next(slides)\">\n              <ion-icon slot=\"icon-only\" name=\"chevron-forward-circle-outline\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n        </div>\n      \n      </div>\n    \n      <div class=\"col-md-12 col-lg-12 col-12 p-3 bg-white\">\n        <ng-container *ngIf=\"data.models.length>0\">\n          <h2>Manufacturer Image </h2>\n          <div class=\"container\">\n            <div class=\"row g-3\">\n              <div *ngFor=\"let model of data.models\"  class=\"border p-2\">\n                <ion-img class=\"img-fluid\" [src]=\"model.pictures[0]\"></ion-img>\n              </div>\n            </div>\n           \n          </div>\n          \n        </ng-container>\n        </div>\n    \n      <div class=\"col-md-12 col-lg-7 col-12 p-2 bg-white\">\n        <h2>customers reviews </h2>\n          <ion-list>\n            <ion-item>\n              <ion-item-group>\n                <span>Customer name</span>&nbsp;\n                <small class=\"text-muted\">16, mar 2021 </small>\n                <ion-buttons>\n                  <ion-thumbnail>\n                    <ion-img src=\"https://via.placeholder.com/150/FF0000/FFFFFF?Text=Down.comC/O https://placeholder.com/\"></ion-img>\n                  </ion-thumbnail>\n                  <p>\n                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. \n                      Excepturi sit suscipit iure labore dolorem, doloru\n                  </p>\n                </ion-buttons>\n              </ion-item-group>\n            </ion-item>\n          </ion-list>\n\n          <div class=\"container border p-4\">\n            <ion-item>\n              <ion-thumbnail (click)=\"addPhoto()\">\n                <ion-img  [src]=\"reviewPicture\"></ion-img>\n              </ion-thumbnail>\n              <ion-input [(ngModel)]=\"review\" placeholder=\"write a review about this item\"></ion-input>\n              <ion-button (click)=\"sendReviews(review)\" size=\"icon-only\" fill=\"clear\">\n                <ion-icon name=\"send\" size=\"small\"></ion-icon>\n              </ion-button>\n            </ion-item>\n          </div>\n        </div>\n\n        <div class=\"col-md-12 col-lg-5 col-12\">\n          <table class=\"table table-bordered\">\n            <thead>\n              <tr>\n                <th scope=\"col\">#</th>\n                <th scope=\"col\">Summary Table</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <th scope=\"row\">Brand</th>\n                <td>{{data.brand}}</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">Name</th>\n                <td>{{data.name}}</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">Category</th>\n                <td>{{data.category}}</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">Description</th>\n                <td>{{data.description}}</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">Dimension</th>\n                <td>N/A</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">Weight</th>\n                <td>5.6 pounds</td>\n              </tr>\n\n            </tbody>\n          </table>\n        </div>\n\n    </div>\n\n\n\n  </div>\n\n \n\n</ion-content>\n");

/***/ }),

/***/ "vX0C":
/*!****************************************************!*\
  !*** ./src/app/products/product/product.page.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #f1f3f4;\n}\n\nbg-white {\n  background: white;\n}\n\nion-label {\n  font-size: 12px;\n}\n\nh6 {\n  font-size: 13px;\n  margin-top: 10px;\n}\n\nion-card-header h6 {\n  font-size: 12px;\n  font-weight: bold;\n  font-family: \"Times New Roman\", Times, serif;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n\nion-card-header h5 {\n  font-size: 13px;\n  font-family: \"Times New Roman\", Times, serif;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n}\n\nsmall {\n  font-size: 12px;\n}\n\np {\n  font-size: 12px;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n}\n\nion-slides ion-slide ion-img {\n  width: 50%;\n  height: 50%;\n}\n\nion-slides {\n  padding-bottom: 5px;\n}\n\n.shareicon {\n  float: right;\n  text-align: justify;\n  margin-right: 20px;\n}\n\n.hearticon {\n  float: left;\n  text-align: justify;\n  margin-left: 20px;\n}\n\n.count {\n  height: 100%;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  color: var(--ion-color-primary);\n}\n\n.qty-selector {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #f6f6f6;\n  border-radius: 5px;\n  margin-top: 10px;\n}\n\n.qty-selector ion-button {\n  --color: #565656;\n  font-size: 12px;\n  margin-left: 8px;\n  margin-right: 8px;\n}\n\n.qty-selector ion-label {\n  color: #565656 !important;\n  font-size: 12px;\n}\n\n.margin-left {\n  margin-left: 4px;\n}\n\n.margin-right {\n  margin-right: 4px;\n}\n\n.padding {\n  padding: 4px;\n}\n\n.padding-bottom {\n  padding-bottom: 5px;\n}\n\n.justify {\n  float: left;\n  text-align: justify;\n}\n\n.center {\n  margin-left: auto;\n  margin-right: auto;\n  padding: 10px;\n}\n\nion-spinner {\n  padding: 10px;\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n}\n\n.title {\n  width: 100%;\n  margin-top: 20px;\n  text-align: justify;\n  text-indent: 0%;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  font-style: 12px;\n  font-style: normal;\n  padding: 5px 5px 5px 5px;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n}\n\n.dot {\n  height: 10px;\n  width: 10px;\n  border-radius: 40%;\n  display: inline-block;\n  padding-left: 6px;\n  padding-right: 6px;\n}\n\n.circle {\n  display: inline-block;\n  margin-bottom: 20px;\n}\n\n.circle h5 {\n  font-size: 14px;\n  display: block;\n  text-align: center;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  letter-spacing: -1px;\n  text-indent: 0px;\n  padding: 0;\n  margin: 0;\n}\n\n/*  .image-slider ion-slide.swiper-slide {\n    right: 25%;\n}\n.thumb-img {\n   --size:large;\n   border-radius: 10px;\n} */\n\ndiv.scrollmenu {\n  overflow: auto;\n  white-space: nowrap;\n}\n\ndiv.scrollmenu a {\n  display: inline-block;\n  color: white;\n  text-align: center;\n  padding: 14px;\n  text-decoration: none;\n}\n\ndiv.scrollmenu a:hover {\n  background-color: #777;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdC9wcm9kdWN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLHFCQUFBO0FBQUY7O0FBSUE7RUFDRSxpQkFBQTtBQURGOztBQUlBO0VBQ0UsZUFBQTtBQURGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBQUY7O0FBR0U7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw0Q0FBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0FBQUo7O0FBRUU7RUFDRSxlQUFBO0VBQ0EsNENBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtBQUFKOztBQUlBO0VBQ0UsZUFBQTtBQURGOztBQUlBO0VBQ0UsZUFBQTtFQUNBLHNIQUFBO0FBREY7O0FBTUU7RUFDRSxVQUFBO0VBQ0EsV0FBQTtBQUhKOztBQUtFO0VBQVcsbUJBQUE7QUFEYjs7QUFFRTtFQUFXLFlBQUE7RUFBYSxtQkFBQTtFQUFxQixrQkFBQTtBQUkvQzs7QUFIRTtFQUFXLFdBQUE7RUFBWSxtQkFBQTtFQUFxQixpQkFBQTtBQVM5Qzs7QUFQRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0FBVUo7O0FBUEE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQVVGOztBQVJFO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQVVOOztBQVBFO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0FBU047O0FBTEE7RUFBYSxnQkFBQTtBQVNiOztBQVJBO0VBQWMsaUJBQUE7QUFZZDs7QUFYQTtFQUFTLFlBQUE7QUFlVDs7QUFkQTtFQUFnQixtQkFBQTtBQWtCaEI7O0FBakJBO0VBQVMsV0FBQTtFQUFZLG1CQUFBO0FBc0JyQjs7QUFyQkM7RUFBUSxpQkFBQTtFQUFtQixrQkFBQTtFQUFtQixhQUFBO0FBMkIvQzs7QUExQkM7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFBbUIsa0JBQUE7RUFDbkIsY0FBQTtBQThCSDs7QUEzQkU7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx3SUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0FBOEJKOztBQTFCRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUE2Qko7O0FBM0JFO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtBQThCSjs7QUE1QkU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0RBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUErQko7O0FBNUJDOzs7Ozs7R0FBQTs7QUFTRDtFQUNFLGNBQUE7RUFDQSxtQkFBQTtBQTZCRjs7QUF6QkE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtBQTRCRjs7QUF6QkE7RUFDRSxzQkFBQTtBQTRCRiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3QvcHJvZHVjdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmlvbi1jb250ZW50e1xuICAtLWJhY2tncm91bmQ6ICNmMWYzZjQ7XG4gIFxufVxuXG5iZy13aGl0ZXtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbmlvbi1sYWJlbHtcbiAgZm9udC1zaXplOjEycHg7XG59XG5oNntcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuaW9uLWNhcmQtaGVhZGVye1xuICBoNntcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgfVxuICBoNXtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDE7XG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDsgXG4gIH1cbiAgXG59XG5zbWFsbHtcbiAgZm9udC1zaXplOjEycHg7XG59XG5cbnB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1mYW1pbHk6ICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbn1cblxuXG5cbiAgaW9uLXNsaWRlcyBpb24tc2xpZGUgaW9uLWltZ3tcbiAgICB3aWR0aDogNTAlO1xuICAgIGhlaWdodDogNTAlO1xuICB9XG4gIGlvbi1zbGlkZXN7cGFkZGluZy1ib3R0b206IDVweDt9XG4gIC5zaGFyZWljb257ZmxvYXQ6cmlnaHQ7IHRleHQtYWxpZ246IGp1c3RpZnk7IG1hcmdpbi1yaWdodDogMjBweDt9XG4gIC5oZWFydGljb257ZmxvYXQ6bGVmdDsgdGV4dC1hbGlnbjoganVzdGlmeTsgbWFyZ2luLWxlZnQ6IDIwcHg7fVxuXG4gIC5jb3VudCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5xdHktc2VsZWN0b3Ige1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2Y2ZjZmNjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuXG4gIGlvbi1idXR0b24ge1xuICAgICAgLS1jb2xvcjogIzU2NTY1NjtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgfVxuXG4gIGlvbi1sYWJlbCB7XG4gICAgICBjb2xvcjogIzU2NTY1NiAhaW1wb3J0YW50O1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG59XG5cbi5tYXJnaW4tbGVmdHttYXJnaW4tbGVmdDogNHB4O31cbi5tYXJnaW4tcmlnaHR7bWFyZ2luLXJpZ2h0OiA0cHg7fVxuLnBhZGRpbmd7cGFkZGluZzo0cHg7fVxuLnBhZGRpbmctYm90dG9te3BhZGRpbmctYm90dG9tOiA1cHg7fVxuLmp1c3RpZnl7ZmxvYXQ6bGVmdDsgdGV4dC1hbGlnbjoganVzdGlmeTt9XG4gLmNlbnRlcnttYXJnaW4tbGVmdDogYXV0bzsgbWFyZ2luLXJpZ2h0OiBhdXRvO3BhZGRpbmc6IDEwcHg7fVxuIGlvbi1zcGlubmVye1xuICAgcGFkZGluZzogMTBweDtcbiAgIG1hcmdpbi1sZWZ0OiBhdXRvOyBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICBkaXNwbGF5OmJsb2NrO1xuIH1cbiBcbiAgLnRpdGxle1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICB0ZXh0LWluZGVudDogMCU7XG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXN0eWxlOiAxMnB4O1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBwYWRkaW5nOiA1cHggNXB4IDVweCA1cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDsgXG4gIH1cblxuICBcbiAgLmRvdHtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gICAgd2lkdGg6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNDAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nLWxlZnQ6IDZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA2cHg7XG4gIH1cbiAgLmNpcmNsZXtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuICAuY2lyY2xlIGg1e1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xuICAgIGxldHRlci1zcGFjaW5nOiAtMXB4O1xuICAgIHRleHQtaW5kZW50OiAwcHg7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46MDtcbiAgfVxuXG4gLyogIC5pbWFnZS1zbGlkZXIgaW9uLXNsaWRlLnN3aXBlci1zbGlkZSB7XG4gICAgcmlnaHQ6IDI1JTtcbn1cbi50aHVtYi1pbWcge1xuICAgLS1zaXplOmxhcmdlO1xuICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn0gKi9cblxuXG5kaXYuc2Nyb2xsbWVudSB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBcbn1cblxuZGl2LnNjcm9sbG1lbnUgYSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE0cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuZGl2LnNjcm9sbG1lbnUgYTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3Nzc7XG4gIFxufSAiXX0= */");

/***/ })

}]);
//# sourceMappingURL=products-product-product-module-es2015.js.map