(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Chefs"],{"239f":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"Chefs"}},[a("v-toolbar",{attrs:{color:"primary",dark:""}},[a("v-toolbar-title",[e._v(" "+e._s(e.app)+" "),a("span",[e._v("("+e._s(e.shopActive)+")")])]),a("v-spacer"),a("v-menu",{attrs:{bottom:"",left:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[a("v-btn",e._g({attrs:{dark:"",icon:""}},n),[a("v-icon",[e._v("more_vert")])],1)]}}])},[a("v-list",[a("v-list-tile",{on:{click:e.adios}},[a("v-list-tile-title",[e._v("Cerrar sesión")])],1),a("v-list-tile",{on:{click:e.changeTheme}},[a("v-list-tile-title",[e._v("Tema: "+e._s("false"===e.theme?"Negro":"Blanco"))])],1)],1)],1)],1),a("v-container",{attrs:{fluid:"","grid-list-lg":""}},e._l(e.orders,function(t,n){return a("v-card",{key:n,staticClass:"mb-2"},[a("v-card-title",[a("span",[e._v("\n      Mesa. "+e._s(t.order._table.number)+" \n      ")]),a("v-spacer"),a("v-chip",{attrs:{color:!0===t.new?"orange":"indigo","text-color":"white"}},[e._v("\n          "+e._s(!0===t.new?"Nuevo":"Agregar a mesa")+"\n          "),a("v-icon",{attrs:{right:""}},[e._v(e._s(!0===t.new?"star":"add"))])],1)],1),a("v-container",{attrs:{fluid:"","grid-list-lg":""}},[a("v-layout",{attrs:{row:"",wrap:""}},e._l(t.order.menu,function(t){return a("v-flex",{key:t.plate,attrs:{"text-xs-center":"",xs12:"",sm6:""}},[a("h3",[e._v("\n         "+e._s(e._f("nameMenu")(t.plate,e.menus))+"   |    "+e._s(t.cantidad)+" \n        ")])])}),1)],1),a("v-card-actions",[a("v-btn",{attrs:{flat:""},on:{click:function(a){return e.setDone(t.order)}}},[e._v("Listo")])],1)],1)}),1)],1)},r=[],s=a("75fc"),i=(a("7f7f"),a("7514"),a("cebc")),o=a("2f62"),c=a("8055"),d=a("fc3f"),l=a("7df4"),u={name:"Chefs",computed:Object(i["a"])({},Object(o["c"])("orders",{orders:"getListComplete"}),Object(o["e"])(["theme"]),Object(o["e"])("menus",["menus"])),data:function(){return{io:c(d["e"]),app:d["a"],shopActive:Object(l["a"])("_shop.name"),getAnyUser:l["a"]}},mounted:function(){var e=this;window.Notification&&"denied"!==Notification.permission&&Notification.requestPermission(function(e){console.log(e)}),this.io.on("menus/".concat(this.getAnyUser("_shop._id"),"/add"),this.addM),this.io.on("menus/".concat(this.getAnyUser("_shop._id"),"/update"),this.updateM),this.io.on("menus/delete",this.deleteM),this.io.on("orders/".concat(this.getAnyUser("_shop._id"),"/add"),function(t){e.addO(t),Object(d["d"])("Nueva orden",{body:"Nueva orden para la mesa ".concat(t._table.number),vibrate:[100,50,100],lang:"es"})}),this.io.on("orders/".concat(this.getAnyUser("_shop._id"),"/update"),function(t){"Terminada"===t.status?e.deleteO(t):(e.updateO(t),Object(d["d"])("Nueva orden",{body:"Agregar a la mesa ".concat(t._table.number),vibrate:[100,50,100],lang:"es"}))}),this.io.on("orders/delete",this.deleteO),this.getOrders(),this.getMenus()},methods:Object(i["a"])({changeTheme:function(){this.setTheme("false"===this.theme)},adios:function(){Object(l["f"])(),this.$router.push({name:"login"})}},Object(o["d"])("orders",{addO:"ADD_CHEF",setOrder:"SET",setDone:"SET_DONE_CHEF",updateO:"UPDATE_CHEF",deleteO:"REMOVE_CHEF"}),Object(o["d"])("menus",{addM:"ADD",updateM:"UPDATE",deleteM:"REMOVE"}),Object(o["b"])("menus",{getMenus:"getForce"}),Object(o["b"])("orders",{getOrders:"getInProcessChef"}),Object(o["d"])({setTheme:"SET_THEME"})),filters:{nameMenu:function(e){if(!e)return"";for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];var r=a[0].find(function(t){return t._id===e});return r&&r.name?r.name:""},orderByUpdated:function(e){return Object(s["a"])(e)}}},f=u,h=a("2877"),v=a("6544"),_=a.n(v),m=a("8336"),b=a("b0af"),p=a("99d9"),g=a("12b2"),O=a("cc20"),T=a("a523"),V=a("0e8f"),E=a("132d"),j=a("a722"),C=a("8860"),w=a("ba95"),y=a("5d23"),A=a("e449"),M=a("9910"),k=a("71d9"),D=a("2a7f"),N=Object(h["a"])(f,n,r,!1,null,"766a95f4",null);t["default"]=N.exports;_()(N,{VBtn:m["a"],VCard:b["a"],VCardActions:p["a"],VCardTitle:g["a"],VChip:O["a"],VContainer:T["a"],VFlex:V["a"],VIcon:E["a"],VLayout:j["a"],VList:C["a"],VListTile:w["a"],VListTileTitle:y["c"],VMenu:A["a"],VSpacer:M["a"],VToolbar:k["a"],VToolbarTitle:D["b"]})}}]);
//# sourceMappingURL=Chefs.27f7f6dc.js.map