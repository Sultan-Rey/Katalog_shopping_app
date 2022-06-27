(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["searchquery-searchquery-module"],{

/***/ "FhnW":
/*!***********************************************************!*\
  !*** ./src/app/searchquery/searchquery-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: SearchqueryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchqueryPageRoutingModule", function() { return SearchqueryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _searchquery_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./searchquery.page */ "hu/Y");




const routes = [
    {
        path: '',
        component: _searchquery_page__WEBPACK_IMPORTED_MODULE_3__["SearchqueryPage"]
    }
];
let SearchqueryPageRoutingModule = class SearchqueryPageRoutingModule {
};
SearchqueryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SearchqueryPageRoutingModule);



/***/ }),

/***/ "STTt":
/*!***************************************************!*\
  !*** ./src/app/searchquery/searchquery.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaHF1ZXJ5L3NlYXJjaHF1ZXJ5LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "hu/Y":
/*!*************************************************!*\
  !*** ./src/app/searchquery/searchquery.page.ts ***!
  \*************************************************/
/*! exports provided: SearchqueryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchqueryPage", function() { return SearchqueryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_searchquery_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./searchquery.page.html */ "t96N");
/* harmony import */ var _searchquery_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./searchquery.page.scss */ "STTt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _firestore_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../firestore-data.service */ "UbTl");
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../local-storage.service */ "gvvY");








let SearchqueryPage = class SearchqueryPage {
    constructor(route, router, firestoreData, lstorage, toastcontroller) {
        this.route = route;
        this.router = router;
        this.firestoreData = firestoreData;
        this.lstorage = lstorage;
        this.toastcontroller = toastcontroller;
        this.query = '';
        this.items = [];
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.query = this.router.getCurrentNavigation().extras.state.query;
                if (this.query !== '' && this.query !== null) {
                }
            }
        });
    }
    search() {
        if (this.query !== '') {
            this.items = this.firestoreData.getFirestoreData().filter((product) => product.name.toUpperCase().includes(this.query.toUpperCase()) || product.description.toUpperCase().includes(this.query.toUpperCase()));
        }
        else {
        }
    }
    goTo(item) {
        const navigationExtras = {
            state: {
                product: item
            }
        };
        this.router.navigate(['/product'], navigationExtras);
    }
    setItem(item_details) {
        this.details = {};
        this.details.name = item_details.name;
        this.details.brand = item_details.brand;
        this.details.description = item_details.description;
        this.details.category = item_details.category;
        this.details.qty = 1;
        this.details.size = item_details.size[0];
        this.details.color = item_details.models[0].id;
        this.details.shippingFee = item_details.shippingFee;
        this.details.deliveryFee = item_details.deliveryFee;
        this.details.taxFee = item_details.taxFee;
        this.details.deliveryDate = item_details.deliveryDate;
        this.details.picture = item_details.models[0].pictures[0];
        this.details.price = item_details.caracteristic[0].price;
        return this.details;
    }
    addToCart(item_details) {
        this.lstorage.addTocart(this.setItem(item_details)).then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastcontroller.create({
                header: "Add To Cart",
                message: "Item added to your cart",
                duration: 2000
            });
            yield toast.present();
        }));
    }
};
SearchqueryPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _firestore_data_service__WEBPACK_IMPORTED_MODULE_6__["FirestoreDataService"] },
    { type: _local_storage_service__WEBPACK_IMPORTED_MODULE_7__["LocalStorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] }
];
SearchqueryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-searchquery',
        template: _raw_loader_searchquery_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_searchquery_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SearchqueryPage);



/***/ }),

/***/ "sDU0":
/*!***************************************************!*\
  !*** ./src/app/searchquery/searchquery.module.ts ***!
  \***************************************************/
/*! exports provided: SearchqueryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchqueryPageModule", function() { return SearchqueryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _searchquery_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./searchquery-routing.module */ "FhnW");
/* harmony import */ var _searchquery_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./searchquery.page */ "hu/Y");
/* harmony import */ var _sharedviews_sharedviews_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sharedviews/sharedviews.module */ "l+lL");








let SearchqueryPageModule = class SearchqueryPageModule {
};
SearchqueryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _sharedviews_sharedviews_module__WEBPACK_IMPORTED_MODULE_7__["SharedviewsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _searchquery_routing_module__WEBPACK_IMPORTED_MODULE_5__["SearchqueryPageRoutingModule"]
        ],
        declarations: [_searchquery_page__WEBPACK_IMPORTED_MODULE_6__["SearchqueryPage"]]
    })
], SearchqueryPageModule);



/***/ }),

/***/ "t96N":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/searchquery/searchquery.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<app-page-header></app-page-header>\n<ion-content>\n  <div class=\"alert alert-dark\"> <!-- Messages Bar -->\n    <div class=\"row\">\n      <div class=\"col-md-10 col-sm-6\">\n        <h5>Results</h5>\n      </div>\n      <div class=\"col-md-2 col-sm-6\">\n        <ion-label>Filter<ion-icon name=\"chevron-down\"></ion-icon></ion-label>\n      </div>\n    </div>\n    \n  </div>\n      <ion-list id=\"allproduct\" >\n        <ion-item class=\"hide\"  ion-button detail=\"true\" *ngFor=\"let items of items\" >\n            <ion-img size=\"large\"  [src]=\"items.models[0].pictures[0]\" style=\"width: 110px; height: 150px;\"></ion-img>\n         <ion-item-group>\n           <ion-item>\n            <ion-label>\n              <div (click)=\"goTo(items.product)\">\n                <ion-buttons>\n                  <ion-text>{{items.price|currency}}</ion-text>\n                  <ion-badge color=\"danger\" *ngIf=\"items.qty<10 && items.qty>1\">Only {{items.qty}} left</ion-badge>\n                </ion-buttons>\n                  <h6>{{items.name}}</h6>\n                  <p>\n        <ion-icon name=\"star\" *ngIf=\"items.rating>0\"></ion-icon>\n        <ion-icon name=\"star\" *ngIf=\"items.rating>1\"></ion-icon>\n        <ion-icon name=\"star\" *ngIf=\"items.rating>2\"></ion-icon>\n        <ion-icon name=\"star\" *ngIf=\"items.rating>3\"></ion-icon>\n        <ion-icon name=\"star\" *ngIf=\"items.rating>4\"></ion-icon>\n                  </p>\n                <ion-label><h6>{{items.description}}</h6></ion-label>\n              </div>\n             <ion-button (click)=\"addToCart(items)\">Add To Cart</ion-button>\n             <!--<ion-button>Buy now</ion-button>-->\n              </ion-label>\n           </ion-item>\n         </ion-item-group>\n            \n        </ion-item>\n      </ion-list>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=searchquery-searchquery-module-es2015.js.map