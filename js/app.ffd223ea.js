(function(e){function t(t){for(var r,a,s=t[0],u=t[1],c=t[2],l=0,f=[];l<s.length;l++)a=s[l],i[a]&&f.push(i[a][0]),i[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(f.length)f.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==i[u]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},i={app:0},o=[];function a(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"26c6c1e7"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=i[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=i[e]=[t,r]});t.push(n[2]=r);var o,u=document.getElementsByTagName("head")[0],c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=a(e),o=function(t){c.onerror=c.onload=null,clearTimeout(l);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");a.type=r,a.request=o,n[1](a)}i[e]=void 0}};var l=setTimeout(function(){o({type:"timeout",target:c})},12e4);c.onerror=c.onload=o,u.appendChild(c)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var d=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"09d1":function(e,t,n){"use strict";var r=n("e049"),i=n.n(r);i.a},"169a":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAB6CAYAAAB9RzejAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAASPSURBVHja7J3djuMgDIVjK+8d5cnZi51ZrSoaCPgXjqVejKZtAh/n2ASSUinlyBjXdbmd+H3fdCQNygbcE/S3PhwYMG4newLudJQZ+FsDHwVspZjrunrhE4ArwLa2xv+P14AfVvVnFtCeeW8l+K5F2xPsaICFLN+90ncB3lJ1Rtij8K3BmwLfAfQgfOoYGHlyeE+eXhV2rW2VAVCs8jtHUPXKsF8M7pIeeKso2w10BOhsDXt30N7Q2Ro2whc6A/Ze0Bmw94LOgL0XdJELL4AtnhafBgW5Agdsc+j00iHkLB2wze192uLZ8EQRA30pnddZUt2Aba52G+CAHQJ6MVU4IkQUdeBQd25rZ8Dey9p5BjYin7Wz8GhDBLd2HlU3YOe0dgbsvQLTsoVU3lNnNRdPPr8E6o4XlYUW+saKARuWjli4amfMu/eal7PGKELA0l2DiLpeXudhaeunVbHWaliEZ80Qkeh59ML8fZ9wH1TvVzutOtKj0SPqkYA+qlrpAVfbF8faxdrbxlvZqwaw2c/Ofl5kE+OMnWftuBl38B5wrWqdI6pEwhozuUKYKn1U3ZKN9+zIjMduMWPN/O3ReKjbeB6eqfGbtKdUgeNS6h7BGtU5lOYbT+ywWrbZQDxrV2OwULJc/LvMyj9/FKhp8xyOWDOPA/juCkf+XjqPQ+HTvZjsN2MAfDGgLbfm1TpI8viebdE6NkNt88dK5AKFs4PROr7nnF+z/xjqPkINDu12chZAUdfEM8GuAn/zyzyRoWc7npGD0WnRkFWvgc+2yzpN3fdtk8NLKWKNa3Wy9OD69n0zx5Hsj6eoufV5/F02K1bgJTpNesP+TuFapc9A23U368xpH8dxcObFEquOz1aJLzEPjzIAsheg7sC9btzboSoPq/AM0LMp+9v1FH7zZuTzhav0jNAjh7Od05JFGyJRlY4LKZiWwc4VgRM6Zp14qr949IOIxJaOvehLB4XO4avZerT28LeRgFgvfx+H0YP5EH7xma754x+o1hO349uD8jEP371Kh8r3UHdV4ZUfToEsFgoUbYPqrW2kVHoM9vTcuyeHUwSV/27njfb6BtVq+/HbqRiKNhRtcVWOkCnWHoHf9129vg7oayu8OloAPa+6e3M4rrFvpHDk8zzRJczhefh1XVhHD2TnvSx4ZgRB6etaOvJ58mJtFDjyeTzYqgpXOQmEfrE2CxzWnszKJRQOa09k5aKWDugusMkDOKZqCfK2tMKRz4PnbQ1LRz4PnLfVcjigx7VyDeDI54Jikbby3zgVRmCpQcdCSwxXJOlNdz8nXf1SQB+GTVJ9Rxq7LAFdDrR0n2nuWiXk9WHYpAFbG/hjMbc7+AZstbC686T6iO4dCzov0JYKbzZoF8V7w1Yr2joa/HjQ1RTfU5hZ9QU539a6LPgOx+pStXQfeN89Sk/gs+X4F2nJbcEpyu3CacFngOxq6Z2d2DwpT/hvCsz7vkMtH0d9IAC1cvzoRnwLyEfgPQLRnwDRBP8EZHYQrAI5vKXPVPZOAzLNTCPjM14+O7lEgxw5VnioTw1AAeR6/BkAAynQvY6KyH4AAAAASUVORK5CYII="},"1bb8":function(e,t,n){},"1f52":function(e,t,n){},2990:function(e,t,n){"use strict";var r=n("3c8a"),i=n.n(r);i.a},"30d0":function(e,t,n){},"3c8a":function(e,t,n){},"472a":function(e,t,n){e.exports=n.p+"img/CheckersMainMenuGraphic.a4098a9a.png"},5892:function(e,t,n){},6259:function(e,t,n){},"7a30":function(e,t,n){e.exports=n.p+"img/Playspace.c8d3511f.png"},"82e7":function(e,t,n){},"8f00":function(e,t,n){"use strict";var r=n("82e7"),i=n.n(r);i.a},"8f2a":function(e,t,n){"use strict";var r=n("6259"),i=n.n(r);i.a},"9dfc":function(e,t,n){"use strict";var r=n("e1ba"),i=n.n(r);i.a},a75a:function(e,t,n){"use strict";var r=n("1bb8"),i=n.n(r);i.a},c3ae:function(e,t,n){"use strict";var r=n("f915"),i=n.n(r);i.a},cd49:function(e,t,n){"use strict";n.r(t);var r=n("bc3a"),i=n.n(r),o=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}}),n("router-view")],1)},s=[],u=o["a"].extend({}),c=u,l=(n("8f00"),n("2877")),d=Object(l["a"])(c,a,s,!1,null,"76dc1bce",null);d.options.__file="App.vue";var f=d.exports,g=n("8c4f"),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Against "+e._s(e.$route.query.opponent))]),n("HelloWorld",{attrs:{msg:"Guess a Digit (0 - 9)"}}),n("form",{staticClass:"container",on:{submit:e.submit}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.digit,expression:"digit"}],attrs:{id:"Enter",type:"number",min:"0",max:"9"},domProps:{value:e.digit},on:{input:function(t){t.target.composing||(e.digit=t.target.value)}}})]),n("p",[e._v(e._s(e.message))])],1)},h=[],v=n("9ab4"),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))])])},b=[],A=o["a"].extend({name:"HelloWorld",props:{msg:String}}),O=A,w=(n("2990"),Object(l["a"])(O,m,b,!1,null,"3ae9c146",null));w.options.__file="HelloWorld.vue";var _=w.exports,y=function(e){return new Promise(function(t){return setTimeout(t,e)})},j=o["a"].extend({name:"game-screen",components:{HelloWorld:_},data:function(){return{alive:!0,digit:null,message:""}},beforeDestroy:function(){this.alive=!1},mounted:function(){return v["a"](this,void 0,void 0,function(){var e;return v["b"](this,function(t){switch(t.label){case 0:return this.alive?[4,this.$http.get("/game/waiting")]:[3,3];case 1:return e=t.sent(),204===e.status?(this.$router.push("/lose"),[2]):[4,y(200)];case 2:return t.sent(),[3,0];case 3:return[2]}})})},methods:{submit:function(){return v["a"](this,void 0,void 0,function(){var e,t;return v["b"](this,function(n){switch(n.label){case 0:return[4,this.$http.post("/game/guess",{digit:this.digit})];case 1:return e=n.sent(),404===e.status?(this.$router.push("/lose"),[2]):(t=e.data.correct,t?(this.$router.push("/win"),this.$destroy(),[3,4]):[3,2]);case 2:return this.message="Try again!",[4,y(300)];case 3:n.sent(),this.message="",n.label=4;case 4:return[2]}})})}}}),x=j,W=(n("09d1"),Object(l["a"])(x,p,h,!1,null,"14aeb839",null));W.options.__file="Game.vue";var H=W.exports,P=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("HelloWorld",{attrs:{msg:"Welcome to Checkers"}}),r("sign-in",{on:{signedIn:e.signedIn,signedOut:e.signedOut}}),e.ready?r("button",{attrs:{type:"button"},on:{click:e.startGame}},[e._v("Start Game")]):e._e(),r("img",{attrs:{id:"StartScreen",src:n("472a"),alt:"Start Screen"}})],1)},I=[],S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.signedOut?n("google-sign-in",{on:{signedIn:e.onSignedIn}}):[n("div",{staticClass:"center"},[e._v("Welcome, "+e._s(e.user)+"!")]),n("google-sign-out")]],2)},k=[],E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:e.elementId}})},L=[],M=0,R=o["a"].extend({data:function(){return{uid:M++}},computed:{elementId:function(){return"google-signin-"+this.uid}},mounted:function(){var e=this;gapi.signin2.render(this.elementId,{onfailure:function(){return e.$emit("signInFailed")},onsuccess:function(t){return e.signIn(t)}})},methods:{signIn:function(e){return v["a"](this,void 0,Promise,function(){var t,n;return v["b"](this,function(r){switch(r.label){case 0:this.$emit("signInStarted"),t=e.getAuthResponse().id_token,r.label=1;case 1:return r.trys.push([1,3,,4]),[4,this.$http.post("/auth/google",{token:t})];case 2:return r.sent(),this.$emit("signedIn",e),[3,4];case 3:return n=r.sent(),this.$emit("signInFailed"),console.error("Error authenticating with google",n),[3,4];case 4:return[2]}})})}}}),B=R,C=(n("8f2a"),Object(l["a"])(B,E,L,!1,null,"6ba4e4b3",null));C.options.__file="GoogleSignIn.vue";var K=C.exports,z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{on:{click:e.signOut}},[e._v("Sign Out")])},U=[],V=o["a"].extend({methods:{signOut:function(){gapi.auth2.getAuthInstance().signOut()}}}),$=V,T=(n("e8c2"),Object(l["a"])($,z,U,!1,null,"feaade54",null));T.options.__file="GoogleSignOut.vue";var N=T.exports,Z=o["a"].extend({components:{GoogleSignIn:K,GoogleSignOut:N},computed:{signedOut:function(){return null==this.user}},data:function(){return{user:null}},mounted:function(){var e=this;gapi.load("auth2",function(){var t=gapi.auth2.getAuthInstance();t.isSignedIn.listen(function(t){t||e.onSignedOut()})})},methods:{onSignedIn:function(e){console.log("signed in");var t=e.getBasicProfile();t&&(this.user=t.getName(),this.$emit("signedIn"))},onSignedOut:function(){return v["a"](this,void 0,void 0,function(){var e;return v["b"](this,function(t){switch(t.label){case 0:console.log("signed out"),this.user=null,console.log("deleting auth"),t.label=1;case 1:return t.trys.push([1,3,,4]),[4,this.$http.delete("/auth")];case 2:return t.sent(),[3,4];case 3:return e=t.sent(),console.error("Error deleting auth",e),[3,4];case 4:return this.$emit("signedOut"),[2]}})})}}}),D=Z,F=(n("dd9f"),Object(l["a"])(D,S,k,!1,null,"3fbf331d",null));F.options.__file="SignIn.vue";var G=F.exports,q=o["a"].extend({name:"home",components:{HelloWorld:_,SignIn:G},data:function(){return{ready:!1}},methods:{signedIn:function(){this.ready=!0},signedOut:function(){this.ready=!1},startGame:function(){return v["a"](this,void 0,Promise,function(){var e;return v["b"](this,function(t){switch(t.label){case 0:return[4,this.$http.post("/game/start")];case 1:return e=t.sent(),400===e.status?this.$router.push("/game"):this.$router.push("/waiting"),[2]}})})}}}),J=q,Q=(n("dc03"),Object(l["a"])(J,P,I,!1,null,"27df114e",null));Q.options.__file="Home.vue";var X=Q.exports,Y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("HelloWorld",{attrs:{msg:"BUMMER, YOU LOST"}}),r("router-link",{attrs:{id:"Back",to:"/"}},[e._v("Main Menu")]),r("img",{attrs:{id:"Background",src:n("169a")}})],1)},ee=[],te=o["a"].extend({name:"lose-screen",components:{HelloWorld:_}}),ne=te,re=(n("a75a"),Object(l["a"])(ne,Y,ee,!1,null,"3e6de560",null));re.options.__file="Lose.vue";var ie=re.exports,oe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("img",{attrs:{src:n("7a30"),alt:"Waiting Screen",id:"Play"}}),r("div",{attrs:{id:"container"}},[r("HelloWorld",{attrs:{msg:"Waiting for Opponent",id:"HelloWorld"}})],1),r("router-link",{attrs:{id:"continue",to:"/game"}},[e._v("Proceed")]),e._v(" |\n     "),r("router-link",{attrs:{id:"goBack",to:"/"}},[e._v("Back")])],1)},ae=[],se=o["a"].extend({name:"waiting",components:{HelloWorld:_},data:function(){return{alive:!0}},beforeDestroy:function(){this.alive=!1},mounted:function(){return v["a"](this,void 0,void 0,function(){var e;return v["b"](this,function(t){switch(t.label){case 0:return this.alive?[4,this.$http.get("/game/waiting")]:[3,3];case 1:return e=t.sent(),200===e.status?(this.$router.push({path:"/game",query:{opponent:e.data.opponent}}),[2]):[4,y(200)];case 2:return t.sent(),[3,0];case 3:return[2]}})})}}),ue=se,ce=(n("c3ae"),Object(l["a"])(ue,oe,ae,!1,null,"687b1f54",null));ce.options.__file="Waiting.vue";var le=ce.exports,de=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("HelloWorld",{attrs:{msg:"CONGRATULATIONS, YOU WON"}}),r("router-link",{attrs:{id:"Back",to:"/"}},[e._v("Main Menu")]),r("img",{attrs:{id:"Background",src:n("169a")}})],1)},fe=[],ge=o["a"].extend({name:"win-screen",components:{HelloWorld:_}}),pe=ge,he=(n("9dfc"),Object(l["a"])(pe,de,fe,!1,null,"1bc20703",null));he.options.__file="Win.vue";var ve=he.exports;o["a"].use(g["a"]);var me=new g["a"]({base:"/",routes:[{path:"/",name:"home",component:X},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/game",name:"game-screen",component:H},{path:"/waiting",name:"waiting",component:le},{path:"/win",name:"win-screen",component:ve},{path:"/lose",name:"lose-screen",component:ie}]});o["a"].config.productionTip=!1,o["a"].prototype.$http=i.a.create({baseURL:"https://api-onlinecheckersplatform.us-east-2.elasticbeanstalk.com",withCredentials:!0,headers:{"X-Requested-With":"XMLHttpRequest"},validateStatus:function(){return!0}}),new o["a"]({router:me,render:function(e){return e(f)}}).$mount("#app")},dc03:function(e,t,n){"use strict";var r=n("1f52"),i=n.n(r);i.a},dd9f:function(e,t,n){"use strict";var r=n("30d0"),i=n.n(r);i.a},e049:function(e,t,n){},e1ba:function(e,t,n){},e8c2:function(e,t,n){"use strict";var r=n("5892"),i=n.n(r);i.a},f915:function(e,t,n){}});
//# sourceMappingURL=app.ffd223ea.js.map