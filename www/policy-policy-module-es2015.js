(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["policy-policy-module"],{

/***/ "/QQi":
/*!*************************************************!*\
  !*** ./src/app/policy/policy-routing.module.ts ***!
  \*************************************************/
/*! exports provided: PolicyPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolicyPageRoutingModule", function() { return PolicyPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _policy_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./policy.page */ "LTNQ");




const routes = [
    {
        path: '',
        component: _policy_page__WEBPACK_IMPORTED_MODULE_3__["PolicyPage"]
    }
];
let PolicyPageRoutingModule = class PolicyPageRoutingModule {
};
PolicyPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PolicyPageRoutingModule);



/***/ }),

/***/ "I42r":
/*!*****************************************!*\
  !*** ./src/app/policy/policy.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvbGljeS9wb2xpY3kucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "KhPA":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/policy/policy.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=ios>\n  <ion-toolbar>\n    <ion-buttons>\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>KATALOG POLICY TERMS</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "LTNQ":
/*!***************************************!*\
  !*** ./src/app/policy/policy.page.ts ***!
  \***************************************/
/*! exports provided: PolicyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolicyPage", function() { return PolicyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_policy_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./policy.page.html */ "KhPA");
/* harmony import */ var _policy_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./policy.page.scss */ "I42r");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let PolicyPage = class PolicyPage {
    constructor() { }
    ngOnInit() {
    }
};
PolicyPage.ctorParameters = () => [];
PolicyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-policy',
        template: _raw_loader_policy_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_policy_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PolicyPage);



/***/ }),

/***/ "eOch":
/*!*****************************************!*\
  !*** ./src/app/policy/policy.module.ts ***!
  \*****************************************/
/*! exports provided: PolicyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolicyPageModule", function() { return PolicyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _policy_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./policy-routing.module */ "/QQi");
/* harmony import */ var _policy_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./policy.page */ "LTNQ");







let PolicyPageModule = class PolicyPageModule {
};
PolicyPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _policy_routing_module__WEBPACK_IMPORTED_MODULE_5__["PolicyPageRoutingModule"]
        ],
        declarations: [_policy_page__WEBPACK_IMPORTED_MODULE_6__["PolicyPage"]]
    })
], PolicyPageModule);



/***/ })

}]);
//# sourceMappingURL=policy-policy-module-es2015.js.map