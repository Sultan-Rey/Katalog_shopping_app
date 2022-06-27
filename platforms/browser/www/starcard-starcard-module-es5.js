(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["starcard-starcard-module"], {
    /***/
    "2XHc":
    /*!*******************************************!*\
      !*** ./src/app/starcard/starcard.page.ts ***!
      \*******************************************/

    /*! exports provided: StarcardPage */

    /***/
    function XHc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StarcardPage", function () {
        return StarcardPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_starcard_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./starcard.page.html */
      "BPua");
      /* harmony import */


      var _starcard_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./starcard.page.scss */
      "2Y+N");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "I/3d");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/fire/auth */
      "UbJi");
      /* harmony import */


      var util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! util */
      "MCLT");
      /* harmony import */


      var util__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_7__);
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");
      /* harmony import */


      var _firestore_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../firestore-data.service */
      "UbTl");

      var StarcardPage = /*#__PURE__*/function () {
        function StarcardPage(afirestore, alertcontroller, storage, loadingcontroller, fireAuth, fsdataService) {
          _classCallCheck(this, StarcardPage);

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
            slidesPerView: 2
          };
          this.starcard = {};
          this.starcard.transactions = [];
          this.starcard.reedem = [];
          this.paymentMethod = [];
        }

        _createClass(StarcardPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.fireAuth.authState.subscribe(function (auth) {
              if (!auth.emailVerified) {
                _this.connected = false;
              } else {
                _this.connected = true;

                _this.getCardAccount();
              }
            });
          }
        }, {
          key: "getPaymethod",
          value: function getPaymethod() {
            var _this2 = this;

            this.storage.get("paymethod").then(function (data) {
              _this2.paymentMethod = data;

              if (_this2.paymentMethod.length !== 0 && _this2.paymentMethod !== null) {
                _this2.paymentMethod.forEach(function (method) {
                  if (method["default"] == true) {
                    _this2.defaultMethod = method;
                  }
                });
              }
            })["catch"](function (err) {
              console.log("cart not found or empty");
            });
          }
        }, {
          key: "refill",
          value: function refill(devise, amount) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var paypal, mc, alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.getPaymethod();

                      if (!(devise == 'USD')) {
                        _context.next = 15;
                        break;
                      }

                      paypal = this.paymentMethod.find(function (paymethod) {
                        return paymethod.method == 'PayPal' && paymethod["default"] == true;
                      });
                      mc = this.paymentMethod.find(function (paymethod) {
                        return paymethod.method == 'MasterCard' && paymethod["default"] == true;
                      });

                      if (Object(util__WEBPACK_IMPORTED_MODULE_7__["isNullOrUndefined"])(paypal)) {
                        _context.next = 7;
                        break;
                      }

                      _context.next = 15;
                      break;

                    case 7:
                      if (Object(util__WEBPACK_IMPORTED_MODULE_7__["isNullOrUndefined"])(mc)) {
                        _context.next = 10;
                        break;
                      }

                      _context.next = 15;
                      break;

                    case 10:
                      _context.next = 12;
                      return this.alertcontroller.create({
                        cssClass: 'my-custom-class',
                        header: 'Alert',
                        subHeader: 'Subtitle',
                        message: 'No default payment method available.',
                        buttons: ['Ok']
                      });

                    case 12:
                      alert = _context.sent;
                      _context.next = 15;
                      return alert.present();

                    case 15:
                      if (devise == 'HTG') {}

                    case 16:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "crypto",
          value: function crypto() {
            var _character = ['*', 'C', ')', '#', '&', '!', '?', '%', '@', '^', ':', 'D', '?'];
            var sequence = Math.floor(Math.random() * 100);
            var index = Math.floor(Math.random() * 12);
            var encryption = _character[index] + _character[index + 1] + sequence + "-" + Date.now();
            return encryption;
          }
        }, {
          key: "getCardAccount",
          value: function getCardAccount() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this3 = this;

              var userId;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.fireAuth.currentUser;

                    case 2:
                      userId = _context2.sent.uid;
                      this.card = new Array();
                      this.cardCollection = this.afirestore.collection('starcard');
                      this.cardCollection.doc(userId).snapshotChanges().subscribe(function (card) {
                        _this3.isRegistred = true;
                        _this3.starcard.id = card.payload.get("id");
                        _this3.starcard.devise = card.payload.get("devise");
                        _this3.starcard.amount = card.payload.get("amount");
                        _this3.starcard.reedem = card.payload.get("reedem");
                        _this3.starcard.transactions = card.payload.get("transactions");
                        _this3.starcard.activation = card.payload.get("activation");
                      }).unsubscribe();

                    case 6:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "register",
          value: function register(card) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this4 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      this.cardCollection = this.afirestore.collection('starcard');

                      if (!(card.devise !== "" && card.devise !== null)) {
                        _context4.next = 14;
                        break;
                      }

                      this.starcard.id = this.crypto();
                      this.starcard.amount = 0.00;
                      this.starcard.reedem = [];
                      this.starcard.transactions = [];
                      this.starcard.activation = true;
                      _context4.t0 = this.cardCollection;
                      _context4.next = 10;
                      return this.fireAuth.currentUser;

                    case 10:
                      _context4.t1 = _context4.sent.uid;

                      _context4.t0.doc.call(_context4.t0, _context4.t1).set(this.starcard).then(function () {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                          var _this5 = this;

                          var loading;
                          return regeneratorRuntime.wrap(function _callee3$(_context3) {
                            while (1) {
                              switch (_context3.prev = _context3.next) {
                                case 0:
                                  _context3.next = 2;
                                  return this.loadingcontroller.create({
                                    cssClass: 'my-custom-class',
                                    message: 'Please wait...',
                                    duration: 2000
                                  }).then(function (loaded) {
                                    loaded.present();
                                    loaded.onDidDismiss().then(function (dismiss) {
                                      _this5.isRegistred = true;
                                      console.log(dismiss);
                                      var starmethod = {
                                        id: _this5.starcard.id,
                                        method: 'StarCard',
                                        provider: 'KATALOG',
                                        credential: {},
                                        "default": false
                                      };

                                      _this5.saveMethod(starmethod);

                                      _this5.getCardAccount();
                                    });
                                  });

                                case 2:
                                  loading = _context3.sent;

                                case 3:
                                case "end":
                                  return _context3.stop();
                              }
                            }
                          }, _callee3, this);
                        }));
                      }, function (rejected) {
                        console.log("reason" + rejected);
                        _this4.starcard.activation = false;
                      });

                      _context4.next = 19;
                      break;

                    case 14:
                      _context4.next = 16;
                      return this.alertcontroller.create({
                        cssClass: 'my-custom-class',
                        header: 'Alert',
                        subHeader: 'Subtitle',
                        message: 'please select a currency before.',
                        buttons: ['Ok']
                      });

                    case 16:
                      alert = _context4.sent;
                      _context4.next = 19;
                      return alert.present();

                    case 19:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "saveMethod",
          value: function saveMethod(method) {
            var isAdded = false;
            this.storage.get("paymethod").then(function (data) {
              if (data === null || data.length === 0) {
                data = [];
                data.push(method);
              } else {
                var _iterator = _createForOfIteratorHelper(data),
                    _step;

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var item = _step.value;

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
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }

                if (!isAdded) {
                  data.push(method);
                }
              }
            });
          }
        }, {
          key: "selected",
          value: function selected(name) {
            this.starcard.devise = name;
          }
        }, {
          key: "changeTagColor",
          value: function changeTagColor(i) {
            if (this.tagDefaultColor[i] === "medium") {
              this.tagDefaultColor[0] = "medium";
              this.tagDefaultColor[1] = "medium";
              this.tagDefaultColor[i] = "primary";
            } else {// event.target.setAttribute('color', 'secondary') this is redundant
            }
          }
        }]);

        return StarcardPage;
      }();

      StarcardPage.ctorParameters = function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"]
        }, {
          type: _firestore_data_service__WEBPACK_IMPORTED_MODULE_9__["FirestoreDataService"]
        }];
      };

      StarcardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-starcard',
        template: _raw_loader_starcard_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_starcard_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], StarcardPage);
      /***/
    },

    /***/
    "2Y+N":
    /*!*********************************************!*\
      !*** ./src/app/starcard/starcard.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function YN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".btn-register {\n  font-size: 12px;\n}\n\nion-select {\n  width: 120px;\n}\n\n.my-custom-class {\n  --background: #222;\n  --spinner-color: #fff;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhcmNhcmQvc3RhcmNhcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQUNKOztBQUNDO0VBQ0ksWUFBQTtBQUVMOztBQUFDO0VBQ0csa0JBQUE7RUFDQSxxQkFBQTtFQUVBLFdBQUE7QUFFSiIsImZpbGUiOiJzcmMvYXBwL3N0YXJjYXJkL3N0YXJjYXJkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4tcmVnaXN0ZXJ7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuIH1cbiBpb24tc2VsZWN0e1xuICAgICB3aWR0aDogMTIwcHg7XG4gfVxuIC5teS1jdXN0b20tY2xhc3Mge1xuICAgIC0tYmFja2dyb3VuZDogIzIyMjtcbiAgICAtLXNwaW5uZXItY29sb3I6ICNmZmY7XG4gIFxuICAgIGNvbG9yOiAjZmZmO1xuICB9Il19 */";
      /***/
    },

    /***/
    "BPua":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/starcard/starcard.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function BPua(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header  mode=ios>\n  <ion-toolbar  color=\"dark\">\n    <ion-buttons slot=\"start\">\n   <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-buttons>\n      <ion-title  class=\"width\" mode=ios >\n        <ion-text size=\"LARGE\" color=\"warning\">\n          K</ion-text>\n          <ion-text color=\"danger\"><ion-icon size=\"LARGE\" name=cart></ion-icon></ion-text>\n          <ion-text >ta</ion-text><img title=\"app header\" alt=\"image icon\" class=\"icon\" src=\"assets/icon/lipstick.png\"/><ion-text>og</ion-text>\n        </ion-title>\n    </ion-buttons>\n\n  </ion-toolbar>\n  <ion-buttons>\n    <ion-item-divider>\n      <ion-label>Pay faster with your starcard</ion-label>\n    </ion-item-divider>\n  </ion-buttons>\n </ion-header>\n\n<ion-content>\n\n  <div *ngIf=\"connected==false\" name=\"authentification\" class=\"ion-padding\">\n    <ion-buttons>\n      <ion-button routerLink=\"/login\" routerDirection=\"forward\" expand=\"block\">SIGN IN BEFORE USE STARCARD</ion-button>\n    </ion-buttons>\n  </div>\n  <div *ngIf=\"connected==true\" name=\"starcard\" class=\"ion-padding\">\n\n    <div *ngIf=\"!starcard.activation\" name=\"starcard_activation\">\n      <ion-card>\n        <ion-item>\n          <ion-card-title class=\"ion-padding\">STAR CARD \n          </ion-card-title>\n          <ion-buttons slot=\"end\">\n            <ion-radio-group >\n              <ion-chip [id]=\"child.id\" [color]=\"tagDefaultColor[i]\" (click)=\"changeTagColor(i)\" *ngFor=\"let child of devise;let i = index\">\n                <ion-radio (click)=\"selected(child)\" ></ion-radio><ion-label>{{child}}</ion-label>\n              </ion-chip>\n            </ion-radio-group>\n            </ion-buttons>\n        </ion-item>\n       \n        <ion-card-subtitle class=\"ion-padding\">Register to STAR CARD and benefits 10% off</ion-card-subtitle>\n        <ion-button size=\"small\" (click)=\"register(starcard)\" class=\"btn-register\" expand=\"block\" >Register Now</ion-button>\n        <ion-card-header>STAR CARD is an original KATALOG payment method which is secure and help you to pay easily</ion-card-header>\n        </ion-card>\n       \n    </div>\n    <div *ngIf=\"starcard.activation && isRegistred==true\" name=\"starcard_content\">\n\n      <div class=\"container\">\n        <ion-item>\n          <ion-label>Star Card balance :</ion-label>\n          <ion-badge slot=\"end\" color=\"medium\">{{starcard.amount}}</ion-badge>\n        </ion-item>\n      </div>\n      <div class=\"container\">\n        <ion-item>\n          <ion-label>Reedem your Star Card</ion-label>\n          <ion-chip slot=\"end\">Devise : {{starcard.devise}}</ion-chip>\n        </ion-item>\n        <ion-item-sliding>\n          <ion-slides [options]=\"slidersOpts\">\n            <ng-container *ngIf=\"starcard.devise=='USD'\">\n              <ion-slide (click)=\"refill('USD',star)\" *ngFor=\"let star of starReedemUSD\"><ion-card>\n                <ion-card-content>\n                  <ion-card-title>{{star|currency}}</ion-card-title>\n                  <ion-card-subtitle>Add {{star|currency}} to your star card</ion-card-subtitle>\n                </ion-card-content>\n                </ion-card></ion-slide>\n            </ng-container>\n            <ng-container *ngIf=\"starcard.devise=='HTG'\">\n              <ion-slide *ngFor=\"let star of starReedemHTG\"><ion-card>\n                <ion-card-content>\n                  <ion-card-title>{{star}} gdes</ion-card-title>\n                  <ion-card-subtitle>Add {{star}} gdes to your star card</ion-card-subtitle>\n                </ion-card-content>\n                </ion-card></ion-slide>\n            </ng-container>\n          \n    \n          </ion-slides>\n        </ion-item-sliding>\n      </div>\n    \n      <div class=\"container\">\n        <ion-list>\n          <ion-item><ion-label>Reedem Historic</ion-label></ion-item>\n          <ion-row>\n            <ion-col size=\"7\"><b>Amount</b></ion-col>\n            <ion-col ><b>purchased date</b></ion-col>\n          </ion-row>\n          <ion-row *ngFor=\"let reedem of starcard.reedem\">\n            <ion-col size=\"7\"><ion-label>{{reedem.amount}}</ion-label></ion-col>\n            <ion-col ><ion-label>{{reedem.date|date}}</ion-label></ion-col>\n          </ion-row>\n          <ion-item><ion-label>Total Refilling</ion-label>\n                    <ion-badge slot=\"end\">0.00$</ion-badge>\n          </ion-item>\n        </ion-list>\n        \n      </div>\n    \n      <div class=\"container\">\n        <ion-list>\n          <ion-item><ion-label>Transactions</ion-label></ion-item>\n          <ion-row >\n            <ion-col size=\"4\"><b>Order Id</b></ion-col>\n            <ion-col size=\"4\"><b>Amount</b></ion-col>\n            <ion-col ><b>Transaction date</b></ion-col>\n          </ion-row>\n          <ion-row *ngFor=\"let transac of starcard.transactions\">\n            <ion-col size=\"4\"><ion-label> {{transac.orderId}} </ion-label></ion-col>\n            <ion-col size=\"4\"><ion-label>{{transac.amount}}</ion-label></ion-col>\n            <ion-col ><ion-label>{{transac.date|date}}</ion-label></ion-col>\n          </ion-row>\n          <ion-item><ion-label>Total Transactions</ion-label>\n                    <ion-badge slot=\"end\">0.00$</ion-badge>\n          </ion-item>\n        </ion-list>\n      </div>\n    </div>\n\n  </div>\n  \n \n</ion-content>\n<ion-footer>\n  <ion-toolbar class=\"footer\">\n    <ion-row round>\n      <ion-col offset-1 col-10 routerLink=\"/home\"  routerDirection=\"forward\">\n        <ion-icon class=\"footerIcon\" name=\"home-outline\"></ion-icon>\n        <div class=\"touch\">\n        <h4>Home</h4>\n       </div>  \n    </ion-col>\n      <ion-col offset-1 col-10 routerLink=\"/cart\"  routerDirection=\"forward\">\n        <ion-icon class=\"footerIcon\" name=\"cart-outline\"></ion-icon>\n        <div class=\"touch\">\n          <h4>Cart</h4>\n         </div> \n      </ion-col>\n      <ion-col offset-1 col-10 routerLink=\"/profil\"  routerDirection=\"forward\">\n        <ion-icon class=\"footerIcon\" name=\"person-outline\"></ion-icon>\n        <div class=\"touch\">\n          <h4>Profil</h4>\n         </div> \n      </ion-col>\n      <ion-col offset-1 col-10 routerLink=\"/order\"  routerDirection=\"forward\">\n        <ion-icon class=\"footerIcon\" name=\"cube-outline\"></ion-icon>\n        <div class=\"touch\">\n          <h4>Order...</h4>\n         </div> \n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>";
      /***/
    },

    /***/
    "UbTl":
    /*!*******************************************!*\
      !*** ./src/app/firestore-data.service.ts ***!
      \*******************************************/

    /*! exports provided: FirestoreDataService */

    /***/
    function UbTl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FirestoreDataService", function () {
        return FirestoreDataService;
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


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "I/3d");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/fire/auth */
      "UbJi");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");

      var FirestoreDataService = /*#__PURE__*/function () {
        function FirestoreDataService(afs, afAuth, storage) {
          _classCallCheck(this, FirestoreDataService);

          this.afs = afs;
          this.afAuth = afAuth;
          this.storage = storage;
          this.userId = '';
        }

        _createClass(FirestoreDataService, [{
          key: "getAuthState",
          value: function getAuthState() {
            var _this6 = this;

            this.afAuth.authState.subscribe(function (auth) {
              if (!auth) {
                _this6.connected = false;
              } else {
                _this6.connected = true;
              }
            });
            return this.connected;
          }
        }, {
          key: "getConnexionState",
          value: function getConnexionState() {
            return globalThis.navigator.onLine;
          }
        }, {
          key: "getMainSlides",
          value: function getMainSlides() {
            this.slidesDocument = this.afs.collection('homepane').doc('d0pWnLNzch6ACeFKJmrj');
            this.slides = this.slidesDocument.valueChanges();
            return this.slides;
          }
        }, {
          key: "getCategories",
          value: function getCategories() {
            this.categoriesCollection = this.afs.collection('categories', function (q) {
              return q.orderBy("categoryName", "asc").limit(4);
            });
            this.category = this.categoriesCollection.valueChanges();
            return this.category;
          }
        }, {
          key: "getAllcategories",
          value: function getAllcategories() {
            this.categoriesCollection = this.afs.collection('categories', function (q) {
              return q.orderBy("categoryName");
            });
            this.category = this.categoriesCollection.valueChanges();
            return this.category;
          }
        }, {
          key: "getBrands",
          value: function getBrands() {
            this.brandsCollection = this.afs.collection('brands', function (q) {
              return q.orderBy("date_added", "asc").limit(4);
            });
            this.brand = this.brandsCollection.valueChanges();
            return this.brand;
          }
        }, {
          key: "getbyPromotion",
          value: function getbyPromotion(promo) {
            this.productCollection = this.afs.collection('product', function (q) {
              return q.where("display.position", "==", promo);
            });
            this.product = this.productCollection.valueChanges();
            return this.product;
          }
        }, {
          key: "getFirestoreData",
          value: function getFirestoreData() {
            var _this7 = this;

            this.items = new Array();
            this.productCollection = this.afs.collection('product');
            this.product = this.productCollection.valueChanges();
            /*
            * Product subscription for uploading
            */

            this.product.subscribe(function (observer) {
              observer.forEach(function (e) {
                _this7.items.push({
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
        }, {
          key: "getProducts",
          value: function getProducts() {
            this.productCollection = this.afs.collection('product', function (q) {
              return q.orderBy('creation_date', 'desc');
            });
            this.product = this.productCollection.valueChanges();
            return this.product;
          }
        }, {
          key: "getHomeDesign",
          value: function getHomeDesign() {
            this.homeCollection = this.afs.collection('homepane', function (q) {
              return q.orderBy("range", "asc");
            });
            this.homeDesign = this.homeCollection.valueChanges();
            return this.homeDesign;
          }
        }, {
          key: "filterByCategory",
          value: function filterByCategory(category) {
            this.productCollection = this.afs.collection('product', function (q) {
              return q.where("category", "==", category).orderBy("creation_date", "desc");
            });
            this.product = this.productCollection.valueChanges();
            return this.product;
          }
        }, {
          key: "filterByBrand",
          value: function filterByBrand(category) {
            this.productCollection = this.afs.collection('product', function (q) {
              return q.where("brand", "==", category).orderBy("creation_date", "desc");
            });
            this.product = this.productCollection.valueChanges();
            return this.product;
          }
        }, {
          key: "filterBySearchQueries",
          value: function filterBySearchQueries(query) {
            this.productCollection = this.afs.collection('product', function (q) {
              return q.where("description", "==", query).orderBy("creation_date", "desc");
            });
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

        }, {
          key: "getFirestoreOrder",
          value: function getFirestoreOrder() {
            var _this8 = this;

            this.ordersCollection = this.afs.collection('orders', function (q) {
              return q.where("customerId", "==", _this8.userId);
            });
            this.orderData = this.ordersCollection.valueChanges();
            return this.orderData;
          }
        }, {
          key: "getOrder",
          value: function getOrder(param) {
            this.ordersCollection = this.afs.collection('orders', function (q) {
              return q.where("customerId", "==", param);
            });
            this.orderData = this.ordersCollection.valueChanges();
            return this.orderData;
          }
        }, {
          key: "getUsers",
          value: function getUsers() {
            this.usersCollection = this.afs.collection('user');
            this.user = this.usersCollection.valueChanges();
            return this.user;
          }
        }, {
          key: "getMessage",
          value: function getMessage() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this9 = this;

              var boxOwner;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.afAuth.currentUser;

                    case 2:
                      boxOwner = _context5.sent.uid;
                      this.msg = new Array();
                      this.msgCollection = this.afs.collection('message');
                      this.message = this.msgCollection.doc(boxOwner).collection('update').valueChanges();
                      this.message.subscribe(function (observer) {
                        observer.forEach(function (e) {
                          _this9.msg.push({
                            author: e.author,
                            destination: e.destination,
                            object: e.object,
                            content: e.content,
                            date_msg: e.date_msg
                          });
                        });
                      });
                      return _context5.abrupt("return", this.msg);

                    case 8:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "removeProduct",
          value: function removeProduct(item) {
            this.productCollection = this.afs.collection('product', function (q) {
              return q.where("description", "==", item.description);
            });
            this.productCollection.get().toPromise().then(function (querySnapshot) {
              querySnapshot.forEach(function (dd) {
                dd.ref["delete"]();
              });
            });
          }
        }, {
          key: "editProduct",
          value: function editProduct(item) {
            this.productCollection = this.afs.collection('product', function (q) {
              return q.where("description", "==", item.description);
            });
            return this.productCollection.get().toPromise().then(function (querySnapshot) {
              querySnapshot.forEach(function (dd) {
                dd.ref.update(item);
              });
            });
          }
        }]);

        return FirestoreDataService;
      }();

      FirestoreDataService.ctorParameters = function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]
        }];
      };

      FirestoreDataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], FirestoreDataService);
      /***/
    },

    /***/
    "YWbQ":
    /*!*********************************************!*\
      !*** ./src/app/starcard/starcard.module.ts ***!
      \*********************************************/

    /*! exports provided: StarcardPageModule */

    /***/
    function YWbQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StarcardPageModule", function () {
        return StarcardPageModule;
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


      var _starcard_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./starcard-routing.module */
      "crfo");
      /* harmony import */


      var _starcard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./starcard.page */
      "2XHc");

      var StarcardPageModule = function StarcardPageModule() {
        _classCallCheck(this, StarcardPageModule);
      };

      StarcardPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _starcard_routing_module__WEBPACK_IMPORTED_MODULE_5__["StarcardPageRoutingModule"]],
        declarations: [_starcard_page__WEBPACK_IMPORTED_MODULE_6__["StarcardPage"]]
      })], StarcardPageModule);
      /***/
    },

    /***/
    "crfo":
    /*!*****************************************************!*\
      !*** ./src/app/starcard/starcard-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: StarcardPageRoutingModule */

    /***/
    function crfo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StarcardPageRoutingModule", function () {
        return StarcardPageRoutingModule;
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


      var _starcard_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./starcard.page */
      "2XHc");

      var routes = [{
        path: '',
        component: _starcard_page__WEBPACK_IMPORTED_MODULE_3__["StarcardPage"]
      }];

      var StarcardPageRoutingModule = function StarcardPageRoutingModule() {
        _classCallCheck(this, StarcardPageRoutingModule);
      };

      StarcardPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], StarcardPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=starcard-starcard-module-es5.js.map