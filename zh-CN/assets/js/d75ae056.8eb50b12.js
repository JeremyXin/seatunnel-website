"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[15892],{15680:(e,t,n)=>{n.d(t,{xA:()=>y,yg:()=>c});var a=n(96540);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var m=a.createContext({}),p=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},y=function(e){var t=p(e.components);return a.createElement(m.Provider,{value:t},e.children)},d="mdxType",o={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},N=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,m=e.parentName,y=g(e,["components","mdxType","originalType","parentName"]),d=p(n),N=l,c=d["".concat(m,".").concat(N)]||d[N]||o[N]||r;return n?a.createElement(c,i(i({ref:t},y),{},{components:n})):a.createElement(c,i({ref:t},y))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=N;var g={};for(var m in t)hasOwnProperty.call(t,m)&&(g[m]=t[m]);g.originalType=e,g[d]="string"==typeof e?e:l,i[1]=g;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}N.displayName="MDXCreateElement"},96673:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>o,frontMatter:()=>r,metadata:()=>g,toc:()=>p});var a=n(58168),l=(n(96540),n(15680));const r={},i="Schema \u7279\u6027\u7b80\u4ecb",g={unversionedId:"concept/schema-feature",id:"version-2.3.6/concept/schema-feature",title:"Schema \u7279\u6027\u7b80\u4ecb",description:"\u4e3a\u4ec0\u4e48\u6211\u4eec\u9700\u8981Schema",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.3.6/concept/schema-feature.md",sourceDirName:"concept",slug:"/concept/schema-feature",permalink:"/zh-CN/docs/2.3.6/concept/schema-feature",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.3.6/concept/schema-feature.md",tags:[],version:"2.3.6",frontMatter:{},sidebar:"docs",previous:{title:"Connector V2 \u529f\u80fd\u7b80\u4ecb",permalink:"/zh-CN/docs/2.3.6/concept/connector-v2-features"},next:{title:"JobEnvConfig",permalink:"/zh-CN/docs/2.3.6/concept/JobEnvConfig"}},m={},p=[{value:"\u4e3a\u4ec0\u4e48\u6211\u4eec\u9700\u8981Schema",id:"\u4e3a\u4ec0\u4e48\u6211\u4eec\u9700\u8981schema",level:2},{value:"SchemaOptions",id:"schemaoptions",level:2},{value:"table",id:"table",level:3},{value:"schema_first",id:"schema_first",level:3},{value:"comment",id:"comment",level:3},{value:"Columns",id:"columns",level:3},{value:"\u76ee\u524d\u652f\u6301\u54ea\u4e9b\u7c7b\u578b",id:"\u76ee\u524d\u652f\u6301\u54ea\u4e9b\u7c7b\u578b",level:4},{value:"\u5982\u4f55\u58f0\u660e\u652f\u6301\u7684\u7c7b\u578b",id:"\u5982\u4f55\u58f0\u660e\u652f\u6301\u7684\u7c7b\u578b",level:4},{value:"\u4e3b\u952e\uff08PrimaryKey\uff09",id:"\u4e3b\u952eprimarykey",level:3},{value:"\u7ea6\u675f\u952e\uff08constraintKeys\uff09",id:"\u7ea6\u675f\u952econstraintkeys",level:3},{value:"\u76ee\u524d\u652f\u6301\u54ea\u4e9b\u7ea6\u675f\u7c7b\u578b",id:"\u76ee\u524d\u652f\u6301\u54ea\u4e9b\u7ea6\u675f\u7c7b\u578b",level:4},{value:"\u5982\u4f55\u4f7f\u7528schema",id:"\u5982\u4f55\u4f7f\u7528schema",level:2},{value:"\u63a8\u8350",id:"\u63a8\u8350",level:3},{value:"\u5df2\u5f03\u7528",id:"\u5df2\u5f03\u7528",level:3},{value:"\u6211\u4eec\u4ec0\u4e48\u65f6\u5019\u5e94\u8be5\u4f7f\u7528\u5b83\uff0c\u4ec0\u4e48\u65f6\u5019\u4e0d\u5e94\u8be5\u4f7f\u7528\u5b83",id:"\u6211\u4eec\u4ec0\u4e48\u65f6\u5019\u5e94\u8be5\u4f7f\u7528\u5b83\u4ec0\u4e48\u65f6\u5019\u4e0d\u5e94\u8be5\u4f7f\u7528\u5b83",level:2}],y={toc:p},d="wrapper";function o(e){let{components:t,...n}=e;return(0,l.yg)(d,(0,a.A)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"schema-\u7279\u6027\u7b80\u4ecb"},"Schema \u7279\u6027\u7b80\u4ecb"),(0,l.yg)("h2",{id:"\u4e3a\u4ec0\u4e48\u6211\u4eec\u9700\u8981schema"},"\u4e3a\u4ec0\u4e48\u6211\u4eec\u9700\u8981Schema"),(0,l.yg)("p",null,"\u67d0\u4e9bNoSQL\u6570\u636e\u5e93\u6216\u6d88\u606f\u961f\u5217\u6ca1\u6709\u4e25\u683c\u9650\u5236schema\uff0c\u56e0\u6b64\u65e0\u6cd5\u901a\u8fc7api\u83b7\u53d6schema\u3002\n\u8fd9\u65f6\u9700\u8981\u5b9a\u4e49\u4e00\u4e2aschema\u6765\u8f6c\u6362\u4e3aTableSchema\u5e76\u83b7\u53d6\u6570\u636e\u3002"),(0,l.yg)("h2",{id:"schemaoptions"},"SchemaOptions"),(0,l.yg)("p",null,"\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528SchemaOptions\u5b9a\u4e49schema, SchemaOptions\u5305\u542b\u4e86\u4e00\u4e9b\u5b9a\u4e49schema\u7684\u914d\u7f6e\u3002 \u4f8b\u5982\uff1acolumns, primaryKey, constraintKeys\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'schema = {\n    table = "database.schema.table"\n    schema_first = false\n    comment = "comment"\n    columns = [\n    ...\n    ]\n    primaryKey {\n    ...\n    }\n    \n    constraintKeys {\n    ...\n    }\n}\n')),(0,l.yg)("h3",{id:"table"},"table"),(0,l.yg)("p",null,"schema\u6240\u5c5e\u7684\u8868\u6807\u8bc6\u7b26\u7684\u8868\u5168\u540d\uff0c\u5305\u542b\u6570\u636e\u5e93\u3001schema\u3001\u8868\u540d\u3002 \u4f8b\u5982 ",(0,l.yg)("inlineCode",{parentName:"p"},"database.schema.table"),"\u3001",(0,l.yg)("inlineCode",{parentName:"p"},"database.table"),"\u3001",(0,l.yg)("inlineCode",{parentName:"p"},"table"),"\u3002"),(0,l.yg)("h3",{id:"schema_first"},"schema_first"),(0,l.yg)("p",null,"\u9ed8\u8ba4\u662ffalse\u3002"),(0,l.yg)("p",null,"\u5982\u679cschema_first\u662ftrue, schema\u4f1a\u4f18\u5148\u4f7f\u7528, \u8fd9\u610f\u5473\u7740\u5982\u679c\u6211\u4eec\u8bbe\u7f6e ",(0,l.yg)("inlineCode",{parentName:"p"},'table = "a.b"'),", ",(0,l.yg)("inlineCode",{parentName:"p"},"a")," \u4f1a\u88ab\u89e3\u6790\u4e3aschema\u800c\u4e0d\u662f\u6570\u636e\u5e93, \u90a3\u4e48\u6211\u4eec\u53ef\u4ee5\u652f\u6301\u5199\u5165 ",(0,l.yg)("inlineCode",{parentName:"p"},'table = "schema.table"'),"."),(0,l.yg)("h3",{id:"comment"},"comment"),(0,l.yg)("p",null,"schema\u6240\u5c5e\u7684 CatalogTable \u7684\u6ce8\u91ca\u3002"),(0,l.yg)("h3",{id:"columns"},"Columns"),(0,l.yg)("p",null,"Columns \u662f\u7528\u4e8e\u5b9a\u4e49\u6a21\u5f0f\u4e2d\u7684\u5217\u7684\u914d\u7f6e\u5217\u8868\uff0c\u6bcf\u5217\u53ef\u4ee5\u5305\u542b\u540d\u79f0\uff08name\uff09\u3001\u7c7b\u578b(type)\u3001\u662f\u5426\u53ef\u7a7a(nullable)\u3001\u9ed8\u8ba4\u503c(defaultValue)\u3001\u6ce8\u91ca\uff08comment\uff09\u5b57\u6bb5\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'columns = [\n       {\n          name = id\n          type = bigint\n          nullable = false\n          columnLength = 20\n          defaultValue = 0\n          comment = "primary key id"\n       }\n]\n')),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:"left"},"\u5b57\u6bb5"),(0,l.yg)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u987b"),(0,l.yg)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.yg)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"name"),(0,l.yg)("td",{parentName:"tr",align:"left"},"Yes"),(0,l.yg)("td",{parentName:"tr",align:"left"},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5217\u7684\u540d\u79f0")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"type"),(0,l.yg)("td",{parentName:"tr",align:"left"},"Yes"),(0,l.yg)("td",{parentName:"tr",align:"left"},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5217\u7684\u6570\u636e\u7c7b\u578b")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"nullable"),(0,l.yg)("td",{parentName:"tr",align:"left"},"No"),(0,l.yg)("td",{parentName:"tr",align:"left"},"true"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5217\u662f\u5426\u53ef\u7a7a")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"columnLength"),(0,l.yg)("td",{parentName:"tr",align:"left"},"No"),(0,l.yg)("td",{parentName:"tr",align:"left"},"0"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5217\u7684\u957f\u5ea6\uff0c\u5f53\u60a8\u9700\u8981\u5b9a\u4e49\u957f\u5ea6\u65f6\u5c06\u5f88\u6709\u7528")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"columnScale"),(0,l.yg)("td",{parentName:"tr",align:"left"},"No"),(0,l.yg)("td",{parentName:"tr",align:"left"},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5217\u7684\u7cbe\u5ea6\uff0c\u5f53\u60a8\u9700\u8981\u5b9a\u4e49\u7cbe\u5ea6\u65f6\u5c06\u5f88\u6709\u7528")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"defaultValue"),(0,l.yg)("td",{parentName:"tr",align:"left"},"No"),(0,l.yg)("td",{parentName:"tr",align:"left"},"null"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5217\u7684\u9ed8\u8ba4\u503c")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"comment"),(0,l.yg)("td",{parentName:"tr",align:"left"},"No"),(0,l.yg)("td",{parentName:"tr",align:"left"},"null"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5217\u7684\u6ce8\u91ca")))),(0,l.yg)("h4",{id:"\u76ee\u524d\u652f\u6301\u54ea\u4e9b\u7c7b\u578b"},"\u76ee\u524d\u652f\u6301\u54ea\u4e9b\u7c7b\u578b"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:"left"},"\u6570\u636e\u7c7b\u578b"),(0,l.yg)("th",{parentName:"tr",align:"left"},"Java\u4e2d\u7684\u503c\u7c7b\u578b"),(0,l.yg)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"string"),(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("inlineCode",{parentName:"td"},"java.lang.String")),(0,l.yg)("td",{parentName:"tr",align:"left"},"\u5b57\u7b26\u4e32")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("inlineCode",{parentName:"td"},"java.lang.Boolean")),(0,l.yg)("td",{parentName:"tr",align:"left"},"\u5e03\u5c14")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"tinyint"),(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("inlineCode",{parentName:"td"},"java.lang.Byte")),(0,l.yg)("td",{parentName:"tr",align:"left"},"\u5e38\u89c4-128 \u81f3 127 \u3002 0 \u5230 255 \u65e0\u7b26\u53f7*\u3002 \u6307\u5b9a\u62ec\u53f7\u4e2d\u7684\u6700\u5927\u4f4d\u6570\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"smallint"),(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("inlineCode",{parentName:"td"},"java.lang.Short")),(0,l.yg)("td",{parentName:"tr",align:"left"},"\u5e38\u89c4-32768 \u81f3 32767\u3002 0 \u5230 65535 \u65e0\u7b26\u53f7*\u3002 \u6307\u5b9a\u62ec\u53f7\u4e2d\u7684\u6700\u5927\u4f4d\u6570\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"int"),(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("inlineCode",{parentName:"td"},"java.lang.Integer")),(0,l.yg)("td",{parentName:"tr",align:"left"},"\u5141\u8bb8\u4ece -2,147,483,648 \u5230 2,147,483,647 \u7684\u6240\u6709\u6570\u5b57\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"bigint"),(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("inlineCode",{parentName:"td"},"java.lang.Long")),(0,l.yg)("td",{parentName:"tr",align:"left"},"\u5141\u8bb8 -9,223,372,036,854,775,808 \u548c 9,223,372,036,854,775,807 \u4e4b\u95f4\u7684\u6240\u6709\u6570\u5b57\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"float"),(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("inlineCode",{parentName:"td"},"java.lang.Float")),(0,l.yg)("td",{parentName:"tr",align:"left"},"\u4ece-1.79E+308 \u5230 1.79E+308\u6d6e\u70b9\u7cbe\u5ea6\u6570\u503c\u6570\u636e\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"double"),(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("inlineCode",{parentName:"td"},"java.lang.Double")),(0,l.yg)("td",{parentName:"tr",align:"left"},"\u53cc\u7cbe\u5ea6\u6d6e\u70b9\u3002 \u5904\u7406\u5927\u591a\u6570\u5c0f\u6570\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"decimal"),(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("inlineCode",{parentName:"td"},"java.math.BigDecimal")),(0,l.yg)("td",{parentName:"tr",align:"left"},"Double \u7c7b\u578b\u5b58\u50a8\u4e3a\u5b57\u7b26\u4e32\uff0c\u5141\u8bb8\u56fa\u5b9a\u5c0f\u6570\u70b9\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"null"),(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("inlineCode",{parentName:"td"},"java.lang.Void")),(0,l.yg)("td",{parentName:"tr",align:"left"},"null")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"bytes"),(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("inlineCode",{parentName:"td"},"byte[]")),(0,l.yg)("td",{parentName:"tr",align:"left"},"\u5b57\u8282\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"date"),(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("inlineCode",{parentName:"td"},"java.time.LocalDate")),(0,l.yg)("td",{parentName:"tr",align:"left"},"\u4ec5\u5b58\u50a8\u65e5\u671f\u3002\u4ece0001\u5e741\u67081\u65e5\u52309999 \u5e74 12 \u6708 31 \u65e5\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"time"),(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("inlineCode",{parentName:"td"},"java.time.LocalTime")),(0,l.yg)("td",{parentName:"tr",align:"left"},"\u4ec5\u5b58\u50a8\u65f6\u95f4\u3002\u7cbe\u5ea6\u4e3a 100 \u7eb3\u79d2\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"timestamp"),(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("inlineCode",{parentName:"td"},"java.time.LocalDateTime")),(0,l.yg)("td",{parentName:"tr",align:"left"},"\u5b58\u50a8\u4e00\u4e2a\u552f\u4e00\u7684\u7f16\u53f7\uff0c\u6bcf\u5f53\u521b\u5efa\u6216\u4fee\u6539\u884c\u65f6\u90fd\u4f1a\u66f4\u65b0\u8be5\u7f16\u53f7\u3002 \u65f6\u95f4\u6233\u57fa\u4e8e\u5185\u90e8\u65f6\u949f\uff0c\u4e0e\u5b9e\u9645\u65f6\u95f4\u4e0d\u5bf9\u5e94\u3002 \u6bcf\u4e2a\u8868\u53ea\u80fd\u6709\u4e00\u4e2a\u65f6\u95f4\u6233\u53d8\u91cf\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"row"),(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("inlineCode",{parentName:"td"},"org.apache.seatunnel.api.table.type.SeaTunnelRow")),(0,l.yg)("td",{parentName:"tr",align:"left"},"\u884c\u7c7b\u578b\uff0c\u53ef\u4ee5\u5d4c\u5957\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"map"),(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("inlineCode",{parentName:"td"},"java.util.Map")),(0,l.yg)("td",{parentName:"tr",align:"left"},"Map \u662f\u5c06\u952e\u6620\u5c04\u5230\u503c\u7684\u5bf9\u8c61\u3002 \u952e\u7c7b\u578b\u5305\u62ec\uff1a ",(0,l.yg)("inlineCode",{parentName:"td"},"int")," ",(0,l.yg)("inlineCode",{parentName:"td"},"string")," ",(0,l.yg)("inlineCode",{parentName:"td"},"boolean")," ",(0,l.yg)("inlineCode",{parentName:"td"},"tinyint")," ",(0,l.yg)("inlineCode",{parentName:"td"},"smallint")," ",(0,l.yg)("inlineCode",{parentName:"td"},"bigint")," ",(0,l.yg)("inlineCode",{parentName:"td"},"float")," ",(0,l.yg)("inlineCode",{parentName:"td"},"double")," ",(0,l.yg)("inlineCode",{parentName:"td"},"decimal")," ",(0,l.yg)("inlineCode",{parentName:"td"},"date")," ",(0,l.yg)("inlineCode",{parentName:"td"},"time")," ",(0,l.yg)("inlineCode",{parentName:"td"},"timestamp")," ",(0,l.yg)("inlineCode",{parentName:"td"},"null")," , and the value type includes ",(0,l.yg)("inlineCode",{parentName:"td"},"int")," ",(0,l.yg)("inlineCode",{parentName:"td"},"string")," ",(0,l.yg)("inlineCode",{parentName:"td"},"boolean")," ",(0,l.yg)("inlineCode",{parentName:"td"},"tinyint")," ",(0,l.yg)("inlineCode",{parentName:"td"},"smallint")," ",(0,l.yg)("inlineCode",{parentName:"td"},"bigint")," ",(0,l.yg)("inlineCode",{parentName:"td"},"float")," ",(0,l.yg)("inlineCode",{parentName:"td"},"double")," ",(0,l.yg)("inlineCode",{parentName:"td"},"decimal")," ",(0,l.yg)("inlineCode",{parentName:"td"},"date")," ",(0,l.yg)("inlineCode",{parentName:"td"},"time")," ",(0,l.yg)("inlineCode",{parentName:"td"},"timestamp")," ",(0,l.yg)("inlineCode",{parentName:"td"},"null")," ",(0,l.yg)("inlineCode",{parentName:"td"},"array")," ",(0,l.yg)("inlineCode",{parentName:"td"},"map")," ",(0,l.yg)("inlineCode",{parentName:"td"},"row"),".")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"array"),(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("inlineCode",{parentName:"td"},"ValueType[]")),(0,l.yg)("td",{parentName:"tr",align:"left"},"\u6570\u7ec4\u662f\u4e00\u79cd\u8868\u793a\u5143\u7d20\u96c6\u5408\u7684\u6570\u636e\u7c7b\u578b\u3002 \u5143\u7d20\u7c7b\u578b\u5305\u62ec\uff1a ",(0,l.yg)("inlineCode",{parentName:"td"},"int")," ",(0,l.yg)("inlineCode",{parentName:"td"},"string")," ",(0,l.yg)("inlineCode",{parentName:"td"},"boolean")," ",(0,l.yg)("inlineCode",{parentName:"td"},"tinyint")," ",(0,l.yg)("inlineCode",{parentName:"td"},"smallint")," ",(0,l.yg)("inlineCode",{parentName:"td"},"bigint")," ",(0,l.yg)("inlineCode",{parentName:"td"},"float")," ",(0,l.yg)("inlineCode",{parentName:"td"},"double"),".")))),(0,l.yg)("h4",{id:"\u5982\u4f55\u58f0\u660e\u652f\u6301\u7684\u7c7b\u578b"},"\u5982\u4f55\u58f0\u660e\u652f\u6301\u7684\u7c7b\u578b"),(0,l.yg)("p",null,"SeaTunnel \u63d0\u4f9b\u4e86\u4e00\u79cd\u7b80\u5355\u76f4\u63a5\u7684\u65b9\u5f0f\u6765\u58f0\u660e\u57fa\u672c\u7c7b\u578b\u3002\u57fa\u672c\u7c7b\u578b\u7684\u5173\u952e\u5b57\u5305\u62ec\uff1a",(0,l.yg)("inlineCode",{parentName:"p"},"string"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"boolean"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"tinyint"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"smallint"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"int"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"bigint"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"float"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"double"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"date"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"time"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"timestamp"),", \u548c ",(0,l.yg)("inlineCode",{parentName:"p"},"null"),"\u3002\u57fa\u672c\u7c7b\u578b\u7684\u5173\u952e\u5b57\u540d\u79f0\u53ef\u4ee5\u76f4\u63a5\u7528\u4f5c\u7c7b\u578b\u58f0\u660e\uff0c\u5e76\u4e14SeaTunnel\u5bf9\u7c7b\u578b\u5173\u952e\u5b57\u4e0d\u533a\u5206\u5927\u5c0f\u5199\u3002 \u4f8b\u5982\uff0c\u5982\u679c\u60a8\u9700\u8981\u58f0\u660e\u4e00\u4e2a\u6574\u6570\u7c7b\u578b\u7684\u5b57\u6bb5\uff0c\u60a8\u53ef\u4ee5\u7b80\u5355\u5730\u5c06\u5b57\u6bb5\u5b9a\u4e49\u4e3a",(0,l.yg)("inlineCode",{parentName:"p"},"int"),"\u6216",(0,l.yg)("inlineCode",{parentName:"p"},'"int"'),"\u3002"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"null \u7c7b\u578b\u58f0\u660e\u5fc5\u987b\u7528\u53cc\u5f15\u53f7\u5f15\u8d77\u6765, \u4f8b\u5982\uff1a",(0,l.yg)("inlineCode",{parentName:"p"},'"null"'),"\u3002 \u8fd9\u79cd\u65b9\u6cd5\u6709\u52a9\u4e8e\u907f\u514d\u4e0e ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/lightbend/config/blob/main/HOCON.md"},"HOCON")," \u4e2d\u8868\u793a\u672a\u5b9a\u4e49\u7684\u5bf9\u8c61\u7684 ",(0,l.yg)("inlineCode",{parentName:"p"},"null")," \u7c7b\u578b\u6df7\u6dc6\u3002")),(0,l.yg)("p",null,"\u58f0\u660e\u590d\u6742\u7c7b\u578b\uff08\u4f8b\u5982 ",(0,l.yg)("strong",{parentName:"p"},"decimal"),"\u3001",(0,l.yg)("strong",{parentName:"p"},"array"),"\u3001",(0,l.yg)("strong",{parentName:"p"},"map")," \u548c ",(0,l.yg)("strong",{parentName:"p"},"row"),"\uff09\u65f6\uff0c\u8bf7\u6ce8\u610f\u5177\u4f53\u6ce8\u610f\u4e8b\u9879\u3002"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u58f0\u660edecimal\u7c7b\u578b\u65f6\uff0c\u9700\u8981\u8bbe\u7f6e\u7cbe\u5ea6(precision)\u548c\u5c0f\u6570\u4f4d\u6570(scale)\uff0c\u7c7b\u578b\u5b9a\u4e49\u9075\u5faa\u201cdecimal(precision, scale)\u201d\u683c\u5f0f\u3002 \u9700\u8981\u5f3a\u8c03\u7684\u662f\uff0c\u5341\u8fdb\u5236\u7c7b\u578b\u7684\u58f0\u660e\u5fc5\u987b\u7528 ",(0,l.yg)("inlineCode",{parentName:"li"},'"')," \u62ec\u8d77\u6765\uff1b\u4e0d\u80fd\u50cf\u57fa\u672c\u7c7b\u578b\u4e00\u6837\u76f4\u63a5\u4f7f\u7528\u7c7b\u578b\u540d\u79f0\u3002\u4f8b\u5982\uff0c\u5f53\u58f0\u660e\u7cbe\u5ea6\u4e3a 10\u3001\u5c0f\u6570\u4f4d\u6570\u4e3a 2 \u7684\u5341\u8fdb\u5236\u5b57\u6bb5\u65f6\uff0c\u60a8\u53ef\u4ee5\u6307\u5b9a\u5b57\u6bb5\u7c7b\u578b\u4e3a",(0,l.yg)("inlineCode",{parentName:"li"},'"decimal(10,2)"'),"\u3002"),(0,l.yg)("li",{parentName:"ul"},"\u58f0\u660earray\u7c7b\u578b\u65f6\uff0c\u9700\u8981\u6307\u5b9a\u5143\u7d20\u7c7b\u578b\uff0c\u7c7b\u578b\u5b9a\u4e49\u9075\u5faa ",(0,l.yg)("inlineCode",{parentName:"li"},"array<T>")," \u683c\u5f0f\uff0c\u5176\u4e2d ",(0,l.yg)("inlineCode",{parentName:"li"},"T")," \u4ee3\u8868\u5143\u7d20\u7c7b\u578b\u3002\u5143\u7d20\u7c7b\u578b\u5305\u62ec",(0,l.yg)("inlineCode",{parentName:"li"},"int"),",",(0,l.yg)("inlineCode",{parentName:"li"},"string"),",",(0,l.yg)("inlineCode",{parentName:"li"},"boolean"),",",(0,l.yg)("inlineCode",{parentName:"li"},"tinyint"),",",(0,l.yg)("inlineCode",{parentName:"li"},"smallint"),",",(0,l.yg)("inlineCode",{parentName:"li"},"bigint"),",",(0,l.yg)("inlineCode",{parentName:"li"},"float")," \u548c ",(0,l.yg)("inlineCode",{parentName:"li"},"double"),"\u3002\u4e0e\u5341\u8fdb\u5236\u7c7b\u578b\u58f0\u660e\u7c7b\u4f3c\uff0c\u5b83\u4e5f\u7528 ",(0,l.yg)("inlineCode",{parentName:"li"},'"')," \u62ec\u8d77\u6765\u3002\u4f8b\u5982\uff0c\u5728\u58f0\u660e\u5177\u6709\u6574\u6570\u6570\u7ec4\u7684\u5b57\u6bb5\u65f6\uff0c\u5c06\u5b57\u6bb5\u7c7b\u578b\u6307\u5b9a\u4e3a ",(0,l.yg)("inlineCode",{parentName:"li"},'"array<int>"'),"\u3002"),(0,l.yg)("li",{parentName:"ul"},"\u58f0\u660emap\u7c7b\u578b\u65f6\uff0c\u9700\u8981\u6307\u5b9a\u952e\u548c\u503c\u7c7b\u578b\u3002map\u7c7b\u578b\u5b9a\u4e49\u9075\u5faa",(0,l.yg)("inlineCode",{parentName:"li"},"map<K,V>"),"\u683c\u5f0f\uff0c\u5176\u4e2d",(0,l.yg)("inlineCode",{parentName:"li"},"K"),"\u8868\u793a\u952e\u7c7b\u578b\uff0c",(0,l.yg)("inlineCode",{parentName:"li"},"V"),"\u8868\u793a\u503c\u7c7b\u578b\u3002 ",(0,l.yg)("inlineCode",{parentName:"li"},"K"),"\u53ef\u4ee5\u662f\u4efb\u4f55\u57fa\u672c\u7c7b\u578b\u548c\u5341\u8fdb\u5236\u7c7b\u578b\uff0c",(0,l.yg)("inlineCode",{parentName:"li"},"V"),"\u53ef\u4ee5\u662f SeaTunnel \u652f\u6301\u7684\u4efb\u4f55\u7c7b\u578b\u3002 \u4e0e\u4e4b\u524d\u7684\u7c7b\u578b\u58f0\u660e\u7c7b\u4f3c\uff0cmap\u7c7b\u578b\u58f0\u660e\u5fc5\u987b\u7528\u53cc\u5f15\u53f7\u5f15\u8d77\u6765\u3002 \u4f8b\u5982\uff0c\u5f53\u58f0\u660e\u4e00\u4e2amap\u7c7b\u578b\u7684\u5b57\u6bb5\u65f6\uff0c\u952e\u7c7b\u578b\u4e3a\u5b57\u7b26\u4e32\uff0c\u503c\u7c7b\u578b\u4e3a\u6574\u6570\uff0c\u5219\u53ef\u4ee5\u5c06\u8be5\u5b57\u6bb5\u58f0\u660e\u4e3a",(0,l.yg)("inlineCode",{parentName:"li"},'"map<string, int>"'),"\u3002"),(0,l.yg)("li",{parentName:"ul"},"\u58f0\u660erow\u7c7b\u578b\u65f6\uff0c\u9700\u8981\u5b9a\u4e49\u4e00\u4e2a ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/lightbend/config/blob/main/HOCON.md"},"HOCON")," \u5bf9\u8c61\u6765\u63cf\u8ff0\u5b57\u6bb5\u53ca\u5176\u7c7b\u578b\u3002 \u5b57\u6bb5\u7c7b\u578b\u53ef\u4ee5\u662f SeaTunnel \u652f\u6301\u7684\u4efb\u4f55\u7c7b\u578b\u3002 \u4f8b\u5982\uff0c\u5f53\u58f0\u660e\u5305\u542b\u6574\u6570\u5b57\u6bb5\u201ca\u201d\u548c\u5b57\u7b26\u4e32\u5b57\u6bb5\u201cb\u201d\u7684\u884c\u7c7b\u578b\u65f6\uff0c\u53ef\u4ee5\u5c06\u5176\u58f0\u660e\u4e3a\u201c{a = int, b = string}\u201d\u3002 \u5c06\u5b9a\u4e49\u4f5c\u4e3a\u5b57\u7b26\u4e32\u62ec\u5728 ",(0,l.yg)("inlineCode",{parentName:"li"},'"')," \u4e2d\u4e5f\u662f\u53ef\u4ee5\u63a5\u53d7\u7684\uff0c\u56e0\u6b64 ",(0,l.yg)("inlineCode",{parentName:"li"},'"{a = int, b = string}"')," \u76f8\u5f53\u4e8e ",(0,l.yg)("inlineCode",{parentName:"li"},"{a = int, c = string}"),"\u3002\u7531\u4e8e HOCON \u4e0e JSON \u517c\u5bb9\uff0c ",(0,l.yg)("inlineCode",{parentName:"li"},'"{\\"a\\":\\"int\\", \\"b\\":\\"string\\"}"')," \u7b49\u4ef7\u4e8e ",(0,l.yg)("inlineCode",{parentName:"li"},'"{a = int, b = string}"'),"\u3002")),(0,l.yg)("p",null,"\u4ee5\u4e0b\u662f\u590d\u6742\u7c7b\u578b\u58f0\u660e\u7684\u793a\u4f8b\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'schema {\n  fields {\n    c_decimal = "decimal(10, 2)"\n    c_array = "array<int>"\n    c_row = {\n        c_int = int\n        c_string = string\n        c_row = {\n            c_int = int\n        }\n    }\n    # \u5728\u6cdb\u578b\u4e2dHocon\u98ce\u683c\u58f0\u660e\u884c\u7c7b\u578b\n    map0 = "map<string, {c_int = int, c_string = string, c_row = {c_int = int}}>"\n    # \u5728\u6cdb\u578b\u4e2dJson\u98ce\u683c\u58f0\u660e\u884c\u7c7b\u578b\n    map1 = "map<string, {\\"c_int\\":\\"int\\", \\"c_string\\":\\"string\\", \\"c_row\\":{\\"c_int\\":\\"int\\"}}>"\n  }\n}\n')),(0,l.yg)("h3",{id:"\u4e3b\u952eprimarykey"},"\u4e3b\u952e\uff08PrimaryKey\uff09"),(0,l.yg)("p",null,"\u4e3b\u952e\u662f\u7528\u4e8e\u5b9a\u4e49\u6a21\u5f0f\u4e2d\u4e3b\u952e\u7684\u914d\u7f6e\uff0c\u5b83\u5305\u542bname\u3001columns\u5b57\u6bb5\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"primaryKey {\n    name = id\n    columns = [id]\n}\n")),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:"left"},"\u5b57\u6bb5"),(0,l.yg)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u987b"),(0,l.yg)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.yg)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"name"),(0,l.yg)("td",{parentName:"tr",align:"left"},"\u662f"),(0,l.yg)("td",{parentName:"tr",align:"left"},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"\u4e3b\u952e\u540d\u79f0")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"columns"),(0,l.yg)("td",{parentName:"tr",align:"left"},"\u662f"),(0,l.yg)("td",{parentName:"tr",align:"left"},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"\u4e3b\u952e\u4e2d\u7684\u5217\u5217\u8868")))),(0,l.yg)("h3",{id:"\u7ea6\u675f\u952econstraintkeys"},"\u7ea6\u675f\u952e\uff08constraintKeys\uff09"),(0,l.yg)("p",null,"\u7ea6\u675f\u952e\u662f\u7528\u4e8e\u5b9a\u4e49\u6a21\u5f0f\u4e2d\u7ea6\u675f\u952e\u7684\u914d\u7f6e\u5217\u8868\uff0c\u5b83\u5305\u542bconstraintName\uff0cconstraintType\uff0cconstraintColumns\u5b57\u6bb5\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'constraintKeys = [\n      {\n         constraintName = "id_index"\n         constraintType = KEY\n         constraintColumns = [\n            {\n                columnName = "id"\n                sortType = ASC\n            }\n         ]\n      },\n   ]\n')),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:"left"},"\u5b57\u6bb5"),(0,l.yg)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u987b"),(0,l.yg)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.yg)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"constraintName"),(0,l.yg)("td",{parentName:"tr",align:"left"},"\u662f"),(0,l.yg)("td",{parentName:"tr",align:"left"},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"\u7ea6\u675f\u952e\u7684\u540d\u79f0")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"constraintType"),(0,l.yg)("td",{parentName:"tr",align:"left"},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:"left"},"KEY"),(0,l.yg)("td",{parentName:"tr",align:null},"\u7ea6\u675f\u952e\u7684\u7c7b\u578b")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"constraintColumns"),(0,l.yg)("td",{parentName:"tr",align:"left"},"\u662f"),(0,l.yg)("td",{parentName:"tr",align:"left"},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"PrimaryKey\u4e2d\u7684\u5217\u5217\u8868\uff0c\u6bcf\u5217\u5e94\u5305\u542bconstraintType\u548csortType\uff0csortType\u652f\u6301ASC\u548cDESC\uff0c\u9ed8\u8ba4\u4e3aASC")))),(0,l.yg)("h4",{id:"\u76ee\u524d\u652f\u6301\u54ea\u4e9b\u7ea6\u675f\u7c7b\u578b"},"\u76ee\u524d\u652f\u6301\u54ea\u4e9b\u7ea6\u675f\u7c7b\u578b"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:"left"},"\u7ea6\u675f\u7c7b\u578b"),(0,l.yg)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"INDEX_KEY"),(0,l.yg)("td",{parentName:"tr",align:"left"},"\u952e")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"UNIQUE_KEY"),(0,l.yg)("td",{parentName:"tr",align:"left"},"\u552f\u4e00\u952e")))),(0,l.yg)("h2",{id:"\u5982\u4f55\u4f7f\u7528schema"},"\u5982\u4f55\u4f7f\u7528schema"),(0,l.yg)("h3",{id:"\u63a8\u8350"},"\u63a8\u8350"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'source {\n  FakeSource {\n    parallelism = 2\n    result_table_name = "fake"\n    row.num = 16\n    schema {\n        table = "FakeDatabase.FakeTable"\n        columns = [\n           {\n              name = id\n              type = bigint\n              nullable = false\n              defaultValue = 0\n              comment = "primary key id"\n           },\n           {\n              name = name\n              type = "string"\n              nullable = true\n              comment = "name"\n           },\n           {\n              name = age\n              type = int\n              nullable = true\n              comment = "age"\n           }\n       ]\n       primaryKey {\n          name = "id"\n          columnNames = [id]\n       }\n       constraintKeys = [\n          {\n             constraintName = "unique_name"\n             constraintType = UNIQUE_KEY\n             constraintColumns = [\n                {\n                    columnName = "name"\n                    sortType = ASC\n                }\n             ]\n          },\n       ]\n      }\n    }\n}\n')),(0,l.yg)("h3",{id:"\u5df2\u5f03\u7528"},"\u5df2\u5f03\u7528"),(0,l.yg)("p",null,"\u5982\u679c\u4f60\u53ea\u9700\u8981\u5b9a\u4e49\u5217\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u5b57\u6bb5\u6765\u5b9a\u4e49\u5217\uff0c\u8fd9\u662f\u4e00\u79cd\u7b80\u5355\u7684\u65b9\u5f0f\uff0c\u4f46\u5c06\u6765\u4f1a\u88ab\u5220\u9664\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'source {\n  FakeSource {\n    parallelism = 2\n    result_table_name = "fake"\n    row.num = 16\n    schema = {\n      fields {\n        id = bigint\n        c_map = "map<string, smallint>"\n        c_array = "array<tinyint>"\n        c_string = string\n        c_boolean = boolean\n        c_tinyint = tinyint\n        c_smallint = smallint\n        c_int = int\n        c_bigint = bigint\n        c_float = float\n        c_double = double\n        c_decimal = "decimal(2, 1)"\n        c_bytes = bytes\n        c_date = date\n        c_timestamp = timestamp\n      }\n    }\n  }\n}\n')),(0,l.yg)("h2",{id:"\u6211\u4eec\u4ec0\u4e48\u65f6\u5019\u5e94\u8be5\u4f7f\u7528\u5b83\u4ec0\u4e48\u65f6\u5019\u4e0d\u5e94\u8be5\u4f7f\u7528\u5b83"},"\u6211\u4eec\u4ec0\u4e48\u65f6\u5019\u5e94\u8be5\u4f7f\u7528\u5b83\uff0c\u4ec0\u4e48\u65f6\u5019\u4e0d\u5e94\u8be5\u4f7f\u7528\u5b83"),(0,l.yg)("p",null,"\u5982\u679c\u9009\u9879\u4e2d\u6709",(0,l.yg)("inlineCode",{parentName:"p"},"schema"),"\u914d\u7f6e\u9879\u76ee\uff0c\u5219\u8fde\u63a5\u5668\u53ef\u4ee5\u81ea\u5b9a\u4e49schema\u3002 \u6bd4\u5982 ",(0,l.yg)("inlineCode",{parentName:"p"},"Fake")," ",(0,l.yg)("inlineCode",{parentName:"p"},"Pulsar")," ",(0,l.yg)("inlineCode",{parentName:"p"},"Http")," \u6e90\u8fde\u63a5\u5668\u7b49\u3002"))}o.isMDXComponent=!0}}]);