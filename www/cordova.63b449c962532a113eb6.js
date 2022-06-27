!function(){var e,n,t,o,r,a="6.0.0";t={},o=[],r={},e=function(n){if(!t[n])throw"module "+n+" not found";if(n in r)throw"Cycle in require graph: "+o.slice(r[n]).join("->")+"->"+n;if(t[n].factory)try{return r[n]=o.length,o.push(n),function(n){var t=n.factory;return n.exports={},delete n.factory,t((function(t){var o=t;return"."===t.charAt(0)&&(o=n.id.slice(0,n.id.lastIndexOf("."))+"."+t.slice(2)),e(o)}),n.exports,n),n.exports}(t[n])}finally{delete r[n],o.pop()}return t[n].exports},(n=function(e,n){if(t[e])throw"module "+e+" already defined";t[e]={id:e,factory:n}}).remove=function(e){delete t[e]},n.moduleMap=t,"object"==typeof module&&"function"==typeof e&&(module.exports.require=e,module.exports.define=n),n("cordova",(function(e,t,o){if(window.cordova&&!(window.cordova instanceof HTMLElement))throw new Error("cordova already defined");var r=e("cordova/channel"),i=e("cordova/platform"),c=document.addEventListener,s=document.removeEventListener,u=window.addEventListener,d=window.removeEventListener,l={},f={};function v(e,n){var t=document.createEvent("Events");if(t.initEvent(e,!1,!1),n)for(var o in n)n.hasOwnProperty(o)&&(t[o]=n[o]);return t}document.addEventListener=function(e,n,t){var o=e.toLowerCase();void 0!==l[o]?l[o].subscribe(n):c.call(document,e,n,t)},window.addEventListener=function(e,n,t){var o=e.toLowerCase();void 0!==f[o]?f[o].subscribe(n):u.call(window,e,n,t)},document.removeEventListener=function(e,n,t){var o=e.toLowerCase();void 0!==l[o]?l[o].unsubscribe(n):s.call(document,e,n,t)},window.removeEventListener=function(e,n,t){var o=e.toLowerCase();void 0!==f[o]?f[o].unsubscribe(n):d.call(window,e,n,t)};var p={define:n,require:e,version:a,platformVersion:a,platformId:i.id,addWindowEventHandler:function(e){return f[e]=r.create(e)},addStickyDocumentEventHandler:function(e){return l[e]=r.createSticky(e)},addDocumentEventHandler:function(e){return l[e]=r.create(e)},removeWindowEventHandler:function(e){delete f[e]},removeDocumentEventHandler:function(e){delete l[e]},getOriginalHandlers:function(){return{document:{addEventListener:c,removeEventListener:s},window:{addEventListener:u,removeEventListener:d}}},fireDocumentEvent:function(e,n,t){var o=v(e,n);void 0!==l[e]?t?l[e].fire(o):setTimeout((function(){"deviceready"===e&&document.dispatchEvent(o),l[e].fire(o)}),0):document.dispatchEvent(o)},fireWindowEvent:function(e,n){var t=v(e,n);void 0!==f[e]?setTimeout((function(){f[e].fire(t)}),0):window.dispatchEvent(t)},callbackId:Math.floor(2e9*Math.random()),callbacks:{},callbackStatus:{NO_RESULT:0,OK:1,CLASS_NOT_FOUND_EXCEPTION:2,ILLEGAL_ACCESS_EXCEPTION:3,INSTANTIATION_EXCEPTION:4,MALFORMED_URL_EXCEPTION:5,IO_EXCEPTION:6,INVALID_ACTION:7,JSON_EXCEPTION:8,ERROR:9},callbackSuccess:function(e,n){p.callbackFromNative(e,!0,n.status,[n.message],n.keepCallback)},callbackError:function(e,n){p.callbackFromNative(e,!1,n.status,[n.message],n.keepCallback)},callbackFromNative:function(e,n,t,o,r){try{var a=p.callbacks[e];a&&(n&&t===p.callbackStatus.OK?a.success&&a.success.apply(null,o):n||a.fail&&a.fail.apply(null,o),r||delete p.callbacks[e])}catch(c){var i="Error in "+(n?"Success":"Error")+" callbackId: "+e+" : "+c;throw console&&console.log&&console.log(i),console&&console.log&&c.stack&&console.log(c.stack),p.fireWindowEvent("cordovacallbackerror",{message:i}),c}},addConstructor:function(e){r.onCordovaReady.subscribe((function(){try{e()}catch(n){console.log("Failed to run constructor: "+n)}}))}};o.exports=p})),n("cordova/argscheck",(function(e,n,t){var o=e("cordova/utils"),r=t.exports,a={A:"Array",D:"Date",N:"Number",S:"String",F:"Function",O:"Object"};r.checkArgs=function(e,n,t,i){if(r.enableChecks){for(var c,s,u=null,d=0;d<e.length;++d){var l=e.charAt(d),f=l.toUpperCase(),v=t[d];if("*"!==l&&(c=o.typeName(v),(null!=v||l!==f)&&c!==a[f])){u="Expected "+a[f];break}}if(u)throw u+=", but got "+c+".",u='Wrong type for parameter "'+(s=d,/.*?\((.*?)\)/.exec(i||t.callee)[1].split(", ")[s]+'" of ')+n+": "+u,"undefined"==typeof jasmine&&console.error(u),TypeError(u)}},r.getValue=function(e,n){return void 0===e?n:e},r.enableChecks=!0})),n("cordova/base64",(function(e,n,t){var o=n;o.fromArrayBuffer=function(e){return function(e){for(var n,t=e.byteLength,o="",r=i(),c=0;c<t-2;c+=3)o+=r[(n=(e[c]<<16)+(e[c+1]<<8)+e[c+2])>>12],o+=r[4095&n];return t-c==2?(o+=r[(n=(e[c]<<16)+(e[c+1]<<8))>>12],o+=a[(4095&n)>>6],o+="="):t-c==1&&(o+=r[(n=e[c]<<16)>>12],o+="=="),o}(new Uint8Array(e))},o.toArrayBuffer=function(e){for(var n="undefined"!=typeof atob?atob(e):Buffer.from(e,"base64").toString("binary"),t=new ArrayBuffer(n.length),o=new Uint8Array(t),r=0,a=n.length;r<a;r++)o[r]=n.charCodeAt(r);return t};var r,a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",i=function(){r=[];for(var e=0;e<64;e++)for(var n=0;n<64;n++)r[64*e+n]=a[e]+a[n];return i=function(){return r},r}})),n("cordova/builder",(function(e,n,t){var o=e("cordova/utils");function r(e,t,r){n.replaceHookForTesting(e,t);var a=!1;try{e[t]=r}catch(i){a=!0}(a||e[t]!==r)&&o.defineGetter(e,t,(function(){return r}))}function a(e,n,t,a){a?o.defineGetter(e,n,(function(){return console.log(a),delete e[n],r(e,n,t),t})):r(e,n,t)}function i(n,t,r,s){!function(e,n,t){for(var o in e)e.hasOwnProperty(o)&&n.apply(void 0,[e[o],o])}(t,(function(t,u){try{var d=t.path?e(t.path):{};r?(void 0===n[u]?a(n,u,d,t.deprecated):void 0!==t.path&&(s?c(n[u],d):a(n,u,d,t.deprecated)),d=n[u]):void 0===n[u]?a(n,u,d,t.deprecated):d=n[u],t.children&&i(d,t.children,r,s)}catch(l){o.alert("Exception building Cordova JS globals: "+l+' for key "'+u+'"')}}))}function c(e,n){for(var t in n)n.hasOwnProperty(t)&&(e.prototype&&e.prototype.constructor===e?r(e.prototype,t,n[t]):"object"==typeof n[t]&&"object"==typeof e[t]?c(e[t],n[t]):r(e,t,n[t]))}n.buildIntoButDoNotClobber=function(e,n){i(n,e,!1,!1)},n.buildIntoAndClobber=function(e,n){i(n,e,!0,!1)},n.buildIntoAndMerge=function(e,n){i(n,e,!0,!0)},n.recursiveMerge=c,n.assignOrWrapInDeprecateGetter=a,n.replaceHookForTesting=function(){}})),n("cordova/channel",(function(e,n,t){var o=e("cordova/utils"),r=1,a=function(e,n){this.type=e,this.handlers={},this.state=n?1:0,this.fireArgs=null,this.numHandlers=0,this.onHasSubscribersChange=null},i={join:function(e,n){for(var t=n.length,o=t,r=function(){--o||e()},a=0;a<t;a++){if(0===n[a].state)throw Error("Can only use join with sticky channels.");n[a].subscribe(r)}t||e()},create:function(e){return i[e]=new a(e,!1)},createSticky:function(e){return i[e]=new a(e,!0)},deviceReadyChannelsArray:[],deviceReadyChannelsMap:{},waitForInitialization:function(e){if(e){var n=i[e]||this.createSticky(e);this.deviceReadyChannelsMap[e]=n,this.deviceReadyChannelsArray.push(n)}},initializationComplete:function(e){var n=this.deviceReadyChannelsMap[e];n&&n.fire()}};function c(e){if("function"!=typeof e&&"function"!=typeof e.handleEvent)throw new Error("Must provide a function or an EventListener object implementing the handleEvent interface.")}a.prototype.subscribe=function(e,n){var t,a;c(e),e&&"object"==typeof e?(t=e.handleEvent,n=e):t=e,2!==this.state?(a=e.observer_guid,"object"==typeof n&&(t=o.close(n,t)),a||(a=""+r++),t.observer_guid=a,e.observer_guid=a,this.handlers[a]||(this.handlers[a]=t,this.numHandlers++,1===this.numHandlers&&this.onHasSubscribersChange&&this.onHasSubscribersChange())):t.apply(n||this,this.fireArgs)},a.prototype.unsubscribe=function(e){var n;c(e),this.handlers[n=(e&&"object"==typeof e?e.handleEvent:e).observer_guid]&&(delete this.handlers[n],this.numHandlers--,0===this.numHandlers&&this.onHasSubscribersChange&&this.onHasSubscribersChange())},a.prototype.fire=function(e){var n=Array.prototype.slice.call(arguments);if(1===this.state&&(this.state=2,this.fireArgs=n),this.numHandlers){var t=[];for(var o in this.handlers)t.push(this.handlers[o]);for(var r=0;r<t.length;++r)t[r].apply(this,n);2===this.state&&this.numHandlers&&(this.numHandlers=0,this.handlers={},this.onHasSubscribersChange&&this.onHasSubscribersChange())}},i.createSticky("onDOMContentLoaded"),i.createSticky("onNativeReady"),i.createSticky("onCordovaReady"),i.createSticky("onPluginsReady"),i.createSticky("onDeviceReady"),i.create("onResume"),i.create("onPause"),i.waitForInitialization("onCordovaReady"),i.waitForInitialization("onDOMContentLoaded"),t.exports=i})),n("cordova/confighelper",(function(e,n,t){var o;function r(e){this.xhr=e,this.preferences=function(e){var n=(new DOMParser).parseFromString(e.responseText,"application/xml").getElementsByTagName("preference");return Array.prototype.slice.call(n)}(this.xhr)}r.prototype.getPreferenceValue=function(e){var n=this.preferences&&this.preferences.filter((function(n){return n.attributes.name&&n.attributes.name.value===e}));if(n&&n[0]&&n[0].attributes&&n[0].attributes.value)return n[0].attributes.value.value},n.readConfig=function(e,n){var t;function a(e){console.error(e),n&&n(e)}void 0!==o&&e(o),(t=new XMLHttpRequest).addEventListener("load",(function(){4==t.readyState&&(200==t.status||304==t.status||0===t.status?(o=new r(t),e(o)):a("[Browser][cordova.js][xhrStatusChangeHandler] Could not XHR config.xml: "+t.statusText))}));try{t.open("get","config.xml",!0),t.send()}catch(i){a("[Browser][cordova.js][readConfig] Could not XHR config.xml: "+JSON.stringify(i))}}})),n("cordova/exec",(function(e,n,t){var o=e("cordova"),r=e("cordova/exec/proxy");t.exports=function(e,n,t,a,i){var c=r.get(t,a);if(i=i||[],c){var s=t+o.callbackId++;"function"!=typeof e&&"function"!=typeof n||(o.callbacks[s]={success:e,fail:n});try{c((function(e,n){o.callbackSuccess((n=n||{}).callbackId||s,{status:null!=n.status?n.status:o.callbackStatus.OK,message:e,keepCallback:n.keepCallback||!1})}),(function(e,n){o.callbackError((n=n||{}).callbackId||s,{status:null!=n.status?n.status:o.callbackStatus.OK,message:e,keepCallback:n.keepCallback||!1})}),i)}catch(u){console.log("Exception calling native with command :: "+t+" :: "+a+" ::exception="+u)}}else console.log("Error: exec proxy not found for :: "+t+" :: "+a),"function"==typeof n&&n("Missing Command Error")}})),n("cordova/exec/proxy",(function(e,n,t){var o={};t.exports={add:function(e,n){return console.log("adding proxy for "+e),o[e]=n,n},remove:function(e){var n=o[e];return delete o[e],o[e]=null,n},get:function(e,n){return o[e]?o[e][n]:null}}})),n("cordova/init",(function(e,n,t){var o=e("cordova/channel"),r=e("cordova"),a=e("cordova/modulemapper"),i=e("cordova/platform"),c=e("cordova/pluginloader"),s=e("cordova/utils"),u=[o.onNativeReady,o.onPluginsReady];function d(e){for(var n=0;n<e.length;++n)2!==e[n].state&&console.log("Channel not fired: "+e[n].type)}window.setTimeout((function(){2!==o.onDeviceReady.state&&(console.log("deviceready has not fired after 5 seconds."),d(u),d(o.deviceReadyChannelsArray))}),5e3),window.navigator&&(window.navigator=function(e){var n=function(){};n.prototype=e;var t=new n;if(n.bind)for(var o in e)"function"==typeof e[o]?t[o]=e[o].bind(e):function(n){s.defineGetterSetter(t,o,(function(){return e[n]}))}(o);return t}(window.navigator)),window.console||(window.console={log:function(){}}),window.console.warn||(window.console.warn=function(e){this.log("warn: "+e)}),o.onPause=r.addDocumentEventHandler("pause"),o.onResume=r.addDocumentEventHandler("resume"),o.onActivated=r.addDocumentEventHandler("activated"),o.onDeviceReady=r.addStickyDocumentEventHandler("deviceready"),"complete"===document.readyState||"interactive"===document.readyState?o.onDOMContentLoaded.fire():document.addEventListener("DOMContentLoaded",(function(){o.onDOMContentLoaded.fire()}),!1),window._nativeReady&&o.onNativeReady.fire(),a.clobbers("cordova","cordova"),a.clobbers("cordova/exec","cordova.exec"),a.clobbers("cordova/exec","Cordova.exec"),i.bootstrap&&i.bootstrap(),setTimeout((function(){c.load((function(){o.onPluginsReady.fire()}))}),0),o.join((function(){a.mapModules(window),i.initialize&&i.initialize(),o.onCordovaReady.fire(),o.join((function(){e("cordova").fireDocumentEvent("deviceready")}),o.deviceReadyChannelsArray)}),u)})),n("cordova/modulemapper",(function(e,t,o){var r,a,i=e("cordova/builder"),c=n.moduleMap;function s(e,n,t,o){if(!(n in c))throw new Error("Module "+n+" does not exist.");r.push(e,n,t),o&&(a[t]=o)}function u(e,n){if(!e)return n;for(var t,o=e.split("."),r=n,a=0;t=o[a];++a)r=r[t]=r[t]||{};return r}t.reset=function(){r=[],a={}},t.clobbers=function(e,n,t){s("c",e,n,t)},t.merges=function(e,n,t){s("m",e,n,t)},t.defaults=function(e,n,t){s("d",e,n,t)},t.runs=function(e){s("r",e,null)},t.mapModules=function(n){var t={};n.CDV_origSymbols=t;for(var o=0,c=r.length;o<c;o+=3){var s=r[o],d=e(r[o+1]);if("r"!==s){var l=r[o+2],f=l.lastIndexOf("."),v=l.substr(0,f),p=l.substr(f+1),h=l in a?"Access made to deprecated symbol: "+l+". "+h:null,y=u(v,n),b=y[p];"m"===s&&b?i.recursiveMerge(b,d):("d"===s&&!b||"d"!==s)&&(l in t||(t[l]=b),i.assignOrWrapInDeprecateGetter(y,p,d,h))}}},t.getOriginalSymbol=function(e,n){var t=e.CDV_origSymbols;if(t&&n in t)return t[n];for(var o=n.split("."),r=e,a=0;a<o.length;++a)r=r&&r[o[a]];return r},t.reset()})),n("cordova/platform",(function(e,n,t){t.exports={id:"browser",cordovaVersion:"4.2.0",bootstrap:function(){var n=e("cordova/modulemapper"),t=e("cordova/channel");n.clobbers("cordova/exec/proxy","cordova.commandProxy"),t.onNativeReady.fire(),document.addEventListener("visibilitychange",(function(){document.hidden?t.onPause.fire():t.onResume.fire()}))}}})),n("cordova/pluginloader",(function(e,t,o){var r=e("cordova/modulemapper");function a(e,o,r,a){a=a||r,e in n.moduleMap?r():t.injectScript(o,(function(){e in n.moduleMap?r():a()}),a)}t.injectScript=function(e,n,t){var o=document.createElement("script");o.onload=n,o.onerror=t,o.src=e,document.head.appendChild(o)},t.load=function(n){var t=function(){for(var e=null,n=document.getElementsByTagName("script"),t="/cordova.js",o=n.length-1;o>-1;o--){var r=n[o].src.replace(/\?.*$/,"");if(r.indexOf(t)===r.length-t.length){e=r.substring(0,r.length-t.length)+"/";break}}return e}();null===t&&(console.log("Could not find cordova.js script tag. Plugin loading may fail."),t=""),a("cordova/plugin_list",t+"cordova_plugins.js",(function(){var o=e("cordova/plugin_list");!function(e,n,t){var o=n.length;if(o)for(var i=0;i<n.length;i++)a(n[i].id,e+n[i].file,c);else t();function c(){--o||function(e,n){for(var t,o=0;t=e[o];o++){if(t.clobbers&&t.clobbers.length)for(var a=0;a<t.clobbers.length;a++)r.clobbers(t.id,t.clobbers[a]);if(t.merges&&t.merges.length)for(var i=0;i<t.merges.length;i++)r.merges(t.id,t.merges[i]);t.runs&&r.runs(t.id)}n()}(n,t)}}(t,o,n)}),n)}})),n("cordova/urlutil",(function(e,n,t){n.makeAbsolute=function(e){var n=document.createElement("a");return n.href=e,n.href}})),n("cordova/utils",(function(e,n,t){var o,r=n;function a(e){for(var n="",t=0;t<e;t++){var o=parseInt(256*Math.random(),10).toString(16);1===o.length&&(o="0"+o),n+=o}return n}r.defineGetterSetter=function(e,n,t,o){if(Object.defineProperty){var r={get:t,configurable:!0};o&&(r.set=o),Object.defineProperty(e,n,r)}else e.__defineGetter__(n,t),o&&e.__defineSetter__(n,o)},r.defineGetter=r.defineGetterSetter,r.arrayIndexOf=function(e,n){if(e.indexOf)return e.indexOf(n);for(var t=e.length,o=0;o<t;++o)if(e[o]===n)return o;return-1},r.arrayRemove=function(e,n){var t=r.arrayIndexOf(e,n);return-1!==t&&e.splice(t,1),-1!==t},r.typeName=function(e){return Object.prototype.toString.call(e).slice(8,-1)},r.isArray=Array.isArray||function(e){return"Array"===r.typeName(e)},r.isDate=function(e){return e instanceof Date},r.clone=function(e){if(!e||"function"==typeof e||r.isDate(e)||"object"!=typeof e)return e;var n,t;if(r.isArray(e)){for(n=[],t=0;t<e.length;++t)n.push(r.clone(e[t]));return n}for(t in n={},e)t in n&&n[t]===e[t]||void 0===e[t]||"unknown"==typeof e[t]||(n[t]=r.clone(e[t]));return n},r.close=function(e,n,t){return function(){var o=t||arguments;return n.apply(e,o)}},r.createUUID=function(){return a(4)+"-"+a(2)+"-"+a(2)+"-"+a(2)+"-"+a(6)},r.extend=(o=function(){},function(e,n){o.prototype=n.prototype,e.prototype=new o,e.__super__=n.prototype,e.prototype.constructor=e}),r.alert=function(e){window.alert?window.alert(e):console&&console.log&&console.log(e)}})),window.cordova=e("cordova"),e("cordova/init")}();