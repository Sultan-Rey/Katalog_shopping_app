(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-product-product-module"], {
    /***/
    "+FOW":
    /*!**************************************************!*\
      !*** ./src/app/products/product/product.page.ts ***!
      \**************************************************/

    /*! exports provided: ProductPage */

    /***/
    function FOW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductPage", function () {
        return ProductPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_product_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./product.page.html */
      "FZaj");
      /* harmony import */


      var _product_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./product.page.scss */
      "vX0C");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/fire/storage */
      "Vaw3");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/fire/auth */
      "UbJi");
      /* harmony import */


      var util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! util */
      "MCLT");
      /* harmony import */


      var util__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_8__);
      /* harmony import */


      var _firestore_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../firestore-data.service */
      "UbTl");
      /* harmony import */


      var _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @awesome-cordova-plugins/camera/ngx */
      "vaRf");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "I/3d");
      /* harmony import */


      var src_models_user__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/models/user */
      "Oj1a");

      var ProductPage = /*#__PURE__*/function () {
        function ProductPage(route, router, camera, afstore, afAuth, firestoreData, storage, angularefireSG) {
          _classCallCheck(this, ProductPage);

          this.route = route;
          this.router = router;
          this.camera = camera;
          this.afstore = afstore;
          this.afAuth = afAuth;
          this.firestoreData = firestoreData;
          this.storage = storage;
          this.angularefireSG = angularefireSG;
          this.review = '';
          this.dynamicPrice = 0;
          this.dynamicQty = 0;
          this.dynamicPictures = [];
          this.reviewPicture = '../../../assets/icon/addpic.png';
          this.initialColor = '';
          this.initialSize = '';
          this.orderQty = 1;
          this.searchQuery = '';
        }

        _createClass(ProductPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.data = {};
            this.data.models = [];
            this.router.url;
            var queryParams = new globalThis.URLSearchParams(this.router.url.split("?")[1]);
            var queryString = queryParams.get("productId");

            if (queryString !== null) {
              this.afstore.collection('product', function (q) {
                return q.where("code", "==", queryString);
              }).get().subscribe(function (item) {
                var snap = item.docs[0];
                var product = snap.data();
                _this.data = product;
                _this.similar$ = _this.firestoreData.filterByCategory(_this.data.category);
                _this.dynamicPrice = _this.data.caracteristic[0].price;
                _this.dynamicQty = _this.data.caracteristic[0].qty;
                _this.dynamicPictures = _this.data.models[0].pictures;
                _this.initialColor = _this.data.models[0].id;
                _this.initialSize = _this.data.size[0];

                _this.browsingHistoric(_this.data);

                console.log(_this.data);
              });
            }

            console.log(this.data.code);
            this.route.queryParams.subscribe(function (params) {
              if (_this.router.getCurrentNavigation().extras.state) {
                _this.data = _this.router.getCurrentNavigation().extras.state.product;
              }
            });
          }
        }, {
          key: "picturesLoading",
          value: function picturesLoading(color) {
            var _this2 = this;

            this.data.models.forEach(function (model) {
              if (model.id == color) {
                _this2.dynamicPictures = model.pictures;
              }
            });
          }
        }, {
          key: "priceLoading",
          value: function priceLoading(color, size) {
            var _this3 = this;

            this.data.caracteristic.forEach(function (c) {
              if (c.color == _this3.initialColor && c.size == _this3.initialSize) {
                _this3.dynamicPrice = c.price;
              }
            });
          }
        }, {
          key: "setColor",
          value: function setColor(selectedColor) {
            var _iterator = _createForOfIteratorHelper(this.data.models),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var model = _step.value;
                document.getElementById(model.id).style.borderRadius = "0";
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            this.initialColor = selectedColor;
            document.getElementById(selectedColor).style.borderRadius = "50%";
            this.priceLoading(this.initialColor, this.initialSize);
            this.picturesLoading(this.initialColor);
          }
        }, {
          key: "setSize",
          value: function setSize(selectedSize) {
            var _iterator2 = _createForOfIteratorHelper(this.data.size),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var size = _step2.value;
                document.getElementById(size).setAttribute('color', 'medium');
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            this.initialSize = selectedSize;
            document.getElementById(selectedSize).setAttribute('color', 'tertiary');
            this.priceLoading(this.initialColor, this.initialSize);
          }
        }, {
          key: "adjustqty",
          value: function adjustqty(pressed) {
            if (pressed === 'minus') {
              if (this.orderQty !== 1) {
                this.orderQty--;
              } else {}
            }

            if (pressed === 'plus') {
              this.orderQty++;
            }
          }
        }, {
          key: "addToCart",
          value: function addToCart(item) {
            var _this4 = this;

            var isAdded = false;
            this.storage.get("cart").then(function (data) {
              if (data === null || data.length === 0) {
                data = [];
                data.push(_this4.setItem(item));
              } else {
                var _iterator3 = _createForOfIteratorHelper(data),
                    _step3;

                try {
                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                    var _item = _step3.value;

                    if (_item.picture === _this4.dynamicPictures[0]) {
                      _item.qty = _this4.orderQty;
                      isAdded = true;
                    }
                  }
                } catch (err) {
                  _iterator3.e(err);
                } finally {
                  _iterator3.f();
                }

                if (!isAdded) {
                  data.push(_this4.setItem(item));
                }
              }

              _this4.storage.set("cart", data);

              _this4.router.navigate(['/cart']);
            });
          }
        }, {
          key: "setItem",
          value: function setItem(item_details) {
            this.details = {};
            this.details.name = item_details.name;
            this.details.brand = item_details.brand;
            this.details.description = item_details.description;
            this.details.category = item_details.category;
            this.details.qty = this.orderQty;
            this.details.size = this.initialSize;
            this.details.color = this.initialColor;
            this.details.shippingFee = item_details.shippingFee;
            this.details.deliveryFee = item_details.deliveryFee;
            this.details.taxFee = item_details.taxFee;
            this.details.deliveryDate = item_details.deliveryDate;
            this.details.picture = this.dynamicPictures[0];
            this.details.price = this.dynamicPrice;
            return this.details;
          }
        }, {
          key: "prepareOrder",
          value: function prepareOrder(item) {
            var shipment = {};
            shipment.goods_departure = item.shipment;
            shipment.shipping_destination = '';
            shipment.status = 'Not shipped yet';
            shipment.carrier = '';
            shipment.trackingnumber = '';
            var prepareOrder = {
              customerId: new Date(Date.now()) + "-" + "theUsername",
              orderId: this.crypto(),
              items: [this.setItem(item)],
              date_order: new Date(Date.now()),
              order_qty: this.orderQty,
              amount: this.orderQty * this.dynamicPrice,
              shipment: shipment
            };
            return prepareOrder;
          }
        }, {
          key: "crypto",
          value: function crypto() {
            var date = Date.now();
            var productname = this.data.name.substring(0, 2).toUpperCase();
            var _character = ['F', 'A', 'S', 'H', 'I', 'O', 'N', 'T', 'R', 'B', 'E', 'U', 'Y'];
            var sequence = Math.floor(Math.random() * 100);
            var index = Math.floor(Math.random() * 12);
            var encryption = _character[index] + _character[index + 1] + sequence + productname + "-" + date;
            return encryption;
          }
        }, {
          key: "willLoadImage",
          value: function willLoadImage() {
            this.getLiked();
            document.getElementById('loading').removeAttribute('hidden');
          }
        }, {
          key: "loadImage",
          value: function loadImage(image) {
            document.getElementById('loading').setAttribute('hidden', 'true');
          }
        }, {
          key: "errorLoad",
          value: function errorLoad() {
            this.imageRef.src = '<your_default_img>';
          }
        }, {
          key: "authorized",
          value: function authorized(args) {
            var _this5 = this;

            this.afAuth.authState.subscribe(function (auth) {
              if (auth.emailVerified) {
                var navigationExtras = {
                  state: {
                    order: _this5.prepareOrder(args)
                  }
                };

                _this5.router.navigate(['/place-order'], navigationExtras);
              } else {
                var _navigationExtras = {
                  state: {
                    order: _this5.prepareOrder(args)
                  }
                };

                _this5.router.navigate(['/login'], _navigationExtras);
              }
            });
          }
        }, {
          key: "search",
          value: function search() {
            if (this.searchQuery !== '' || this.searchQuery !== null) {
              var navigationExtras = {
                state: {
                  query: this.searchQuery
                }
              };
              this.router.navigate(['/searchquery'], navigationExtras);
            }
          }
        }, {
          key: "openLibrary",
          value: function openLibrary() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var options;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      options = {
                        quality: 100,
                        destinationType: this.camera.DestinationType.DATA_URL,
                        encodingType: this.camera.EncodingType.JPEG,
                        mediaType: this.camera.MediaType.PICTURE,
                        targetWidth: 1000,
                        targetHeight: 1000,
                        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
                      };
                      _context.next = 3;
                      return this.camera.getPicture(options);

                    case 3:
                      return _context.abrupt("return", _context.sent);

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "addPhoto",
          value: function addPhoto() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var libraryImage;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.openLibrary();

                    case 2:
                      libraryImage = _context2.sent;
                      this.reviewPicture = 'data:image/jpg;base64,' + libraryImage;

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "sendReviews",
          value: function sendReviews(text) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this6 = this;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.t0 = this.afstore.collection("user");
                      _context3.next = 3;
                      return this.afAuth.currentUser;

                    case 3:
                      _context3.t1 = _context3.sent.uid;

                      _context3.t0.doc.call(_context3.t0, _context3.t1).get().subscribe(function (user) {
                        _this6.user = new src_models_user__WEBPACK_IMPORTED_MODULE_12__["User"](user.data());

                        if (_this6.reviewPicture !== '' && _this6.reviewPicture !== null) {
                          var filePath = _this6.user.name + new Date(Date.now());

                          var imageRef = _this6.angularefireSG.ref(filePath);

                          _this6.ngFireUploadTask = imageRef.putString(_this6.reviewPicture, 'data_url');

                          _this6.ngFireUploadTask.then(function (snap) {
                            console.log(snap.downloadURL);
                            _this6.reviewing = {};
                            _this6.reviewing.customerName = _this6.user.name;
                            _this6.reviewing.productId = _this6.data.code;
                            _this6.reviewing.reviewImage = _this6.reviewPicture;
                            _this6.reviewing.reviewText = text;
                            _this6.reviewing.reviewDate = new Date(Date.now());
                          });
                        } else {
                          _this6.reviewing = {};
                          _this6.reviewing.customerName = _this6.user.name;
                          _this6.reviewing.productId = _this6.data.code;
                          _this6.reviewing.reviewImage = _this6.reviewPicture;
                          _this6.reviewing.reviewText = text;
                          _this6.reviewing.reviewDate = new Date(Date.now());
                        }

                        _this6.afstore.collection("review").add(_this6.reviewing);
                      });

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "prev",
          value: function prev(slides) {
            slides.slidePrev();
          }
        }, {
          key: "next",
          value: function next(slides) {
            slides.slideNext();
          }
          /*   loadImage(image:string) {
              if(this.color!=='' && this.sizing!=''){
                document.getElementById(this.color).style.border="4px dotted #5260ff";
                document.getElementById(this.sizing).style.border="4px dotted #5260ff";
              }
              
              
              this.image = image;
             
            }
            
            errorLoad() {
              this.imageRef.src = '<your_default_img>';
            }
          
            
          
            adjustqty(pressed: string) {
              if (pressed === 'minus') {
                if (this.orderQty !== 1) {
                  this.orderQty--;
                } else {
          
                }
              }
              if (pressed === 'plus') {
                this.orderQty++;
              }
            }
          
            crypto() {
              let date = Date.now();
              let productname = this.data.name.substring(0, 2).toUpperCase();
              let _character = ['F', 'A', 'S', 'H', 'I', 'O', 'N', 'T', 'R', 'B', 'E', 'U', 'Y'];
              let sequence: number = Math.floor(Math.random() * 100);
              let index: number = Math.floor(Math.random() * 12);
              let encryption: string = _character[index] + _character[index + 1] + sequence + productname + "-" + date;
              return encryption;
            }
          
            addToCart(item_details: Product) {
              let isAdded: boolean = false;
              item_details.features = [];
              item_details.features.push(this.selectedFeature);
              this.storage.get("cart").then((data: CartItem[]) => {
                if (data === null || data.length === 0) {
                  data = [];
                  data.push({
                    product: item_details,
                    item_qty: this.orderQty
                   
                  });
                } else {
                  for (let item of data) {
                    if (item.product.ref === item_details.ref) {
                      item.item_qty = this.orderQty;
                      
                      isAdded = true;
                    }
                  }
                  if (!isAdded) {
                    data.push({
                      product: item_details,
                      item_qty: this.orderQty,
                     
                    });
                  }
                }
                this.storage.set("cart", data);
                this.router.navigate(['/cart']);
              });
             
          
            }
          
            prepareOrder() {
              let myItem = {} as Product;
              let shipment = {} as Shipment;
              let method = {} as Paymethod;
              let products: Product[] = [];
              myItem = this.data;
              myItem.orderedqty = this.orderQty;
              myItem.ref = this.image;
              myItem.qty = this.orderQty;
              myItem.features = [];
              myItem.features.push(this.selectedFeature);
              shipment.goods_departure = myItem.shipment;
              method.method = "";
              products.push(myItem);
              let prepareOrder: Order = {
                orderId: this.crypto(),
                product: products,
                date_order: new Date(Date.now()),
                order_qty: this.orderQty,
                amount: this.orderQty * this.selectedFeature.price,
                shipment: shipment,
                payment: method
              }
              // console.log(prepareOrder);
              return prepareOrder;
            }
          
            authorized() {
          
               if (this.connected === true){
              const navigationExtras: NavigationExtras = {
                state: {
                  order: this.prepareOrder()
                }
              };
              this.router.navigate(['/place-order'], navigationExtras);
               }else{
               const navigationExtras: NavigationExtras = {
                 state: {
                   order: this.prepareOrder(),
                   returnway: '/place-order'
                 }
               };
               this.router.navigate(['/login'], navigationExtras);
                }
            } */

        }, {
          key: "browsingHistoric",
          value: function browsingHistoric(reference) {
            var _this7 = this;

            if (!Object(util__WEBPACK_IMPORTED_MODULE_8__["isNullOrUndefined"])(reference)) {
              var isAdded = false;
              this.storage.get("browsing").then(function (historic) {
                if (historic === null || historic.length === 0) {
                  historic = [];
                  historic.push(reference);
                } else {
                  var _iterator4 = _createForOfIteratorHelper(historic),
                      _step4;

                  try {
                    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                      var _string = _step4.value;

                      if (_string.description === reference.description) {
                        _string = reference;
                        isAdded = true;
                      }
                    }
                  } catch (err) {
                    _iterator4.e(err);
                  } finally {
                    _iterator4.f();
                  }

                  if (!isAdded) {
                    historic.push(reference);
                  }
                }

                _this7.storage.set("browsing", historic);
              });
            }
          }
        }, {
          key: "getLiked",
          value: function getLiked() {
            var _this8 = this;

            this.storage.get("likeItems").then(function (liked) {
              if (liked !== null || liked.length !== 0) {
                liked.forEach(function (element) {
                  if (element.models[0].pictures[0] == _this8.data.models[0].pictures[0]) {
                    document.getElementById('heart').setAttribute('color', 'danger');
                  }
                });
              }
            })["catch"](function (err) {
              console.log("no like items not found or empty");
            });
          }
        }, {
          key: "liked",
          value: function liked(reference) {
            var _this9 = this;

            var isAdded = false;
            this.storage.get("likeItems").then(function (liked) {
              if (liked === null || liked.length === 0) {
                liked = [];
                liked.push(reference);
              } else {
                var _iterator5 = _createForOfIteratorHelper(liked),
                    _step5;

                try {
                  for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                    var _string = _step5.value;

                    if (_string === reference) {
                      _string = reference;
                      isAdded = true;
                    }
                  }
                } catch (err) {
                  _iterator5.e(err);
                } finally {
                  _iterator5.f();
                }

                if (!isAdded) {
                  liked.push(reference);
                }
              }

              _this9.storage.set("likeItems", liked).then(function () {
                return document.getElementById('heart').setAttribute('color', 'danger');
              });
            });
          }
        }]);

        return ProductPage;
      }();

      ProductPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_10__["Camera"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__["AngularFirestore"]
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuth"]
        }, {
          type: _firestore_data_service__WEBPACK_IMPORTED_MODULE_9__["FirestoreDataService"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]
        }, {
          type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"]
        }];
      };

      ProductPage.propDecorators = {
        imageRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['image', {
            "static": false
          }]
        }]
      };
      ProductPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-product',
        template: _raw_loader_product_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_product_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ProductPage);
      /***/
    },

    /***/
    "0qyK":
    /*!************************************************************!*\
      !*** ./src/app/products/product/product-routing.module.ts ***!
      \************************************************************/

    /*! exports provided: ProductPageRoutingModule */

    /***/
    function qyK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductPageRoutingModule", function () {
        return ProductPageRoutingModule;
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


      var _product_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./product.page */
      "+FOW");

      var routes = [{
        path: '',
        component: _product_page__WEBPACK_IMPORTED_MODULE_3__["ProductPage"]
      }];

      var ProductPageRoutingModule = function ProductPageRoutingModule() {
        _classCallCheck(this, ProductPageRoutingModule);
      };

      ProductPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ProductPageRoutingModule);
      /***/
    },

    /***/
    "DCKC":
    /*!****************************************************!*\
      !*** ./src/app/products/product/product.module.ts ***!
      \****************************************************/

    /*! exports provided: ProductPageModule */

    /***/
    function DCKC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductPageModule", function () {
        return ProductPageModule;
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


      var _product_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./product-routing.module */
      "0qyK");
      /* harmony import */


      var ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-ionic-image-viewer */
      "gMqc");
      /* harmony import */


      var _product_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./product.page */
      "+FOW");
      /* harmony import */


      var src_app_sharedviews_sharedviews_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/sharedviews/sharedviews.module */
      "l+lL");

      var ProductPageModule = function ProductPageModule() {
        _classCallCheck(this, ProductPageModule);
      };

      ProductPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], src_app_sharedviews_sharedviews_module__WEBPACK_IMPORTED_MODULE_8__["SharedviewsModule"], _product_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductPageRoutingModule"], ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_6__["NgxIonicImageViewerModule"]],
        declarations: [_product_page__WEBPACK_IMPORTED_MODULE_7__["ProductPage"]]
      })], ProductPageModule);
      /***/
    },

    /***/
    "FZaj":
    /*!******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products/product/product.page.html ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function FZaj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-page-header></app-page-header>\n<ion-content>\n\n  <div class=\"container-fluid\">\n    <ion-progress-bar *ngIf=\"data.code==undefined\" type=\"indeterminate\"></ion-progress-bar>\n    <div class=\"row g-2\" *ngIf=\"data.code!==undefined\">\n\n      <div class=\"col-md-6 col-lg-4 bg-white\">\n        <div class=\"row\">\n          <div *ngIf=\"data\" class=\"col-lg-3 col-md-4 col-12\">\n            <ion-list>\n              <ion-thumbnail (click)=\"setColor(model.id)\"  [id]=\"model.id\" class=\"border mt-1\" *ngFor=\"let model of data.models\">\n                <ion-img  [src]=\"model.pictures[0]\"></ion-img>\n              </ion-thumbnail>\n            </ion-list>\n          </div>\n          <div class=\"col-lg-9 col-md-8 col-12\">\n            <ion-slides pager=\"true\" [options]=\"{ zoom: true, grabCursor: true }\" >\n              <ion-slide *ngFor=\"let model of dynamicPictures\">\n                <img #image id=\"image\" \n          ionImgViewer\n          title=\"Image View\"\n          text=\"Double tap for zoom\"\n          scheme=\"light\" [src]=\"model\" (ionImgWillLoad)=\"willLoadImage()\"  class=\"p-4\" (ionImgDidLoad)=\"loadImage(model)\" (ionError)=\"errorLoad()\" />\n              </ion-slide>\n              <ion-card id=\"loading\" hidden>\n                <ion-spinner   name=\"crescent\"></ion-spinner>\n              </ion-card>\n            </ion-slides>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-md-6 col-lg-5 p-4 bg-white\">\n        <div class=\"row\">\n          \n          <div class=\"col-md-10 col-lg-8\">\n            <h6>{{data.name}}</h6>\n          </div>\n          <div class=\"col-md-2 col-lg-4\"> \n            <ion-icon color=\"warning\" name=\"star\" *ngIf=\"data.rating>0\"></ion-icon>\n            <ion-icon color=\"warning\" name=\"star\" *ngIf=\"data.rating>1\"></ion-icon>\n            <ion-icon color=\"warning\" name=\"star\" *ngIf=\"data.rating>2\"></ion-icon>\n            <ion-icon color=\"warning\" name=\"star\" *ngIf=\"data.rating>3\"></ion-icon>\n            <ion-icon color=\"warning\" name=\"star\" *ngIf=\"data.rating>4\"></ion-icon>\n          </div>\n          <p>{{data.description}}</p>\n        </div>\n        <div class=\"row col-md-12 col-12 p-4 bg-white\" >\n            <h6><b>Size :</b></h6>\n          <ion-row >\n            <ion-slides [options]=\"{ slidesPerView: '3', zoom: false, grabCursor: true }\">\n              <ion-slide *ngFor=\"let size of data.size\">\n                <ion-button (click)=\"setSize(size)\" color=\"medium\" [id]=\"size\">{{size}}</ion-button></ion-slide>\n            </ion-slides>\n          </ion-row>\n        </div>\n        <div class=\"row\">\n          <ion-item>\n            <ion-label><b>About this item</b></ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-textarea readonly=\"true\" style=\"text-align: justify; font-size:14px; font-family: 'Times New Roman', Times, serif;\">\n              {{data.about}}\n            </ion-textarea>\n          </ion-item>\n        </div>\n      </div>\n\n      <div class=\"col-md-12 col-lg-3 col-12 border rounded p-4 bg-white\">\n        <ion-item lines=\"none\">\n          <ion-label slot=\"start\"><h2><b>{{dynamicPrice | currency}}</b></h2></ion-label>\n          <ion-item-group slot=\"end\">\n            <ion-label>\n              <div class=\"qty-selector\">\n                <ion-button  fill=\"clear\" (click)=\"adjustqty('minus')\">-</ion-button>\n                <ion-label>{{orderQty}}</ion-label>\n                <ion-button fill=\"clear\" (click)=\"adjustqty('plus')\">+</ion-button>\n              </div>\n              <ion-label *ngIf=\"dynamicQty<10 && dynamicQty>1\"><h6>Only {{dynamicQty}} left</h6></ion-label>\n            </ion-label>\n            <ion-label>\n    \n            </ion-label>\n          </ion-item-group>\n        </ion-item>\n            <ion-item-group>\n              <ion-item lines=\"none\">\n                <ion-item-group>\n                  <h6>get it by <b>{{data.deliveryDate | date}}</b></h6>\n                  <h6>Ship from {{data.shipment}}</h6>\n                  <p style=\"font-size: 14px\" class=\"text-muted\">Over 50$ buy, shipping fee are not considered for US customers</p>\n                  <small class=\"text-info\">\n                      <ion-text *ngIf=\"data.shippingFee== 0\">Free shipping,</ion-text>\n                      <ion-text *ngIf=\"data.deliveryFee== 0\">free delivery,</ion-text>\n                      <ion-text *ngIf=\"!data.policy\">but no return allowed</ion-text> \n                      <ion-text *ngIf=\"data.policy\">and free return</ion-text>\n                  </small>\n                </ion-item-group>\n              </ion-item>\n              <ion-item lines=\"none\"></ion-item>\n              <ion-button (click)=\"authorized(data)\" expand=\"block\"  color=\"tertiary\">Buy Now</ion-button>\n              <ion-button (click)=\"addToCart(data)\" expand=\"block\" color=\"warning\">Add To Cart</ion-button>\n            </ion-item-group>\n      </div>\n     \n    \n      <div *ngIf=\"similar$|async as _items\" class=\"col-md-12 col-12 col-lg-12 p-3 bg-white\">\n        <h2>You might considered those </h2>\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"1\">\n               <ion-img (click)=\"next(slides)\" src=\"../../../assets/icon/arrow-left.png\" style=\"\n               padding-top: 60%;\n               width: 40%;\"\n               ></ion-img>\n            </ion-col>\n            <ion-col size=\"10\">\n              <ion-slides #slides [options]=\"{ slidesPerView: '4', zoom: false, grabCursor: true }\">\n                <ion-slide *ngFor=\"let item of _items\" >\n                  <div>\n                    <ion-card-content  style=\"padding-bottom: 0;\"  >\n                      <ion-img style=\"box-sizing:border-box; width: 150px; height: 150px;\"  [src]=\"item.models[0].pictures[0]\"></ion-img>\n                    </ion-card-content>\n                    <ion-card-header>\n                      <ion-text color=\"dark\">\n                        <h6>{{item.description}}</h6>\n                        <h5 class=\"text-muted\">{{item.name}}</h5>\n                      </ion-text>\n                      <ion-card-title>\n                        <ion-item>\n                          <ion-label  color=\"dark\">\n                            {{item.caracteristic[0].price|currency}}\n                          </ion-label>\n                          <div style=\"text-align:center; max-width: 36px; max-height: 19.188px; overflow: hidden;\">\n                            <div class=\"circle\" *ngFor=\"let color of item.models\">\n                              <span class=\"dot\" *ngIf=\"color.id!==''\" [style.background]=\"color.id\"></span>\n                            </div>\n                          </div> \n                        </ion-item>\n                      </ion-card-title>\n                    </ion-card-header>\n                  </div>\n              </ion-slide>\n              </ion-slides>\n            </ion-col>\n            <ion-col size=\"1\">\n              <ion-img (click)=\"prev(slides)\" src=\"../../../assets/icon/arrow-right.png\" style=\"\n              padding-top: 60%;\n              width: 40%;\"></ion-img>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      \n      </div>\n    \n      <div class=\"col-md-12 col-lg-12 col-12 bg-white\">\n        <ng-container *ngIf=\"data.models.length>0\">\n          <ion-img *ngFor=\"let model of data.models\" [src]=\"model.pictures[0]\"></ion-img>\n        </ng-container>\n        </div>\n    \n      <div class=\"col-md-12 col-lg-7 col-12 p-2 bg-white\">\n        <h2>customers reviews </h2>\n          <ion-list>\n            <ion-item>\n              <ion-item-group>\n                <span>Customer name</span>&nbsp;\n                <small class=\"text-muted\">16, mar 2021 </small>\n                <ion-buttons>\n                  <ion-thumbnail>\n                    <ion-img src=\"https://via.placeholder.com/150/FF0000/FFFFFF?Text=Down.comC/O https://placeholder.com/\"></ion-img>\n                  </ion-thumbnail>\n                  <p>\n                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. \n                      Excepturi sit suscipit iure labore dolorem, doloru\n                  </p>\n                </ion-buttons>\n              </ion-item-group>\n            </ion-item>\n          </ion-list>\n\n          <div class=\"container border p-4\">\n            <ion-item>\n              <ion-thumbnail (click)=\"addPhoto()\">\n                <ion-img  [src]=\"reviewPicture\"></ion-img>\n              </ion-thumbnail>\n              <ion-input [(ngModel)]=\"review\" placeholder=\"write a review about this item\"></ion-input>\n              <ion-button (click)=\"sendReviews(review)\" size=\"icon-only\" fill=\"clear\">\n                <ion-icon name=\"send\" size=\"small\"></ion-icon>\n              </ion-button>\n            </ion-item>\n          </div>\n        </div>\n\n        <div class=\"col-md-12 col-lg-5 col-12\">\n          <table class=\"table table-bordered\">\n            <thead>\n              <tr>\n                <th scope=\"col\">#</th>\n                <th scope=\"col\">Summary Table</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <th scope=\"row\">Brand</th>\n                <td>{{data.brand}}</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">Name</th>\n                <td>{{data.name}}</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">Category</th>\n                <td>{{data.category}}</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">Description</th>\n                <td>{{data.description}}</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">Dimension</th>\n                <td>N/A</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">Weight</th>\n                <td>5.6 pounds</td>\n              </tr>\n\n            </tbody>\n          </table>\n        </div>\n\n    </div>\n\n\n\n  </div>\n\n \n\n</ion-content>\n";
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
            var _this10 = this;

            this.afAuth.authState.subscribe(function (auth) {
              if (!auth) {
                _this10.connected = false;
              } else {
                _this10.connected = true;
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
            var _this11 = this;

            this.items = new Array();
            this.productCollection = this.afs.collection('product');
            this.product = this.productCollection.valueChanges();
            /*
            * Product subscription for uploading
            */

            this.product.subscribe(function (observer) {
              observer.forEach(function (e) {
                _this11.items.push({
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
            var _this12 = this;

            this.ordersCollection = this.afs.collection('orders', function (q) {
              return q.where("customerId", "==", _this12.userId);
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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this13 = this;

              var boxOwner;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.afAuth.currentUser;

                    case 2:
                      boxOwner = _context4.sent.uid;
                      this.msg = new Array();
                      this.msgCollection = this.afs.collection('message');
                      this.message = this.msgCollection.doc(boxOwner).collection('update').valueChanges();
                      this.message.subscribe(function (observer) {
                        observer.forEach(function (e) {
                          _this13.msg.push({
                            author: e.author,
                            destination: e.destination,
                            object: e.object,
                            content: e.content,
                            date_msg: e.date_msg
                          });
                        });
                      });
                      return _context4.abrupt("return", this.msg);

                    case 8:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
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
    "vX0C":
    /*!****************************************************!*\
      !*** ./src/app/products/product/product.page.scss ***!
      \****************************************************/

    /*! exports provided: default */

    /***/
    function vX0C(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: #f1f3f4;\n}\n\nbg-white {\n  background: white;\n}\n\nion-label {\n  font-size: 12px;\n}\n\nh6 {\n  font-size: 13px;\n  margin-top: 10px;\n}\n\nion-card-header h6 {\n  font-size: 12px;\n  font-weight: bold;\n  font-family: \"Times New Roman\", Times, serif;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n\nion-card-header h5 {\n  font-size: 13px;\n  font-family: \"Times New Roman\", Times, serif;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n}\n\nsmall {\n  font-size: 12px;\n}\n\nion-slides ion-slide ion-img {\n  width: 50%;\n  height: 50%;\n}\n\nion-slides {\n  padding-bottom: 5px;\n}\n\n.shareicon {\n  float: right;\n  text-align: justify;\n  margin-right: 20px;\n}\n\n.hearticon {\n  float: left;\n  text-align: justify;\n  margin-left: 20px;\n}\n\n.count {\n  height: 100%;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  color: var(--ion-color-primary);\n}\n\n.qty-selector {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #f6f6f6;\n  border-radius: 5px;\n  margin-top: 10px;\n}\n\n.qty-selector ion-button {\n  --color: #565656;\n  font-size: 12px;\n  margin-left: 8px;\n  margin-right: 8px;\n}\n\n.qty-selector ion-label {\n  color: #565656 !important;\n  font-size: 12px;\n}\n\n.margin-left {\n  margin-left: 4px;\n}\n\n.margin-right {\n  margin-right: 4px;\n}\n\n.padding {\n  padding: 4px;\n}\n\n.padding-bottom {\n  padding-bottom: 5px;\n}\n\n.justify {\n  float: left;\n  text-align: justify;\n}\n\n.center {\n  margin-left: auto;\n  margin-right: auto;\n  padding: 10px;\n}\n\nion-spinner {\n  padding: 10px;\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n}\n\n.title {\n  width: 100%;\n  margin-top: 20px;\n  text-align: justify;\n  text-indent: 0%;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  font-style: 12px;\n  font-style: normal;\n  padding: 5px 5px 5px 5px;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n}\n\n.dot {\n  height: 10px;\n  width: 10px;\n  border-radius: 40%;\n  display: inline-block;\n  padding-left: 6px;\n  padding-right: 6px;\n}\n\n.circle {\n  display: inline-block;\n  margin-bottom: 20px;\n}\n\n.circle h5 {\n  font-size: 14px;\n  display: block;\n  text-align: center;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  letter-spacing: -1px;\n  text-indent: 0px;\n  padding: 0;\n  margin: 0;\n}\n\n/*  .image-slider ion-slide.swiper-slide {\n    right: 25%;\n}\n.thumb-img {\n   --size:large;\n   border-radius: 10px;\n} */\n\n.category-slider ion-slide {\n  width: 150px;\n  margin-right: 10px;\n  margin-left: 20px;\n  margin-bottom: 30px;\n}\n\n.category-slider ion-slide ion-col {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.category-slider ion-slide ion-col h4 {\n  color: #ffffff;\n  margin: 0;\n}\n\n.category-slider ion-slide ion-col img {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 8px;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  box-shadow: 0px 15px 20px 0px rgba(0, 0, 0, 0.16);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdC9wcm9kdWN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLHFCQUFBO0FBQUY7O0FBSUE7RUFDRSxpQkFBQTtBQURGOztBQUlBO0VBQ0UsZUFBQTtBQURGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBQUY7O0FBR0U7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw0Q0FBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0FBQUo7O0FBRUU7RUFDRSxlQUFBO0VBQ0EsNENBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtBQUFKOztBQUlBO0VBQ0UsZUFBQTtBQURGOztBQU1FO0VBQ0UsVUFBQTtFQUNBLFdBQUE7QUFISjs7QUFLRTtFQUFXLG1CQUFBO0FBRGI7O0FBRUU7RUFBVyxZQUFBO0VBQWEsbUJBQUE7RUFBcUIsa0JBQUE7QUFJL0M7O0FBSEU7RUFBVyxXQUFBO0VBQVksbUJBQUE7RUFBcUIsaUJBQUE7QUFTOUM7O0FBUEU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtBQVVKOztBQVBBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFVRjs7QUFSRTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFVTjs7QUFQRTtFQUNJLHlCQUFBO0VBQ0EsZUFBQTtBQVNOOztBQUxBO0VBQWEsZ0JBQUE7QUFTYjs7QUFSQTtFQUFjLGlCQUFBO0FBWWQ7O0FBWEE7RUFBUyxZQUFBO0FBZVQ7O0FBZEE7RUFBZ0IsbUJBQUE7QUFrQmhCOztBQWpCQTtFQUFTLFdBQUE7RUFBWSxtQkFBQTtBQXNCckI7O0FBckJDO0VBQVEsaUJBQUE7RUFBbUIsa0JBQUE7RUFBbUIsYUFBQTtBQTJCL0M7O0FBMUJDO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQW1CLGtCQUFBO0VBQ25CLGNBQUE7QUE4Qkg7O0FBM0JFO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esd0lBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtBQThCSjs7QUExQkU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBNkJKOztBQTNCRTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7QUE4Qko7O0FBNUJFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdEQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBK0JKOztBQTVCQzs7Ozs7O0dBQUE7O0FBU0M7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBNkJOOztBQTNCTTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQTZCVjs7QUEzQlU7RUFDSSxjQUFBO0VBQ0EsU0FBQTtBQTZCZDs7QUExQlU7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsaURBQUE7QUE0QmQiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0cy9wcm9kdWN0L3Byb2R1Y3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pb24tY29udGVudHtcbiAgLS1iYWNrZ3JvdW5kOiAjZjFmM2Y0O1xuICBcbn1cblxuYmctd2hpdGV7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG5pb24tbGFiZWx7XG4gIGZvbnQtc2l6ZToxMnB4O1xufVxuaDZ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbmlvbi1jYXJkLWhlYWRlcntcbiAgaDZ7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIH1cbiAgaDV7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiAxO1xuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7IFxuICB9XG4gIFxufVxuc21hbGx7XG4gIGZvbnQtc2l6ZToxMnB4O1xufVxuXG5cblxuICBpb24tc2xpZGVzIGlvbi1zbGlkZSBpb24taW1ne1xuICAgIHdpZHRoOiA1MCU7XG4gICAgaGVpZ2h0OiA1MCU7XG4gIH1cbiAgaW9uLXNsaWRlc3twYWRkaW5nLWJvdHRvbTogNXB4O31cbiAgLnNoYXJlaWNvbntmbG9hdDpyaWdodDsgdGV4dC1hbGlnbjoganVzdGlmeTsgbWFyZ2luLXJpZ2h0OiAyMHB4O31cbiAgLmhlYXJ0aWNvbntmbG9hdDpsZWZ0OyB0ZXh0LWFsaWduOiBqdXN0aWZ5OyBtYXJnaW4tbGVmdDogMjBweDt9XG5cbiAgLmNvdW50IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuLnF0eS1zZWxlY3RvciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZjZmNmY2O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG5cbiAgaW9uLWJ1dHRvbiB7XG4gICAgICAtLWNvbG9yOiAjNTY1NjU2O1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICB9XG5cbiAgaW9uLWxhYmVsIHtcbiAgICAgIGNvbG9yOiAjNTY1NjU2ICFpbXBvcnRhbnQ7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbn1cblxuLm1hcmdpbi1sZWZ0e21hcmdpbi1sZWZ0OiA0cHg7fVxuLm1hcmdpbi1yaWdodHttYXJnaW4tcmlnaHQ6IDRweDt9XG4ucGFkZGluZ3twYWRkaW5nOjRweDt9XG4ucGFkZGluZy1ib3R0b217cGFkZGluZy1ib3R0b206IDVweDt9XG4uanVzdGlmeXtmbG9hdDpsZWZ0OyB0ZXh0LWFsaWduOiBqdXN0aWZ5O31cbiAuY2VudGVye21hcmdpbi1sZWZ0OiBhdXRvOyBtYXJnaW4tcmlnaHQ6IGF1dG87cGFkZGluZzogMTBweDt9XG4gaW9uLXNwaW5uZXJ7XG4gICBwYWRkaW5nOiAxMHB4O1xuICAgbWFyZ2luLWxlZnQ6IGF1dG87IG1hcmdpbi1yaWdodDogYXV0bztcbiAgIGRpc3BsYXk6YmxvY2s7XG4gfVxuIFxuICAudGl0bGV7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIHRleHQtaW5kZW50OiAwJTtcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc3R5bGU6IDEycHg7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIHBhZGRpbmc6IDVweCA1cHggNXB4IDVweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIC13ZWJraXQtbGluZS1jbGFtcDogMztcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsOyBcbiAgfVxuXG4gIFxuICAuZG90e1xuICAgIGhlaWdodDogMTBweDtcbiAgICB3aWR0aDogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA0MCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmctbGVmdDogNnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDZweDtcbiAgfVxuICAuY2lyY2xle1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG4gIC5jaXJjbGUgaDV7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XG4gICAgdGV4dC1pbmRlbnQ6IDBweDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjowO1xuICB9XG5cbiAvKiAgLmltYWdlLXNsaWRlciBpb24tc2xpZGUuc3dpcGVyLXNsaWRlIHtcbiAgICByaWdodDogMjUlO1xufVxuLnRodW1iLWltZyB7XG4gICAtLXNpemU6bGFyZ2U7XG4gICBib3JkZXItcmFkaXVzOiAxMHB4O1xufSAqL1xuXG4uY2F0ZWdvcnktc2xpZGVyIHtcbiAgaW9uLXNsaWRlIHtcbiAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcblxuICAgICAgaW9uLWNvbCB7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgIGg0IHtcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxNXB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gICAgICAgICAgfVxuICAgICAgfVxuICB9XG59XG4iXX0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=products-product-product-module-es5.js.map