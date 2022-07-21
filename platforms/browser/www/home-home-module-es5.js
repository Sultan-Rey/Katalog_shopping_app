(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
    /***/
    "A3+G":
    /*!*********************************************!*\
      !*** ./src/app/home/home-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: HomePageRoutingModule */

    /***/
    function A3G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
        return HomePageRoutingModule;
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


      var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./home.page */
      "zpKS");

      var routes = [{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
      }];

      var HomePageRoutingModule = function HomePageRoutingModule() {
        _classCallCheck(this, HomePageRoutingModule);
      };

      HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HomePageRoutingModule);
      /***/
    },

    /***/
    "WcN3":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function WcN3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-page-header></app-page-header> <!-- Header componnent selector -->\n\n<ion-content [fullscreen]=\"true\"> <!-- current componnent main content area -->\n  <div class=\"container-fluid\" style=\"background: #031432;\"> \n    <div class=\"scrollmenu\">\n      <a button (click)=\"navigateTo(common,'navigation_directive')\" *ngFor=\"let common of navigation\">{{common}}</a> \n    </div>\n  </div>\n\n  <ion-slides style=\"margin-bottom:0;\" style=\"background: #c7aa53;\"> <!-- Messages Bar -->\n    <ion-slide>\n      <ion-label *ngIf=\"connected\">Help Ukrainian people now!</ion-label>\n    </ion-slide>\n     <!--   <ion-button *ngIf=\"!connected\" expand=\"block\" color=\"danger\">Connexion failed, Want you retry to connect?</ion-button>\n -->  </ion-slides>\n  \n  <div>\n\n    <ion-slides *ngIf=\"slides$ | async as slide\" [options]=\"sliderOpts\" >  <!-- Main Slideshow-->\n      <ng-container *ngFor=\"let s of slide.slides\">\n        <ion-slide *ngIf=\"s.version=='web'\"  (click)=\"navigateTo(s.direction, 'Results Found')\" >\n          <ion-img [src]=\"s.image\" [alt]=\"slide.alt\"></ion-img>\n      </ion-slide>\n      </ng-container>\n    </ion-slides>\n  </div>\n\n\n  <div class=\"container-fluid p-4 overflow-hidden content-box\">  <!-- Panel Division-->\n    <div class=\"row g-4\">\n      <ng-container *ngFor=\"let panel of homepane$ | async\">\n        <div class=\"col-12 col-lg-4 col-md-6\" *ngIf=\"panel.panelType=='box'&& panel.active==true\">\n          <div class=\"p-3 border\" [ngStyle]=\"{'background': panel.panelName=='Advertising' ? 'none' : 'white'}\">\n            <h2>{{panel.description}}</h2>\n            <div *ngIf=\"panel.panelName!=='category' && panel.panelName!=='brand'\" class=\"row overflow-hidden\"\n              style=\"max-height: 400px;\">\n              <ng-container *ngIf=\"product$|async as _items; else skeleton\">\n                <ng-container *ngFor=\"let item of _items\">\n                  <ion-label (click)=\"goTo(item)\" *ngIf=\"item.display.position==panel.panelId\" class=\"col-6\" style=\"margin-bottom:15px\">\n                    <ion-img  style=\"width: 164px; height: 164px;\" [src]=\"item.models[0].pictures[0]\"></ion-img>\n                    <h6>{{item.name}}</h6>\n                  </ion-label>\n                </ng-container>\n              </ng-container>\n            </div>\n\n            <div *ngIf=\"panel.panelName=='category'\" style=\"max-height: 400px; overflow: hidden;\" class=\"row\">\n              <ng-container *ngFor=\"let item of categories$|async\">\n                <ion-label ion-button (click)=\"navigateTo(item.categoryName, 'Results Found')\" class=\"col-6\" style=\"margin-bottom:15px\">\n                  <ion-img style=\"width: 164px; height: 164px;\" src=\"{{(item.image)}}\"></ion-img>\n                  <h6>{{item.categoryName}}</h6>\n                </ion-label>\n              </ng-container>\n            </div>\n\n            <div *ngIf=\"panel.panelName=='brand'\" style=\"max-height: 400px; overflow: hidden;\" class=\"row\">\n              <ng-container *ngFor=\"let item of brands$| async\">\n                <ion-label (click)=\"navigateTo(item.brandName, 'All from this brands')\" class=\"col-6\" style=\"margin-bottom:15px\">\n                  <ion-img style=\"width: 164px; height: 164px;\" src=\"{{(item.logo)}}\"></ion-img>\n                  <h6>{{item.brandName}}</h6>\n                </ion-label>\n              </ng-container>\n            </div>\n\n            <ion-button fill=\"clear\" (click)=\"navigateTo(panel.panelId, panel.panelName)\" color=\"primary\">{{panel.buttonText}}\n            </ion-button>\n          </div>\n        </div>\n\n        <div class=\"col col-md-12 col-sm-12 col-lg-12 p-3\" *ngIf=\"panel.panelType=='slider' && panel.active==true\">\n          <div  class=\"p-3\" style=\"background:white;\">\n            <h2 style=\"display:inline;\">{{panel.description}}</h2>\n            \n            <div class=\"row\" *ngIf=\"product$|async as _items; else slideSkeleton\">\n             <ion-buttons>\n              <ion-button (click)=\"prev(slideshow)\">\n                <ion-icon slot=\"icon-only\" name=\"chevron-back-circle-outline\"></ion-icon>\n              </ion-button>\n           \n              <ion-slides #slideshow  style=\"width:100%\" [options]=\"slidersOpts\">\n                <ng-container *ngFor=\"let common of product$ | async \">\n                  <ion-slide *ngIf=\"common.display.position == panel.panelId\" (click)=\"goTo(common)\">\n                    <ion-item-group>\n                      <ion-img [src]=\"common.models[0].pictures[0]\" style=\"height: 165px; width: 165px\"></ion-img>\n                    <ion-label>{{common.caracteristic[0].price|currency}}</ion-label>\n                    </ion-item-group>\n                  </ion-slide>\n                </ng-container>\n              </ion-slides>\n            \n              <ion-button (click)=\"next(slideshow)\">\n                <ion-icon slot=\"icon-only\" name=\"chevron-forward-circle-outline\"></ion-icon>\n              </ion-button>\n              </ion-buttons>  \n\n                <ion-button fill=\"clear\" (click)=\"navigateTo(panel.panelId, panel.PanelName)\" *ngIf=\"panel.panelId!=='best_seller'\" color=\"primary\">{{panel.buttonText}}\n                </ion-button>\n              \n            </div>\n           \n          </div>\n        </div>\n\n        <div class=\"col-12 col-md-6 col-lg-6\" *ngIf=\"panel.panelType=='deals' && panel.active==true\">\n          <ion-item lines=\"none\">\n            <ion-label>\n              Hot Deals<ion-icon color=\"danger\" name=\"flame\"></ion-icon>\n            </ion-label>\n            <ion-buttons>\n              <ion-button (click)=\"navigateTo('Today Deals')\" color=\"tertiary\">\n                <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n              </ion-button>\n            </ion-buttons>\n          </ion-item>\n          <div class=\"p-4 border\">\n            <ion-slides>\n              <ng-container *ngFor=\"let item of product$|async\">\n                <ng-container *ngIf=\"item.display.position == panel.panelId\">\n                  <ion-slide>\n                    <div class=\"row\">\n                      <div class=\"col-md-8 col-sm-6\">\n                        <ion-img (click)=\"goTo(item)\" [src]=\"item.models[0].pictures[0]\"></ion-img>\n                      </div>\n                      <div class=\"col-md-4 col-sm-6\">\n                        <h4 style=\"text-align: justify;\">{{item.name}}</h4>\n                        <div class=\"row\">\n                          <ion-row class=\"mt-3\">\n                            <ion-col>\n                              <h5 style=\"text-align: justify;\"><span class=\"text-danger\">was</span>\n                                {{item.caracteristic[0].price|currency}}</h5>\n                            </ion-col>\n                            <ion-col>\n                              <h5>\n                                <ion-badge>{{item.discount}}% Off</ion-badge>\n                              </h5>\n                            </ion-col>\n                          </ion-row>\n                          <ion-row class=\"mb-3\">\n                            <ion-col>\n                              <h4 h5 style=\"text-align: justify;\">now {{calculateDiscount(item.caracteristic[0].price,\n                                item.discount,panel.timing)| currency}}</h4>\n                            </ion-col>\n                            <ion-label style=\"text-align: justify;\" color=\"primary\">{{panel.description}}</ion-label>\n                          </ion-row>\n                        </div>\n                      </div>\n                      <ion-label color=\"primary\" style=\"text-align: justify;\">{{panel.buttonText}}</ion-label>\n                    </div>\n                  </ion-slide>\n                </ng-container>\n\n              </ng-container>\n            </ion-slides>\n            <div class=\"timing\">\n              <button id=\"HR\" type=\"button\" class=\"btn btn-light btn-circle btn-lg\"></button>\n              <button id=\"MN\" type=\"button\" class=\"btn btn-light btn-circle btn-lg\"></button>\n              <button id=\"SEC\" type=\"button\" class=\"btn btn-light btn-circle btn-lg\"></button>\n            </div>\n          </div>\n        </div>\n      </ng-container>\n    </div>\n\n  </div>\n\n</ion-content> <!-- End current componnent main content area -->\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- Templates Skeleton for loading data-->\n\n<ng-template #skeleton>\n  <ion-label *ngFor=\"let n of counter\" class=\"col-6\">\n    <ion-thumbnail style=\"width: 164px; height: 164px;\">\n      <ion-skeleton-text animated>K</ion-skeleton-text>\n    </ion-thumbnail>\n    <h6>\n      <ion-skeleton-text animated>\n      </ion-skeleton-text>\n    </h6>\n  </ion-label>\n</ng-template>\n\n<ng-template #slideSkeleton>\n  <ion-slides [options]=\"{ slidesPerView: '3', zoom: false, grabCursor: true }\">\n    <ion-slide *ngFor=\"let n of counter\">\n      <ion-skeleton-text animated style=\"width: 200px; height: 200px\"></ion-skeleton-text>\n    </ion-slide>\n  </ion-slides>\n</ng-template>";
      /***/
    },

    /***/
    "ct+p":
    /*!*************************************!*\
      !*** ./src/app/home/home.module.ts ***!
      \*************************************/

    /*! exports provided: HomePageModule */

    /***/
    function ctP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
        return HomePageModule;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./home.page */
      "zpKS");
      /* harmony import */


      var _sharedviews_sharedviews_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../sharedviews/sharedviews.module */
      "l+lL");
      /* harmony import */


      var _home_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./home-routing.module */
      "A3+G");

      var HomePageModule = function HomePageModule() {
        _classCallCheck(this, HomePageModule);
      };

      HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_7__["HomePageRoutingModule"], _sharedviews_sharedviews_module__WEBPACK_IMPORTED_MODULE_6__["SharedviewsModule"]],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
      })], HomePageModule);
      /***/
    },

    /***/
    "f6od":
    /*!*************************************!*\
      !*** ./src/app/home/home.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function f6od(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: #f1f3f4;\n}\n\n.btn-circle.btn-lg {\n  width: 50px;\n  height: 50px;\n  padding: 7px 10px;\n  border-radius: 25px;\n  font-size: 20px;\n  font-weight: bold;\n  text-align: center;\n}\n\n.timing {\n  position: absolute;\n  top: 20%;\n  left: 67%;\n}\n\n/* #head ion-slides .imgslide {\n  margin:0;\n  padding:0;\n  display: block;\n  width: 40%;\n} */\n\n.content-box {\n  position: absolute;\n  top: 350px;\n  z-index: 1;\n  padding-bottom: 80px;\n}\n\n.content-box h6 {\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n}\n\n@media (max-width: 668px) {\n  .content-box {\n    top: 280px;\n  }\n\n  .content-box ion-img {\n    padding: 15%;\n  }\n}\n\ndiv.scrollmenu {\n  overflow: auto;\n  white-space: nowrap;\n}\n\ndiv.scrollmenu::-webkit-scrollbar {\n  display: none;\n}\n\ndiv.scrollmenu a {\n  display: inline-block;\n  color: white;\n  text-align: center;\n  padding: 14px;\n  text-decoration: none;\n}\n\ndiv.scrollmenu a:hover {\n  background-color: #777;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLHFCQUFBO0FBQUY7O0FBTUE7RUFDRSxXQUFBO0VBQ1UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUhaOztBQUtBO0VBQ0Usa0JBQUE7RUFDRSxRQUFBO0VBQ0EsU0FBQTtBQUZKOztBQU1BOzs7OztHQUFBOztBQU9BO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0FBSkY7O0FBS0U7RUFDRSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtBQUhKOztBQU9BO0VBQ0U7SUFDRSxVQUFBO0VBSkY7O0VBTUE7SUFDRSxZQUFBO0VBSEY7QUFDRjs7QUFPQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtBQUxGOztBQVFBO0VBQ0UsYUFBQTtBQUxGOztBQVFBO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7QUFMRjs7QUFRQTtFQUNFLHNCQUFBO0FBTEYiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pb24tY29udGVudHtcbiAgLS1iYWNrZ3JvdW5kOiAjZjFmM2Y0O1xuICBcbn1cblxuXG5cbi5idG4tY2lyY2xlLmJ0bi1sZyB7XG4gIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgcGFkZGluZzogN3B4IDEwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udGltaW5ne1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyMCU7XG4gICAgbGVmdDogNjclO1xufVxuXG5cbi8qICNoZWFkIGlvbi1zbGlkZXMgLmltZ3NsaWRlIHtcbiAgbWFyZ2luOjA7XG4gIHBhZGRpbmc6MDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA0MCU7XG59ICovXG5cbi5jb250ZW50LWJveHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDM1MHB4O1xuICB6LWluZGV4OiAxO1xuICBwYWRkaW5nLWJvdHRvbTogODBweDtcbiAgaDZ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDE7XG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgfVxuXG59XG5AbWVkaWEgKG1heC13aWR0aDogNjY4cHgpIHtcbiAgLmNvbnRlbnQtYm94IHtcbiAgICB0b3A6IDI4MHB4O1xuICB9XG4gIC5jb250ZW50LWJveCBpb24taW1ne1xuICAgIHBhZGRpbmc6IDE1JTtcbiAgfVxuICBcbn1cblxuZGl2LnNjcm9sbG1lbnUge1xuICBvdmVyZmxvdzogYXV0bztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgXG59XG5kaXYuc2Nyb2xsbWVudTo6LXdlYmtpdC1zY3JvbGxiYXJ7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmRpdi5zY3JvbGxtZW51IGEge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxNHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmRpdi5zY3JvbGxtZW51IGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzc3O1xuICBcbn0gXG4iXX0= */";
      /***/
    },

    /***/
    "zpKS":
    /*!***********************************!*\
      !*** ./src/app/home/home.page.ts ***!
      \***********************************/

    /*! exports provided: HomePage */

    /***/
    function zpKS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePage", function () {
        return HomePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./home.page.html */
      "WcN3");
      /* harmony import */


      var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./home.page.scss */
      "f6od");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");
      /* harmony import */


      var _firestore_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../firestore-data.service */
      "UbTl");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "I/3d");

      var HomePage = /*#__PURE__*/function () {
        function HomePage(router, firestoreData, db, storage, navCtrl) {
          _classCallCheck(this, HomePage);

          this.router = router;
          this.firestoreData = firestoreData;
          this.db = db;
          this.storage = storage;
          this.navCtrl = navCtrl;
          this.counter = [0, 1, 2, 3];
          this.testImage = "../../assets/icon/icon.png"; //--------------------------

          this.brands = [];
          this.slides = [];
          this.categories = [];
          this.navigation = [];
          this.images = [];
          this.browsing = [];
          this.likeItem = [];
          this.savedItem = [];
          this.saveLater = []; // main slider

          this.sliderOpts = {
            autoplay: true,
            initialSlide: 0,
            speed: 1000
          };
          this.slidersOpts = {
            autoplay: true,
            zoom: false,
            speed: '4000',
            breakpoints: {
              // when window width is >= 320px
              320: {
                slidesPerView: 1
              },
              // when window width is >= 820px
              620: {
                slidesPerView: 2,
                spaceBetween: 10
              },
              // when window width is >= 9200px
              820: {
                slidesPerView: 4,
                spaceBetween: 100
              }
            }
          };
          this.numberOfMessage = 0;
          this.connected = this.firestoreData.getConnexionState();
          this.navigation = ["Buy by categories", "Wish List", "Recent Views", "Today Deals", "Ready To Ship", "Our Brands"];
          this.product$ = this.firestoreData.getProducts();
          this.homepane$ = this.firestoreData.getHomeDesign();
          this.categories$ = this.firestoreData.getCategories();
          this.brands$ = this.firestoreData.getBrands();
          this.slides$ = this.firestoreData.getMainSlides();
        }

        _createClass(HomePage, [{
          key: "reload",
          value: function reload() {
            globalThis.location.reload();
          }
        }, {
          key: "submitquery",
          value: function submitquery(contact, question) {
            if (question !== '' && contact !== '') {
              contact = '';
              question = '';
            }
          }
        }, {
          key: "calculateDiscount",
          value: function calculateDiscount(price, percentage, endTime) {
            var retail = price / 100 * percentage;
            var discount = price - retail;
            this.comptor(endTime);
            return discount;
          }
        }, {
          key: "comptor",
          value: function comptor(timing) {
            // Set the date we're counting down to
            //var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();
            var countDownDate = new Date(timing).getTime(); // Update the count down every 1 second

            var x = setInterval(function () {
              // Get today's date and time
              var now = new Date().getTime(); // Find the distance between now and the count down date

              var distance = countDownDate - now; // Time calculations for days, hours, minutes and seconds

              var days = Math.floor(distance / (1000 * 60 * 60 * 24));
              var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
              var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
              var seconds = Math.floor(distance % (1000 * 60) / 1000); // Display the result in the element with id="demo"

              /* document.getElementById("demo").innerHTML = days + "d " + hours + "h "
              + minutes + "m " + seconds + "s "; */

              document.getElementById("HR").innerHTML = hours + "&nbsp;hr ";
              document.getElementById("MN").innerHTML = minutes + "&nbsp;&nbsp;m ";
              document.getElementById("SEC").innerHTML = seconds + "&nbsp;&nbsp;s "; // If the count down is finished, write some text

              if (distance < 0) {
                clearInterval(x);
                document.getElementById("demo").innerHTML = "EXPIRED";
              }
            }, 1000);
          }
        }, {
          key: "navigateTo",
          value: function navigateTo(args, extra) {
            if (args == 'Today Deals') {
              extra = args;
              args = 'p103'; //p103 is panelId string reference from collection homepane in firestore firebase
            }

            if (args == 'Ready To Ship') {
              extra = args;
              args = 'p105';
            }

            var navigationExtras = {
              state: {
                direction: extra
              }
            };
            this.router.navigateByUrl("categories/".concat(args), navigationExtras);
          }
        }, {
          key: "goTo",
          value: function goTo(item) {
            this.navCtrl.navigateForward("product/".concat(item.code));
          }
        }, {
          key: "prev",
          value: function prev(slides) {
            slides.slidePrev();
          }
        }, {
          key: "next",
          value: function next(slides) {
            slides.slideNext();
          }
        }]);

        return HomePage;
      }();

      HomePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _firestore_data_service__WEBPACK_IMPORTED_MODULE_6__["FirestoreDataService"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestore"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"]
        }];
      };

      HomePage.propDecorators = {
        imageRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['image', {
            "static": false
          }]
        }]
      };
      HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], HomePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=home-home-module-es5.js.map