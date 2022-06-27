(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "34Y5":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.page.html */ "V6Ie");
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss */ "r67e");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! util */ "MCLT");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_9__);










let LoginPage = class LoginPage {
    constructor(route, router, storage, afAuth, loadingcontroller, alertcontroller, afirestore) {
        this.route = route;
        this.router = router;
        this.storage = storage;
        this.afAuth = afAuth;
        this.loadingcontroller = loadingcontroller;
        this.alertcontroller = alertcontroller;
        this.afirestore = afirestore;
        this.dataUser = {
            mail: '',
            password: ''
        };
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.data = this.router.getCurrentNavigation().extras.state.order;
                this.returnway = this.router.getCurrentNavigation().extras.state.route;
            }
        });
    }
    login(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.loadingcontroller.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                duration: 5000
            }).then((control) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                control.present();
                this.afAuth.signInWithEmailAndPassword(data.mail.trim(), data.password.trim()).then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    this.dataUser = { mail: '', password: '' };
                    if ((yield this.afAuth.currentUser).emailVerified) {
                        this.storage.set("user", (yield this.afAuth.currentUser).uid.toString());
                        const navigationExtras = {
                            state: {
                                order: this.data
                            }
                        };
                        control.dismiss();
                        if (!Object(util__WEBPACK_IMPORTED_MODULE_9__["isNullOrUndefined"])(this.data)) {
                            this.router.navigate(['/place-order'], navigationExtras);
                        }
                        else {
                            this.router.navigate(['/home']);
                        }
                    }
                })).catch(rejection => { control.dismiss(rejection, "alert"); });
                control.onWillDismiss().then((load) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    if (load.role == "alert") {
                        const alert = yield this.alertcontroller.create({
                            cssClass: 'my-custom-class',
                            header: 'Alert',
                            subHeader: 'Network Error',
                            message: 'Login failed' + load.data,
                            buttons: ['Ok']
                        });
                        yield alert.present();
                    }
                })); //loading dismissed()
            }));
        });
    }
    toSignUp() {
        const navigationExtras = {
            state: {
                order: this.data
            }
        };
        this.router.navigate(['/signup'], navigationExtras);
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestore"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoginPage);



/***/ }),

/***/ "V6Ie":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar style=\" --background: #031432;\">\n    <ion-buttons  slot=\"start\">\n      <ion-back-button color=\"light\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons routerLink=\"/home\" routerDirection=\"back\">\n      <ion-title class=\"width\">\n        <ion-text size=\"LARGE\" color=\"warning\">\n          K</ion-text>\n        <ion-text color=\"danger\">\n          <ion-icon size=\"LARGE\" name=cart></ion-icon>\n        </ion-text>\n        <ion-text color=\"light\">TALOG</ion-text>\n      </ion-title>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n \n  <div class=\"container\" style=\"padding-top: 50px;\">\n    <ion-card class=\"container p-4\">\n      <ion-title class=\"ion-padding\">\n        <ion-img style=\"width:100px;height: 100px; margin: auto;\" src=\"../../assets/icon/katalog_round_icon.PNG\"></ion-img>\n    </ion-title>\n    <ion-item>\n      <ion-icon slot=\"start\" name=\"person\"></ion-icon>\n      <ion-label position=\"floating\">Email or number phone</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"dataUser.mail\" ></ion-input>\n    </ion-item>\n \n    <ion-item>\n      <ion-icon slot=\"start\" name=\"lock-closed\"></ion-icon>\n      <ion-label position=\"floating\">Password</ion-label>\n      <ion-input type=\"password\" [(ngModel)]=\"dataUser.password\"></ion-input>\n    </ion-item>\n    <section>\n      <ion-button expand=\"block\" (click)=\"login(dataUser)\">Connexion</ion-button>\n      <div class=\"forgot\">\n      <ion-text>\n        <ion-label>Password forgot?</ion-label>\n      </ion-text>\n    </div>\n    </section>\n\n  <div id=\"signup\">\n    <ion-label  color=\"primary\" (click)=\"toSignUp()\">I don't have account, signup for free</ion-label>\n</div>\n    </ion-card>\n       \n</div>\n\n</ion-content>");

/***/ }),

/***/ "X3zk":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "euwS");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "34Y5");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "euwS":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "34Y5");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "r67e":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".icon {\n  width: 20px;\n  height: 28px;\n  border: none;\n  padding: 2px;\n}\n\n.width {\n  font-size: 26px;\n}\n\n.container ion-item {\n  width: 90%;\n  margin-left: auto;\n  margin-right: auto;\n  padding: auto;\n}\n\n#img {\n  width: 60%;\n  margin-left: auto;\n  margin-right: auto;\n  padding: auto;\n}\n\n.forgot {\n  float: right;\n}\n\n.forgot ion-label {\n  font-size: 14px;\n  color: #c8c8c8;\n  margin-top: 10px;\n}\n\nsection {\n  margin-top: 1em;\n  margin-bottom: 2.5em;\n}\n\nsection:not(.full-width),\n.full-width > header {\n  padding: 0 10px;\n}\n\n#signup {\n  width: 100%;\n  text-align: center;\n  margin-top: 50px;\n}\n\n.my-custom-class {\n  --background: #222;\n  --spinner-color: #fff;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUNFO0VBQ0UsZUFBQTtBQUVKOztBQUNDO0VBQ0ssVUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBRU47O0FBQUU7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUFHTjs7QUFERTtFQUNJLFlBQUE7QUFJTjs7QUFGRTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFLTjs7QUFGRTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtBQUtKOztBQUZFOztFQUVFLGVBQUE7QUFLSjs7QUFGRTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBS047O0FBSE07RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBRUEsV0FBQTtBQUtSIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb257XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyOHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nOjJweDtcbiAgfVxuICAud2lkdGh7XG4gICAgZm9udC1zaXplOiAyNnB4O1xuICB9XG5cbiAuY29udGFpbmVyIGlvbi1pdGVtIHtcbiAgICAgIHdpZHRoOiA5MCU7XG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgIHBhZGRpbmc6IGF1dG87XG4gIH1cbiAgI2ltZ3tcbiAgICAgIHdpZHRoOiA2MCU7XG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgIHBhZGRpbmc6IGF1dG87XG4gIH1cbiAgLmZvcmdvdHtcbiAgICAgIGZsb2F0OiByaWdodDtcbiAgfVxuICAuZm9yZ290IGlvbi1sYWJlbHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGNvbG9yOiAjYzhjOGM4O1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuXG4gIHNlY3Rpb24ge1xuICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAyLjVlbTtcbiAgfVxuXG4gIHNlY3Rpb246bm90KC5mdWxsLXdpZHRoKSxcbiAgLmZ1bGwtd2lkdGggPiBoZWFkZXIge1xuICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgfVxuXG4gICNzaWdudXB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgICB9XG4gICAgICAubXktY3VzdG9tLWNsYXNzIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjMjIyO1xuICAgICAgICAtLXNwaW5uZXItY29sb3I6ICNmZmY7XG4gICAgICBcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICB9Il19 */");

/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map