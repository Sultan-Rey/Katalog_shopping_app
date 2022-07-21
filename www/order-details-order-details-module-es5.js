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


      __webpack_exports__["default"] = "ion-content {\n  --background: #f1f3f4;\n}\nion-content ion-img {\n  width: 50px;\n  height: 50px;\n}\nion-content table th, ion-content td {\n  font-size: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXItZGV0YWlscy9vcmRlci1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FBQ0o7QUFBSTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBRUo7QUFBSTtFQUNFLGVBQUE7QUFFTiIsImZpbGUiOiJzcmMvYXBwL29yZGVyLWRldGFpbHMvb3JkZXItZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcbiAgICAtLWJhY2tncm91bmQ6ICNmMWYzZjQ7XG4gICAgaW9uLWltZ3tcbiAgICB3aWR0aDogNTBweDsgXG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIH1cbiAgICB0YWJsZSB0aCx0ZHtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB9XG4gIH0iXX0= */";
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


      __webpack_exports__["default"] = "<ion-header mode=ios>\n  <ion-toolbar>\n    <ion-title>Order Details</ion-title>\n  </ion-toolbar>\n </ion-header>\n\n<ion-content>\n  \n  <div class=\"container-fluid p-4 overflow-hidden\">\n    <div class=\"row g-4\">\n      <div class=\"col-lg-8\">\n        <div class=\"border bg-white p-3\">\n           \n            <div class=\"border p-2 rounded\">\n              <h6>Shipping Address</h6>\n              <p>Renald Occean 32977921 <br> London crest 16 Ave bwm apt46 <br> Fort-lauderdale - 33298 <br> United States</p>\n            </div>\n            <div class=\"border p-2 rounded\">\n              <h6>Shipment Status</h6>\n              <ion-grid>\n                <ion-row>\n                  <ion-col>\n                    <ion-buttons>\n                      <ion-item-group>\n                        <ion-avatar><ion-img src=\"../../assets/box_order.jpeg\"></ion-img></ion-avatar>\n                        <small>Packaging</small>\n                      </ion-item-group>\n                      <ion-progress-bar></ion-progress-bar>\n                    </ion-buttons>\n                  </ion-col>\n                  <ion-col>\n                    <ion-buttons>\n                      <ion-item-group>\n                        <ion-avatar><ion-img src=\"../../assets/shipping.png\"></ion-img></ion-avatar>\n                        <small>Shipped</small>\n                      </ion-item-group>\n                      <ion-progress-bar></ion-progress-bar>\n                    </ion-buttons>\n                  </ion-col>\n                  <ion-col>\n                    <ion-buttons>\n                      <ion-item-group>\n                        <ion-avatar><ion-img src=\"../../assets/delivery.jpeg\"></ion-img></ion-avatar>\n                        <small>Delivered</small>\n                      </ion-item-group>\n                      <ion-progress-bar></ion-progress-bar>\n                    </ion-buttons>\n                  </ion-col>\n                  <ion-col>\n                    <ion-buttons>\n                      <ion-item-group>\n                        <ion-avatar class=\"rounded\"><ion-icon size=\"large\" color=\"success\" name=\"checkmark-done-circle-outline\"></ion-icon></ion-avatar>\n                        <small>Completed</small>\n                      </ion-item-group>\n                    </ion-buttons>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </div>\n            <ion-buttons>\n              <ion-button>Tracking historic</ion-button>\n              <ion-button color=\"danger\">Cancel order </ion-button>\n              <ion-button color=\"warning\">Ask for refunds </ion-button>\n            </ion-buttons>\n        </div>\n      </div>\n\n      <div class=\"col-lg-4\">\n        <div class=\"border bg-white p-3\">\n          \n          <div class=\"border p-2 rounded\">\n            <h6>Payment Method</h6>\n            <ion-row lines=\"none\">\n              <ion-thumbnail>\n                <ion-img src=\"../../assets/icon/Google-Pay-Logo.png\" style=\"width: 40px; height: 40px;\"></ion-img>\n              </ion-thumbnail>\n              <ion-label >Google Pay</ion-label>\n            </ion-row>\n            \n          </div>\n          <div class=\"border p-2 rounded\">\n            <h6>Order Info</h6>\n            <table class=\"table table-striped\">\n              <thead>\n                <tr>\n                  <th scope=\"col\">#Order : 890966448</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <th scope=\"row\">Date order</th>\n                  <td>26 mars 2020</td>\n                </tr>\n                <tr>\n                  <th scope=\"row\"># items of order</th>\n                  <td>4</td>\n                </tr>\n                <tr>\n                  <th scope=\"row\">Shipping & Handling</th>\n                  <td>9$</td>\n                </tr>\n                <tr>\n                  <th scope=\"row\">Total cost</th>\n                  <td>12244$</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n          \n        </div>\n      </div>\n    </div>\n  </div>\n\n\n  \n\n\n</ion-content>\n\n";
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