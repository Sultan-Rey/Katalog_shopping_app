(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cart-cart-module"],{

/***/ "SNM6":
/*!*************************************!*\
  !*** ./src/app/cart/cart.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #f1f3f4;\n}\n\n.qty-selector {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #f6f6f6;\n  border-radius: 5px;\n}\n\n.qty-selector ion-button {\n  --color: #565656;\n  font-size: 12px;\n  margin-left: 8px;\n  margin-right: 8px;\n}\n\n.qty-selector ion-label {\n  color: #565656 !important;\n  font-size: 12px;\n}\n\n.dot {\n  height: 10px;\n  width: 10px;\n  border-radius: 20%;\n  display: inline-block;\n  padding-left: 6px;\n  padding-right: 6px;\n}\n\n.cart .price {\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FydC9jYXJ0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFDRTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFDTjs7QUFFRTtFQUNJLHlCQUFBO0VBQ0EsZUFBQTtBQUFOOztBQUlBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQURGOztBQUlFO0VBQ0UsZUFBQTtBQURKIiwiZmlsZSI6InNyYy9hcHAvY2FydC9jYXJ0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xuICAtLWJhY2tncm91bmQ6ICNmMWYzZjQ7XG4gIFxufVxuLnF0eS1zZWxlY3RvciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZjZmNmY2O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG5cbiAgaW9uLWJ1dHRvbiB7XG4gICAgICAtLWNvbG9yOiAjNTY1NjU2O1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICB9XG5cbiAgaW9uLWxhYmVsIHtcbiAgICAgIGNvbG9yOiAjNTY1NjU2ICFpbXBvcnRhbnQ7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbn1cblxuLmRvdHtcbiAgaGVpZ2h0OiAxMHB4O1xuICB3aWR0aDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMjAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmctbGVmdDogNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiA2cHg7XG59XG4uY2FydHtcbiAgLnByaWNle1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxufSJdfQ== */");

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
        console.log(this.getBrowsingHistoric());
    }
    ngOnInit() {
        this.isOnline = this.fstoreService.getConnexionState();
    }
    checkForCartUpdate() {
        let arr2 = this.fstoreService.getFirestoreData();
        const res1 = arr2.filter((item1) => !this.cart.find(item2 => item1.description === item2.description));
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
        }).catch(err => {
            console.log("saved not found or empty");
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
                this.storage.set("savedforlater", saved).then(() => {
                    this.getsavedforlater();
                });
            });
        }
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
/* harmony default export */ __webpack_exports__["default"] = ("\n<app-page-header></app-page-header>\n\n<ion-content>\n  \n  <div class=\"container-fluid p-3 overflow-hidden\">\n    <div class=\"row g-4\">\n        \n        <div class=\"col-lg-8 col-12 col-md-13 cart\">\n          <div class=\"p-2 border cart\">\n            <ion-list>\n              <div *ngIf=\"cart.length==0\"> \n                <ion-slide>\n                  <ion-img src=\"../../assets/empty_cart.jpeg\" style=\"width: 300px;height: 300px;\"></ion-img>\n                </ion-slide>\n                <ion-slide>\n                  <ion-button shape=\"round\" color=\"danger\">Shopping now</ion-button>\n                </ion-slide>\n              </div>\n              <ng-container *ngFor=\"let items of cart\">\n          \n                <ion-item ion-button detail=\"true\">\n                  <ion-img size=\"small\" (click)=\"goTo(items)\" [src]=\"items.picture\" style=\"width: 200px; height: 200px; margin-bottom: 4px;\"></ion-img>\n                  <ion-label>\n                    <ion-item-group>\n                      <div class=\"row\">\n                          <div class=\"col-lg-9 overflow-hidden\">\n                            <h6><b>{{items.name}}</b></h6>\n                            <p class=\"text-muted\">{{items.description}}</p>\n                          </div>\n                          <div class=\"col-lg-3\">\n                            <h6 class=\"price\"><b>{{items.price|currency}}</b></h6>\n                            <ion-badge color=\"danger\" *ngIf=\"checkQty(items)<10 && checkQty(items)>1\">Only {{checkQty(items)}} left</ion-badge>\n                          </div>\n                      </div>\n                    <div>\n                      <ion-label>\n                        <ion-badge color=\"dark\">Color : <span class=\"dot\" [ngStyle]=\"{background:items.color}\"></span></ion-badge>\n                        &nbsp;\n                        <ion-badge color=\"dark\">Size : {{items.size}}</ion-badge>\n                      </ion-label>\n                    </div>\n                     \n                      <div class=\"mb-2\">\n                        <ion-label *ngIf=\"items.shippingFee==0 && items.deliveryFee==0\">\n                          <span class=\"text-muted\"><small>Available for Free Delivery</small></span>&<span><ion-text color=\"primary\">Free Shipping</ion-text></span>\n                        </ion-label>\n                        <ion-label *ngIf=\"items.shippingFee!==0 && items.deliveryFee==0\">\n                          <span class=\"text-muted\"><small>Only available</small></span>&<span><ion-text color=\"primary\">Free Delivery</ion-text></span>\n                        </ion-label>\n                      </div>\n                      <ion-buttons>\n                        <ion-label>\n                          <div class=\"qty-selector\">\n                            <ion-button  fill=\"clear\" (click)=\"adjustqty('minus',items)\">-</ion-button>\n                            <ion-label>{{items.qty}}</ion-label>\n                            <ion-button fill=\"clear\" (click)=\"adjustqty('plus',items)\">+</ion-button>\n                          </div>\n                        </ion-label>\n                        <ion-buttons>\n                          <ion-button class=\"btn btn-primary btn-sm\" (click)=\"savedForLater(items)\">Save for later</ion-button>\n                          <ion-button class=\"btn btn-danger btn-sm\"  (click)=\"remove(items)\">Remove</ion-button>\n                        </ion-buttons>\n                      </ion-buttons>\n                    </ion-item-group>\n                  </ion-label>\n                \n              </ion-item>\n          \n              </ng-container>\n             \n            </ion-list>\n          </div>\n          \n        </div>\n        <div class=\"col-lg-4 col-12 col-md-12\">\n          <div class=\"p-2 border\">\n            <ion-item  lines=\"none\">\n              <ion-label>\n                <ion-buttons>\n                  <ion-label style=\"font-weight: bold;\">Total cost items : </ion-label>\n                 <ion-text color=\"primary\">\n                  <h3  style=\"font-size:20px;\">&nbsp;{{getTotal()|currency}}</h3>\n                 </ion-text>\n                </ion-buttons>\n              </ion-label>\n              <button class=\"btn btn-warning btn-md \" (click)=\"checkout(cart)\" >Check out</button>\n            </ion-item>\n            <ion-item  lines=\"none\">\n              <ion-label>\n                <ion-buttons>\n                  <ion-label style=\"font-weight: bold;\">Number items in cart : </ion-label>\n                </ion-buttons>\n              </ion-label>\n              <h4>{{cart.length}}</h4>\n            </ion-item>\n          </div>\n        </div>\n    </div>\n  </div>\n\n<div class=\"alert p-1 alert-dark mt-2\">\n  \n    <h3>Save for later</h3>\n  \n</div>\n\n<div class=\"container-fluid overflow-hidden\">\n  \n    <div class=\"col-lg-9 col-md-12 col-12 bg-white p-3\">\n      <div class=\"row g-4\">\n      <div class=\"col-lg-4 col-12 col-md-4\"  *ngFor=\"let item of saved\">\n        <div class=\"border p-3\">\n          <ion-card-content (click)=\"goTo(item)\" style=\"padding-bottom: 0;\"  >\n            <ion-slide>\n              <ion-img style=\"box-sizing:border-box; width: 165px; height: 165px;\"   (click)=\"goTo(item)\" [src]=\"item.picture\"></ion-img>\n            </ion-slide>\n              </ion-card-content>\n          <ion-card-header >\n            <ion-text color=\"dark\">\n              <h6  style=\"font-size: 13px; font-weight: bold;\" (click)=\"goTo(item)\">{{item.description}}</h6>\n            </ion-text>\n            <ion-card-subtitle  >{{item.name}}</ion-card-subtitle>\n          </ion-card-header>\n\n          <ion-card-title>\n            <ion-item lines=\"none\">\n              <ion-label (click)=\"goTo(item)\" color=\"dark\">\n               <b>{{item.price|currency}}</b> \n              </ion-label>\n              <div style=\"text-align:center; max-width: 36px; max-height: 19.188px; overflow: hidden;\">\n                  <span class=\"dot\" *ngIf=\"item.color!==''\" [style.background]=\"item.color\"></span>\n                </div>\n            </ion-item>\n            <button (click)=\"moveToCart(item)\" class=\"btn btn-xs btn-light\">Move to cart</button>\n          </ion-card-title>\n         \n      </div>\n    </div>\n    </div>\n   \n  </div>\n</div>\n\n</ion-content>\n");

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