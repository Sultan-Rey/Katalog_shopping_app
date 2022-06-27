(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cart-cart-module"],{

/***/ "SNM6":
/*!*************************************!*\
  !*** ./src/app/cart/cart.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item ion-button {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-family: Impact, Haettenschweiler, \"Arial Narrow Bold\", sans-serif;\n  font-size: 12px;\n}\nion-item ion-badge {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  margin-left: 10px;\n  font-family: sans-serif;\n}\nh3 {\n  margin-left: 15px;\n}\n.alert {\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FydC9jYXJ0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0Esc0VBQUE7RUFDQSxlQUFBO0FBQUo7QUFFRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtBQUFKO0FBR0E7RUFDRSxpQkFBQTtBQUFGO0FBR0E7RUFDRSxVQUFBO0FBQUYiLCJmaWxlIjoic3JjL2FwcC9jYXJ0L2NhcnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW17XG4gIGlvbi1idXR0b257XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBmb250LWZhbWlseTpJbXBhY3QsIEhhZXR0ZW5zY2h3ZWlsZXIsICdBcmlhbCBOYXJyb3cgQm9sZCcsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG4gIGlvbi1iYWRnZXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIH1cbn1cbmgze1xuICBtYXJnaW4tbGVmdDoxNXB4O1xufVxuXG4uYWxlcnR7XG4gIHBhZGRpbmc6IDA7XG59Il19 */");

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

/***/ "Xo8k":
/*!***********************************!*\
  !*** ./src/app/cart/cart.page.ts ***!
  \***********************************/
/*! exports provided: CartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPage", function() { return CartPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cart_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cart.page.html */ "ehlK");
/* harmony import */ var _cart_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart.page.scss */ "SNM6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _firestore_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../firestore-data.service */ "UbTl");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");








let CartPage = class CartPage {
    constructor(toastconroller, router, fstoreService, storage) {
        this.toastconroller = toastconroller;
        this.router = router;
        this.fstoreService = fstoreService;
        this.storage = storage;
        this.element = '';
        this.browsing = [];
        this.cart = [];
        this.saved = [];
        this.isOnline = false;
        this.orderQty = 0;
        this.totalcost = 0.00;
        this.getsavedforlater();
        this.getCartItems();
        this.getBrowsingHistoric();
    }
    ngOnInit() {
        this.noItem = false;
        this.nosaved = false;
    }
    checkForCartUpdate() {
        let arr2 = this.fstoreService.getFirestoreData();
        const res1 = arr2.filter((item1) => !this.cart.find(item2 => item1.description === item2.description));
        console.log(res1);
        console.log(arr2);
    }
    getCartItems() {
        this.totalcost = 0.00;
        this.storage.get("cart").then((data) => {
            this.cart = data;
        }).catch(err => {
            console.log("cart not found or empty");
        });
    }
    getsavedforlater() {
        this.storage.get("savedforlater").then((data) => {
            this.saved = data;
            this.nosaved = false;
        }).catch(err => {
            console.log("saved not found or empty");
            this.nosaved = true;
        });
    }
    getBrowsingHistoric() {
        this.storage.get("browsing").then((historic) => {
            if (historic.length !== 0 && historic !== null) {
                for (let product of this.fstoreService.getFirestoreData()) {
                    for (let item of historic) {
                        if (product.name == item.name && product.description == item.description) {
                            this.browsing.push(product);
                        }
                    }
                }
            }
        }).catch(err => {
            console.log("no browsing data found");
        });
        return this.browsing.reverse;
    }
    adjustqty(pressed, item) {
        if (pressed === 'minus') {
            if (item.qty !== 1) {
                item.qty--;
            }
            else {
            }
        }
        if (pressed === 'plus') {
            item.qty++;
        }
        this.storage.set('cart', this.cart);
    }
    getTotal() {
        return this.cart.reduce((i, j) => i + j.price * j.qty, 0);
    }
    savedForLater(item) {
        let deleted = false;
        let tosaved;
        for (let cartItem of this.cart) {
            if (cartItem === item) {
                this.cart.splice(this.cart.indexOf(item), 1);
                tosaved = cartItem;
                deleted = true;
            }
        }
        if (deleted) {
            let alreadySaved = false;
            this.storage.set("cart", this.cart);
            this.storage.get('savedforlater').then((saved) => {
                if (saved == null || saved.length == 0) {
                    saved = [];
                    saved.push(tosaved);
                }
                else {
                    for (let saveItem of saved) {
                        if (saveItem == tosaved) {
                            saveItem.qty = tosaved.qty;
                            alreadySaved = true;
                        }
                    }
                    if (!alreadySaved) {
                        saved.push(tosaved);
                    }
                }
                this.storage.set("savedforlater", saved);
            });
        }
        this.getsavedforlater();
    }
    remove(item) {
        let deleted = false;
        for (let cartItem of this.cart) {
            if (cartItem === item) {
                this.cart.splice(this.cart.indexOf(cartItem), 1);
                deleted = true;
            }
        }
        if (deleted) {
            this.storage.set("cart", this.cart);
            //this.getCartItems();
        }
    }
    moveToCart(item) {
        let move = false;
        for (let saved of this.saved) {
            if (saved === item) {
                this.saved.splice(this.saved.indexOf(item), 1);
                this.cart.push(saved);
                move = true;
            }
        }
        if (move) {
            this.storage.set("savedforlater", this.saved);
            this.storage.set("cart", this.cart);
            //this.getCartItems();
        }
    }
    crypto() {
        let date = Date.now();
        let id = "CA" + Math.floor(Math.random() * 1000) + "-" + date;
        return id;
    }
    checkout(cartItems) {
        let shipment = {};
        if (this.totalcost > 0.00) {
            shipment.goods_departure = 'Packaging with KATALOG team service';
            shipment.shipping_destination = '';
            shipment.status = 'Not shipped yet';
            shipment.carrier = '';
            shipment.trackingnumber = '';
            let prepareOrder = {
                customerId: 'code',
                orderId: this.crypto(),
                items: cartItems,
                date_order: new Date(Date.now()),
                order_qty: this.orderQty,
                amount: this.getTotal(),
                shipment: shipment,
            };
            const navigationExtras = {
                state: {
                    order: prepareOrder
                }
            };
            this.router.navigate(['/place-order'], navigationExtras);
        }
    }
    goTo(item) {
        this.item = {};
        let isfound = false;
        for (let product of this.fstoreService.getFirestoreData()) {
            if (product.name == item.name && product.description == item.description) {
                this.item = product;
                isfound = true;
            }
        }
        if (isfound) {
            const navigationExtras = {
                state: {
                    product: item
                }
            };
            this.router.navigate(['/product'], navigationExtras);
        }
        else {
            this.rejection();
        }
    }
    checkQty(item) {
        let stockQty = 10;
        for (let product of this.fstoreService.getFirestoreData()) {
            if (product.name == item.name && product.description == item.description) {
                stockQty = product.qty;
            }
        }
        return stockQty;
    }
    rejection() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let toast = yield this.toastconroller.create({
                message: 'Sorry! product is no longer available',
                duration: 3000
            });
            yield toast.present();
        });
    }
    filter() {
        if (this.element !== '') {
            this.cart.filter((item) => item.name.includes(this.element));
        }
    }
};
CartPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _firestore_data_service__WEBPACK_IMPORTED_MODULE_6__["FirestoreDataService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] }
];
CartPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cart',
        template: _raw_loader_cart_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cart_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CartPage);



/***/ }),

/***/ "cP+M":
/*!*********************************************!*\
  !*** ./src/app/cart/cart-routing.module.ts ***!
  \*********************************************/
/*! exports provided: CartPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageRoutingModule", function() { return CartPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _cart_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart.page */ "Xo8k");




const routes = [
    {
        path: '',
        component: _cart_page__WEBPACK_IMPORTED_MODULE_3__["CartPage"]
    }
];
let CartPageRoutingModule = class CartPageRoutingModule {
};
CartPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CartPageRoutingModule);



/***/ }),

/***/ "ehlK":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<app-page-header></app-page-header>\n\n<ion-content>\n  \n<ion-item class=\"mt-2\" lines=\"none\">\n  <ion-label>\n    <ion-buttons>\n      <ion-label style=\"font-weight: bold;\">Total items cost : </ion-label>\n     <ion-text color=\"primary\">\n      <h3  style=\"font-size:22px;\">{{  getTotal()|currency}}</h3>\n     </ion-text>\n      \n    </ion-buttons>\n  </ion-label>\n  \n  <button class=\"btn btn-warning btn-md \" (click)=\"checkout(cart)\" >Check out</button>\n</ion-item>\n<div class=\"alert alert-dark\"><h3><ion-icon name=\"cart\" size=\"large\"></ion-icon>Cart Items</h3>\n</div>\n<div class=\"container\">\n  <ion-list>\n    \n    <ng-container *ngFor=\"let items of cart\">\n\n      <ion-item ion-button detail=\"true\" >\n        <ion-img size=\"large\" (click)=\"goTo(items)\" [src]=\"items.picture\" style=\"width: 110px; height: 150px;\"></ion-img>\n     <ion-item-group>\n       <ion-item >\n        <ion-label>\n          <div>\n            <ion-buttons>\n              <ion-text>{{items.price|currency}}</ion-text>\n              <ion-badge color=\"danger\" *ngIf=\"checkQty(items)<10 && checkQty(items)>1\">Only {{checkQty(items)}} left</ion-badge>\n            </ion-buttons>\n              <h6  (click)=\"goTo(items)\">{{items.name}}</h6>\n            <ion-label><h6>{{items.description}}</h6></ion-label>\n            <ion-buttons>\n              <div class=\"qty-selector\">\n                <ion-button  fill=\"clear\" (click)=\"adjustqty('minus',items)\">-</ion-button>\n                <ion-label>{{items.qty}}</ion-label>\n                <ion-button fill=\"clear\" (click)=\"adjustqty('plus',items)\">+</ion-button>\n              </div>\n            </ion-buttons>\n          </div>\n          </ion-label>\n       </ion-item>   \n     </ion-item-group>\n     <div class=\"row\">\n      <button  class=\"mb-3 btn btn-primary btn-sm btn-block\" (click)=\"savedForLater(items)\">Save for later</button>\n      <button  class=\"btn btn-danger btn-sm btn-block\"  (click)=\"remove(items)\">Remove</button>\n    </div>\n    </ion-item>\n\n    </ng-container>\n   \n  </ion-list>\n</div>\n\n<div class=\"col-md-12 mt-3 border p-4\">\n  <h4>Related to your recent Browsing Items</h4>\n  <ng-container *ngIf=\"browsing.length!==0 && isOnline\">\n    <ion-slides style=\"margin-bottom:20px;\" [options]=\"{ slidesPerView: '3', zoom: false, grabCursor: true }\">\n      <ng-container *ngFor=\"let historic of browsing\">\n        <ion-slide style=\"margin: 20px\">\n          <ion-item-group>\n            <ion-img [src]=\"historic.models[0].pictures[0]\" style=\"max-height: 300px; max-width: 300px\"></ion-img>\n            <ion-row>\n              <ion-badge color=\"danger\">\n                <h5>{{historic.caracteristic[0].price|currency}}</h5>\n              </ion-badge>\n            </ion-row>\n          </ion-item-group>\n        </ion-slide>\n      </ng-container>\n        </ion-slides>\n  </ng-container>\n  <div class=\"alert alert-default\" *ngIf=\"browsing.length==0 && isOnline\">\n    <ion-button class=\"border\" expand=\"block\" fill=\"clear\">Browsing Historic empty, start shopping now!</ion-button>\n  </div>\n  <ion-chip color=\"danger\" *ngIf=\"!isOnline\">\n    <ion-icon size=\"large\" name=\"alert-circle\"></ion-icon>\n    <h4>No internet connection</h4>\n  </ion-chip>\n</div>\n\n<div class=\"alert alert-dark mt-2\"><h3>Save for later</h3>\n</div>\n <div class=\"container\">\n  <ion-list >\n    <ion-item ion-button detail=\"true\" *ngFor=\"let items of saved\" >\n        <ion-img size=\"large\" (click)=\"goTo(items)\"  [src]=\"items.picture\" style=\"width: 115px; height: 160px;\"></ion-img>\n     <ion-item-group>\n       <ion-item>\n        <ion-label>\n          <div>\n            <ion-buttons>\n              <ion-text>{{items.price|currency}}</ion-text>\n              <ion-badge color=\"danger\" *ngIf=\"checkQty(items)<10 && checkQty(items)>1\">Only {{checkQty(items)}} left</ion-badge>\n            </ion-buttons>\n              <h6>{{items.name}}</h6>\n            <ion-label><h6>{{items.description}}</h6></ion-label>\n          </div>\n          </ion-label>\n       </ion-item>\n          <ion-button size=\"small\" (click)=\"moveToCart(items)\">Move to Cart</ion-button>\n     </ion-item-group>\n    </ion-item>\n  </ion-list>\n</div> \n</ion-content>\n");

/***/ }),

/***/ "v35Q":
/*!*************************************!*\
  !*** ./src/app/cart/cart.module.ts ***!
  \*************************************/
/*! exports provided: CartPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageModule", function() { return CartPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _cart_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cart-routing.module */ "cP+M");
/* harmony import */ var _cart_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cart.page */ "Xo8k");
/* harmony import */ var _sharedviews_sharedviews_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sharedviews/sharedviews.module */ "l+lL");








let CartPageModule = class CartPageModule {
};
CartPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _sharedviews_sharedviews_module__WEBPACK_IMPORTED_MODULE_7__["SharedviewsModule"],
            _cart_routing_module__WEBPACK_IMPORTED_MODULE_5__["CartPageRoutingModule"]
        ],
        declarations: [_cart_page__WEBPACK_IMPORTED_MODULE_6__["CartPage"]]
    })
], CartPageModule);



/***/ })

}]);
//# sourceMappingURL=cart-cart-module-es2015.js.map