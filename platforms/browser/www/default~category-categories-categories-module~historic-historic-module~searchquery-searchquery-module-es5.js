(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~category-categories-categories-module~historic-historic-module~searchquery-searchquery-module"], {
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
            var _this5 = this;

            this.storage.get("browsing").then(function (historic) {
              if (historic.length !== 0 && historic !== null) {
                _this5.browsingItems = historic;
              }
            })["catch"](function (err) {
              console.log("no browsing data found");
            });
            return this.browsingItems;
          }
        }, {
          key: "getLiked",
          value: function getLiked() {
            var _this6 = this;

            this.storage.get("liked").then(function (liked) {
              if (liked !== null || liked.length !== 0) {
                _this6.itemsLikes = liked;
              }
            })["catch"](function (err) {
              console.log("no like items not found or empty");
            });
            return this.itemsLikes;
          }
        }, {
          key: "getCartItems",
          value: function getCartItems() {
            var _this7 = this;

            this.storage.get("cart").then(function (data) {
              _this7.cart = data;
            })["catch"](function (err) {
              console.log("cart not found or empty");
            });
            return this.cart;
          }
        }, {
          key: "getsavedforlater",
          value: function getsavedforlater() {
            var _this8 = this;

            this.storage.get("savedforlater").then(function (data) {
              _this8.savedForLater = data;
            })["catch"](function (err) {
              console.log("saved not found or empty");
            });
            return this.savedForLater;
          }
        }, {
          key: "addTocart",
          value: function addTocart(item_details) {
            var _this9 = this;

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

              _this9.storage.set("cart", data);
            });
          }
        }, {
          key: "addInWishList",
          value: function addInWishList(likeItem) {
            var _this10 = this;

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

              _this10.storage.set("liked", liked);
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
    }
  }]);
})();
//# sourceMappingURL=default~category-categories-categories-module~historic-historic-module~searchquery-searchquery-module-es5.js.map