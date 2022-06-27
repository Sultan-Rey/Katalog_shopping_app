(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["helpcenter-helpcenter-module"],{

/***/ "3YcQ":
/*!***********************************************!*\
  !*** ./src/app/helpcenter/helpcenter.page.ts ***!
  \***********************************************/
/*! exports provided: HelpcenterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpcenterPage", function() { return HelpcenterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_helpcenter_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./helpcenter.page.html */ "GxP+");
/* harmony import */ var _helpcenter_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpcenter.page.scss */ "i/bV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _firestore_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../firestore-data.service */ "UbTl");







let HelpcenterPage = class HelpcenterPage {
    constructor(afAuth, ngfirestore, fdataService) {
        this.afAuth = afAuth;
        this.ngfirestore = ngfirestore;
        this.fdataService = fdataService;
        this.kindnessIntroSpeech = '';
        this.kindnessEndSpeech = '';
        this.dialogFlow = {
            introduction: ['hello! im kindness the IA, and Im here to help you. Please tell me what matter!', 'Hi, Im Kindness How can i make you happy!', 'Haloa, please select an option and I\'ll help you'],
            box1: false,
            box2: false,
            box3: false,
            box4: false,
            box3Option: false,
            transfer: false,
            happyMood: ['You Welcome!!', 'Apreciate see you!', 'That my lovely job', 'Please continue shopping for your favorites items'],
            sorryMood: ['Sorry that, i won\'t help i\'ll do better next time', 'Disapointed, maybe you want to talk with a real person ?', 'My Fault, let me know if you want me transfer your issue to another person']
        };
        this.afAuth.authState.subscribe(auth => {
            if (!auth) {
                this.connected = false;
            }
            else {
                this.msg = {};
                this.orderInfo = {};
                this.userId = auth.uid;
                //this.deleteMessage(this.userId);
                this.getMessages(this.userId);
                this.connected = true;
            }
        });
        this.kindnessIntroSpeech = this.dialogFlow.introduction[Math.floor(Math.random() * 2)];
    }
    ngOnInit() {
    }
    scenario(context) {
        if (context == 'ORDER') {
            if (!this.dialogFlow.box2 && !this.dialogFlow.box3) {
                this.dialogFlow.box1 = true;
                this.order = this.fdataService.getFirestoreOrder();
            }
        }
        if (context == 'ORDERINFO') {
            this.dialogFlow.box2 = true;
        }
        if (context == 'MORE_HELP') {
            this.kindnessEndSpeech = this.dialogFlow.sorryMood[Math.floor(Math.random() * 3)];
            this.dialogFlow.box3Option = true;
            this.dialogFlow.box3 = true;
        }
        if (context == 'END') {
            this.kindnessEndSpeech = this.dialogFlow.happyMood[Math.floor(Math.random() * 3)];
            this.dialogFlow.box3Option = false;
            this.dialogFlow.box3 = true;
        }
        if (context == 'BETTER') {
            this.dialogFlow.box4 = true;
        }
        if (context == 'TALK') {
            this.msg.author = this.userId;
            this.msg.content = 'Order Issue';
            this.msg.date_msg = new Date(Date.now());
            this.msg.object = "HELP_CENTER";
            this.msg.destination = "ADMIN";
            this.ngfirestore.collection('message').doc('ADMIN').collection('update').add(this.msg).then(() => {
                this.textMesage = "";
                this.dialogFlow.transfer = true;
            });
        }
        if (context == 'OTHER') {
            if (!this.dialogFlow.box1) {
                this.kindnessEndSpeech = '';
                this.dialogFlow.box3Option = true;
                this.dialogFlow.box3 = true;
            }
        }
    }
    orderInformation(info) {
        this.orderInfo = info;
        this.scenario('ORDERINFO');
    }
    sendMessage(textMessage) {
        if (this.dialogFlow.transfer) {
            if (textMessage != "") {
                this.msg.author = this.userId;
                this.msg.content = textMessage;
                this.msg.date_msg = new Date(Date.now());
                this.msg.object = "HELP_CENTER";
                this.msg.destination = "ADMIN";
                this.ngfirestore.collection('message').doc(this.userId).collection('help').add(this.msg).then(() => {
                    this.textMesage = "";
                });
            }
        }
        else {
            this.textMesage = "";
        }
    }
    getMessages(property) {
        this.message = new Array();
        this.messageCollection = this.ngfirestore.collection('message');
        this.msgDataFlux = this.messageCollection.doc(property).collection('help', ref => ref.orderBy('date_msg')).valueChanges();
        this.msgDataFlux.subscribe(observer => {
            this.message = [];
            observer.forEach(e => {
                this.message.push({
                    author: e.author,
                    content: e.content,
                    date_msg: e.dte_msg,
                    object: e.object,
                    destination: e.destination
                });
            });
        });
    }
    deleteMessage(property) {
        this.ngfirestore
            .collection('message').doc(property).collection('help')
            .get()
            .toPromise()
            .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                doc.ref.delete();
            });
        });
    }
    getDate(date) {
        let dating = new Date(date.seconds * 1000 + date.nanoseconds);
        return dating.toDateString();
    }
};
HelpcenterPage.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] },
    { type: _firestore_data_service__WEBPACK_IMPORTED_MODULE_6__["FirestoreDataService"] }
];
HelpcenterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-helpcenter',
        template: _raw_loader_helpcenter_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_helpcenter_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HelpcenterPage);



/***/ }),

/***/ "GxP+":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/helpcenter/helpcenter.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header  mode=ios>\n  <ion-toolbar  color=\"dark\">\n    <ion-buttons slot=\"start\">\n   <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-buttons>\n      <ion-title  class=\"width\" mode=ios >\n        <ion-text size=\"LARGE\" color=\"warning\">\n          K</ion-text>\n          <ion-text color=\"danger\"><ion-icon size=\"LARGE\" name=cart></ion-icon></ion-text>\n          <ion-text >ta</ion-text><img title=\"app header\" alt=\"image icon\" class=\"icon\" src=\"assets/icon/lipstick.png\"/><ion-text>og</ion-text>\n        </ion-title>\n    </ion-buttons>\n\n  </ion-toolbar>\n  <ion-buttons>\n    <ion-item-divider>\n      \n      <ion-icon name=\"information-circle-outline\"></ion-icon>\n      <ion-label>Customer services</ion-label>\n    </ion-item-divider>\n  </ion-buttons>\n </ion-header>\n<ion-content>\n  \n  <div>\n    <ion-card *ngIf=\"connected\">\n      <ion-card-title></ion-card-title>\n      <ion-card-content>\n        <ion-text color=\"dark\">\n          <b>KINDNESS : </b>{{kindnessIntroSpeech}}\n        </ion-text>\n      </ion-card-content>\n      <ion-card-header>\n        <ion-card-subtitle>\n          <ion-button (click)=\"scenario('ORDER')\" color=\"medium\">Order issue</ion-button>\n          <ion-button (click)=\"scenario('OTHER')\" color=\"light\">Other ?</ion-button>\n        </ion-card-subtitle>\n      </ion-card-header>\n    </ion-card>\n\n    <ion-card *ngIf=\"dialogFlow.box1\">\n     \n      <ion-card-content>\n        <ion-item>\n          <ion-text color=\"dark\">\n            Which order you mean ?\n          </ion-text>\n        </ion-item>\n        <ng-container *ngFor=\"let item of order\">\n          <ion-item *ngIf=\"item.shipment.status!=='Delivered'\" >\n            <ion-buttons slot=\"start\">\n              <ion-thumbnail  (click)=\"orderInformation(item)\"  *ngFor=\"let product of item.product\">\n                <ion-img [src]=\"product.features[0].pictures[0]\"></ion-img>\n              </ion-thumbnail>\n            </ion-buttons>\n            <ion-label (click)=\"orderInformation(item)\" >\n              <h4>{{item.orderId}}</h4>\n            </ion-label>\n          </ion-item>\n        </ng-container>\n        \n        \n      </ion-card-content>\n    </ion-card>\n\n    <ion-card *ngIf=\"dialogFlow.box2\">\n      <ion-card-title></ion-card-title>\n      <ion-card-content>\n        <ion-text color=\"dark\">\n          Order # <b>{{orderInfo.orderId}}</b>\n        </ion-text>\n        <ion-item>\n          With destination : {{orderInfo.shipment.shipping_destination}}\n        </ion-item>\n        <ion-item *ngIf=\"orderInfo.shipment.status=='Not shipped yet'\">\n          {{orderInfo.shipment.status}} go to order page for more update about your order\n        </ion-item>\n        <ion-item *ngIf=\"orderInfo.shipment.status=='Shipped'\">\n          {{orderInfo.shipment.status}}! your order is on the way dear customer.\n        </ion-item>\n      </ion-card-content>\n      <ion-card-header>\n      <ion-item>Did you find me helpful ? </ion-item>\n      <ion-item>\n        <ion-button (click)=\"scenario('END')\" color=\"medium\">Yes a lot</ion-button>\n          <ion-button (click)=\"scenario('MORE_HELP')\" color=\"light\">Not enough</ion-button>\n      </ion-item>\n      </ion-card-header>\n    </ion-card>\n\n    <ion-card *ngIf=\"dialogFlow.box3\">\n      <ion-card-title></ion-card-title>\n      <ion-card-content>\n        <ion-text color=\"dark\">\n          {{kindnessEndSpeech}}\n        </ion-text>\n      </ion-card-content>\n      <ion-card-header *ngIf=\"dialogFlow.box3Option\">\n        <ion-card-subtitle>\n          <ion-button (click)=\"scenario('TALK')\" color=\"medium\">Talk with someone</ion-button>\n          <ion-button (click)=\"scenario('BETTER')\" color=\"light\">Try better next</ion-button>\n        </ion-card-subtitle>\n      </ion-card-header>\n    </ion-card>\n    \n    <ion-card *ngIf=\"dialogFlow.box4\">\n      <ion-card-title></ion-card-title>\n      <ion-card-content>\n        <ion-text color=\"dark\">\n         <b>KINDNESS : </b>OK but don't stop shopping for your favorites items in our store\n        </ion-text>\n        <ion-button routerLink=\"/home\" routerDirection=\"back\">Continue shopping</ion-button>\n      </ion-card-content>\n    </ion-card>\n    \n    \n  </div>\n  <div class=\"stream\" *ngIf=\"connected\">\n    <ion-item lines=\"none\" *ngFor=\"let msg of message\">\n      <ion-chip text-wrap color=\"light\" *ngIf=\"msg.author == userId\">You</ion-chip>\n      <ion-chip text-wrap color=\"light\" *ngIf=\"msg.author !== userId\">{{msg.author}}</ion-chip>\n      <ion-badge text-wrap slot=\"start\" color=\"light\" *ngIf=\"msg.author != userId\">{{ msg.content }}</ion-badge>\n      <ion-badge text-wrap slot=\"end\" color=\"primary\" *ngIf=\"msg.author == userId\">{{ msg.content }}</ion-badge>\n      <ion-label>{{msg.date_msg|date}}</ion-label>\n    </ion-item>\n  </div>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-item>\n      <ion-input [(ngModel)]=\"textMesage\" placeholder=\"tell us what's happened...\"></ion-input>\n      <ion-button (click)=\"sendMessage(textMesage)\">Send <ion-icon name=\"send\"></ion-icon></ion-button>\n    </ion-item>\n  </ion-toolbar>\n</ion-footer>");

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

/***/ "i/bV":
/*!*************************************************!*\
  !*** ./src/app/helpcenter/helpcenter.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".stream ion-item {\n  min-height: -webkit-fit-content !important;\n  min-height: -moz-fit-content !important;\n  min-height: fit-content !important;\n  height: 51px;\n}\n\nion-badge {\n  padding: 10px !important;\n  text-align: left;\n  max-width: 80%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVscGNlbnRlci9oZWxwY2VudGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLDBDQUFBO0VBQUEsdUNBQUE7RUFBQSxrQ0FBQTtFQUNBLFlBQUE7QUFBSjs7QUFFQTtFQUNJLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9oZWxwY2VudGVyL2hlbHBjZW50ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAgICAgICBcbi5zdHJlYW0gaW9uLWl0ZW0ge1xuICAgIG1pbi1oZWlnaHQ6IGZpdC1jb250ZW50ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA1MXB4O1xufVxuaW9uLWJhZGdlIHtcbiAgICBwYWRkaW5nOiAxMHB4IWltcG9ydGFudDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1heC13aWR0aDogODAlO1xufSJdfQ== */");

/***/ }),

/***/ "iHxv":
/*!*************************************************!*\
  !*** ./src/app/helpcenter/helpcenter.module.ts ***!
  \*************************************************/
/*! exports provided: HelpcenterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpcenterPageModule", function() { return HelpcenterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _helpcenter_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpcenter-routing.module */ "z9YY");
/* harmony import */ var _helpcenter_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpcenter.page */ "3YcQ");







let HelpcenterPageModule = class HelpcenterPageModule {
};
HelpcenterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _helpcenter_routing_module__WEBPACK_IMPORTED_MODULE_5__["HelpcenterPageRoutingModule"]
        ],
        declarations: [_helpcenter_page__WEBPACK_IMPORTED_MODULE_6__["HelpcenterPage"]]
    })
], HelpcenterPageModule);



/***/ }),

/***/ "z9YY":
/*!*********************************************************!*\
  !*** ./src/app/helpcenter/helpcenter-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: HelpcenterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpcenterPageRoutingModule", function() { return HelpcenterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _helpcenter_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpcenter.page */ "3YcQ");




const routes = [
    {
        path: '',
        component: _helpcenter_page__WEBPACK_IMPORTED_MODULE_3__["HelpcenterPage"]
    }
];
let HelpcenterPageRoutingModule = class HelpcenterPageRoutingModule {
};
HelpcenterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HelpcenterPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=helpcenter-helpcenter-module-es2015.js.map