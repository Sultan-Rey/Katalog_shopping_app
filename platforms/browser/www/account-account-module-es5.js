(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-account-module"], {
    /***/
    "+aji":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/account.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function aji(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-page-header></app-page-header>\n\n<ion-content>\n  <div class=\"container p-4\">\n    <h3>{{welcomeWord}}</h3>\n    <div class=\"row g-4 mt-2\">\n        <div class=\"col-lg-4 col-md-6 col-12\">\n          <div class=\"border rounded p-3\">\n            <ion-item button routerLink=\"/order\" routerDirection=\"forward\" lines=\"none\" class=\"ion-text-wrap\" slot=\"none\" >\n              <ion-avatar slot=\"start\" class=\"border\">\n                  <img src=\"../../assets/box_order.jpeg\"/>\n              </ion-avatar>\n              <ion-label>\n                <ion-item-group>\n                  <h5><b>Your Orders</b></h5>\n                  <p class=\"text-muted\">See your past orders, track and <br>return</p>\n                </ion-item-group>\n              </ion-label>\n            </ion-item>\n          </div>\n        </div>\n\n        <div class=\"col-lg-4 col-md-6 col-12\" >\n          <div class=\"border  rounded p-3\" (click)=\"navigateTo('Recent Views','navigation_directive')\" >\n            <ion-item button lines=\"none\" class=\"ion-text-wrap\" slot=\"none\" >\n              <ion-avatar slot=\"start\" class=\"border\">\n                  <img src=\"../../assets/historic.jpeg\"/>\n              </ion-avatar>\n              <ion-label>\n                <ion-item-group>\n                  <h5><b>Browsing Historic</b></h5>\n                  <p class=\"text-muted\">Items you have seen, you might<br> want to buy</p>\n                </ion-item-group>\n              </ion-label>\n            </ion-item>\n          </div>\n        </div>\n\n        <div class=\"col-lg-4 col-md-6 col-12\">\n          <div class=\"border rounded p-3\" (click)=\"navigateTo('Wish List','navigation_directive')\">\n            <ion-item  button lines=\"none\" class=\"ion-text-wrap\" slot=\"none\" >\n              <ion-avatar slot=\"start\" class=\"border\">\n                  <img src=\"../../assets/list.png\"/>\n              </ion-avatar>\n              <ion-label>\n                <ion-item-group>\n                  <h5><b>Favorites List</b></h5>\n                  <p class=\"text-muted\">Wish List, item you like and you put <br> in favorite</p>\n                </ion-item-group>\n              </ion-label>\n            </ion-item>\n          </div>\n        </div>\n\n        <div class=\"col-lg-4 col-md-6 col-12\">\n          <div class=\"border rounded p-3\"  >\n            <ion-item routerLink=\"/helpcenter\" routerDirection=\"forward\" button lines=\"none\" class=\"ion-text-wrap\" slot=\"none\" >\n              <ion-avatar slot=\"start\" class=\"border\">\n                  <img src=\"../../assets/customer_service.png\"/>\n              </ion-avatar>\n              <ion-label>\n                <ion-item-group>\n                  <h5><b>Customer Service</b></h5>\n                  <p class=\"text-muted\">Help, customer support, trouble<br>report</p>\n                </ion-item-group>\n              </ion-label>\n            </ion-item>\n          </div>\n        </div>\n\n        <div class=\"col-lg-4 col-md-6 col-12\">\n          <div class=\"border rounded p-3\" >\n            <ion-item button lines=\"none\" class=\"ion-text-wrap\" slot=\"none\" routerLink=\"/login\" routerDirection=\"forward\" >\n              <ion-avatar slot=\"start\" class=\"border\">\n                  <img src=\"../../assets/icon-password.jpeg\"/>\n              </ion-avatar>\n              <ion-label>\n                <ion-item-group>\n                  <h5><b>Login & Password</b></h5>\n                  <p class=\"text-muted\">Sign in, sign out, update your <br>current password</p>\n                </ion-item-group>\n              </ion-label>\n            </ion-item>\n          </div>\n        </div>\n\n        <div class=\"col-lg-4 col-md-6 col-12\">\n          <div class=\"border rounded p-3\">\n            <ion-item button lines=\"none\" class=\"ion-text-wrap\" slot=\"none\"  routerLink=\"/policy\" routerDirection=\"forward\">\n              <ion-avatar slot=\"start\" class=\"border\">\n                  <img src=\"../../assets/privacy.png\"/>\n              </ion-avatar>\n              <ion-label>\n                <ion-item-group>\n                  <h5><b>Policy & Terms</b></h5>\n                  <p class=\"text-muted\">return and conflict policies, terms<br> and conditions buyers</p>\n                </ion-item-group>\n              </ion-label>\n            </ion-item>\n          </div>\n        </div>\n    </div>\n  </div>\n \n    \n\n  \n</ion-content>\n";
      /***/
    },

    /***/
    "jcJX":
    /*!*******************************************!*\
      !*** ./src/app/account/account.module.ts ***!
      \*******************************************/

    /*! exports provided: AccountPageModule */

    /***/
    function jcJX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountPageModule", function () {
        return AccountPageModule;
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


      var _sharedviews_sharedviews_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../sharedviews/sharedviews.module */
      "l+lL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _account_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./account-routing.module */
      "sGj0");
      /* harmony import */


      var _account_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./account.page */
      "mdzQ");

      var AccountPageModule = function AccountPageModule() {
        _classCallCheck(this, AccountPageModule);
      };

      AccountPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _sharedviews_sharedviews_module__WEBPACK_IMPORTED_MODULE_4__["SharedviewsModule"], _account_routing_module__WEBPACK_IMPORTED_MODULE_6__["AccountPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [_account_page__WEBPACK_IMPORTED_MODULE_7__["AccountPage"]]
      })], AccountPageModule);
      /***/
    },

    /***/
    "mdzQ":
    /*!*****************************************!*\
      !*** ./src/app/account/account.page.ts ***!
      \*****************************************/

    /*! exports provided: AccountPage */

    /***/
    function mdzQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountPage", function () {
        return AccountPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_account_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./account.page.html */
      "+aji");
      /* harmony import */


      var _account_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./account.page.scss */
      "n3U/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/fire/auth */
      "UbJi");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "I/3d");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");
      /* harmony import */


      var src_models_user__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/models/user */
      "Oj1a");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _firestore_data_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../firestore-data.service */
      "UbTl");

      var AccountPage = /*#__PURE__*/function () {
        function AccountPage(formBuilder, fireauth, router, afstore, fireService, loadingcontroller, storage) {
          var _this = this;

          _classCallCheck(this, AccountPage);

          this.formBuilder = formBuilder;
          this.fireauth = fireauth;
          this.router = router;
          this.afstore = afstore;
          this.fireService = fireService;
          this.loadingcontroller = loadingcontroller;
          this.storage = storage;
          this.isOnline = false;
          this.welcomeWord = '';
          this.passwordForm = this.formBuilder.group({
            old: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]],
            "new": ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]]
          });
          this.errorMessages = {
            password: [{
              type: 'required',
              message: 'Password is fully required'
            }, {
              type: 'pattern',
              message: 'Password must be at least 8 characters with digits and uppercase'
            }]
          };
          this.isOnline = this.fireService.getConnexionState();
          this.fireauth.authState.subscribe(function (auth) {
            if (!auth) {
              _this.welcomeWord = 'Manage your account';
            } else {
              if (fireService.getConnexionState()) {
                _this.getUser(auth.uid);
              } else {
                _this.welcomeWord = 'Welcome on Katalog';
              }
            }
          });
        }

        _createClass(AccountPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "signout",
          value: function signout() {
            var _this2 = this;

            this.fireauth.signOut().then(function () {
              _this2.storage.remove("user");
            });
          }
        }, {
          key: "getUser",
          value: function getUser(userUID) {
            var _this3 = this;

            this.afstore.collection("user").doc(userUID).get().subscribe(function (user) {
              _this3.user = new src_models_user__WEBPACK_IMPORTED_MODULE_9__["User"](user.data());
              _this3.welcomeWord = 'Hi, ' + _this3.user.name + ' !';
            });
          }
        }, {
          key: "sendProfileValue",
          value: function sendProfileValue(args, userStatus) {
            if (userStatus == 'Welcome on Katalog') {
              this.router.navigateByUrl("login");
            } else {
              var navigationExtras = {
                state: {
                  order: args,
                  status: userStatus
                }
              };
              this.router.navigateByUrl("login", navigationExtras);
            }
          }
        }, {
          key: "navigateTo",
          value: function navigateTo(args, extra) {
            var navigationExtras = {
              state: {
                direction: extra
              }
            };
            this.router.navigateByUrl("categories/".concat(args), navigationExtras);
          }
        }]);

        return AccountPage;
      }();

      AccountPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"]
        }, {
          type: _firestore_data_service__WEBPACK_IMPORTED_MODULE_11__["FirestoreDataService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"]
        }];
      };

      AccountPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-account',
        template: _raw_loader_account_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_account_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AccountPage);
      /***/
    },

    /***/
    "n3U/":
    /*!*******************************************!*\
      !*** ./src/app/account/account.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function n3U(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "h3 {\n  font-family: \"Times New Roman\", Times, serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9hY2NvdW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRDQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9hY2NvdW50L2FjY291bnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDN7XG4gICAgZm9udC1mYW1pbHk6J1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbn0iXX0= */";
      /***/
    },

    /***/
    "sGj0":
    /*!***************************************************!*\
      !*** ./src/app/account/account-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: AccountPageRoutingModule */

    /***/
    function sGj0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountPageRoutingModule", function () {
        return AccountPageRoutingModule;
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


      var _account_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./account.page */
      "mdzQ");

      var routes = [{
        path: '',
        component: _account_page__WEBPACK_IMPORTED_MODULE_3__["AccountPage"]
      }];

      var AccountPageRoutingModule = function AccountPageRoutingModule() {
        _classCallCheck(this, AccountPageRoutingModule);
      };

      AccountPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AccountPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=account-account-module-es5.js.map