(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cart-cart-module"], {
    /***/
    "SNM6":
    /*!*************************************!*\
      !*** ./src/app/cart/cart.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function SNM6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-item ion-button {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-family: Impact, Haettenschweiler, \"Arial Narrow Bold\", sans-serif;\n  font-size: 12px;\n}\nion-item ion-badge {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  margin-left: 10px;\n  font-family: sans-serif;\n}\nh3 {\n  margin-left: 15px;\n}\n.alert {\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FydC9jYXJ0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0Esc0VBQUE7RUFDQSxlQUFBO0FBQUo7QUFFRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtBQUFKO0FBR0E7RUFDRSxpQkFBQTtBQUFGO0FBR0E7RUFDRSxVQUFBO0FBQUYiLCJmaWxlIjoic3JjL2FwcC9jYXJ0L2NhcnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW17XG4gIGlvbi1idXR0b257XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBmb250LWZhbWlseTpJbXBhY3QsIEhhZXR0ZW5zY2h3ZWlsZXIsICdBcmlhbCBOYXJyb3cgQm9sZCcsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG4gIGlvbi1iYWRnZXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIH1cbn1cbmgze1xuICBtYXJnaW4tbGVmdDoxNXB4O1xufVxuXG4uYWxlcnR7XG4gIHBhZGRpbmc6IDA7XG59Il19 */";
      /***/
    },

    /***/
    "UbTl":
    /*!*******************************************!*\
      !*** ./src/app/firestore-data.service.ts ***!
      \*******************************************/

    /*! exports provided: FirestoreDataService */

    /***/
    function UbTl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FirestoreDataService", function () {
        return FirestoreDataService;
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


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "I/3d");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/fire/auth */
      "UbJi");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");

      var FirestoreDataService = /*#__PURE__*/function () {
        function FirestoreDataService(afs, afAuth, storage) {
          _classCallCheck(this, FirestoreDataService);

          this.afs = afs;
          this.afAuth = afAuth;
          this.storage = storage;
          this.userId = '';
        }

        _createClass(FirestoreDataService, [{
          key: "getAuthState",
          value: function getAuthState() {
            var _this = this;

            this.afAuth.authState.subscribe(function (auth) {
              if (!auth) {
                _this.connected = false;
              } else {
                _this.connected = true;
              }
            });
            return this.connected;
          }
        }, {
          key: "getConnexionState",
          value: function getConnexionState() {
            return globalThis.navigator.onLine;
          }
        }, {
          key: "getMainSlides",
          value: function getMainSlides() {
            this.slidesDocument = this.afs.collection('homepane').doc('d0pWnLNzch6ACeFKJmrj');
            this.slides = this.slidesDocument.valueChanges();
            return this.slides;
          }
        }, {
          key: "getCategories",
          value: function getCategories() {
            this.categoriesCollection = this.afs.collection('categories', function (q) {
              return q.orderBy("categoryName", "asc").limit(4);
            });
            this.category = this.categoriesCollection.valueChanges();
            return this.category;
          }
        }, {
          key: "getAllcategories",
          value: function getAllcategories() {
            this.categoriesCollection = this.afs.collection('categories', function (q) {
              return q.orderBy("categoryName");
            });
            this.category = this.categoriesCollection.valueChanges();
            return this.category;
          }
        }, {
          key: "getBrands",
          value: function getBrands() {
            this.brandsCollection = this.afs.collection('brands', function (q) {
              return q.orderBy("date_added", "asc").limit(4);
            });
            this.brand = this.brandsCollection.valueChanges();
            return this.brand;
          }
        }, {
          key: "getbyPromotion",
          value: function getbyPromotion(promo) {
            this.productCollection = this.afs.collection('product', function (q) {
              return q.where("display.position", "==", promo);
            });
            this.product = this.productCollection.valueChanges();
            return this.product;
          }
        }, {
          key: "getFirestoreData",
          value: function getFirestoreData() {
            var _this2 = this;

            this.items = new Array();
            this.productCollection = this.afs.collection('product');
            this.product = this.productCollection.valueChanges();
            /*
            * Product subscription for uploading
            */

            this.product.subscribe(function (observer) {
              observer.forEach(function (e) {
                _this2.items.push({
                  code: e.code,
                  name: e.name,
                  description: e.description,
                  brand: e.brand,
                  rating: e.rating,
                  category: e.category,
                  qty: e.qty,
                  deliveryDate: e.deliveryDate,
                  shipment: e.shipment,
                  policy: e.policy,
                  shippingFee: e.shippingFee,
                  deliveryFee: e.deliveryFee,
                  taxFee: e.taxFee,
                  about: e.about,
                  models: e.models,
                  caracteristic: e.caracteristic,
                  status: e.status,
                  availability: e.availability,
                  display: e.display
                });
              });
            });
            return this.items;
          }
        }, {
          key: "getProducts",
          value: function getProducts() {
            this.productCollection = this.afs.collection('product', function (q) {
              return q.orderBy('creation_date', 'desc');
            });
            this.product = this.productCollection.valueChanges();
            return this.product;
          }
        }, {
          key: "getHomeDesign",
          value: function getHomeDesign() {
            this.homeCollection = this.afs.collection('homepane', function (q) {
              return q.orderBy("range", "asc");
            });
            this.homeDesign = this.homeCollection.valueChanges();
            return this.homeDesign;
          }
        }, {
          key: "filterByCategory",
          value: function filterByCategory(category) {
            this.productCollection = this.afs.collection('product', function (q) {
              return q.where("category", "==", category).orderBy("creation_date", "desc");
            });
            this.product = this.productCollection.valueChanges();
            return this.product;
          }
        }, {
          key: "filterByBrand",
          value: function filterByBrand(category) {
            this.productCollection = this.afs.collection('product', function (q) {
              return q.where("brand", "==", category).orderBy("creation_date", "desc");
            });
            this.product = this.productCollection.valueChanges();
            return this.product;
          }
        }, {
          key: "filterBySearchQueries",
          value: function filterBySearchQueries(query) {
            this.productCollection = this.afs.collection('product', function (q) {
              return q.where("description", "==", query).orderBy("creation_date", "desc");
            });
            this.product = this.productCollection.valueChanges();
            return this.product;
          }
          /*  getOrderAsadmin(){
             this.items_ordered = new Array();
             this.ordersCollection = this.afs.collection('orders');
             this.orderData = this.ordersCollection.doc().collection("customer_order").valueChanges();
             this.orderData.subscribe(observer=>{
               
               observer.forEach(e => {
                
                 this.items_ordered.push({
                       orderId: e.orderId,
                       items: e.items,
                       date_order: e.date_order,
                       order_qty: e.order_qty,
                       amount: e.amount,
                       shipment: e.shipment
                 });
                 });
             });
             return this.items_ordered;
           } */

        }, {
          key: "getFirestoreOrder",
          value: function getFirestoreOrder() {
            var _this3 = this;

            this.ordersCollection = this.afs.collection('orders', function (q) {
              return q.where("customerId", "==", _this3.userId);
            });
            this.orderData = this.ordersCollection.valueChanges();
            return this.orderData;
          }
        }, {
          key: "getOrder",
          value: function getOrder(param) {
            this.ordersCollection = this.afs.collection('orders', function (q) {
              return q.where("customerId", "==", param);
            });
            this.orderData = this.ordersCollection.valueChanges();
            return this.orderData;
          }
        }, {
          key: "getUsers",
          value: function getUsers() {
            this.usersCollection = this.afs.collection('user');
            this.user = this.usersCollection.valueChanges();
            return this.user;
          }
        }, {
          key: "getMessage",
          value: function getMessage() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this4 = this;

              var boxOwner;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.afAuth.currentUser;

                    case 2:
                      boxOwner = _context.sent.uid;
                      this.msg = new Array();
                      this.msgCollection = this.afs.collection('message');
                      this.message = this.msgCollection.doc(boxOwner).collection('update').valueChanges();
                      this.message.subscribe(function (observer) {
                        observer.forEach(function (e) {
                          _this4.msg.push({
                            author: e.author,
                            destination: e.destination,
                            object: e.object,
                            content: e.content,
                            date_msg: e.date_msg
                          });
                        });
                      });
                      return _context.abrupt("return", this.msg);

                    case 8:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "removeProduct",
          value: function removeProduct(item) {
            this.productCollection = this.afs.collection('product', function (q) {
              return q.where("description", "==", item.description);
            });
            this.productCollection.get().toPromise().then(function (querySnapshot) {
              querySnapshot.forEach(function (dd) {
                dd.ref["delete"]();
              });
            });
          }
        }, {
          key: "editProduct",
          value: function editProduct(item) {
            this.productCollection = this.afs.collection('product', function (q) {
              return q.where("description", "==", item.description);
            });
            return this.productCollection.get().toPromise().then(function (querySnapshot) {
              querySnapshot.forEach(function (dd) {
                dd.ref.update(item);
              });
            });
          }
        }]);

        return FirestoreDataService;
      }();

      FirestoreDataService.ctorParameters = function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]
        }];
      };

      FirestoreDataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], FirestoreDataService);
      /***/
    },

    /***/
    "Xo8k":
    /*!***********************************!*\
      !*** ./src/app/cart/cart.page.ts ***!
      \***********************************/

    /*! exports provided: CartPage */

    /***/
    function Xo8k(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CartPage", function () {
        return CartPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_cart_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./cart.page.html */
      "ehlK");
      /* harmony import */


      var _cart_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./cart.page.scss */
      "SNM6");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");
      /* harmony import */


      var _firestore_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../firestore-data.service */
      "UbTl");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var CartPage = /*#__PURE__*/function () {
        function CartPage(toastconroller, router, fstoreService, storage) {
          _classCallCheck(this, CartPage);

          this.toastconroller = toastconroller;
          this.router = router;
          this.fstoreService = fstoreService;
          this.storage = storage;
          this.element = '';
          this.browsing = [];
          this.cart = [];
          this.saved = [];
          this.isOnline = false;
          this.orderQty = 0;
          this.totalcost = 0.00;
          this.getsavedforlater();
          this.getCartItems();
          this.getBrowsingHistoric();
        }

        _createClass(CartPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.noItem = false;
            this.nosaved = false;
          }
        }, {
          key: "checkForCartUpdate",
          value: function checkForCartUpdate() {
            var _this5 = this;

            var arr2 = this.fstoreService.getFirestoreData();
            var res1 = arr2.filter(function (item1) {
              return !_this5.cart.find(function (item2) {
                return item1.description === item2.description;
              });
            });
            console.log(res1);
            console.log(arr2);
          }
        }, {
          key: "getCartItems",
          value: function getCartItems() {
            var _this6 = this;

            this.totalcost = 0.00;
            this.storage.get("cart").then(function (data) {
              _this6.cart = data;
            })["catch"](function (err) {
              console.log("cart not found or empty");
            });
          }
        }, {
          key: "getsavedforlater",
          value: function getsavedforlater() {
            var _this7 = this;

            this.storage.get("savedforlater").then(function (data) {
              _this7.saved = data;
              _this7.nosaved = false;
            })["catch"](function (err) {
              console.log("saved not found or empty");
              _this7.nosaved = true;
            });
          }
        }, {
          key: "getBrowsingHistoric",
          value: function getBrowsingHistoric() {
            var _this8 = this;

            this.storage.get("browsing").then(function (historic) {
              if (historic.length !== 0 && historic !== null) {
                var _iterator = _createForOfIteratorHelper(_this8.fstoreService.getFirestoreData()),
                    _step;

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var product = _step.value;

                    var _iterator2 = _createForOfIteratorHelper(historic),
                        _step2;

                    try {
                      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                        var item = _step2.value;

                        if (product.name == item.name && product.description == item.description) {
                          _this8.browsing.push(product);
                        }
                      }
                    } catch (err) {
                      _iterator2.e(err);
                    } finally {
                      _iterator2.f();
                    }
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
              }
            })["catch"](function (err) {
              console.log("no browsing data found");
            });
            return this.browsing.reverse;
          }
        }, {
          key: "adjustqty",
          value: function adjustqty(pressed, item) {
            if (pressed === 'minus') {
              if (item.qty !== 1) {
                item.qty--;
              } else {}
            }

            if (pressed === 'plus') {
              item.qty++;
            }

            this.storage.set('cart', this.cart);
          }
        }, {
          key: "getTotal",
          value: function getTotal() {
            return this.cart.reduce(function (i, j) {
              return i + j.price * j.qty;
            }, 0);
          }
        }, {
          key: "savedForLater",
          value: function savedForLater(item) {
            var _this9 = this;

            var deleted = false;
            var tosaved;

            var _iterator3 = _createForOfIteratorHelper(this.cart),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var cartItem = _step3.value;

                if (cartItem === item) {
                  this.cart.splice(this.cart.indexOf(item), 1);
                  tosaved = cartItem;
                  deleted = true;
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            if (deleted) {
              var alreadySaved = false;
              this.storage.set("cart", this.cart);
              this.storage.get('savedforlater').then(function (saved) {
                if (saved == null || saved.length == 0) {
                  saved = [];
                  saved.push(tosaved);
                } else {
                  var _iterator4 = _createForOfIteratorHelper(saved),
                      _step4;

                  try {
                    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                      var saveItem = _step4.value;

                      if (saveItem == tosaved) {
                        saveItem.qty = tosaved.qty;
                        alreadySaved = true;
                      }
                    }
                  } catch (err) {
                    _iterator4.e(err);
                  } finally {
                    _iterator4.f();
                  }

                  if (!alreadySaved) {
                    saved.push(tosaved);
                  }
                }

                _this9.storage.set("savedforlater", saved);
              });
            }

            this.getsavedforlater();
          }
        }, {
          key: "remove",
          value: function remove(item) {
            var deleted = false;

            var _iterator5 = _createForOfIteratorHelper(this.cart),
                _step5;

            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var cartItem = _step5.value;

                if (cartItem === item) {
                  this.cart.splice(this.cart.indexOf(cartItem), 1);
                  deleted = true;
                }
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }

            if (deleted) {
              this.storage.set("cart", this.cart); //this.getCartItems();
            }
          }
        }, {
          key: "moveToCart",
          value: function moveToCart(item) {
            var move = false;

            var _iterator6 = _createForOfIteratorHelper(this.saved),
                _step6;

            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var saved = _step6.value;

                if (saved === item) {
                  this.saved.splice(this.saved.indexOf(item), 1);
                  this.cart.push(saved);
                  move = true;
                }
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }

            if (move) {
              this.storage.set("savedforlater", this.saved);
              this.storage.set("cart", this.cart); //this.getCartItems();
            }
          }
        }, {
          key: "crypto",
          value: function crypto() {
            var date = Date.now();
            var id = "CA" + Math.floor(Math.random() * 1000) + "-" + date;
            return id;
          }
        }, {
          key: "checkout",
          value: function checkout(cartItems) {
            var shipment = {};

            if (this.totalcost > 0.00) {
              shipment.goods_departure = 'Packaging with KATALOG team service';
              shipment.shipping_destination = '';
              shipment.status = 'Not shipped yet';
              shipment.carrier = '';
              shipment.trackingnumber = '';
              var prepareOrder = {
                customerId: 'code',
                orderId: this.crypto(),
                items: cartItems,
                date_order: new Date(Date.now()),
                order_qty: this.orderQty,
                amount: this.getTotal(),
                shipment: shipment
              };
              var navigationExtras = {
                state: {
                  order: prepareOrder
                }
              };
              this.router.navigate(['/place-order'], navigationExtras);
            }
          }
        }, {
          key: "goTo",
          value: function goTo(item) {
            this.item = {};
            var isfound = false;

            var _iterator7 = _createForOfIteratorHelper(this.fstoreService.getFirestoreData()),
                _step7;

            try {
              for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                var product = _step7.value;

                if (product.name == item.name && product.description == item.description) {
                  this.item = product;
                  isfound = true;
                }
              }
            } catch (err) {
              _iterator7.e(err);
            } finally {
              _iterator7.f();
            }

            if (isfound) {
              var navigationExtras = {
                state: {
                  product: item
                }
              };
              this.router.navigate(['/product'], navigationExtras);
            } else {
              this.rejection();
            }
          }
        }, {
          key: "checkQty",
          value: function checkQty(item) {
            var stockQty = 10;

            var _iterator8 = _createForOfIteratorHelper(this.fstoreService.getFirestoreData()),
                _step8;

            try {
              for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                var product = _step8.value;

                if (product.name == item.name && product.description == item.description) {
                  stockQty = product.qty;
                }
              }
            } catch (err) {
              _iterator8.e(err);
            } finally {
              _iterator8.f();
            }

            return stockQty;
          }
        }, {
          key: "rejection",
          value: function rejection() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var toast;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.toastconroller.create({
                        message: 'Sorry! product is no longer available',
                        duration: 3000
                      });

                    case 2:
                      toast = _context2.sent;
                      _context2.next = 5;
                      return toast.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "filter",
          value: function filter() {
            var _this10 = this;

            if (this.element !== '') {
              this.cart.filter(function (item) {
                return item.name.includes(_this10.element);
              });
            }
          }
        }]);

        return CartPage;
      }();

      CartPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _firestore_data_service__WEBPACK_IMPORTED_MODULE_6__["FirestoreDataService"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]
        }];
      };

      CartPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cart',
        template: _raw_loader_cart_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cart_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CartPage);
      /***/
    },

    /***/
    "cP+M":
    /*!*********************************************!*\
      !*** ./src/app/cart/cart-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: CartPageRoutingModule */

    /***/
    function cPM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CartPageRoutingModule", function () {
        return CartPageRoutingModule;
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


      var _cart_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./cart.page */
      "Xo8k");

      var routes = [{
        path: '',
        component: _cart_page__WEBPACK_IMPORTED_MODULE_3__["CartPage"]
      }];

      var CartPageRoutingModule = function CartPageRoutingModule() {
        _classCallCheck(this, CartPageRoutingModule);
      };

      CartPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CartPageRoutingModule);
      /***/
    },

    /***/
    "ehlK":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function ehlK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<app-page-header></app-page-header>\n\n<ion-content>\n  \n<ion-item class=\"mt-2\" lines=\"none\">\n  <ion-label>\n    <ion-buttons>\n      <ion-label style=\"font-weight: bold;\">Total items cost : </ion-label>\n     <ion-text color=\"primary\">\n      <h3  style=\"font-size:22px;\">{{  getTotal()|currency}}</h3>\n     </ion-text>\n      \n    </ion-buttons>\n  </ion-label>\n  \n  <button class=\"btn btn-warning btn-md \" (click)=\"checkout(cart)\" >Check out</button>\n</ion-item>\n<div class=\"alert alert-dark\"><h3><ion-icon name=\"cart\" size=\"large\"></ion-icon>Cart Items</h3>\n</div>\n<div class=\"container\">\n  <ion-list>\n    \n    <ng-container *ngFor=\"let items of cart\">\n\n      <ion-item ion-button detail=\"true\" >\n        <ion-img size=\"large\" (click)=\"goTo(items)\" [src]=\"items.picture\" style=\"width: 110px; height: 150px;\"></ion-img>\n     <ion-item-group>\n       <ion-item >\n        <ion-label>\n          <div>\n            <ion-buttons>\n              <ion-text>{{items.price|currency}}</ion-text>\n              <ion-badge color=\"danger\" *ngIf=\"checkQty(items)<10 && checkQty(items)>1\">Only {{checkQty(items)}} left</ion-badge>\n            </ion-buttons>\n              <h6  (click)=\"goTo(items)\">{{items.name}}</h6>\n            <ion-label><h6>{{items.description}}</h6></ion-label>\n            <ion-buttons>\n              <div class=\"qty-selector\">\n                <ion-button  fill=\"clear\" (click)=\"adjustqty('minus',items)\">-</ion-button>\n                <ion-label>{{items.qty}}</ion-label>\n                <ion-button fill=\"clear\" (click)=\"adjustqty('plus',items)\">+</ion-button>\n              </div>\n            </ion-buttons>\n          </div>\n          </ion-label>\n       </ion-item>   \n     </ion-item-group>\n     <div class=\"row\">\n      <button  class=\"mb-3 btn btn-primary btn-sm btn-block\" (click)=\"savedForLater(items)\">Save for later</button>\n      <button  class=\"btn btn-danger btn-sm btn-block\"  (click)=\"remove(items)\">Remove</button>\n    </div>\n    </ion-item>\n\n    </ng-container>\n   \n  </ion-list>\n</div>\n\n<div class=\"col-md-12 mt-3 border p-4\">\n  <h4>Related to your recent Browsing Items</h4>\n  <ng-container *ngIf=\"browsing.length!==0 && isOnline\">\n    <ion-slides style=\"margin-bottom:20px;\" [options]=\"{ slidesPerView: '3', zoom: false, grabCursor: true }\">\n      <ng-container *ngFor=\"let historic of browsing\">\n        <ion-slide style=\"margin: 20px\">\n          <ion-item-group>\n            <ion-img [src]=\"historic.models[0].pictures[0]\" style=\"max-height: 300px; max-width: 300px\"></ion-img>\n            <ion-row>\n              <ion-badge color=\"danger\">\n                <h5>{{historic.caracteristic[0].price|currency}}</h5>\n              </ion-badge>\n            </ion-row>\n          </ion-item-group>\n        </ion-slide>\n      </ng-container>\n        </ion-slides>\n  </ng-container>\n  <div class=\"alert alert-default\" *ngIf=\"browsing.length==0 && isOnline\">\n    <ion-button class=\"border\" expand=\"block\" fill=\"clear\">Browsing Historic empty, start shopping now!</ion-button>\n  </div>\n  <ion-chip color=\"danger\" *ngIf=\"!isOnline\">\n    <ion-icon size=\"large\" name=\"alert-circle\"></ion-icon>\n    <h4>No internet connection</h4>\n  </ion-chip>\n</div>\n\n<div class=\"alert alert-dark mt-2\"><h3>Save for later</h3>\n</div>\n <div class=\"container\">\n  <ion-list >\n    <ion-item ion-button detail=\"true\" *ngFor=\"let items of saved\" >\n        <ion-img size=\"large\" (click)=\"goTo(items)\"  [src]=\"items.picture\" style=\"width: 115px; height: 160px;\"></ion-img>\n     <ion-item-group>\n       <ion-item>\n        <ion-label>\n          <div>\n            <ion-buttons>\n              <ion-text>{{items.price|currency}}</ion-text>\n              <ion-badge color=\"danger\" *ngIf=\"checkQty(items)<10 && checkQty(items)>1\">Only {{checkQty(items)}} left</ion-badge>\n            </ion-buttons>\n              <h6>{{items.name}}</h6>\n            <ion-label><h6>{{items.description}}</h6></ion-label>\n          </div>\n          </ion-label>\n       </ion-item>\n          <ion-button size=\"small\" (click)=\"moveToCart(items)\">Move to Cart</ion-button>\n     </ion-item-group>\n    </ion-item>\n  </ion-list>\n</div> \n</ion-content>\n";
      /***/
    },

    /***/
    "v35Q":
    /*!*************************************!*\
      !*** ./src/app/cart/cart.module.ts ***!
      \*************************************/

    /*! exports provided: CartPageModule */

    /***/
    function v35Q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CartPageModule", function () {
        return CartPageModule;
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


      var _cart_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./cart-routing.module */
      "cP+M");
      /* harmony import */


      var _cart_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./cart.page */
      "Xo8k");
      /* harmony import */


      var _sharedviews_sharedviews_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../sharedviews/sharedviews.module */
      "l+lL");

      var CartPageModule = function CartPageModule() {
        _classCallCheck(this, CartPageModule);
      };

      CartPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _sharedviews_sharedviews_module__WEBPACK_IMPORTED_MODULE_7__["SharedviewsModule"], _cart_routing_module__WEBPACK_IMPORTED_MODULE_5__["CartPageRoutingModule"]],
        declarations: [_cart_page__WEBPACK_IMPORTED_MODULE_6__["CartPage"]]
      })], CartPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=cart-cart-module-es5.js.map