!function(){function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function n(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{X3zk:function(e,o,r){"use strict";r.r(o),r.d(o,"LoginPageModule",(function(){return v}));var i,a,s,c=r("ofXK"),u=r("3Pt+"),b=r("TEn/"),l=r("tyNb"),d=r("mrSG"),g=r("MCLT"),p=r("fXoL"),h=r("e8h1"),f=r("UbJi"),m=r("I/3d"),M=[{path:"",component:(i=function(){function e(n,o,r,i,a,s,c){t(this,e),this.route=n,this.router=o,this.storage=r,this.afAuth=i,this.loadingcontroller=a,this.alertcontroller=s,this.afirestore=c,this.dataUser={mail:"",password:""}}var o,r,i;return o=e,(r=[{key:"ngOnInit",value:function(){var t=this;this.route.queryParams.subscribe((function(n){t.router.getCurrentNavigation().extras.state&&(t.data=t.router.getCurrentNavigation().extras.state.order,t.returnway=t.router.getCurrentNavigation().extras.state.route)}))}},{key:"login",value:function(t){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var e=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.loadingcontroller.create({cssClass:"my-custom-class",message:"Please wait...",duration:5e3}).then((function(n){return Object(d.a)(e,void 0,void 0,regeneratorRuntime.mark((function e(){var o=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.present(),this.afAuth.signInWithEmailAndPassword(t.mail.trim(),t.password.trim()).then((function(){return Object(d.a)(o,void 0,void 0,regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.dataUser={mail:"",password:""},t.next=3,this.afAuth.currentUser;case 3:if(!t.sent.emailVerified){t.next=11;break}return t.t0=this.storage,t.next=7,this.afAuth.currentUser;case 7:t.t1=t.sent.uid.toString(),t.t0.set.call(t.t0,"user",t.t1),e={state:{order:this.data}},n.dismiss(),Object(g.isNullOrUndefined)(this.data)?this.router.navigate(["/home"]):this.router.navigate(["/place-order"],e);case 11:case"end":return t.stop()}}),t,this)})))})).catch((function(t){n.dismiss(t,"alert")})),n.onWillDismiss().then((function(t){return Object(d.a)(o,void 0,void 0,regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if("alert"!=t.role){n.next=6;break}return n.next=3,this.alertcontroller.create({cssClass:"my-custom-class",header:"Alert",subHeader:"Network Error",message:"Login failed"+t.data,buttons:["Ok"]});case 3:return e=n.sent,n.next=6,e.present();case 6:case"end":return n.stop()}}),n,this)})))}));case 1:case"end":return e.stop()}}),e,this)})))}));case 2:case"end":return n.stop()}}),n,this)})))}},{key:"toSignUp",value:function(){this.router.navigate(["/signup"],{state:{order:this.data}})}}])&&n(o.prototype,r),i&&n(o,i),e}(),i.\u0275fac=function(t){return new(t||i)(p.Ib(l.a),p.Ib(l.g),p.Ib(h.b),p.Ib(f.a),p.Ib(b.ab),p.Ib(b.a),p.Ib(m.a))},i.\u0275cmp=p.Cb({type:i,selectors:[["app-login"]],decls:37,vars:2,consts:[[2,"--background","#031432"],["slot","start"],["color","light"],["routerLink","/home","routerDirection","back"],[1,"width"],["size","LARGE","color","warning"],["color","danger"],["size","LARGE","name","cart"],[1,"container",2,"padding-top","50px"],[1,"container","p-4"],[1,"ion-padding"],["src","../../assets/icon/katalog_round_icon.PNG",2,"width","100px","height","100px","margin","auto"],["slot","start","name","person"],["position","floating"],["type","text",3,"ngModel","ngModelChange"],["slot","start","name","lock-closed"],["type","password",3,"ngModel","ngModelChange"],["expand","block",3,"click"],[1,"forgot"],["id","signup"],["color","primary",3,"click"]],template:function(t,n){1&t&&(p.Nb(0,"ion-header"),p.Nb(1,"ion-toolbar",0),p.Nb(2,"ion-buttons",1),p.Jb(3,"ion-back-button",2),p.Mb(),p.Nb(4,"ion-buttons",3),p.Nb(5,"ion-title",4),p.Nb(6,"ion-text",5),p.pc(7," K"),p.Mb(),p.Nb(8,"ion-text",6),p.Jb(9,"ion-icon",7),p.Mb(),p.Nb(10,"ion-text",2),p.pc(11,"TALOG"),p.Mb(),p.Mb(),p.Mb(),p.Mb(),p.Mb(),p.Nb(12,"ion-content"),p.Nb(13,"div",8),p.Nb(14,"ion-card",9),p.Nb(15,"ion-title",10),p.Jb(16,"ion-img",11),p.Mb(),p.Nb(17,"ion-item"),p.Jb(18,"ion-icon",12),p.Nb(19,"ion-label",13),p.pc(20,"Email or number phone"),p.Mb(),p.Nb(21,"ion-input",14),p.Vb("ngModelChange",(function(t){return n.dataUser.mail=t})),p.Mb(),p.Mb(),p.Nb(22,"ion-item"),p.Jb(23,"ion-icon",15),p.Nb(24,"ion-label",13),p.pc(25,"Password"),p.Mb(),p.Nb(26,"ion-input",16),p.Vb("ngModelChange",(function(t){return n.dataUser.password=t})),p.Mb(),p.Mb(),p.Nb(27,"section"),p.Nb(28,"ion-button",17),p.Vb("click",(function(){return n.login(n.dataUser)})),p.pc(29,"Connexion"),p.Mb(),p.Nb(30,"div",18),p.Nb(31,"ion-text"),p.Nb(32,"ion-label"),p.pc(33,"Password forgot?"),p.Mb(),p.Mb(),p.Mb(),p.Mb(),p.Nb(34,"div",19),p.Nb(35,"ion-label",20),p.Vb("click",(function(){return n.toSignUp()})),p.pc(36,"I don't have account, signup for free"),p.Mb(),p.Mb(),p.Mb(),p.Mb(),p.Mb()),2&t&&(p.yb(21),p.cc("ngModel",n.dataUser.mail),p.yb(5),p.cc("ngModel",n.dataUser.password))},directives:[b.u,b.X,b.h,b.d,b.e,b.gb,l.h,b.W,b.T,b.v,b.q,b.i,b.w,b.y,b.C,b.x,b.ib,u.i,u.l,b.g],styles:[".icon[_ngcontent-%COMP%]{width:20px;height:28px;border:none;padding:2px}.width[_ngcontent-%COMP%]{font-size:26px}.container[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{width:90%}#img[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto;padding:auto}#img[_ngcontent-%COMP%]{width:60%}.forgot[_ngcontent-%COMP%]{float:right}.forgot[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-size:14px;color:#c8c8c8;margin-top:10px}section[_ngcontent-%COMP%]{margin-top:1em;margin-bottom:2.5em}.full-width[_ngcontent-%COMP%] > header[_ngcontent-%COMP%], section[_ngcontent-%COMP%]:not(.full-width){padding:0 10px}#signup[_ngcontent-%COMP%]{width:100%;text-align:center;margin-top:50px}.my-custom-class[_ngcontent-%COMP%]{--background:#222;--spinner-color:#fff;color:#fff}"]}),i)}],w=((s=function n(){t(this,n)}).\u0275mod=p.Gb({type:s}),s.\u0275inj=p.Fb({factory:function(t){return new(t||s)},imports:[[l.i.forChild(M)],l.i]}),s),v=((a=function n(){t(this,n)}).\u0275mod=p.Gb({type:a}),a.\u0275inj=p.Fb({factory:function(t){return new(t||a)},imports:[[c.c,u.f,b.Y,w]]}),a)}}])}();