(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app.room"],{"1e94":function(t,e,n){},8636:function(t,e,n){"use strict";var o=n("1e94"),i=n.n(o);i.a},a899:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",[n("h1",{staticClass:"center"},[t._v("Room")]),n("div",{staticClass:"leave"},[n("b-btn",{attrs:{variant:"danger"},on:{click:t.leave}},[t._v("Leave")])],1),t.room?["waiting"===t.room.state.name?n("waiting-room",{attrs:{state:t.room.state,update:t.updateRoom}}):"deciding"===t.room.state.name?n("deciding-room",{attrs:{room:t.room,update:t.updateRoom}}):n("game-room",{attrs:{room:t.room,update:t.updateRoom}})]:t._e()],2)},i=[],r=n("9ab4"),a=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Against "+t._s(t.otherName))]),n("h2",[t._v("Vote who will go first")]),t.winner?n("h3",[t._v(t._s(t.winner)+" won the last game!")]):t._e(),t.otherDecisionDisplay?n("p",[n("span",{staticClass:"name"},[t._v(t._s(t.otherName))]),t._v(" votes that\n    "),n("span",{staticClass:"choice"},[t._v(t._s(t.otherDecisionDisplay))]),t._v(" will go first.\n  ")]):t._e(),n("b-btn-group",[n("b-btn",{attrs:{variant:"success",pressed:t.myDecision===(t.isChallenger?"challenger":"opponent")},on:{click:function(e){t.decide(t.isChallenger?"challenger":"opponent")}}},[t._v(t._s(t.$user.name))]),n("b-btn",{attrs:{variant:"info",pressed:t.myDecision===(t.isChallenger?"opponent":"challenger")},on:{click:function(e){t.decide(t.isChallenger?"opponent":"challenger")}}},[t._v(t._s(t.otherName))]),n("b-btn",{attrs:{variant:"primary",pressed:"random"===t.myDecision},on:{click:function(e){t.decide("random")}}},[t._v("Random")])],1)],1)},l=[],c=a["a"].extend({name:"deciding-room",props:{room:{type:Object},update:{type:Function}},computed:{isChallenger:function(){return this.$user.id===this.room.challenger.id},myDecision:function(){return this.isChallenger?this.room.state.challengerDecision:this.room.state.opponentDecision},otherDecisionDisplay:function(){var t=this.isChallenger?this.room.state.opponentDecision:this.room.state.challengerDecision;return"challenger"===t?this.isChallenger?"you":"they":"opponent"===t?this.isChallenger?"they":"you":"random"===t?"a random player":null},otherName:function(){return this.isChallenger?this.room.state.opponent.name:this.room.challenger.name},winner:function(){return this.room.state.previousWinnerId===this.room.challenger.id?this.room.challenger.name:this.room.state.previousWinnerId===this.room.state.opponent.id?this.room.state.opponent.name:null}},methods:{decide:function(t){return r["a"](this,void 0,void 0,function(){var e;return r["b"](this,function(n){switch(n.label){case 0:return[4,this.$http.post("/room/decision",{decision:t})];case 1:return e=n.sent(),e.isSuccess?this.update():console.error(e),[2]}})})}}}),u=c,h=n("2877"),d=Object(h["a"])(u,s,l,!1,null,null,null);d.options.__file="DecidingRoom.vue";var m=d.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"info"},[n("h2",[t._v("Against "+t._s(t.otherName))]),n("dl",[n("dt",[t._v("Dark Player")]),n("dd",{domProps:{textContent:t._s(t.darkPlayer)}}),n("dt",[t._v("Light Player")]),n("dd",{domProps:{textContent:t._s(t.lightPlayer)}}),n("dt",[t._v("Current Player")]),n("dd",{domProps:{textContent:t._s(t.currentPlayer)}})])]),n("table",{staticClass:"center"},[n("tbody",t._l(t.board,function(e,o){return n("tr",{key:o},t._l(e,function(e,i){return n("td",{key:i,class:t.getClassFor(o,i),on:{dragenter:function(t){t.preventDefault()},dragover:function(t){t.preventDefault()},drop:function(e){t.drop(o,i)}}},[n("div",e?{class:[e,"piece"],attrs:{draggable:"true"},on:{dragstart:function(e){t.dragstart(e,o,i)}}}:{class:["piece",t.getClassFor(o,i)]},[t._v(" ")])])}))}))])])},v=[],g=a["a"].extend({name:"GameRoom",props:{room:Object,update:Function},data:function(){return{dragging:null,movingPiece:null}},computed:{board:function(){return this.room.state.game.board},currentPlayer:function(){return"D"===this.room.state.game.currentColor?this.darkPlayer:this.lightPlayer},darkPlayer:function(){return this.room.challenger.id===this.room.state.game.darkId?this.room.challenger.name:this.room.state.opponent.name},lightPlayer:function(){return this.room.challenger.id===this.room.state.game.lightId?this.room.challenger.name:this.room.state.opponent.name},isChallenger:function(){return this.$user.id===this.room.challenger.id},otherName:function(){return this.isChallenger?this.room.state.opponent.name:this.room.challenger.name}},methods:{dragEnter:function(t,e){},dragstart:function(t,e,n){t.dataTransfer.dropEffect="move",t.dataTransfer.setData("text/plain",""),this.dragging={rowIndex:e,columnIndex:n},this.movingPiece=this.board[e][n],console.log(this.movingPiece),this.board[e][n]=null,console.log(this.board[e][n]),this.setCell(null,e,n)},drop:function(t,e){return r["a"](this,void 0,Promise,function(){var n;return r["b"](this,function(o){switch(o.label){case 0:return[4,this.$http.post("/room/move",{from:{row:this.dragging.rowIndex,column:this.dragging.columnIndex},to:{row:t,column:e}})];case 1:return n=o.sent(),n.isError?(console.error(n),[2]):(this.update(),console.log("Dropped at (%d, %d)",t,e),this.board[t][e]=this.movingPiece,console.log(this.board),this.setCell(this.movingPiece,t,e),this.movingPiece=null,[2])}})})},getClassFor:function(t,e){return t%2===0?e%2===0?"light":"dark":e%2===0?"dark":"light"},setCell:function(t,e,n){var o=this.board[e].slice(0);o[n]=t,this.$set(this.board,e,o)}}}),f=g,b=(n("8636"),Object(h["a"])(f,p,v,!1,null,"a80bd5de",null));b.options.__file="GameRoom.vue";var _=b.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",{staticClass:"center"},[t._v("Waiting Room")]),t.state.invitationToken?n("div",[t.emailed?n("p",[t._v("Your invitation was sent an email with an invitation link.")]):t._e(),n("p",[t._v("\n      Your opponent may\n      join using the following link:\n    ")]),n("p",[n("a",{attrs:{href:t.invitationLink},domProps:{textContent:t._s(t.invitationLink)}})]),n("b-button",{on:{click:t.regenerate}},[t._v(t._s(t.emailed?"Uninvite":"Regenerate Link"))])],1):t._e(),t.state.public?n("p",[t._v("\n    Your room is\n    "),n("strong",[t._v("public")]),t._v(", and anyone may join.\n  ")]):n("p",[t._v("\n    Your room is\n    "),n("strong",[t._v("private")]),t._v(", and you must invite someone to join.\n  ")]),t.public_?n("b-button",{staticClass:"my-2",attrs:{variant:"success"},on:{click:t.privatize}},[t._v("Privatize")]):n("b-button",{staticClass:"my-2",attrs:{variant:"success"},on:{click:t.publish}},[t._v("Publish")]),t.emailed?t._e():n("b-form",{ref:"form",attrs:{inline:"",novalidate:"",validated:t.validated},on:{submit:t.invite}},[n("b-form-input",{attrs:{placeholder:"example@gmail.com",type:"email",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),n("b-button",{staticClass:"mx-2",attrs:{type:"submit",variant:"primary"}},[t._v("Invite by email")])],1)],1)},w=[],C=a["a"].extend({name:"waiting-room",props:{state:{type:Object},update:{type:Function}},computed:{invitationLink:function(){return window.location.origin+"/#/join/"+this.state.invitationToken},public_:function(){return this.state.public}},data:function(){return{email:"",emailed:!1,validated:!1}},methods:{invite:function(){return r["a"](this,void 0,void 0,function(){var t;return r["b"](this,function(e){switch(e.label){case 0:return this.$refs.form.checkValidity()?[4,this.$http.post("/room/invite",{email:this.email})]:(this.validated=!0,console.log("invite invalid"),[2]);case 1:return t=e.sent(),t.isError&&console.error(t),this.emailed=!0,[2]}})})},regenerate:function(){return r["a"](this,void 0,void 0,function(){return r["b"](this,function(t){switch(t.label){case 0:return this.emailed=!1,[4,this.$http.post("/room/invite")];case 1:return t.sent(),[2]}})})},publish:function(){return r["a"](this,void 0,void 0,function(){return r["b"](this,function(t){switch(t.label){case 0:return[4,this.$http.post("/room/publish")];case 1:return t.sent(),this.update(),[2]}})})},privatize:function(){return r["a"](this,void 0,void 0,function(){return r["b"](this,function(t){switch(t.label){case 0:return[4,this.$http.post("/room/privatize")];case 1:return t.sent(),this.update(),[2]}})})}}}),k=C,P=Object(h["a"])(k,y,w,!1,null,null,null);P.options.__file="WaitingRoom.vue";var D=P.exports,x=a["a"].extend({name:"Room",components:{DecidingRoom:m,GameRoom:_,WaitingRoom:D},data:function(){return{heartbeat:null,room:null}},destroyed:function(){clearInterval(this.heartbeat)},created:function(){return r["a"](this,void 0,void 0,function(){var t=this;return r["b"](this,function(e){switch(e.label){case 0:return this.heartbeat=setInterval(function(){return t.updateRoom()},500),[4,this.updateRoom()];case 1:return e.sent(),[2]}})})},methods:{leave:function(){return r["a"](this,void 0,void 0,function(){return r["b"](this,function(t){switch(t.label){case 0:return[4,this.$http.post("/room/leave")];case 1:return t.sent(),this.$router.push("/"),[2]}})})},updateRoom:function(){return r["a"](this,void 0,void 0,function(){var t;return r["b"](this,function(e){switch(e.label){case 0:return[4,this.$http.get("/room")];case 1:return t=e.sent(),200!==t.status?[3,2]:(this.room=t.data,[3,5]);case 2:return 404!==t.status?[3,4]:[4,this.$http.post("/room/create")];case 3:return t=e.sent(),t.isError&&(console.error(t),clearInterval(this.heartbeat)),[3,5];case 4:console.error(t),clearInterval(this.heartbeat),e.label=5;case 5:return[2]}})})}}}),R=x,$=(n("eff9"),Object(h["a"])(R,o,i,!1,null,"2a73e33c",null));$.options.__file="Room.vue";e["default"]=$.exports},e447:function(t,e,n){},eff9:function(t,e,n){"use strict";var o=n("e447"),i=n.n(o);i.a}}]);
//# sourceMappingURL=app.room.c2b9d314.js.map