"use strict";(self["webpackChunkshopping"]=self["webpackChunkshopping"]||[]).push([[561],{1561:function(s,t,e){e.r(t),e.d(t,{default:function(){return l}});e(4114);var a=function(){var s=this,t=s._self._c;return t("div",{staticClass:"address"},[t("van-nav-bar",{attrs:{fixed:"",title:"收货地址","left-arrow":""},on:{"click-left":function(t){return s.$router.go(-1)}}}),s.list.length>0?t("div",{staticClass:"address-list"},s._l(s.list,(function(e,a){return t("div",{key:a,staticClass:"address-item"},[t("div",{staticClass:"content"},[t("span",{staticClass:"name"},[s._v(s._s(e.name))]),t("span",{staticClass:"cell-phone"},[s._v(s._s(e.phone))])]),t("div",{staticClass:"address-info"},[t("span",{staticClass:"city"},[s._v(s._s(e.region.province))]),t("span",{staticClass:"province"},[s._v(s._s(e.region.city))]),t("span",{staticClass:"area"},[s._v(s._s(e.region.region))]),t("span",{staticClass:"street"},[s._v(s._s(e.detail))])]),t("div",{staticClass:"operation"},[t("van-checkbox",{attrs:{name:a,"checked-color":"#ee0a24"},on:{click:function(t){return s.toggle(a)}},model:{value:e.isChecked,callback:function(t){s.$set(e,"isChecked",t)},expression:"item.isChecked"}},[s._v(s._s(e.isChecked?"默认":"选择"))]),t("div",{staticClass:"bnt-opera"},[t("span",{staticClass:"edit",on:{click:function(t){return s.$router.push(`/address/update?addressId=${e.address_id}`)}}},[t("van-icon",{attrs:{name:"records-o"}}),s._v("编辑 ")],1),t("span",{staticClass:"del",on:{click:function(t){return s.del(e.address_id)}}},[t("van-icon",{attrs:{name:"delete-o"}}),s._v("删除 ")],1)])],1)])})),0):t("div",{staticClass:"empty-content"},[s._m(0),t("p",{staticClass:"empty-txt"},[s._v("亲，暂无收货地址")])]),t("div",{staticClass:"floor"},[t("div",{staticClass:"btn",on:{click:function(t){return s.$router.push("/address/create")}}},[s._v("添加新地址")])])],1)},i=[function(){var s=this,t=s._self._c;return t("div",{staticClass:"empty-icon"},[t("img",{attrs:{src:e(6661),alt:""}})])}],n=(e(8111),e(7588),e(2776)),r={name:"addressIndex",data(){return{list:[]}},async created(){try{await this.getAddressList(),this.getDefaultId()}catch(s){console.error(s)}},methods:{async getAddressList(){const{data:{list:s}}=await(0,n.Re)();s.forEach((s=>{s.isChecked=!1})),this.list=s},del(s){(0,n.p1)(s),this.getAddressList()},async getDefaultId(){const{data:{defaultId:s}}=await(0,n.Z8)();0!==s&&this.list.forEach(((t,e)=>{t.address_id===s&&(t.isChecked=!0,this.list.splice(e,1),this.list.unshift(t))}))},async toggle(s){this.list.forEach((s=>{s.isChecked=!1})),this.list[s].isChecked=!0,await(0,n.aX)(this.list[s].address_id),"checkout"===this.$route.query.from&&this.$router.go(-1)}}},d=r,c=e(1656),o=(0,c.A)(d,a,i,!1,null,"6a010cab",null),l=o.exports},2776:function(s,t,e){e.d(t,{Bf:function(){return i},Re:function(){return n},Wd:function(){return r},Z8:function(){return l},aX:function(){return u},h5:function(){return c},p1:function(){return o},y9:function(){return d}});var a=e(5720);const i=()=>a.A.get("/region/tree"),n=()=>a.A.get("/address/list"),r=(s,t,e,i)=>a.A.post("/address/add",{form:{name:s,phone:t,region:e,detail:i}}),d=s=>a.A.get("/address/detail",{params:{addressId:s}}),c=(s,t)=>{const{name:e,phone:i,region:n,detail:r}=t;return a.A.post("/address/edit",{addressId:s,form:{name:e,phone:i,region:n,detail:r}})},o=s=>{a.A.post("/address/remove",{addressId:s})},l=()=>a.A.get("/address/defaultId"),u=s=>{a.A.post("/address/setDefault",{addressId:s})}}}]);
//# sourceMappingURL=561.ee8f2429.js.map