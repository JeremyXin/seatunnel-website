"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[13140],{15680:(e,t,n)=>{n.d(t,{xA:()=>y,yg:()=>s});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),o=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},y=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,y=g(e,["components","mdxType","originalType","parentName"]),u=o(n),d=r,s=u["".concat(p,".").concat(d)]||u[d]||m[d]||l;return n?a.createElement(s,i(i({ref:t},y),{},{components:n})):a.createElement(s,i({ref:t},y))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var g={};for(var p in t)hasOwnProperty.call(t,p)&&(g[p]=t[p]);g.originalType=e,g[u]="string"==typeof e?e:r,i[1]=g;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},53128:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>g,toc:()=>o});var a=n(58168),r=(n(96540),n(15680));const l={},i="\u62c6\u5206",g={unversionedId:"transform-v2/split",id:"version-2.3.6/transform-v2/split",title:"\u62c6\u5206",description:"\u62c6\u5206\u8f6c\u6362\u63d2\u4ef6",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.3.6/transform-v2/split.md",sourceDirName:"transform-v2",slug:"/transform-v2/split",permalink:"/zh-CN/docs/2.3.6/transform-v2/split",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.3.6/transform-v2/split.md",tags:[],version:"2.3.6",frontMatter:{},sidebar:"docs",previous:{title:"\u66ff\u6362",permalink:"/zh-CN/docs/2.3.6/transform-v2/replace"},next:{title:"SQL\u51fd\u6570",permalink:"/zh-CN/docs/2.3.6/transform-v2/sql-functions"}},p={},o=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:2},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",level:2},{value:"separator string",id:"separator-string",level:3},{value:"split_fieldstring",id:"split_fieldstring",level:3},{value:"output_fieldsarray",id:"output_fieldsarray",level:3},{value:"common options string",id:"common-options-string",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u66f4\u65b0\u65e5\u5fd7",id:"\u66f4\u65b0\u65e5\u5fd7",level:2},{value:"\u65b0\u7248\u672c",id:"\u65b0\u7248\u672c",level:3}],y={toc:o},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,a.A)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"\u62c6\u5206"},"\u62c6\u5206"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u62c6\u5206\u8f6c\u6362\u63d2\u4ef6")),(0,r.yg)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,r.yg)("p",null,"\u62c6\u5206\u4e00\u4e2a\u5b57\u6bb5\u4e3a\u591a\u4e2a\u5b57\u6bb5\u3002"),(0,r.yg)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.yg)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,r.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"separator"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"split_field"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"output_fields"),(0,r.yg)("td",{parentName:"tr",align:null},"array"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null})))),(0,r.yg)("h3",{id:"separator-string"},"separator ","[string]"),(0,r.yg)("p",null,"\u62c6\u5206\u5185\u5bb9\u7684\u5206\u9694\u7b26"),(0,r.yg)("h3",{id:"split_fieldstring"},"split_field","[string]"),(0,r.yg)("p",null,"\u9700\u8981\u62c6\u5206\u7684\u5b57\u6bb5"),(0,r.yg)("h3",{id:"output_fieldsarray"},"output_fields","[array]"),(0,r.yg)("p",null,"\u62c6\u5206\u540e\u7684\u7ed3\u679c\u5b57\u6bb5"),(0,r.yg)("h3",{id:"common-options-string"},"common options ","[string]"),(0,r.yg)("p",null,"\u8f6c\u6362\u63d2\u4ef6\u7684\u5e38\u89c1\u53c2\u6570, \u8bf7\u53c2\u8003  ",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.3.6/transform-v2/common-options"},"Transform Plugin")," \u4e86\u89e3\u8be6\u60c5"),(0,r.yg)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.yg)("p",null,"\u6e90\u7aef\u6570\u636e\u8bfb\u53d6\u7684\u8868\u683c\u5982\u4e0b\uff1a"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"age"),(0,r.yg)("th",{parentName:"tr",align:null},"card"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Joy Ding"),(0,r.yg)("td",{parentName:"tr",align:null},"20"),(0,r.yg)("td",{parentName:"tr",align:null},"123")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"May Ding"),(0,r.yg)("td",{parentName:"tr",align:null},"20"),(0,r.yg)("td",{parentName:"tr",align:null},"123")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Kin Dom"),(0,r.yg)("td",{parentName:"tr",align:null},"20"),(0,r.yg)("td",{parentName:"tr",align:null},"123")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Joy Dom"),(0,r.yg)("td",{parentName:"tr",align:null},"20"),(0,r.yg)("td",{parentName:"tr",align:null},"123")))),(0,r.yg)("p",null,"\u6211\u4eec\u60f3\u8981\u5c06 ",(0,r.yg)("inlineCode",{parentName:"p"},"name")," \u5b57\u6bb5\u62c6\u5206\u4e3a ",(0,r.yg)("inlineCode",{parentName:"p"},"first_name")," \u548c ",(0,r.yg)("inlineCode",{parentName:"p"},"second_name"),"\uff0c\u6211\u4eec\u53ef\u4ee5\u50cf\u8fd9\u6837\u6dfb\u52a0 ",(0,r.yg)("inlineCode",{parentName:"p"},"Split")," \u8f6c\u6362\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'transform {\n  Split {\n    source_table_name = "fake"\n    result_table_name = "fake1"\n    separator = " "\n    split_field = "name"\n    output_fields = [first_name, second_name]\n  }\n}\n')),(0,r.yg)("p",null,"\u90a3\u4e48\u7ed3\u679c\u8868 ",(0,r.yg)("inlineCode",{parentName:"p"},"fake1")," \u4e2d\u7684\u6570\u636e\u5c06\u4f1a\u50cf\u8fd9\u6837\uff1a"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"age"),(0,r.yg)("th",{parentName:"tr",align:null},"card"),(0,r.yg)("th",{parentName:"tr",align:null},"first_name"),(0,r.yg)("th",{parentName:"tr",align:null},"last_name"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Joy Ding"),(0,r.yg)("td",{parentName:"tr",align:null},"20"),(0,r.yg)("td",{parentName:"tr",align:null},"123"),(0,r.yg)("td",{parentName:"tr",align:null},"Joy"),(0,r.yg)("td",{parentName:"tr",align:null},"Ding")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"May Ding"),(0,r.yg)("td",{parentName:"tr",align:null},"20"),(0,r.yg)("td",{parentName:"tr",align:null},"123"),(0,r.yg)("td",{parentName:"tr",align:null},"May"),(0,r.yg)("td",{parentName:"tr",align:null},"Ding")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Kin Dom"),(0,r.yg)("td",{parentName:"tr",align:null},"20"),(0,r.yg)("td",{parentName:"tr",align:null},"123"),(0,r.yg)("td",{parentName:"tr",align:null},"Kin"),(0,r.yg)("td",{parentName:"tr",align:null},"Dom")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Joy Dom"),(0,r.yg)("td",{parentName:"tr",align:null},"20"),(0,r.yg)("td",{parentName:"tr",align:null},"123"),(0,r.yg)("td",{parentName:"tr",align:null},"Joy"),(0,r.yg)("td",{parentName:"tr",align:null},"Dom")))),(0,r.yg)("h2",{id:"\u66f4\u65b0\u65e5\u5fd7"},"\u66f4\u65b0\u65e5\u5fd7"),(0,r.yg)("h3",{id:"\u65b0\u7248\u672c"},"\u65b0\u7248\u672c"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u6dfb\u52a0\u62c6\u5206\u8f6c\u6362\u8fde\u63a5\u5668")))}m.isMDXComponent=!0}}]);