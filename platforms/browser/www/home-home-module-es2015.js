(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "A3+G":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "zpKS");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ }),

/***/ "UbTl":
/*!*******************************************!*\
  !*** ./src/app/firestore-data.service.ts ***!
  \*******************************************/
/*! exports provided: FirestoreDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirestoreDataService", function() { return FirestoreDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "e8h1");





let FirestoreDataService = class FirestoreDataService {
    constructor(afs, afAuth, storage) {
        this.afs = afs;
        this.afAuth = afAuth;
        this.storage = storage;
        this.userId = '';
    }
    getAuthState() {
        this.afAuth.authState.subscribe(auth => {
            if (!auth) {
                this.connected = false;
            }
            else {
                this.connected = true;
            }
        });
        return this.connected;
    }
    getConnexionState() {
        return globalThis.navigator.onLine;
    }
    getMainSlides() {
        this.slidesDocument = this.afs.collection('homepane').doc('d0pWnLNzch6ACeFKJmrj');
        this.slides = this.slidesDocument.valueChanges();
        return this.slides;
    }
    getCategories() {
        this.categoriesCollection = this.afs.collection('categories', q => q.orderBy("categoryName", "asc").limit(4));
        this.category = this.categoriesCollection.valueChanges();
        return this.category;
    }
    getAllcategories() {
        this.categoriesCollection = this.afs.collection('categories', q => q.orderBy("categoryName"));
        this.category = this.categoriesCollection.valueChanges();
        return this.category;
    }
    getBrands() {
        this.brandsCollection = this.afs.collection('brands', q => q.orderBy("date_added", "asc").limit(4));
        this.brand = this.brandsCollection.valueChanges();
        return this.brand;
    }
    getbyPromotion(promo) {
        this.productCollection = this.afs.collection('product', q => q.where("display.position", "==", promo));
        this.product = this.productCollection.valueChanges();
        return this.product;
    }
    getFirestoreData() {
        this.items = new Array();
        this.productCollection = this.afs.collection('product');
        this.product = this.productCollection.valueChanges();
        /*
        * Product subscription for uploading
        */
        this.product.subscribe(observer => {
            observer.forEach(e => {
                this.items.push({
                    code: e.code,
                    name: e.name,
                    description: e.description,
                    brand: e.brand,
                    rating: e.rating,
                    category: e.category,
                    qty: e.qty,
                    deliveryDate: e.deliveryDate,
                    shipment: e.shipment,
                    policy: e.policy,
                    shippingFee: e.shippingFee,
                    deliveryFee: e.deliveryFee,
                    taxFee: e.taxFee,
                    about: e.about,
                    models: e.models,
                    caracteristic: e.caracteristic,
                    status: e.status,
                    availability: e.availability,
                    display: e.display
                });
            });
        });
        return this.items;
    }
    getProducts() {
        this.productCollection = this.afs.collection('product', q => q.orderBy('creation_date', 'desc'));
        this.product = this.productCollection.valueChanges();
        return this.product;
    }
    getHomeDesign() {
        this.homeCollection = this.afs.collection('homepane', q => q.orderBy("range", "asc"));
        this.homeDesign = this.homeCollection.valueChanges();
        return this.homeDesign;
    }
    filterByCategory(category) {
        this.productCollection = this.afs.collection('product', q => q.where("category", "==", category).orderBy("creation_date", "desc"));
        this.product = this.productCollection.valueChanges();
        return this.product;
    }
    filterByBrand(category) {
        this.productCollection = this.afs.collection('product', q => q.where("brand", "==", category).orderBy("creation_date", "desc"));
        this.product = this.productCollection.valueChanges();
        return this.product;
    }
    filterBySearchQueries(query) {
        this.productCollection = this.afs.collection('product', q => q.where("description", "==", query).orderBy("creation_date", "desc"));
        this.product = this.productCollection.valueChanges();
        return this.product;
    }
    /*  getOrderAsadmin(){
       this.items_ordered = new Array();
       this.ordersCollection = this.afs.collection('orders');
       this.orderData = this.ordersCollection.doc().collection("customer_order").valueChanges();
       this.orderData.subscribe(observer=>{
         
         observer.forEach(e => {
          
           this.items_ordered.push({
                 orderId: e.orderId,
                 items: e.items,
                 date_order: e.date_order,
                 order_qty: e.order_qty,
                 amount: e.amount,
                 shipment: e.shipment
           });
   
       });
       });
       return this.items_ordered;
     } */
    getFirestoreOrder() {
        this.ordersCollection = this.afs.collection('orders', q => q.where("customerId", "==", this.userId));
        this.orderData = this.ordersCollection.valueChanges();
        return this.orderData;
    }
    getOrder(param) {
        this.ordersCollection = this.afs.collection('orders', q => q.where("customerId", "==", param));
        this.orderData = this.ordersCollection.valueChanges();
        return this.orderData;
    }
    getUsers() {
        this.usersCollection = this.afs.collection('user');
        this.user = this.usersCollection.valueChanges();
        return this.user;
    }
    getMessage() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let boxOwner = (yield this.afAuth.currentUser).uid;
            this.msg = new Array();
            this.msgCollection = this.afs.collection('message');
            this.message = this.msgCollection.doc(boxOwner).collection('update').valueChanges();
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
        });
    }
    removeProduct(item) {
        this.productCollection = this.afs.collection('product', q => q.where("description", "==", item.description));
        this.productCollection.get().toPromise().then(querySnapshot => {
            querySnapshot.forEach(dd => {
                dd.ref.delete();
            });
        });
    }
    editProduct(item) {
        this.productCollection = this.afs.collection('product', q => q.where("description", "==", item.description));
        return this.productCollection.get().toPromise().then(querySnapshot => {
            querySnapshot.forEach(dd => {
                dd.ref.update(item);
            });
        });
    }
};
FirestoreDataService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] }
];
FirestoreDataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FirestoreDataService);



/***/ }),

/***/ "WcN3":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-page-header></app-page-header>\n<ion-content [fullscreen]=\"true\">\n  <div class=\"container-fluid\" style=\"background: #031432;\">  <!--Navigation-->\n    <div class=\"scrollmenu\">\n      <a (click)=\"navigateTo(common)\" *ngFor=\"let common of navigation\">{{common}}</a> \n    </div>\n  </div>\n\n  <ion-slides style=\"margin-bottom:0;\" style=\"background: #c7aa53;\"> <!-- Messages Bar -->\n    <ion-slide>\n      <ion-label *ngIf=\"connected\">Help Ukrainian people now!</ion-label>\n    </ion-slide>\n     <!--   <ion-button *ngIf=\"!connected\" expand=\"block\" color=\"danger\">Connexion failed, Want you retry to connect?</ion-button>\n -->  </ion-slides>\n  \n  <div>\n\n    <ion-slides *ngIf=\"slides$ | async as slide\" >  <!-- Main Slideshow-->\n      <ng-container *ngFor=\"let s of slide.slides\">\n        <ion-slide *ngIf=\"s.version=='web'\"  (click)=\"linkTo(s.direction, 'slide')\" >\n          <ion-img [src]=\"s.image\" [alt]=\"slide.alt\"></ion-img>\n      </ion-slide>\n      </ng-container>\n        \n      \n      \n    </ion-slides>\n  </div>\n\n\n  <div class=\"container-fluid p-4 overflow-hidden content-box\">  <!-- Panel Division-->\n    <div class=\"row g-4\">\n      <ng-container *ngFor=\"let panel of homepane$ | async\">\n\n        <div class=\"col-12 col-lg-4 col-md-6\" *ngIf=\"panel.panelType=='box'&& panel.active==true\">\n          <div class=\"p-3 border\" [ngStyle]=\"{'background': panel.panelName=='Advertising' ? 'none' : 'white'}\">\n            <h2>{{panel.description}}</h2>\n            <div *ngIf=\"panel.panelName!=='category' && panel.panelName!=='brand'\" class=\"row overflow-hidden\"\n              style=\"max-height: 400px;\">\n              <ng-container *ngIf=\"product$|async as _items; else skeleton\">\n                <ng-container *ngFor=\"let item of product$|async\">\n                  <ion-label (click)=\"goTo(item)\" *ngIf=\"item.display.position==panel.panelId\" class=\"col-6\" style=\"margin-bottom:15px\">\n                    <ion-img style=\"width: 164px; height: 164px;\" src=\"{{(item.models[0].pictures[0])}}\"></ion-img>\n                    <h6>{{item.name}}</h6>\n                  </ion-label>\n                </ng-container>\n              </ng-container>\n            </div>\n\n            <div *ngIf=\"panel.panelName=='category'\" class=\"row\">\n              <ng-container *ngFor=\"let item of categories$|async\">\n                <ion-label ion-button (click)=\"linkTo(item.categoryName, 'category')\" class=\"col-6\" style=\"margin-bottom:15px\">\n                  <img src=\"{{(item.image)}}\" />\n                  <h6>{{item.categoryName}}</h6>\n                </ion-label>\n              </ng-container>\n            </div>\n\n            <div *ngIf=\"panel.panelName=='brand'\" class=\"row\">\n              <ng-container *ngFor=\"let item of brands$| async\">\n                <ion-label (click)=\"linkTo(item.brandName, 'brand')\" class=\"col-6\" style=\"margin-bottom:15px\">\n                  <img src=\"{{(item.logo)}}\" />\n                  <h6>{{item.brandName}}</h6>\n                </ion-label>\n              </ng-container>\n            </div>\n\n            <ion-button fill=\"clear\" (click)=\"navigateTo(panel.panelName)\" color=\"primary\">{{panel.buttonText}}\n            </ion-button>\n          </div>\n        </div>\n\n        <div class=\"col col-md-12 col-sm-12 col-lg-12 p-3\" *ngIf=\"panel.panelType=='slider' && panel.active==true\">\n          <div class=\"p-3\" style=\"background:white;\">\n            <h2 style=\"display:inline;\">{{panel.description}}</h2>\n            <ion-button fill=\"clear\" *ngIf=\"panel.panelId=='best_seller'\" color=\"primary\">{{panel.buttonText}}\n            </ion-button>\n            <ng-container *ngIf=\"product$|async as _items; else slideSkeleton\">\n              <ion-slides [options]=\"{ slidesPerView: '3', zoom: false, grabCursor: true }\">\n                <ng-container *ngFor=\"let common of product$ | async \">\n                  <ion-slide *ngIf=\"common.display.position == panel.panelId\" (click)=\"goTo(common)\"\n                    style=\"margin: 20px\">\n                    <ion-item-group>\n                      <ion-img [src]=\"common.models[0].pictures[0]\" style=\"max-height: 300px; max-width: 300px\"></ion-img>\n                    </ion-item-group>\n                  </ion-slide>\n                </ng-container>\n                <ion-button fill=\"clear\" *ngIf=\"panel.panelId!=='best_seller'\" color=\"primary\">{{panel.buttonText}}\n                </ion-button>\n              </ion-slides>\n            </ng-container>\n          </div>\n        </div>\n\n        <div class=\"col-12 col-md-6 col-lg-6\" *ngIf=\"panel.panelType=='deals' && panel.active==true\">\n          <ion-item lines=\"none\">\n            <ion-label>\n              Hot Deals<ion-icon color=\"danger\" name=\"flame\"></ion-icon>\n            </ion-label>\n            <ion-buttons>\n              <ion-button (click)=\"navigateTo('Today Deals')\" color=\"tertiary\">\n                <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n              </ion-button>\n            </ion-buttons>\n          </ion-item>\n          <div class=\"p-4 border\">\n            <ion-slides>\n              <ng-container *ngFor=\"let item of product$|async\">\n                <ng-container *ngIf=\"item.display.position == panel.panelId\">\n                  <ion-slide>\n                    <div class=\"row\">\n                      <div class=\"col-md-8 col-sm-6\">\n                        <ion-img (click)=\"goTo(item)\" [src]=\"item.models[0].pictures[0]\"></ion-img>\n                      </div>\n                      <div class=\"col-md-4 col-sm-6\">\n                        <h4 style=\"text-align: justify;\">{{item.name}}</h4>\n                        <div class=\"row\">\n                          <ion-row class=\"mt-3\">\n                            <ion-col>\n                              <h5 style=\"text-align: justify;\"><span class=\"text-danger\">was</span>\n                                {{item.caracteristic[0].price|currency}}</h5>\n                            </ion-col>\n                            <ion-col>\n                              <h5>\n                                <ion-badge>{{item.discount}}% Off</ion-badge>\n                              </h5>\n                            </ion-col>\n                          </ion-row>\n                          <ion-row class=\"mb-3\">\n                            <ion-col>\n                              <h4 h5 style=\"text-align: justify;\">now {{calculateDiscount(item.caracteristic[0].price,\n                                item.discount,panel.timing)| currency}}</h4>\n                            </ion-col>\n                            <ion-label style=\"text-align: justify;\" color=\"primary\">{{panel.description}}</ion-label>\n                          </ion-row>\n                        </div>\n                      </div>\n                      <ion-label color=\"primary\" style=\"text-align: justify;\">{{panel.buttonText}}</ion-label>\n                    </div>\n                  </ion-slide>\n                </ng-container>\n\n              </ng-container>\n            </ion-slides>\n            <div class=\"timing\">\n              <button id=\"HR\" type=\"button\" class=\"btn btn-light btn-circle btn-lg\"></button>\n              <button id=\"MN\" type=\"button\" class=\"btn btn-light btn-circle btn-lg\"></button>\n              <button id=\"SEC\" type=\"button\" class=\"btn btn-light btn-circle btn-lg\"></button>\n            </div>\n          </div>\n        </div>\n\n      </ng-container>\n    </div>\n\n  </div>\n\n\n</ion-content>\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- Templates Skeleton for loading data-->\n\n<ng-template #skeleton>\n  <ion-label *ngFor=\"let n of counter\" class=\"col-6\">\n    <ion-thumbnail style=\"width: 164px; height: 164px;\">\n      <ion-skeleton-text animated>K</ion-skeleton-text>\n    </ion-thumbnail>\n    <h6>\n      <ion-skeleton-text animated>\n      </ion-skeleton-text>\n    </h6>\n  </ion-label>\n</ng-template>\n\n<ng-template #slideSkeleton>\n  <ion-slides [options]=\"{ slidesPerView: '3', zoom: false, grabCursor: true }\">\n    <ion-slide *ngFor=\"let n of counter\">\n      <ion-skeleton-text animated style=\"width: 200px; height: 200px\"></ion-skeleton-text>\n    </ion-slide>\n  </ion-slides>\n</ng-template>");

/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "zpKS");
/* harmony import */ var _sharedviews_sharedviews_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sharedviews/sharedviews.module */ "l+lL");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home-routing.module */ "A3+G");








let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_7__["HomePageRoutingModule"],
            _sharedviews_sharedviews_module__WEBPACK_IMPORTED_MODULE_6__["SharedviewsModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "f6od":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #f1f3f4;\n}\n\n.btn-circle.btn-lg {\n  width: 50px;\n  height: 50px;\n  padding: 7px 10px;\n  border-radius: 25px;\n  font-size: 20px;\n  font-weight: bold;\n  text-align: center;\n}\n\n.timing {\n  position: absolute;\n  top: 20%;\n  left: 67%;\n}\n\n/* #head ion-slides .imgslide {\n  margin:0;\n  padding:0;\n  display: block;\n  width: 40%;\n} */\n\n.content-box {\n  position: absolute;\n  top: 430px;\n  z-index: 1;\n  padding-bottom: 80px;\n}\n\n.content-box h6 {\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n}\n\ndiv.scrollmenu {\n  overflow: auto;\n  white-space: nowrap;\n}\n\ndiv.scrollmenu::-webkit-scrollbar {\n  display: none;\n}\n\ndiv.scrollmenu a {\n  display: inline-block;\n  color: white;\n  text-align: center;\n  padding: 14px;\n  text-decoration: none;\n}\n\ndiv.scrollmenu a:hover {\n  background-color: #777;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLHFCQUFBO0FBQUY7O0FBTUE7RUFDRSxXQUFBO0VBQ1UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUhaOztBQUtBO0VBQ0Usa0JBQUE7RUFDRSxRQUFBO0VBQ0EsU0FBQTtBQUZKOztBQU1BOzs7OztHQUFBOztBQU9BO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0FBSkY7O0FBS0U7RUFDRSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtBQUhKOztBQVFBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0FBTEY7O0FBUUE7RUFDRSxhQUFBO0FBTEY7O0FBUUE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtBQUxGOztBQVFBO0VBQ0Usc0JBQUE7QUFMRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmlvbi1jb250ZW50e1xuICAtLWJhY2tncm91bmQ6ICNmMWYzZjQ7XG4gIFxufVxuXG5cblxuLmJ0bi1jaXJjbGUuYnRuLWxnIHtcbiAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiA3cHggMTBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi50aW1pbmd7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDIwJTtcbiAgICBsZWZ0OiA2NyU7XG59XG5cblxuLyogI2hlYWQgaW9uLXNsaWRlcyAuaW1nc2xpZGUge1xuICBtYXJnaW46MDtcbiAgcGFkZGluZzowO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDQwJTtcbn0gKi9cblxuLmNvbnRlbnQtYm94e1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDMwcHg7XG4gIHotaW5kZXg6IDE7XG4gIHBhZGRpbmctYm90dG9tOiA4MHB4O1xuICBoNntcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIC13ZWJraXQtbGluZS1jbGFtcDogMTtcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICB9XG5cbn1cblxuZGl2LnNjcm9sbG1lbnUge1xuICBvdmVyZmxvdzogYXV0bztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgXG59XG5kaXYuc2Nyb2xsbWVudTo6LXdlYmtpdC1zY3JvbGxiYXJ7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmRpdi5zY3JvbGxtZW51IGEge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxNHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmRpdi5zY3JvbGxtZW51IGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzc3O1xuICBcbn0gIl19 */");

/***/ }),

/***/ "zpKS":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.page.html */ "WcN3");
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss */ "f6od");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _firestore_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../firestore-data.service */ "UbTl");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");









let HomePage = class HomePage {
    constructor(router, firestoreData, db, storage, navCtrl) {
        this.router = router;
        this.firestoreData = firestoreData;
        this.db = db;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.counter = [0, 1, 2, 3];
        this.testImage = "../../assets/icon/icon.png";
        //--------------------------
        this.brands = [];
        this.slides = [];
        this.categories = [];
        this.navigation = [];
        this.images = [];
        this.browsing = [];
        this.likeItem = [];
        this.savedItem = [];
        this.saveLater = [];
        // main slider
        this.sliderOpts = {
            autoplay: true,
            initialSlide: 0,
            speed: 1000
        };
        this.slidersOpts = {
            loop: true,
            slidesPerView: 2,
        };
        this.numberOfMessage = 0;
        //highlight icon in the header
        this.slidersheading = {
            loop: true,
            slidesPerView: 5,
        };
        this.connected = this.firestoreData.getConnexionState();
        this.navigation = ["Buy by categories", "Wish List", "Recent Views", "Today Deals", "By Tomorrow", "Kindness", "Policy", "profil"];
        //this.getBrowsingHistoric();
        //this.getLikeItems();
        //this.getSavedItems();
        //this.slides = this.firebaseData.getSlidesDatabase();
        this.product$ = this.firestoreData.getProducts();
        this.homepane$ = this.firestoreData.getHomeDesign();
        this.categories$ = this.firestoreData.getCategories();
        this.brands$ = this.firestoreData.getBrands();
        this.slides$ = this.firestoreData.getMainSlides();
        //this.brands = this.firebaseData.getBrandsDatabase();
        //this.hasToshow('best_seller');
    }
    reload() {
        globalThis.location.reload();
    }
    imgDidLoad() {
        document.getElementById('img').style.display = "none";
    }
    submitquery(contact, question) {
        if (question !== '' && contact !== '') {
            contact = '';
            question = '';
        }
    }
    calculateDiscount(price, percentage, endTime) {
        let retail = price / 100 * percentage;
        let discount = price - retail;
        this.comptor(endTime);
        return discount;
    }
    comptor(timing) {
        // Set the date we're counting down to
        //var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();
        var countDownDate = new Date(timing).getTime();
        // Update the count down every 1 second
        var x = setInterval(function () {
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
            document.getElementById("HR").innerHTML = hours + "&nbsp;hr ";
            document.getElementById("MN").innerHTML = minutes + "&nbsp;&nbsp;m ";
            document.getElementById("SEC").innerHTML = seconds + "&nbsp;&nbsp;s ";
            // If the count down is finished, write some text
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("demo").innerHTML = "EXPIRED";
            }
        }, 1000);
    }
    /*  search(){
       if(this.query!=='' || this.query!==null){
         const navigationExtras: NavigationExtras = {
           state: {
             query: this.query
           }
         };
        
         this.router.navigate(['/searchquery'], navigationExtras);
       }
      
     } */
    getBrowsingHistoric() {
        this.storage.get("browsing").then((historic) => {
            if (historic.length > 4 && historic !== null) {
                this.browsing = [historic[0], historic[1], historic[historic.length - 1], historic[2]];
            }
        }).catch(err => {
            console.log("no browsing data found");
        });
        return this.browsing;
    }
    getLikeItems() {
        this.storage.get("likeItem").then((liked) => {
            if (liked.length !== 0 && liked !== null) {
                this.likeItem = liked;
            }
        }).catch(err => {
            console.log("no like items data found");
        });
        return this.likeItem;
    }
    getSavedItems() {
        this.storage.get("savedforlater").then((saved) => {
            if (saved.length !== 0 && saved !== null) {
                for (let savedItem of saved) {
                    this.savedItem.push(savedItem);
                }
            }
        }).catch(err => {
            console.log("no saved items data found");
        });
        return this.savedItem;
    }
    /*
    * Drop to link with data transfer
    */
    navigateTo(route) {
        if (route !== 'Kindness' && route !== 'Policy' && route !== 'Profil') {
            const navigationExtras = {
                state: {
                    direction: route
                }
            };
            this.router.navigate(['/historic'], navigationExtras);
        }
        else if (route == 'Kindness') {
            this.navCtrl.navigateForward('/helpcenter');
        }
        else if (route == 'Policy') {
            this.navCtrl.navigateForward('/policy');
        }
        else if (route == 'Profil') {
            this.navCtrl.navigateForward('/account');
        }
    }
    linkTo(param, optional) {
        const navigationExtras = {
            state: {
                item: param,
                option: optional
            }
        };
        this.router.navigate(['/categories'], navigationExtras);
    }
    goTo(item) {
        this.navCtrl.navigateForward("/product?productId=" + item.code);
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _firestore_data_service__WEBPACK_IMPORTED_MODULE_6__["FirestoreDataService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestore"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"] }
];
HomePage.propDecorators = {
    imageRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['image', { static: false },] }]
};
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map