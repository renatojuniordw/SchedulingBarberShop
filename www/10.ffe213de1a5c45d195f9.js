(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"/yGZ":function(n,l,u){"use strict";u.r(l);var e=u("CcnG"),t=u("ZZ/e"),o=u("lGQG"),i=function(){function n(n,l){this.navCtrl=n,this.auht=l}return n.prototype.ngOnInit=function(){},n.prototype.pushPageCad=function(){this.navCtrl.navigateForward("/cadastrar")},n.prototype.onClickRecuperarSenha=function(){this.navCtrl.navigateForward("/recuperar-senha")},n}(),r=function(){return function(){}}(),a=u("pMnS"),s=u("oBZk"),b=u("Ip0R"),g=u("gIcY"),c=u("mrSG"),p=function(){function n(n,l,u,e){this.navCtrl=n,this.authService=l,this.toastController=u,this.formBuilder=e,this.errorMessage="",this.validation_messages={email:[{type:"required",message:"E-mail \xe9 obrigat\xf3rio."},{type:"pattern",message:"Digite um email v\xe1lido."}],password:[{type:"required",message:"Senha \xe9 obrigat\xf3rio"},{type:"minlength",message:"A senha deve ter pelo menos 6 caracteres."}]},this.formLogin=this.formBuilder.group({email:["",g.m.compose([g.m.required,g.m.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")])],senha:["",g.m.compose([g.m.required,g.m.minLength(6)])]})}return n.prototype.ngOnInit=function(){},n.prototype.onClick=function(){this.loginUser(this.formLogin.value)},n.prototype.loginUser=function(n){var l=this;this.authService.loginUser(n).then(function(n){l.errorMessage="",l.navCtrl.navigateRoot("/menu/home")},function(n){l.msgErroAlert(n.code)})},n.prototype.msgErroAlert=function(n){switch(n){case"auth/invalid-email":this.presentToast("E-mail n\xe3o cadastrado.");break;case"auth/user-not-found":this.presentToast("N\xe3o h\xe1 registro de usu\xe1rio correspondente a esse e-mail.");break;case"auth/wrong-password":this.presentToast("Usu\xe1rio ou senha inv\xe1lida.")}},n.prototype.togglePasswordFieldType=function(){this.isSenha=!this.isSenha},n.prototype.presentToast=function(n){return c.__awaiter(this,void 0,void 0,function(){return c.__generator(this,function(l){switch(l.label){case 0:return[4,this.toastController.create({message:n,duration:2e3})];case 1:return l.sent().present(),[2]}})})},n}(),d=e.nb({encapsulation:0,styles:[[""]],data:{}});function m(n){return e.Hb(0,[(n()(),e.pb(0,0,null,null,1,"div",[["class","error-message"]],null,null,null,null,null)),(n()(),e.Fb(1,null,[" "," "]))],null,function(n,l){n(l,1,0,l.parent.context.$implicit.message)})}function h(n){return e.Hb(0,[(n()(),e.pb(0,0,null,null,2,null,null,null,null,null,null,null)),(n()(),e.gb(16777216,null,null,1,null,m)),e.ob(2,16384,null,0,b.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.gb(0,null,null,0))],function(n,l){var u=l.component;n(l,2,0,u.formLogin.get("email").hasError(l.context.$implicit.type)&&(u.formLogin.get("email").dirty||u.formLogin.get("email").touched))},null)}function f(n){return e.Hb(0,[(n()(),e.pb(0,0,null,null,46,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,l,u){var t=!0,o=n.component;return"submit"===l&&(t=!1!==e.zb(n,2).onSubmit(u)&&t),"reset"===l&&(t=!1!==e.zb(n,2).onReset()&&t),"ngSubmit"===l&&(t=!1!==o.onClick()&&t),t},null,null)),e.ob(1,16384,null,0,g.o,[],null,null),e.ob(2,540672,null,0,g.d,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),e.Cb(2048,null,g.a,null,[g.d]),e.ob(4,16384,null,0,g.j,[[4,g.a]],null,null),(n()(),e.pb(5,0,null,null,41,"ion-list",[],null,null,null,s.ib,s.y)),e.ob(6,49152,null,0,t.O,[e.h,e.k],null,null),(n()(),e.pb(7,0,null,0,13,"ion-item",[],null,null,null,s.gb,s.w)),e.ob(8,49152,null,0,t.H,[e.h,e.k],null,null),(n()(),e.pb(9,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,s.hb,s.x)),e.ob(10,49152,null,0,t.N,[e.h,e.k],{position:[0,"position"]},null),(n()(),e.Fb(-1,0,["E-mail"])),(n()(),e.pb(12,0,null,0,8,"ion-input",[["formControlName","email"],["required",""],["type","email"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(n,l,u){var t=!0;return"ionBlur"===l&&(t=!1!==e.zb(n,15)._handleBlurEvent()&&t),"ionChange"===l&&(t=!1!==e.zb(n,15)._handleInputEvent(u.target.value)&&t),t},s.fb,s.v)),e.ob(13,16384,null,0,g.l,[],{required:[0,"required"]},null),e.Cb(1024,null,g.f,function(n){return[n]},[g.l]),e.ob(15,16384,null,0,t.Mb,[e.k],null,null),e.Cb(1024,null,g.g,function(n){return[n]},[t.Mb]),e.ob(17,671744,null,0,g.c,[[3,g.a],[6,g.f],[8,null],[6,g.g],[2,g.q]],{name:[0,"name"]},null),e.Cb(2048,null,g.h,null,[g.c]),e.ob(19,16384,null,0,g.i,[[4,g.h]],null,null),e.ob(20,49152,null,0,t.G,[e.h,e.k],{required:[0,"required"],type:[1,"type"]},null),(n()(),e.pb(21,0,null,0,2,"div",[["class","validation-errors"]],null,null,null,null,null)),(n()(),e.gb(16777216,null,null,1,null,h)),e.ob(23,278528,null,0,b.i,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null),(n()(),e.pb(24,0,null,0,16,"ion-item",[],null,null,null,s.gb,s.w)),e.ob(25,49152,null,0,t.H,[e.h,e.k],null,null),(n()(),e.pb(26,0,null,0,2,"ion-label",[["floating",""]],null,null,null,s.hb,s.x)),e.ob(27,49152,null,0,t.N,[e.h,e.k],null,null),(n()(),e.Fb(-1,0,["Senha"])),(n()(),e.pb(29,0,null,0,8,"ion-input",[["formControlName","senha"],["required",""]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(n,l,u){var t=!0;return"ionBlur"===l&&(t=!1!==e.zb(n,32)._handleBlurEvent()&&t),"ionChange"===l&&(t=!1!==e.zb(n,32)._handleInputEvent(u.target.value)&&t),t},s.fb,s.v)),e.ob(30,16384,null,0,g.l,[],{required:[0,"required"]},null),e.Cb(1024,null,g.f,function(n){return[n]},[g.l]),e.ob(32,16384,null,0,t.Mb,[e.k],null,null),e.Cb(1024,null,g.g,function(n){return[n]},[t.Mb]),e.ob(34,671744,null,0,g.c,[[3,g.a],[6,g.f],[8,null],[6,g.g],[2,g.q]],{name:[0,"name"]},null),e.Cb(2048,null,g.h,null,[g.c]),e.ob(36,16384,null,0,g.i,[[4,g.h]],null,null),e.ob(37,49152,null,0,t.G,[e.h,e.k],{required:[0,"required"],type:[1,"type"]},null),(n()(),e.pb(38,0,null,0,2,"button",[["color","medium"],["type","button"]],null,[[null,"click"]],function(n,l,u){var e=!0;return"click"===l&&(e=!1!==n.component.togglePasswordFieldType()&&e),e},null,null)),(n()(),e.pb(39,0,null,null,1,"ion-icon",[],null,null,null,s.bb,s.r)),e.ob(40,49152,null,0,t.C,[e.h,e.k],{name:[0,"name"]},null),(n()(),e.pb(41,0,null,0,0,"br",[],null,null,null,null,null)),(n()(),e.pb(42,0,null,0,4,"ion-row",[],null,null,null,s.mb,s.C)),e.ob(43,49152,null,0,t.ib,[e.h,e.k],null,null),(n()(),e.pb(44,0,null,0,2,"ion-button",[["block",""],["class","button button-full"],["color","primary"],["type","Submit"]],null,null,null,s.N,s.d)),e.ob(45,49152,null,0,t.k,[e.h,e.k],{color:[0,"color"],disabled:[1,"disabled"],type:[2,"type"]},null),(n()(),e.Fb(-1,0,[" ENTRAR "]))],function(n,l){var u=l.component;n(l,2,0,u.formLogin),n(l,10,0,"floating"),n(l,13,0,""),n(l,17,0,"email"),n(l,20,0,"","email"),n(l,23,0,u.validation_messages.email),n(l,30,0,""),n(l,34,0,"senha"),n(l,37,0,"",u.isSenha?"text":"password"),n(l,40,0,u.isSenha?"eye-off":"eye"),n(l,45,0,"primary",!u.formLogin.valid,"Submit")},function(n,l){n(l,0,0,e.zb(l,4).ngClassUntouched,e.zb(l,4).ngClassTouched,e.zb(l,4).ngClassPristine,e.zb(l,4).ngClassDirty,e.zb(l,4).ngClassValid,e.zb(l,4).ngClassInvalid,e.zb(l,4).ngClassPending),n(l,12,0,e.zb(l,13).required?"":null,e.zb(l,19).ngClassUntouched,e.zb(l,19).ngClassTouched,e.zb(l,19).ngClassPristine,e.zb(l,19).ngClassDirty,e.zb(l,19).ngClassValid,e.zb(l,19).ngClassInvalid,e.zb(l,19).ngClassPending),n(l,29,0,e.zb(l,30).required?"":null,e.zb(l,36).ngClassUntouched,e.zb(l,36).ngClassTouched,e.zb(l,36).ngClassPristine,e.zb(l,36).ngClassDirty,e.zb(l,36).ngClassValid,e.zb(l,36).ngClassInvalid,e.zb(l,36).ngClassPending)})}var C=e.nb({encapsulation:0,styles:[["#img[_ngcontent-%COMP%]{margin:auto;width:60%;padding:10px}.labels[_ngcontent-%COMP%]{margin:auto;padding:10px;text-align:center!important}hr[_ngcontent-%COMP%]{width:40%;background-color:#000}ion-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{position:absolute;left:20px}ion-content[_ngcontent-%COMP%]{background-color:red}"]],data:{}});function v(n){return e.Hb(0,[(n()(),e.pb(0,0,null,null,7,"ion-content",[["padding",""]],null,null,null,s.V,s.l)),e.ob(1,49152,null,0,t.u,[e.h,e.k],null,null),(n()(),e.pb(2,0,null,0,1,"ion-img",[["id","img"],["src","https://i1.wp.com/wp-blog-dir.s3.amazonaws.com/uploads/sites/24/2017/10/barber-logo.png?resize=320%2C320&ssl=1"]],null,null,null,s.cb,s.s)),e.ob(3,49152,null,0,t.D,[e.h,e.k],{src:[0,"src"]},null),(n()(),e.pb(4,0,null,0,1,"app-form-login",[],null,null,null,f,d)),e.ob(5,114688,null,0,p,[t.Gb,o.a,t.Nb,g.b],null,null),(n()(),e.pb(6,0,null,0,1,"p",[],null,[[null,"click"]],function(n,l,u){var e=!0;return"click"===l&&(e=!1!==n.component.onClickRecuperarSenha()&&e),e},null,null)),(n()(),e.Fb(-1,null,["Esqueceu sua senha ?"]))],function(n,l){n(l,3,0,"https://i1.wp.com/wp-blog-dir.s3.amazonaws.com/uploads/sites/24/2017/10/barber-logo.png?resize=320%2C320&ssl=1"),n(l,5,0)},null)}function y(n){return e.Hb(0,[(n()(),e.pb(0,0,null,null,1,"app-login",[],null,null,null,v,C)),e.ob(1,114688,null,0,i,[t.Gb,o.a],null,null)],function(n,l){n(l,1,0)},null)}var z=e.lb("app-login",i,y,{},{},[]),k=u("ZYCi");u.d(l,"LoginPageModuleNgFactory",function(){return w});var w=e.mb(r,[],function(n){return e.wb([e.xb(512,e.j,e.bb,[[8,[a.a,z]],[3,e.j],e.x]),e.xb(4608,b.l,b.k,[e.u,[2,b.t]]),e.xb(4608,g.p,g.p,[]),e.xb(4608,t.c,t.c,[e.z,e.g]),e.xb(4608,t.Fb,t.Fb,[t.c,e.j,e.q,b.c]),e.xb(4608,t.Jb,t.Jb,[t.c,e.j,e.q,b.c]),e.xb(4608,g.b,g.b,[]),e.xb(1073742336,b.b,b.b,[]),e.xb(1073742336,g.n,g.n,[]),e.xb(1073742336,g.e,g.e,[]),e.xb(1073742336,t.Db,t.Db,[]),e.xb(1073742336,k.p,k.p,[[2,k.v],[2,k.m]]),e.xb(1073742336,g.k,g.k,[]),e.xb(1073742336,r,r,[]),e.xb(1024,k.k,function(){return[[{path:"",component:i}]]},[])])})}}]);