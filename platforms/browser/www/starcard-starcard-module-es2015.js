(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["starcard-starcard-module"],{

/***/ "2XHc":
/*!*******************************************!*\
  !*** ./src/app/starcard/starcard.page.ts ***!
  \*******************************************/
/*! exports provided: StarcardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarcardPage", function() { return StarcardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_starcard_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./starcard.page.html */ "BPua");
/* harmony import */ var _starcard_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./starcard.page.scss */ "2Y+N");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! util */ "MCLT");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _firestore_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../firestore-data.service */ "UbTl");










let StarcardPage = class StarcardPage {
    constructor(afirestore, alertcontroller, storage, loadingcontroller, fireAuth, fsdataService) {
        this.afirestore = afirestore;
        this.alertcontroller = alertcontroller;
        this.storage = storage;
        this.loadingcontroller = loadingcontroller;
        this.fireAuth = fireAuth;
        this.fsdataService = fsdataService;
        this.devise = ['USD', 'HTG'];
        this.starReedemUSD = ['20', '50', '100', '200', '250', '500'];
        this.starReedemHTG = ['250', '500', '750', '1000', '5000', '10.000'];
        this.tagDefaultColor = Array(this.devise.length).fill("medium");
        this.slidersOpts = {
            loop: true,
            slidesPerView: 2,
        };
        this.starcard = {};
        this.starcard.transactions = [];
        this.starcard.reedem = [];
        this.paymentMethod = [];
    }
    ngOnInit() {
        this.fireAuth.authState.subscribe(auth => {
            if (!auth.emailVerified) {
                this.connected = false;
            }
            else {
                this.connected = true;
                this.getCardAccount();
            }
        });
    }
    getPaymethod() {
        this.storage.get("paymethod").then((data) => {
            this.paymentMethod = data;
            if (this.paymentMethod.length !== 0 && this.paymentMethod !== null) {
                this.paymentMethod.forEach(method => {
                    if (method.default == true) {
                        this.defaultMethod = method;
                    }
                });
            }
        }).catch(err => {
            console.log("cart not found or empty");
        });
    }
    refill(devise, amount) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.getPaymethod();
            if (devise == 'USD') {
                let paypal = this.paymentMethod.find((paymethod) => paymethod.method == 'PayPal' && paymethod.default == true);
                let mc = this.paymentMethod.find((paymethod) => paymethod.method == 'MasterCard' && paymethod.default == true);
                if (!Object(util__WEBPACK_IMPORTED_MODULE_7__["isNullOrUndefined"])(paypal)) {
                }
                else if (!Object(util__WEBPACK_IMPORTED_MODULE_7__["isNullOrUndefined"])(mc)) {
                }
                else {
                    const alert = yield this.alertcontroller.create({
                        cssClass: 'my-custom-class',
                        header: 'Alert',
                        subHeader: 'Subtitle',
                        message: 'No default payment method available.',
                        buttons: ['Ok']
                    });
                    yield alert.present();
                }
            }
            if (devise == 'HTG') {
            }
        });
    }
    crypto() {
        let _character = ['*', 'C', ')', '#', '&', '!', '?', '%', '@', '^', ':', 'D', '?'];
        let sequence = Math.floor(Math.random() * 100);
        let index = Math.floor(Math.random() * 12);
        let encryption = _character[index] + _character[index + 1] + sequence + "-" + Date.now();
        return encryption;
    }
    getCardAccount() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let userId = (yield this.fireAuth.currentUser).uid;
            this.card = new Array();
            this.cardCollection = this.afirestore.collection('starcard');
            this.cardCollection.doc(userId).snapshotChanges().subscribe(card => {
                this.isRegistred = true;
                this.starcard.id = card.payload.get("id");
                this.starcard.devise = card.payload.get("devise");
                this.starcard.amount = card.payload.get("amount");
                this.starcard.reedem = card.payload.get("reedem");
                this.starcard.transactions = card.payload.get("transactions");
                this.starcard.activation = card.payload.get("activation");
            }).unsubscribe();
        });
    }
    register(card) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.cardCollection = this.afirestore.collection('starcard');
            if (card.devise !== "" && card.devise !== null) {
                this.starcard.id = this.crypto();
                this.starcard.amount = 0.00;
                this.starcard.reedem = [];
                this.starcard.transactions = [];
                this.starcard.activation = true;
                this.cardCollection.doc((yield this.fireAuth.currentUser).uid).set(this.starcard).then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    const loading = yield this.loadingcontroller.create({
                        cssClass: 'my-custom-class',
                        message: 'Please wait...',
                        duration: 2000
                    }).then((loaded) => {
                        loaded.present();
                        loaded.onDidDismiss().then((dismiss) => {
                            this.isRegistred = true;
                            console.log(dismiss);
                            let starmethod = {
                                id: this.starcard.id,
                                method: 'StarCard',
                                provider: 'KATALOG',
                                credential: {},
                                default: false
                            };
                            this.saveMethod(starmethod);
                            this.getCardAccount();
                        });
                    });
                }), (rejected) => {
                    console.log("reason" + rejected);
                    this.starcard.activation = false;
                });
            }
            else {
                const alert = yield this.alertcontroller.create({
                    cssClass: 'my-custom-class',
                    header: 'Alert',
                    subHeader: 'Subtitle',
                    message: 'please select a currency before.',
                    buttons: ['Ok']
                });
                yield alert.present();
            }
        });
    }
    saveMethod(method) {
        let isAdded = false;
        this.storage.get("paymethod").then((data) => {
            if (data === null || data.length === 0) {
                data = [];
                data.push(method);
            }
            else {
                for (let item of data) {
                    if (item.id === method.id) {
                        item.method = method.id;
                        item.provider = method.provider;
                        item.credential.options = method.credential.options;
                        item.credential.code = method.credential.code;
                        item.credential.email = method.credential.email;
                        item.credential.phone = method.credential.phone;
                        isAdded = true;
                    }
                }
                if (!isAdded) {
                    data.push(method);
                }
            }
        });
    }
    selected(name) {
        this.starcard.devise = name;
    }
    changeTagColor(i) {
        if (this.tagDefaultColor[i] === "medium") {
            this.tagDefaultColor[0] = "medium";
            this.tagDefaultColor[1] = "medium";
            this.tagDefaultColor[i] = "primary";
        }
        else {
            // event.target.setAttribute('color', 'secondary') this is redundant
        }
    }
};
StarcardPage.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"] },
    { type: _firestore_data_service__WEBPACK_IMPORTED_MODULE_9__["FirestoreDataService"] }
];
StarcardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-starcard',
        template: _raw_loader_starcard_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_starcard_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], StarcardPage);



/***/ }),

/***/ "2Y+N":
/*!*********************************************!*\
  !*** ./src/app/starcard/starcard.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn-register {\n  font-size: 12px;\n}\n\nion-select {\n  width: 120px;\n}\n\n.my-custom-class {\n  --background: #222;\n  --spinner-color: #fff;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhcmNhcmQvc3RhcmNhcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQUNKOztBQUNDO0VBQ0ksWUFBQTtBQUVMOztBQUFDO0VBQ0csa0JBQUE7RUFDQSxxQkFBQTtFQUVBLFdBQUE7QUFFSiIsImZpbGUiOiJzcmMvYXBwL3N0YXJjYXJkL3N0YXJjYXJkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4tcmVnaXN0ZXJ7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuIH1cbiBpb24tc2VsZWN0e1xuICAgICB3aWR0aDogMTIwcHg7XG4gfVxuIC5teS1jdXN0b20tY2xhc3Mge1xuICAgIC0tYmFja2dyb3VuZDogIzIyMjtcbiAgICAtLXNwaW5uZXItY29sb3I6ICNmZmY7XG4gIFxuICAgIGNvbG9yOiAjZmZmO1xuICB9Il19 */");

/***/ }),

/***/ "BPua":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/starcard/starcard.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header  mode=ios>\n  <ion-toolbar  color=\"dark\">\n    <ion-buttons slot=\"start\">\n   <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-buttons>\n      <ion-title  class=\"width\" mode=ios >\n        <ion-text size=\"LARGE\" color=\"warning\">\n          K</ion-text>\n          <ion-text color=\"danger\"><ion-icon size=\"LARGE\" name=cart></ion-icon></ion-text>\n          <ion-text >ta</ion-text><img title=\"app header\" alt=\"image icon\" class=\"icon\" src=\"assets/icon/lipstick.png\"/><ion-text>og</ion-text>\n        </ion-title>\n    </ion-buttons>\n\n  </ion-toolbar>\n  <ion-buttons>\n    <ion-item-divider>\n      <ion-label>Pay faster with your starcard</ion-label>\n    </ion-item-divider>\n  </ion-buttons>\n </ion-header>\n\n<ion-content>\n\n  <div *ngIf=\"connected==false\" name=\"authentification\" class=\"ion-padding\">\n    <ion-buttons>\n      <ion-button routerLink=\"/login\" routerDirection=\"forward\" expand=\"block\">SIGN IN BEFORE USE STARCARD</ion-button>\n    </ion-buttons>\n  </div>\n  <div *ngIf=\"connected==true\" name=\"starcard\" class=\"ion-padding\">\n\n    <div *ngIf=\"!starcard.activation\" name=\"starcard_activation\">\n      <ion-card>\n        <ion-item>\n          <ion-card-title class=\"ion-padding\">STAR CARD \n          </ion-card-title>\n          <ion-buttons slot=\"end\">\n            <ion-radio-group >\n              <ion-chip [id]=\"child.id\" [color]=\"tagDefaultColor[i]\" (click)=\"changeTagColor(i)\" *ngFor=\"let child of devise;let i = index\">\n                <ion-radio (click)=\"selected(child)\" ></ion-radio><ion-label>{{child}}</ion-label>\n              </ion-chip>\n            </ion-radio-group>\n            </ion-buttons>\n        </ion-item>\n       \n        <ion-card-subtitle class=\"ion-padding\">Register to STAR CARD and benefits 10% off</ion-card-subtitle>\n        <ion-button size=\"small\" (click)=\"register(starcard)\" class=\"btn-register\" expand=\"block\" >Register Now</ion-button>\n        <ion-card-header>STAR CARD is an original KATALOG payment method which is secure and help you to pay easily</ion-card-header>\n        </ion-card>\n       \n    </div>\n    <div *ngIf=\"starcard.activation && isRegistred==true\" name=\"starcard_content\">\n\n      <div class=\"container\">\n        <ion-item>\n          <ion-label>Star Card balance :</ion-label>\n          <ion-badge slot=\"end\" color=\"medium\">{{starcard.amount}}</ion-badge>\n        </ion-item>\n      </div>\n      <div class=\"container\">\n        <ion-item>\n          <ion-label>Reedem your Star Card</ion-label>\n          <ion-chip slot=\"end\">Devise : {{starcard.devise}}</ion-chip>\n        </ion-item>\n        <ion-item-sliding>\n          <ion-slides [options]=\"slidersOpts\">\n            <ng-container *ngIf=\"starcard.devise=='USD'\">\n              <ion-slide (click)=\"refill('USD',star)\" *ngFor=\"let star of starReedemUSD\"><ion-card>\n                <ion-card-content>\n                  <ion-card-title>{{star|currency}}</ion-card-title>\n                  <ion-card-subtitle>Add {{star|currency}} to your star card</ion-card-subtitle>\n                </ion-card-content>\n                </ion-card></ion-slide>\n            </ng-container>\n            <ng-container *ngIf=\"starcard.devise=='HTG'\">\n              <ion-slide *ngFor=\"let star of starReedemHTG\"><ion-card>\n                <ion-card-content>\n                  <ion-card-title>{{star}} gdes</ion-card-title>\n                  <ion-card-subtitle>Add {{star}} gdes to your star card</ion-card-subtitle>\n                </ion-card-content>\n                </ion-card></ion-slide>\n            </ng-container>\n          \n    \n          </ion-slides>\n        </ion-item-sliding>\n      </div>\n    \n      <div class=\"container\">\n        <ion-list>\n          <ion-item><ion-label>Reedem Historic</ion-label></ion-item>\n          <ion-row>\n            <ion-col size=\"7\"><b>Amount</b></ion-col>\n            <ion-col ><b>purchased date</b></ion-col>\n          </ion-row>\n          <ion-row *ngFor=\"let reedem of starcard.reedem\">\n            <ion-col size=\"7\"><ion-label>{{reedem.amount}}</ion-label></ion-col>\n            <ion-col ><ion-label>{{reedem.date|date}}</ion-label></ion-col>\n          </ion-row>\n          <ion-item><ion-label>Total Refilling</ion-label>\n                    <ion-badge slot=\"end\">0.00$</ion-badge>\n          </ion-item>\n        </ion-list>\n        \n      </div>\n    \n      <div class=\"container\">\n        <ion-list>\n          <ion-item><ion-label>Transactions</ion-label></ion-item>\n          <ion-row >\n            <ion-col size=\"4\"><b>Order Id</b></ion-col>\n            <ion-col size=\"4\"><b>Amount</b></ion-col>\n            <ion-col ><b>Transaction date</b></ion-col>\n          </ion-row>\n          <ion-row *ngFor=\"let transac of starcard.transactions\">\n            <ion-col size=\"4\"><ion-label> {{transac.orderId}} </ion-label></ion-col>\n            <ion-col size=\"4\"><ion-label>{{transac.amount}}</ion-label></ion-col>\n            <ion-col ><ion-label>{{transac.date|date}}</ion-label></ion-col>\n          </ion-row>\n          <ion-item><ion-label>Total Transactions</ion-label>\n                    <ion-badge slot=\"end\">0.00$</ion-badge>\n          </ion-item>\n        </ion-list>\n      </div>\n    </div>\n\n  </div>\n  \n \n</ion-content>\n<ion-footer>\n  <ion-toolbar class=\"footer\">\n    <ion-row round>\n      <ion-col offset-1 col-10 routerLink=\"/home\"  routerDirection=\"forward\">\n        <ion-icon class=\"footerIcon\" name=\"home-outline\"></ion-icon>\n        <div class=\"touch\">\n        <h4>Home</h4>\n       </div>  \n    </ion-col>\n      <ion-col offset-1 col-10 routerLink=\"/cart\"  routerDirection=\"forward\">\n        <ion-icon class=\"footerIcon\" name=\"cart-outline\"></ion-icon>\n        <div class=\"touch\">\n          <h4>Cart</h4>\n         </div> \n      </ion-col>\n      <ion-col offset-1 col-10 routerLink=\"/profil\"  routerDirection=\"forward\">\n        <ion-icon class=\"footerIcon\" name=\"person-outline\"></ion-icon>\n        <div class=\"touch\">\n          <h4>Profil</h4>\n         </div> \n      </ion-col>\n      <ion-col offset-1 col-10 routerLink=\"/order\"  routerDirection=\"forward\">\n        <ion-icon class=\"footerIcon\" name=\"cube-outline\"></ion-icon>\n        <div class=\"touch\">\n          <h4>Order...</h4>\n         </div> \n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>");

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

/***/ "YWbQ":
/*!*********************************************!*\
  !*** ./src/app/starcard/starcard.module.ts ***!
  \*********************************************/
/*! exports provided: StarcardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarcardPageModule", function() { return StarcardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _starcard_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./starcard-routing.module */ "crfo");
/* harmony import */ var _starcard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./starcard.page */ "2XHc");







let StarcardPageModule = class StarcardPageModule {
};
StarcardPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _starcard_routing_module__WEBPACK_IMPORTED_MODULE_5__["StarcardPageRoutingModule"]
        ],
        declarations: [_starcard_page__WEBPACK_IMPORTED_MODULE_6__["StarcardPage"]]
    })
], StarcardPageModule);



/***/ }),

/***/ "crfo":
/*!*****************************************************!*\
  !*** ./src/app/starcard/starcard-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: StarcardPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarcardPageRoutingModule", function() { return StarcardPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _starcard_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./starcard.page */ "2XHc");




const routes = [
    {
        path: '',
        component: _starcard_page__WEBPACK_IMPORTED_MODULE_3__["StarcardPage"]
    }
];
let StarcardPageRoutingModule = class StarcardPageRoutingModule {
};
StarcardPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], StarcardPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=starcard-starcard-module-es2015.js.map