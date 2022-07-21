(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/sultanrey/Documents/Vscode/Katalog_shopping_app/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.scss */
      "ynWL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "54vc");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "VYYF");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, splashScreen, statusBar, router, alertCtrl) {
          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.splashScreen = splashScreen;
          this.statusBar = statusBar;
          this.router = router;
          this.alertCtrl = alertCtrl;
          this.initializeApp();
        }

        _createClass(AppComponent, [{
          key: "initializeApp",
          value: function initializeApp() {
            var _this = this;

            this.platform.ready().then(function () {
              _this.statusBar.backgroundColorByHexString('#031432');

              _this.splashScreen.hide();
            });
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__["SplashScreen"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "VgoO":
    /*!********************************************************!*\
      !*** ./src/app/page-header/page-header.component.scss ***!
      \********************************************************/

    /*! exports provided: default */

    /***/
    function VgoO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".input-group-textmodified {\n  display: flex;\n  align-items: center;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n  text-align: center;\n  padding: 0.37rem 0.7rem;\n  white-space: nowrap;\n  background-color: #e9ecef;\n  border-top-right-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem;\n}\n\n@media (max-width: 668px) {\n  .taskbar {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS1oZWFkZXIvcGFnZS1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUNBQUE7QUFDSjs7QUFFRTtFQUNFO0lBQ0UsYUFBQTtFQUNKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlLWhlYWRlci9wYWdlLWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dC1ncm91cC10ZXh0bW9kaWZpZWQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIGNvbG9yOiAjMjEyNTI5O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwLjM3MHJlbSAwLjcwcmVtO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZWNlZjtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czowLjI1cmVtIDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czowLjI1cmVtIDtcbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2NjhweCkge1xuICAgIC50YXNrYmFyIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIFxuICB9XG4iXX0= */";
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\n \n\n  <ion-router-outlet id=\"main\"></ion-router-outlet>\n</ion-app>\n";
      /***/
    },

    /***/
    "YHVq":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page-header/page-header.component.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function YHVq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"md\">\n  <ion-toolbar style=\" --background: #031432;\"> <!--Toolbar I-->\n    <ion-buttons>\n      <ion-title class=\"taskbar\" (click)=\"routeTo('/home')\" >\n        <ion-text style=\"font-size: 18px;\"  size=\"small\" color=\"warning\">\n          K</ion-text>\n        <ion-text color=\"danger\">\n          <ion-icon size=\"small\" name=cart></ion-icon>\n        </ion-text>\n        <ion-text style=\"font-size: 18px;\" color=\"light\">TALOG</ion-text>\n      </ion-title>\n          <div class=\"container\">\n          <div class=\"input-group\">\n            <input type=\"text\" [(ngModel)]=\"query\"  (keypress)=\"search($event)\"  id=\"searchField\"  placeholder=\"Do you searching for something...?\" debounce=\"500\"\n              style=\" width: 10vw;  margin: 0 auto;\" class=\"form-control\" aria-describedby=\"basic-addon1\">\n            <div class=\"input-group-prepend\">\n              <span (click)=\"search($event)\" class=\"input-group-textmodified bg-warning\" id=\"basic-addon1\">\n                <ion-button fill=\"clear\" size=\"icon-only\">\n                  <ion-icon name=\"search\"></ion-icon>\n                </ion-button>\n              </span>\n            </div>\n          </div>\n        </div>\n          \n            <ion-tab-button (click)=\"routeTo('cart')\">\n              <ion-icon color=\"light\" name=\"cart-outline\"></ion-icon>\n              <ion-label *ngIf=\"cartLenght==0\" color=\"light\" >Cart</ion-label>\n              <ion-label *ngIf=\"cartLenght!=0\" color=\"danger\" >{{cartLenght}}</ion-label>\n            </ion-tab-button>\n        \n            <ion-tab-button class=\"taskbar\" (click)=\"routeTo('account')\"  routerDirection=\"forward\">\n              <ion-icon color=\"light\"  name=\"person-circle-outline\"></ion-icon>\n              <ion-label color=\"light\" >Profil</ion-label>\n            </ion-tab-button>\n        \n            <ion-tab-button (click)=\"routeTo('order')\"  routerDirection=\"forward\">\n              <ion-icon color=\"light\"  name=\"cube-outline\"></ion-icon>\n              <ion-label color=\"light\" >Order</ion-label>\n            </ion-tab-button>\n         \n        \n       \n    </ion-buttons>\n    \n    \n  </ion-toolbar> <!--End Toolbar II-->\n\n</ion-header>\n";
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: firebaseConfig, AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "firebaseConfig", function () {
        return firebaseConfig;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "54vc");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "VYYF");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _angular_fire__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/fire */
      "spgP");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/fire/database */
      "sSZD");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/fire/auth */
      "UbJi");
      /* harmony import */


      var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/fire/storage */
      "Vaw3");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "I/3d");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @ionic-native/image-picker/ngx */
      "cdBk");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @awesome-cordova-plugins/camera/ngx */
      "vaRf");
      /* harmony import */


      var ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ngx-ionic-image-viewer */
      "gMqc");
      /* harmony import */


      var _sharedviews_sharedviews_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./sharedviews/sharedviews.module */
      "l+lL");

      var firebaseConfig = {
        apiKey: 'AIzaSyBabPrVBAjGXeNQk0NlqTlpMFUcFgNuKiw',
        authDomain: 'datafire-681e8.firebaseapp.com',
        databaseURL: 'https://datafire-681e8.firebaseio.com',
        projectId: 'datafire-681e8',
        storageBucket: 'datafire-681e8.appspot.com',
        messagingSenderId: '182727338924'
      };

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"], ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_19__["NgxIonicImageViewerModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"], _sharedviews_sharedviews_module__WEBPACK_IMPORTED_MODULE_20__["SharedviewsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_10__["AngularFireModule"].initializeApp(firebaseConfig), _angular_fire_database__WEBPACK_IMPORTED_MODULE_11__["AngularFireDatabaseModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_12__["AngularFireAuthModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_13__["AngularFireStorageModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_14__["AngularFirestoreModule"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["IonicStorageModule"].forRoot()],
        providers: [_ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_16__["ImagePicker"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"], _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_18__["Camera"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__["SplashScreen"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicRouteStrategy"]
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "kLfG":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function kLfG(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["dUtr", "common", 0],
        "./ion-alert.entry.js": ["Q8AI", "common", 1],
        "./ion-app_8.entry.js": ["hgI1", "common", 2],
        "./ion-avatar_3.entry.js": ["CfoV", "common", 3],
        "./ion-back-button.entry.js": ["Nt02", "common", 4],
        "./ion-backdrop.entry.js": ["Q2Bp", 5],
        "./ion-button_2.entry.js": ["0Pbj", "common", 6],
        "./ion-card_5.entry.js": ["ydQj", "common", 7],
        "./ion-checkbox.entry.js": ["4fMi", "common", 8],
        "./ion-chip.entry.js": ["czK9", "common", 9],
        "./ion-col_3.entry.js": ["/CAe", 10],
        "./ion-datetime_3.entry.js": ["WgF3", "common", 11],
        "./ion-fab_3.entry.js": ["uQcF", "common", 12],
        "./ion-img.entry.js": ["wHD8", 13],
        "./ion-infinite-scroll_2.entry.js": ["2lz6", 14],
        "./ion-input.entry.js": ["ercB", "common", 15],
        "./ion-item-option_3.entry.js": ["MGMP", "common", 16],
        "./ion-item_8.entry.js": ["9bur", "common", 17],
        "./ion-loading.entry.js": ["cABk", "common", 18],
        "./ion-menu_3.entry.js": ["kyFE", "common", 19],
        "./ion-modal.entry.js": ["TvZU", "common", 20],
        "./ion-nav_2.entry.js": ["vnES", "common", 21],
        "./ion-popover.entry.js": ["qCuA", "common", 22],
        "./ion-progress-bar.entry.js": ["0tOe", "common", 23],
        "./ion-radio_2.entry.js": ["h11V", "common", 24],
        "./ion-range.entry.js": ["XGij", "common", 25],
        "./ion-refresher_2.entry.js": ["nYbb", "common", 26],
        "./ion-reorder_2.entry.js": ["smMY", "common", 27],
        "./ion-ripple-effect.entry.js": ["STjf", 28],
        "./ion-route_4.entry.js": ["k5eQ", "common", 29],
        "./ion-searchbar.entry.js": ["OR5t", "common", 30],
        "./ion-segment_2.entry.js": ["fSgp", "common", 31],
        "./ion-select_3.entry.js": ["lfGF", "common", 32],
        "./ion-slide_2.entry.js": ["5xYT", 33],
        "./ion-spinner.entry.js": ["nI0H", "common", 34],
        "./ion-split-pane.entry.js": ["NAQR", 35],
        "./ion-tab-bar_2.entry.js": ["knkW", "common", 36],
        "./ion-tab_2.entry.js": ["TpdJ", "common", 37],
        "./ion-text.entry.js": ["ISmu", "common", 38],
        "./ion-textarea.entry.js": ["U7LX", "common", 39],
        "./ion-toast.entry.js": ["L3sA", "common", 40],
        "./ion-toggle.entry.js": ["IUOf", "common", 41],
        "./ion-virtual-scroll.entry.js": ["8Mb5", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "kLfG";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "l+lL":
    /*!***************************************************!*\
      !*** ./src/app/sharedviews/sharedviews.module.ts ***!
      \***************************************************/

    /*! exports provided: SharedviewsModule */

    /***/
    function lLL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedviewsModule", function () {
        return SharedviewsModule;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _page_header_page_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../page-header/page-header.component */
      "zAId");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var SharedviewsModule = function SharedviewsModule() {
        _classCallCheck(this, SharedviewsModule);
      };

      SharedviewsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_4__["PageHeaderComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]],
        exports: [_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_4__["PageHeaderComponent"]]
      })], SharedviewsModule);
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
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

      var routes = [{
        path: 'home',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | home-home-module */
          [__webpack_require__.e("common"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null,
          /*! ./home/home.module */
          "ct+p")).then(function (m) {
            return m.HomePageModule;
          });
        }
      }, {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }, {
        path: 'categories/:query_args',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | category-categories-categories-module */
          [__webpack_require__.e("common"), __webpack_require__.e("category-categories-categories-module")]).then(__webpack_require__.bind(null,
          /*! ./category/categories/categories.module */
          "qydT")).then(function (m) {
            return m.CategoriesPageModule;
          });
        }
      }, {
        path: 'product/:kpuin',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | products-product-product-module */
          [__webpack_require__.e("default~login-login-module~order-details-order-details-module~place-order-place-order-module~product~fb14f4f2"), __webpack_require__.e("common"), __webpack_require__.e("products-product-product-module")]).then(__webpack_require__.bind(null,
          /*! ./products/product/product.module */
          "DCKC")).then(function (m) {
            return m.ProductPageModule;
          });
        }
      }, {
        path: 'cart',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | cart-cart-module */
          [__webpack_require__.e("common"), __webpack_require__.e("cart-cart-module")]).then(__webpack_require__.bind(null,
          /*! ./cart/cart.module */
          "v35Q")).then(function (m) {
            return m.CartPageModule;
          });
        }
      }, {
        path: 'login',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | login-login-module */
          [__webpack_require__.e("default~login-login-module~order-details-order-details-module~place-order-place-order-module~product~fb14f4f2"), __webpack_require__.e("login-login-module")]).then(__webpack_require__.bind(null,
          /*! ./login/login.module */
          "X3zk")).then(function (m) {
            return m.LoginPageModule;
          });
        }
      }, {
        path: 'signup',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | signup-signup-module */
          "signup-signup-module").then(__webpack_require__.bind(null,
          /*! ./signup/signup.module */
          "T9iC")).then(function (m) {
            return m.SignupPageModule;
          });
        }
      }, {
        path: 'verification',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | verification-verification-module */
          [__webpack_require__.e("default~login-login-module~order-details-order-details-module~place-order-place-order-module~product~fb14f4f2"), __webpack_require__.e("verification-verification-module")]).then(__webpack_require__.bind(null,
          /*! ./verification/verification.module */
          "Kw+X")).then(function (m) {
            return m.VerificationPageModule;
          });
        }
      }, {
        path: 'order',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | order-order-module */
          [__webpack_require__.e("common"), __webpack_require__.e("order-order-module")]).then(__webpack_require__.bind(null,
          /*! ./order/order.module */
          "+p+5")).then(function (m) {
            return m.OrderPageModule;
          });
        }
      }, {
        path: 'place-order',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | place-order-place-order-module */
          [__webpack_require__.e("default~login-login-module~order-details-order-details-module~place-order-place-order-module~product~fb14f4f2"), __webpack_require__.e("place-order-place-order-module")]).then(__webpack_require__.bind(null,
          /*! ./place-order/place-order.module */
          "mDVw")).then(function (m) {
            return m.PlaceOrderPageModule;
          });
        }
      }, {
        path: 'helpcenter',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | helpcenter-helpcenter-module */
          [__webpack_require__.e("common"), __webpack_require__.e("helpcenter-helpcenter-module")]).then(__webpack_require__.bind(null,
          /*! ./helpcenter/helpcenter.module */
          "iHxv")).then(function (m) {
            return m.HelpcenterPageModule;
          });
        }
      }, {
        path: 'account',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | account-account-module */
          [__webpack_require__.e("common"), __webpack_require__.e("account-account-module")]).then(__webpack_require__.bind(null,
          /*! ./account/account.module */
          "jcJX")).then(function (m) {
            return m.AccountPageModule;
          });
        }
      }, {
        path: 'confirm',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | confirm-confirm-module */
          "confirm-confirm-module").then(__webpack_require__.bind(null,
          /*! ./confirm/confirm.module */
          "49aV")).then(function (m) {
            return m.ConfirmPageModule;
          });
        }
      }, {
        path: 'order-details',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | order-details-order-details-module */
          [__webpack_require__.e("default~login-login-module~order-details-order-details-module~place-order-place-order-module~product~fb14f4f2"), __webpack_require__.e("order-details-order-details-module")]).then(__webpack_require__.bind(null,
          /*! ./order-details/order-details.module */
          "tIIa")).then(function (m) {
            return m.OrderDetailsPageModule;
          });
        }
      }, {
        path: 'policy',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | policy-policy-module */
          "policy-policy-module").then(__webpack_require__.bind(null,
          /*! ./policy/policy.module */
          "eOch")).then(function (m) {
            return m.PolicyPageModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "ynWL":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function ynWL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "zAId":
    /*!******************************************************!*\
      !*** ./src/app/page-header/page-header.component.ts ***!
      \******************************************************/

    /*! exports provided: PageHeaderComponent */

    /***/
    function zAId(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PageHeaderComponent", function () {
        return PageHeaderComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_page_header_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./page-header.component.html */
      "YHVq");
      /* harmony import */


      var _page_header_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./page-header.component.scss */
      "VgoO");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");

      var PageHeaderComponent = /*#__PURE__*/function () {
        function PageHeaderComponent(router, navCtrl, storage) {
          _classCallCheck(this, PageHeaderComponent);

          this.router = router;
          this.navCtrl = navCtrl;
          this.storage = storage;
          this.cartLenght = 0;
          this.query = '';
          this.logUid = 'Login';
          this.location = this.router.url;
          this.getUid();
          this.getCartItems();
        }

        _createClass(PageHeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "routeTo",
          value: function routeTo(route) {
            //console.log('mi casa'+route)
            this.navCtrl.navigateForward(route);
          }
        }, {
          key: "logOrNot",
          value: function logOrNot() {
            if (this.logUid !== 'Login') {
              this.navCtrl.navigateForward('/account');
            } else {
              this.navCtrl.navigateForward('/login');
            }
          }
        }, {
          key: "getUid",
          value: function getUid() {
            var _this2 = this;

            this.storage.get("user").then(function (uid) {
              if (uid !== '' && uid !== null) {
                _this2.logUid = 'Hi, dear !';
              }
            });
          }
        }, {
          key: "getCartItems",
          value: function getCartItems() {
            var _this3 = this;

            this.storage.get("cart").then(function (data) {
              if (data.length !== 0 && data !== null) {
                _this3.cartLenght = data.length;
              }
            })["catch"](function (err) {
              console.log("cart not found or empty");
            });
          }
        }, {
          key: "search",
          value: function search(event) {
            if (this.query !== '' && this.query !== null) {
              if (event.key == 'Enter' || event.type == 'click') {
                this.router.navigateByUrl("categories/".concat(this.query));
              }
            }
          }
        }]);

        return PageHeaderComponent;
      }();

      PageHeaderComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]
        }];
      };

      PageHeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-page-header',
        template: _raw_loader_page_header_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_page_header_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], PageHeaderComponent);
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map