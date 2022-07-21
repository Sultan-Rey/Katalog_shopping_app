(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["policy-policy-module"], {
    /***/
    "/QQi":
    /*!*************************************************!*\
      !*** ./src/app/policy/policy-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: PolicyPageRoutingModule */

    /***/
    function QQi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PolicyPageRoutingModule", function () {
        return PolicyPageRoutingModule;
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


      var _policy_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./policy.page */
      "LTNQ");

      var routes = [{
        path: '',
        component: _policy_page__WEBPACK_IMPORTED_MODULE_3__["PolicyPage"]
      }];

      var PolicyPageRoutingModule = function PolicyPageRoutingModule() {
        _classCallCheck(this, PolicyPageRoutingModule);
      };

      PolicyPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PolicyPageRoutingModule);
      /***/
    },

    /***/
    "I42r":
    /*!*****************************************!*\
      !*** ./src/app/policy/policy.page.scss ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function I42r(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvbGljeS9wb2xpY3kucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "KhPA":
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/policy/policy.page.html ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function KhPA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=ios>\n  <ion-toolbar>\n    <ion-buttons>\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>KATALOG POLICY TERMS</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "LTNQ":
    /*!***************************************!*\
      !*** ./src/app/policy/policy.page.ts ***!
      \***************************************/

    /*! exports provided: PolicyPage */

    /***/
    function LTNQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PolicyPage", function () {
        return PolicyPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_policy_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./policy.page.html */
      "KhPA");
      /* harmony import */


      var _policy_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./policy.page.scss */
      "I42r");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PolicyPage = /*#__PURE__*/function () {
        function PolicyPage() {
          _classCallCheck(this, PolicyPage);
        }

        _createClass(PolicyPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PolicyPage;
      }();

      PolicyPage.ctorParameters = function () {
        return [];
      };

      PolicyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-policy',
        template: _raw_loader_policy_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_policy_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], PolicyPage);
      /***/
    },

    /***/
    "eOch":
    /*!*****************************************!*\
      !*** ./src/app/policy/policy.module.ts ***!
      \*****************************************/

    /*! exports provided: PolicyPageModule */

    /***/
    function eOch(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PolicyPageModule", function () {
        return PolicyPageModule;
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


      var _policy_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./policy-routing.module */
      "/QQi");
      /* harmony import */


      var _policy_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./policy.page */
      "LTNQ");

      var PolicyPageModule = function PolicyPageModule() {
        _classCallCheck(this, PolicyPageModule);
      };

      PolicyPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _policy_routing_module__WEBPACK_IMPORTED_MODULE_5__["PolicyPageRoutingModule"]],
        declarations: [_policy_page__WEBPACK_IMPORTED_MODULE_6__["PolicyPage"]]
      })], PolicyPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=policy-policy-module-es5.js.map