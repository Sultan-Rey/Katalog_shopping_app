(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["order-order-module"],{

/***/ "+p+5":
/*!***************************************!*\
  !*** ./src/app/order/order.module.ts ***!
  \***************************************/
/*! exports provided: OrderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderPageModule", function() { return OrderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _order_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order-routing.module */ "DM6G");
/* harmony import */ var _order_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order.page */ "uX05");
/* harmony import */ var _sharedviews_sharedviews_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sharedviews/sharedviews.module */ "l+lL");








let OrderPageModule = class OrderPageModule {
};
OrderPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _sharedviews_sharedviews_module__WEBPACK_IMPORTED_MODULE_7__["SharedviewsModule"],
            _order_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrderPageRoutingModule"]
        ],
        declarations: [_order_page__WEBPACK_IMPORTED_MODULE_6__["OrderPage"]]
    })
], OrderPageModule);



/***/ }),

/***/ "DM6G":
/*!***********************************************!*\
  !*** ./src/app/order/order-routing.module.ts ***!
  \***********************************************/
/*! exports provided: OrderPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderPageRoutingModule", function() { return OrderPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _order_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order.page */ "uX05");




const routes = [
    {
        path: '',
        component: _order_page__WEBPACK_IMPORTED_MODULE_3__["OrderPage"]
    }
];
let OrderPageRoutingModule = class OrderPageRoutingModule {
};
OrderPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OrderPageRoutingModule);



/***/ }),

/***/ "u6Jy":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/order/order.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-page-header></app-page-header>\n\n<ion-content>\n \n  <div>\n    <ion-item>\n      <ion-searchbar placeholder=\"search for orders\"></ion-searchbar>\n      <ion-button fill=\"clear\" slot=\"end\">\n        Filter <ion-icon name=\"chevron-down-outline\" ></ion-icon>\n      </ion-button>\n    </ion-item>\n    \n  </div>\n  <ion-item-group *ngFor=\"let order of orders$ | async\">\n  <div class=\"container-fluid bg-light\">\n    <div class=\"row p-2\">\n      <div class=\"col-md-4\">\n          <ion-label>Date Order <p>{{getDate(order.date_order)}}</p></ion-label>\n      </div>\n      <div class=\"col-md-5\">\n          <ion-label>Ship To : <p>{{order.shipment.shipping_destination}}</p></ion-label>\n      </div>\n      <div class=\"col-md-3\">\n        <ion-button size=\"small\" class=\"mt-2\" (click)=\"details(order)\" color=\"medium\">Order Details\n          <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n        </ion-button>\n      </div>\n    </div>\n  </div>\n    \n    <ion-item *ngFor=\"let item_order of order.items\">\n      <ion-item-group style=\"--size:large;\" slot=\"start\">\n        <ion-img style=\"width:160px; max-height:165px;\" [src]=\"item_order.picture\" alt=\"product image\"></ion-img>\n        <ion-chip>\n          {{item_order.qty}}\n        </ion-chip>\n      </ion-item-group>\n      \n      <ion-label>\n        <h3 style=\"font-weight:bold;\">{{item_order.name}}</h3>\n        <ion-buttons>\n          <button>Size : {{item_order.size}} </button>\n          <button [style.background]=\"item_order.color\">- Color - </button>\n        </ion-buttons>\n         <ion-text *ngIf=\"data=='Refunds'\" color=\"danger\">\n         <h4 >Refunds Status</h4></ion-text>\n         <ion-buttons>\n          <h5 style=\"font-weight:bold;\" *ngIf=\"data!=='Refunds'\">Estimate Delivery date  : </h5>\n          <p style=\"margin-left: 10px;\" *ngIf=\"data!=='Refunds'\">{{getDate(item_order.deliveryDate)|date}}</p>\n         </ion-buttons>\n         \n         <ion-buttons>\n           <span style=\"margin-right: 2px;\">\n            <h5 style=\"font-weight:bold;\">Delivery method : </h5>\n           </span>\n            <ion-badge slot=\"end\" size=\"small\" expand=\"block\" color=\"warning\">{{order.shipment.carrier}}\n              <ion-icon name=\"chevron-down\"></ion-icon>\n            </ion-badge>\n         </ion-buttons>\n         <ion-buttons>\n           <ion-label slot=\"end\" [color]=\"order.shipment.status=='Delivered' || order.shipment.status=='Shipped' || order.shipment.status=='Not shipped yet' ? 'tertiary':'danger'\" style=\"padding-left: 30px; float: left; margin-top: 5px; \"  >\n            <h6>{{order.shipment.status}}</h6>\n           </ion-label>\n         </ion-buttons>\n      </ion-label>     \n    </ion-item>\n    \n  </ion-item-group>\n\n</ion-content>\n");

/***/ }),

/***/ "uX05":
/*!*************************************!*\
  !*** ./src/app/order/order.page.ts ***!
  \*************************************/
/*! exports provided: OrderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderPage", function() { return OrderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_order_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./order.page.html */ "u6Jy");
/* harmony import */ var _order_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order.page.scss */ "wIiX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _firestore_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../firestore-data.service */ "UbTl");








let OrderPage = class OrderPage {
    constructor(router, route, afAuth, fdservice, storage) {
        this.router = router;
        this.route = route;
        this.afAuth = afAuth;
        this.fdservice = fdservice;
        this.storage = storage;
        this.userType = '';
        this.connected = false;
        this.afAuth.authState.subscribe(auth => {
            if (!auth.emailVerified) {
                this.connected = false;
            }
            else {
                this.getallOrder();
            }
        });
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.data = this.router.getCurrentNavigation().extras.state.refundstatus;
            }
        });
    }
    getallOrder() {
        this.afAuth.currentUser.then((user) => {
            if (user.emailVerified) {
                this.orders$ = this.fdservice.getOrder(user.uid.toString());
            }
        });
    }
    getDate(date) {
        let dating = new Date(date.seconds * 1000 + date.nanoseconds);
        return dating.toDateString();
    }
    details(order) {
        const navigationExtras = {
            state: { order: order, type: this.userType }
        };
        this.router.navigate(['/order-details'], navigationExtras);
    }
};
OrderPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] },
    { type: _firestore_data_service__WEBPACK_IMPORTED_MODULE_7__["FirestoreDataService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] }
];
OrderPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-order',
        template: _raw_loader_order_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_order_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], OrderPage);



/***/ }),

/***/ "wIiX":
/*!***************************************!*\
  !*** ./src/app/order/order.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-thumbnail {\n  --size:60px;\n}\n\n#name {\n  display: inline-block;\n  margin: 0;\n  padding: 0;\n}\n\n#icon {\n  margin-left: 5px;\n  position: absolute;\n  display: inline-block;\n  color: #ffd050;\n  width: 11px;\n  padding: 0;\n}\n\n.margin {\n  margin-left: 18px;\n  margin-bottom: 0;\n  margin-top: 0;\n}\n\n.margin p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n}\n\n.label {\n  margin-left: 14px;\n}\n\n.label button {\n  background: none;\n  border-right: 1px solid yellowgreen;\n  box-shadow: none;\n}\n\n.label button ion-label {\n  font-size: 12px;\n  line-height: 12px;\n}\n\n#qty {\n  display: inline;\n  float: right;\n  border: 1px solid #8c8c8c;\n  border-radius: 50%;\n  padding: 3px;\n  text-align: center;\n  background: #2c2c30;\n  color: cornsilk;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXIvb3JkZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQUNGOztBQUVBO0VBQ0kscUJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUNFO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBRUo7O0FBQUU7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQUdKOztBQURFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtBQUlKOztBQUZFO0VBQ0UsaUJBQUE7QUFLSjs7QUFIRTtFQUNFLGdCQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQkFBQTtBQU1KOztBQUpFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBT0o7O0FBTEU7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQVFKIiwiZmlsZSI6InNyYy9hcHAvb3JkZXIvb3JkZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRodW1ibmFpbHtcbiAgLS1zaXplOjYwcHg7XG59XG5cbiNuYW1le1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzowO1xuICB9XG4gICNpY29ue1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBjb2xvcjogcmdiKDI1NSwgMjA4LCA4MCk7XG4gICAgd2lkdGg6IDExcHg7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuICAubWFyZ2lue1xuICAgIG1hcmdpbi1sZWZ0OiAxOHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgfVxuICAubWFyZ2luIHB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgIGNvbG9yOiAjOGM4YzhjO1xuICAgIG1hcmdpbjogMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIC13ZWJraXQtbGluZS1jbGFtcDogMztcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsOyBcbiAgfVxuICAubGFiZWx7XG4gICAgbWFyZ2luLWxlZnQ6IDE0cHg7XG4gIH1cbiAgLmxhYmVsIGJ1dHRvbntcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHllbGxvd2dyZWVuO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cbiAgLmxhYmVsIGJ1dHRvbiBpb24tbGFiZWx7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxMnB4O1xuICB9XG4gICNxdHl7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOGM4YzhjO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBwYWRkaW5nOiAzcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6IHJnYig0NCwgNDQsIDQ4KTtcbiAgICBjb2xvcjogY29ybnNpbGs7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cblxuICAiXX0= */");

/***/ })

}]);
//# sourceMappingURL=order-order-module-es2015.js.map