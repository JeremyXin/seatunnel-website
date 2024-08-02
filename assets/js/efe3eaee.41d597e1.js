"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[22942],{15680:(e,n,a)=>{a.d(n,{xA:()=>u,yg:()=>d});var t=a(96540);function l(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){l(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,l=function(e,n){if(null==e)return{};var a,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(l[a]=e[a]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=t.createContext({}),p=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},u=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},y=t.forwardRef((function(e,n){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(a),y=l,d=c["".concat(s,".").concat(y)]||c[y]||m[y]||r;return a?t.createElement(d,i(i({ref:n},u),{},{components:a})):t.createElement(d,i({ref:n},u))}));function d(e,n){var a=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=y;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[c]="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=a[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}y.displayName="MDXCreateElement"},98121:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var t=a(58168),l=(a(96540),a(15680));const r={},i="Sink Options Placeholders",o={unversionedId:"concept/sink-options-placeholders",id:"version-2.3.6/concept/sink-options-placeholders",title:"Sink Options Placeholders",description:"Introduction",source:"@site/versioned_docs/version-2.3.6/concept/sink-options-placeholders.md",sourceDirName:"concept",slug:"/concept/sink-options-placeholders",permalink:"/docs/2.3.6/concept/sink-options-placeholders",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.3.6/concept/sink-options-placeholders.md",tags:[],version:"2.3.6",frontMatter:{}},s={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Support Those Engines",id:"support-those-engines",level:2},{value:"Placeholder",id:"placeholder",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Example 1",id:"example-1",level:3},{value:"Example 2",id:"example-2",level:3}],u={toc:p},c="wrapper";function m(e){let{components:n,...a}=e;return(0,l.yg)(c,(0,t.A)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"sink-options-placeholders"},"Sink Options Placeholders"),(0,l.yg)("h2",{id:"introduction"},"Introduction"),(0,l.yg)("p",null,"The SeaTunnel provides a sink options placeholders feature that allows you to get upstream table metadata through placeholders."),(0,l.yg)("p",null,"This functionality is essential when you need to dynamically get upstream table metadata (such as multi-table writes)."),(0,l.yg)("p",null,"This document will guide you through the usage of these placeholders and how to leverage them effectively."),(0,l.yg)("h2",{id:"support-those-engines"},"Support Those Engines"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"SeaTunnel Zeta",(0,l.yg)("br",null),"\nFlink",(0,l.yg)("br",null),"\nSpark",(0,l.yg)("br",null))),(0,l.yg)("h2",{id:"placeholder"},"Placeholder"),(0,l.yg)("p",null,"The placeholders are mainly controlled by the following expressions:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"${database_name}"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Used to get the database in the upstream catalog table"),(0,l.yg)("li",{parentName:"ul"},"Default values can also be specified via expressions\uff1a",(0,l.yg)("inlineCode",{parentName:"li"},"${database_name:default_my_db}")))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"${schema_name}"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Used to get the schema in the upstream catalog table"),(0,l.yg)("li",{parentName:"ul"},"Default values can also be specified via expressions\uff1a",(0,l.yg)("inlineCode",{parentName:"li"},"${schema_name:default_my_schema}")))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"${table_name}"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Used to get the table in the upstream catalog table"),(0,l.yg)("li",{parentName:"ul"},"Default values can also be specified via expressions\uff1a",(0,l.yg)("inlineCode",{parentName:"li"},"${table_name:default_my_table}")))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"${schema_full_name}"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Used to get the schema full path(database & schema) in the upstream catalog table"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"${table_full_name}"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Used to get the table full path(database & schema & table) in the upstream catalog table"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"${primary_key}"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Used to get the table primary-key fields in the upstream catalog table"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"${unique_key}"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Used to get the table unique-key fields in the upstream catalog table"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"${field_names}"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Used to get the table field keys in the upstream catalog table")))),(0,l.yg)("h2",{id:"configuration"},"Configuration"),(0,l.yg)("p",null,(0,l.yg)("em",{parentName:"p"},"Requires"),":"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Make sure the sink connector you are using has implemented ",(0,l.yg)("inlineCode",{parentName:"li"},"TableSinkFactory")," API")),(0,l.yg)("h3",{id:"example-1"},"Example 1"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  // ignore...\n}\nsource {\n  MySQL-CDC {\n    // ignore...\n  }\n}\n\ntransform {\n  // ignore...\n}\n\nsink {\n  jdbc {\n    url = "jdbc:mysql://localhost:3306"\n    driver = "com.mysql.cj.jdbc.Driver"\n    user = "root"\n    password = "123456"\n\n    database = "${database_name}_test"\n    table = "${table_name}_test"\n    primary_keys = ["${primary_key}"]\n  }\n}\n')),(0,l.yg)("h3",{id:"example-2"},"Example 2"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  // ignore...\n}\nsource {\n  Oracle-CDC {\n    // ignore...\n  }\n}\n\ntransform {\n  // ignore...\n}\n\nsink {\n  jdbc {\n    url = "jdbc:mysql://localhost:3306"\n    driver = "com.mysql.cj.jdbc.Driver"\n    user = "root"\n    password = "123456"\n\n    database = "${schema_name}_test"\n    table = "${table_name}_test"\n    primary_keys = ["${primary_key}"]\n  }\n}\n')),(0,l.yg)("p",null,"We will complete the placeholder replacement before the connector is started, ensuring that the sink options is ready before use.\nIf the variable is not replaced, it may be that the upstream table metadata is missing this option, for example:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"mysql")," source not contain ",(0,l.yg)("inlineCode",{parentName:"li"},"${schema_name}")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"oracle")," source not contain ",(0,l.yg)("inlineCode",{parentName:"li"},"${databse_name}")),(0,l.yg)("li",{parentName:"ul"},"...")))}m.isMDXComponent=!0}}]);