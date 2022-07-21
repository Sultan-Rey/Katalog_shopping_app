(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["place-order-place-order-module"], {
    /***/
    "6N4C":
    /*!**************************************************************!*\
      !*** ./node_modules/typescript-collections/dist/lib/util.js ***!
      \**************************************************************/

    /*! no static exports found */

    /***/
    function N4C(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _hasOwnProperty = Object.prototype.hasOwnProperty;

      exports.has = function (obj, prop) {
        return _hasOwnProperty.call(obj, prop);
      };
      /**
       * Default function to compare element order.
       * @function
       */


      function defaultCompare(a, b) {
        if (a < b) {
          return -1;
        } else if (a === b) {
          return 0;
        } else {
          return 1;
        }
      }

      exports.defaultCompare = defaultCompare;
      /**
       * Default function to test equality.
       * @function
       */

      function defaultEquals(a, b) {
        return a === b;
      }

      exports.defaultEquals = defaultEquals;
      /**
       * Default function to convert an object to a string.
       * @function
       */

      function defaultToString(item) {
        if (item === null) {
          return 'COLLECTION_NULL';
        } else if (isUndefined(item)) {
          return 'COLLECTION_UNDEFINED';
        } else if (isString(item)) {
          return '$s' + item;
        } else {
          return '$o' + item.toString();
        }
      }

      exports.defaultToString = defaultToString;
      /**
       * Joins all the properies of the object using the provided join string
       */

      function makeString(item, join) {
        if (join === void 0) {
          join = ',';
        }

        if (item === null) {
          return 'COLLECTION_NULL';
        } else if (isUndefined(item)) {
          return 'COLLECTION_UNDEFINED';
        } else if (isString(item)) {
          return item.toString();
        } else {
          var toret = '{';
          var first = true;

          for (var prop in item) {
            if (exports.has(item, prop)) {
              if (first) {
                first = false;
              } else {
                toret = toret + join;
              }

              toret = toret + prop + ':' + item[prop];
            }
          }

          return toret + '}';
        }
      }

      exports.makeString = makeString;
      /**
       * Checks if the given argument is a function.
       * @function
       */

      function isFunction(func) {
        return typeof func === 'function';
      }

      exports.isFunction = isFunction;
      /**
       * Checks if the given argument is undefined.
       * @function
       */

      function isUndefined(obj) {
        return typeof obj === 'undefined';
      }

      exports.isUndefined = isUndefined;
      /**
       * Checks if the given argument is a string.
       * @function
       */

      function isString(obj) {
        return Object.prototype.toString.call(obj) === '[object String]';
      }

      exports.isString = isString;
      /**
       * Reverses a compare function.
       * @function
       */

      function reverseCompareFunction(compareFunction) {
        if (isUndefined(compareFunction) || !isFunction(compareFunction)) {
          return function (a, b) {
            if (a < b) {
              return 1;
            } else if (a === b) {
              return 0;
            } else {
              return -1;
            }
          };
        } else {
          return function (d, v) {
            return compareFunction(d, v) * -1;
          };
        }
      }

      exports.reverseCompareFunction = reverseCompareFunction;
      /**
       * Returns an equal function given a compare function.
       * @function
       */

      function compareToEquals(compareFunction) {
        return function (a, b) {
          return compareFunction(a, b) === 0;
        };
      }

      exports.compareToEquals = compareToEquals; //# sourceMappingURL=util.js.map

      /***/
    },

    /***/
    "MdCY":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/@google-pay/button-angular/__ivy_ngcc__/fesm2015/google-pay-button-angular.js ***!
      \****************************************************************************************************/

    /*! exports provided: GooglePayButtonComponent, GooglePayButtonModule */

    /***/
    function MdCY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GooglePayButtonComponent", function () {
        return GooglePayButtonComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GooglePayButtonModule", function () {
        return GooglePayButtonModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /**
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *      http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Keeps track scripts that have been requested by loadScript.
       */


      var cachedScripts = {};
      /**
       * Asynchronously loads a script keeping track of which scripts have already
       * requested and loaded.
       *
       * Multiple requests to the same resource will return the same promise.
       *
       * @param src Script URL to load
       */

      function loadScript(src) {
        var existing = cachedScripts[src];

        if (existing) {
          return existing;
        }

        var promise = new Promise(function (resolve, reject) {
          // Create script
          var script = document.createElement('script');
          script.src = src;
          script.async = true; // Script event listener callbacks for load and error

          var onScriptLoad = function onScriptLoad() {
            resolve();
          };

          var onScriptError = function onScriptError() {
            // eslint-disable-next-line @typescript-eslint/no-use-before-define
            cleanup(); // Remove from cachedScripts so that we can try loading again

            delete cachedScripts[src];
            script.remove();
            reject(new Error("Unable to load script ".concat(src)));
          };

          script.addEventListener('load', onScriptLoad);
          script.addEventListener('error', onScriptError); // Add script to document body

          document.body.appendChild(script); // Remove event listeners on cleanup

          function cleanup() {
            script.removeEventListener('load', onScriptLoad);
            script.removeEventListener('error', onScriptError);
          }
        });
        cachedScripts[src] = promise;
        return promise;
      }
      /**
       * Clears the script cache. Used for testing purposes only.
       */


      function clearScriptCache() {
        cachedScripts = {};
      }
      /**
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *      http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
          });
        }

        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }

          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }

          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }

          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      /**
       * Manages the lifecycle of the Google Pay button.
       *
       * Includes lifecycle management of the `PaymentsClient` instance,
       * `isReadyToPay`, `onClick`, `loadPaymentData`, and other callback methods.
       */


      var ButtonManager = /*#__PURE__*/function () {
        function ButtonManager(options) {
          var _this = this;

          _classCallCheck(this, ButtonManager);

          /**
           * Handles the click event of the Google Pay button.
           *
           * This method would normally be private but has been made public for
           * testing purposes.
           *
           * @private
           */
          this.handleClick = function (event) {
            return __awaiter(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var config, request, result;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      config = this.config;

                      if (config) {
                        _context.next = 3;
                        break;
                      }

                      throw new Error('google-pay-button: Missing configuration');

                    case 3:
                      request = this.createLoadPaymentDataRequest(config);
                      _context.prev = 4;

                      if (config.onClick) {
                        config.onClick(event);
                      }

                      if (!event.defaultPrevented) {
                        _context.next = 8;
                        break;
                      }

                      return _context.abrupt("return");

                    case 8:
                      _context.next = 10;
                      return this.client.loadPaymentData(request);

                    case 10:
                      result = _context.sent;

                      if (config.onLoadPaymentData) {
                        config.onLoadPaymentData(result);
                      }

                      _context.next = 17;
                      break;

                    case 14:
                      _context.prev = 14;
                      _context.t0 = _context["catch"](4);

                      if (_context.t0.statusCode === 'CANCELED') {
                        if (config.onCancel) {
                          config.onCancel(_context.t0);
                        }
                      } else if (config.onError) {
                        config.onError(_context.t0);
                      } else {
                        console.error(_context.t0);
                      }

                    case 17:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this, [[4, 14]]);
            }));
          };

          this.options = options;
        }

        _createClass(ButtonManager, [{
          key: "getElement",
          value: function getElement() {
            return this.element;
          }
        }, {
          key: "isGooglePayLoaded",
          value: function isGooglePayLoaded() {
            var _a, _b;

            return 'google' in (window || global) && !!((_b = (_a = google === null || google === void 0 ? void 0 : google.payments) === null || _a === void 0 ? void 0 : _a.api) === null || _b === void 0 ? void 0 : _b.PaymentsClient);
          }
        }, {
          key: "mount",
          value: function mount(element) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (this.isGooglePayLoaded()) {
                        _context2.next = 3;
                        break;
                      }

                      _context2.next = 3;
                      return loadScript('https://pay.google.com/gp/p/js/pay.js');

                    case 3:
                      this.element = element;

                      if (element) {
                        this.appendStyles();

                        if (this.config) {
                          this.updateElement();
                        }
                      }

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "unmount",
          value: function unmount() {
            this.element = undefined;
          }
        }, {
          key: "configure",
          value: function configure(newConfig) {
            var promise = undefined;
            this.config = newConfig;

            if (!this.oldInvalidationValues || this.isClientInvalidated(newConfig)) {
              promise = this.updateElement();
            }

            this.oldInvalidationValues = this.getInvalidationValues(newConfig);
            return promise !== null && promise !== void 0 ? promise : Promise.resolve();
          }
          /**
           * Creates client configuration options based on button configuration
           * options.
           *
           * This method would normally be private but has been made public for
           * testing purposes.
           *
           * @private
           */

        }, {
          key: "createClientOptions",
          value: function createClientOptions(config) {
            var clientConfig = {
              environment: config.environment,
              merchantInfo: this.createMerchantInfo(config)
            };

            if (config.onPaymentDataChanged || config.onPaymentAuthorized) {
              clientConfig.paymentDataCallbacks = {};

              if (config.onPaymentDataChanged) {
                // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
                clientConfig.paymentDataCallbacks.onPaymentDataChanged = function (paymentData) {
                  var result = config.onPaymentDataChanged(paymentData);
                  return result || {};
                };
              }

              if (config.onPaymentAuthorized) {
                // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
                clientConfig.paymentDataCallbacks.onPaymentAuthorized = function (paymentData) {
                  var result = config.onPaymentAuthorized(paymentData);
                  return result || {};
                };
              }
            }

            return clientConfig;
          }
        }, {
          key: "createIsReadyToPayRequest",
          value: function createIsReadyToPayRequest(config) {
            var paymentRequest = config.paymentRequest;
            var request = {
              apiVersion: paymentRequest.apiVersion,
              apiVersionMinor: paymentRequest.apiVersionMinor,
              allowedPaymentMethods: paymentRequest.allowedPaymentMethods,
              existingPaymentMethodRequired: config.existingPaymentMethodRequired
            };
            return request;
          }
          /**
           * Constructs `loadPaymentData` request object based on button configuration.
           *
           * It infers request properties like `shippingAddressRequired`,
           * `shippingOptionRequired`, and `billingAddressRequired` if not already set
           * based on the presence of their associated options and parameters. It also
           * infers `callbackIntents` based on the callback methods defined in button
           * configuration.
           *
           * This method would normally be private but has been made public for
           * testing purposes.
           *
           * @private
           */

        }, {
          key: "createLoadPaymentDataRequest",
          value: function createLoadPaymentDataRequest(config) {
            var request = Object.assign(Object.assign({}, config.paymentRequest), {
              merchantInfo: this.createMerchantInfo(config)
            }); // TODO: #13 re-enable inferrence if/when we agree as a team

            return request;
          }
        }, {
          key: "createMerchantInfo",
          value: function createMerchantInfo(config) {
            var merchantInfo = Object.assign({}, config.paymentRequest.merchantInfo); // apply softwareInfo if not set

            if (!merchantInfo.softwareInfo) {
              merchantInfo.softwareInfo = {
                id: this.options.softwareInfoId,
                version: this.options.softwareInfoVersion
              };
            }

            return merchantInfo;
          }
        }, {
          key: "isMounted",
          value: function isMounted() {
            return this.element != null && this.element.isConnected !== false;
          }
        }, {
          key: "removeButton",
          value: function removeButton() {
            if (this.element instanceof ShadowRoot || this.element instanceof Element) {
              for (var _i = 0, _Array$from = Array.from(this.element.children); _i < _Array$from.length; _i++) {
                var child = _Array$from[_i];

                if (child.tagName !== 'STYLE') {
                  child.remove();
                }
              }
            }
          }
        }, {
          key: "updateElement",
          value: function updateElement() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var element, buttonOptions, rootNode, button, showButton, readyToPay, readyToPayResponse;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      if (this.isMounted()) {
                        _context3.next = 2;
                        break;
                      }

                      return _context3.abrupt("return");

                    case 2:
                      element = this.getElement();

                      if (this.config) {
                        _context3.next = 5;
                        break;
                      }

                      throw new Error('google-pay-button: Missing configuration');

                    case 5:
                      // remove existing button
                      this.removeButton();
                      this.client = new google.payments.api.PaymentsClient(this.createClientOptions(this.config));
                      buttonOptions = {
                        buttonType: this.config.buttonType,
                        buttonColor: this.config.buttonColor,
                        buttonSizeMode: this.config.buttonSizeMode,
                        buttonLocale: this.config.buttonLocale,
                        onClick: this.handleClick,
                        allowedPaymentMethods: this.config.paymentRequest.allowedPaymentMethods
                      };
                      rootNode = element.getRootNode();

                      if (rootNode instanceof ShadowRoot) {
                        buttonOptions.buttonRootNode = rootNode;
                      } // pre-create button


                      button = this.client.createButton(buttonOptions);
                      this.setClassName(element, [element.className, 'not-ready']);
                      element.appendChild(button);
                      showButton = false;
                      _context3.prev = 14;
                      _context3.next = 17;
                      return this.client.isReadyToPay(this.createIsReadyToPayRequest(this.config));

                    case 17:
                      readyToPay = _context3.sent;
                      showButton = readyToPay.result && !this.config.existingPaymentMethodRequired || readyToPay.result && readyToPay.paymentMethodPresent && this.config.existingPaymentMethodRequired || false;
                      _context3.next = 24;
                      break;

                    case 21:
                      _context3.prev = 21;
                      _context3.t0 = _context3["catch"](14);

                      if (this.config.onError) {
                        this.config.onError(_context3.t0);
                      } else {
                        console.error(_context3.t0);
                      }

                    case 24:
                      if (this.isMounted()) {
                        _context3.next = 26;
                        break;
                      }

                      return _context3.abrupt("return");

                    case 26:
                      if (showButton) {
                        try {
                          this.client.prefetchPaymentData(this.createLoadPaymentDataRequest(this.config));
                        } catch (err) {
                          console.log('Error with prefetch', err);
                        } // remove hidden className


                        this.setClassName(element, (element.className || '').split(' ').filter(function (className) {
                          return className && className !== 'not-ready';
                        }));
                      }

                      if (this.isReadyToPay !== (readyToPay === null || readyToPay === void 0 ? void 0 : readyToPay.result) || this.paymentMethodPresent !== (readyToPay === null || readyToPay === void 0 ? void 0 : readyToPay.paymentMethodPresent)) {
                        this.isReadyToPay = !!(readyToPay === null || readyToPay === void 0 ? void 0 : readyToPay.result);
                        this.paymentMethodPresent = readyToPay === null || readyToPay === void 0 ? void 0 : readyToPay.paymentMethodPresent;

                        if (this.config.onReadyToPayChange) {
                          readyToPayResponse = {
                            isButtonVisible: showButton,
                            isReadyToPay: this.isReadyToPay
                          };

                          if (this.paymentMethodPresent) {
                            readyToPayResponse.paymentMethodPresent = this.paymentMethodPresent;
                          }

                          this.config.onReadyToPayChange(readyToPayResponse);
                        }
                      }

                    case 28:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this, [[14, 21]]);
            }));
          }
        }, {
          key: "setClassName",
          value: function setClassName(element, classNames) {
            var className = classNames.filter(function (name) {
              return name;
            }).join(' ');

            if (className) {
              element.className = className;
            } else {
              element.removeAttribute('class');
            }
          }
        }, {
          key: "appendStyles",
          value: function appendStyles() {
            var _a, _b, _c;

            if (typeof document === 'undefined') return;
            var rootNode = (_a = this.element) === null || _a === void 0 ? void 0 : _a.getRootNode();
            var styleId = "default-google-style-".concat(this.options.cssSelector.replace(/[^\w-]+/g, ''), "-").concat((_b = this.config) === null || _b === void 0 ? void 0 : _b.buttonLocale); // initialize styles if rendering on the client:

            if (rootNode) {
              if (!((_c = rootNode.getElementById) === null || _c === void 0 ? void 0 : _c.call(rootNode, styleId))) {
                var style = document.createElement('style');
                style.id = styleId;
                style.type = 'text/css';
                style.innerHTML = "\n          ".concat(this.options.cssSelector, " {\n            display: inline-block;\n          }\n          ").concat(this.options.cssSelector, ".not-ready {\n            width: 0;\n            height: 0;\n            overflow: hidden;\n          }\n        ");

                if (rootNode instanceof Document && rootNode.head) {
                  rootNode.head.appendChild(style);
                } else {
                  rootNode.appendChild(style);
                }
              }
            }
          }
        }, {
          key: "isClientInvalidated",
          value: function isClientInvalidated(newConfig) {
            var _this2 = this;

            if (!this.oldInvalidationValues) return true;
            var newValues = this.getInvalidationValues(newConfig);
            return newValues.some(function (value, index) {
              return value !== _this2.oldInvalidationValues[index];
            });
          }
        }, {
          key: "getInvalidationValues",
          value: function getInvalidationValues(config) {
            var _a, _b;

            return [config.environment, config.existingPaymentMethodRequired, !!config.onPaymentDataChanged, !!config.onPaymentAuthorized, config.buttonColor, config.buttonType, config.buttonLocale, config.buttonSizeMode, config.paymentRequest.merchantInfo.merchantId, config.paymentRequest.merchantInfo.merchantName, (_a = config.paymentRequest.merchantInfo.softwareInfo) === null || _a === void 0 ? void 0 : _a.id, (_b = config.paymentRequest.merchantInfo.softwareInfo) === null || _b === void 0 ? void 0 : _b.version, config.paymentRequest.allowedPaymentMethods];
          }
        }]);

        return ButtonManager;
      }();

      var name = "@google-pay/button-angular";
      var version = "3.0.0";
      var description = "Angular component for Google Pay button";
      var main = "dist/index.js";
      var repository = {
        type: "git",
        url: "https://github.com/google-pay/google-pay-button",
        directory: "src/button-angular"
      };
      var homepage = "https://github.com/google-pay/google-pay-button/tree/main/src/button-angular#readme";
      var engines = {
        node: ">=8.0.0"
      };
      var author = "socsieng@google.com";
      var license = "Apache-2.0";
      var scripts = {
        build: "ng build --configuration production"
      };
      var dependencies = {
        "@types/googlepay": "^0.6.3"
      };
      var peerDependencies = {
        "@angular/core": ">=8.0.0",
        "@types/googlepay": "^0.6.3"
      };
      var files = ["dist/*", "bundles/*", "ems2015/*", "fesm2015/*", "lib/*", "button-angular/*", "google-pay-button-angular.*", "*.d.ts", "*.json", "README.md"];
      var keywords = ["googlepay", "google-pay", "google-pay-button", "button", "angular"];
      var devDependencies = {
        "@angular-devkit/build-ng-packagr": "^0.1002.0",
        "@angular/core": "^10.2.2",
        "ng-packagr": "^10.1.2"
      };
      var _package = {
        name: name,
        version: version,
        description: description,
        main: main,
        repository: repository,
        homepage: homepage,
        engines: engines,
        author: author,
        license: license,
        scripts: scripts,
        dependencies: dependencies,
        peerDependencies: peerDependencies,
        files: files,
        keywords: keywords,
        devDependencies: devDependencies
      };
      /**
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *      http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Returns a new function that delays invocations to the original function
       * within a specified wait period. The last invocation within this time period
       * gets invoked. All earlier invocations are ignore.
       *
       * @param func The function to invoke.
       * @param wait The time in milliseconds to wait for idle invocations.
       */

      function debounce(func) {
        var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var timeout;
        return function () {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          window.clearTimeout(timeout);

          var later = function later() {
            timeout = undefined;
            return func.apply(void 0, args);
          };

          return new Promise(function (resolve) {
            timeout = window.setTimeout(function () {
              var result = later();
              resolve(result);
            }, wait);
          });
        };
      }
      /**
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *      http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var GooglePayButtonComponent = /*#__PURE__*/function () {
        function GooglePayButtonComponent(elementRef) {
          var _this3 = this;

          _classCallCheck(this, GooglePayButtonComponent);

          this.elementRef = elementRef;
          this.manager = new ButtonManager({
            cssSelector: 'google-pay-button',
            softwareInfoId: name,
            softwareInfoVersion: version
          });
          this.initializeButton = debounce(function () {
            if (!_this3.assertRequiredProperty('paymentRequest')) {
              return;
            }

            if (!_this3.assertRequiredProperty('environment')) {
              return;
            }

            var config = {
              paymentRequest: _this3.paymentRequest,
              environment: _this3.environment,
              existingPaymentMethodRequired: _this3.existingPaymentMethodRequired,
              onPaymentDataChanged: _this3.paymentDataChangedCallback,
              onPaymentAuthorized: _this3.paymentAuthorizedCallback,
              buttonColor: _this3.buttonColor,
              buttonType: _this3.buttonType,
              buttonSizeMode: _this3.buttonSizeMode,
              buttonLocale: _this3.buttonLocale,
              onReadyToPayChange: function onReadyToPayChange(result) {
                if (_this3.readyToPayChangeCallback) {
                  _this3.readyToPayChangeCallback(result);
                }

                _this3.dispatch('readytopaychange', result);
              },
              onCancel: function onCancel(reason) {
                if (_this3.cancelCallback) {
                  _this3.cancelCallback(reason);
                }

                _this3.dispatch('cancel', reason);
              },
              onError: function onError(error) {
                var _a;

                if (_this3.errorCallback) {
                  (_a = _this3.errorCallback) === null || _a === void 0 ? void 0 : _a.call(_this3, error);
                }

                _this3.elementRef.nativeElement.dispatchEvent(new ErrorEvent('error', {
                  error: error
                }));
              },
              onLoadPaymentData: function onLoadPaymentData(paymentData) {
                if (_this3.loadPaymentDataCallback) {
                  _this3.loadPaymentDataCallback(paymentData);
                }

                _this3.dispatch('loadpaymentdata', paymentData);
              },
              onClick: function onClick(event) {
                var _a;

                if (_this3.clickCallback) {
                  (_a = _this3.clickCallback) === null || _a === void 0 ? void 0 : _a.call(_this3, event);
                }
              }
            };

            _this3.manager.configure(config);
          });
        }

        _createClass(GooglePayButtonComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return this.manager.mount(this.elementRef.nativeElement);
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges() {
            return this.initializeButton();
          }
        }, {
          key: "assertRequiredProperty",
          value: function assertRequiredProperty(name) {
            var value = this[name];

            if (value === null || value === undefined) {
              this.throwError(Error("Required property not set: ".concat(name)));
              return false;
            }

            return true;
          }
          /**
           * Throws an error.
           *
           * Used for testing purposes so that the method can be spied on.
           */

        }, {
          key: "throwError",
          value: function throwError(error) {
            throw error;
          }
        }, {
          key: "dispatch",
          value: function dispatch(type, detail) {
            this.elementRef.nativeElement.dispatchEvent(new CustomEvent(type, {
              bubbles: true,
              cancelable: false,
              detail: detail
            }));
          }
        }, {
          key: "isReadyToPay",
          get: function get() {
            return this.manager.isReadyToPay;
          }
        }]);

        return GooglePayButtonComponent;
      }();

      GooglePayButtonComponent.ɵfac = function GooglePayButtonComponent_Factory(t) {
        return new (t || GooglePayButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      GooglePayButtonComponent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: GooglePayButtonComponent,
        selectors: [["google-pay-button"]],
        inputs: {
          paymentRequest: "paymentRequest",
          environment: "environment",
          existingPaymentMethodRequired: "existingPaymentMethodRequired",
          buttonColor: "buttonColor",
          buttonType: "buttonType",
          buttonSizeMode: "buttonSizeMode",
          buttonLocale: "buttonLocale",
          paymentDataChangedCallback: "paymentDataChangedCallback",
          paymentAuthorizedCallback: "paymentAuthorizedCallback",
          readyToPayChangeCallback: "readyToPayChangeCallback",
          loadPaymentDataCallback: "loadPaymentDataCallback",
          cancelCallback: "cancelCallback",
          errorCallback: "errorCallback",
          clickCallback: "clickCallback"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });

      GooglePayButtonComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      };

      GooglePayButtonComponent.propDecorators = {
        paymentRequest: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        environment: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        existingPaymentMethodRequired: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        buttonColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        buttonType: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        buttonSizeMode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        buttonLocale: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        paymentDataChangedCallback: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        paymentAuthorizedCallback: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        readyToPayChangeCallback: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        loadPaymentDataCallback: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cancelCallback: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        errorCallback: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        clickCallback: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GooglePayButtonComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'google-pay-button'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          paymentRequest: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          environment: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          existingPaymentMethodRequired: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          buttonColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          buttonType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          buttonSizeMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          buttonLocale: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          paymentDataChangedCallback: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          paymentAuthorizedCallback: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          readyToPayChangeCallback: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          loadPaymentDataCallback: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cancelCallback: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          errorCallback: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          clickCallback: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /**
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *      http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */


      var GooglePayButtonModule = function GooglePayButtonModule() {
        _classCallCheck(this, GooglePayButtonModule);
      };

      GooglePayButtonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: GooglePayButtonModule
      });
      GooglePayButtonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function GooglePayButtonModule_Factory(t) {
          return new (t || GooglePayButtonModule)();
        },
        imports: [[]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GooglePayButtonModule, {
          declarations: [GooglePayButtonComponent],
          exports: [GooglePayButtonComponent]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GooglePayButtonModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [GooglePayButtonComponent],
            imports: [],
            exports: [GooglePayButtonComponent]
          }]
        }], null, null);
      })();
      /**
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *      http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=google-pay-button-angular.js.map

      /***/

    },

    /***/
    "PttL":
    /*!***************************************************!*\
      !*** ./src/app/place-order/place-order.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function PttL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".icon {\n  width: 20px;\n  height: 28px;\n  border: none;\n  padding: 2px;\n}\n\n.width {\n  font-size: 26px;\n}\n\n.margin {\n  margin-left: 20px;\n  margin-bottom: 0;\n  margin-top: 0;\n}\n\n.icon {\n  color: #ffd050;\n  width: 11px;\n  padding: 0;\n}\n\n#qty {\n  display: inline;\n  float: right;\n  border: 1px solid #8c8c8c;\n  border-radius: 50%;\n  padding: 5px;\n  text-align: center;\n  background: #2c2c30;\n  color: cornsilk;\n  font-weight: bold;\n}\n\n#pay {\n  border-top: 2px solid #a3a1a1;\n  border-bottom: 4px unset #a3a1a1;\n  margin-bottom: 2px;\n}\n\n.margin.price h5, h4 {\n  display: inline;\n}\n\n.margin.price h5 {\n  font-weight: bold;\n}\n\n.margin.price h4 {\n  margin-left: 4px;\n  font-weight: bolder;\n  font-size: 22px;\n}\n\n.dot {\n  height: 15px;\n  width: 15px;\n  border-radius: 50%;\n  display: inline-block;\n  border: 1px solid #281d35;\n  padding-left: 6px;\n  padding-right: 6px;\n}\n\n#iDesc {\n  padding-top: 20px;\n  padding-right: 10px;\n  padding-left: 10px;\n  padding-bottom: 20px;\n  background-color: #46a546;\n}\n\n#iDesc ion-img {\n  width: 50%;\n}\n\nsection {\n  margin-top: 1em;\n  margin-bottom: 2.5em;\n}\n\nsection:not(.full-width),\n.full-width > header {\n  padding: 0 10px;\n}\n\n.count {\n  height: 100%;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  color: var(--ion-color-primary);\n}\n\n.qty-selector {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #f6f6f6;\n  border-radius: 5px;\n  margin-top: 10px;\n}\n\n.qty-selector ion-button {\n  --color: #565656;\n  font-size: 16px;\n  margin-left: 8px;\n  margin-right: 8px;\n}\n\n.qty-selector ion-label {\n  color: #565656 !important;\n  font-size: 16px;\n}\n\n.margin-right {\n  margin-right: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxhY2Utb3JkZXIvcGxhY2Utb3JkZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNDO0VBQ0csV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUFKOztBQUVFO0VBQ0UsZUFBQTtBQUNKOztBQUNFO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFFSjs7QUFBRTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQUdKOztBQURFO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFJSjs7QUFGRTtFQUNFLDZCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtBQUtKOztBQUhFO0VBQ0UsZUFBQTtBQU1KOztBQUpFO0VBQ0UsaUJBQUE7QUFPSjs7QUFMRTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBUUo7O0FBTkU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFTSjs7QUFMRTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7QUFRSjs7QUFORTtFQUNFLFVBQUE7QUFTSjs7QUFORTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtBQVNKOztBQU5FOztFQUVFLGVBQUE7QUFTSjs7QUFORTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0FBU0o7O0FBTkE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQVNGOztBQVBFO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQVNOOztBQU5FO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0FBUU47O0FBSkE7RUFBYyxpQkFBQTtBQVFkIiwiZmlsZSI6InNyYy9hcHAvcGxhY2Utb3JkZXIvcGxhY2Utb3JkZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gLmljb257XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyOHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nOjJweDtcbiAgfVxuICAud2lkdGh7XG4gICAgZm9udC1zaXplOiAyNnB4O1xuICB9XG4gIC5tYXJnaW57XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICB9XG4gIC5pY29ue1xuICAgIGNvbG9yOiByZ2IoMjU1LCAyMDgsIDgwKTtcbiAgICB3aWR0aDogMTFweDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG4gICNxdHl7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOGM4YzhjO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6IHJnYig0NCwgNDQsIDQ4KTtcbiAgICBjb2xvcjogY29ybnNpbGs7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgI3BheXtcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgI2EzYTFhMTtcbiAgICBib3JkZXItYm90dG9tOiA0cHggdW5zZXQgI2EzYTFhMTtcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gIH1cbiAgLm1hcmdpbi5wcmljZSBoNSxoNHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gIH1cbiAgLm1hcmdpbi5wcmljZSBoNXtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICAubWFyZ2luLnByaWNlIGg0e1xuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBmb250LXNpemU6MjJweDtcbiAgfVxuICAuZG90e1xuICAgIGhlaWdodDogMTVweDtcbiAgICB3aWR0aDogMTVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYig0MCwgMjksIDUzKTtcbiAgICBwYWRkaW5nLWxlZnQ6IDZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA2cHg7XG4gIH1cblxuXG4gICNpRGVzY3tcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzAsIDE2NSwgNzApO1xuICB9XG4gICNpRGVzYyBpb24taW1ne1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbiAgXG4gIHNlY3Rpb24ge1xuICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAyLjVlbTtcbiAgfVxuXG4gIHNlY3Rpb246bm90KC5mdWxsLXdpZHRoKSxcbiAgLmZ1bGwtd2lkdGggPiBoZWFkZXIge1xuICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgfVxuXG4gIC5jb3VudCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5xdHktc2VsZWN0b3Ige1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2Y2ZjZmNjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuXG4gIGlvbi1idXR0b24ge1xuICAgICAgLS1jb2xvcjogIzU2NTY1NjtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgfVxuXG4gIGlvbi1sYWJlbCB7XG4gICAgICBjb2xvcjogIzU2NTY1NiAhaW1wb3J0YW50O1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG59XG5cbi5tYXJnaW4tcmlnaHR7bWFyZ2luLXJpZ2h0OiA0cHg7fSJdfQ== */";
      /***/
    },

    /***/
    "j2mj":
    /*!*************************************************!*\
      !*** ./src/app/place-order/place-order.page.ts ***!
      \*************************************************/

    /*! exports provided: PlaceOrderPage */

    /***/
    function j2mj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PlaceOrderPage", function () {
        return PlaceOrderPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_place_order_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./place-order.page.html */
      "wOwq");
      /* harmony import */


      var _place_order_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./place-order.page.scss */
      "PttL");
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


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! util */
      "MCLT");
      /* harmony import */


      var util__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_8__);
      /* harmony import */


      var typescript_collections_dist_lib_util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! typescript-collections/dist/lib/util */
      "6N4C");
      /* harmony import */


      var typescript_collections_dist_lib_util__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(typescript_collections_dist_lib_util__WEBPACK_IMPORTED_MODULE_9__);
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "I/3d");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/fire/auth */
      "UbJi");

      var PlaceOrderPage = /*#__PURE__*/function () {
        function PlaceOrderPage(http, pickerCtrl, route, loadingcontroller, storage, alertcontroller, router, afirestore, fireAuth) {
          _classCallCheck(this, PlaceOrderPage);

          this.http = http;
          this.pickerCtrl = pickerCtrl;
          this.route = route;
          this.loadingcontroller = loadingcontroller;
          this.storage = storage;
          this.alertcontroller = alertcontroller;
          this.router = router;
          this.afirestore = afirestore;
          this.fireAuth = fireAuth;
          this.cost = btoa("600");
          this.id = btoa("12345");
          this.shippingAddress = '';
          this.selectAddress = '';
          this.productqty = 0;
          this.amountOrder = 0;
          this.shippingfee = 0;
          this.taxfee = 0;
          this.deliveryfee = 0;
          this.promotion = 0;
          this.totalfee = 0;
          this.products = [];
          this.defaultaddress = {};
          this.getAdresses();
        }

        _createClass(PlaceOrderPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            this.collapse = true;
            this.route.queryParams.subscribe(function (params) {
              if (_this4.router.getCurrentNavigation().extras.state) {
                _this4.data = _this4.router.getCurrentNavigation().extras.state.order;
              }
            });

            if (!Object(util__WEBPACK_IMPORTED_MODULE_8__["isNullOrUndefined"])(this.data)) {
              this.products = this.data.items;
              this.productqty = this.data.order_qty;
              this.amountOrder = this.data.amount;
              this.data.items.map(function (product) {
                _this4.shippingfee += product.shippingFee;
              });
              this.data.items.map(function (product) {
                _this4.deliveryfee += product.deliveryFee;
              });
              this.data.items.map(function (product) {
                _this4.taxfee += product.taxFee;
              });
              this.data.items.map(function (product) {
                _this4.deliverydate = _this4.calculateDeliveryDate(product.deliveryDate);
              });
              var handlingFee = this.shippingfee + this.taxfee;
              var chargeFee = this.taxfee + handlingFee;
              this.totalfee = chargeFee + this.amountOrder - this.promotion;
              console.log('Handling Fee : ' + handlingFee);
              console.log('Charge Fee : ' + chargeFee);
              console.log('total Fee : ' + this.totalfee);
            }

            this.paymentRequest = {
              apiVersion: 2,
              apiVersionMinor: 0,
              allowedPaymentMethods: [{
                type: 'CARD',
                parameters: {
                  allowedCardNetworks: ["MASTERCARD", "VISA"],
                  allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS']
                },
                tokenizationSpecification: {
                  type: 'PAYMENT_GATEWAY',
                  parameters: {
                    gateway: 'example',
                    gatewayMerchantId: 'gatewayMerchantId'
                  }
                }
              }],
              merchantInfo: {
                merchantId: 'BCR2DN4TVCSNNCTO',
                merchantName: 'FASHION STAR BEAUTY'
              },
              transactionInfo: {
                countryCode: 'US',
                currencyCode: 'USD',
                totalPriceLabel: 'TOTAL ALL TAXES INCLUDES',
                totalPriceStatus: 'FINAL',
                // set to cart total
                totalPrice: "10.45"
              },
              shippingAddressRequired: true,
              shippingAddressParameters: {
                allowedCountryCodes: ["US", "CA", "HT"],
                phoneNumberRequired: true
              }
            };
          }
        }, {
          key: "onLoadPaymentData",
          value: function onLoadPaymentData(event) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var paymentData, navigationExtras;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      paymentData = event.detail;
                      console.log(paymentData);
                      navigationExtras = {
                        state: {
                          order: this.data,
                          transaction: paymentData
                        }
                      };
                      this.router.navigateByUrl("confirm", navigationExtras);

                    case 4:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "shipaddressChange",
          value: function shipaddressChange() {
            this.collapse = !this.collapse;
          }
        }, {
          key: "getAdresses",
          value: function getAdresses() {
            var _this5 = this;

            this.storage.get("address").then(function (data) {
              _this5.addresses = data;

              var _iterator = _createForOfIteratorHelper(data),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var address = _step.value;

                  if (address["default"]) {
                    _this5.defaultaddress = address;
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              if (!Object(util__WEBPACK_IMPORTED_MODULE_8__["isNullOrUndefined"])(_this5.defaultaddress.address1) && Object(typescript_collections_dist_lib_util__WEBPACK_IMPORTED_MODULE_9__["isUndefined"])(_this5.defaultaddress.address2)) {
                _this5.shippingAddress = _this5.defaultaddress.address1;
              } else if (!Object(util__WEBPACK_IMPORTED_MODULE_8__["isNullOrUndefined"])(_this5.defaultaddress.address2) && Object(typescript_collections_dist_lib_util__WEBPACK_IMPORTED_MODULE_9__["isUndefined"])(_this5.defaultaddress.address1)) {
                _this5.shippingAddress = _this5.defaultaddress.address2;
              } else if (!Object(util__WEBPACK_IMPORTED_MODULE_8__["isNullOrUndefined"])(_this5.defaultaddress.address1) && !Object(util__WEBPACK_IMPORTED_MODULE_8__["isNullOrUndefined"])(_this5.defaultaddress.address2)) {
                _this5.shippingAddress = _this5.defaultaddress.address1;
              } else {
                _this5.shippingAddress = "No default address set yet";
              }
            })["catch"](function (err) {
              console.log("addresses not found or empty");
            });
          }
        }, {
          key: "setAsDefault",
          value: function setAsDefault(addressid) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this6 = this;

              var setagreed, alert;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      setagreed = false;
                      _context5.next = 3;
                      return this.alertcontroller.create({
                        cssClass: 'my-custom-class',
                        header: 'Alert',
                        subHeader: 'Shipping address change',
                        message: 'Set address as default.',
                        buttons: [{
                          text: 'OK',
                          cssClass: '',
                          handler: function handler(ok) {
                            _this6.setDefault(addressid);
                          }
                        }, {
                          text: 'Cancel',
                          cssClass: 'my-custom-class'
                        }]
                      });

                    case 3:
                      alert = _context5.sent;
                      _context5.next = 6;
                      return alert.present();

                    case 6:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "setDefault",
          value: function setDefault(address) {
            var _this7 = this;

            var set = false;
            this.storage.get("address").then(function (data) {
              var _iterator2 = _createForOfIteratorHelper(data),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var _item = _step2.value;

                  if (_item.id === address) {
                    _item["default"] = true;
                    set = true;
                  }
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }

              if (set) {
                var _iterator3 = _createForOfIteratorHelper(data),
                    _step3;

                try {
                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                    var item = _step3.value;

                    if (item.id !== address) {
                      item["default"] = false;
                    }
                  }
                } catch (err) {
                  _iterator3.e(err);
                } finally {
                  _iterator3.f();
                }

                _this7.setLoading(data);
              }
            })["catch"](function (err) {
              alert(err);
            });
          }
        }, {
          key: "setLoading",
          value: function setLoading(newaddress) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this8 = this;

              var loading;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.loadingcontroller.create({
                        cssClass: 'my-custom-class',
                        message: 'Please wait...',
                        duration: 2000
                      }).then(function (control) {
                        control.present();
                        control.onWillDismiss().then(function (load) {
                          _this8.addresses = newaddress;

                          _this8.storage.set("address", newaddress).then(function () {
                            _this8.getAdresses();
                          });
                        });
                      });

                    case 2:
                      loading = _context6.sent;

                    case 3:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "onSubmit",
          value: function onSubmit(postData) {
            var SERVER_URL = "https://sandbox.moncashbutton.digicelgroup.com/Moncash-middleware/Checkout/{UVdZeU0yMVlYMVpOUlhjOSBlbDlLUzBsU1kxbFpNVXQ0VUdSNU1UbFlRbXR0VVQwOQ==}";
            var formData = new FormData();
            formData.append("amount", btoa("600"));
            formData.append("orderId", btoa("123456"));
            console.log(formData);
            this.http.post(SERVER_URL, formData).subscribe(function (res) {
              return console.log(res);
            }, function (err) {
              return console.log(err);
            });
          }
        }, {
          key: "place_order",
          value: function place_order(items_cost) {
            var _this9 = this;

            var items_ordered = {};
            this.data.shipment.shipping_destination = this.shippingAddress;
            items_ordered = this.data;
            items_ordered.amount = items_cost;
            this.storage.get('user').then(function (userLogged) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this9, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
                var _this10 = this;

                return regeneratorRuntime.wrap(function _callee8$(_context8) {
                  while (1) {
                    switch (_context8.prev = _context8.next) {
                      case 0:
                        if (Object(util__WEBPACK_IMPORTED_MODULE_8__["isNullOrUndefined"])(userLogged)) {
                          _context8.next = 6;
                          break;
                        }

                        if (userLogged.connection) {
                          _context8.next = 4;
                          break;
                        }

                        _context8.next = 6;
                        break;

                      case 4:
                        _context8.next = 6;
                        return this.loadingcontroller.create({
                          cssClass: 'my-custom-class',
                          message: 'processing your order...',
                          duration: 2000
                        }).then(function (loaded) {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this10, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
                            var _this11 = this;

                            return regeneratorRuntime.wrap(function _callee7$(_context7) {
                              while (1) {
                                switch (_context7.prev = _context7.next) {
                                  case 0:
                                    loaded.present();
                                    _context7.t0 = this.afirestore.collection("orders");
                                    _context7.next = 4;
                                    return this.fireAuth.currentUser;

                                  case 4:
                                    _context7.t1 = _context7.sent.uid;

                                    _context7.t0.doc.call(_context7.t0, _context7.t1).collection("customer_order").doc(items_ordered.orderId).set(items_ordered).then(function () {
                                      loaded.dismiss();

                                      _this11.sendToConfirm(items_ordered);
                                    })["catch"](function (reason) {
                                      loaded.dismiss(reason, "failed");
                                    });

                                    loaded.onDidDismiss().then(function (obj) {
                                      if (obj.role == "failed") {
                                        _this11.msgOrderFailed();
                                      }
                                    });

                                  case 7:
                                  case "end":
                                    return _context7.stop();
                                }
                              }
                            }, _callee7, this);
                          }));
                        });

                      case 6:
                      case "end":
                        return _context8.stop();
                    }
                  }
                }, _callee8, this);
              }));
            });
          }
        }, {
          key: "msgOrderFailed",
          value: function msgOrderFailed() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var alert;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.next = 2;
                      return this.alertcontroller.create({
                        cssClass: 'my-custom-class',
                        header: 'Alert',
                        subHeader: 'Network Faillure',
                        message: 'Current order process failed.',
                        buttons: ['Ok']
                      });

                    case 2:
                      alert = _context9.sent;
                      _context9.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "calculateDeliveryDate",
          value: function calculateDeliveryDate(date) {
            var deadline = new Date(Date.now());

            if (new Date(date.seconds * 1000 + date.nanoseconds) >= deadline) {
              deadline = date;
            }

            return deadline;
          }
        }, {
          key: "sendToConfirm",
          value: function sendToConfirm(orderToconfirm) {
            var navigationExtras = {
              state: {
                order: orderToconfirm
              }
            };
            this.router.navigate(['/confirm'], navigationExtras);
          }
        }]);

        return PlaceOrderPage;
      }();

      PlaceOrderPage.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PickerController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__["AngularFirestore"]
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__["AngularFireAuth"]
        }];
      };

      PlaceOrderPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-place-order',
        template: _raw_loader_place_order_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_place_order_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], PlaceOrderPage);
      /***/
    },

    /***/
    "mDVw":
    /*!***************************************************!*\
      !*** ./src/app/place-order/place-order.module.ts ***!
      \***************************************************/

    /*! exports provided: PlaceOrderPageModule */

    /***/
    function mDVw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PlaceOrderPageModule", function () {
        return PlaceOrderPageModule;
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


      var _place_order_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./place-order-routing.module */
      "vZmM");
      /* harmony import */


      var _google_pay_button_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @google-pay/button-angular */
      "MdCY");
      /* harmony import */


      var _place_order_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./place-order.page */
      "j2mj");

      var PlaceOrderPageModule = function PlaceOrderPageModule() {
        _classCallCheck(this, PlaceOrderPageModule);
      };

      PlaceOrderPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _place_order_routing_module__WEBPACK_IMPORTED_MODULE_5__["PlaceOrderPageRoutingModule"], _google_pay_button_angular__WEBPACK_IMPORTED_MODULE_6__["GooglePayButtonModule"]],
        declarations: [_place_order_page__WEBPACK_IMPORTED_MODULE_7__["PlaceOrderPage"]]
      })], PlaceOrderPageModule);
      /***/
    },

    /***/
    "vZmM":
    /*!***********************************************************!*\
      !*** ./src/app/place-order/place-order-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: PlaceOrderPageRoutingModule */

    /***/
    function vZmM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PlaceOrderPageRoutingModule", function () {
        return PlaceOrderPageRoutingModule;
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


      var _place_order_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./place-order.page */
      "j2mj");

      var routes = [{
        path: '',
        component: _place_order_page__WEBPACK_IMPORTED_MODULE_3__["PlaceOrderPage"]
      }];

      var PlaceOrderPageRoutingModule = function PlaceOrderPageRoutingModule() {
        _classCallCheck(this, PlaceOrderPageRoutingModule);
      };

      PlaceOrderPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PlaceOrderPageRoutingModule);
      /***/
    },

    /***/
    "wOwq":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/place-order/place-order.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function wOwq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar style=\" --background: #031432;\">\n    <ion-buttons routerLink=\"/home\" routerDirection=\"back\">\n      <ion-title class=\"width\">\n        <ion-text size=\"LARGE\" color=\"warning\">\n          K</ion-text>\n        <ion-text color=\"danger\">\n          <ion-icon size=\"LARGE\" name=cart></ion-icon>\n        </ion-text>\n        <ion-text color=\"light\">TALOG</ion-text>\n      </ion-title>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<!-- -->\n\n<div class=\"container-fluid p-3\">\n\n  <div class=\"row g-4\">\n\n    <div class=\"col-lg-8 col-md-6 col-12\">\n     <div class=\"border\">\n      <div class=\"container\">\n        <ion-item>\n          <ion-buttons>\n            <ion-text color=\"primary\" style=\"font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; font-weight: bold;\">\n              <ion-label>Estimated delivery date : </ion-label>\n            </ion-text>&nbsp;\n            <ion-text style=\"font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; font-weight: bold;\">\n              <ion-label>{{deliverydate|date}}</ion-label></ion-text>\n          </ion-buttons>\n        </ion-item>\n        <fieldset>\n          <ion-list>\n            <ion-item *ngFor=\"let product of data.items\">\n                \n                  <ion-img [src]=\"product.picture\" class=\"p-2\" style=\"width: 150; height: 150px;\"></ion-img>\n               \n              <ion-label>\n                <ion-item-group>\n                  <h5>{{product.name}}</h5>\n                  <ion-label>{{product.description}}</ion-label>\n                    <ion-buttons >\n                      <span  *ngIf=\"product.color!==''&& product.color!==undefined\" class=\"dot\" [style.background]=\"product.color\"></span>\n                      &nbsp;|\n                      <h6 *ngIf=\"product.size!=='' && product.size!==undefined\"> {{product.size}}</h6>\n                    </ion-buttons>\n                  <ion-buttons>\n                    <ion-label>QTY : {{product.qty}}</ion-label>&nbsp;\n                    <ion-label><ion-icon name=\"pricetag\"></ion-icon><h5><b>{{product.price | currency}}</b></h5></ion-label>\n                  </ion-buttons>\n                </ion-item-group>\n              </ion-label>\n            </ion-item>\n        </ion-list>\n        </fieldset>\n        </div> \n     </div>\n     \n    </div>\n    <div class=\"col-lg-4 col-md-6 col-12\">\n      \n      <div class=\"border p-2\">\n        <legend><label>Payment Review</label></legend>\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"8\">Item Cost</ion-col>\n            <ion-col>{{amountOrder | currency}}</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"8\">Shipping Fee</ion-col>\n            <ion-col>{{shippingfee | currency}}</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"8\">Tax Fee</ion-col>\n            <ion-col>{{taxfee | currency}}</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"8\">Delivery</ion-col>\n            <ion-col>{{deliveryfee | currency}}</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"8\">Discount</ion-col>\n            <ion-col>{{promotion | currency}}</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"8\"><ion-label position=\"fixed\" color=\"danger\">TOTAL :</ion-label></ion-col>\n            <ion-col><ion-label style=\"font-weight: bold;\">{{ totalfee | currency}}</ion-label>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n     \n      <div id=\"place\" style=\"margin-left: 18%; margin-right: 18%;\">\n        <section>\n            <google-pay-button \n                environment=\"TEST\"\n                [paymentRequest]=\"paymentRequest\"\n                buttonSizeMode=\"FULL\"\n                (loadpaymentdata)=\"onLoadPaymentData($event)\"></google-pay-button>\n        </section>\n      </div>\n      <ion-select placeholder=\"Change payment method\">\n        <ion-select-option>Paypal</ion-select-option>\n      </ion-select>\n    </div>\n  </div>\n  </div>\n\n</div>\n\n\n  \n\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=place-order-place-order-module-es5.js.map