(function(e){function t(t){for(var r,o,u=t[0],s=t[1],c=t[2],p=0,l=[];p<u.length;p++)o=u[p],i[o]&&l.push(i[o][0]),i[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);d&&d(t);while(l.length)l.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==i[u]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},i={app:0},a=[];function u(e){return s.p+"js/"+({"app.account":"app.account","app.find":"app.find","app.join":"app.join","app.room":"app.room"}[e]||e)+"."+{"app.account":"7113572c","app.find":"d2845bc6","app.join":"9dd4d8ac","app.room":"9497d27f"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"app.account":1,"app.room":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var r="css/"+({"app.account":"app.account","app.find":"app.find","app.join":"app.join","app.room":"app.room"}[e]||e)+"."+{"app.account":"9449e95b","app.find":"31d6cfe0","app.join":"31d6cfe0","app.room":"ef323817"}[e]+".css",o=s.p+r,i=document.getElementsByTagName("link"),a=0;a<i.length;a++){var u=i[a],c=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(c===r||c===o))return t()}var p=document.getElementsByTagName("style");for(a=0;a<p.length;a++){u=p[a],c=u.getAttribute("data-href");if(c===r||c===o)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.request=r,n(i)},l.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(l)}).then(function(){o[e]=0}));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise(function(t,n){r=i[e]=[t,n]});t.push(r[2]=a);var c,p=document.getElementsByTagName("head")[0],l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=u(e),c=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");a.type=r,a.request=o,n[1](a)}i[e]=void 0}};var d=setTimeout(function(){c({type:"timeout",target:l})},12e4);l.onerror=l.onload=c,p.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],p=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var d=p;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"030d":function(e,t,n){},"0c59":function(e,t,n){},"33d4":function(e,t,n){"use strict";var r=n("d4fa"),o=n.n(r);o.a},"3e49":function(e,t,n){"use strict";var r=n("030d"),o=n.n(r);o.a},"472a":function(e,t,n){e.exports=n.p+"img/CheckersMainMenuGraphic.a4098a9a.png"},"5dfb":function(e,t,n){"use strict";var r=n("0c59"),o=n.n(r);o.a},"6e4e":function(e,t,n){"use strict";var r=n("d271"),o=n.n(r);o.a},"9da3":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-alert",{attrs:{show:e.showError,variant:"danger"}},[e._v("There was an error upgrading your account. Please try again - you will not be charged twice.")]),n("b-button",{ref:"btn",attrs:{variant:"success"},on:{click:function(t){return t.preventDefault(),e.open(t)}}},[e._v("Remove Ads")])],1)},o=[],i=n("9ab4"),a=n("2b0e"),u=a["a"].extend({data:function(){return{handler:null,showError:!1}},mounted:function(){var e=this,t=document.createElement("script");t.src="https://checkout.stripe.com/checkout.js",t.onload=function(){e.handler=StripeCheckout.configure({key:"pk_test_QFyYavGnzjs8kSHLHL1AKW0N",image:"https://stripe.com/img/documentation/checkout/marketplace.png",source:function(t){return e.upgrade(t.id,t.owner.email)}})},this.$refs.btn.appendChild(t)},methods:{open:function(){this.handler.open({name:"OnlineCheckersPlatform",description:"Remove Ads",amount:50})},upgrade:function(e,t){return i["a"](this,void 0,void 0,function(){var n;return i["b"](this,function(r){switch(r.label){case 0:return[4,this.$http.post("/user/upgrade",{stripeEmail:t,stripeToken:e})];case 1:return n=r.sent().isSuccess,n?(this.$root.$data.user.isPremium=!0,this.showError=!1):this.showError=!0,[2]}})})}}}),s=u,c=n("2877"),p=Object(c["a"])(s,r,o,!1,null,null,null);p.options.__file="Upgrade.vue";t["a"]=p.exports},bafe:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);var r=n("bc3a"),o=n.n(r),i=n("9f7b"),a=(n("2dd8"),n("f9e3"),n("2b0e")),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-container",[n("router-view"),e.$user&&e.$user.isPremium?e._e():n("div",{staticClass:"ad"},[n("h1",{attrs:{id:"sampleAd"}},[e._v("This is an ad. Upgrade now")])])],1)},s=[],c=a["a"].extend({name:"App"}),p=c,l=(n("5dfb"),n("2877")),d=Object(l["a"])(p,u,s,!1,null,"08a9b888",null);d.options.__file="App.vue";var f=d.exports,h=n("8c4f"),m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("h1",[e._v("Welcome to Checkers")]),r("sign-in"),e.$user?r("b-container",[e.$user.isPremium?e._e():r("b-row",[r("b-col",[r("upgrade")],1)],1),r("b-row",[r("b-col",[r("b-button",{attrs:{to:"/game",size:"lg",variant:"primary"}},[e._v("Create A Game Room")])],1)],1),r("b-row",[r("b-col",[r("b-button",{attrs:{to:"/find",size:"lg",variant:"primary"}},[e._v("Find A Game Room")])],1)],1),r("b-row",[r("b-col",[r("b-button",{attrs:{to:"/account",size:"lg",variant:"primary"}},[e._v("Account")])],1)],1)],1):e._e(),r("img",{attrs:{id:"StartScreen",src:n("472a"),alt:"Start Screen"}})],1)},v=[],g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.$user?[n("h1",[e._v("Welcome, "+e._s(e.$user.name)+"!")]),n("b-container",[n("b-row",[n("b-col",[n("b-button",{on:{click:e.onSignedOut}},[e._v("Sign Out")])],1)],1)],1)]:[n("b-row",[n("b-col",[e.$production?e._e():n("dev-sign-in")],1)],1),n("b-row",{staticClass:"my-3"},[n("b-col",[n("google-sign-in")],1)],1)]],2)},b=[],_=n("9ab4"),$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-form",{ref:"form",attrs:{inline:"",novalidate:"",validated:e.validated}},[n("b-form-input",{staticClass:"mr-2",attrs:{placeholder:"User ID",required:""},model:{value:e.id,callback:function(t){e.id=t},expression:"id"}}),n("b-button",{staticClass:"mx-2",attrs:{variant:"primary"},on:{click:e.submit}},[e._v("Sign In")])],1)},y=[],w=a["a"].extend({data:function(){return{id:"",isPremium:!1,validated:!1}},methods:{submit:function(){return _["a"](this,void 0,Promise,function(){var e,t,n,r,o=this;return _["b"](this,function(i){switch(i.label){case 0:return this.$refs.form.checkValidity()?[4,this.$http.post("/auth/local",{id:this.id})]:(this.validated=!0,[2]);case 1:return i.sent(),[4,this.$http.get("/user")];case 2:return e=i.sent().data,t=e.userId,n=e.isPremium,r=e.name,this.$user={id:t,isPremium:n,name:r,socialSignOut:function(){return _["a"](o,void 0,void 0,function(){return _["b"](this,function(e){return[2,null]})})}},[2]}})})}}}),S=w,j=(n("33d4"),Object(l["a"])(S,$,y,!1,null,"3cbe8a0a",null));j.options.__file="DevSignIn.vue";var k=j.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:e.elementId}})},E=[],x=0,P=a["a"].extend({name:"GoogleSignIn",data:function(){return{uid:x++}},computed:{elementId:function(){return"google-signin-"+this.uid}},mounted:function(){var e=this;gapi.signin2.render(this.elementId,{onfailure:function(){return e.$emit("signInFailed")},onsuccess:function(t){return e.signIn(t)}})},methods:{signIn:function(e){return _["a"](this,void 0,Promise,function(){var t,n,r,o,i,a,u,s,c=this;return _["b"](this,function(p){switch(p.label){case 0:return t=e.getAuthResponse().id_token,[4,this.$http.post("/auth/google",{token:t},{validateStatus:function(e){return e>=200&&e<300}})];case 1:return n=p.sent().isError,n?(console.error("error authenticating with google"),[2]):[4,this.$http.get("/user")];case 2:return r=p.sent(),o=r.data,i=r.isError,i?(console.error("error retrieving user data"),[2]):(a=o.userId,u=o.isPremium,s=o.name,this.$user={id:a,isPremium:u,name:s,socialSignOut:function(){return _["a"](c,void 0,void 0,function(){return _["b"](this,function(e){return gapi.auth2.getAuthInstance().signOut(),[2]})})}},[2])}})})}}}),I=P,C=(n("6e4e"),Object(l["a"])(I,O,E,!1,null,"05222d8a",null));C.options.__file="GoogleSignIn.vue";var A=C.exports,T=a["a"].extend({components:{DevSignIn:k,GoogleSignIn:A},methods:{onSignedOut:function(){return _["a"](this,void 0,Promise,function(){var e;return _["b"](this,function(t){switch(t.label){case 0:return this.$user&&this.$user.socialSignOut?[4,this.$user.socialSignOut()]:[3,2];case 1:t.sent(),t.label=2;case 2:return[4,this.$http.delete("/auth")];case 3:return e=t.sent(),e.isError?(console.error(e),[2]):(this.$user=null,this.$emit("signedOut"),[2])}})})}}}),G=T,R=(n("3e49"),Object(l["a"])(G,g,b,!1,null,"6427018e",null));R.options.__file="SignIn.vue";var M=R.exports,U=n("9da3"),L=a["a"].extend({name:"home",components:{SignIn:M,Upgrade:U["a"]}}),q=L,N=(n("ef92"),Object(l["a"])(q,m,v,!1,null,"40f78a9b",null));N.options.__file="Home.vue";var z=N.exports,B=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.$user?n(e.component,{tag:"component"}):n("sign-in")},D=[],F=a["a"].extend({name:"UserGuard",props:{component:Function},components:{SignIn:M},created:function(){return _["a"](this,void 0,void 0,function(){var e,t,n,r;return _["b"](this,function(o){switch(o.label){case 0:return this.$user?[3,2]:[4,this.$http.get("/user")];case 1:e=o.sent(),e.isSuccess&&e.data&&(t=e.data,n=t.id,r=t.name,this.$user={id:n,name:r}),o.label=2;case 2:return[2]}})})}}),H=F,W=Object(l["a"])(H,B,D,!1,null,null,null);W.options.__file="UserGuard.vue";var J=W.exports;a["a"].use(h["a"]);var X=new h["a"]({base:"/",routes:[{path:"/",name:"home",component:z},{path:"/find",component:J,props:{component:function(){return n.e("app.find").then(n.bind(null,"4b19"))}}},{path:"/room",component:J,props:{component:function(){return n.e("app.room").then(n.bind(null,"a899"))}}},{path:"/join/:token",component:function(){return n.e("app.join").then(n.bind(null,"e636"))}},{path:"/account",name:"account",component:J,props:{component:function(){return n.e("app.account").then(n.bind(null,"8266"))}}},{path:"*",redirect:"/"}]});n.d(t,"httpClient",function(){return K}),a["a"].use(i["a"]),a["a"].config.productionTip=!1;var K=o.a.create({baseURL:"https://api-onlinecheckersplatform.us-east-2.elasticbeanstalk.com",withCredentials:!0,headers:{"X-Requested-With":"XMLHttpRequest"},validateStatus:function(){return!0}});K.interceptors.response.use(function(e){return e.isSuccess=e.status>=200&&e.status<300,e.isError=e.status>=400,e},function(e){return Promise.reject(e)}),a["a"].prototype.$http=K,a["a"].prototype.$production=!0,Object.defineProperty(a["a"].prototype,"$user",{get:function(){return this.$root.$data.user},set:function(e){this.$root.$data.user=e}}),new a["a"]({data:{user:null},router:X,render:function(e){return e(f)}}).$mount("#app")},d271:function(e,t,n){},d4fa:function(e,t,n){},ef92:function(e,t,n){"use strict";var r=n("bafe"),o=n.n(r);o.a}});
//# sourceMappingURL=app.84115ba3.js.map