!function(){function n(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function t(n,t){for(var o=0;o<t.length;o++){var e=t[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"49aV":function(o,e,i){"use strict";i.r(e),i.d(e,"ConfirmPageModule",(function(){return m}));var r=i("ofXK"),c=i("3Pt+"),a=i("TEn/"),b=i("tyNb"),u=i("fXoL");function s(n,t){if(1&n&&(u.Nb(0,"ion-col"),u.Nb(1,"ion-row"),u.Jb(2,"ion-img",10),u.Mb(),u.Nb(3,"ion-row"),u.pc(4),u.Mb(),u.Mb()),2&n){var o=t.$implicit;u.yb(2),u.cc("src",o.picture),u.yb(2),u.qc(o.price)}}var f,d,l,p=[{path:"",component:(f=function(){function o(t,e){n(this,o),this.route=t,this.router=e,this.orderId=""}var e,i,r;return e=o,(i=[{key:"ngOnInit",value:function(){var n=this;this.route.queryParams.subscribe((function(t){n.router.getCurrentNavigation().extras.state&&(n.data=n.router.getCurrentNavigation().extras.state.order)})),this.product=this.data.items,this.qty=this.data.order_qty,this.orderId=this.data.orderId}}])&&t(e.prototype,i),r&&t(e,r),o}(),f.\u0275fac=function(n){return new(n||f)(u.Ib(b.a),u.Ib(b.g))},f.\u0275cmp=u.Cb({type:f,selectors:[["app-confirm"]],decls:25,vars:3,consts:[[1,"ion-padding"],[1,"confirmation"],[1,"ion-text-center"],[4,"ngFor","ngForOf"],[1,"outer-circle"],[1,"inner-circle"],["title","confirmed","src","../../assets/like.png"],["translucent","true","mode","md",1,"ion-no-border"],["color","translucent"],["expand","block","routerLink","/home","routerDirection","back",1,"main-button"],[3,"src"]],template:function(n,t){1&n&&(u.Nb(0,"ion-header"),u.Nb(1,"ion-toolbar"),u.Nb(2,"ion-title"),u.pc(3,"Order confirmation"),u.Mb(),u.Mb(),u.Mb(),u.Nb(4,"ion-content",0),u.Nb(5,"div",1),u.Nb(6,"div",2),u.Nb(7,"ion-item"),u.nc(8,s,5,2,"ion-col",3),u.Nb(9,"ion-label"),u.Nb(10,"ion-chip"),u.pc(11),u.Mb(),u.Mb(),u.Mb(),u.Nb(12,"div",4),u.Nb(13,"div",5),u.Jb(14,"img",6),u.Mb(),u.Mb(),u.Nb(15,"h2"),u.pc(16,"Confirmation"),u.Mb(),u.Nb(17,"p"),u.pc(18," Thank you for your order "),u.Jb(19,"br"),u.pc(20),u.Mb(),u.Mb(),u.Mb(),u.Mb(),u.Nb(21,"ion-footer",7),u.Nb(22,"ion-toolbar",8),u.Nb(23,"ion-button",9),u.pc(24,"Continue Shopping"),u.Mb(),u.Mb(),u.Mb()),2&n&&(u.yb(8),u.cc("ngForOf",t.product),u.yb(3),u.qc(t.qty),u.yb(9),u.rc(" Your order ",t.orderId," has been completed successfully "))},directives:[a.u,a.X,a.W,a.q,a.y,r.l,a.C,a.o,a.s,a.g,a.gb,b.h,a.p,a.I,a.w],styles:[".confirmation[_ngcontent-%COMP%]{height:100%;display:flex;justify-content:center;align-items:center}.confirmation[_ngcontent-%COMP%]   .outer-circle[_ngcontent-%COMP%]{width:200px;height:200px;background:#f8f8f8;margin-left:auto;margin-right:auto}.confirmation[_ngcontent-%COMP%]   .outer-circle[_ngcontent-%COMP%], .confirmation[_ngcontent-%COMP%]   .outer-circle[_ngcontent-%COMP%]   .inner-circle[_ngcontent-%COMP%]{border-radius:50%;display:flex;justify-content:center;align-items:center}.confirmation[_ngcontent-%COMP%]   .outer-circle[_ngcontent-%COMP%]   .inner-circle[_ngcontent-%COMP%]{width:150px;height:150px;background:#eee}.confirmation[_ngcontent-%COMP%]   .outer-circle[_ngcontent-%COMP%]   .inner-circle[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:30%}ion-footer[_ngcontent-%COMP%]{padding-left:20px;padding-right:20px}ion-footer[_ngcontent-%COMP%]   .main-button[_ngcontent-%COMP%]:after{box-shadow:none!important}"]}),f)}],g=((l=function t(){n(this,t)}).\u0275mod=u.Gb({type:l}),l.\u0275inj=u.Fb({factory:function(n){return new(n||l)},imports:[[b.i.forChild(p)],b.i]}),l),m=((d=function t(){n(this,t)}).\u0275mod=u.Gb({type:d}),d.\u0275inj=u.Fb({factory:function(n){return new(n||d)},imports:[[r.c,c.f,a.Y,g]]}),d)}}])}();