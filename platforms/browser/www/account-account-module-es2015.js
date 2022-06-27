(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-account-module"],{

/***/ "+aji":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/account.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header  mode=ios>\n  <ion-toolbar  style=\" --background: #4b7bcde8;\">\n    <ion-buttons slot=\"start\">\n   <ion-back-button color=\"light\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons>\n      <ion-title class=\"width\">\n        <ion-text size=\"LARGE\" color=\"warning\">\n          K</ion-text>\n        <ion-text color=\"danger\">\n          <ion-icon size=\"LARGE\" name=cart></ion-icon>\n        </ion-text>\n        <ion-text color=\"light\">TALOG</ion-text>\n      </ion-title>\n    </ion-buttons>\n  </ion-toolbar>\n </ion-header>\n\n<ion-content>\n  <div class=\"alert alert-tertiary\" style=\"background: #7ea4e6f5;\" >\n      <h2 style=\"color:white;\">{{welcomeWord}}</h2>\n  </div>\n  \n\n  <div class=\"p-4 border alert alert-tertiary\">\n    <div class=\"container-fluid row border p-4\">\n\n      <div class=\"col-md\">\n        <small *ngIf=\"browsing.length!==0\" style=\"padding-left: 10px; \n        padding-right: 10px;\n        font-size: 16px;\n        font-weight: bold;\" class=\"indicator\">{{browsing.length}}</small>\n        <ion-chip>\n          <ion-label style=\"font-weight:bold; font-size: 18px;\">Historic</ion-label>\n        </ion-chip>\n      </div>\n\n     <div class=\"col-md\" routerLink=\"/helpcenter\" routerDirection=\"forward\">\n        <ion-chip>\n        <ion-label style=\"font-weight:bold; font-size: 18px;\">Help</ion-label>\n      </ion-chip>\n    </div>\n\n    <div class=\"col-md\" routerLink=\"/order\" routerDirection=\"forward\">\n      <small *ngIf=\"orders$|async as order\" style=\"padding-left: 10px; \n      padding-right: 10px;\n      font-size: 16px;\n      font-weight: bold;\" class=\"indicator\">{{order.length}}</small>\n      <ion-chip>\n      <ion-label style=\"font-weight:bold; font-size: 18px;\">Orders</ion-label>\n    </ion-chip>\n    </div>\n\n    <div class=\"col-md\" routerLink=\"/cart\" routerDirection=\"forward\">\n      <small *ngIf=\"cartItem.length!==0\" style=\"padding-left: 10px; \n        padding-right: 10px;\n        font-size: 16px;\n        font-weight: bold;\" class=\"indicator\">{{cartItem.length}}</small>\n      <ion-chip>\n      <ion-label style=\"font-weight:bold; font-size: 18px;\">Cart</ion-label>\n    </ion-chip>\n  </div>\n\n  <div class=\"col-md\" (click)=\"navigateTo('Wish List')\">\n    <small *ngIf=\"likeItem.length!==0\" style=\"padding-left: 10px; \n    padding-right: 10px;\n    font-size: 16px;\n    font-weight: bold;\" class=\"indicator\">{{likeItem.length}}</small>\n    <ion-chip>\n    <ion-label style=\"font-weight:bold; font-size: 18px;\">Favorites</ion-label>\n  </ion-chip>\n  </div>\n    </div>\n  </div>\n \n  \n\n    <div *ngIf=\"connected\" class=\"col-md-12  alert alert-tertiary border p-4\">\n      <h4>Recent Orders</h4>\n      <ng-container *ngIf=\"orders$|async as order\">\n        <ion-slides style=\"margin-bottom:20px;\" [options]=\"{ slidesPerView: '3', zoom: false, grabCursor: true }\">\n          <ng-container *ngFor=\"let item of orders$| async\">\n            <ion-slide style=\"margin: 20px\">\n              <ion-item-group>\n                <ion-img [src]=\"item.items.picture\" style=\"max-height: 300px; max-width: 300px\"></ion-img>\n                <ion-row>\n                  <ion-badge color=\"danger\">\n                    <h5>{{item.items.price|currency}}</h5>\n                  </ion-badge>\n                </ion-row>\n              </ion-item-group>\n            </ion-slide>\n          </ng-container>\n            </ion-slides>\n            <ion-label routerLink=\"/order\" routerDirection=\"forward\" color=\"tertiary\">see all orders</ion-label>\n            <div class=\"alert alert-default\" *ngIf=\"order.length==0\">\n              <ion-button class=\"border\" expand=\"block\" fill=\"clear\">No recent orders found, start shopping now!</ion-button>\n            </div>\n          </ng-container>\n      \n    </div>\n    \n    <div class=\"col-md-12 alert alert-tertiary border p-4\">\n      <h4>Your cart</h4>\n      <ng-container *ngIf=\"cartItem.length!==0 && isOnline\">\n        <ion-slides style=\"margin-bottom:20px;\" [options]=\"{ slidesPerView: '3', zoom: false, grabCursor: true }\">\n          <ng-container *ngFor=\"let cart of cartItem\">\n            <ion-slide style=\"margin: 20px\">\n              <ion-item-group>\n                  <img [src]=\"cart.picture\" style=\"max-height: 300px; max-width: 300px; \"/>\n                <ion-label>\n                    <p>{{cart.description}}</p>\n                    <h5 style=\"font-weight: bold; font-size:16px;\">{{cart.price|currency}}</h5>\n                </ion-label>\n              </ion-item-group>\n            </ion-slide>\n          </ng-container>\n            </ion-slides>\n            <ion-label routerLink=\"/cart\" routerDirection=\"forward\" color=\"tertiary\">Visit my cart and checkout now</ion-label>\n      </ng-container>\n      <div class=\"alert alert-default\" *ngIf=\"cartItem.length==0 && isOnline\">\n        <ion-button class=\"border\" expand=\"block\" fill=\"clear\">Your cart is empty, start adding new items!</ion-button>\n      </div>\n      <ion-chip color=\"danger\" *ngIf=\"!isOnline\">\n        <ion-icon size=\"large\" name=\"alert-circle\"></ion-icon>\n        <h4>No internet connection</h4>\n      </ion-chip> \n    </div>\n\n    <div class=\"col-md-12 alert alert-tertiary border p-4\">\n      <h4>Favorites</h4>\n      <ng-container *ngIf=\"likeItem.length!==0 && isOnline\">\n        <ion-slides style=\"margin-bottom:20px;\" [options]=\"{ slidesPerView: '3', zoom: false, grabCursor: true }\">\n          <ng-container *ngFor=\"let like of likeItem\">\n            <ion-slide style=\"margin: 20px\">\n              <ion-item-group>\n                <ion-img [src]=\"like.models[0].pictures[0]\" style=\"max-height: 300px; max-width: 300px\"></ion-img>\n                <ion-row>\n                  <ion-badge color=\"danger\">\n                    <h5>{{like.caracteristic[0].price|currency}}</h5>\n                  </ion-badge>\n                </ion-row>\n              </ion-item-group>\n            </ion-slide>\n          </ng-container>\n            </ion-slides>\n            <ion-label (click)=\"navigateTo('Wish List')\"   color=\"tertiary\">see the complete list</ion-label>\n      </ng-container>\n      <div class=\"alert alert-default\" *ngIf=\"likeItem.length==0 && isOnline\">\n        <ion-button class=\"border\" expand=\"block\" fill=\"clear\">Your list is empty, start adding new items!</ion-button>\n      </div> \n      <ion-chip color=\"danger\" *ngIf=\"!isOnline\">\n        <ion-icon size=\"large\" name=\"alert-circle\"></ion-icon>\n        <h4>No internet connection</h4>\n      </ion-chip> \n    </div>\n\n    <div class=\"col-md-12 alert alert-tertiary border p-4\">\n      <h4>Recent Browsing Items</h4>\n      <ng-container *ngIf=\"browsing.length!==0 && isOnline\">\n        <ion-slides style=\"margin-bottom:20px;\" [options]=\"{ slidesPerView: '3', zoom: false, grabCursor: true }\">\n          <ng-container *ngFor=\"let historic of browsing\">\n            <ion-slide style=\"margin: 20px\">\n              <ion-item-group>\n                <ion-img [src]=\"historic.models[0].pictures[0]\" style=\"max-height: 300px; max-width: 300px\"></ion-img>\n                <ion-row>\n                  <ion-badge color=\"danger\">\n                    <h5>{{historic.caracteristic[0].price|currency}}</h5>\n                  </ion-badge>\n                </ion-row>\n              </ion-item-group>\n            </ion-slide>\n          </ng-container>\n            </ion-slides>\n            <ion-label (click)=\"navigateTo('Recent Views')\"  color=\"tertiary\">View all recent browsing items</ion-label>\n      </ng-container>\n      <div class=\"alert alert-default\" *ngIf=\"browsing.length==0 && isOnline\">\n        <ion-button class=\"border\" expand=\"block\" fill=\"clear\">Browsing Historic empty, start shopping now!</ion-button>\n      </div>\n      <ion-chip color=\"danger\" *ngIf=\"!isOnline\">\n        <ion-icon size=\"large\" name=\"alert-circle\"></ion-icon>\n        <h4>No internet connection</h4>\n      </ion-chip>\n    </div>\n\n    <div class=\"col-md-12 alert alert-tertiary border p-4\">\n      <h4>Login and password</h4>\n      <div *ngIf=\"connected\" class=\"container\">\n        <ion-card>\n          <ion-card-title class=\"ion-padding\"> <h4>Change Password</h4></ion-card-title>\n          <ion-card-content>\n            <ng-form [formGroup]=\"passwordForm\" (ngSubmit)=\"submit()\">\n              <ion-item>\n                <ion-chip>\n                  <ion-input type=\"password\" class=\"field\" formControlName=\"old\" placeholder=\"Old Password\"></ion-input>\n                         </ion-chip>\n              </ion-item>\n                <div *ngFor=\"let error of errorMessages.password\" class=\"padding-left\">\n                <ng-container *ngIf=\"getOldPassword().hasError(error.type) && (getOldPassword().dirty || getOldPassword().touched)\">\n                  <small style=\"color: red;\" class=\"error-message\">{{error.message}}</small>\n                </ng-container>\n              </div>\n              <ion-item>\n                <ion-chip>\n                  <ion-input type=\"password\" class=\"field\" formControlName=\"new\" placeholder=\"New Password\"></ion-input>\n                   </ion-chip>\n              </ion-item>\n               <div *ngFor=\"let error of errorMessages.password\" class=\"padding-left\">\n                <ng-container *ngIf=\"getNewPassword().hasError(error.type) && (getNewPassword().dirty || getNewPassword().touched)\">\n                  <small style=\"color: red;\"  class=\"error-message\">{{error.message}}</small>\n                </ng-container>\n              </div>\n              <ion-item>\n                <ion-button expand=\"block\" type=\"submit\">Change password</ion-button>\n              </ion-item>\n              \n            </ng-form>\n          </ion-card-content>\n        </ion-card>\n       \n      \n      </div>\n\n      <div class=\"container\">\n        <ion-card>\n          <ion-card-title class=\"ion-padding\">Connection</ion-card-title>\n          <ion-card-content>\n            <ion-button *ngIf=\"!connected\" expand=\"block\" color=\"secondary\" routerLink=\"/login\" routerDirection=\"forward\">Sign In</ion-button>\n            <ion-button *ngIf=\"connected\" expand=\"block\" color=\"medium\" (click)=\"signout()\">Sign Out</ion-button>\n          </ion-card-content>\n        </ion-card>\n         </div>\n\n    </div>\n    \n\n  \n</ion-content>\n");

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

/***/ "jcJX":
/*!*******************************************!*\
  !*** ./src/app/account/account.module.ts ***!
  \*******************************************/
/*! exports provided: AccountPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPageModule", function() { return AccountPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _sharedviews_sharedviews_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sharedviews/sharedviews.module */ "l+lL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _account_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account-routing.module */ "sGj0");
/* harmony import */ var _account_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./account.page */ "mdzQ");









let AccountPageModule = class AccountPageModule {
};
AccountPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _sharedviews_sharedviews_module__WEBPACK_IMPORTED_MODULE_4__["SharedviewsModule"],
            _account_routing_module__WEBPACK_IMPORTED_MODULE_6__["AccountPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_account_page__WEBPACK_IMPORTED_MODULE_7__["AccountPage"]]
    })
], AccountPageModule);



/***/ }),

/***/ "mdzQ":
/*!*****************************************!*\
  !*** ./src/app/account/account.page.ts ***!
  \*****************************************/
/*! exports provided: AccountPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPage", function() { return AccountPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_account_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./account.page.html */ "+aji");
/* harmony import */ var _account_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./account.page.scss */ "n3U/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var src_models_user__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/models/user */ "Oj1a");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _firestore_data_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../firestore-data.service */ "UbTl");












let AccountPage = class AccountPage {
    constructor(formBuilder, fireauth, router, afstore, fireService, loadingcontroller, storage) {
        this.formBuilder = formBuilder;
        this.fireauth = fireauth;
        this.router = router;
        this.afstore = afstore;
        this.fireService = fireService;
        this.loadingcontroller = loadingcontroller;
        this.storage = storage;
        this.browsing = [];
        this.likeItem = [];
        this.cartItem = [];
        this.connected = false;
        this.isOnline = false;
        this.welcomeWord = '';
        this.passwordForm = this.formBuilder.group({
            old: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]],
            new: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]]
        });
        this.errorMessages = {
            password: [
                { type: 'required', message: 'Password is fully required' },
                { type: 'pattern', message: 'Password must be at least 8 characters with digits and uppercase' }
            ]
        };
        this.isOnline = this.fireService.getConnexionState();
        this.getBrowsingHistoric();
        this.getLikeItems();
        this.getCartItems();
        this.getUid();
        this.fireauth.authState.subscribe(auth => {
            if (!auth) {
                this.connected = false;
                this.welcomeWord = 'Manage your account';
            }
            else {
                this.connected = true;
                this.getUser(auth.uid);
            }
        });
    }
    ngOnInit() {
    }
    submit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let correctpass = false;
            let userId = (yield this.fireauth.currentUser).uid;
            this.afstore.collection('user').doc(userId).get().subscribe(obs => {
                if (this.passwordForm.value.old == obs.get('password')) {
                    correctpass = true;
                }
            });
            if (correctpass) {
                this.fireauth.currentUser.then((user) => {
                    user.updatePassword(this.passwordForm.value.new);
                }).then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    const loading = yield this.loadingcontroller.create({
                        cssClass: 'my-custom-class',
                        message: 'Please wait...',
                        duration: 2000
                    }).then((loaded) => {
                        loaded.present();
                        loaded.onDidDismiss().then((dismiss) => {
                            this.passwordForm.value.new = null;
                            this.passwordForm.value.old = null;
                            console.log(dismiss);
                        });
                    });
                }));
            }
            else {
                this.passwordForm.value.new = null;
                this.passwordForm.value.old = null;
            }
        });
    }
    signout() {
        this.fireauth.signOut().then(() => { this.storage.remove("user"); });
    }
    getOldPassword() {
        return this.passwordForm.get('old');
    }
    getNewPassword() {
        return this.passwordForm.get('new');
    }
    getUser(userUID) {
        this.afstore.collection("user").doc(userUID).get().subscribe(user => {
            this.user = new src_models_user__WEBPACK_IMPORTED_MODULE_9__["User"](user.data());
            this.welcomeWord = 'Welcome ' + this.user.name;
        });
    }
    getUid() {
        this.storage.get("user").then((uid) => {
            this.userId = uid;
            this.orders$ = this.fireService.getOrder(this.userId);
        });
    }
    getBrowsingHistoric() {
        this.storage.get("browsing").then((historic) => {
            if (historic.length !== 0 && historic !== null) {
                this.browsing = historic;
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
    getCartItems() {
        this.storage.get("cart").then((cart) => {
            if (cart.length !== 0 && cart !== null) {
                this.cartItem = cart;
            }
        }).catch(err => {
            console.log("no like items data found");
        });
        return this.likeItem;
    }
    navigateTo(route) {
        const navigationExtras = {
            state: {
                direction: route
            }
        };
        this.router.navigate(['/historic'], navigationExtras);
    }
};
AccountPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"] },
    { type: _firestore_data_service__WEBPACK_IMPORTED_MODULE_11__["FirestoreDataService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"] }
];
AccountPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-account',
        template: _raw_loader_account_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_account_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AccountPage);



/***/ }),

/***/ "n3U/":
/*!*******************************************!*\
  !*** ./src/app/account/account.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".padding-left {\n  padding-left: 5%;\n}\n\n.field {\n  width: 150vw;\n  margin: 0 auto;\n}\n\n.indicator {\n  position: absolute;\n  margin-top: -20px;\n  background: red;\n  border-radius: 50%;\n  padding: 5px;\n}\n\nion-content {\n  --background: #f1f3f4;\n}\n\nion-content div {\n  background: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9hY2NvdW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxZQUFBO0VBQWMsY0FBQTtBQUdsQjs7QUFEQTtFQUNJLGtCQUFBO0VBQ0MsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBSUw7O0FBRkE7RUFDSSxxQkFBQTtBQUtKOztBQUpJO0VBQ0ksbUJBQUE7QUFNUiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvYWNjb3VudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFkZGluZy1sZWZ0e1xuICAgIHBhZGRpbmctbGVmdDogNSVcbn1cbi5maWVsZHtcbiAgICB3aWR0aDogMTUwdnc7IG1hcmdpbjogMCBhdXRvO1xufVxuLmluZGljYXRvcntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgIG1hcmdpbi10b3A6IC0yMHB4O1xuICAgICBiYWNrZ3JvdW5kOnJlZDsgXG4gICAgIGJvcmRlci1yYWRpdXM6IDUwJTsgXG4gICAgIHBhZGRpbmc6IDVweDtcbn1cbmlvbi1jb250ZW50e1xuICAgIC0tYmFja2dyb3VuZDogI2YxZjNmNDtcbiAgICBkaXZ7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmYgO1xuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ "sGj0":
/*!***************************************************!*\
  !*** ./src/app/account/account-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AccountPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPageRoutingModule", function() { return AccountPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _account_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account.page */ "mdzQ");




const routes = [
    {
        path: '',
        component: _account_page__WEBPACK_IMPORTED_MODULE_3__["AccountPage"]
    }
];
let AccountPageRoutingModule = class AccountPageRoutingModule {
};
AccountPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AccountPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=account-account-module-es2015.js.map