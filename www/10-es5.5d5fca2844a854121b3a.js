!function(){function e(e,n){var o;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(o=function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return t(e,n)}(e))||n&&e&&"number"==typeof e.length){o&&(e=o);var i=0,a=function(){};return{s:a,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,s=!0,c=!1;return{s:function(){o=e[Symbol.iterator]()},n:function(){var e=o.next();return s=e.done,e},e:function(e){c=!0,r=e},f:function(){try{s||null==o.return||o.return()}finally{if(c)throw r}}}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"6N4C":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.prototype.hasOwnProperty;function i(e){return"function"==typeof e}function a(e){return void 0===e}function r(e){return"[object String]"===Object.prototype.toString.call(e)}t.has=function(e,t){return o.call(e,t)},t.defaultCompare=function(e,t){return e<t?-1:e===t?0:1},t.defaultEquals=function(e,t){return e===t},t.defaultToString=function(e){return null===e?"COLLECTION_NULL":a(e)?"COLLECTION_UNDEFINED":r(e)?"$s"+e:"$o"+e.toString()},t.makeString=function(e,n){if(void 0===n&&(n=","),null===e)return"COLLECTION_NULL";if(a(e))return"COLLECTION_UNDEFINED";if(r(e))return e.toString();var o="{",i=!0;for(var s in e)t.has(e,s)&&(i?i=!1:o+=n,o=o+s+":"+e[s]);return o+"}"},t.isFunction=i,t.isUndefined=a,t.isString=r,t.reverseCompareFunction=function(e){return a(e)||!i(e)?function(e,t){return e<t?1:e===t?0:-1}:function(t,n){return-1*e(t,n)}},t.compareToEquals=function(e){return function(t,n){return 0===e(t,n)}}},mDVw:function(t,o,a){"use strict";a.r(o),a.d(o,"PlaceOrderPageModule",(function(){return S}));var r,s,c=a("ofXK"),l=a("3Pt+"),u=a("TEn/"),d=a("tyNb"),b=a("mrSG"),f=a("MCLT"),h=a("6N4C"),p=a("fXoL"),m=a("tk/3"),y=a("e8h1"),g=a("I/3d"),v=a("UbJi"),M={},C=function(e,t,n,o){return new(n||(n=Promise))((function(i,a){function r(e){try{c(o.next(e))}catch(t){a(t)}}function s(e){try{c(o.throw(e))}catch(t){a(t)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,s)}c((o=o.apply(e,t||[])).next())}))},N=function(){function e(t){var o=this;n(this,e),this.handleClick=function(e){return C(o,void 0,void 0,regeneratorRuntime.mark((function t(){var n,o,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=this.config){t.next=3;break}throw new Error("google-pay-button: Missing configuration");case 3:if(o=this.createLoadPaymentDataRequest(n),t.prev=4,n.onClick&&n.onClick(e),!e.defaultPrevented){t.next=7;break}return t.abrupt("return");case 7:return t.next=9,this.client.loadPaymentData(o);case 9:i=t.sent,n.onLoadPaymentData&&n.onLoadPaymentData(i),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(4),"CANCELED"===t.t0.statusCode?n.onCancel&&n.onCancel(t.t0):n.onError?n.onError(t.t0):console.error(t.t0);case 16:case"end":return t.stop()}}),t,this,[[4,13]])})))},this.options=t}return i(e,[{key:"getElement",value:function(){return this.element}},{key:"isGooglePayLoaded",value:function(){var e,t;return"google"in(window||global)&&!!(null===(t=null===(e=null===google||void 0===google?void 0:google.payments)||void 0===e?void 0:e.api)||void 0===t?void 0:t.PaymentsClient)}},{key:"mount",value:function(e){return C(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.t0=this.isGooglePayLoaded(),t.t0){t.next=4;break}return t.next=4,function(e){var t=M[e];if(t)return t;var n=new Promise((function(t,n){var o=document.createElement("script");o.src=e,o.async=!0;var i=function(){t()};o.addEventListener("load",i),o.addEventListener("error",(function t(){o.removeEventListener("load",i),o.removeEventListener("error",t),delete M[e],o.remove(),n(new Error("Unable to load script "+e))})),document.body.appendChild(o)}));return M[e]=n,n}("https://pay.google.com/gp/p/js/pay.js");case 4:this.element=e,e&&(this.appendStyles(),this.config&&this.updateElement());case 6:case"end":return t.stop()}}),t,this)})))}},{key:"unmount",value:function(){this.element=void 0}},{key:"configure",value:function(e){var t=void 0;return this.config=e,this.oldInvalidationValues&&!this.isClientInvalidated(e)||(t=this.updateElement()),this.oldInvalidationValues=this.getInvalidationValues(e),null!=t?t:Promise.resolve()}},{key:"createClientOptions",value:function(e){var t={environment:e.environment,merchantInfo:this.createMerchantInfo(e)};return(e.onPaymentDataChanged||e.onPaymentAuthorized)&&(t.paymentDataCallbacks={},e.onPaymentDataChanged&&(t.paymentDataCallbacks.onPaymentDataChanged=function(t){return e.onPaymentDataChanged(t)||{}}),e.onPaymentAuthorized&&(t.paymentDataCallbacks.onPaymentAuthorized=function(t){return e.onPaymentAuthorized(t)||{}})),t}},{key:"createIsReadyToPayRequest",value:function(e){var t=e.paymentRequest;return{apiVersion:t.apiVersion,apiVersionMinor:t.apiVersionMinor,allowedPaymentMethods:t.allowedPaymentMethods,existingPaymentMethodRequired:e.existingPaymentMethodRequired}}},{key:"createLoadPaymentDataRequest",value:function(e){return Object.assign(Object.assign({},e.paymentRequest),{merchantInfo:this.createMerchantInfo(e)})}},{key:"createMerchantInfo",value:function(e){var t=Object.assign({},e.paymentRequest.merchantInfo);return t.softwareInfo||(t.softwareInfo={id:this.options.softwareInfoId,version:this.options.softwareInfoVersion}),t}},{key:"isMounted",value:function(){return null!=this.element&&!1!==this.element.isConnected}},{key:"removeButton",value:function(){if(this.element instanceof ShadowRoot||this.element instanceof Element)for(var e=0,t=Array.from(this.element.children);e<t.length;e++){var n=t[e];"STYLE"!==n.tagName&&n.remove()}}},{key:"updateElement",value:function(){return C(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n,o,i,a,r,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.isMounted()){e.next=2;break}return e.abrupt("return");case 2:if(t=this.getElement(),this.config){e.next=5;break}throw new Error("google-pay-button: Missing configuration");case 5:return this.removeButton(),this.client=new google.payments.api.PaymentsClient(this.createClientOptions(this.config)),n={buttonType:this.config.buttonType,buttonColor:this.config.buttonColor,buttonSizeMode:this.config.buttonSizeMode,buttonLocale:this.config.buttonLocale,onClick:this.handleClick,allowedPaymentMethods:this.config.paymentRequest.allowedPaymentMethods},(o=t.getRootNode())instanceof ShadowRoot&&(n.buttonRootNode=o),i=this.client.createButton(n),this.setClassName(t,[t.className,"not-ready"]),t.appendChild(i),r=!1,e.prev=11,e.next=14,this.client.isReadyToPay(this.createIsReadyToPayRequest(this.config));case 14:a=e.sent,r=a.result&&!this.config.existingPaymentMethodRequired||a.result&&a.paymentMethodPresent&&this.config.existingPaymentMethodRequired||!1,e.next=21;break;case 18:e.prev=18,e.t0=e.catch(11),this.config.onError?this.config.onError(e.t0):console.error(e.t0);case 21:if(this.isMounted()){if(r){try{this.client.prefetchPaymentData(this.createLoadPaymentDataRequest(this.config))}catch(c){console.log("Error with prefetch",c)}this.setClassName(t,(t.className||"").split(" ").filter((function(e){return e&&"not-ready"!==e})))}this.isReadyToPay===(null==a?void 0:a.result)&&this.paymentMethodPresent===(null==a?void 0:a.paymentMethodPresent)||(this.isReadyToPay=!!(null==a?void 0:a.result),this.paymentMethodPresent=null==a?void 0:a.paymentMethodPresent,!this.config.onReadyToPayChange)||(s={isButtonVisible:r,isReadyToPay:this.isReadyToPay},this.paymentMethodPresent&&(s.paymentMethodPresent=this.paymentMethodPresent),this.config.onReadyToPayChange(s))}case 22:case"end":return e.stop()}}),e,this,[[11,18]])})))}},{key:"setClassName",value:function(e,t){var n=t.filter((function(e){return e})).join(" ");n?e.className=n:e.removeAttribute("class")}},{key:"appendStyles",value:function(){var e,t,n;if("undefined"!=typeof document){var o=null===(e=this.element)||void 0===e?void 0:e.getRootNode(),i="default-google-style-".concat(this.options.cssSelector.replace(/[^\w-]+/g,""),"-").concat(null===(t=this.config)||void 0===t?void 0:t.buttonLocale);if(o&&!(null===(n=o.getElementById)||void 0===n?void 0:n.call(o,i))){var a=document.createElement("style");a.id=i,a.type="text/css",a.innerHTML="\n          ".concat(this.options.cssSelector," {\n            display: inline-block;\n          }\n          ").concat(this.options.cssSelector,".not-ready {\n            width: 0;\n            height: 0;\n            overflow: hidden;\n          }\n        "),o instanceof Document&&o.head?o.head.appendChild(a):o.appendChild(a)}}}},{key:"isClientInvalidated",value:function(e){var t=this;return!this.oldInvalidationValues||this.getInvalidationValues(e).some((function(e,n){return e!==t.oldInvalidationValues[n]}))}},{key:"getInvalidationValues",value:function(e){var t,n;return[e.environment,e.existingPaymentMethodRequired,!!e.onPaymentDataChanged,!!e.onPaymentAuthorized,e.buttonColor,e.buttonType,e.buttonLocale,e.buttonSizeMode,e.paymentRequest.merchantInfo.merchantId,e.paymentRequest.merchantInfo.merchantName,null===(t=e.paymentRequest.merchantInfo.softwareInfo)||void 0===t?void 0:t.id,null===(n=e.paymentRequest.merchantInfo.softwareInfo)||void 0===n?void 0:n.version,e.paymentRequest.allowedPaymentMethods]}}]),e}(),w=((s=function(){function e(t){var o=this;n(this,e),this.elementRef=t,this.manager=new N({cssSelector:"google-pay-button",softwareInfoId:"@google-pay/button-angular",softwareInfoVersion:"3.0.0"}),this.initializeButton=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return function(){for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return window.clearTimeout(t),new Promise((function(o){t=window.setTimeout((function(){var n=(t=void 0,e.apply(void 0,i));o(n)}),n)}))}}((function(){o.assertRequiredProperty("paymentRequest")&&o.assertRequiredProperty("environment")&&o.manager.configure({paymentRequest:o.paymentRequest,environment:o.environment,existingPaymentMethodRequired:o.existingPaymentMethodRequired,onPaymentDataChanged:o.paymentDataChangedCallback,onPaymentAuthorized:o.paymentAuthorizedCallback,buttonColor:o.buttonColor,buttonType:o.buttonType,buttonSizeMode:o.buttonSizeMode,buttonLocale:o.buttonLocale,onReadyToPayChange:function(e){o.readyToPayChangeCallback&&o.readyToPayChangeCallback(e),o.dispatch("readytopaychange",e)},onCancel:function(e){o.cancelCallback&&o.cancelCallback(e),o.dispatch("cancel",e)},onError:function(e){var t;o.errorCallback&&(null===(t=o.errorCallback)||void 0===t||t.call(o,e)),o.elementRef.nativeElement.dispatchEvent(new ErrorEvent("error",{error:e}))},onLoadPaymentData:function(e){o.loadPaymentDataCallback&&o.loadPaymentDataCallback(e),o.dispatch("loadpaymentdata",e)},onClick:function(e){var t;o.clickCallback&&(null===(t=o.clickCallback)||void 0===t||t.call(o,e))}})}))}return i(e,[{key:"ngOnInit",value:function(){return this.manager.mount(this.elementRef.nativeElement)}},{key:"ngOnChanges",value:function(){return this.initializeButton()}},{key:"assertRequiredProperty",value:function(e){return null!=this[e]||(this.throwError(Error("Required property not set: "+e)),!1)}},{key:"throwError",value:function(e){throw e}},{key:"dispatch",value:function(e,t){this.elementRef.nativeElement.dispatchEvent(new CustomEvent(e,{bubbles:!0,cancelable:!1,detail:t}))}},{key:"isReadyToPay",get:function(){return this.manager.isReadyToPay}}]),e}()).\u0275fac=function(e){return new(e||s)(p.Ib(p.l))},s.\u0275dir=p.Db({type:s,selectors:[["google-pay-button"]],inputs:{paymentRequest:"paymentRequest",environment:"environment",existingPaymentMethodRequired:"existingPaymentMethodRequired",buttonColor:"buttonColor",buttonType:"buttonType",buttonSizeMode:"buttonSizeMode",buttonLocale:"buttonLocale",paymentDataChangedCallback:"paymentDataChangedCallback",paymentAuthorizedCallback:"paymentAuthorizedCallback",readyToPayChangeCallback:"readyToPayChangeCallback",loadPaymentDataCallback:"loadPaymentDataCallback",cancelCallback:"cancelCallback",errorCallback:"errorCallback",clickCallback:"clickCallback"},features:[p.wb]}),s),k=((r=function e(){n(this,e)}).\u0275mod=p.Gb({type:r}),r.\u0275inj=p.Fb({factory:function(e){return new(e||r)},imports:[[]]}),r);function P(e,t){if(1&e){var n=p.Ob();p.Nb(0,"ion-radio-group"),p.Nb(1,"ion-item"),p.Nb(2,"ion-button",26),p.Vb("click",(function(){p.ic(n);var e=p.Xb().$implicit;return p.Xb(2).setAsDefault(e.id)})),p.Jb(3,"input",27),p.Mb(),p.Nb(4,"ion-label"),p.Nb(5,"address"),p.Nb(6,"h6"),p.pc(7),p.Mb(),p.Nb(8,"p"),p.pc(9),p.Mb(),p.Nb(10,"h6"),p.pc(11),p.Mb(),p.Nb(12,"h6"),p.pc(13),p.Mb(),p.Nb(14,"h6"),p.pc(15),p.Mb(),p.Nb(16,"h6"),p.pc(17),p.Mb(),p.Mb(),p.Mb(),p.Mb(),p.Mb()}if(2&e){var o=p.Xb().$implicit;p.yb(3),p.cc("checked",o.default),p.yb(4),p.qc(o.name),p.yb(2),p.qc(o.phone),p.yb(2),p.sc("",o.zipcode,"-",o.state,""),p.yb(2),p.qc(o.city),p.yb(2),p.qc(o.address1),p.yb(2),p.qc(o.address2)}}function x(e,t){if(1&e&&(p.Lb(0),p.nc(1,P,18,8,"ion-radio-group",14),p.Kb()),2&e){var n=t.$implicit,o=p.Xb(2);p.yb(1),p.cc("ngIf",n!==o.shippingAddress)}}function O(e,t){if(1&e&&(p.Nb(0,"div"),p.Nb(1,"ion-list"),p.nc(2,x,2,1,"ng-container",18),p.Mb(),p.Mb()),2&e){var n=p.Xb();p.yb(2),p.cc("ngForOf",n.addresses)}}function R(e,t){if(1&e&&p.Jb(0,"span",31),2&e){var n=p.Xb().$implicit;p.mc("background",n.color)}}function I(e,t){if(1&e&&(p.Nb(0,"h6"),p.pc(1),p.Mb()),2&e){var n=p.Xb().$implicit;p.yb(1),p.rc(" ",n.size,"")}}function q(e,t){if(1&e&&(p.Nb(0,"ion-item"),p.Nb(1,"ion-thumbnail",1),p.Jb(2,"ion-img",28),p.Mb(),p.Nb(3,"ion-label"),p.Nb(4,"ion-item-group"),p.Nb(5,"h5"),p.pc(6),p.Mb(),p.Nb(7,"ion-label"),p.pc(8),p.Mb(),p.Nb(9,"ion-buttons"),p.nc(10,R,1,2,"span",29),p.pc(11," \xa0| "),p.nc(12,I,2,1,"h6",14),p.Mb(),p.Nb(13,"ion-buttons"),p.Nb(14,"ion-label"),p.pc(15),p.Mb(),p.pc(16,"\xa0 "),p.Nb(17,"ion-label"),p.Jb(18,"ion-icon",30),p.Nb(19,"h5"),p.Nb(20,"b"),p.pc(21),p.Yb(22,"currency"),p.Mb(),p.Mb(),p.Mb(),p.Mb(),p.Mb(),p.Mb(),p.Mb()),2&e){var n=t.$implicit;p.yb(2),p.cc("src",n.picture),p.yb(4),p.qc(n.name),p.yb(2),p.qc(n.description),p.yb(2),p.cc("ngIf",""!==n.color&&void 0!==n.color),p.yb(2),p.cc("ngIf",""!==n.size&&void 0!==n.size),p.yb(3),p.rc("QTY : ",n.qty,""),p.yb(6),p.qc(p.Zb(22,7,n.price))}}var A,D,E,L=[{path:"",component:(A=function(){function t(e,o,i,a,r,s,c,l,u){n(this,t),this.http=e,this.pickerCtrl=o,this.route=i,this.loadingcontroller=a,this.storage=r,this.alertcontroller=s,this.router=c,this.afirestore=l,this.fireAuth=u,this.cost=btoa("600"),this.id=btoa("12345"),this.shippingAddress="",this.selectAddress="",this.productqty=0,this.amountOrder=0,this.shippingfee=0,this.taxfee=0,this.deliveryfee=0,this.promotion=0,this.totalfee=0,this.products=[],this.defaultaddress={},this.getAdresses()}return i(t,[{key:"ngOnInit",value:function(){var e=this;this.collapse=!0,this.route.queryParams.subscribe((function(t){e.router.getCurrentNavigation().extras.state&&(e.data=e.router.getCurrentNavigation().extras.state.order)})),Object(f.isNullOrUndefined)(this.data)||(this.products=this.data.items,this.productqty=this.data.order_qty,this.amountOrder=this.data.amount,this.data.items.map((function(t){e.shippingfee+=t.shippingFee})),this.data.items.map((function(t){e.deliveryfee+=t.deliveryFee})),this.data.items.map((function(t){e.taxfee+=t.taxFee})),this.data.items.map((function(t){e.deliverydate=e.calculateDeliveryDate(t.deliveryDate)}))),this.paymentRequest={apiVersion:2,apiVersionMinor:0,allowedPaymentMethods:[{type:"CARD",parameters:{allowedCardNetworks:["MASTERCARD","VISA"],allowedAuthMethods:["PAN_ONLY","CRYPTOGRAM_3DS"]},tokenizationSpecification:{type:"PAYMENT_GATEWAY",parameters:{gateway:"example",gatewayMerchantId:"exampleGatewayMerchantId"}}}],merchantInfo:{merchantId:"12345678901234567890",merchantName:"Example Merchant"},transactionInfo:{countryCode:"US",currencyCode:"USD",totalPriceLabel:"TOTAL ALL TAXES INCLUDES",totalPriceStatus:"FINAL",totalPrice:this.totalfee.toFixed(2)},shippingAddressRequired:!0,shippingAddressParameters:{allowedCountryCodes:["US","CA","HT"],phoneNumberRequired:!0}}}},{key:"onLoadPaymentData",value:function(e){return Object(b.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log(e.detail);case 1:case"end":return t.stop()}}),t)})))}},{key:"calculCost",value:function(e,t,n,o,i){return this.totalfee=i+e+n+t-o}},{key:"shipaddressChange",value:function(){this.collapse=!this.collapse}},{key:"getAdresses",value:function(){var t=this;this.storage.get("address").then((function(n){t.addresses=n;var o,i=e(n);try{for(i.s();!(o=i.n()).done;){var a=o.value;a.default&&(t.defaultaddress=a)}}catch(r){i.e(r)}finally{i.f()}t.shippingAddress=!Object(f.isNullOrUndefined)(t.defaultaddress.address1)&&Object(h.isUndefined)(t.defaultaddress.address2)?t.defaultaddress.address1:!Object(f.isNullOrUndefined)(t.defaultaddress.address2)&&Object(h.isUndefined)(t.defaultaddress.address1)?t.defaultaddress.address2:Object(f.isNullOrUndefined)(t.defaultaddress.address1)||Object(f.isNullOrUndefined)(t.defaultaddress.address2)?"No default address set yet":t.defaultaddress.address1})).catch((function(e){console.log("addresses not found or empty")}))}},{key:"setAsDefault",value:function(e){return Object(b.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,o=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.alertcontroller.create({cssClass:"my-custom-class",header:"Alert",subHeader:"Shipping address change",message:"Set address as default.",buttons:[{text:"OK",cssClass:"",handler:function(t){o.setDefault(e)}},{text:"Cancel",cssClass:"my-custom-class"}]});case 2:return n=t.sent,t.next=5,n.present();case 5:case"end":return t.stop()}}),t,this)})))}},{key:"setDefault",value:function(t){var n=this,o=!1;this.storage.get("address").then((function(i){var a,r=e(i);try{for(r.s();!(a=r.n()).done;){var s=a.value;s.id===t&&(s.default=!0,o=!0)}}catch(d){r.e(d)}finally{r.f()}if(o){var c,l=e(i);try{for(l.s();!(c=l.n()).done;){var u=c.value;u.id!==t&&(u.default=!1)}}catch(d){l.e(d)}finally{l.f()}n.setLoading(i)}})).catch((function(e){alert(e)}))}},{key:"setLoading",value:function(e){return Object(b.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.loadingcontroller.create({cssClass:"my-custom-class",message:"Please wait...",duration:2e3}).then((function(t){t.present(),t.onWillDismiss().then((function(t){n.addresses=e,n.storage.set("address",e).then((function(){n.getAdresses()}))}))}));case 2:case"end":return t.stop()}}),t,this)})))}},{key:"onSubmit",value:function(e){var t=new FormData;t.append("amount",btoa("600")),t.append("orderId",btoa("123456")),console.log(t),this.http.post("https://sandbox.moncashbutton.digicelgroup.com/Moncash-middleware/Checkout/{UVdZeU0yMVlYMVpOUlhjOSBlbDlLUzBsU1kxbFpNVXQ0VUdSNU1UbFlRbXR0VVQwOQ==}",t).subscribe((function(e){return console.log(e)}),(function(e){return console.log(e)}))}},{key:"place_order",value:function(e){var t=this,n={};this.data.shipment.shipping_destination=this.shippingAddress,(n=this.data).amount=e,this.storage.get("user").then((function(e){return Object(b.a)(t,void 0,void 0,regeneratorRuntime.mark((function t(){var o=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.t0=Object(f.isNullOrUndefined)(e),t.t0){t.next=6;break}if(t.t1=e.connection,!t.t1){t.next=6;break}return t.next=6,this.loadingcontroller.create({cssClass:"my-custom-class",message:"processing your order...",duration:2e3}).then((function(e){return Object(b.a)(o,void 0,void 0,regeneratorRuntime.mark((function t(){var o=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.present(),t.t0=this.afirestore.collection("orders"),t.next=4,this.fireAuth.currentUser;case 4:t.t1=t.sent.uid,t.t0.doc.call(t.t0,t.t1).collection("customer_order").doc(n.orderId).set(n).then((function(){e.dismiss(),o.sendToConfirm(n)})).catch((function(t){e.dismiss(t,"failed")})),e.onDidDismiss().then((function(e){"failed"==e.role&&o.msgOrderFailed()}));case 7:case"end":return t.stop()}}),t,this)})))}));case 6:case"end":return t.stop()}}),t,this)})))}))}},{key:"msgOrderFailed",value:function(){return Object(b.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.alertcontroller.create({cssClass:"my-custom-class",header:"Alert",subHeader:"Network Faillure",message:"Current order process failed.",buttons:["Ok"]});case 2:return t=e.sent,e.next=5,t.present();case 5:case"end":return e.stop()}}),e,this)})))}},{key:"calculateDeliveryDate",value:function(e){var t=new Date(Date.now());return new Date(1e3*e.seconds+e.nanoseconds)>=t&&(t=e),t}},{key:"sendToConfirm",value:function(e){this.router.navigate(["/confirm"],{state:{order:e}})}}]),t}(),A.\u0275fac=function(e){return new(e||A)(p.Ib(m.a),p.Ib(u.db),p.Ib(d.a),p.Ib(u.ab),p.Ib(y.b),p.Ib(u.a),p.Ib(d.g),p.Ib(g.a),p.Ib(v.a))},A.\u0275cmp=p.Cb({type:A,selectors:[["app-place-order"]],decls:89,vars:25,consts:[[2,"--background","#031432"],["slot","start"],["color","light"],["routerLink","/home","routerDirection","back"],[1,"width"],["size","LARGE","color","warning"],["color","danger"],["size","LARGE","name","cart"],[1,"container-fluid","p-3"],[1,"row","g-4"],[1,"col-lg-8","col-md-6","col-12","border"],[1,"container",2,"padding-top","4px"],["detail","true",3,"click"],["position","stacked"],[4,"ngIf"],[1,"container"],["color","primary",2,"font-family","'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif","font-weight","bold"],[2,"font-family","'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif","font-weight","bold"],[4,"ngFor","ngForOf"],[1,"col-lg-4","col-md-6","col-12","border",2,"padding-top","4px","padding-bottom","4px","border-bottom","4px solid #eee"],["size","8"],["position","fixed","color","danger"],[2,"font-weight","bold"],["id","place",2,"margin-left","18%","margin-right","18%"],["environment","TEST","buttonSizeMode","FULL",3,"paymentRequest","loadpaymentdata"],["placeholder","Change payment method"],["fill","clear","slot","start","shape","round",3,"click"],["title","set as default","name","default","type","radio",3,"checked"],[3,"src"],["class","dot",3,"background",4,"ngIf"],["name","pricetag"],[1,"dot"]],template:function(e,t){1&e&&(p.Nb(0,"ion-header"),p.Nb(1,"ion-toolbar",0),p.Nb(2,"ion-buttons",1),p.Jb(3,"ion-back-button",2),p.Mb(),p.Nb(4,"ion-buttons",3),p.Nb(5,"ion-title",4),p.Nb(6,"ion-text",5),p.pc(7," K"),p.Mb(),p.Nb(8,"ion-text",6),p.Jb(9,"ion-icon",7),p.Mb(),p.Nb(10,"ion-text",2),p.pc(11,"TALOG"),p.Mb(),p.Mb(),p.Mb(),p.Mb(),p.Mb(),p.Nb(12,"ion-content"),p.Nb(13,"div",8),p.Nb(14,"div",9),p.Nb(15,"div",10),p.Nb(16,"div",11),p.Nb(17,"ion-item",12),p.Vb("click",(function(){return t.shipaddressChange()})),p.Nb(18,"ion-buttons"),p.Nb(19,"ion-label"),p.pc(20,"Shipping Address :"),p.Mb(),p.Mb(),p.Nb(21,"ion-item"),p.Nb(22,"label",13),p.pc(23),p.Mb(),p.Mb(),p.Mb(),p.nc(24,O,3,1,"div",14),p.Mb(),p.Nb(25,"div",15),p.Nb(26,"ion-item"),p.Nb(27,"ion-buttons"),p.Nb(28,"ion-text",16),p.Nb(29,"ion-label"),p.pc(30,"Estimated delivery date : "),p.Mb(),p.Mb(),p.pc(31,"\xa0 "),p.Nb(32,"ion-text",17),p.Nb(33,"ion-label"),p.pc(34),p.Yb(35,"date"),p.Mb(),p.Mb(),p.Mb(),p.Mb(),p.Nb(36,"fieldset"),p.Nb(37,"ion-list"),p.nc(38,q,23,9,"ion-item",18),p.Mb(),p.Mb(),p.Mb(),p.Mb(),p.Nb(39,"div",19),p.Nb(40,"fieldset"),p.Nb(41,"legend"),p.Nb(42,"label"),p.pc(43,"Payment Review"),p.Mb(),p.Mb(),p.Nb(44,"ion-grid"),p.Nb(45,"ion-row"),p.Nb(46,"ion-col",20),p.pc(47,"Item Cost"),p.Mb(),p.Nb(48,"ion-col"),p.pc(49),p.Yb(50,"currency"),p.Mb(),p.Mb(),p.Nb(51,"ion-row"),p.Nb(52,"ion-col",20),p.pc(53,"Shipping Fee"),p.Mb(),p.Nb(54,"ion-col"),p.pc(55),p.Yb(56,"currency"),p.Mb(),p.Mb(),p.Nb(57,"ion-row"),p.Nb(58,"ion-col",20),p.pc(59,"Tax Fee"),p.Mb(),p.Nb(60,"ion-col"),p.pc(61),p.Yb(62,"currency"),p.Mb(),p.Mb(),p.Nb(63,"ion-row"),p.Nb(64,"ion-col",20),p.pc(65,"Delivery"),p.Mb(),p.Nb(66,"ion-col"),p.pc(67),p.Yb(68,"currency"),p.Mb(),p.Mb(),p.Nb(69,"ion-row"),p.Nb(70,"ion-col",20),p.pc(71,"Discount"),p.Mb(),p.Nb(72,"ion-col"),p.pc(73),p.Yb(74,"currency"),p.Mb(),p.Mb(),p.Nb(75,"ion-row"),p.Nb(76,"ion-col",20),p.Nb(77,"ion-label",21),p.pc(78,"TOTAL :"),p.Mb(),p.Mb(),p.Nb(79,"ion-col"),p.Nb(80,"ion-label",22),p.pc(81),p.Yb(82,"currency"),p.Mb(),p.Mb(),p.Mb(),p.Mb(),p.Mb(),p.Nb(83,"div",23),p.Nb(84,"section"),p.Nb(85,"google-pay-button",24),p.Vb("loadpaymentdata",(function(e){return t.onLoadPaymentData(e)})),p.Mb(),p.Mb(),p.Mb(),p.Nb(86,"ion-select",25),p.Nb(87,"ion-select-option"),p.pc(88,"Paypal"),p.Mb(),p.Mb(),p.Mb(),p.Mb(),p.Mb(),p.Mb()),2&e&&(p.yb(23),p.rc("",t.shippingAddress," "),p.yb(1),p.cc("ngIf",!t.collapse&&"No default address set yet"!==t.shippingAddress),p.yb(10),p.qc(p.Zb(35,11,t.deliverydate)),p.yb(4),p.cc("ngForOf",t.data.items),p.yb(11),p.qc(p.Zb(50,13,t.amountOrder)),p.yb(6),p.qc(p.Zb(56,15,t.shippingfee)),p.yb(6),p.qc(p.Zb(62,17,t.taxfee)),p.yb(6),p.qc(p.Zb(68,19,t.deliveryfee)),p.yb(6),p.qc(p.Zb(74,21,t.promotion)),p.yb(8),p.qc(p.Zb(82,23,t.calculCost(t.shippingfee,t.taxfee,t.deliveryfee,t.promotion,t.amountOrder))),p.yb(4),p.cc("paymentRequest",t.paymentRequest))},directives:[u.u,u.X,u.h,u.d,u.e,u.gb,d.h,u.W,u.T,u.v,u.q,u.y,u.C,c.m,u.D,c.l,u.t,u.I,u.p,w,u.K,u.hb,u.L,u.G,u.g,u.V,u.w,u.A],pipes:[c.f,c.d],styles:[".icon[_ngcontent-%COMP%]{width:20px;height:28px;border:none;padding:2px}.width[_ngcontent-%COMP%]{font-size:26px}.margin[_ngcontent-%COMP%]{margin-left:20px;margin-bottom:0;margin-top:0}.icon[_ngcontent-%COMP%]{color:#ffd050;width:11px;padding:0}#qty[_ngcontent-%COMP%]{display:inline;float:right;border:1px solid #8c8c8c;border-radius:50%;padding:5px;text-align:center;background:#2c2c30;color:#fff8dc;font-weight:700}#pay[_ngcontent-%COMP%]{border-top:2px solid #a3a1a1;border-bottom:4px #a3a1a1;margin-bottom:2px}.margin.price[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], h4[_ngcontent-%COMP%]{display:inline}.margin.price[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-weight:700}.margin.price[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-left:4px;font-weight:bolder;font-size:22px}.dot[_ngcontent-%COMP%]{height:15px;width:15px;border-radius:50%;display:inline-block;border:1px solid #281d35;padding-left:6px;padding-right:6px}#iDesc[_ngcontent-%COMP%]{padding:20px 10px;background-color:#46a546}#iDesc[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{width:50%}section[_ngcontent-%COMP%]{margin-top:1em;margin-bottom:2.5em}.full-width[_ngcontent-%COMP%] > header[_ngcontent-%COMP%], section[_ngcontent-%COMP%]:not(.full-width){padding:0 10px}.count[_ngcontent-%COMP%]{height:100%;justify-content:flex-end;color:var(--ion-color-primary)}.count[_ngcontent-%COMP%], .qty-selector[_ngcontent-%COMP%]{display:flex;align-items:center}.qty-selector[_ngcontent-%COMP%]{justify-content:center;background:#f6f6f6;border-radius:5px;margin-top:10px}.qty-selector[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{--color:#565656;font-size:16px;margin-left:8px;margin-right:8px}.qty-selector[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{color:#565656!important;font-size:16px}.margin-right[_ngcontent-%COMP%]{margin-right:4px}"]}),A)}],T=((E=function e(){n(this,e)}).\u0275mod=p.Gb({type:E}),E.\u0275inj=p.Fb({factory:function(e){return new(e||E)},imports:[[d.i.forChild(L)],d.i]}),E),S=((D=function e(){n(this,e)}).\u0275mod=p.Gb({type:D}),D.\u0275inj=p.Fb({factory:function(e){return new(e||D)},imports:[[c.c,l.f,u.Y,T,k]]}),D)}}])}();