(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"2a56":function(e,a,t){"use strict";var i=t("6f23"),n=t.n(i);n.a},"4a3d":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={data:function(){return{imageSrc:"",styleImg:""}},onUnload:function(){this.imageSrc=""},methods:{chooseImage:function(){var e=this;uni.chooseImage({count:1,sizeType:["compressed"],sourceType:["album"],success:function(a){console.log("chooseImage success, temp path is",a.tempFilePaths[0]);var t=a.tempFilePaths[0];e.imageSrc=t,uni.uploadFile({url:"https://599618d5.ngrok.io/magic/upload",filePath:t,fileType:"image",name:"file",success:function(a){console.log("uploadImage success, res is:",a),e.styleImg=a.data,uni.showToast({title:"绘画成功",icon:"success",duration:1e3})},fail:function(e){console.log("uploadImage fail",e),uni.showModal({content:e.errMsg,showCancel:!1})}})},fail:function(e){console.log("chooseImage fail",e)}})}}};a.default=i},"6f23":function(e,a,t){var i=t("75b7");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=t("4f06").default;n("20a25b40",i,!0,{sourceMap:!1,shadowMode:!1})},"75b7":function(e,a,t){a=e.exports=t("2350")(!1),a.push([e.i,".image[data-v-01efcc51]{width:100%}.demo[data-v-01efcc51]{background:#ddd;padding:%?50?%}",""])},b9b8:function(e,a,t){"use strict";var i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[t("v-uni-view",{staticClass:"demo"},[e.imageSrc?[t("v-uni-image",{staticClass:"image",attrs:{src:e.imageSrc,mode:"widthFix"}})]:[t("v-uni-view",{staticClass:"uni-hello-addfile",on:{click:function(a){a=e.$handleEvent(a),e.chooseImage(a)}}},[e._v("+ 选择图片")])]],2),t("v-uni-view",{staticClass:"text"},[e._v("变换下的风格如下："),e.styleImg?[t("v-uni-image",{staticClass:"image",attrs:{src:e.styleImg,mode:"widthFix"}})]:e._e()],2)],1)},n=[];t.d(a,"a",function(){return i}),t.d(a,"b",function(){return n})},e2b9:function(e,a,t){"use strict";t.r(a);var i=t("b9b8"),n=t("e47a");for(var s in n)"default"!==s&&function(e){t.d(a,e,function(){return n[e]})}(s);t("2a56");var o=t("2877"),c=Object(o["a"])(n["default"],i["a"],i["b"],!1,null,"01efcc51",null);a["default"]=c.exports},e47a:function(e,a,t){"use strict";t.r(a);var i=t("4a3d"),n=t.n(i);for(var s in i)"default"!==s&&function(e){t.d(a,e,function(){return i[e]})}(s);a["default"]=n.a}}]);