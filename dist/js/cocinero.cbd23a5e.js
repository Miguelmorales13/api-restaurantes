(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["cocinero"],{"206d":function(e,t,a){"use strict";var n=a("5485"),r=a.n(n);r.a},"239f":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"Chefs"}},[a("v-toolbar",{attrs:{color:"primary",dark:""}},[a("v-toolbar-title",[e._v(" "+e._s(e.app)+" "),a("span",[e._v("("+e._s(e.shopActive)+")")])]),a("v-spacer"),a("v-menu",{attrs:{bottom:"",left:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[a("v-btn",e._g({attrs:{dark:"",icon:""}},n),[a("v-icon",[e._v("more_vert")])],1)]}}])},[a("v-list",[a("v-list-tile",{on:{click:e.logout}},[a("v-list-tile-title",[e._v("Cerrar sesión")])],1)],1)],1)],1),a("v-container",{attrs:{fluid:"","grid-list-lg":""}},e._l(e.orders,function(t,n){return a("v-card",{key:n,staticClass:"mb-2"},[a("v-card-title",[a("span",[e._v("\n      Mesa. "+e._s(t.order._table.number)+" \n      ")]),a("v-spacer"),a("v-chip",{attrs:{color:!0===t.new?"orange":"indigo","text-color":"white"}},[e._v("\n          "+e._s(!0===t.new?"Nuevo":"Agregar a mesa")+"\n          "),a("v-icon",{attrs:{right:""}},[e._v(e._s(!0===t.new?"star":"add"))])],1)],1),a("v-container",{attrs:{fluid:"","grid-list-lg":""}},[a("v-layout",{attrs:{row:"",wrap:""}},e._l(t.order.menu,function(t){return a("v-flex",{key:t.plate,attrs:{"text-xs-center":"",xs12:"",sm6:""}},[a("h3",[e._v("\n         "+e._s(e._f("nameMenu")(t.plate,e.menus))+"   |    "+e._s(t.cantidad)+" \n        ")])])}),1)],1),a("v-card-actions",[a("v-btn",{attrs:{flat:""},on:{click:function(a){return e.setDone(t.order)}}},[e._v("Listo")])],1)],1)}),1)],1)},r=[],s=a("75fc"),o=(a("7f7f"),a("7514"),a("cebc")),i=a("2f62"),c=a("8055"),d=a("fc3f"),l=a("7df4"),u={name:"Chefs",computed:Object(o["a"])({},Object(i["c"])("orders",{orders:"getListComplete"}),Object(i["e"])("menus",["menus"])),data:function(){return{io:c(d["d"]),app:d["a"],shopActive:Object(l["a"])("_shop.name"),getAnyUser:l["a"]}},mounted:function(){var e=this;window.Notification&&"denied"!==Notification.permission&&Notification.requestPermission(function(e){console.log(e)}),this.io.on("menus/".concat(this.getAnyUser("_shop._id"),"/add"),this.addM),this.io.on("menus/".concat(this.getAnyUser("_shop._id"),"/update"),this.updateM),this.io.on("menus/delete",this.deleteM),this.io.on("orders/".concat(this.getAnyUser("_shop._id"),"/add"),function(t){e.addO(t),Object(d["c"])("Nueva orden",{body:"Nueva orden para la mesa ".concat(t._table.number),vibrate:[100,50,100],lang:"es"})}),this.io.on("orders/".concat(this.getAnyUser("_shop._id"),"/update"),function(t){"Terminada"===t.status?e.deleteO(t):(e.updateO(t),Object(d["c"])("Nueva orden",{body:"Agregar a la mesa ".concat(t._table.number),vibrate:[100,50,100],lang:"es"}))}),this.io.on("orders/delete",this.deleteO),this.getOrders(),this.getMenus()},methods:Object(o["a"])({logout:function(){Object(l["f"])(),this.$router.push({name:"login"})}},Object(i["d"])("orders",{addO:"ADD_CHEF",setOrder:"SET",setDone:"SET_DONE_CHEF",updateO:"UPDATE_CHEF",deleteO:"REMOVE_CHEF"}),Object(i["d"])("menus",{addM:"ADD",updateM:"UPDATE",deleteM:"REMOVE"}),Object(i["b"])("menus",{getMenus:"getForce"}),Object(i["b"])("orders",{getOrders:"getInProcessChef"})),filters:{nameMenu:function(e){if(!e)return"";for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];var r=a[0].find(function(t){return t._id===e});return r&&r.name||(console.log("menu",r),console.log("args",a[0]),console.log("value",e)),r&&r.name?r.name:""},orderByUpdated:function(e){return Object(s["a"])(e)}}},f=u,v=a("2877"),b=a("6544"),p=a.n(b),m=a("8336"),h=a("b0af"),g=a("99d9"),_=a("12b2"),O=a("cc20"),w=a("a523"),j=a("0e8f"),x=a("132d"),V=a("a722"),y=a("8860"),k=a("ba95"),C=a("5d23"),A=a("e449"),E=a("9910"),M=a("71d9"),T=a("2a7f"),U=Object(v["a"])(f,n,r,!1,null,"4df89ba6",null);t["default"]=U.exports;p()(U,{VBtn:m["a"],VCard:h["a"],VCardActions:g["a"],VCardTitle:_["a"],VChip:O["a"],VContainer:w["a"],VFlex:j["a"],VIcon:x["a"],VLayout:V["a"],VList:y["a"],VListTile:k["a"],VListTileTitle:C["c"],VMenu:A["a"],VSpacer:E["a"],VToolbar:M["a"],VToolbarTitle:T["b"]})},5485:function(e,t,a){},a55b:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"login"}},[a("v-layout",{attrs:{"align-center":"","justify-center":"",row:"","fill-height":""}},[a("v-flex",{attrs:{xs12:"",sm8:"",md3:""}},[a("h5",{staticClass:"text-xs-center"},[e._v(e._s(e.app))]),a("v-form",{ref:"form",attrs:{"lazy-validation":""},on:{submit:e.onSubmit},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-text-field",{attrs:{rules:e.validUser,label:"Usuario",required:""},model:{value:e.login.user,callback:function(t){e.$set(e.login,"user",t)},expression:"login.user"}}),a("v-text-field",{attrs:{rules:e.validPassword,label:"Contraseña",type:"password",required:""},model:{value:e.login.password,callback:function(t){e.$set(e.login,"password",t)},expression:"login.password"}}),a("v-btn",{attrs:{disabled:!e.valid,block:"",color:"success",type:"submit"}},[e._v("Iniciar sesion")])],1)],1)],1)],1)},r=[],s=(a("96cf"),a("3b8d")),o=a("ac5a"),i=a("fc3f"),c=a("7df4"),d=a("854a"),l=a.n(d),u={name:"login",data:function(){return{app:i["a"],valid:!0,login:{user:"",password:""},validUser:[function(e){return!!e||"Usuario requerido"}],validPassword:[function(e){return!!e||"Contraseña requerida"}]}},methods:{validate:function(){this.$refs.form.validate()&&(this.snackbar=!0)},onSubmit:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(t){var a,n=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,this.valid){e.next=4;break}return e.abrupt("return",l.a.info("verifica tus datos"));case 4:return e.next=6,Object(o["c"])("auth",this.login);case 6:a=e.sent,Object(c["e"])(a.data.token,function(){l.a.success("Iniciando sesion"),"Super administrador"==Object(c["a"])("rol")||"Administrador"==Object(c["a"])("rol")?n.$router.push({name:"inicioAdmin"}):"Mesero"==Object(c["a"])("rol")?n.$router.push({name:"mesero"}):n.$router.push({name:"cocinero"})},function(){return l.a.info("credeciales invalidas")}),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](1),Object(i["b"])(e.t0);case 13:case"end":return e.stop()}},e,this,[[1,10]])}));function t(t){return e.apply(this,arguments)}return t}()}},f=u,v=(a("206d"),a("2877")),b=a("6544"),p=a.n(b),m=a("8336"),h=a("0e8f"),g=a("4bd4"),_=a("a722"),O=a("2677"),w=Object(v["a"])(f,n,r,!1,null,null,null);t["default"]=w.exports;p()(w,{VBtn:m["a"],VFlex:h["a"],VForm:g["a"],VLayout:_["a"],VTextField:O["a"]})}}]);
//# sourceMappingURL=cocinero.cbd23a5e.js.map