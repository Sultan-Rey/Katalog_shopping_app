(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["category-categories-categories-module"], {
    /***/
    "FEDq":
    /*!**********************************************************!*\
      !*** ./src/app/category/categories/categories.page.scss ***!
      \**********************************************************/

    /*! exports provided: default */

    /***/
    function FEDq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".dot {\n  height: 10px;\n  width: 10px;\n  border-radius: 50%;\n  display: inline-block;\n  padding: 5px;\n  border: 2px solid #281d35;\n}\n\n.circle {\n  display: inline-block;\n  padding-left: 2px;\n  padding-right: 2px;\n}\n\n.title {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-bottom: 12px;\n}\n\n.title h2 {\n  margin: 0 0 0 12px;\n  font-size: 16px;\n  color: #434343;\n}\n\n.title p {\n  margin: 0 12px 0 0;\n  color: #656565;\n}\n\n.container {\n  text-align: justify;\n  padding: 0;\n  margin: 0;\n  position: relative;\n  border-top: 5px solid #efefef;\n}\n\n.product-slider {\n  margin-bottom: 10px;\n}\n\n.product-slider ion-slide {\n  width: 150px;\n  height: auto;\n  margin-left: 20px;\n  margin-right: 10px;\n}\n\n.product-slider ion-slide ion-col img {\n  width: 100%;\n  height: 80px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 8px;\n}\n\n.product-slider ion-slide ion-col p {\n  margin-top: 2px;\n  margin-bottom: 0;\n}\n\n.product-slider ion-slide ion-col h6 {\n  margin-top: 2px;\n  margin-bottom: 0;\n}\n\nh6, ion-card-subtitle {\n  font-size: 12px;\n  font-weight: bold;\n  font-family: \"Times New Roman\", Times, serif;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcnkvY2F0ZWdvcmllcy9jYXRlZ29yaWVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBRUEsa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQUZKOztBQUlFO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBREo7O0FBSUU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBREo7O0FBR0k7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBRFI7O0FBSUk7RUFDSSxrQkFBQTtFQUNBLGNBQUE7QUFGUjs7QUFLQTtFQUNFLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0FBRkY7O0FBS0U7RUFDRSxtQkFBQTtBQUZKOztBQUlJO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBRlI7O0FBS1k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxrQkFBQTtBQUhoQjs7QUFNWTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQUpoQjs7QUFPWTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQUxoQjs7QUFZQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDRDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7QUFURiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3J5L2NhdGVnb3JpZXMvY2F0ZWdvcmllcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuICAuZG90e1xuICAgIGhlaWdodDogMTBweDtcbiAgICB3aWR0aDogMTBweDtcbiAgIFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYig0MCwgMjksIDUzKTtcbiAgfVxuICAuY2lyY2xle1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nLWxlZnQ6IDJweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAycHg7XG4gIH1cblxuICAudGl0bGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZy1ib3R0b206IDEycHg7XG5cbiAgICBoMiB7XG4gICAgICAgIG1hcmdpbjogMCAwIDAgMTJweDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBjb2xvcjogIzQzNDM0MztcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgICAgbWFyZ2luOiAwIDEycHggMCAwO1xuICAgICAgICBjb2xvcjogIzY1NjU2NTtcbiAgICB9XG59XG4uY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjpqdXN0aWZ5O1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXRvcDogNXB4IHNvbGlkIHJnYigyMzksIDIzOSwyMzkpO1xuXG59XG4gIC5wcm9kdWN0LXNsaWRlciB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBcbiAgICBpb24tc2xpZGUge1xuICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcblxuICAgICAgICBpb24tY29sIHtcbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGg2IHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5oNiwgaW9uLWNhcmQtc3VidGl0bGV7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xufSJdfQ== */";
      /***/
    },

    /***/
    "YF8g":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/category/categories/categories.page.html ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function YF8g(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-page-header></app-page-header>\n\n<ion-content>\n \n\n    <div class=\"container-fluid p-4  overflow-hidden content-box\">\n     \n      <div class=\"row g-4\">\n        <div class=\"col-6 col-lg-4 col-md-6\" *ngFor=\"let item of product$| async\">\n          <div class=\"border p-2\" >\n            \n              <ion-card-content (click)=\"goTo(item)\" style=\"padding-bottom: 0;\"  >\n                <ion-slide>\n                  <ion-img style=\"box-sizing:border-box; width: 165px; height: 165px;\"   (click)=\"goTo(item)\" [src]=\"item.models[0].pictures[0]\"></ion-img>\n                </ion-slide>\n                  </ion-card-content>\n              <ion-card-header >\n                <ion-text color=\"dark\">\n                  <h6  style=\"font-size: 13px; font-weight: bold;\" (click)=\"goTo(item)\">{{item.description}}</h6>\n                </ion-text>\n                <p>\n                \n                  <ion-icon *ngFor=\"let star of [].constructor(item.rating)\" name=\"star\"></ion-icon>\n                </p>\n                <ion-card-subtitle  >{{item.name}}</ion-card-subtitle>\n              </ion-card-header>\n  \n              <ion-card-title>\n                <ion-item lines=\"none\">\n                  <ion-label (click)=\"goTo(item)\" color=\"dark\">\n                    {{item.caracteristic[0].price|currency}}\n                  </ion-label>\n                  <div style=\"text-align:center; max-width: 36px; max-height: 19.188px; overflow: hidden;\">\n                    <div class=\"circle\" *ngFor=\"let color of item.caracteristic\">\n                      <span class=\"dot\" *ngIf=\"color.color!==''\" [style.background]=\"color.color\"></span>\n                    </div>\n                  </div> \n                  </ion-item>\n              </ion-card-title>\n             \n          </div>\n        </div>\n\n        <div class=\"col-6 col-lg-4 col-md-6\" *ngFor=\"let brand of brands$| async\">\n          <div class=\"border p-3\" >\n              <ion-card-content (click)=\"goTo(brand)\" style=\"padding-bottom: 0;\"  >\n                <ion-slide>\n                  <ion-img style=\"box-sizing:border-box; max-width: 225px; max-height: 225px;\"   (click)=\"goTo(brand)\" [src]=\"brand.logo\"></ion-img>\n                </ion-slide>\n                  </ion-card-content>\n              <ion-card-header >\n                <ion-card-subtitle  >{{brand.brandName}}</ion-card-subtitle>\n                <ion-card-title>{{brand.slogan | titlecase}}</ion-card-title>\n              </ion-card-header>\n          </div>\n          \n        </div>\n\n        <div class=\"col-6 col-lg-4 col-md-6\" *ngFor=\"let categ of categories$| async\">\n          <div class=\"border p-3\" >\n              <ion-card-content (click)=\"goTo(categ)\" style=\"padding-bottom: 0;\"  >\n                <ion-slide>\n                  <ion-img style=\"box-sizing:border-box; max-width: 308; max-height: 205px;\"   (click)=\"goTo(categ)\" [src]=\"categ.image\"></ion-img>\n                </ion-slide>\n                  </ion-card-content>\n              <ion-card-header >\n                <ion-card-subtitle  >{{categ.categoryName}}</ion-card-subtitle>\n              </ion-card-header>\n          </div>\n          \n        </div>\n\n        <div class=\"col-6 col-lg-4 col-md-6\" *ngFor=\"let item of items\">\n          <div class=\"border p-3\" >\n            \n              <ion-card-content (click)=\"goTo(item)\" style=\"padding-bottom: 0;\"  >\n                <ion-slide>\n                  <ion-img style=\"box-sizing:border-box; width: 165px; height: 165px;\"   (click)=\"goTo(item)\" [src]=\"item.models[0].pictures[0]\"></ion-img>\n                </ion-slide>\n                  </ion-card-content>\n              <ion-card-header >\n                <ion-text color=\"dark\">\n                  <h6  style=\"font-size: 13px; font-weight: bold;\" (click)=\"goTo(item)\">{{item.description}}</h6>\n                </ion-text>\n                <ion-card-subtitle  >{{item.name}}</ion-card-subtitle>\n              </ion-card-header>\n  \n              <ion-card-title>\n                <ion-item lines=\"none\">\n                  <ion-label (click)=\"goTo(item)\" color=\"dark\">\n                    {{item.caracteristic[0].price|currency}}\n                  </ion-label>\n                  <div style=\"text-align:center; max-width: 36px; max-height: 19.188px; overflow: hidden;\">\n                    <div class=\"circle\" *ngFor=\"let color of item.models.id\">\n                      <span class=\"dot\" *ngIf=\"color.color!==''\" [style.background]=\"color.color\"></span>\n                    </div>\n                  </div> \n                  <ng-container *ngFor=\"let likeitem of likeItems\">\n                    <ion-icon [id]=\"item.description\"  *ngIf=\"likeitem.description == item.description\"  size=\"small\" color=\"danger\" slot=\"end\" name=\"heart\"></ion-icon>\n                  </ng-container>\n                     </ion-item>\n              </ion-card-title>\n             \n          </div>\n          \n        </div>\n      </div>\n    </div>\n\n \n\n</ion-content>\n";
      /***/
    },

    /***/
    "c7TA":
    /*!********************************************************!*\
      !*** ./src/app/category/categories/categories.page.ts ***!
      \********************************************************/

    /*! exports provided: CategoriesPage */

    /***/
    function c7TA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoriesPage", function () {
        return CategoriesPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_categories_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./categories.page.html */
      "YF8g");
      /* harmony import */


      var _categories_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./categories.page.scss */
      "FEDq");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_firestore_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/firestore-data.service */
      "UbTl");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");
      /* harmony import */


      var src_app_local_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/local-storage.service */
      "gvvY");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var CategoriesPage = /*#__PURE__*/function () {
        function CategoriesPage(route, router, lstorage, storage, firestoreData, navCtrl) {
          _classCallCheck(this, CategoriesPage);

          this.route = route;
          this.router = router;
          this.lstorage = lstorage;
          this.storage = storage;
          this.firestoreData = firestoreData;
          this.navCtrl = navCtrl;
          this.data = '';
          this.option = '';
          this.query = '';
          this.islike = false;
          this.result = 0;
          this.likeItems = [];
          this.likeItems = this.lstorage.getLiked();
        }

        _createClass(CategoriesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            var query = this.route.snapshot.params['query_args'];
            this.route.queryParams.subscribe(function (params) {
              if (_this.router.getCurrentNavigation().extras.state) {
                _this.option = _this.router.getCurrentNavigation().extras.state.direction;

                if (_this.option !== 'navigation_directive') {
                  _this.data = _this.option;
                  _this.product$ = _this.firestoreData.getProducts().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function (products) {
                    return products.filter(function (product) {
                      return product.name.toUpperCase().includes(query.toUpperCase()) || product.description.toUpperCase().includes(query.toUpperCase()) || product.category == query || product.brand == query || product.display.position == query;
                    });
                  }));
                } else {
                  _this.data = query;

                  switch (_this.data) {
                    case 'Buy by categories':
                      _this.categories$ = _this.firestoreData.getCategories();
                      break;

                    case 'Recent Views':
                      _this.getStorageData('browsing');

                      break;

                    case 'Wish List':
                      _this.getStorageData('liked');

                      break;

                    case 'Our Brands':
                      _this.brands$ = _this.firestoreData.getBrands();
                      break;
                  }
                }
              }
            });
          }
        }, {
          key: "getStorageData",
          value: function getStorageData(db_name) {
            var _this2 = this;

            this.storage.get(db_name).then(function (db_data) {
              if (db_data.length !== 0 && db_data !== null) {
                _this2.items = db_data;
              }
            })["catch"](function (err) {
              console.log("no recent data found");
            });
            return this.items;
          }
        }, {
          key: "goTo",
          value: function goTo(item) {
            this.navCtrl.navigateForward("product/".concat(item.code));
          }
        }, {
          key: "isItemInWishList",
          value: function isItemInWishList(description) {
            var isInList = false;
            this.storage.get("liked").then(function (db_data) {
              if (db_data.length !== 0 && db_data !== null) {
                db_data.forEach(function (item) {
                  if (item.description == description) {
                    isInList = true;
                  }
                });
              }
            })["catch"](function (err) {
              console.log("Item not in like items list");
            });
            return isInList;
          }
        }, {
          key: "putItemInWishList",
          value: function putItemInWishList(item) {
            var _this3 = this;

            console.log('it works');
            this.lstorage.addInWishList(item).then(function () {
              document.getElementById(item.description).style.display = "none";

              _this3.isItemInWishList(item.description);
            })["catch"](function (reason) {
              console.log('Exception : ' + reason);
            });
          }
        }]);

        return CategoriesPage;
      }();

      CategoriesPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_local_storage_service__WEBPACK_IMPORTED_MODULE_7__["LocalStorageService"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]
        }, {
          type: src_app_firestore_data_service__WEBPACK_IMPORTED_MODULE_5__["FirestoreDataService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"]
        }];
      };

      CategoriesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-categories',
        template: _raw_loader_categories_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_categories_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CategoriesPage);
      /***/
    },

    /***/
    "gvvY":
    /*!******************************************!*\
      !*** ./src/app/local-storage.service.ts ***!
      \******************************************/

    /*! exports provided: LocalStorageService */

    /***/
    function gvvY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocalStorageService", function () {
        return LocalStorageService;
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


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");

      var LocalStorageService = /*#__PURE__*/function () {
        function LocalStorageService(storage) {
          _classCallCheck(this, LocalStorageService);

          this.storage = storage;
        }

        _createClass(LocalStorageService, [{
          key: "getBrowsingHistoric",
          value: function getBrowsingHistoric() {
            var _this4 = this;

            this.storage.get("browsing").then(function (historic) {
              if (historic.length !== 0 && historic !== null) {
                _this4.browsingItems = historic;
              }
            })["catch"](function (err) {
              console.log("no browsing data found");
            });
            return this.browsingItems;
          }
        }, {
          key: "getLiked",
          value: function getLiked() {
            var _this5 = this;

            this.storage.get("liked").then(function (liked) {
              if (liked !== null || liked.length !== 0) {
                _this5.itemsLikes = liked;
              }
            })["catch"](function (err) {
              console.log("no like items not found or empty");
            });
            return this.itemsLikes;
          }
        }, {
          key: "getCartItems",
          value: function getCartItems() {
            var _this6 = this;

            this.storage.get("cart").then(function (data) {
              _this6.cart = data;
            })["catch"](function (err) {
              console.log("cart not found or empty");
            });
            return this.cart;
          }
        }, {
          key: "getsavedforlater",
          value: function getsavedforlater() {
            var _this7 = this;

            this.storage.get("savedforlater").then(function (data) {
              _this7.savedForLater = data;
            })["catch"](function (err) {
              console.log("saved not found or empty");
            });
            return this.savedForLater;
          }
        }, {
          key: "addTocart",
          value: function addTocart(item_details) {
            var _this8 = this;

            var isAdded = false;
            return this.storage.get("cart").then(function (data) {
              if (data === null || data.length === 0) {
                data = [];
                data.push(item_details);
              } else {
                var _iterator = _createForOfIteratorHelper(data),
                    _step;

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var item = _step.value;

                    if (item.description === item_details.description) {
                      item.qty += 1;
                      isAdded = true;
                    }
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }

                if (!isAdded) {
                  data.push(item_details);
                }
              }

              _this8.storage.set("cart", data);
            });
          }
        }, {
          key: "addInWishList",
          value: function addInWishList(likeItem) {
            var _this9 = this;

            var isAdded = false;
            return this.storage.get("liked").then(function (liked) {
              if (liked === null || liked.length === 0) {
                liked = [];
                liked.push(likeItem);
              } else {
                var _iterator2 = _createForOfIteratorHelper(liked),
                    _step2;

                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                    var items = _step2.value;

                    if (items === likeItem) {
                      items = likeItem;
                      isAdded = true;
                    }
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }

                if (!isAdded) {
                  liked.push(likeItem);
                }
              }

              _this9.storage.set("liked", liked);
            });
          }
        }]);

        return LocalStorageService;
      }();

      LocalStorageService.ctorParameters = function () {
        return [{
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]
        }];
      };

      LocalStorageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], LocalStorageService);
      /***/
    },

    /***/
    "hJH0":
    /*!******************************************************************!*\
      !*** ./src/app/category/categories/categories-routing.module.ts ***!
      \******************************************************************/

    /*! exports provided: CategoriesPageRoutingModule */

    /***/
    function hJH0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoriesPageRoutingModule", function () {
        return CategoriesPageRoutingModule;
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


      var _categories_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./categories.page */
      "c7TA");

      var routes = [{
        path: '',
        component: _categories_page__WEBPACK_IMPORTED_MODULE_3__["CategoriesPage"]
      }];

      var CategoriesPageRoutingModule = function CategoriesPageRoutingModule() {
        _classCallCheck(this, CategoriesPageRoutingModule);
      };

      CategoriesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CategoriesPageRoutingModule);
      /***/
    },

    /***/
    "qydT":
    /*!**********************************************************!*\
      !*** ./src/app/category/categories/categories.module.ts ***!
      \**********************************************************/

    /*! exports provided: CategoriesPageModule */

    /***/
    function qydT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoriesPageModule", function () {
        return CategoriesPageModule;
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


      var _categories_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./categories-routing.module */
      "hJH0");
      /* harmony import */


      var _categories_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./categories.page */
      "c7TA");
      /* harmony import */


      var src_app_sharedviews_sharedviews_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/sharedviews/sharedviews.module */
      "l+lL");

      var CategoriesPageModule = function CategoriesPageModule() {
        _classCallCheck(this, CategoriesPageModule);
      };

      CategoriesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], src_app_sharedviews_sharedviews_module__WEBPACK_IMPORTED_MODULE_7__["SharedviewsModule"], _categories_routing_module__WEBPACK_IMPORTED_MODULE_5__["CategoriesPageRoutingModule"]],
        declarations: [_categories_page__WEBPACK_IMPORTED_MODULE_6__["CategoriesPage"]]
      })], CategoriesPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=category-categories-categories-module-es5.js.map