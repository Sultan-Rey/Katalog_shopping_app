(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"], {
    /***/
    "34Y5":
    /*!*************************************!*\
      !*** ./src/app/login/login.page.ts ***!
      \*************************************/

    /*! exports provided: LoginPage */

    /***/
    function Y5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
        return LoginPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./login.page.html */
      "V6Ie");
      /* harmony import */


      var _login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./login.page.scss */
      "r67e");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/fire/auth */
      "UbJi");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "I/3d");
      /* harmony import */


      var util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! util */
      "MCLT");
      /* harmony import */


      var util__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_9__);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var LoginPage = /*#__PURE__*/function () {
        function LoginPage(route, router, storage, afAuth, loadingcontroller, afstore, alertcontroller, formBuilder, fireauth) {
          _classCallCheck(this, LoginPage);

          this.route = route;
          this.router = router;
          this.storage = storage;
          this.afAuth = afAuth;
          this.loadingcontroller = loadingcontroller;
          this.afstore = afstore;
          this.alertcontroller = alertcontroller;
          this.formBuilder = formBuilder;
          this.fireauth = fireauth;
          this.dataUser = {
            mail: '',
            password: ''
          };
          this.passwordForm = this.formBuilder.group({
            old: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]],
            "new": ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]]
          });
          this.errorMessages = {
            password: [{
              type: 'required',
              message: 'Password is fully required'
            }, {
              type: 'pattern',
              message: 'Password must be at least 8 characters with digits and uppercase'
            }]
          };
        }

        _createClass(LoginPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.route.queryParams.subscribe(function (params) {
              if (_this.router.getCurrentNavigation().extras.state) {
                _this.data = _this.router.getCurrentNavigation().extras.state.order;
                _this.status = _this.router.getCurrentNavigation().extras.state.status;
              }
            });
          }
        }, {
          key: "getOldPassword",
          value: function getOldPassword() {
            return this.passwordForm.get('old');
          }
        }, {
          key: "getNewPassword",
          value: function getNewPassword() {
            return this.passwordForm.get('new');
          }
          /*   async submit() {
              let correctpass:boolean=false;
              let userId= (await this.fireauth.currentUser).uid;
              this.afstore.collection('user').doc(userId).get().subscribe(obs=>{
                if(this.passwordForm.value.old == obs.get('password')){
                  correctpass = true;
                }
                
              });
              if(correctpass){
                this.fireauth.currentUser.then((user)=>{
                  user.updatePassword(this.passwordForm.value.new);}).then(async ()=>{
                    const loading = await this.loadingcontroller.create({
                      cssClass: 'my-custom-class',
                      message: 'Please wait...',
                      duration: 2000
                    }).then((loaded)=>{
                      loaded.present();
                      loaded.onDidDismiss().then((dismiss)=>{
                        this.passwordForm.value.new=null;
                        this.passwordForm.value.old=null;
                        console.log(dismiss);
                        });
                    });
                  });
              }else{
                this.passwordForm.value.new=null;
                        this.passwordForm.value.old=null;
              }
              } */

        }, {
          key: "login",
          value: function login(data) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this2 = this;

              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.loadingcontroller.create({
                        cssClass: 'my-custom-class',
                        message: 'Please wait...',
                        duration: 5000
                      }).then(function (control) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                          var _this3 = this;

                          return regeneratorRuntime.wrap(function _callee3$(_context3) {
                            while (1) {
                              switch (_context3.prev = _context3.next) {
                                case 0:
                                  control.present();
                                  this.afAuth.signInWithEmailAndPassword(data.mail.trim(), data.password.trim()).then(function () {
                                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                                      var navigationExtras;
                                      return regeneratorRuntime.wrap(function _callee$(_context) {
                                        while (1) {
                                          switch (_context.prev = _context.next) {
                                            case 0:
                                              this.dataUser = {
                                                mail: '',
                                                password: ''
                                              };
                                              _context.next = 3;
                                              return this.afAuth.currentUser;

                                            case 3:
                                              if (!_context.sent.emailVerified) {
                                                _context.next = 12;
                                                break;
                                              }

                                              _context.t0 = this.storage;
                                              _context.next = 7;
                                              return this.afAuth.currentUser;

                                            case 7:
                                              _context.t1 = _context.sent.uid.toString();

                                              _context.t0.set.call(_context.t0, "user", _context.t1);

                                              navigationExtras = {
                                                state: {
                                                  order: this.data
                                                }
                                              };
                                              control.dismiss();

                                              if (!Object(util__WEBPACK_IMPORTED_MODULE_9__["isNullOrUndefined"])(this.data)) {
                                                this.router.navigate(['/place-order'], navigationExtras);
                                              } else {
                                                this.router.navigate(['/home']);
                                              }

                                            case 12:
                                            case "end":
                                              return _context.stop();
                                          }
                                        }
                                      }, _callee, this);
                                    }));
                                  })["catch"](function (rejection) {
                                    control.dismiss(rejection, "alert");
                                  });
                                  control.onWillDismiss().then(function (load) {
                                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                                      var alert;
                                      return regeneratorRuntime.wrap(function _callee2$(_context2) {
                                        while (1) {
                                          switch (_context2.prev = _context2.next) {
                                            case 0:
                                              if (!(load.role == "alert")) {
                                                _context2.next = 6;
                                                break;
                                              }

                                              _context2.next = 3;
                                              return this.alertcontroller.create({
                                                cssClass: 'my-custom-class',
                                                header: 'Sign In alert',
                                                subHeader: 'Login Failed',
                                                message: 'Password or username incorrect',
                                                buttons: ['Ok']
                                              });

                                            case 3:
                                              alert = _context2.sent;
                                              _context2.next = 6;
                                              return alert.present();

                                            case 6:
                                            case "end":
                                              return _context2.stop();
                                          }
                                        }
                                      }, _callee2, this);
                                    }));
                                  }); //loading dismissed()

                                case 3:
                                case "end":
                                  return _context3.stop();
                              }
                            }
                          }, _callee3, this);
                        }));
                      });

                    case 2:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "toSignUp",
          value: function toSignUp() {
            var navigationExtras = {
              state: {
                order: this.data
              }
            };
            this.router.navigate(['/signup'], navigationExtras);
          }
        }]);

        return LoginPage;
      }();

      LoginPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestore"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"]
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"]
        }];
      };

      LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], LoginPage);
      /***/
    },

    /***/
    "V6Ie":
    /*!*****************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function V6Ie(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar style=\" --background: #031432;\">\n    <ion-buttons routerLink=\"/home\" routerDirection=\"back\">\n      <ion-title class=\"width\">\n        <ion-text size=\"LARGE\" color=\"warning\">\n          K</ion-text>\n        <ion-text color=\"danger\">\n          <ion-icon size=\"LARGE\" name=cart></ion-icon>\n        </ion-text>\n        <ion-text color=\"light\">TALOG</ion-text>\n      </ion-title>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n \n  <div class=\"container\" style=\"padding-top: 50px;\">\n    <div class=\"row\">\n      <div class=\"col-lg-8 col-md-12 col-12\">\n        <div class=\"text-center\">\n          <img src=\"../../assets/shopping_time.png\" class=\"rounded\" alt=\"...\">\n          <h4>You enjoy shopping, We enjoy to make you happy</h4>\n          <small class=\"text-muted\">login with you customer account and start shopping now</small>\n        </div>\n             </div>\n\n      <div class=\"col-lg-4 col-md-12 col-12\">\n        <div class=\"border rounded p-4\">\n          <div class=\"container p-4\">\n            <ion-img style=\"width:100px;height: 100px; margin: auto;\" src=\"../../assets/icon/katalog_round_icon.PNG\"></ion-img>\n            <ion-slide>\n              <ion-label>Welcome Home</ion-label>\n            </ion-slide>\n          </div>\n  \n          <div>\n            \n            <ion-item>\n              <ion-icon slot=\"start\" name=\"person\"></ion-icon>\n              <ion-label position=\"floating\">Your email address</ion-label>\n              <ion-input type=\"text\" [(ngModel)]=\"dataUser.mail\" ></ion-input>\n            </ion-item>\n         \n            <ion-item>\n              <ion-icon slot=\"start\" name=\"lock-closed\"></ion-icon>\n              <ion-label position=\"floating\">Password</ion-label>\n              <ion-input type=\"password\" [(ngModel)]=\"dataUser.password\"></ion-input>\n            </ion-item>\n            <section>\n              <ion-button expand=\"block\" color=\"danger\" (click)=\"login(dataUser)\">Connexion</ion-button>\n              <div class=\"forgot\">\n              <ion-text>\n                <ion-label>Password forgot?</ion-label>\n              </ion-text>\n            </div>\n            </section>\n          </div>\n        \n    \n      <div id=\"signup\">\n        <ion-label  color=\"primary\" (click)=\"toSignUp()\">I don't have account, signup for free</ion-label>\n    </div>\n    \n      </div>\n     </div>\n    </div>\n</div>\n\n  <!-- <div class=\"container\" style=\"padding-top: 50px;\">\n      <div class=\"row\">\n        <div class=\"col-lg-6\">\n          <div class=\"border p-4\">\n            <h5>Profil Information</h5>\n          </div>\n        </div>\n        <div class=\"col-lg-6\">\n          <div class=\"border p-4\">\n            <h5>Update Password</h5>\n            <div  class=\"container\">\n              <ion-card>\n                <ion-card-title class=\"ion-padding\"> <h4>Change Password</h4></ion-card-title>\n                <ion-card-content>\n                  <ng-form [formGroup]=\"passwordForm\" (ngSubmit)=\"submit()\">\n                    <ion-item>\n                      <ion-chip>\n                        <ion-input type=\"password\" class=\"field\" formControlName=\"old\" placeholder=\"Old Password\"></ion-input>\n                               </ion-chip>\n                    </ion-item>\n                      <div *ngFor=\"let error of errorMessages.password\" class=\"padding-left\">\n                      <ng-container *ngIf=\"getOldPassword().hasError(error.type) && (getOldPassword().dirty || getOldPassword().touched)\">\n                        <small style=\"color: red;\" class=\"error-message\">{{error.message}}</small>\n                      </ng-container>\n                    </div>\n                    <ion-item>\n                      <ion-chip>\n                        <ion-input type=\"password\" class=\"field\" formControlName=\"new\" placeholder=\"New Password\"></ion-input>\n                         </ion-chip>\n                    </ion-item>\n                     <div *ngFor=\"let error of errorMessages.password\" class=\"padding-left\">\n                      <ng-container *ngIf=\"getNewPassword().hasError(error.type) && (getNewPassword().dirty || getNewPassword().touched)\">\n                        <small style=\"color: red;\"  class=\"error-message\">{{error.message}}</small>\n                      </ng-container>\n                    </div>\n                    <ion-item>\n                      <ion-button expand=\"block\" type=\"submit\">Change password</ion-button>\n                    </ion-item>\n                    \n                  </ng-form>\n                </ion-card-content>\n              </ion-card>\n            </div>\n          </div>\n        </div>\n      </div>\n  </div> -->\n\n</ion-content>\n\n<ion-footer style=\" --background: #031432;\">\n  <ion-toolbar>\n    <ion-item lines=\"none\">\n      <ion-buttons>\n        <ion-button>\n          <ion-label>Designed by : Bridge Technology &#x2122;</ion-label>\n        </ion-button>\n        </ion-buttons>\n      <ion-buttons slot=\"end\">\n        <ion-button><ion-label>get Help ?</ion-label></ion-button>\n        <ion-button><ion-label>Continue Shopping</ion-label></ion-button>\n      </ion-buttons>\n    </ion-item>\n  </ion-toolbar>\n</ion-footer>";
      /***/
    },

    /***/
    "X3zk":
    /*!***************************************!*\
      !*** ./src/app/login/login.module.ts ***!
      \***************************************/

    /*! exports provided: LoginPageModule */

    /***/
    function X3zk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
        return LoginPageModule;
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


      var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./login-routing.module */
      "euwS");
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./login.page */
      "34Y5");

      var LoginPageModule = function LoginPageModule() {
        _classCallCheck(this, LoginPageModule);
      };

      LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
      })], LoginPageModule);
      /***/
    },

    /***/
    "euwS":
    /*!***********************************************!*\
      !*** ./src/app/login/login-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: LoginPageRoutingModule */

    /***/
    function euwS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
        return LoginPageRoutingModule;
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


      var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login.page */
      "34Y5");

      var routes = [{
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
      }];

      var LoginPageRoutingModule = function LoginPageRoutingModule() {
        _classCallCheck(this, LoginPageRoutingModule);
      };

      LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LoginPageRoutingModule);
      /***/
    },

    /***/
    "r67e":
    /*!***************************************!*\
      !*** ./src/app/login/login.page.scss ***!
      \***************************************/

    /*! exports provided: default */

    /***/
    function r67e(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-label {\n  font-size: 13px;\n  color: #c8c8c8;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n}\n\nion-footer ion-item ion-label {\n  font-size: 13px;\n  color: #c8c8c8;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n}\n\n.forgot {\n  float: right;\n}\n\n.forgot ion-label {\n  font-size: 14px;\n  color: #c8c8c8;\n  margin-top: 10px;\n}\n\nsection {\n  margin-top: 1em;\n  margin-bottom: 2.5em;\n}\n\nsection:not(.full-width),\n.full-width > header {\n  padding: 0 10px;\n}\n\n#signup {\n  width: 100%;\n  text-align: center;\n  margin-top: 50px;\n}\n\n.my-custom-class {\n  --background: #222;\n  --spinner-color: #fff;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxzSEFBQTtBQUNKOztBQUlNO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxzSEFBQTtBQURSOztBQU1FO0VBQ0ksWUFBQTtBQUhOOztBQUtFO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUZOOztBQUtFO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0FBRko7O0FBS0U7O0VBRUUsZUFBQTtBQUZKOztBQUtFO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFGTjs7QUFJTTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFFQSxXQUFBO0FBRlIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgIGlvbi1sYWJlbHtcbiAgICBmb250LXNpemU6MTNweDtcbiAgICBjb2xvcjogI2M4YzhjODtcbiAgICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICAgIFxuICB9XG4gIGlvbi1mb290ZXJ7XG4gICAgaW9uLWl0ZW17XG4gICAgICBpb24tbGFiZWx7XG4gICAgICAgIGZvbnQtc2l6ZToxM3B4O1xuICAgICAgICBjb2xvcjogI2M4YzhjODtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgICBcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLmZvcmdvdHtcbiAgICAgIGZsb2F0OiByaWdodDtcbiAgfVxuICAuZm9yZ290IGlvbi1sYWJlbHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGNvbG9yOiAjYzhjOGM4O1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuXG4gIHNlY3Rpb24ge1xuICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAyLjVlbTtcbiAgfVxuXG4gIHNlY3Rpb246bm90KC5mdWxsLXdpZHRoKSxcbiAgLmZ1bGwtd2lkdGggPiBoZWFkZXIge1xuICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgfVxuXG4gICNzaWdudXB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgICB9XG4gICAgICAubXktY3VzdG9tLWNsYXNzIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjMjIyO1xuICAgICAgICAtLXNwaW5uZXItY29sb3I6ICNmZmY7XG4gICAgICBcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICB9Il19 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=login-login-module-es5.js.map