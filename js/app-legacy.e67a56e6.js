(function(){"use strict";var t={8949:function(t,e,n){n(6992),n(8674),n(9601),n(7727);var o=n(144),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("router-view")],1)},r=[],a={name:"App",data:function(){return{}}},i=a,c=n(3736),l=n(3453),u=n.n(l),d=n(7524),p=(0,c.Z)(i,s,r,!1,null,null,null),f=p.exports;u()(p,{VApp:d.Z});var v=n(8345),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-app-bar",{attrs:{app:"","clipped-right":"",height:"80",color:"primary",dark:""}},[n("v-img",{attrs:{src:"/logo.png","max-height":"85","max-width":"140"}}),n("v-spacer"),n("v-btn",{attrs:{color:"secondary"},on:{click:function(e){t.filterDrawer=!t.filterDrawer}}},[n("v-icon",{attrs:{color:"terciary"}},[t._v("mdi-filter")]),t._v("Filtros ")],1)],1),n("v-navigation-drawer",{attrs:{width:"400",absolute:"",clipped:"",right:""},model:{value:t.filterDrawer,callback:function(e){t.filterDrawer=e},expression:"filterDrawer"}},[n("filter-stations",{on:{stations:t.getStations,types:t.getTypes}})],1),n("v-main",{staticStyle:{height:"100vh"}},[n("div",{attrs:{id:"map-root"}}),n("v-card",{staticClass:"popup-container",attrs:{width:"600",id:"card-details"}},[n("v-card-title",{staticClass:"px-3",attrs:{id:"card-title"}},[t._v("Dados da Estação "),n("v-spacer"),n("v-btn",{attrs:{small:"",icon:"",color:"red"},on:{click:t.closePopUp}},[n("v-icon",[t._v("mdi-close")])],1)],1),n("v-card-text",{staticClass:"popup-container"},[n("v-container",{staticClass:"popup-container",attrs:{fluid:""}},[n("v-row",{staticClass:"popup-container mb-n7",attrs:{align:"center"}},[n("v-col",{staticClass:"d-flex",attrs:{cols:"3"}},[n("v-btn",{attrs:{block:"",outlined:"",color:"black"}},[n("label",[t._v("ID: ")]),n("strong",{staticClass:"overlay-text",attrs:{id:"feature-id"}}),n("br")])],1),n("v-col",{attrs:{cols:"9"}},[n("v-btn",{attrs:{block:"",outlined:"",color:"black"}},[n("label",[t._v("Nome: ")]),n("strong",{staticClass:"overlay-text",attrs:{id:"feature-name"}})])],1)],1),n("v-row",{staticClass:"popup-container mb-n7",attrs:{align:"center"}},[n("v-col",{attrs:{cols:"8"}},[n("v-btn",{attrs:{block:"",outlined:"",color:"black"}},[n("label",[t._v("Tipo de Estação:")]),n("strong",{staticClass:"overlay-text",attrs:{id:"feature-type"}})])],1),n("v-col",{attrs:{cols:"4"}},[n("v-btn",{attrs:{block:"",outlined:"",color:"black"}},[n("label",[t._v("Lat:")]),n("strong",{staticClass:"overlay-text",attrs:{id:"feature-latitude"}})])],1)],1),n("v-row",{staticClass:"popup-container mb-n7",attrs:{align:"center"}},[n("v-col",{attrs:{cols:"8"}},[n("v-btn",{attrs:{block:"",outlined:"",color:"black"}},[n("label",[t._v("Elevação: ")]),n("strong",{staticClass:"overlay-text",attrs:{id:"feature-elevation"}})])],1),n("v-col",{attrs:{cols:"4"}},[n("v-btn",{attrs:{block:"",outlined:"",color:"black"}},[n("label",[t._v("Long:")]),n("strong",{staticClass:"overlay-text",attrs:{id:"feature-longitude"}})])],1)],1),n("v-row",{staticClass:"popup-container mb-n7",attrs:{align:"center"}},[n("v-col",{attrs:{cols:"12"}},[n("v-btn",{attrs:{outlined:"",color:"black",block:""}},[n("label",[t._v("Inicio de Operação:")]),n("strong",{staticClass:"overlay-text",attrs:{id:"feature-start"}})])],1)],1),n("v-row",{staticClass:"popup-container mb-n7",attrs:{align:"center"}},[n("v-col",{attrs:{cols:"12"}},[n("v-btn",{attrs:{outlined:"",color:"black",block:""}},[n("label",[t._v("Fim de Operação:")]),n("strong",{staticClass:"overlay-text",attrs:{id:"feature-end"}})])],1)],1)],1)],1)],1),n("v-snackbar",{attrs:{timeout:3e3,color:"secondary"},scopedSlots:t._u([{key:"action",fn:function(e){var o=e.attrs;return[n("v-btn",t._b({attrs:{icon:""},on:{click:function(e){t.snackbar=!1}}},"v-btn",o,!1),[n("v-icon",{attrs:{color:"red"}},[t._v("mdi-close")])],1)]}}]),model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(" "+t._s(t.text)+" ")])],1)],1)},h=[],_=n(6198),g=(n(8309),n(5666),n(8646),n(5973)),y=n(7719),b=n(2241),w=n(5743),k=n(7494),x=n(7648),Z=n(1162),S=n(3376),T=n(8300),C=n(202),O=n(1751),E=n(6293),j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),n("v-container",{attrs:{fluid:""}},[n("v-row",{staticClass:"d-flex justify-center"},[n("v-col",{attrs:{cols:"12"}},[n("v-select",{staticClass:"pt-10",attrs:{items:t.station_type_list,"return-object":"","item-text":"name",label:"Tipo de Estação",multiple:"",outlined:"",chips:"","deletable-chips":"",clearable:"","persistent-hint":"",hint:t.stations_types_selected.length+" Tipos Selecionados"},on:{change:function(e){return t.changeSelect()}},scopedSlots:t._u([{key:"prepend-item",fn:function(){return[n("v-list-item",{attrs:{ripple:""},on:{click:t.change}},[n("v-list-item-action",[n("v-icon",{attrs:{color:t.someTypes||t.allTypes?"red":"#757575"}},[t._v(t._s(t.iconTypes))])],1),n("v-list-item-content",[n("v-list-item-title",[t._v(" "+t._s(t.someTypes||t.allTypes?"REMOVER SELEÇÃO":"SELECIONAR TODOS")+" ")])],1)],1),n("v-divider")]},proxy:!0}]),model:{value:t.stations_types_selected,callback:function(e){t.stations_types_selected=e},expression:"stations_types_selected"}})],1)],1),n("v-row",{staticClass:"d-flex justify-center"},[n("v-col",{attrs:{cols:"12"}},[n("v-select",{attrs:{items:t.stations,"return-object":"","item-key":"id","item-text":"name",label:"Estações",multiple:"",outlined:"",chips:"",clearable:"","deletable-chips":"",disabled:!t.stations_types_selected.length>0,"hide-details":!t.stations_types_selected.length>0,"persistent-hint":t.stations_types_selected.length>0,hint:t.stations_selected.length+" Opções Selecionadas"},scopedSlots:t._u([{key:"prepend-item",fn:function(){return[n("v-list-item",{attrs:{ripple:""},on:{click:t.toggle}},[n("v-list-item-action",[n("v-icon",{attrs:{color:t.someStations||t.allStations?"red":"#757575"}},[t._v(t._s(t.iconStations))])],1),n("v-list-item-content",[n("v-list-item-title",[t._v(" "+t._s(t.someStations||t.allStations?"Remover Seleção":"Selecionar Todos")+" ")])],1)],1),n("v-divider")]},proxy:!0}]),model:{value:t.stations_selected,callback:function(e){t.stations_selected=e},expression:"stations_selected"}})],1)],1),n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-btn",{attrs:{color:"secondary",block:""},on:{click:t.consulting}},[n("v-icon",{attrs:{left:"",dark:"",color:"terciary"}},[t._v(" mdi-magnify")]),t._v("Consultar")],1)],1)],1)],1)],1)},I=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"title"}},[n("h3",{staticClass:"pt-3"},[t._v("Filtros")])])}],V=n(2032),R=(n(1539),n(8783),n(3948),n(7327),n(1249),n(7042),{name:"filterStations",data:function(){return{station_list:[],station_type_list:[],stations_types_selected:[],stations_selected:[],geojson:void 0}},created:function(){var t=this;return(0,_.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.fetchStation(),t.fetchStationType(),t.fetchFeatures()]);case 2:case"end":return e.stop()}}),e)})))()},computed:{stations:function(){var t=this,e=[];if(this.stations_types_selected.length>0){var n=function(n){var o=t.station_list.filter((function(e){return e.station_type_id===t.stations_types_selected[n].id}));for(var s in o)e.push(o[s])};for(var o in this.stations_types_selected)n(o);return e}return[]},allTypes:function(){return this.stations_types_selected.length===this.station_type_list.length},someTypes:function(){return this.stations_types_selected.length>0&&this.stations_types_selected.length<this.station_type_list.length},emptyTypes:function(){return 0===this.stations_types_selected.length},iconTypes:function(){return this.someTypes||this.allTypes?"mdi-close-box":"mdi-checkbox-blank-outline"},allStations:function(){return this.stations_selected.length===this.stations.length},someStations:function(){return this.stations_selected.length>0&&this.stations_selected.length<this.stations.length},emptyStations:function(){return 0===this.stations_selected.length},iconStations:function(){return this.someStations||this.allStations?"mdi-close-box":"mdi-checkbox-blank-outline"}},methods:{changeSelect:function(){var t,e=[],n=(0,V.Z)(this.stations);try{for(n.s();!(t=n.n()).done;){var o=t.value,s=this.stations_selected.map((function(t){return t.id})).indexOf(o.id);s>-1&&e.push(o)}}catch(r){n.e(r)}finally{n.f()}this.stations_selected=e},fetchFeatures:function(){var t=this;return(0,_.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://raw.githubusercontent.com/Kyrllan/geojson/master/station_list.geojson").then((function(t){return t.json()})).then((function(e){t.geojson=e})).catch((function(t){console.log("Looks like there was a problem: \n",t)}));case 2:case"end":return e.stop()}}),e)})))()},fetchStation:function(){var t=this;return(0,_.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://raw.githubusercontent.com/Kyrllan/geojson/master/stations.json").then((function(t){return t.json()})).then((function(e){t.station_list=e.station})).catch((function(t){console.log("Looks like there was a problem: \n",t)}));case 2:case"end":return e.stop()}}),e)})))()},fetchStationType:function(){var t=this;return(0,_.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://raw.githubusercontent.com/Kyrllan/geojson/master/station_type.json").then((function(t){return t.json()})).then((function(e){t.station_type_list=e.station_type})).catch((function(t){console.log("Looks like there was a problem: \n",t)}));case 2:case"end":return e.stop()}}),e)})))()},change:function(){var t=this;this.$nextTick((function(){t.allTypes||t.someTypes?t.stations_types_selected=[]:t.emptyTypes&&(t.stations_types_selected=t.station_type_list.slice())}))},toggle:function(){var t=this;this.$nextTick((function(){t.allStations||t.someStations?t.stations_selected=[]:t.emptyStations&&(t.stations_selected=t.stations.slice())}))},consulting:function(){var t=this;return(0,_.Z)(regeneratorRuntime.mark((function e(){var n,o,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.fetchFeatures();case 2:for(o in n=[],t.geojson.features)for(s in t.stations_selected)t.geojson.features[o].properties.id===t.stations_selected[s].id&&n.push(t.geojson.features[o]);t.geojson.features=n,t.$emit("stations",t.geojson),t.$emit("types",t.stations_types_selected);case 7:case"end":return e.stop()}}),e)})))()}}}),L=R,M=n(680),D=n(2102),B=n(9846),P=n(1418),A=n(6428),F=n(7620),H=n(3099),$=n(2786),G=n(2877),Y=n(5815),N=(0,c.Z)(L,j,I,!1,null,null,null),J=N.exports;u()(N,{VBtn:M.Z,VCol:D.Z,VContainer:B.Z,VDivider:P.Z,VIcon:A.Z,VListItem:F.Z,VListItemAction:H.Z,VListItemContent:$.km,VListItemTitle:$.V9,VRow:G.Z,VSelect:Y.Z});var K=n(7484),U=n.n(K),q={name:"App",components:{"filter-stations":J},data:function(){return{filterDrawer:!1,snackbar:!1,text:"",station_type_id:void 0,dialog:!1,types:void 0,stations:void 0,vectorGeoJSON:new x.Z,source:new S.Z,mapMark:{id:0}}},mounted:function(){var t=this;return(0,_.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.initiateMap();case 2:case"end":return e.stop()}}),e)})))()},computed:{},watch:{},methods:{closePopUp:function(){var t=document.getElementById("card-details");t.style.visibility="hidden",t.style.display="none"},getTypes:function(t){var e=this;return(0,_.Z)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:e.types=t;case 1:case"end":return n.stop()}}),n)})))()},getStations:function(t){var e=this;return(0,_.Z)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:e.stations=t,t.features.length>0?(e.source.clear(),e.source.addFeatures((new g.Z).readFeatures(t))):(e.source.clear(),e.snackbar=!0,e.text="Nenhuma estação encontrada.");case 2:case"end":return n.stop()}}),n)})))()},initiateMap:function(){var t=new S.Z,e=new x.Z({source:t}),o=new Z.Z({source:new T.Z});this.vectorGeoJSON=new x.Z({source:this.source,style:function(t,e){return[new C.ZP({image:new O.Z({scale:.9,color:"1"==t.get("station_type_id")?"#7cb5ec":"2"==t.get("station_type_id")?"#434348":"3"==t.get("station_type_id")?"#90ed7d":"4"==t.get("station_type_id")?"#f7a35c":"#8085e9",src:n(7021)})})]}});var s=new y.Z({controls:(0,w.ce)().extend([new k.Z({units:"degrees"})]),target:"map-root",layers:[o,e,this.vectorGeoJSON],view:new b.ZP({projection:"EPSG:4326",center:[-48.815011395380765,-24.650150016322684],zoom:7})}),r=document.querySelector(".popup-container"),a=new E.Z({element:r});s.addOverlay(a);var i=[{id:"1",created_at:"2020-11-30 10:43:46.687141-03",update_at:"2020-11-30 10:43:46.687162-03",name:"AGROMETEOROLOGICAL",color:"#7cb5ec"},{id:"2",created_at:"2020-11-30 10:43:46.688442-03",update_at:"2020-11-30 10:43:46.688459-03",name:"CLIMATOLÓGICO",color:"#434348"},{id:"3",created_at:"2020-11-30 10:43:46.68895-03",update_at:"2020-11-30 10:43:46.688964-03",name:"HIDROCLIMATOLÓGICO",color:"#90ed7d"},{id:"4",created_at:"2020-11-30 10:43:46.689495-03",update_at:"2020-11-30 10:43:46.689513-03",name:"HIDROMÉTRICO",color:"#f7a35c"},{id:"5",created_at:"2020-11-30 10:43:46.690113-03",update_at:"2020-11-30 10:43:46.690134-03",name:"PLUVIOMETRIC",color:"#8085e9"}],c=document.getElementById("feature-id"),l=document.getElementById("feature-name"),u=document.getElementById("feature-latitude"),d=document.getElementById("feature-longitude"),p=document.getElementById("feature-elevation"),f=document.getElementById("feature-type"),v=document.getElementById("feature-start"),m=document.getElementById("feature-end");s.on("click",(function(t){a.setPosition(void 0),s.forEachFeatureAtPixel(t.pixel,(function(e,n){for(var o in a.setPosition(t.coordinate),c.innerHTML=e.get("id"),l.innerHTML=e.get("name"),u.innerHTML=e.get("latitude"),d.innerHTML=e.get("longitude"),p.innerHTML=e.get("elevation_meters"),v.innerHTML=U()(e.get("operation_start_date")).format("DD/MM/YYYY"),m.innerHTML=U()(e.get("operation_end_date")).format("DD/MM/YYYY"),i)e.get("station_type_id")==i[o].id&&(f.innerHTML=i[o].name)}));var e=document.getElementById("card-details");e.style.visibility="visible",e.style.display="block"}))}}},z=q,Q=n(426),W=n(3237),X=n(7118),tt=n(7047),et=n(7877),nt=n(8903),ot=n(3202),st=n(9762),rt=(0,c.Z)(z,m,h,!1,null,null,null),at=rt.exports;u()(rt,{VAppBar:Q.Z,VBtn:M.Z,VCard:W.Z,VCardText:X.ZB,VCardTitle:X.EB,VCol:D.Z,VContainer:B.Z,VIcon:A.Z,VImg:tt.Z,VMain:et.Z,VNavigationDrawer:nt.Z,VRow:G.Z,VSnackbar:ot.Z,VSpacer:st.Z}),o.Z.use(v.Z);var it=[{path:"/",name:"home",component:at}],ct=new v.Z({mode:"history",base:"/open-layers/",routes:it}),lt=ct,ut=n(9132),dt=n(4556),pt=n(5668);o.Z.use(ut.Z);var ft=new ut.Z({theme:{dark:!1,themes:{light:{primary:"#05CDDC",secondary:"#424242",terciary:"#ffe589"}}},icons:{iconfont:"mdi"},lang:{locales:{pt:pt.Z,en:dt.Z},current:"pt"}});o.Z.config.productionTip=!1,o.Z.prototype.dayjs=U(),new o.Z({router:lt,vuetify:ft,render:function(t){return t(f)}}).$mount("#app")},7021:function(t,e,n){t.exports=n.p+"img/location_on-white-48dp.cd6f6f88.svg"}},e={};function n(o){var s=e[o];if(void 0!==s)return s.exports;var r=e[o]={exports:{}};return t[o].call(r.exports,r,r.exports,n),r.exports}n.m=t,function(){var t=[];n.O=function(e,o,s,r){if(!o){var a=1/0;for(u=0;u<t.length;u++){o=t[u][0],s=t[u][1],r=t[u][2];for(var i=!0,c=0;c<o.length;c++)(!1&r||a>=r)&&Object.keys(n.O).every((function(t){return n.O[t](o[c])}))?o.splice(c--,1):(i=!1,r<a&&(a=r));if(i){t.splice(u--,1);var l=s();void 0!==l&&(e=l)}}return e}r=r||0;for(var u=t.length;u>0&&t[u-1][2]>r;u--)t[u]=t[u-1];t[u]=[o,s,r]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/open-layers/"}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var s,r,a=o[0],i=o[1],c=o[2],l=0;if(a.some((function(e){return 0!==t[e]}))){for(s in i)n.o(i,s)&&(n.m[s]=i[s]);if(c)var u=c(n)}for(e&&e(o);l<a.length;l++)r=a[l],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(u)},o=self["webpackChunkopenlayer"]=self["webpackChunkopenlayer"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(8949)}));o=n.O(o)})();
//# sourceMappingURL=app-legacy.e67a56e6.js.map