"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[32708],{15680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>d});var r=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=u(t),g=o,d=c["".concat(l,".").concat(g)]||c[g]||m[g]||a;return t?r.createElement(d,i(i({ref:n},s),{},{components:t})):r.createElement(d,i({ref:n},s))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=g;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[c]="string"==typeof e?e:o,i[1]=p;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},76353:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>u});var r=t(58168),o=(t(96540),t(15680));const a={sidebar_position:4},i="Sink Common Options",p={unversionedId:"connector-v2/sink-common-options",id:"connector-v2/sink-common-options",title:"Sink Common Options",description:"Common parameters of sink connectors",source:"@site/docs/connector-v2/sink-common-options.md",sourceDirName:"connector-v2",slug:"/connector-v2/sink-common-options",permalink:"/docs/connector-v2/sink-common-options",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/docs/connector-v2/sink-common-options.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docs",previous:{title:"Source Common Options",permalink:"/docs/connector-v2/source-common-options"},next:{title:"Error Quick Reference Manual",permalink:"/docs/connector-v2/Error-Quick-Reference-Manual"}},l={},u=[{value:"Task Example",id:"task-example",level:2},{value:"Simple:",id:"simple",level:3}],s={toc:u},c="wrapper";function m(e){let{components:n,...t}=e;return(0,o.yg)(c,(0,r.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"sink-common-options"},"Sink Common Options"),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Common parameters of sink connectors")),(0,o.yg)("p",null,":::warn"),(0,o.yg)("p",null,"The old configuration name ",(0,o.yg)("inlineCode",{parentName:"p"},"source_table_name")," is deprecated, please migrate to the new name ",(0,o.yg)("inlineCode",{parentName:"p"},"plugin_input")," as soon as possible."),(0,o.yg)("p",null,":::"),(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:null},"Name"),(0,o.yg)("th",{parentName:"tr",align:null},"Type"),(0,o.yg)("th",{parentName:"tr",align:null},"Required"),(0,o.yg)("th",{parentName:"tr",align:null},"Default"),(0,o.yg)("th",{parentName:"tr",align:null},"Description"))),(0,o.yg)("tbody",{parentName:"table"},(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"plugin_input"),(0,o.yg)("td",{parentName:"tr",align:null},"String"),(0,o.yg)("td",{parentName:"tr",align:null},"No"),(0,o.yg)("td",{parentName:"tr",align:null},"-"),(0,o.yg)("td",{parentName:"tr",align:null},"When ",(0,o.yg)("inlineCode",{parentName:"td"},"plugin_input")," is not specified, the current plug-in processes the data set ",(0,o.yg)("inlineCode",{parentName:"td"},"dataset")," output by the previous plugin in the configuration file ",(0,o.yg)("br",null)," When ",(0,o.yg)("inlineCode",{parentName:"td"},"plugin_input")," is specified, the current plug-in is processing the data set corresponding to this parameter.")))),(0,o.yg)("h1",{id:"important-note"},"Important note"),(0,o.yg)("p",null,"When the job configuration ",(0,o.yg)("inlineCode",{parentName:"p"},"plugin_input")," you must set the ",(0,o.yg)("inlineCode",{parentName:"p"},"plugin_output")," parameter"),(0,o.yg)("h2",{id:"task-example"},"Task Example"),(0,o.yg)("h3",{id:"simple"},"Simple:"),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"This is the process of passing a data source through two transforms and returning two different pipiles to different sinks")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},'source {\n    FakeSourceStream {\n      parallelism = 2\n      plugin_output = "fake"\n      field_name = "name,age"\n    }\n}\n\ntransform {\n    Filter {\n      plugin_input = "fake"\n      fields = [name]\n      plugin_output = "fake_name"\n    }\n    Filter {\n      plugin_input = "fake"\n      fields = [age]\n      plugin_output = "fake_age"\n    }\n}\n\nsink {\n    Console {\n      plugin_input = "fake_name"\n    }\n    Console {\n      plugin_input = "fake_age"\n    }\n}\n')),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"If the job only have one source and one(or zero) transform and one sink, You do not need to specify ",(0,o.yg)("inlineCode",{parentName:"p"},"plugin_input")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"plugin_output")," for connector.\nIf the number of any operator in source, transform and sink is greater than 1, you must specify the ",(0,o.yg)("inlineCode",{parentName:"p"},"plugin_input")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"plugin_output")," for each connector in the job.")))}m.isMDXComponent=!0}}]);