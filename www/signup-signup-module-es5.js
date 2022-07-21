(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-signup-module"], {
    /***/
    "6h0i":
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function h0i(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons style=\"margin-top:5%;\" slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title  class=\"width\" mode=ios >\n      <ion-text size=\"LARGE\" color=\"warning\">\n        K</ion-text>\n        <ion-text color=\"danger\"><ion-icon size=\"LARGE\" name=cart></ion-icon></ion-text>\n        <ion-text >ta</ion-text><img title=\"Katalog icon\" class=\"icon\" src=\"assets/icon/lipstick.png\"/><ion-text>og</ion-text>\n      </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n<form [formGroup]=\"registrationForm\" (ngSubmit)=\"submit()\">\n  <ion-item-group formGroupName=\"identification\" >\n    <ion-item-divider style=\"background: rgb(41, 54, 75);\">\n      <ion-icon name=\"person\"></ion-icon>\n      <ion-label style=\"color: cornsilk; font-size: 16px;\">Identification</ion-label>\n    </ion-item-divider>\n    <ion-item>\n      <ion-label position=\"stacked\">Your name <span>*</span></ion-label>\n      <ion-input inputmode=\"text\"  placeholder=\"Ex : Smith Anderson\" required=\"true\" formControlName=\"name\"></ion-input>\n    </ion-item>\n    <div *ngFor=\"let error of errorMessages.name\" style=\"padding-left: 5%\">\n      <ng-container *ngIf=\"getName().hasError(error.type) && (getName().dirty || getName().touched)\">\n        <small class=\"error-message\">{{error.message}}</small>\n      </ng-container>\n    </div>\n    <ion-item>\n      <ion-label position=\"stacked\">Civilite</ion-label>\n      <ion-label position=\"fixed\">Select your civil status?</ion-label>\n      <ion-select formControlName=\"civilite\" [value]=\"civilite[0]\">\n        <ion-select-option value=\"0\">Select your civil status?</ion-select-option>\n        <ion-select-option *ngFor=\"let opts of civilite\">{{opts}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label ion-button position=\"stacked\">Birthday Date</ion-label>\n      <ion-datetime inputmode=\"date\" placeholder=\"1994-03-14\" formControlName=\"birthday\" displayFormat=\"MM/DD/YYYY\" min=\"1994-03-14\"\n        max=\"2012-12-09\"></ion-datetime>\n    </ion-item>\n  </ion-item-group>\n\n  <ion-item-group formGroupName=\"location\">\n    <ion-item-divider style=\"background: rgb(41, 54, 75);\">\n      <ion-icon name=\"location\"></ion-icon>\n      <ion-label style=\"color: cornsilk; font-size: 16px;\">Location</ion-label>\n    </ion-item-divider>\n    <ion-item>\n      <ion-label>Address Line 1<span>*</span></ion-label>\n      <ion-input formControlName=\"address1\" placeholder=\"Street, Apt, Building number...\"></ion-input>\n    </ion-item>\n    <div *ngFor=\"let error of errorMessages.address1\" style=\"padding-left: 5%\">\n      <ng-container *ngIf=\"getAddress1().hasError(error.type) && (getAddress1().dirty || getAddress1().touched)\">\n        <small class=\"error-message\">{{error.message}}</small>\n      </ng-container>\n    </div>\n    <ion-item>\n      <ion-label>Address Line 2</ion-label>\n      <ion-input formControlName=\"address2\" placeholder=\"Optional\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"fixed\">City<span>*</span></ion-label>\n      <ion-input formControlName=\"city\" placeholder=\"add a city name\"></ion-input>\n    </ion-item>\n    <div *ngFor=\"let error of errorMessages.city\" style=\"padding-left: 5%\">\n      <ng-container *ngIf=\"getCity().hasError(error.type) && (getCity().dirty || getCity().touched)\">\n        <small class=\"error-message\">{{error.message}}</small>\n      </ng-container>\n    </div>\n    <ion-item>\n      <ion-label position=\"fixed\">State<span>*</span></ion-label>\n      <ion-input formControlName=\"state\" placeholder=\"if you not in US add country name\">\n      </ion-input>\n    </ion-item>\n    <div *ngFor=\"let error of errorMessages.state\" style=\"padding-left: 5%\">\n      <ng-container *ngIf=\"getState().hasError(error.type) && (getState().dirty || getState().touched)\">\n        <small class=\"error-message\">{{error.message}}</small>\n      </ng-container>\n    </div>\n    <ion-item>\n      <ion-label position=\"fixed\">Phone Number<span>*</span></ion-label>\n      <ion-input inputmode=\"tel\" formControlName=\"phone\" placeholder=\"+(area Code) number phone...\"></ion-input>\n    </ion-item>\n    <div *ngFor=\"let error of errorMessages.phone\" style=\"padding-left: 5%\">\n      <ng-container *ngIf=\"getPhone().hasError(error.type) && (getPhone().dirty || getPhone().touched)\">\n        <small class=\"error-message\">{{error.message}}</small>\n      </ng-container>\n    </div>\n    <ion-item>\n      <ion-label position=\"fixed\">Zip Code<span>*</span></ion-label>\n      <ion-input formControlName=\"zipcode\" placeholder=\"digits only...\"></ion-input>\n    </ion-item>\n    <div *ngFor=\"let error of errorMessages.zipcode\" style=\"padding-left: 5%\">\n      <ng-container *ngIf=\"getZipcode().hasError(error.type) && (getZipcode().dirty || getZipcode().touched)\">\n        <small class=\"error-message\">{{error.message}}</small>\n      </ng-container>\n    </div>\n  </ion-item-group>\n\n  <ion-item-group formGroupName=\"security\">\n    <ion-item-divider style=\"background: rgb(41, 54, 75);\">\n      <ion-icon name=\"key\"></ion-icon>\n      <ion-label style=\"color: cornsilk; font-size: 16px;\">Password & Security</ion-label>\n    </ion-item-divider>\n    <ion-item>\n      <ion-label position=\"fixed\">E-mail<span>*</span></ion-label>\n      <ion-input formControlName=\"mail\" placeholder=\"Enter your account mail..\"></ion-input>\n    </ion-item>\n    <div *ngFor=\"let error of errorMessages.mail\" style=\"padding-left: 5%\">\n      <ng-container *ngIf=\"getMail().hasError(error.type) && (getMail().dirty || getMail().touched)\">\n        <small class=\"error-message\">{{error.message}}</small>\n      </ng-container>\n    </div>\n    <ion-item>\n      <ion-label position=\"fixed\">Password<span>*</span></ion-label>\n      <ion-input type=\"password\" formControlName=\"password\" placeholder=\"at least 8 characters with digits\"></ion-input>\n    </ion-item>\n    <div *ngFor=\"let error of errorMessages.password\" style=\"padding-left: 5%\">\n      <ng-container *ngIf=\"getPassword().hasError(error.type) && (getPassword().dirty || getPassword().touched)\">\n        <small class=\"error-message\">{{error.message}}</small>\n      </ng-container>\n    </div>\n    <ion-item>\n      <ion-label position=\"fixed\">Confirm<span>*</span></ion-label>\n      <ion-input type=\"password\" formControlName=\"confirm\" placeholder=\"Re-type your password...\"></ion-input>\n    </ion-item>\n  </ion-item-group>\n\n  <ion-item-group formGroupName=\"paymethod\">\n    <ion-item-divider style=\"background: rgb(41, 54, 75);\">\n      <ion-icon name=\"card\"></ion-icon>\n      <ion-label style=\"color: cornsilk; font-size: 16px;\">Terms And Payment</ion-label>\n    </ion-item-divider>\n    <ion-item>\n      <ion-label position=\"stacked\">Default Payment Method</ion-label>\n      <ion-input readonly=\"true\" placeholder=\"Pay easily by Card, and More...\" formControlName=\"method\" [value]=\"method\" color=\"primary\"></ion-input>\n      <ion-button fill=\"clear\" slot=\"end\">select</ion-button>\n    </ion-item>\n    <div *ngFor=\"let error of errorMessages.method\" style=\"padding-left: 5%\">\n      <ng-container *ngIf=\"getMethod().hasError(error.type) && (getMethod().dirty || getMethod().touched)\">\n        <small class=\"error-message\">{{error.message}}</small>\n      </ng-container>\n    </div>\n    <ion-item>\n      <ion-checkbox  formControlName=\"agree\"></ion-checkbox>\n      <ion-label style=\"margin-left:10px\" color=\"tertiary\">I'm agree with terms and conditions?</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-icon name=\"document-text-outline\"></ion-icon>\n      <ion-label slot=\"end\" style=\"margin-right:10px; font-size: 10px;\" color=\"tertiary\">See Terms and Condition\n      </ion-label>\n    </ion-item>\n  </ion-item-group>\n  <section>\n    <ion-button button  expand=\"block\" type=\"submit\">SIGN UP FOR FREE</ion-button>\n  </section>\n  \n</form>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "RPFs":
    /*!*************************************************!*\
      !*** ./src/app/signup/signup-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: SignupPageRoutingModule */

    /***/
    function RPFs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignupPageRoutingModule", function () {
        return SignupPageRoutingModule;
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


      var _signup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./signup.page */
      "yL7A");

      var routes = [{
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_3__["SignupPage"]
      }];

      var SignupPageRoutingModule = function SignupPageRoutingModule() {
        _classCallCheck(this, SignupPageRoutingModule);
      };

      SignupPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SignupPageRoutingModule);
      /***/
    },

    /***/
    "T9iC":
    /*!*****************************************!*\
      !*** ./src/app/signup/signup.module.ts ***!
      \*****************************************/

    /*! exports provided: SignupPageModule */

    /***/
    function T9iC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignupPageModule", function () {
        return SignupPageModule;
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


      var _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./signup-routing.module */
      "RPFs");
      /* harmony import */


      var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./signup.page */
      "yL7A");

      var SignupPageModule = function SignupPageModule() {
        _classCallCheck(this, SignupPageModule);
      };

      SignupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignupPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]],
        entryComponents: []
      })], SignupPageModule);
      /***/
    },

    /***/
    "fJgH":
    /*!*****************************************!*\
      !*** ./src/app/signup/signup.page.scss ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function fJgH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".icon {\n  width: 20px;\n  height: 28px;\n  border: none;\n  padding: 2px;\n}\n\n.width {\n  font-size: 26px;\n}\n\nsection {\n  margin-top: 1em;\n  margin-bottom: 2.5em;\n}\n\n.error-message {\n  color: var(--ion-color-danger);\n}\n\nsection:not(.full-width),\n.full-width > header {\n  padding: 0 10px;\n}\n\n.my-custom-class {\n  --background: #222;\n  --spinner-color: #fff;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBQ0U7RUFDRSxlQUFBO0FBRUo7O0FBQUU7RUFDRSxlQUFBO0VBQ0Esb0JBQUE7QUFHSjs7QUFERTtFQUNFLDhCQUFBO0FBSUo7O0FBRkU7O0VBRUUsZUFBQTtBQUtKOztBQUhFO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUVBLFdBQUE7QUFLSiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb257XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyOHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nOjJweDtcbiAgfVxuICAud2lkdGh7XG4gICAgZm9udC1zaXplOiAyNnB4O1xuICB9XG4gIHNlY3Rpb24ge1xuICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAyLjVlbTtcbiAgfVxuICAuZXJyb3ItbWVzc2FnZSB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xufVxuICBzZWN0aW9uOm5vdCguZnVsbC13aWR0aCksXG4gIC5mdWxsLXdpZHRoID4gaGVhZGVyIHtcbiAgICBwYWRkaW5nOiAwIDEwcHg7XG4gIH1cbiAgLm15LWN1c3RvbS1jbGFzcyB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMjIyO1xuICAgIC0tc3Bpbm5lci1jb2xvcjogI2ZmZjtcbiAgXG4gICAgY29sb3I6ICNmZmY7XG4gIH0iXX0= */";
      /***/
    },

    /***/
    "yL7A":
    /*!***************************************!*\
      !*** ./src/app/signup/signup.page.ts ***!
      \***************************************/

    /*! exports provided: SignupPage */

    /***/
    function yL7A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignupPage", function () {
        return SignupPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_signup_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./signup.page.html */
      "6h0i");
      /* harmony import */


      var _signup_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./signup.page.scss */
      "fJgH");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");

      var SignupPage = /*#__PURE__*/function () {
        function SignupPage(loadingController, alertController, pickerCtrl, formBuilder, modalcontroller, storage, route, router) {
          _classCallCheck(this, SignupPage);

          this.loadingController = loadingController;
          this.alertController = alertController;
          this.pickerCtrl = pickerCtrl;
          this.formBuilder = formBuilder;
          this.modalcontroller = modalcontroller;
          this.storage = storage;
          this.route = route;
          this.router = router;
          this.civilite = ['Mr', 'Mme', 'Mlle', 'Miss', 'Other'];
          this.registrationForm = this.formBuilder.group({
            identification: this.formBuilder.group({
              name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(100)]],
              civilite: [''],
              birthday: ['']
            }),
            location: this.formBuilder.group({
              address1: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(100)]],
              address2: [''],
              city: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(100)]],
              state: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(100)]],
              phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$')]],
              zipcode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern('^[0-9]{5}(?:-[0-9]{4})?$')]]
            }),
            paymethod: this.formBuilder.group({
              method: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
              agree: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].requiredTrue]]
            }),
            security: this.formBuilder.group({
              mail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$')]],
              password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]],
              confirm: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]]
            })
          });
          this.errorMessages = {
            name: [{
              type: 'required',
              message: 'Name is required'
            }, {
              type: 'maxlenght',
              message: 'Name can\'t be longer than 100 characters'
            }],
            address1: [{
              type: 'required',
              message: 'Main address is required'
            }, {
              type: 'maxlenght',
              message: 'City can\'t be longer than 100 characters'
            }],
            city: [{
              type: 'required',
              message: 'City is required'
            }, {
              type: 'maxlenght',
              message: 'City can\'t be longer than 100 characters'
            }],
            state: [{
              type: 'required',
              message: 'State is required'
            }, {
              type: 'maxlenght',
              message: 'State can\'t be longer than 100 characters'
            }],
            phone: [{
              type: 'required',
              message: 'Phone is required'
            }, {
              type: 'pattern',
              message: 'Please enter a valid number phone'
            }],
            zipcode: [{
              type: 'required',
              message: 'Zipcode is fully required'
            }, {
              type: 'pattern',
              message: 'Please enter a valid zip code number!'
            }],
            mail: [{
              type: 'required',
              message: 'E-mail is fully required'
            }, {
              type: 'pattern',
              message: 'Please enter a valid email address'
            }],
            password: [{
              type: 'required',
              message: 'Password is fully required'
            }, {
              type: 'pattern',
              message: 'Password must be at least 8 characters with digits and uppercase'
            }],
            method: [{
              type: 'required',
              message: 'City is required'
            }]
          };
          this.user = {};
          this.user.address = {};
        }

        _createClass(SignupPage, [{
          key: "getName",
          value: function getName() {
            return this.registrationForm.get('identification.name');
          }
        }, {
          key: "getCivilite",
          value: function getCivilite() {
            return this.registrationForm.get('identification.civilite');
          }
        }, {
          key: "getBirth",
          value: function getBirth() {
            return this.registrationForm.get('identification.birthday');
          }
        }, {
          key: "getAddress1",
          value: function getAddress1() {
            return this.registrationForm.get('location.address1');
          }
        }, {
          key: "getAddress2",
          value: function getAddress2() {
            return this.registrationForm.get('location.address2');
          }
        }, {
          key: "getCity",
          value: function getCity() {
            return this.registrationForm.get('location.city');
          }
        }, {
          key: "getState",
          value: function getState() {
            return this.registrationForm.get('location.state');
          }
        }, {
          key: "getPhone",
          value: function getPhone() {
            return this.registrationForm.get('location.phone');
          }
        }, {
          key: "getZipcode",
          value: function getZipcode() {
            return this.registrationForm.get('location.zipcode');
          }
        }, {
          key: "getMail",
          value: function getMail() {
            return this.registrationForm.get('security.mail');
          }
        }, {
          key: "getPassword",
          value: function getPassword() {
            return this.registrationForm.get('security.password');
          }
        }, {
          key: "getConfirm",
          value: function getConfirm() {
            return this.registrationForm.get('security.confirm');
          }
        }, {
          key: "getMethod",
          value: function getMethod() {
            return this.registrationForm.get('paymethod.method');
          }
        }, {
          key: "getAgree",
          value: function getAgree() {
            return this.registrationForm.get('paymethod.agree');
          }
        }, {
          key: "submit",
          value: function submit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var alert, loading, _alert;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (!this.registrationForm.valid) {
                        _context.next = 14;
                        break;
                      }

                      if (!(this.registrationForm.get('security.confirm').value !== this.registrationForm.get('security.password').value)) {
                        _context.next = 9;
                        break;
                      }

                      _context.next = 4;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Alert',
                        subHeader: 'Subtitle',
                        message: 'Password & confirm must be same.',
                        buttons: ['Ok']
                      });

                    case 4:
                      alert = _context.sent;
                      _context.next = 7;
                      return alert.present();

                    case 7:
                      _context.next = 12;
                      break;

                    case 9:
                      _context.next = 11;
                      return this.loadingController.create({
                        cssClass: 'my-custom-class',
                        message: 'Please wait...',
                        duration: 2000
                      }).then(function (loaded) {
                        loaded.present();
                        loaded.onDidDismiss().then(function (dismiss) {
                          _this.storeAddress();

                          _this.persistenceLogin(_this.registrationForm.value);
                        });
                      });

                    case 11:
                      loading = _context.sent;

                    case 12:
                      _context.next = 19;
                      break;

                    case 14:
                      _context.next = 16;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Alert',
                        subHeader: 'Subtitle',
                        message: 'Required field must be fill correctly.',
                        buttons: ['Ok']
                      });

                    case 16:
                      _alert = _context.sent;
                      _context.next = 19;
                      return _alert.present();

                    case 19:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
          /*  async showMethod() {
             const opts: PickerOptions = {
               buttons: [
                 {
                   text: 'Done',
                   role: 'Done'
                 }
               ],
               columns: [
                 {
                   name: 'method',
                   options: [
                     { text: 'None', value: 'none' },
                     { text: 'MonCash$', value: 'moncash' },
                     { text: 'Star Card Balance', value: 'sc' },
                     { text: 'PayPal', value: 'pp' },
                     { text: 'Cashapp', value: 'cashapp' }
                   ]
                     }
               ]
             };
             const picker = await this.pickerCtrl.create(opts);
             picker.present();
             picker.onDidDismiss().then(async data => {
               const col = await picker.getColumn('method');
               this.method = col.options[col.selectedIndex].text;
               if (this.method === 'MonCash$'){
                 this.openModal(this.method);
               }else if (this.method === 'PayPal'){
                 this.openModal(this.method);
               }
             });
           } */

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.route.queryParams.subscribe(function (params) {
              if (_this2.router.getCurrentNavigation().extras.state) {
                _this2.data = _this2.router.getCurrentNavigation().extras.state.order;
              }
            });
          }
        }, {
          key: "addInfo",
          value: function addInfo(value) {
            this.storage.set('moncashId', value);
          }
        }, {
          key: "persistenceLogin",
          value: function persistenceLogin(register) {
            this.user.type = "USER";
            this.user.name = register.identification.name;
            this.user.email = register.security.mail;
            this.user.password = register.security.password;
            this.user.address.address1 = register.location.address1;
            this.user.address.address2 = register.location.address1;
            this.user.address.phone = register.location.phone;
            this.user.address.city = register.location.city;
            this.user.address.state = register.location.state;
            this.user.address.zipcode = register.location.zipcode;
            this.user.civilite = register.identification.civilite;
            this.user.birthday = register.identification.birthday;
            this.user.connection = true;
            this.user.status = true;
            var navigationExtras = {
              state: {
                product: this.data,
                info: this.user
              }
            };
            this.router.navigate(['/verification'], navigationExtras);
          }
        }, {
          key: "crypto",
          value: function crypto() {
            var _character = ['F', 'A', 'S', 'H', 'I', 'O', 'N', 'T', 'R', 'B', 'E', 'U', 'Y'];
            var sequence = Math.floor(Math.random() * 100);
            var index = Math.floor(Math.random() * 12);
            var encryption = _character[index] + _character[index + 1] + sequence;
            return encryption;
          }
        }, {
          key: "storeAddress",
          value: function storeAddress() {
            var _this3 = this;

            this.storage.get("address").then(function (data) {
              if (data === null || data.length === 0) {
                data = [];
                data.push({
                  id: _this3.crypto(),
                  name: _this3.registrationForm.get('identification.name').value,
                  address1: _this3.registrationForm.get('location.address1').value,
                  address2: _this3.registrationForm.get('location.address2').value,
                  city: _this3.registrationForm.get('location.city').value,
                  phone: _this3.registrationForm.get('location.phone').value,
                  state: _this3.registrationForm.get('location.state').value,
                  zipcode: _this3.registrationForm.get('location.zipcode').value,
                  "default": false
                });
              } else {
                data.push({
                  id: _this3.crypto(),
                  name: _this3.registrationForm.get('identification.name').value,
                  address1: _this3.registrationForm.get('location.address1').value,
                  address2: _this3.registrationForm.get('location.address2').value,
                  city: _this3.registrationForm.get('location.city').value,
                  phone: _this3.registrationForm.get('location.phone').value,
                  state: _this3.registrationForm.get('location.state').value,
                  zipcode: _this3.registrationForm.get('location.zipcode').value,
                  "default": false
                });
              }

              _this3.storage.set("address", data);
            });
          }
        }]);

        return SignupPage;
      }();

      SignupPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PickerController"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      };

      SignupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-signup',
        template: _raw_loader_signup_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_signup_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SignupPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=signup-signup-module-es5.js.map