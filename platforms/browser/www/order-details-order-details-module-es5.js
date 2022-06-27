(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["order-details-order-details-module"], {
    /***/
    "678P":
    /*!***************************************************************!*\
      !*** ./src/app/order-details/order-details-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: OrderDetailsPageRoutingModule */

    /***/
    function P(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderDetailsPageRoutingModule", function () {
        return OrderDetailsPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _order_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./order-details.page */
      "zoAX");

      var routes = [{
        path: '',
        component: _order_details_page__WEBPACK_IMPORTED_MODULE_3__["OrderDetailsPage"]
      }];

      var OrderDetailsPageRoutingModule = function OrderDetailsPageRoutingModule() {
        _classCallCheck(this, OrderDetailsPageRoutingModule);
      };

      OrderDetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], OrderDetailsPageRoutingModule);
      /***/
    },

    /***/
    "8Svz":
    /*!*******************************************************!*\
      !*** ./src/app/order-details/order-details.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function Svz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content h5 {\n  margin-top: 1px;\n  margin-bottom: 1px;\n  font-size: 13px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\nion-content h6 {\n  margin-top: 1px;\n  margin-bottom: 1px;\n  font-size: 12px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\nion-content h4 {\n  padding-top: 2px;\n  margin-top: 2px;\n  margin-bottom: 2px;\n  font-size: 14px;\n}\nion-content div {\n  text-align: justify;\n  border-top: 3px solid #eee;\n  border-bottom: 3px solid #eee;\n}\nion-content p {\n  font-weight: bold;\n}\nion-content fieldset {\n  border-radius: 10%;\n}\nion-content ion-button {\n  width: 80%;\n  height: 40px;\n  margin-top: auto;\n  margin-left: 10%;\n  margin-right: 10%;\n  padding: auto;\n  font-family: \"Courier New\", Courier, monospace;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXItZGV0YWlscy9vcmRlci1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHSTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBRlI7QUFJSTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBRlI7QUFJSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUZSO0FBS0k7RUFDSSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7QUFIUjtBQUtJO0VBQ0ksaUJBQUE7QUFIUjtBQUtJO0VBQ0ksa0JBQUE7QUFIUjtBQUtJO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsOENBQUE7RUFDQSxpQkFBQTtBQUhSIiwiZmlsZSI6InNyYy9hcHAvb3JkZXItZGV0YWlscy9vcmRlci1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW9uLWNvbnRlbnQge1xuXG4gICAgaDV7XG4gICAgICAgIG1hcmdpbi10b3A6IDFweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXB4O1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gICAgfVxuICAgIGg2e1xuICAgICAgICBtYXJnaW4tdG9wOiAxcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4OyBcbiAgICAgICAgcGFkZGluZy10b3A6IDBweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgICB9XG4gICAgaDR7XG4gICAgICAgIHBhZGRpbmctdG9wOiAycHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7ICBcbiAgICB9XG5cbiAgICBkaXZ7XG4gICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCAjZWVlO1xuICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2VlZTtcbiAgICB9XG4gICAgcHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICAgIGZpZWxkc2V0e1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMCU7XG4gICAgfVxuICAgIGlvbi1idXR0b257XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogYXV0bztcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMCU7XG4gICAgICAgIHBhZGRpbmc6IGF1dG87XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cblxufVxuIl19 */";
      /***/
    },

    /***/
    "8fxn":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/order-details/order-details.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function fxn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=ios>\n  <ion-toolbar>\n    <ion-buttons style=\"margin-top:5%;\" slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Order Details</ion-title>\n  </ion-toolbar>\n </ion-header>\n\n<ion-content>\n  \n  <ng-container *ngIf=\"!nodata\">\n    <div>\n      <fieldset>\n        <legend><label>Order Info</label></legend>\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"8\">Date Order</ion-col>\n            <ion-col>{{data.date_order | date}}</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"8\"># Order</ion-col>\n            <ion-col>{{data.orderId | currency}}</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"8\">Cost Order</ion-col>\n            <ion-col>{{data.amount | currency}}</ion-col>\n          </ion-row>\n        </ion-grid>\n      </fieldset>\n    </div>\n    <div >\n      <fieldset>\n        <legend><p>Shipment Status</p></legend>\n          <h6>Ship to - {{data.shipment.shipping_destination}}</h6>\n          <h5>{{data.shipment.carrier}}</h5>\n          <p>{{data.shipment.trackingnumber}}<br></p>\n          <h5 *ngIf=\"data.shipment.status!=='Delivered'\">{{data.shipment.status}}</h5>\n          <ion-badge *ngIf=\"data.shipment.status=='Delivered'\" color=\"success\">Delivered</ion-badge>\n      </fieldset>\n    </div>\n    <div>\n      <fieldset>\n        <legend><p>Manage your order</p></legend>\n          <ion-button color=\"medium\" *ngIf=\"this.data.shipment.status!=='Shipped'\">\n            <ion-select (ionChange)=\"changeAddress(shippingAddress,data.orderId)\" [(ngModel)]=\"shippingAddress\" placeholder=\"Change shipping address\">\n              <ion-select-option *ngFor=\"let shipaddress of address\">{{shipaddress.address1}}</ion-select-option>\n            </ion-select>\n          </ion-button>\n          <ion-button *ngIf=\"this.data.shipment.status!=='CANCELLED' && this.data.shipment.status!=='Shipped' && this.data.shipment.status!=='Delivered'\" (click)=\"cancelOrder(data)\" color=\"danger\">Cancel Order</ion-button>\n          <ion-button *ngIf=\"this.data.shipment.status!=='Shipped'\" (click)=\"refunding(data)\" color=\"warning\">Ask for Refunds<ion-spinner id=\"spin2\" hidden=\"true\"></ion-spinner></ion-button>\n      </fieldset>\n    </div>\n    <div name=\"admin_purposes\" *ngIf=\"userType=='ADMIN'\">\n      <fieldset>\n        <legend><p>Carrier assigment</p>\n                <h6>admin only is authorized to manage carrier</h6>\n        </legend>\n         \n            <ion-button color=\"tertiary\">Claim payment</ion-button>\n            <div>\n            <ion-select  [(ngModel)]=\"carrier.name\" placeholder=\"Assign a carrier\">\n              \n              <ion-select-option>UPS</ion-select-option>\n              <ion-select-option>USPS</ion-select-option>\n              <ion-select-option>BPS</ion-select-option>\n              <ion-select-option>DHL Express</ion-select-option>\n              <ion-select-option>Katalog Express</ion-select-option>\n            </ion-select>\n          </div>\n          <div>\n            <ion-input type=\"text\" [(ngModel)]=\"carrier.tracking\" placeholder=\"Carrier tracking number\"></ion-input>\n          </div>\n          <div>\n            <ion-button (click)=\"setCarrier(carrier, data.orderId)\" color=\"secondary\">Set Carrier<ion-spinner id=\"spin\" hidden=\"true\" ></ion-spinner></ion-button>\n          </div>\n          \n      </fieldset>\n    </div>\n    <div>\n      <!-- <fieldset>\n        <legend><p>Payment Method</p></legend>\n          <ion-row><ion-col><h4>{{data.payment.method}}</h4></ion-col>\n            <ion-col *ngIf=\"data.payment.method=='PayPal'\">{{data.payment.credential.email}}</ion-col>\n            <ion-col *ngIf=\"data.payment.method=='MasterCard'\"><h6>XXXX XXXX {{data.payment.credential.options.substring(0,5)}}</h6></ion-col>\n            <ion-col *ngIf=\"data.payment.method=='MonCash'\">{{data.payment.credential.phone}}</ion-col>\n          </ion-row>\n           <ion-row>\n             <h4>Billing address</h4>\n             <p> {{data.shipment.shipping_destination}}</p>\n          </ion-row>\n      </fieldset> -->\n    </div>\n  </ng-container>\n   \n  <ng-container *ngIf=\"nodata\">\n    <div>\n      <fieldset>\n        <legend><p>Order Info</p></legend>\n        <ion-row><ion-col><h5>Date Order</h5></ion-col>\n              <ion-col><ion-skeleton-text><h6></h6></ion-skeleton-text></ion-col>  \n        </ion-row>\n        <ion-row><ion-col><h5># Order</h5></ion-col>\n          <ion-col><ion-skeleton-text><h6></h6></ion-skeleton-text></ion-col>  \n        </ion-row>\n        <ion-row><ion-col><h5>Cost Order</h5></ion-col>\n          <ion-col><ion-skeleton-text><h6></h6></ion-skeleton-text></ion-col>   \n        </ion-row>\n        \n      </fieldset> \n    </div>\n    <div >\n      <fieldset>\n        <legend><p>Shipment Status</p></legend>\n        <ion-skeleton-text><h5></h5></ion-skeleton-text> \n        <ion-skeleton-text><p></p></ion-skeleton-text> \n        <ion-skeleton-text><h5></h5></ion-skeleton-text> \n      </fieldset>\n    </div>\n    <div>\n      <fieldset>\n        <legend><p>Manage your order</p></legend>\n        <ion-skeleton-text><ion-button color=\"medium\">\n          <ion-select placeholder=\"Change shipping address\">\n            <ion-select-option>Option2</ion-select-option>\n          </ion-select>\n        </ion-button></ion-skeleton-text>  \n         <ion-skeleton-text>\n          <ion-button  color=\"danger\">Cancel order</ion-button>\n          <ion-button  color=\"warning\">Ask for Refunds</ion-button>\n          <ion-button color=\"tertiary\">Claim payment</ion-button>\n         </ion-skeleton-text> \n        <ion-skeleton-text>\n          <div>\n            <ion-select  placeholder=\"Assign a carrier\">\n              \n              <ion-select-option>UPS</ion-select-option>\n              <ion-select-option>USPS</ion-select-option>\n              <ion-select-option>BPS</ion-select-option>\n              <ion-select-option>DHL Express</ion-select-option>\n              <ion-select-option>Katalog Express</ion-select-option>\n            </ion-select>\n          </div>\n        </ion-skeleton-text>\n          <ion-skeleton-text>\n            <div>\n              <ion-button color=\"secondary\"></ion-button>\n            </div>\n          </ion-skeleton-text>\n          \n      </fieldset>\n    </div>\n    <div>\n      <fieldset>\n        <legend><p>Payment Method</p></legend>\n       <ion-row>\n        <ion-skeleton-text><ion-col><h6></h6></ion-col></ion-skeleton-text> \n        <ion-skeleton-text><ion-col><h6></h6></ion-col></ion-skeleton-text> \n           </ion-row>\n           <ion-row>\n            <ion-skeleton-text>\n              <h4>Billing address</h4>\n              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates vitae sit consectetur! Hic, tempore nihil! Quaerat tenetur vitae magnam quae? Odio a ullam ipsum voluptatibus rem mollitia, quia totam labore?</p>\n            </ion-skeleton-text>\n                       </ion-row>\n      </fieldset>\n    </div>\n  </ng-container>\n\n\n  \n\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar >\n    <ion-tabs>\n      <ion-tab-bar color=\"dark\">\n        <ion-tab-button routerLink=\"/home\"  routerDirection=\"forward\">\n          <ion-icon name=\"home-outline\"></ion-icon>\n          <ion-label>Home</ion-label>\n        </ion-tab-button>\n    \n        <ion-tab-button routerLink=\"/cart\"  routerDirection=\"forward\">\n          <ion-icon name=\"cart-outline\"></ion-icon>\n          <ion-label>Cart</ion-label>\n        </ion-tab-button>\n    \n        <ion-tab-button routerLink=\"/account\"  routerDirection=\"forward\">\n          <ion-icon name=\"person-circle-outline\"></ion-icon>\n          <ion-label>Profil</ion-label>\n        </ion-tab-button>\n    \n        <ion-tab-button routerLink=\"/order\"  routerDirection=\"forward\">\n          <ion-icon name=\"cube-outline\"></ion-icon>\n          <ion-label>Order</ion-label>\n        </ion-tab-button>\n      </ion-tab-bar>\n    \n    </ion-tabs>\n  </ion-toolbar>\n  \n</ion-footer>\n";
      /***/
    },

    /***/
    "tIIa":
    /*!*******************************************************!*\
      !*** ./src/app/order-details/order-details.module.ts ***!
      \*******************************************************/

    /*! exports provided: OrderDetailsPageModule */

    /***/
    function tIIa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderDetailsPageModule", function () {
        return OrderDetailsPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _order_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./order-details-routing.module */
      "678P");
      /* harmony import */


      var _order_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./order-details.page */
      "zoAX");

      var OrderDetailsPageModule = function OrderDetailsPageModule() {
        _classCallCheck(this, OrderDetailsPageModule);
      };

      OrderDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _order_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrderDetailsPageRoutingModule"]],
        declarations: [_order_details_page__WEBPACK_IMPORTED_MODULE_6__["OrderDetailsPage"]]
      })], OrderDetailsPageModule);
      /***/
    },

    /***/
    "zoAX":
    /*!*****************************************************!*\
      !*** ./src/app/order-details/order-details.page.ts ***!
      \*****************************************************/

    /*! exports provided: OrderDetailsPage */

    /***/
    function zoAX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderDetailsPage", function () {
        return OrderDetailsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_order_details_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./order-details.page.html */
      "8fxn");
      /* harmony import */


      var _order_details_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./order-details.page.scss */
      "8Svz");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/fire/auth */
      "UbJi");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "I/3d");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");
      /* harmony import */


      var util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! util */
      "MCLT");
      /* harmony import */


      var util__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_9__);

      var OrderDetailsPage = /*#__PURE__*/function () {
        function OrderDetailsPage(route, router, afirestore, fireAuth, alertcontroller, storage) {
          _classCallCheck(this, OrderDetailsPage);

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

        _createClass(OrderDetailsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.route.queryParams.subscribe(function (params) {
              if (_this.router.getCurrentNavigation().extras.state) {
                _this.data = _this.router.getCurrentNavigation().extras.state.order;
                _this.userType = _this.router.getCurrentNavigation().extras.state.type;
              }
            });

            if (!Object(util__WEBPACK_IMPORTED_MODULE_9__["isNullOrUndefined"])(this.data)) {
              this.nodata = false;
            } else {
              this.nodata = true;
            }
          }
        }, {
          key: "getAdresses",
          value: function getAdresses() {
            var _this2 = this;

            this.storage.get("address").then(function (data) {
              _this2.address = data;
            })["catch"](function (err) {
              console.log("addresses not found or empty");
            });
          }
        }, {
          key: "changeAddress",
          value: function changeAddress(address, orderId) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this3 = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.fireAuth.currentUser;

                    case 2:
                      this.msg.author = _context2.sent.uid;
                      this.msg.object = "ORDER_UPDATE";
                      this.msg.content = address;
                      this.msg.destination = "ADMIN";
                      this.msg.date_msg = new Date(Date.now());
                      this.afirestore.collection("messages").add(this.msg);
                      this.afirestore.collection('message').doc("ADMIN_ONE").collection('update').add(this.msg).then(function () {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                          var alert;
                          return regeneratorRuntime.wrap(function _callee$(_context) {
                            while (1) {
                              switch (_context.prev = _context.next) {
                                case 0:
                                  _context.next = 2;
                                  return this.alertcontroller.create({
                                    cssClass: 'my-custom-class',
                                    header: 'Alert',
                                    subHeader: 'Subtitle',
                                    message: 'Shipping address will change to.' + address + ' please verify your message box for confirmation',
                                    buttons: ['Ok']
                                  });

                                case 2:
                                  alert = _context.sent;
                                  _context.next = 5;
                                  return alert.present();

                                case 5:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          }, _callee, this);
                        }));
                      });

                    case 9:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "cancelOrder",
          value: function cancelOrder(data) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this4 = this;

              var userId, alert;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.fireAuth.currentUser;

                    case 2:
                      userId = _context3.sent.uid;
                      _context3.next = 5;
                      return this.alertcontroller.create({
                        cssClass: 'my-custom-class',
                        header: 'Alert',
                        subHeader: 'Cancel Order',
                        message: 'Do you really want to cancel order.' + data.orderId,
                        buttons: [{
                          text: 'OK',
                          cssClass: '',
                          handler: function handler(ok) {
                            _this4.afirestore.collection("orders").doc(userId).collection("customer_order").doc(data.orderId).update({
                              "shipment.status": "CANCELLED"
                            }).then(function () {
                              _this4.data.shipment.status = "User is cancelling the order";
                            })["catch"](function (reason) {
                              _this4.msgFaillure(reason);
                            });
                          }
                        }, {
                          text: 'Cancel',
                          cssClass: 'my-custom-class'
                        }]
                      });

                    case 5:
                      alert = _context3.sent;
                      _context3.next = 8;
                      return alert.present();

                    case 8:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "refunding",
          value: function refunding(data) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this5 = this;

              var userId, alert;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      document.getElementById("spin2").setAttribute("hidden", "false");
                      _context4.next = 3;
                      return this.fireAuth.currentUser;

                    case 3:
                      userId = _context4.sent.uid;
                      _context4.next = 6;
                      return this.alertcontroller.create({
                        cssClass: 'my-custom-class',
                        header: 'Alert',
                        subHeader: 'Assign carrier',
                        message: 'By starting a refund process you have to return back the purchased item. please contact customer services for support. ',
                        buttons: [{
                          text: 'OK',
                          cssClass: '',
                          handler: function handler(ok) {
                            _this5.afirestore.collection("orders").doc(userId).collection("customer_order").doc(data.orderId).update({
                              "shipment.status": "REFUNDS"
                            }).then(function () {
                              document.getElementById("spin2").setAttribute("hidden", "true");
                              _this5.data.shipment.status = "Refunds process started";
                            })["catch"](function (reason) {
                              _this5.msgFaillure(reason);

                              document.getElementById("spin2").setAttribute("hidden", "true");
                            });
                          }
                        }, {
                          text: 'Cancel',
                          cssClass: 'my-custom-class'
                        }]
                      });

                    case 6:
                      alert = _context4.sent;
                      _context4.next = 9;
                      return alert.present();

                    case 9:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "setCarrier",
          value: function setCarrier(carrier, orderId) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this6 = this;

              var userId, alert;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      if (!(carrier.name !== '' && carrier.tracking !== '' && carrier.name !== null && carrier.tracking !== null)) {
                        _context5.next = 12;
                        break;
                      }

                      document.getElementById("spin").setAttribute("hidden", "false");
                      _context5.next = 4;
                      return this.fireAuth.currentUser;

                    case 4:
                      userId = _context5.sent.uid;
                      _context5.next = 7;
                      return this.alertcontroller.create({
                        cssClass: 'my-custom-class',
                        header: 'Alert',
                        subHeader: 'Assign carrier',
                        message: 'Once you validate item will be shipped by carrier ' + carrier.name,
                        buttons: [{
                          text: 'OK',
                          cssClass: '',
                          handler: function handler(ok) {
                            _this6.afirestore.collection("orders").doc(userId).collection("customer_order").doc(orderId).update({
                              "shipment.status": "Shipped",
                              "shipment.carrier": carrier.name,
                              "shipment.tracking": carrier.tracking
                            }).then(function () {
                              document.getElementById("spin").setAttribute("hidden", "true");
                              _this6.data.shipment.status = "Shipped";
                            })["catch"](function (reason) {
                              _this6.msgFaillure(reason);

                              document.getElementById("spin").setAttribute("hidden", "true");
                            });
                          }
                        }, {
                          text: 'Cancel',
                          cssClass: 'my-custom-class'
                        }]
                      });

                    case 7:
                      alert = _context5.sent;
                      _context5.next = 10;
                      return alert.present();

                    case 10:
                      _context5.next = 13;
                      break;

                    case 12:
                      this.msgFaillure("No tracking number or carrier set");

                    case 13:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "msgFaillure",
          value: function msgFaillure(reason) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var alert;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.alertcontroller.create({
                        cssClass: 'my-custom-class',
                        header: 'Alert',
                        subHeader: 'Assign carrier',
                        message: 'Operation failed' + reason,
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context6.sent;
                      _context6.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }]);

        return OrderDetailsPage;
      }();

      OrderDetailsPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"]
        }];
      };

      OrderDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-order-details',
        template: _raw_loader_order_details_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_order_details_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], OrderDetailsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=order-details-order-details-module-es5.js.map