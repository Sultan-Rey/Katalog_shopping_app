(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["order-details-order-details-module"],{

/***/ "678P":
/*!***************************************************************!*\
  !*** ./src/app/order-details/order-details-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: OrderDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailsPageRoutingModule", function() { return OrderDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _order_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order-details.page */ "zoAX");




const routes = [
    {
        path: '',
        component: _order_details_page__WEBPACK_IMPORTED_MODULE_3__["OrderDetailsPage"]
    }
];
let OrderDetailsPageRoutingModule = class OrderDetailsPageRoutingModule {
};
OrderDetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OrderDetailsPageRoutingModule);



/***/ }),

/***/ "8Svz":
/*!*******************************************************!*\
  !*** ./src/app/order-details/order-details.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #f1f3f4;\n}\nion-content ion-img {\n  width: 50px;\n  height: 50px;\n}\nion-content table th, ion-content td {\n  font-size: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXItZGV0YWlscy9vcmRlci1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FBQ0o7QUFBSTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBRUo7QUFBSTtFQUNFLGVBQUE7QUFFTiIsImZpbGUiOiJzcmMvYXBwL29yZGVyLWRldGFpbHMvb3JkZXItZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcbiAgICAtLWJhY2tncm91bmQ6ICNmMWYzZjQ7XG4gICAgaW9uLWltZ3tcbiAgICB3aWR0aDogNTBweDsgXG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIH1cbiAgICB0YWJsZSB0aCx0ZHtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB9XG4gIH0iXX0= */");

/***/ }),

/***/ "8fxn":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/order-details/order-details.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=ios>\n  <ion-toolbar>\n    <ion-title>Order Details</ion-title>\n  </ion-toolbar>\n </ion-header>\n\n<ion-content>\n  \n  <div class=\"container-fluid p-4 overflow-hidden\">\n    <div class=\"row g-4\">\n      <div class=\"col-lg-8\">\n        <div class=\"border bg-white p-3\">\n           \n            <div class=\"border p-2 rounded\">\n              <h6>Shipping Address</h6>\n              <p>Renald Occean 32977921 <br> London crest 16 Ave bwm apt46 <br> Fort-lauderdale - 33298 <br> United States</p>\n            </div>\n            <div class=\"border p-2 rounded\">\n              <h6>Shipment Status</h6>\n              <ion-grid>\n                <ion-row>\n                  <ion-col>\n                    <ion-buttons>\n                      <ion-item-group>\n                        <ion-avatar><ion-img src=\"../../assets/box_order.jpeg\"></ion-img></ion-avatar>\n                        <small>Packaging</small>\n                      </ion-item-group>\n                      <ion-progress-bar></ion-progress-bar>\n                    </ion-buttons>\n                  </ion-col>\n                  <ion-col>\n                    <ion-buttons>\n                      <ion-item-group>\n                        <ion-avatar><ion-img src=\"../../assets/shipping.png\"></ion-img></ion-avatar>\n                        <small>Shipped</small>\n                      </ion-item-group>\n                      <ion-progress-bar></ion-progress-bar>\n                    </ion-buttons>\n                  </ion-col>\n                  <ion-col>\n                    <ion-buttons>\n                      <ion-item-group>\n                        <ion-avatar><ion-img src=\"../../assets/delivery.jpeg\"></ion-img></ion-avatar>\n                        <small>Delivered</small>\n                      </ion-item-group>\n                      <ion-progress-bar></ion-progress-bar>\n                    </ion-buttons>\n                  </ion-col>\n                  <ion-col>\n                    <ion-buttons>\n                      <ion-item-group>\n                        <ion-avatar class=\"rounded\"><ion-icon size=\"large\" color=\"success\" name=\"checkmark-done-circle-outline\"></ion-icon></ion-avatar>\n                        <small>Completed</small>\n                      </ion-item-group>\n                    </ion-buttons>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </div>\n            <ion-buttons>\n              <ion-button>Tracking historic</ion-button>\n              <ion-button color=\"danger\">Cancel order </ion-button>\n              <ion-button color=\"warning\">Ask for refunds </ion-button>\n            </ion-buttons>\n        </div>\n      </div>\n\n      <div class=\"col-lg-4\">\n        <div class=\"border bg-white p-3\">\n          \n          <div class=\"border p-2 rounded\">\n            <h6>Payment Method</h6>\n            <ion-row lines=\"none\">\n              <ion-thumbnail>\n                <ion-img src=\"../../assets/icon/Google-Pay-Logo.png\" style=\"width: 40px; height: 40px;\"></ion-img>\n              </ion-thumbnail>\n              <ion-label >Google Pay</ion-label>\n            </ion-row>\n            \n          </div>\n          <div class=\"border p-2 rounded\">\n            <h6>Order Info</h6>\n            <table class=\"table table-striped\">\n              <thead>\n                <tr>\n                  <th scope=\"col\">#Order : 890966448</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <th scope=\"row\">Date order</th>\n                  <td>26 mars 2020</td>\n                </tr>\n                <tr>\n                  <th scope=\"row\"># items of order</th>\n                  <td>4</td>\n                </tr>\n                <tr>\n                  <th scope=\"row\">Shipping & Handling</th>\n                  <td>9$</td>\n                </tr>\n                <tr>\n                  <th scope=\"row\">Total cost</th>\n                  <td>12244$</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n          \n        </div>\n      </div>\n    </div>\n  </div>\n\n\n  \n\n\n</ion-content>\n\n");

/***/ }),

/***/ "tIIa":
/*!*******************************************************!*\
  !*** ./src/app/order-details/order-details.module.ts ***!
  \*******************************************************/
/*! exports provided: OrderDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailsPageModule", function() { return OrderDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _order_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order-details-routing.module */ "678P");
/* harmony import */ var _order_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order-details.page */ "zoAX");







let OrderDetailsPageModule = class OrderDetailsPageModule {
};
OrderDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _order_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrderDetailsPageRoutingModule"]
        ],
        declarations: [_order_details_page__WEBPACK_IMPORTED_MODULE_6__["OrderDetailsPage"]]
    })
], OrderDetailsPageModule);



/***/ }),

/***/ "zoAX":
/*!*****************************************************!*\
  !*** ./src/app/order-details/order-details.page.ts ***!
  \*****************************************************/
/*! exports provided: OrderDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailsPage", function() { return OrderDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_order_details_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./order-details.page.html */ "8fxn");
/* harmony import */ var _order_details_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order-details.page.scss */ "8Svz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! util */ "MCLT");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_9__);










let OrderDetailsPage = class OrderDetailsPage {
    constructor(route, router, afirestore, fireAuth, alertcontroller, storage) {
        this.route = route;
        this.router = router;
        this.afirestore = afirestore;
        this.fireAuth = fireAuth;
        this.alertcontroller = alertcontroller;
        this.storage = storage;
        this.shippingAddress = '';
        this.userType = '';
        this.carrier = {
            name: '',
            tracking: ''
        };
        this.nodata = true;
        this.msg = {};
        this.getAdresses();
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.data = this.router.getCurrentNavigation().extras.state.order;
                this.userType = this.router.getCurrentNavigation().extras.state.type;
            }
        });
        if (!Object(util__WEBPACK_IMPORTED_MODULE_9__["isNullOrUndefined"])(this.data)) {
            this.nodata = false;
        }
        else {
            this.nodata = true;
        }
    }
    getAdresses() {
        this.storage.get("address").then((data) => {
            this.address = data;
        }).catch(err => {
            console.log("addresses not found or empty");
        });
    }
    changeAddress(address, orderId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.msg.author = (yield this.fireAuth.currentUser).uid;
            this.msg.object = "ORDER_UPDATE";
            this.msg.content = address;
            this.msg.destination = "ADMIN";
            this.msg.date_msg = new Date(Date.now());
            this.afirestore.collection("messages").add(this.msg);
            this.afirestore.collection('message').doc("ADMIN_ONE").collection('update').add(this.msg).then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const alert = yield this.alertcontroller.create({
                    cssClass: 'my-custom-class',
                    header: 'Alert',
                    subHeader: 'Subtitle',
                    message: 'Shipping address will change to.' + address + ' please verify your message box for confirmation',
                    buttons: ['Ok']
                });
                yield alert.present();
            }));
        });
    }
    cancelOrder(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let userId = (yield this.fireAuth.currentUser).uid;
            const alert = yield this.alertcontroller.create({
                cssClass: 'my-custom-class',
                header: 'Alert',
                subHeader: 'Cancel Order',
                message: 'Do you really want to cancel order.' + data.orderId,
                buttons: [
                    { text: 'OK', cssClass: '', handler: (ok) => {
                            this.afirestore.collection("orders").doc(userId)
                                .collection("customer_order").doc(data.orderId)
                                .update({ "shipment.status": "CANCELLED" })
                                .then(() => {
                                this.data.shipment.status = "User is cancelling the order";
                            }).catch((reason) => { this.msgFaillure(reason); });
                        }
                    },
                    { text: 'Cancel', cssClass: 'my-custom-class' }
                ]
            });
            yield alert.present();
        });
    }
    refunding(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            document.getElementById("spin2").setAttribute("hidden", "false");
            let userId = (yield this.fireAuth.currentUser).uid;
            const alert = yield this.alertcontroller.create({
                cssClass: 'my-custom-class',
                header: 'Alert',
                subHeader: 'Assign carrier',
                message: 'By starting a refund process you have to return back the purchased item. please contact customer services for support. ',
                buttons: [
                    { text: 'OK', cssClass: '', handler: (ok) => {
                            this.afirestore.collection("orders").doc(userId)
                                .collection("customer_order").doc(data.orderId)
                                .update({ "shipment.status": "REFUNDS" })
                                .then(() => {
                                document.getElementById("spin2").setAttribute("hidden", "true");
                                this.data.shipment.status = "Refunds process started";
                            }).catch((reason) => { this.msgFaillure(reason); document.getElementById("spin2").setAttribute("hidden", "true"); });
                        }
                    },
                    { text: 'Cancel', cssClass: 'my-custom-class' }
                ]
            });
            yield alert.present();
        });
    }
    setCarrier(carrier, orderId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (carrier.name !== '' && carrier.tracking !== '' && carrier.name !== null && carrier.tracking !== null) {
                document.getElementById("spin").setAttribute("hidden", "false");
                let userId = (yield this.fireAuth.currentUser).uid;
                const alert = yield this.alertcontroller.create({
                    cssClass: 'my-custom-class',
                    header: 'Alert',
                    subHeader: 'Assign carrier',
                    message: 'Once you validate item will be shipped by carrier ' + carrier.name,
                    buttons: [
                        { text: 'OK', cssClass: '', handler: (ok) => {
                                this.afirestore.collection("orders").doc(userId)
                                    .collection("customer_order").doc(orderId)
                                    .update({ "shipment.status": "Shipped", "shipment.carrier": carrier.name, "shipment.tracking": carrier.tracking })
                                    .then(() => {
                                    document.getElementById("spin").setAttribute("hidden", "true");
                                    this.data.shipment.status = "Shipped";
                                }).catch((reason) => { this.msgFaillure(reason); document.getElementById("spin").setAttribute("hidden", "true"); });
                            }
                        },
                        { text: 'Cancel', cssClass: 'my-custom-class' }
                    ]
                });
                yield alert.present();
            }
            else {
                this.msgFaillure("No tracking number or carrier set");
            }
        });
    }
    msgFaillure(reason) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertcontroller.create({
                cssClass: 'my-custom-class',
                header: 'Alert',
                subHeader: 'Assign carrier',
                message: 'Operation failed' + reason,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
};
OrderDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"] }
];
OrderDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-order-details',
        template: _raw_loader_order_details_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_order_details_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], OrderDetailsPage);



/***/ })

}]);
//# sourceMappingURL=order-details-order-details-module-es2015.js.map