!function(){function n(n,i){if(!(n instanceof i))throw new TypeError("Cannot call a class as a function")}function i(n,i){for(var t=0;t<i.length;t++){var e=i[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{jcJX:function(t,e,o){"use strict";o.r(e),o.d(e,"AccountPageModule",(function(){return E}));var r=o("ofXK"),c=o("3Pt+"),b=o("l+lL"),s=o("TEn/"),a=o("tyNb"),l=o("mrSG"),d=o("Oj1a"),u=o("fXoL"),g=o("UbJi"),f=o("I/3d"),p=o("UbTl"),h=o("e8h1");function m(n,i){if(1&n&&(u.Nb(0,"small",31),u.pc(1),u.Mb()),2&n){var t=u.Xb();u.yb(1),u.qc(t.browsing.length)}}function N(n,i){if(1&n&&(u.Nb(0,"small",31),u.pc(1),u.Mb()),2&n){var t=i.ngIf;u.yb(1),u.qc(t.length)}}function M(n,i){if(1&n&&(u.Nb(0,"small",31),u.pc(1),u.Mb()),2&n){var t=u.Xb();u.yb(1),u.qc(t.cartItem.length)}}function w(n,i){if(1&n&&(u.Nb(0,"small",31),u.pc(1),u.Mb()),2&n){var t=u.Xb();u.yb(1),u.qc(t.likeItem.length)}}function v(n,i){if(1&n&&(u.Lb(0),u.Nb(1,"ion-slide",35),u.Nb(2,"ion-item-group"),u.Jb(3,"ion-img",36),u.Nb(4,"ion-row"),u.Nb(5,"ion-badge",6),u.Nb(6,"h5"),u.pc(7),u.Yb(8,"currency"),u.Mb(),u.Mb(),u.Mb(),u.Mb(),u.Mb(),u.Kb()),2&n){var t=i.$implicit;u.yb(3),u.cc("src",t.items.picture),u.yb(4),u.qc(u.Zb(8,2,t.items.price))}}function y(n,i){1&n&&(u.Nb(0,"div",37),u.Nb(1,"ion-button",38),u.pc(2,"No recent orders found, start shopping now!"),u.Mb(),u.Mb())}var I=function(){return{slidesPerView:"3",zoom:!1,grabCursor:!0}};function k(n,i){if(1&n&&(u.Lb(0),u.Nb(1,"ion-slides",32),u.nc(2,v,9,4,"ng-container",33),u.Yb(3,"async"),u.Mb(),u.Nb(4,"ion-label",34),u.pc(5,"see all orders"),u.Mb(),u.nc(6,y,3,0,"div",24),u.Kb()),2&n){var t=i.ngIf,e=u.Xb(2);u.yb(1),u.cc("options",u.ec(5,I)),u.yb(1),u.cc("ngForOf",u.Zb(3,3,e.orders$)),u.yb(4),u.cc("ngIf",0==t.length)}}function O(n,i){if(1&n&&(u.Nb(0,"div",22),u.Nb(1,"h4"),u.pc(2,"Recent Orders"),u.Mb(),u.nc(3,k,7,6,"ng-container",23),u.Yb(4,"async"),u.Mb()),2&n){var t=u.Xb();u.yb(3),u.cc("ngIf",u.Zb(4,1,t.orders$))}}function x(n,i){if(1&n&&(u.Lb(0),u.Nb(1,"ion-slide",35),u.Nb(2,"ion-item-group"),u.Jb(3,"img",36),u.Nb(4,"ion-label"),u.Nb(5,"p"),u.pc(6),u.Mb(),u.Nb(7,"h5",40),u.pc(8),u.Yb(9,"currency"),u.Mb(),u.Mb(),u.Mb(),u.Mb(),u.Kb()),2&n){var t=i.$implicit;u.yb(3),u.cc("src",t.picture,u.jc),u.yb(3),u.qc(t.description),u.yb(2),u.qc(u.Zb(9,3,t.price))}}function L(n,i){if(1&n&&(u.Lb(0),u.Nb(1,"ion-slides",32),u.nc(2,x,10,5,"ng-container",33),u.Mb(),u.Nb(3,"ion-label",39),u.pc(4,"Visit my cart and checkout now"),u.Mb(),u.Kb()),2&n){var t=u.Xb();u.yb(1),u.cc("options",u.ec(2,I)),u.yb(1),u.cc("ngForOf",t.cartItem)}}function P(n,i){1&n&&(u.Nb(0,"div",37),u.Nb(1,"ion-button",38),u.pc(2,"Your cart is empty, start adding new items!"),u.Mb(),u.Mb())}function F(n,i){1&n&&(u.Nb(0,"ion-chip",6),u.Jb(1,"ion-icon",41),u.Nb(2,"h4"),u.pc(3,"No internet connection"),u.Mb(),u.Mb())}function C(n,i){if(1&n&&(u.Lb(0),u.Nb(1,"ion-slide",35),u.Nb(2,"ion-item-group"),u.Jb(3,"ion-img",36),u.Nb(4,"ion-row"),u.Nb(5,"ion-badge",6),u.Nb(6,"h5"),u.pc(7),u.Yb(8,"currency"),u.Mb(),u.Mb(),u.Mb(),u.Mb(),u.Mb(),u.Kb()),2&n){var t=i.$implicit;u.yb(3),u.cc("src",t.models[0].pictures[0]),u.yb(4),u.qc(u.Zb(8,2,t.caracteristic[0].price))}}function X(n,i){if(1&n){var t=u.Ob();u.Lb(0),u.Nb(1,"ion-slides",32),u.nc(2,C,9,4,"ng-container",33),u.Mb(),u.Nb(3,"ion-label",42),u.Vb("click",(function(){return u.ic(t),u.Xb().navigateTo("Wish List")})),u.pc(4,"see the complete list"),u.Mb(),u.Kb()}if(2&n){var e=u.Xb();u.yb(1),u.cc("options",u.ec(2,I)),u.yb(1),u.cc("ngForOf",e.likeItem)}}function q(n,i){1&n&&(u.Nb(0,"div",37),u.Nb(1,"ion-button",38),u.pc(2,"Your list is empty, start adding new items!"),u.Mb(),u.Mb())}function J(n,i){1&n&&(u.Nb(0,"ion-chip",6),u.Jb(1,"ion-icon",41),u.Nb(2,"h4"),u.pc(3,"No internet connection"),u.Mb(),u.Mb())}function z(n,i){if(1&n&&(u.Lb(0),u.Nb(1,"ion-slide",35),u.Nb(2,"ion-item-group"),u.Jb(3,"ion-img",36),u.Nb(4,"ion-row"),u.Nb(5,"ion-badge",6),u.Nb(6,"h5"),u.pc(7),u.Yb(8,"currency"),u.Mb(),u.Mb(),u.Mb(),u.Mb(),u.Mb(),u.Kb()),2&n){var t=i.$implicit;u.yb(3),u.cc("src",t.models[0].pictures[0]),u.yb(4),u.qc(u.Zb(8,2,t.caracteristic[0].price))}}function $(n,i){if(1&n){var t=u.Ob();u.Lb(0),u.Nb(1,"ion-slides",32),u.nc(2,z,9,4,"ng-container",33),u.Mb(),u.Nb(3,"ion-label",42),u.Vb("click",(function(){return u.ic(t),u.Xb().navigateTo("Recent Views")})),u.pc(4,"View all recent browsing items"),u.Mb(),u.Kb()}if(2&n){var e=u.Xb();u.yb(1),u.cc("options",u.ec(2,I)),u.yb(1),u.cc("ngForOf",e.browsing)}}function K(n,i){1&n&&(u.Nb(0,"div",37),u.Nb(1,"ion-button",38),u.pc(2,"Browsing Historic empty, start shopping now!"),u.Mb(),u.Mb())}function Y(n,i){1&n&&(u.Nb(0,"ion-chip",6),u.Jb(1,"ion-icon",41),u.Nb(2,"h4"),u.pc(3,"No internet connection"),u.Mb(),u.Mb())}function Z(n,i){if(1&n&&(u.Lb(0),u.Nb(1,"small",49),u.pc(2),u.Mb(),u.Kb()),2&n){var t=u.Xb().$implicit;u.yb(2),u.qc(t.message)}}function j(n,i){if(1&n&&(u.Nb(0,"div",48),u.nc(1,Z,3,1,"ng-container",23),u.Mb()),2&n){var t=i.$implicit,e=u.Xb(2);u.yb(1),u.cc("ngIf",e.getOldPassword().hasError(t.type)&&(e.getOldPassword().dirty||e.getOldPassword().touched))}}function S(n,i){if(1&n&&(u.Lb(0),u.Nb(1,"small",49),u.pc(2),u.Mb(),u.Kb()),2&n){var t=u.Xb().$implicit;u.yb(2),u.qc(t.message)}}function A(n,i){if(1&n&&(u.Nb(0,"div",48),u.nc(1,S,3,1,"ng-container",23),u.Mb()),2&n){var t=i.$implicit,e=u.Xb(2);u.yb(1),u.cc("ngIf",e.getNewPassword().hasError(t.type)&&(e.getNewPassword().dirty||e.getNewPassword().touched))}}function D(n,i){if(1&n){var t=u.Ob();u.Nb(0,"div",27),u.Nb(1,"ion-card"),u.Nb(2,"ion-card-title",28),u.Nb(3,"h4"),u.pc(4,"Change Password"),u.Mb(),u.Mb(),u.Nb(5,"ion-card-content"),u.Nb(6,"ng-form",43),u.Vb("ngSubmit",(function(){return u.ic(t),u.Xb().submit()})),u.Nb(7,"ion-item"),u.Nb(8,"ion-chip"),u.Jb(9,"ion-input",44),u.Mb(),u.Mb(),u.nc(10,j,2,1,"div",45),u.Nb(11,"ion-item"),u.Nb(12,"ion-chip"),u.Jb(13,"ion-input",46),u.Mb(),u.Mb(),u.nc(14,A,2,1,"div",45),u.Nb(15,"ion-item"),u.Nb(16,"ion-button",47),u.pc(17,"Change password"),u.Mb(),u.Mb(),u.Mb(),u.Mb(),u.Mb(),u.Mb()}if(2&n){var e=u.Xb();u.yb(6),u.cc("formGroup",e.passwordForm),u.yb(4),u.cc("ngForOf",e.errorMessages.password),u.yb(4),u.cc("ngForOf",e.errorMessages.password)}}function R(n,i){1&n&&(u.Nb(0,"ion-button",50),u.pc(1,"Sign In"),u.Mb())}function T(n,i){if(1&n){var t=u.Ob();u.Nb(0,"ion-button",51),u.Vb("click",(function(){return u.ic(t),u.Xb().signout()})),u.pc(1,"Sign Out"),u.Mb()}}var V,G,U,W=[{path:"",component:(V=function(){function t(i,e,o,r,b,s,a){var l=this;n(this,t),this.formBuilder=i,this.fireauth=e,this.router=o,this.afstore=r,this.fireService=b,this.loadingcontroller=s,this.storage=a,this.browsing=[],this.likeItem=[],this.cartItem=[],this.connected=!1,this.isOnline=!1,this.welcomeWord="",this.passwordForm=this.formBuilder.group({old:["",[c.o.required,c.o.minLength(8),c.o.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$")]],new:["",[c.o.required,c.o.minLength(8),c.o.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$")]]}),this.errorMessages={password:[{type:"required",message:"Password is fully required"},{type:"pattern",message:"Password must be at least 8 characters with digits and uppercase"}]},this.isOnline=this.fireService.getConnexionState(),this.getBrowsingHistoric(),this.getLikeItems(),this.getCartItems(),this.getUid(),this.fireauth.authState.subscribe((function(n){n?(l.connected=!0,l.getUser(n.uid)):(l.connected=!1,l.welcomeWord="Manage your account")}))}var e,o,r;return e=t,(o=[{key:"ngOnInit",value:function(){}},{key:"submit",value:function(){return Object(l.a)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var i,t,e=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=!1,n.next=3,this.fireauth.currentUser;case 3:t=n.sent.uid,this.afstore.collection("user").doc(t).get().subscribe((function(n){e.passwordForm.value.old==n.get("password")&&(i=!0)})),i?this.fireauth.currentUser.then((function(n){n.updatePassword(e.passwordForm.value.new)})).then((function(){return Object(l.a)(e,void 0,void 0,regeneratorRuntime.mark((function n(){var i=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.loadingcontroller.create({cssClass:"my-custom-class",message:"Please wait...",duration:2e3}).then((function(n){n.present(),n.onDidDismiss().then((function(n){i.passwordForm.value.new=null,i.passwordForm.value.old=null,console.log(n)}))}));case 2:case"end":return n.stop()}}),n,this)})))})):(this.passwordForm.value.new=null,this.passwordForm.value.old=null);case 5:case"end":return n.stop()}}),n,this)})))}},{key:"signout",value:function(){var n=this;this.fireauth.signOut().then((function(){n.storage.remove("user")}))}},{key:"getOldPassword",value:function(){return this.passwordForm.get("old")}},{key:"getNewPassword",value:function(){return this.passwordForm.get("new")}},{key:"getUser",value:function(n){var i=this;this.afstore.collection("user").doc(n).get().subscribe((function(n){i.user=new d.a(n.data()),i.welcomeWord="Welcome "+i.user.name}))}},{key:"getUid",value:function(){var n=this;this.storage.get("user").then((function(i){n.userId=i,n.orders$=n.fireService.getOrder(n.userId)}))}},{key:"getBrowsingHistoric",value:function(){var n=this;return this.storage.get("browsing").then((function(i){0!==i.length&&null!==i&&(n.browsing=i)})).catch((function(n){console.log("no browsing data found")})),this.browsing}},{key:"getLikeItems",value:function(){var n=this;return this.storage.get("likeItem").then((function(i){0!==i.length&&null!==i&&(n.likeItem=i)})).catch((function(n){console.log("no like items data found")})),this.likeItem}},{key:"getCartItems",value:function(){var n=this;return this.storage.get("cart").then((function(i){0!==i.length&&null!==i&&(n.cartItem=i)})).catch((function(n){console.log("no like items data found")})),this.likeItem}},{key:"navigateTo",value:function(n){this.router.navigate(["/historic"],{state:{direction:n}})}}])&&i(e.prototype,o),r&&i(e,r),t}(),V.\u0275fac=function(n){return new(n||V)(u.Ib(c.b),u.Ib(g.a),u.Ib(a.g),u.Ib(f.a),u.Ib(p.a),u.Ib(s.ab),u.Ib(h.b))},V.\u0275cmp=u.Cb({type:V,selectors:[["app-account"]],decls:73,vars:20,consts:[["mode","ios"],[2,"--background","#4b7bcde8"],["slot","start"],["color","light"],[1,"width"],["size","LARGE","color","warning"],["color","danger"],["size","LARGE","name","cart"],[1,"alert","alert-tertiary",2,"background","#7ea4e6f5"],[2,"color","white"],[1,"p-4","border","alert","alert-tertiary"],[1,"container-fluid","row","border","p-4"],[1,"col-md"],["style","padding-left: 10px; \n        padding-right: 10px;\n        font-size: 16px;\n        font-weight: bold;","class","indicator",4,"ngIf"],[2,"font-weight","bold","font-size","18px"],["routerLink","/helpcenter","routerDirection","forward",1,"col-md"],["routerLink","/order","routerDirection","forward",1,"col-md"],["style","padding-left: 10px; \n      padding-right: 10px;\n      font-size: 16px;\n      font-weight: bold;","class","indicator",4,"ngIf"],["routerLink","/cart","routerDirection","forward",1,"col-md"],[1,"col-md",3,"click"],["style","padding-left: 10px; \n    padding-right: 10px;\n    font-size: 16px;\n    font-weight: bold;","class","indicator",4,"ngIf"],["class","col-md-12  alert alert-tertiary border p-4",4,"ngIf"],[1,"col-md-12","alert","alert-tertiary","border","p-4"],[4,"ngIf"],["class","alert alert-default",4,"ngIf"],["color","danger",4,"ngIf"],["class","container",4,"ngIf"],[1,"container"],[1,"ion-padding"],["expand","block","color","secondary","routerLink","/login","routerDirection","forward",4,"ngIf"],["expand","block","color","medium",3,"click",4,"ngIf"],[1,"indicator",2,"padding-left","10px","padding-right","10px","font-size","16px","font-weight","bold"],[2,"margin-bottom","20px",3,"options"],[4,"ngFor","ngForOf"],["routerLink","/order","routerDirection","forward","color","tertiary"],[2,"margin","20px"],[2,"max-height","300px","max-width","300px",3,"src"],[1,"alert","alert-default"],["expand","block","fill","clear",1,"border"],["routerLink","/cart","routerDirection","forward","color","tertiary"],[2,"font-weight","bold","font-size","16px"],["size","large","name","alert-circle"],["color","tertiary",3,"click"],[3,"formGroup","ngSubmit"],["type","password","formControlName","old","placeholder","Old Password",1,"field"],["class","padding-left",4,"ngFor","ngForOf"],["type","password","formControlName","new","placeholder","New Password",1,"field"],["expand","block","type","submit"],[1,"padding-left"],[1,"error-message",2,"color","red"],["expand","block","color","secondary","routerLink","/login","routerDirection","forward"],["expand","block","color","medium",3,"click"]],template:function(n,i){1&n&&(u.Nb(0,"ion-header",0),u.Nb(1,"ion-toolbar",1),u.Nb(2,"ion-buttons",2),u.Jb(3,"ion-back-button",3),u.Mb(),u.Nb(4,"ion-buttons"),u.Nb(5,"ion-title",4),u.Nb(6,"ion-text",5),u.pc(7," K"),u.Mb(),u.Nb(8,"ion-text",6),u.Jb(9,"ion-icon",7),u.Mb(),u.Nb(10,"ion-text",3),u.pc(11,"TALOG"),u.Mb(),u.Mb(),u.Mb(),u.Mb(),u.Mb(),u.Nb(12,"ion-content"),u.Nb(13,"div",8),u.Nb(14,"h2",9),u.pc(15),u.Mb(),u.Mb(),u.Nb(16,"div",10),u.Nb(17,"div",11),u.Nb(18,"div",12),u.nc(19,m,2,1,"small",13),u.Nb(20,"ion-chip"),u.Nb(21,"ion-label",14),u.pc(22,"Historic"),u.Mb(),u.Mb(),u.Mb(),u.Nb(23,"div",15),u.Nb(24,"ion-chip"),u.Nb(25,"ion-label",14),u.pc(26,"Help"),u.Mb(),u.Mb(),u.Mb(),u.Nb(27,"div",16),u.nc(28,N,2,1,"small",17),u.Yb(29,"async"),u.Nb(30,"ion-chip"),u.Nb(31,"ion-label",14),u.pc(32,"Orders"),u.Mb(),u.Mb(),u.Mb(),u.Nb(33,"div",18),u.nc(34,M,2,1,"small",13),u.Nb(35,"ion-chip"),u.Nb(36,"ion-label",14),u.pc(37,"Cart"),u.Mb(),u.Mb(),u.Mb(),u.Nb(38,"div",19),u.Vb("click",(function(){return i.navigateTo("Wish List")})),u.nc(39,w,2,1,"small",20),u.Nb(40,"ion-chip"),u.Nb(41,"ion-label",14),u.pc(42,"Favorites"),u.Mb(),u.Mb(),u.Mb(),u.Mb(),u.Mb(),u.nc(43,O,5,3,"div",21),u.Nb(44,"div",22),u.Nb(45,"h4"),u.pc(46,"Your cart"),u.Mb(),u.nc(47,L,5,3,"ng-container",23),u.nc(48,P,3,0,"div",24),u.nc(49,F,4,0,"ion-chip",25),u.Mb(),u.Nb(50,"div",22),u.Nb(51,"h4"),u.pc(52,"Favorites"),u.Mb(),u.nc(53,X,5,3,"ng-container",23),u.nc(54,q,3,0,"div",24),u.nc(55,J,4,0,"ion-chip",25),u.Mb(),u.Nb(56,"div",22),u.Nb(57,"h4"),u.pc(58,"Recent Browsing Items"),u.Mb(),u.nc(59,$,5,3,"ng-container",23),u.nc(60,K,3,0,"div",24),u.nc(61,Y,4,0,"ion-chip",25),u.Mb(),u.Nb(62,"div",22),u.Nb(63,"h4"),u.pc(64,"Login and password"),u.Mb(),u.nc(65,D,18,3,"div",26),u.Nb(66,"div",27),u.Nb(67,"ion-card"),u.Nb(68,"ion-card-title",28),u.pc(69,"Connection"),u.Mb(),u.Nb(70,"ion-card-content"),u.nc(71,R,2,0,"ion-button",29),u.nc(72,T,2,0,"ion-button",30),u.Mb(),u.Mb(),u.Mb(),u.Mb(),u.Mb()),2&n&&(u.yb(15),u.qc(i.welcomeWord),u.yb(4),u.cc("ngIf",0!==i.browsing.length),u.yb(9),u.cc("ngIf",u.Zb(29,18,i.orders$)),u.yb(6),u.cc("ngIf",0!==i.cartItem.length),u.yb(5),u.cc("ngIf",0!==i.likeItem.length),u.yb(4),u.cc("ngIf",i.connected),u.yb(4),u.cc("ngIf",0!==i.cartItem.length&&i.isOnline),u.yb(1),u.cc("ngIf",0==i.cartItem.length&&i.isOnline),u.yb(1),u.cc("ngIf",!i.isOnline),u.yb(4),u.cc("ngIf",0!==i.likeItem.length&&i.isOnline),u.yb(1),u.cc("ngIf",0==i.likeItem.length&&i.isOnline),u.yb(1),u.cc("ngIf",!i.isOnline),u.yb(4),u.cc("ngIf",0!==i.browsing.length&&i.isOnline),u.yb(1),u.cc("ngIf",0==i.browsing.length&&i.isOnline),u.yb(1),u.cc("ngIf",!i.isOnline),u.yb(4),u.cc("ngIf",i.connected),u.yb(6),u.cc("ngIf",!i.connected),u.yb(1),u.cc("ngIf",i.connected))},directives:[s.u,s.X,s.h,s.d,s.e,s.W,s.T,s.v,s.q,r.m,s.o,s.C,s.gb,a.h,s.i,s.m,s.j,s.O,r.l,s.N,s.A,s.w,s.I,s.f,s.g,c.k,c.j,c.d,s.y,s.x,s.ib,c.i,c.c],pipes:[r.b,r.d],styles:[".padding-left[_ngcontent-%COMP%]{padding-left:5%}.field[_ngcontent-%COMP%]{width:150vw;margin:0 auto}.indicator[_ngcontent-%COMP%]{position:absolute;margin-top:-20px;background:red;border-radius:50%;padding:5px}ion-content[_ngcontent-%COMP%]{--background:#f1f3f4}ion-content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{background:#fff}"]}),V)}],B=((U=function i(){n(this,i)}).\u0275mod=u.Gb({type:U}),U.\u0275inj=u.Fb({factory:function(n){return new(n||U)},imports:[[a.i.forChild(W)],a.i]}),U),E=((G=function i(){n(this,i)}).\u0275mod=u.Gb({type:G}),G.\u0275inj=u.Fb({factory:function(n){return new(n||G)},imports:[[r.c,c.f,s.Y,b.a,B,c.m]]}),G)}}])}();