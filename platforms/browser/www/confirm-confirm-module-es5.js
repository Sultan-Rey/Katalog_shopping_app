(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["confirm-confirm-module"], {
    /***/
    "49aV":
    /*!*******************************************!*\
      !*** ./src/app/confirm/confirm.module.ts ***!
      \*******************************************/

    /*! exports provided: ConfirmPageModule */

    /***/
    function aV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfirmPageModule", function () {
        return ConfirmPageModule;
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


      var _confirm_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./confirm-routing.module */
      "jZbj");
      /* harmony import */


      var _confirm_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./confirm.page */
      "iFVt");

      var ConfirmPageModule = function ConfirmPageModule() {
        _classCallCheck(this, ConfirmPageModule);
      };

      ConfirmPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _confirm_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConfirmPageRoutingModule"]],
        declarations: [_confirm_page__WEBPACK_IMPORTED_MODULE_6__["ConfirmPage"]]
      })], ConfirmPageModule);
      /***/
    },

    /***/
    "grTo":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/confirm/confirm.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function grTo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Order confirmation</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"confirmation\">\n    <div class=\"ion-text-center\">\n\n      <ion-item>\n        <ion-col *ngFor=\"let item of product\">\n          <ion-row> <ion-img  [src]=\"item.picture\"></ion-img>\n          </ion-row>\n          <ion-row>{{item.price}}</ion-row>\n        </ion-col>\n              <ion-label><ion-chip>{{qty}}</ion-chip></ion-label>\n      </ion-item>\n      <div class=\"outer-circle\">\n        <div class=\"inner-circle\">\n          <img title=\"confirmed\" src=\"../../assets/like.png\" />\n        </div>\n      </div>\n\n      <h2>Confirmation</h2>\n      <p>\n        Thank you for your order <br>\n        Your order {{orderId}} has been completed successfully\n      </p>\n      \n    </div>\n  </div>\n</ion-content>\n<ion-footer translucent=\"true\" class=\"ion-no-border\" mode=\"md\">\n  <ion-toolbar color=\"translucent\">\n    <ion-button expand=\"block\" class=\"main-button\" routerLink=\"/home\" routerDirection=\"back\">Continue Shopping</ion-button>\n  </ion-toolbar>\n</ion-footer>\n";
      /***/
    },

    /***/
    "iFVt":
    /*!*****************************************!*\
      !*** ./src/app/confirm/confirm.page.ts ***!
      \*****************************************/

    /*! exports provided: ConfirmPage */

    /***/
    function iFVt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfirmPage", function () {
        return ConfirmPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_confirm_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./confirm.page.html */
      "grTo");
      /* harmony import */


      var _confirm_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./confirm.page.scss */
      "tPaF");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var ConfirmPage = /*#__PURE__*/function () {
        function ConfirmPage(route, router) {
          _classCallCheck(this, ConfirmPage);

          this.route = route;
          this.router = router;
          this.orderId = '';
        }

        _createClass(ConfirmPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.route.queryParams.subscribe(function (params) {
              if (_this.router.getCurrentNavigation().extras.state) {
                _this.data = _this.router.getCurrentNavigation().extras.state.order;
              }
            });
            this.product = this.data.items;
            this.qty = this.data.order_qty;
            this.orderId = this.data.orderId;
          }
        }]);

        return ConfirmPage;
      }();

      ConfirmPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      ConfirmPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-confirm',
        template: _raw_loader_confirm_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_confirm_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ConfirmPage);
      /***/
    },

    /***/
    "jZbj":
    /*!***************************************************!*\
      !*** ./src/app/confirm/confirm-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: ConfirmPageRoutingModule */

    /***/
    function jZbj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfirmPageRoutingModule", function () {
        return ConfirmPageRoutingModule;
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


      var _confirm_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./confirm.page */
      "iFVt");

      var routes = [{
        path: '',
        component: _confirm_page__WEBPACK_IMPORTED_MODULE_3__["ConfirmPage"]
      }];

      var ConfirmPageRoutingModule = function ConfirmPageRoutingModule() {
        _classCallCheck(this, ConfirmPageRoutingModule);
      };

      ConfirmPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ConfirmPageRoutingModule);
      /***/
    },

    /***/
    "tPaF":
    /*!*******************************************!*\
      !*** ./src/app/confirm/confirm.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function tPaF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".confirmation {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.confirmation .outer-circle {\n  width: 200px;\n  height: 200px;\n  background: #f8f8f8;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.confirmation .outer-circle .inner-circle {\n  width: 150px;\n  height: 150px;\n  border-radius: 50%;\n  background: #eeeeee;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.confirmation .outer-circle .inner-circle img {\n  max-width: 30%;\n}\nion-footer {\n  padding-left: 20px;\n  padding-right: 20px;\n}\nion-footer .main-button::after {\n  box-shadow: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29uZmlybS9jb25maXJtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNKO0FBQ0k7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDUjtBQUNRO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDWjtBQUNZO0VBQ0ksY0FBQTtBQUNoQjtBQUlBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQURKO0FBR0k7RUFDSSwyQkFBQTtBQURSIiwiZmlsZSI6InNyYy9hcHAvY29uZmlybS9jb25maXJtLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb25maXJtYXRpb24ge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAub3V0ZXItY2lyY2xlIHtcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgIC5pbm5lci1jaXJjbGUge1xuICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlZWVlZWU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMzAlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuaW9uLWZvb3RlciB7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG5cbiAgICAubWFpbi1idXR0b246OmFmdGVyIHtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cbn0iXX0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=confirm-confirm-module-es5.js.map