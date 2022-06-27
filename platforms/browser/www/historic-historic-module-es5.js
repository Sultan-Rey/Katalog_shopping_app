(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["historic-historic-module"], {
    /***/
    "0K7G":
    /*!*******************************************!*\
      !*** ./src/app/historic/historic.page.ts ***!
      \*******************************************/

    /*! exports provided: HistoricPage */

    /***/
    function K7G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HistoricPage", function () {
        return HistoricPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_historic_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./historic.page.html */
      "xYg5");
      /* harmony import */


      var _historic_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./historic.page.scss */
      "E6rC");
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
      /* harmony import */


      var _firestore_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../firestore-data.service */
      "UbTl");
      /* harmony import */


      var _local_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../local-storage.service */
      "gvvY");

      var HistoricPage = /*#__PURE__*/function () {
        function HistoricPage(storage, fData, route, router, lStorage, navCtrl) {
          _classCallCheck(this, HistoricPage);

          this.storage = storage;
          this.fData = fData;
          this.route = route;
          this.router = router;
          this.lStorage = lStorage;
          this.navCtrl = navCtrl;
          this.data = '';
        }

        _createClass(HistoricPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.browsing = this.lStorage.getBrowsingHistoric();
            this.likesItems = this.lStorage.getLiked();
            this.route.queryParams.subscribe(function (params) {
              if (_this.router.getCurrentNavigation().extras.state) {
                _this.data = _this.router.getCurrentNavigation().extras.state.direction;

                switch (_this.data) {
                  case 'Buy by categories':
                    _this.categs = _this.fData.getCategories();
                    break;

                  case 'Recent Views':
                    _this.items = _this.fData.getProducts();
                    break;

                  case 'Wish List':
                    _this.items = _this.fData.getProducts();
                    break;

                  case 'Today Deals':
                    _this.items = _this.fData.getbyPromotion('Today Deals');
                    break;

                  case 'By Tomorrow':
                    _this.items = _this.fData.getbyPromotion('By Tomorrow');
                    break;

                  case 'brand':
                    _this.brands = _this.fData.getBrands();
                    break;
                }
              }
            });
          }
        }, {
          key: "updateCheck",
          value: function updateCheck(product, checkCase) {
            var check = false;

            try {
              if (checkCase == 'Wish List' && this.likesItems.length !== 0) {
                var _iterator = _createForOfIteratorHelper(this.likesItems),
                    _step;

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var item = _step.value;

                    if (item.description == product.description) {
                      check = true;
                    }
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
              } else if (checkCase == 'Recent Views' && this.browsing.length !== 0) {
                var _iterator2 = _createForOfIteratorHelper(this.browsing),
                    _step2;

                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                    var _item = _step2.value;

                    if (_item.description == product.description) {
                      check = true;
                    }
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }
              }
            } catch (err) {
              console.log("empty data" + err);
            }

            return check;
          }
        }, {
          key: "linkTo",
          value: function linkTo(param, optional) {
            var navigationExtras = {
              state: {
                item: param,
                option: optional
              }
            };
            this.router.navigate(['/categories'], navigationExtras);
          }
        }, {
          key: "goTo",
          value: function goTo(item) {
            this.navCtrl.navigateForward("/product?productId=" + item.code);
          }
        }]);

        return HistoricPage;
      }();

      HistoricPage.ctorParameters = function () {
        return [{
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]
        }, {
          type: _firestore_data_service__WEBPACK_IMPORTED_MODULE_7__["FirestoreDataService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _local_storage_service__WEBPACK_IMPORTED_MODULE_8__["LocalStorageService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
        }];
      };

      HistoricPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-historic',
        template: _raw_loader_historic_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_historic_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], HistoricPage);
      /***/
    },

    /***/
    "E6rC":
    /*!*********************************************!*\
      !*** ./src/app/historic/historic.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function E6rC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hpc3RvcmljL2hpc3RvcmljLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "YSD0":
    /*!*********************************************!*\
      !*** ./src/app/historic/historic.module.ts ***!
      \*********************************************/

    /*! exports provided: HistoricPageModule */

    /***/
    function YSD0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HistoricPageModule", function () {
        return HistoricPageModule;
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


      var _historic_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./historic-routing.module */
      "ftNj");
      /* harmony import */


      var _historic_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./historic.page */
      "0K7G");

      var HistoricPageModule = function HistoricPageModule() {
        _classCallCheck(this, HistoricPageModule);
      };

      HistoricPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _sharedviews_sharedviews_module__WEBPACK_IMPORTED_MODULE_4__["SharedviewsModule"], _historic_routing_module__WEBPACK_IMPORTED_MODULE_6__["HistoricPageRoutingModule"]],
        declarations: [_historic_page__WEBPACK_IMPORTED_MODULE_7__["HistoricPage"]]
      })], HistoricPageModule);
      /***/
    },

    /***/
    "ftNj":
    /*!*****************************************************!*\
      !*** ./src/app/historic/historic-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: HistoricPageRoutingModule */

    /***/
    function ftNj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HistoricPageRoutingModule", function () {
        return HistoricPageRoutingModule;
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


      var _historic_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./historic.page */
      "0K7G");

      var routes = [{
        path: '',
        component: _historic_page__WEBPACK_IMPORTED_MODULE_3__["HistoricPage"]
      }];

      var HistoricPageRoutingModule = function HistoricPageRoutingModule() {
        _classCallCheck(this, HistoricPageRoutingModule);
      };

      HistoricPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HistoricPageRoutingModule);
      /***/
    },

    /***/
    "xYg5":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/historic/historic.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function xYg5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-page-header></app-page-header>\n<ion-content>\n  <ion-item lines=\"none\" color=\"light\">\n    <ion-label>{{data | uppercase}}</ion-label>\n    <ion-button fill=\"clear\" slot=\"end\">Filter\n      <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n    </ion-button>\n  </ion-item>\n  <div class=\"container-fluid\">\n    <ion-grid>\n      <ion-row *ngIf=\"data!=='Buy by categories' && data!=='brand'\">\n        <ng-container  *ngFor=\"let item of items| async\">\n          <ion-col size=\"6\" *ngIf=\"updateCheck(item,data) && (data=='Recent Views' || data =='Wish List')\">\n            <ion-card-content style=\"padding-bottom: 0;\" (click)=\"goTo(item)\">\n              <ion-img style=\"box-sizing:border-box;\" [src]=\"item.models[0].pictures[0]\"></ion-img>\n            </ion-card-content>\n            <ion-card-header (click)=\"goTo(item)\">\n              <ion-text color=\"dark\">\n                <h6  style=\"font-size: 13px; font-weight: bold;\">{{item.description}}</h6>\n              </ion-text>\n              <ion-card-subtitle >{{item.name}}</ion-card-subtitle>\n            </ion-card-header>\n\n            <ion-card-title>\n              <ion-item>\n                <ion-label color=\"dark\">\n                  {{item.caracteristic[0].price|currency}}\n                </ion-label>\n                <ion-label>\n                  <ion-icon name=\"star\" *ngIf=\"item.rating>0\"></ion-icon>\n                  <ion-icon name=\"star\" *ngIf=\"item.rating>1\"></ion-icon>\n                  <ion-icon name=\"star\" *ngIf=\"item.rating>2\"></ion-icon>\n                  <ion-icon name=\"star\" *ngIf=\"item.rating>3\"></ion-icon>\n                  <ion-icon name=\"star\" *ngIf=\"item.rating>4\"></ion-icon> \n                </ion-label>\n                \n              </ion-item>\n            </ion-card-title>\n        </ion-col>\n        <ion-col size=\"6\" *ngIf=\"data!=='Recent Views' && data !=='Wish List'\">\n          <ion-card-content style=\"padding-bottom: 0;\" (click)=\"goTo(item)\">\n            <ion-img style=\"box-sizing:border-box;\" [src]=\"item.models[0].pictures[0]\"></ion-img>\n          </ion-card-content>\n          <ion-card-header (click)=\"goTo(item)\">\n            <ion-text color=\"dark\">\n              <h6  style=\"font-size: 13px; font-weight: bold;\">{{item.description}}</h6>\n            </ion-text>\n            <ion-card-subtitle >{{item.name}}</ion-card-subtitle>\n          </ion-card-header>\n\n          <ion-card-title>\n            <ion-item>\n              <ion-label color=\"dark\">\n                {{item.caracteristic[0].price|currency}}\n              </ion-label>\n              <ion-label>\n                <ion-icon name=\"star\" *ngIf=\"item.rating>0\"></ion-icon>\n                <ion-icon name=\"star\" *ngIf=\"item.rating>1\"></ion-icon>\n                <ion-icon name=\"star\" *ngIf=\"item.rating>2\"></ion-icon>\n                <ion-icon name=\"star\" *ngIf=\"item.rating>3\"></ion-icon>\n                <ion-icon name=\"star\" *ngIf=\"item.rating>4\"></ion-icon> \n              </ion-label>\n              \n            </ion-item>\n          </ion-card-title>\n      </ion-col>\n        </ng-container>\n      </ion-row>\n\n      <ion-row *ngIf=\"data=='Buy by categories'\">\n        <ion-card *ngFor=\"let categ of categs| async\" >\n          <ion-card-content (click)=\"linkTo(categ.categoryName,'category')\">\n            <ion-img [src]=\"categ.image\"></ion-img>\n            <ion-card-header>\n              <ion-card-title>{{categ.categoryName}}</ion-card-title>\n            </ion-card-header>\n          </ion-card-content>\n        </ion-card>\n      </ion-row>\n      <ion-row *ngIf=\"data=='brand'\">\n        <ion-card *ngFor=\"let brand of brands| async\" >\n          <ion-card-content (click)=\"linkTo(brand.brandName,'brand')\">\n            <ion-img [src]=\"brand.logo\"></ion-img>\n            <ion-card-header>\n              <ion-card-title>{{brand.brandName}}</ion-card-title>\n              <ion-card-subtitle>{{brand.slogan}}</ion-card-subtitle>\n            </ion-card-header>\n          </ion-card-content>\n        </ion-card>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=historic-historic-module-es5.js.map