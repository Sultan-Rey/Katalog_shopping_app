(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["verification-verification-module"],{

/***/ "IOxn":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/verification/verification.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons style=\"margin-top:5%;\" slot=\"start\">\n    </ion-buttons>\n    <ion-title  class=\"width\" mode=ios >\n      <ion-text size=\"LARGE\" color=\"warning\">\n        K</ion-text>\n        <ion-text color=\"danger\"><ion-icon size=\"LARGE\" name=cart></ion-icon></ion-text>\n        <ion-text >ta</ion-text><img title=\"app icon\" class=\"icon\" src=\"assets/icon/lipstick.png\"/><ion-text>og</ion-text>\n      </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-img id=\"img\" src=\"assets/images/welcome.gif\"></ion-img>\n  \n    <p id=\"mail_link\" class=\"paragraph\">\n      A verification link was sent to your email adress: {{credential.mail}} please, verify it.\n    </p>\n   \n    \n   <ion-button class=\"center\" (click)=\"verification()\">Start Shopping now</ion-button>   \n \n</ion-content>\n");

/***/ }),

/***/ "JF+G":
/*!*****************************************************!*\
  !*** ./src/app/verification/verification.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".icon {\n  width: 15px;\n  height: 23px;\n  border: none;\n  padding: 2px;\n}\n\n.width {\n  font-size: 26px;\n}\n\n#code {\n  display: block;\n  margin: auto;\n  padding-bottom: 12%;\n  width: 35%;\n}\n\n.input {\n  font-size: 14px;\n  font-weight: bolder;\n  text-align: center;\n}\n\nsection {\n  margin-top: 1em;\n  margin-bottom: 2.5em;\n}\n\nsection:not(.full-width),\n.full-width > header {\n  padding: 0 10px;\n}\n\n.paragraph {\n  display: block;\n  padding: 20px;\n  margin: 5px;\n  font-family: \"Gill Sans\", \"Gill Sans MT\", Calibri, \"Trebuchet MS\", sans-serif;\n  font-size: 18px;\n  text-align: justify;\n}\n\n.my-custom-class {\n  --background: #222;\n  --spinner-color: #fff;\n  color: #fff;\n}\n\n.center {\n  margin-left: 25%;\n  margin-right: 25%;\n  padding: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVyaWZpY2F0aW9uL3ZlcmlmaWNhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBQ0U7RUFDRSxlQUFBO0FBRUo7O0FBQUU7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQUdKOztBQUFFO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFHSjs7QUFBRTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtBQUdKOztBQURFOztFQUVFLGVBQUE7QUFJSjs7QUFERTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLDZFQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBSUo7O0FBRkU7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBRUEsV0FBQTtBQUlKOztBQUZDO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUFLSCIsImZpbGUiOiJzcmMvYXBwL3ZlcmlmaWNhdGlvbi92ZXJpZmljYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb257XG4gICAgd2lkdGg6IDE1cHg7XG4gICAgaGVpZ2h0OiAyM3B4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nOjJweDtcbiAgfVxuICAud2lkdGh7XG4gICAgZm9udC1zaXplOiAyNnB4O1xuICB9XG4gICNjb2Rle1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwYWRkaW5nLWJvdHRvbTogMTIlO1xuICAgIHdpZHRoOiAzNSU7XG4gIH1cblxuICAuaW5wdXR7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyXG4gIH1cblxuICBzZWN0aW9uIHtcbiAgICBtYXJnaW4tdG9wOiAxZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMi41ZW07XG4gIH1cbiAgc2VjdGlvbjpub3QoLmZ1bGwtd2lkdGgpLFxuICAuZnVsbC13aWR0aCA+IGhlYWRlciB7XG4gICAgcGFkZGluZzogMCAxMHB4O1xuICB9XG5cbiAgLnBhcmFncmFwaHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIG1hcmdpbjogNXB4O1xuICAgIGZvbnQtZmFtaWx5OiAnR2lsbCBTYW5zJywgJ0dpbGwgU2FucyBNVCcsIENhbGlicmksICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICB9XG4gIC5teS1jdXN0b20tY2xhc3Mge1xuICAgIC0tYmFja2dyb3VuZDogIzIyMjtcbiAgICAtLXNwaW5uZXItY29sb3I6ICNmZmY7XG4gIFxuICAgIGNvbG9yOiAjZmZmO1xuICB9XG4gLmNlbnRlcntcbiAgIG1hcmdpbi1sZWZ0OiAyNSU7XG4gICBtYXJnaW4tcmlnaHQ6IDI1JTtcbiAgIHBhZGRpbmc6IGF1dG87XG4gfSJdfQ== */");

/***/ }),

/***/ "Kw+X":
/*!*****************************************************!*\
  !*** ./src/app/verification/verification.module.ts ***!
  \*****************************************************/
/*! exports provided: VerificationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificationPageModule", function() { return VerificationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _verification_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./verification-routing.module */ "SIZt");
/* harmony import */ var _verification_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./verification.page */ "c9mM");








let VerificationPageModule = class VerificationPageModule {
};
VerificationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _verification_routing_module__WEBPACK_IMPORTED_MODULE_5__["VerificationPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_verification_page__WEBPACK_IMPORTED_MODULE_6__["VerificationPage"]]
    })
], VerificationPageModule);



/***/ }),

/***/ "SIZt":
/*!*************************************************************!*\
  !*** ./src/app/verification/verification-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: VerificationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificationPageRoutingModule", function() { return VerificationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _verification_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./verification.page */ "c9mM");




const routes = [
    {
        path: '',
        component: _verification_page__WEBPACK_IMPORTED_MODULE_3__["VerificationPage"]
    }
];
let VerificationPageRoutingModule = class VerificationPageRoutingModule {
};
VerificationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VerificationPageRoutingModule);



/***/ }),

/***/ "c9mM":
/*!***************************************************!*\
  !*** ./src/app/verification/verification.page.ts ***!
  \***************************************************/
/*! exports provided: VerificationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificationPage", function() { return VerificationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_verification_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./verification.page.html */ "IOxn");
/* harmony import */ var _verification_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./verification.page.scss */ "JF+G");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! util */ "MCLT");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_10__);











let VerificationPage = class VerificationPage {
    constructor(route, router, formBuilder, afs, loadingController, storage, afAuth, alertcontroller) {
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
        this.afs = afs;
        this.loadingController = loadingController;
        this.storage = storage;
        this.afAuth = afAuth;
        this.alertcontroller = alertcontroller;
        this.credential = {
            mail: '',
            password: '',
            phone: ''
        };
        this.state = true;
        this.verificationForm = this.formBuilder.group({
            verifiedcode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('^[0-9]{6}(?:-[0-9]{4})?$')]]
        });
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.data = this.router.getCurrentNavigation().extras.state.order;
                this.user = this.router.getCurrentNavigation().extras.state.info;
                this.signin(this.user);
            }
        });
    }
    sms_preference() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.user.address.phone !== "" && this.user.address.phone !== null) {
                const alert = yield this.alertcontroller.create({
                    cssClass: 'my-custom-class',
                    header: 'Alert',
                    subHeader: 'Verification',
                    message: 'Code has been sent to ' + this.user.address.phone,
                    buttons: ['Ok']
                });
                yield alert.present();
                document.getElementById("sms_code").style.display = "block";
                document.getElementById("mail_link").style.display = "none;";
            }
            else {
                const alert = yield this.alertcontroller.create({
                    cssClass: 'my-custom-class',
                    header: 'Alert',
                    subHeader: 'Verification',
                    message: 'No phone number found, please verify by email. ',
                    buttons: ['Ok']
                });
                yield alert.present();
            }
        });
    }
    signin(user) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const newUserCredential = yield this.afAuth.createUserWithEmailAndPassword(user.email.trim(), user.password.trim());
                yield this.afs
                    .doc(`user/${newUserCredential.user.uid}`)
                    .set(user).then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    this.storage.set("user", user);
                    yield newUserCredential.user.sendEmailVerification();
                })).catch(err => { newUserCredential.user.delete(); this.msg_networkfailure(); this.storage.remove("user"); });
                return newUserCredential;
            }
            catch (error) {
                this.msg_networkfailure();
            }
        });
    }
    msg_networkfailure() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertcontroller.create({
                cssClass: 'my-custom-class',
                header: 'Alert',
                subHeader: 'Verification',
                message: 'If your email address is correct please verify your network connection. ',
                buttons: ['Ok']
            }).then((alertview) => {
                alertview.present();
                alertview.onDidDismiss().then(() => { });
            }).catch(error => { throw error; });
        });
    }
    verification() {
        this.afAuth.authState.subscribe(user => {
            if (user.emailVerified) {
                const navigationExtras = {
                    state: {
                        order: this.data
                    }
                };
                if (!Object(util__WEBPACK_IMPORTED_MODULE_10__["isNullOrUndefined"])(this.data)) {
                    this.router.navigate(['/place-order'], navigationExtras);
                }
                else {
                    this.router.navigate(['/home']);
                }
            }
        });
    }
    redirectTo() {
        if (this.data !== '') {
            const navigationExtras = {
                state: {
                    product: this.data
                }
            };
            this.router.navigate(['/place-order'], navigationExtras);
        }
        else {
            this.state = false;
        }
    }
};
VerificationPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuth"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"] }
];
VerificationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-verification',
        template: _raw_loader_verification_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_verification_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], VerificationPage);



/***/ })

}]);
//# sourceMappingURL=verification-verification-module-es2015.js.map