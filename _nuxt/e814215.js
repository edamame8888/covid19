(window.webpackJsonp=window.webpackJsonp||[]).push([[114,58,63],{386:function(t,e,n){var content=n(396);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("d3c7a3be",content,!0,{sourceMap:!1})},387:function(t,e,n){var content=n(398);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("c3e415e2",content,!0,{sourceMap:!1})},388:function(t,e,n){var content=n(402);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("bc739952",content,!0,{sourceMap:!1})},389:function(t,e,n){var content=n(411);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("7cf19f2f",content,!0,{sourceMap:!1})},392:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return l}));n(277),n(94);function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return t<0?function(t){return null==t?void 0:t.toFixed(0)}:t>20?function(t){return null==t?void 0:t.toFixed(20)}:function(e){return null==e?void 0:e.toFixed(t)}}function r(){return function(t){return null==t?void 0:t.toLocaleString()}}function l(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return function(e){return Number(o(t)(e)).toLocaleString("en",{minimumFractionDigits:t})}}},393:function(t,e,n){var content=n(417);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("905bdcd6",content,!0,{sourceMap:!1})},394:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n(85),l=n(399),c=n(400),d=n(134),f=o.default.extend({components:{ExpantionPanel:l.default,Share:c.default,AppLink:r.default},props:{title:{type:String,default:""},titleId:{type:String,default:""},date:{type:String,default:""},headTitle:{type:String,default:""}},head:function(){return this.$route.params.card?{title:this.headTitle?this.headTitle:this.title,meta:[{hid:"og:title",property:"og:title",content:this.headTitle?this.headTitle:this.title},{hid:"description",name:"description",content:this.formattedDateForDisplay},{hid:"og:description",property:"og:description",content:this.formattedDateForDisplay}]}:{}},computed:{formattedDate:function(){return Object(d.c)(this.date)},formattedDateForDisplay:function(){return""!==this.date?this.$d(new Date(this.date),"dateTime"):""},permalink:function(){var t="/cards/".concat(this.titleId);return this.localePath(t)}}}),h=(n(401),n(14)),m=n(63),v=n.n(m),y=n(924),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"DataView"},[n("div",{staticClass:"DataView-Inner"},[n("div",{staticClass:"DataView-Header",class:t.$slots.dataSetPanel?"with-dataSetPanel":""},[n("h3",{staticClass:"DataView-Title",class:t.$slots.infoPanel?"with-infoPanel":t.$slots.dataSetPanel?"with-dataSetPanel":""},[t._v("\n        "+t._s(t.title)+"\n      ")]),t._v(" "),t.$slots.infoPanel?n("div",{staticClass:"DataView-InfoPanel"},[t._t("infoPanel")],2):t._e(),t._v(" "),t.$slots.dataSetPanel?n("div",{staticClass:"DataView-DataSetPanel"},[t._t("dataSetPanel")],2):t._e()]),t._v(" "),t.$slots.attentionNote?n("div",{staticClass:"DataView-AttentionNote"},[t._t("attentionNote")],2):t._e(),t._v(" "),n("div",{staticClass:"DataView-Description"},[t._t("description")],2),t._v(" "),n("div",[t._t("button")],2),t._v(" "),n("div",{staticClass:"DataView-Content"},[t._t("default")],2),t._v(" "),n("div",{staticClass:"DataView-Description DataView-Description--Additional"},[t._t("additionalDescription")],2),t._v(" "),t.$slots.dataTable?n("expantion-panel",{staticClass:"DataView-ExpantionPanel"},[t._t("dataTable")],2):t._e(),t._v(" "),n("div",{staticClass:"DataView-Space"}),t._v(" "),n("div",{staticClass:"DataView-Footer"},[n("div",[t._t("footer"),t._v(" "),n("div",[n("app-link",{staticClass:"Permalink",attrs:{to:t.permalink}},[n("time",{attrs:{datetime:t.formattedDate}},[t._v("\n              "+t._s(t.$t("{date} 更新",{date:t.formattedDateForDisplay}))+"\n            ")])])],1)],2),t._v(" "),"true"!==t.$route.query.embed?n("share",{staticClass:"Footer-Right",attrs:{title:t.title,"title-id":t.titleId}}):t._e()],1)],1)])}),[],!1,null,null,null);e.default=component.exports;v()(component,{VCard:y.a})},395:function(t,e,n){"use strict";n(386)},396:function(t,e,n){var o=n(32)(!1);o.push([t.i,".v-expansion-panel-header__icon{margin-left:-5px!important}.v-expansion-panel-header__icon .v-icon--left{margin-right:5px}.v-expansion-panel--active .v-expansion-panel-header__icon .v-icon{transform:rotate(90deg)!important}.expansion-panel-text{color:#333;font-size:1.4rem}",""]),t.exports=o},397:function(t,e,n){"use strict";n(387)},398:function(t,e,n){var o=n(32)(!1);o.push([t.i,".DataView-Share-Opener{cursor:pointer;margin:-14px;padding:14px}.DataView-Share-Opener:focus{outline:1px dotted #707070}.DataView-Share-Buttons{position:absolute;padding:8px;right:2rem;bottom:3em;width:260px;border:1px solid #d9d9d9;background:#fff!important;border-radius:8px;text-align:left;z-index:2;font-size:1.6rem}.DataView-Share-Buttons>*{padding:4px 0}.DataView-Share-Buttons .Share-Buttons-header{display:flex;justify-content:space-between;align-items:center;flex-direction:row-reverse}.DataView-Share-Buttons .Close-Button{color:#707070}.DataView-Share-Buttons .Close-Button button{border-radius:50%;border:1px solid #fff}.DataView-Share-Buttons .Close-Button button:focus{border:1px dotted #707070;outline:none}.DataView-Share-Buttons .EmbedCode{position:relative;padding:4px 30px 4px 4px;color:#030303;border:1px solid #eee;border-radius:8px;font-size:1.2rem}.DataView-Share-Buttons .EmbedCode .EmbedCode-Copy{position:absolute;top:.3em;right:.3em;color:#707070}.DataView-Share-Buttons .EmbedCode button{border-radius:50%;border:1px solid #eee}.DataView-Share-Buttons .EmbedCode button:focus{border:1px dotted #707070;outline:none}.DataView-Share-Buttons .Button-list{display:flex;justify-content:space-between}.DataView-Share-Buttons .Button-item{flex:0 0 30%;border-width:1px;border-style:solid;border-radius:4px;margin:4px}.DataView-Share-Buttons .Button-item.line{border-color:#06c755}.DataView-Share-Buttons .Button-item.twitter{border-color:#1da1f2}.DataView-Share-Buttons .Button-item.facebook{border-color:#1877f2}.DataView-Share-Buttons .Button-item .Button{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:16px 8px 8px}.DataView-Share-Buttons .Button-item .Button:focus{border:1px dotted #707070;outline:none}.DataView-Share-Buttons .Button-item .Button-icon{width:32px}.DataView-Share-Buttons .Button-item .Button-text{display:block;line-height:1.2;margin-top:8px;font-size:1rem}.overlay{position:absolute;display:flex;align-items:center;justify-content:center;z-index:1;top:0;left:0;width:100%;height:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:.8}.overlay>.overlay-text{text-align:center;padding:2em;width:60%;background:#4d4d4d;border-radius:8px;color:#fff!important;font-size:1.6rem}",""]),t.exports=o},399:function(t,e,n){"use strict";n.r(e);var o=n(44),r=n(0),l=n(406),c=r.default.extend({data:function(){return{showDetails:!1,mdiChevronRight:o.f}},mounted:function(){this.showDetails=!0},methods:{toggleDetails:function(){l.a.$emit(l.b,{dataView:this.$parent})}}}),d=(n(395),n(14)),f=n(63),h=n.n(f),m=n(774),v=n(775),y=n(776),w=n(777),x=n(375),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.showDetails?n("v-expansion-panels",{attrs:{flat:""}},[n("v-expansion-panel",[n("v-expansion-panel-header",{style:{transition:"none"},attrs:{"hide-actions":!0},on:{click:t.toggleDetails}},[n("div",{staticClass:"v-expansion-panel-header__icon"},[n("v-icon",{attrs:{left:"",size:"2.4rem"}},[t._v(t._s(t.mdiChevronRight))])],1),t._v(" "),n("span",{staticClass:"expansion-panel-text"},[t._v(t._s(t.$t("テーブルを表示")))])]),t._v(" "),n("v-expansion-panel-content",[t._t("default")],2)],1)],1):[t._t("default")]],2)}),[],!1,null,null,null);e.default=component.exports;h()(component,{VExpansionPanel:m.a,VExpansionPanelContent:v.a,VExpansionPanelHeader:y.a,VExpansionPanels:w.a,VIcon:x.a})},400:function(t,e,n){"use strict";n.r(e);n(68),n(16);var o=n(44),r=n(0).default.extend({props:{title:{type:String,default:""},titleId:{type:String,default:""}},data:function(){return{openGraphEmbed:!1,displayShare:!1,showOverlay:!1,mdiClipboardOutline:o.g,mdiClose:o.i}},computed:{graphEmbedValue:function(){var t='<iframe width="560" height="315" src="'.concat(this.permalink(!0,!0),'" frameborder="0"></iframe>');return t}},watch:{displayShare:function(t){t?document.documentElement.addEventListener("click",this.toggleShareMenu):document.documentElement.removeEventListener("click",this.toggleShareMenu)}},methods:{toggleShareMenu:function(t){t.stopPropagation(),this.displayShare=!this.displayShare},closeShareMenu:function(){this.displayShare=!1,this.$refs.shareOpener.focus()},isCopyAvailable:function(){return!!navigator.clipboard},copyEmbedCode:function(){var t=this;navigator.clipboard.writeText(this.graphEmbedValue).then((function(){t.closeShareMenu(),t.showOverlay=!0,setTimeout((function(){t.showOverlay=!1}),2e3)}))},stopClosingShareMenu:function(t){t.stopPropagation()},permalink:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],embed=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e="/cards/".concat(this.titleId);return embed&&(e="".concat(e,"?embed=true")),e=this.localePath(e),t&&(e="".concat(location.protocol,"//").concat(location.host).concat(e)),e},twitter:function(){var t="https://twitter.com/intent/tweet?text=".concat(this.title," / ").concat(this.$t("東京都")).concat(this.$t("新型コロナウイルス感染症")).concat(this.$t("対策サイト"),"&url=").concat(this.permalink(!0),"&hashtags=StopCovid19JP");window.open(t)},facebook:function(){var t="https://www.facebook.com/sharer.php?u=".concat(this.permalink(!0));window.open(t)},line:function(){var t="https://social-plugins.line.me/lineit/share?url=".concat(this.permalink(!0));window.open(t)}}}),l=(n(397),n(14)),c=n(63),d=n.n(c),f=n(375),h=n(778),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-tooltip",{attrs:{left:"","nudge-right":"20","nudge-bottom":"4"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("button",t._g({ref:"shareOpener",staticClass:"DataView-Share-Opener",on:{click:t.toggleShareMenu}},o),[n("svg",{attrs:{width:"14",height:"16",viewBox:"0 0 14 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-label":t.$t("{title}のグラフをシェア",{title:t.title})}},[n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7.59999 3.5H9.5L7 0.5L4.5 3.5H6.39999V11H7.59999V3.5ZM8.5 5.75H11.5C11.9142 5.75 12.25 6.08579 12.25 6.5V13.5C12.25 13.9142 11.9142 14.25 11.5 14.25H2.5C2.08579 14.25 1.75 13.9142 1.75 13.5V6.5C1.75 6.08579 2.08579 5.75 2.5 5.75H5.5V4.5H2.5C1.39543 4.5 0.5 5.39543 0.5 6.5V13.5C0.5 14.6046 1.39543 15.5 2.5 15.5H11.5C12.6046 15.5 13.5 14.6046 13.5 13.5V6.5C13.5 5.39543 12.6046 4.5 11.5 4.5H8.5V5.75Z",fill:"#808080"}})])])]}}])},[t._v(" "),n("span",[t._v(t._s(t.$t("情報をシェアする")))])]),t._v(" "),t.displayShare?n("div",{staticClass:"DataView-Share-Buttons py-2",on:{click:t.stopClosingShareMenu}},[n("div",{staticClass:"Share-Buttons-header"},[n("div",{staticClass:"Close-Button"},[n("v-icon",{attrs:{"aria-label":t.$t("閉じる")},on:{click:t.closeShareMenu}},[t._v("\n          "+t._s(t.mdiClose)+"\n        ")])],1),t._v(" "),n("h4",[t._v(t._s(t.$t("情報をシェア")))])]),t._v(" "),n("section",[n("h5",[t._v(t._s(t.$t("埋め込み用コード")))]),t._v(" "),n("div",{staticClass:"EmbedCode"},[t.isCopyAvailable()?n("v-icon",{staticClass:"EmbedCode-Copy",attrs:{"aria-label":t.$t("クリップボードにコピー")},on:{click:t.copyEmbedCode}},[t._v(t._s(t.mdiClipboardOutline))]):t._e(),t._v("\n        "+t._s(t.graphEmbedValue)+"\n      ")],1)]),t._v(" "),n("section",[n("h5",[t._v(t._s(t.$t("SNSでシェア")))]),t._v(" "),n("ul",{staticClass:"Button-list"},[n("li",{staticClass:"Button-item line"},[n("button",{staticClass:"Button",attrs:{"aria-label":t.$t("LINEで{title}のグラフをシェア",{title:t.title})},on:{click:t.line}},[t._m(0),t._v(" "),n("span",{staticClass:"Button-text"},[t._v(t._s(t.$t("LINEで情報をシェア")))])])]),t._v(" "),n("li",{staticClass:"Button-item twitter"},[n("button",{staticClass:"Button",attrs:{"aria-label":t.$t("Twitterで{title}のグラフをシェア",{title:t.title})},on:{click:t.twitter}},[t._m(1),t._v(" "),n("span",{staticClass:"Button-text"},[t._v(t._s(t.$t("Twitterで情報をシェア")))])])]),t._v(" "),n("li",{staticClass:"Button-item facebook"},[n("button",{staticClass:"Button",attrs:{"aria-label":t.$t("facebookで{title}のグラフをシェア",{title:t.title})},on:{click:t.facebook}},[t._m(2),t._v(" "),n("span",{staticClass:"Button-text"},[t._v(t._s(t.$t("facebookで情報をシェア")))])])])])])]):t._e(),t._v(" "),t.showOverlay?n("div",{staticClass:"overlay"},[n("div",{staticClass:"overlay-text"},[t._v("\n      "+t._s(t.$t("埋め込み用コードをコピーしました"))+"\n    ")])]):t._e()],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("picture",[n("source",{staticClass:"Button-icon",attrs:{srcset:"/line-square.webp",type:"image/webp"}}),t._v(" "),n("img",{staticClass:"Button-icon",attrs:{src:"/line-square.png",alt:"LINE"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("picture",[n("source",{staticClass:"Button-icon",attrs:{srcset:"/twitter-square.webp",type:"image/webp"}}),t._v(" "),n("img",{staticClass:"Button-icon",attrs:{src:"/twitter-square.png",alt:"Twitter"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("picture",[n("source",{staticClass:"Button-icon",attrs:{srcset:"/facebook.webp",type:"image/webp"}}),t._v(" "),n("img",{staticClass:"Button-icon",attrs:{src:"/facebook.png",alt:"facebook"}})])}],!1,null,null,null);e.default=component.exports;d()(component,{VIcon:f.a,VTooltip:h.a})},401:function(t,e,n){"use strict";n(388)},402:function(t,e,n){var o=n(32)(!1);o.push([t.i,".DataView{height:100%;background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9!important;border-radius:4px}.DataView-Header{display:flex;align-items:flex-start;flex-flow:column;padding:0 10px}@media screen and (min-width:769px){.DataView-Header{padding:0 5px}}@media screen and (min-width:1171px){.DataView-Header{justify-content:space-between;flex-flow:row;padding:0}.DataView-Header.with-dataSetPanel{flex-flow:column}}.DataView-Inner{display:flex;flex-flow:column;padding:22px;height:100%}.DataView-Title{width:100%;margin-bottom:10px;line-height:1.5;font-weight:400;color:#4d4d4d;font-size:2rem}.DataView-Title.with-dataSetPanel{margin-bottom:0}@media screen and (min-width:1171px){.DataView-Title{margin-bottom:0}.DataView-Title.with-infoPanel{flex:1 1 50%;margin-right:24px}}.DataView-Title span{display:inline-block}.DataView-InfoPanel{flex:1 1 50%}.DataView-DataSetPanel{flex:1 0 auto;width:100%}.DataView-Content{margin:16px 0}.DataView-Space{margin-top:10px}.DataView-Description{margin-top:10px;color:#707070;font-size:1.2rem}.DataView-Description ul{list-style:disc inside;padding-left:1em}.DataView-Description ul li{margin-left:1.5em;text-indent:-1.5em}.DataView-Description--Additional,.DataView-ExpantionPanel{margin-bottom:10px}.DataView-Footer{display:flex;justify-content:space-between;margin-top:auto;color:#707070;font-size:1.2rem}.DataView-Footer ul{list-style-type:none;padding:0}.DataView-Footer .Permalink{color:#707070!important}.DataView-Footer .Footer-Right{display:flex;align-items:flex-end}.DataView-AttentionNote{margin:10px 0;padding:12px;background-color:#ffe200;border-radius:4px;color:#4d4d4d;font-size:1.2rem}.DataView-AttentionNote p{margin:0}",""]),t.exports=o},403:function(t,e,n){"use strict";n.r(e);var o=n(0).default.extend({props:{title:{type:String,required:!1,default:""},lText:{type:String,required:!1,default:""},sText:{type:String,required:!0},sTextUnder:{type:String,required:!1,default:""},unit:{type:String,required:!1,default:""}}}),r=(n(410),n(14)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"DataView-DataSet"},[t.title?n("span",{staticClass:"DataView-DataSet-title"},[t._v(t._s(t.title))]):t._e(),t._v(" "),n("div",{staticClass:"DataView-DataSet-info"},[t.lText?[n("span",{staticClass:"DataView-DataSet-summary"},[t._v("\n        "+t._s(t.lText)+"\n        "),n("small",{staticClass:"DataView-DataSet-summary-unit"},[t._v(t._s(t.unit))])]),t._v(" "),n("br")]:t._e(),t._v(" "),n("small",{staticClass:"DataView-DataSet-date"},[t._v(t._s(t.sText))]),t._v(" "),t.sTextUnder?[n("br"),t._v(" "),n("small",{staticClass:"DataView-DataSet-date"},[t._v(t._s(t.sTextUnder))])]:t._e()],2)])}),[],!1,null,null,null);e.default=component.exports},409:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n(85),l=o.default.extend({components:{AppLink:r.default},props:{url:{type:String,default:""}}}),c=(n(416),n(14)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("app-link",{attrs:{to:t.url}},[t._v("\n  "+t._s(t.$t("オープンデータを入手"))+"\n")])}),[],!1,null,null,null);e.default=component.exports},410:function(t,e,n){"use strict";n(389)},411:function(t,e,n){var o=n(32)(!1);o.push([t.i,".DataView-DataSet{display:flex;flex-flow:column;margin-bottom:10px;color:#4d4d4d}@media screen and (min-width:1171px){.DataView-DataSet{justify-content:space-between;flex-flow:row}}.DataView-DataSet-title{font-size:2rem;flex:1 1 50%;margin-bottom:10px}.DataView-DataSet-info{flex:1 1 50%}@media screen and (min-width:1171px){.DataView-DataSet-info{text-align:right}}.DataView-DataSet-summary{display:inline-block;color:#4d4d4d;white-space:nowrap;font-style:normal;line-height:30px;font-size:3rem}.DataView-DataSet-summary-unit{width:100%;font-size:1.8rem}.DataView-DataSet-date{display:inline-block;width:100%;color:#707070;line-height:normal;font-size:1.2rem}",""]),t.exports=o},416:function(t,e,n){"use strict";n(393)},417:function(t,e,n){var o=n(32)(!1);o.push([t.i,".OpenDataLink{text-decoration:none}.OpenDataLink .ExternalLinkIcon{vertical-align:text-bottom}",""]),t.exports=o},425:function(t,e,n){"use strict";n(21),n(29),n(35),n(37);var o=n(6),r=(n(94),n(25),n(34),n(69),n(263),n(17),n(36),n(264),n(265),n(266),n(267),n(268),n(269),n(270),n(271),n(272),n(273),n(274),n(275),n(276),n(38),n(45),n(11),n(70),n(278),n(0)),l=n(173),c=n(19);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h=["sm","md","lg","xl"],m=h.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),v=h.reduce((function(t,e){return t["offset"+Object(c.B)(e)]={type:[String,Number],default:null},t}),{}),y=h.reduce((function(t,e){return t["order"+Object(c.B)(e)]={type:[String,Number],default:null},t}),{}),w={col:Object.keys(m),offset:Object.keys(v),order:Object.keys(y)};function x(t,e,n){var o=t;if(null!=n&&!1!==n){if(e){var r=e.replace(t,"");o+="-".concat(r)}return"col"!==t||""!==n&&!0!==n?(o+="-".concat(n)).toLowerCase():o.toLowerCase()}}var _=new Map;e.a=r.default.extend({name:"v-col",functional:!0,props:f(f(f(f({cols:{type:[Boolean,String,Number],default:!1}},m),{},{offset:{type:[String,Number],default:null}},v),{},{order:{type:[String,Number],default:null}},y),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,r=e.children,c=(e.parent,"");for(var d in n)c+=String(n[d]);var f=_.get(c);return f||function(){var t,e;for(e in f=[],w)w[e].forEach((function(t){var o=n[t],r=x(e,t,o);r&&f.push(r)}));var r=f.some((function(t){return t.startsWith("col-")}));f.push((t={col:!r||!n.cols},Object(o.a)(t,"col-".concat(n.cols),n.cols),Object(o.a)(t,"offset-".concat(n.offset),n.offset),Object(o.a)(t,"order-".concat(n.order),n.order),Object(o.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),_.set(c,f)}(),t(n.tag,Object(l.a)(data,{class:f}),r)}})},574:function(t,e,n){"use strict";n.r(e);n(41),n(11);var o=n(0),r=n(394),l=n(403),c=n(409),d=o.default.extend({components:{DataView:r.default,DataViewDataSetPanel:l.default,OpenDataLink:c.default},props:{title:{type:String,default:""},titleId:{type:String,default:""},chartData:{type:Object,default:function(){}},date:{type:String,default:""},info:{type:Object,default:function(){}},url:{type:String,default:""}},mounted:function(){var t=this.$refs.displayedTable.$el.querySelectorAll("table");Array.prototype.slice.call(t,0).forEach((function(table){table.setAttribute("tabindex","0")}))}}),f=n(14),h=n(63),m=n.n(h),v=n(931),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("data-view",{attrs:{title:t.title,"title-id":t.titleId,date:t.date},scopedSlots:t._u([{key:"additionalDescription",fn:function(){return[t._t("additionalDescription")]},proxy:!0},{key:"infoPanel",fn:function(){return[n("data-view-data-set-panel",{attrs:{"l-text":t.info.lText,"s-text":t.info.sText,unit:t.info.unit}})]},proxy:!0},{key:"footer",fn:function(){return[n("open-data-link",{directives:[{name:"show",rawName:"v-show",value:t.url,expression:"url"}],attrs:{url:t.url}})]},proxy:!0}],null,!0)},[n("v-data-table",{ref:"displayedTable",staticClass:"cardTable",attrs:{headers:t.chartData.headers,items:t.chartData.datasets,"items-per-page":-1,"hide-default-footer":!0,height:240,"fixed-header":!0,"mobile-breakpoint":0,"disable-sort":!0}})],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{VDataTable:v.a})},611:function(t){t.exports=JSON.parse('{"date":"2021/7/28 20:40","datasets":{"date":"2021/7/27","data":[{"code":131016,"area":"特別区","label":"千代田区","ruby":"ちよだく","count":1083},{"code":131024,"area":"特別区","label":"中央区","ruby":"ちゅうおうく","count":3336},{"code":131032,"area":"特別区","label":"港区","ruby":"みなとく","count":6571},{"code":131041,"area":"特別区","label":"新宿区","ruby":"しんじゅくく","count":10855},{"code":131059,"area":"特別区","label":"文京区","ruby":"ぶんきょうく","count":3094},{"code":131067,"area":"特別区","label":"台東区","ruby":"たいとうく","count":3734},{"code":131075,"area":"特別区","label":"墨田区","ruby":"すみだく","count":4131},{"code":131083,"area":"特別区","label":"江東区","ruby":"こうとうく","count":7183},{"code":131091,"area":"特別区","label":"品川区","ruby":"しながわく","count":6053},{"code":131105,"area":"特別区","label":"目黒区","ruby":"めぐろく","count":5689},{"code":131113,"area":"特別区","label":"大田区","ruby":"おおたく","count":9977},{"code":131121,"area":"特別区","label":"世田谷区","ruby":"せたがやく","count":14986},{"code":131130,"area":"特別区","label":"渋谷区","ruby":"しぶやく","count":5795},{"code":131148,"area":"特別区","label":"中野区","ruby":"なかのく","count":6712},{"code":131156,"area":"特別区","label":"杉並区","ruby":"すぎなみく","count":8298},{"code":131164,"area":"特別区","label":"豊島区","ruby":"としまく","count":5482},{"code":131172,"area":"特別区","label":"北区","ruby":"きたく","count":4666},{"code":131181,"area":"特別区","label":"荒川区","ruby":"あらかわく","count":3261},{"code":131199,"area":"特別区","label":"板橋区","ruby":"いたばしく","count":7697},{"code":131202,"area":"特別区","label":"練馬区","ruby":"ねりまく","count":9045},{"code":131211,"area":"特別区","label":"足立区","ruby":"あだちく","count":9411},{"code":131229,"area":"特別区","label":"葛飾区","ruby":"かつしかく","count":6461},{"code":131237,"area":"特別区","label":"江戸川区","ruby":"えどがわく","count":8825},{"code":132012,"area":"多摩地域","label":"八王子市","ruby":"はちおうじし","count":4697},{"code":132021,"area":"多摩地域","label":"立川市","ruby":"たちかわし","count":1656},{"code":132039,"area":"多摩地域","label":"武蔵野市","ruby":"むさしのし","count":1609},{"code":132047,"area":"多摩地域","label":"三鷹市","ruby":"みたかし","count":1927},{"code":132055,"area":"多摩地域","label":"青梅市","ruby":"おうめし","count":897},{"code":132063,"area":"多摩地域","label":"府中市","ruby":"ふちゅうし","count":2234},{"code":132071,"area":"多摩地域","label":"昭島市","ruby":"あきしまし","count":947},{"code":132080,"area":"多摩地域","label":"調布市","ruby":"ちょうふし","count":2365},{"code":132098,"area":"多摩地域","label":"町田市","ruby":"まちだし","count":3322},{"code":132101,"area":"多摩地域","label":"小金井市","ruby":"こがねいし","count":1173},{"code":132110,"area":"多摩地域","label":"小平市","ruby":"こだいらし","count":1385},{"code":132128,"area":"多摩地域","label":"日野市","ruby":"ひのし","count":1360},{"code":132136,"area":"多摩地域","label":"東村山市","ruby":"ひがしむらやまし","count":1025},{"code":132144,"area":"多摩地域","label":"国分寺市","ruby":"こくぶんじし","count":1022},{"code":132152,"area":"多摩地域","label":"国立市","ruby":"くにたちし","count":555},{"code":132187,"area":"多摩地域","label":"福生市","ruby":"ふっさし","count":564},{"code":132195,"area":"多摩地域","label":"狛江市","ruby":"こまえし","count":758},{"code":132209,"area":"多摩地域","label":"東大和市","ruby":"ひがしやまとし","count":556},{"code":132217,"area":"多摩地域","label":"清瀬市","ruby":"きよせし","count":483},{"code":132225,"area":"多摩地域","label":"東久留米市","ruby":"ひがしくるめし","count":822},{"code":132233,"area":"多摩地域","label":"武蔵村山市","ruby":"むさしむらやまし","count":450},{"code":132241,"area":"多摩地域","label":"多摩市","ruby":"たまし","count":1121},{"code":132250,"area":"多摩地域","label":"稲城市","ruby":"いなぎし","count":653},{"code":132276,"area":"多摩地域","label":"羽村市","ruby":"はむらし","count":385},{"code":132284,"area":"多摩地域","label":"あきる野市","ruby":"あきるのし","count":630},{"code":132292,"area":"多摩地域","label":"西東京市","ruby":"にしとうきょうし","count":2001},{"code":133035,"area":"多摩地域","label":"瑞穂町","ruby":"みずほまち","count":199},{"code":133051,"area":"多摩地域","label":"日の出町","ruby":"ひのでまち","count":118},{"code":133078,"area":"多摩地域","label":"檜原村","ruby":"ひのはらむら","count":10},{"code":133086,"area":"多摩地域","label":"奥多摩町","ruby":"おくたままち","count":27},{"code":133612,"area":"島しょ地域","label":"大島町","ruby":"おおしままち","count":54},{"code":133621,"area":"島しょ地域","label":"利島村","ruby":"としまむら","count":0},{"code":133639,"area":"島しょ地域","label":"新島村","ruby":"にいじまむら","count":2},{"code":133647,"area":"島しょ地域","label":"神津島村","ruby":"こうづしまむら","count":1},{"code":133817,"area":"島しょ地域","label":"三宅村","ruby":"みやけむら","count":5},{"code":133825,"area":"島しょ地域","label":"御蔵島村","ruby":"みくらじまむら","count":2},{"code":134015,"area":"島しょ地域","label":"八丈町","ruby":"はちじょうまち","count":9},{"code":134023,"area":"島しょ地域","label":"青ヶ島村","ruby":"あおがしまむら","count":0},{"code":134210,"area":"島しょ地域","label":"小笠原村","ruby":"おがさわらむら","count":4},{"code":null,"area":null,"label":"都外","ruby":null,"count":16112},{"code":null,"area":null,"label":"調査中","ruby":null,"count":83},{"code":null,"area":null,"label":"小計","ruby":null,"count":203568}]}}')},684:function(t,e,n){"use strict";n.r(e);n(174),n(20),n(29);var o=n(24),r=n.n(o),l=n(574),c=n(611),d=n(392),f=Object(d.a)(),h={components:{ConfirmedCasesByMunicipalitiesTable:l.default},data:function(){var t=this,e=c.datasets,n=c.date,o=r()(n).format("YYYY/MM/DD HH:mm"),l={headers:[],datasets:[]};"ja"===this.$i18n.locale?l.headers=[{text:this.$t("地域"),value:"area"},{text:this.$t("ふりがな"),value:"ruby"},{text:this.$t("区市町村"),value:"label"},{text:this.$t("陽性者数"),value:"count",align:"end"}]:l.headers=[{text:this.$t("地域"),value:"area"},{text:this.$t("区市町村"),value:"label"},{text:this.$t("陽性者数"),value:"count",align:"end"}];var d=["特別区","多摩地域","島しょ地域",null];return e.data.sort((function(a,b){return a.ruby===b.ruby?0:a.ruby>b.ruby?1:-1})).sort((function(a,b){return d.indexOf(a.area)-d.indexOf(b.area)})),l.datasets=e.data.filter((function(t){return"小計"!==t.label})).map((function(e){var area=t.$t(e.area),label=t.$t(e.label),n=f(e.count);return"ja"===t.$i18n.locale?{area:area,ruby:t.$t(e.ruby),label:label,count:n}:{area:area,label:label,count:n}})),{date:o,municipalitiesTable:l,info:{sText:this.$t("{date}の累計",{date:this.$d(new Date(e.date),"date")})}}}},m=n(14),v=n(63),y=n.n(v),w=n(425),component=Object(m.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{staticClass:"DataCard ConfirmedCasesByMunicipalitiesCard",attrs:{cols:"12",md:"6"}},[n("client-only",[n("confirmed-cases-by-municipalities-table",{attrs:{title:t.$t("陽性者数（区市町村別）"),"title-id":"number-of-confirmed-cases-by-municipalities","chart-data":t.municipalitiesTable,date:t.date,info:t.info,url:"https://catalog.data.metro.tokyo.lg.jp/dataset/t000010d0000000085"},scopedSlots:t._u([{key:"additionalDescription",fn:function(){return[n("span",[t._v(t._s(t.$t("（注）")))]),t._v(" "),n("ul",[n("li",[t._v("\n            "+t._s(t.$t("前日までに報告された陽性者数の累計値"))+"\n          ")]),t._v(" "),n("li",[t._v("\n            "+t._s(t.$t("チャーター機帰国者、クルーズ船乗客等は含まれていない"))+"\n          ")])])]},proxy:!0}])})],1)],1)}),[],!1,null,null,null);e.default=component.exports;y()(component,{VCol:w.a})}}]);