!function(){function n(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function t(n,t){for(var o=0;o<t.length;o++){var i=t[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{iHxv:function(o,i,e){"use strict";e.r(i),e.d(i,"HelpcenterPageModule",(function(){return P}));var c=e("ofXK"),r=e("3Pt+"),b=e("TEn/"),a=e("tyNb"),s=e("fXoL"),l=e("UbJi"),d=e("I/3d"),u=e("UbTl");function h(n,t){if(1&n){var o=s.Ob();s.Nb(0,"ion-card"),s.Jb(1,"ion-card-title"),s.Nb(2,"ion-card-content"),s.Nb(3,"ion-text",1),s.Nb(4,"b"),s.pc(5,"KINDNESS : "),s.Mb(),s.pc(6),s.Mb(),s.Mb(),s.Nb(7,"ion-card-header"),s.Nb(8,"ion-card-subtitle"),s.Nb(9,"ion-button",14),s.Vb("click",(function(){return s.ic(o),s.Xb().scenario("ORDER")})),s.pc(10,"Order issue"),s.Mb(),s.Nb(11,"ion-button",15),s.Vb("click",(function(){return s.ic(o),s.Xb().scenario("OTHER")})),s.pc(12,"Other ?"),s.Mb(),s.Mb(),s.Mb(),s.Mb()}if(2&n){var i=s.Xb();s.yb(6),s.rc("",i.kindnessIntroSpeech," ")}}function f(n,t){if(1&n){var o=s.Ob();s.Nb(0,"ion-card"),s.Jb(1,"ion-card-title"),s.Nb(2,"ion-card-content"),s.Nb(3,"ion-text",1),s.Nb(4,"b"),s.pc(5,"KINDNESS : "),s.Mb(),s.pc(6,"Please login as user first! "),s.Mb(),s.Mb(),s.Nb(7,"ion-card-header"),s.Nb(8,"ion-card-subtitle"),s.Nb(9,"ion-button",14),s.Vb("click",(function(){return s.ic(o),s.Xb().scenario("ORDER")})),s.pc(10,"Order issue"),s.Mb(),s.Nb(11,"ion-button",15),s.Vb("click",(function(){return s.ic(o),s.Xb().scenario("OTHER")})),s.pc(12,"Other ?"),s.Mb(),s.Mb(),s.Mb(),s.Mb()}}function g(n,t){if(1&n){var o=s.Ob();s.Nb(0,"ion-thumbnail",12),s.Vb("click",(function(){s.ic(o);var n=s.Xb(2).$implicit;return s.Xb(2).orderInformation(n)})),s.Jb(1,"ion-img",18),s.Mb()}if(2&n){var i=t.$implicit;s.yb(1),s.cc("src",i.features[0].pictures[0])}}function p(n,t){if(1&n){var o=s.Ob();s.Nb(0,"ion-item"),s.Nb(1,"ion-buttons",2),s.nc(2,g,2,1,"ion-thumbnail",17),s.Mb(),s.Nb(3,"ion-label",12),s.Vb("click",(function(){s.ic(o);var n=s.Xb().$implicit;return s.Xb(2).orderInformation(n)})),s.Nb(4,"h4"),s.pc(5),s.Mb(),s.Mb(),s.Mb()}if(2&n){var i=s.Xb().$implicit;s.yb(2),s.cc("ngForOf",i.product),s.yb(3),s.qc(i.orderId)}}function m(n,t){if(1&n&&(s.Lb(0),s.nc(1,p,6,2,"ion-item",9),s.Kb()),2&n){var o=t.$implicit;s.yb(1),s.cc("ngIf","Delivered"!==o.shipment.status)}}function M(n,t){if(1&n&&(s.Nb(0,"ion-card"),s.Nb(1,"ion-card-content"),s.Nb(2,"ion-item"),s.Nb(3,"ion-text",1),s.pc(4," Which order you mean ? "),s.Mb(),s.Mb(),s.nc(5,m,2,1,"ng-container",16),s.Mb(),s.Mb()),2&n){var o=s.Xb();s.yb(5),s.cc("ngForOf",o.order)}}function N(n,t){if(1&n&&(s.Nb(0,"ion-item"),s.pc(1),s.Mb()),2&n){var o=s.Xb(2);s.yb(1),s.rc(" ",o.orderInfo.shipment.status," go to order page for more update about your order ")}}function y(n,t){if(1&n&&(s.Nb(0,"ion-item"),s.pc(1),s.Mb()),2&n){var o=s.Xb(2);s.yb(1),s.rc(" ",o.orderInfo.shipment.status,"! your order is on the way dear customer. ")}}function I(n,t){if(1&n){var o=s.Ob();s.Nb(0,"ion-card"),s.Jb(1,"ion-card-title"),s.Nb(2,"ion-card-content"),s.Nb(3,"ion-text",1),s.pc(4," Order # "),s.Nb(5,"b"),s.pc(6),s.Mb(),s.Mb(),s.Nb(7,"ion-item"),s.pc(8),s.Mb(),s.nc(9,N,2,1,"ion-item",9),s.nc(10,y,2,1,"ion-item",9),s.Mb(),s.Nb(11,"ion-card-header"),s.Nb(12,"ion-item"),s.pc(13,"Did you find me helpful ? "),s.Mb(),s.Nb(14,"ion-item"),s.Nb(15,"ion-button",14),s.Vb("click",(function(){return s.ic(o),s.Xb().scenario("END")})),s.pc(16,"Yes a lot"),s.Mb(),s.Nb(17,"ion-button",15),s.Vb("click",(function(){return s.ic(o),s.Xb().scenario("MORE_HELP")})),s.pc(18,"Not enough"),s.Mb(),s.Mb(),s.Mb(),s.Mb()}if(2&n){var i=s.Xb();s.yb(6),s.qc(i.orderInfo.orderId),s.yb(2),s.rc(" With destination : ",i.orderInfo.shipment.shipping_destination," "),s.yb(1),s.cc("ngIf","Not shipped yet"==i.orderInfo.shipment.status),s.yb(1),s.cc("ngIf","Shipped"==i.orderInfo.shipment.status)}}function w(n,t){if(1&n){var o=s.Ob();s.Nb(0,"ion-card-header"),s.Nb(1,"ion-card-subtitle"),s.Nb(2,"ion-button",14),s.Vb("click",(function(){return s.ic(o),s.Xb(2).scenario("TALK")})),s.pc(3,"Talk with someone"),s.Mb(),s.Nb(4,"ion-button",15),s.Vb("click",(function(){return s.ic(o),s.Xb(2).scenario("BETTER")})),s.pc(5,"Try better next"),s.Mb(),s.Mb(),s.Mb()}}function v(n,t){if(1&n&&(s.Nb(0,"ion-card"),s.Jb(1,"ion-card-title"),s.Nb(2,"ion-card-content"),s.Nb(3,"ion-text",1),s.pc(4),s.Mb(),s.Mb(),s.nc(5,w,6,0,"ion-card-header",9),s.Mb()),2&n){var o=s.Xb();s.yb(4),s.rc(" ",o.kindnessEndSpeech," "),s.yb(1),s.cc("ngIf",o.dialogFlow.box3Option)}}function x(n,t){1&n&&(s.Nb(0,"ion-card"),s.Jb(1,"ion-card-title"),s.Nb(2,"ion-card-content"),s.Nb(3,"ion-text",1),s.Nb(4,"b"),s.pc(5,"KINDNESS : "),s.Mb(),s.pc(6,"OK but don't stop shopping for your favorites items in our store "),s.Mb(),s.Nb(7,"ion-button",19),s.pc(8,"Continue shopping"),s.Mb(),s.Mb(),s.Mb())}function k(n,t){1&n&&(s.Nb(0,"ion-chip",26),s.pc(1,"You"),s.Mb())}function O(n,t){if(1&n&&(s.Nb(0,"ion-chip",26),s.pc(1),s.Mb()),2&n){var o=s.Xb().$implicit;s.yb(1),s.qc(o.author)}}function F(n,t){if(1&n&&(s.Nb(0,"ion-badge",27),s.pc(1),s.Mb()),2&n){var o=s.Xb().$implicit;s.yb(1),s.qc(o.content)}}function E(n,t){if(1&n&&(s.Nb(0,"ion-badge",28),s.pc(1),s.Mb()),2&n){var o=s.Xb().$implicit;s.yb(1),s.qc(o.content)}}function D(n,t){if(1&n&&(s.Nb(0,"ion-item",22),s.nc(1,k,2,0,"ion-chip",23),s.nc(2,O,2,1,"ion-chip",23),s.nc(3,F,2,1,"ion-badge",24),s.nc(4,E,2,1,"ion-badge",25),s.Nb(5,"ion-label"),s.pc(6),s.Yb(7,"date"),s.Mb(),s.Mb()),2&n){var o=t.$implicit,i=s.Xb(2);s.yb(1),s.cc("ngIf",o.author==i.userId),s.yb(1),s.cc("ngIf",o.author!==i.userId),s.yb(1),s.cc("ngIf",o.author!=i.userId),s.yb(1),s.cc("ngIf",o.author==i.userId),s.yb(2),s.qc(s.Zb(7,5,o.date_msg))}}function X(n,t){if(1&n&&(s.Nb(0,"div",20),s.nc(1,D,8,7,"ion-item",21),s.Mb()),2&n){var o=s.Xb();s.yb(1),s.cc("ngForOf",o.message)}}var R,S,T,C=[{path:"",component:(R=function(){function o(t,i,e){var c=this;n(this,o),this.afAuth=t,this.ngfirestore=i,this.fdataService=e,this.kindnessIntroSpeech="",this.kindnessEndSpeech="",this.dialogFlow={introduction:["hello! im kindness the IA, and Im here to help you. Please tell me what matter!","Hi, Im Kindness How can i make you happy!","Haloa, please select an option and I'll help you"],box1:!1,box2:!1,box3:!1,box4:!1,box3Option:!1,transfer:!1,happyMood:["You Welcome!!","Apreciate see you!","That my lovely job","Please continue shopping for your favorites items"],sorryMood:["Sorry that, i won't help i'll do better next time","Disapointed, maybe you want to talk with a real person ?","My Fault, let me know if you want me transfer your issue to another person"]},this.afAuth.authState.subscribe((function(n){n?(c.msg={},c.orderInfo={},c.userId=n.uid,c.getMessages(c.userId),c.connected=!0):c.connected=!1})),this.kindnessIntroSpeech=this.dialogFlow.introduction[Math.floor(2*Math.random())]}var i,e,c;return i=o,(e=[{key:"ngOnInit",value:function(){}},{key:"scenario",value:function(n){var t=this;"ORDER"==n&&(this.dialogFlow.box2||this.dialogFlow.box3||(this.dialogFlow.box1=!0,this.order=this.fdataService.getFirestoreOrder())),"ORDERINFO"==n&&(this.dialogFlow.box2=!0),"MORE_HELP"==n&&(this.kindnessEndSpeech=this.dialogFlow.sorryMood[Math.floor(3*Math.random())],this.dialogFlow.box3Option=!0,this.dialogFlow.box3=!0),"END"==n&&(this.kindnessEndSpeech=this.dialogFlow.happyMood[Math.floor(3*Math.random())],this.dialogFlow.box3Option=!1,this.dialogFlow.box3=!0),"BETTER"==n&&(this.dialogFlow.box4=!0),"TALK"==n&&(this.msg.author=this.userId,this.msg.content="Order Issue",this.msg.date_msg=new Date(Date.now()),this.msg.object="HELP_CENTER",this.msg.destination="ADMIN",this.ngfirestore.collection("message").doc("ADMIN").collection("update").add(this.msg).then((function(){t.textMesage="",t.dialogFlow.transfer=!0}))),"OTHER"==n&&(this.dialogFlow.box1||(this.kindnessEndSpeech="",this.dialogFlow.box3Option=!0,this.dialogFlow.box3=!0))}},{key:"orderInformation",value:function(n){this.orderInfo=n,this.scenario("ORDERINFO")}},{key:"sendMessage",value:function(n){var t=this;this.dialogFlow.transfer?""!=n&&(this.msg.author=this.userId,this.msg.content=n,this.msg.date_msg=new Date(Date.now()),this.msg.object="HELP_CENTER",this.msg.destination="ADMIN",this.ngfirestore.collection("message").doc(this.userId).collection("help").add(this.msg).then((function(){t.textMesage=""}))):this.textMesage=""}},{key:"getMessages",value:function(n){var t=this;this.message=new Array,this.messageCollection=this.ngfirestore.collection("message"),this.msgDataFlux=this.messageCollection.doc(n).collection("help",(function(n){return n.orderBy("date_msg")})).valueChanges(),this.msgDataFlux.subscribe((function(n){t.message=[],n.forEach((function(n){t.message.push({author:n.author,content:n.content,date_msg:n.dte_msg,object:n.object,destination:n.destination})}))}))}},{key:"deleteMessage",value:function(n){this.ngfirestore.collection("message").doc(n).collection("help").get().toPromise().then((function(n){n.forEach((function(n){n.ref.delete()}))}))}},{key:"getDate",value:function(n){return new Date(1e3*n.seconds+n.nanoseconds).toDateString()}}])&&t(i.prototype,e),c&&t(i,c),o}(),R.\u0275fac=function(n){return new(n||R)(s.Ib(l.a),s.Ib(d.a),s.Ib(u.a))},R.\u0275cmp=s.Cb({type:R,selectors:[["app-helpcenter"]],decls:36,vars:8,consts:[["mode","ios"],["color","dark"],["slot","start"],["mode","ios",1,"width"],["size","LARGE","color","warning"],["color","danger"],["size","LARGE","name","cart"],["title","app header","alt","image icon","src","assets/icon/lipstick.png",1,"icon"],["name","information-circle-outline"],[4,"ngIf"],["class","stream",4,"ngIf"],["placeholder","tell us what's happened...",3,"ngModel","ngModelChange"],[3,"click"],["name","send"],["color","medium",3,"click"],["color","light",3,"click"],[4,"ngFor","ngForOf"],[3,"click",4,"ngFor","ngForOf"],[3,"src"],["routerLink","/home","routerDirection","back"],[1,"stream"],["lines","none",4,"ngFor","ngForOf"],["lines","none"],["text-wrap","","color","light",4,"ngIf"],["text-wrap","","slot","start","color","light",4,"ngIf"],["text-wrap","","slot","end","color","primary",4,"ngIf"],["text-wrap","","color","light"],["text-wrap","","slot","start","color","light"],["text-wrap","","slot","end","color","primary"]],template:function(n,t){1&n&&(s.Nb(0,"ion-header",0),s.Nb(1,"ion-toolbar",1),s.Nb(2,"ion-buttons",2),s.Jb(3,"ion-back-button"),s.Mb(),s.Nb(4,"ion-buttons"),s.Nb(5,"ion-title",3),s.Nb(6,"ion-text",4),s.pc(7," K"),s.Mb(),s.Nb(8,"ion-text",5),s.Jb(9,"ion-icon",6),s.Mb(),s.Nb(10,"ion-text"),s.pc(11,"ta"),s.Mb(),s.Jb(12,"img",7),s.Nb(13,"ion-text"),s.pc(14,"og"),s.Mb(),s.Mb(),s.Mb(),s.Mb(),s.Nb(15,"ion-buttons"),s.Nb(16,"ion-item-divider"),s.Jb(17,"ion-icon",8),s.Nb(18,"ion-label"),s.pc(19,"Customer services"),s.Mb(),s.Mb(),s.Mb(),s.Mb(),s.Nb(20,"ion-content"),s.Nb(21,"div"),s.nc(22,h,13,1,"ion-card",9),s.nc(23,f,13,0,"ion-card",9),s.nc(24,M,6,1,"ion-card",9),s.nc(25,I,19,4,"ion-card",9),s.nc(26,v,6,2,"ion-card",9),s.nc(27,x,9,0,"ion-card",9),s.Mb(),s.nc(28,X,2,1,"div",10),s.Mb(),s.Nb(29,"ion-footer"),s.Nb(30,"ion-toolbar"),s.Nb(31,"ion-item"),s.Nb(32,"ion-input",11),s.Vb("ngModelChange",(function(n){return t.textMesage=n})),s.Mb(),s.Nb(33,"ion-button",12),s.Vb("click",(function(){return t.sendMessage(t.textMesage)})),s.pc(34,"Send "),s.Jb(35,"ion-icon",13),s.Mb(),s.Mb(),s.Mb(),s.Mb()),2&n&&(s.yb(22),s.cc("ngIf",t.connected),s.yb(1),s.cc("ngIf",!t.connected),s.yb(1),s.cc("ngIf",t.dialogFlow.box1),s.yb(1),s.cc("ngIf",t.dialogFlow.box2),s.yb(1),s.cc("ngIf",t.dialogFlow.box3),s.yb(1),s.cc("ngIf",t.dialogFlow.box4),s.yb(1),s.cc("ngIf",t.connected),s.yb(4),s.cc("ngModel",t.textMesage))},directives:[b.u,b.V,b.h,b.d,b.e,b.U,b.R,b.v,b.z,b.B,b.q,c.m,b.s,b.y,b.x,b.fb,r.i,r.l,b.g,b.i,b.m,b.j,b.k,b.l,c.l,b.T,b.w,b.db,a.h,b.o,b.f],pipes:[c.f],styles:[".stream[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{min-height:-webkit-fit-content!important;min-height:-moz-fit-content!important;min-height:fit-content!important;height:51px}ion-badge[_ngcontent-%COMP%]{padding:10px!important;text-align:left;max-width:80%}"]}),R)}],J=((T=function t(){n(this,t)}).\u0275mod=s.Gb({type:T}),T.\u0275inj=s.Fb({factory:function(n){return new(n||T)},imports:[[a.i.forChild(C)],a.i]}),T),P=((S=function t(){n(this,t)}).\u0275mod=s.Gb({type:S}),S.\u0275inj=s.Fb({factory:function(n){return new(n||S)},imports:[[c.c,r.f,b.W,J]]}),S)}}])}();