"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[68614],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>c});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var g=a.createContext({}),u=function(e){var t=a.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(g.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,g=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=u(n),y=r,c=m["".concat(g,".").concat(y)]||m[y]||p[y]||l;return n?a.createElement(c,i(i({ref:t},s),{},{components:n})):a.createElement(c,i({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=y;var o={};for(var g in t)hasOwnProperty.call(t,g)&&(o[g]=t[g]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},15681:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=n(58168),r=(n(96540),n(15680));const l={},i="Rabbitmq",o={unversionedId:"connector-v2/source/Rabbitmq",id:"connector-v2/source/Rabbitmq",title:"Rabbitmq",description:"Rabbitmq source connector",source:"@site/docs/connector-v2/source/Rabbitmq.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/Rabbitmq",permalink:"/zh-CN/docs/connector-v2/source/Rabbitmq",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/source/Rabbitmq.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Apache Pulsar",permalink:"/zh-CN/docs/connector-v2/source/Pulsar"},next:{title:"Redis",permalink:"/zh-CN/docs/connector-v2/source/Redis"}},g={},u=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"host string",id:"host-string",level:3},{value:"port int",id:"port-int",level:3},{value:"virtual_host string",id:"virtual_host-string",level:3},{value:"username string",id:"username-string",level:3},{value:"password string",id:"password-string",level:3},{value:"url string",id:"url-string",level:3},{value:"queue_name string",id:"queue_name-string",level:3},{value:"routing_key string",id:"routing_key-string",level:3},{value:"exchange string",id:"exchange-string",level:3},{value:"schema Config",id:"schema-config",level:3},{value:"fields Config",id:"fields-config",level:4},{value:"network_recovery_interval int",id:"network_recovery_interval-int",level:3},{value:"topology_recovery string",id:"topology_recovery-string",level:3},{value:"automatic_recovery string",id:"automatic_recovery-string",level:3},{value:"connection_timeout int",id:"connection_timeout-int",level:3},{value:"requested_channel_max int",id:"requested_channel_max-int",level:3},{value:"requested_frame_max int",id:"requested_frame_max-int",level:3},{value:"requested_heartbeat int",id:"requested_heartbeat-int",level:3},{value:"prefetch_count int",id:"prefetch_count-int",level:3},{value:"delivery_timeout long",id:"delivery_timeout-long",level:3},{value:"common options",id:"common-options",level:3},{value:"Example",id:"example",level:2},{value:"Changelog",id:"changelog",level:2},{value:"next version",id:"next-version",level:3}],s={toc:u},m="wrapper";function p(e){let{components:t,...n}=e;return(0,r.yg)(m,(0,a.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"rabbitmq"},"Rabbitmq"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Rabbitmq source connector")),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"Used to read data from Rabbitmq."),(0,r.yg)("h2",{id:"key-features"},"Key features"),(0,r.yg)("ul",{className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"batch")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"stream")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"exactly-once")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"column projection")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"parallelism")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"support user-defined split"))),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"The source must be non-parallel (parallelism set to 1) in order to achieve exactly-once. This limitation is mainly due to RabbitMQ\u2019s approach to dispatching messages from a single queue to multiple consumers.")),(0,r.yg)("h2",{id:"options"},"Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"type"),(0,r.yg)("th",{parentName:"tr",align:null},"required"),(0,r.yg)("th",{parentName:"tr",align:null},"default value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"host"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"port"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"virtual_host"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"username"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"password"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"queue_name"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"schema"),(0,r.yg)("td",{parentName:"tr",align:null},"config"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"url"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"routing_key"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"exchange"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"network_recovery_interval"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"topology_recovery_enabled"),(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"automatic_recovery_enabled"),(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"connection_timeout"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"requested_channel_max"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"requested_frame_max"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"requested_heartbeat"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"prefetch_count"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"delivery_timeout"),(0,r.yg)("td",{parentName:"tr",align:null},"long"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"common-options"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")))),(0,r.yg)("h3",{id:"host-string"},"host ","[string]"),(0,r.yg)("p",null,"the default host to use for connections"),(0,r.yg)("h3",{id:"port-int"},"port ","[int]"),(0,r.yg)("p",null,"the default port to use for connections"),(0,r.yg)("h3",{id:"virtual_host-string"},"virtual_host ","[string]"),(0,r.yg)("p",null,"virtual host \u2013 the virtual host to use when connecting to the broker"),(0,r.yg)("h3",{id:"username-string"},"username ","[string]"),(0,r.yg)("p",null,"the AMQP user name to use when connecting to the broker"),(0,r.yg)("h3",{id:"password-string"},"password ","[string]"),(0,r.yg)("p",null,"the password to use when connecting to the broker"),(0,r.yg)("h3",{id:"url-string"},"url ","[string]"),(0,r.yg)("p",null,"convenience method for setting the fields in an AMQP URI: host, port, username, password and virtual host"),(0,r.yg)("h3",{id:"queue_name-string"},"queue_name ","[string]"),(0,r.yg)("p",null,"the queue to publish the message to"),(0,r.yg)("h3",{id:"routing_key-string"},"routing_key ","[string]"),(0,r.yg)("p",null,"the routing key to publish the message to"),(0,r.yg)("h3",{id:"exchange-string"},"exchange ","[string]"),(0,r.yg)("p",null,"the exchange to publish the message to"),(0,r.yg)("h3",{id:"schema-config"},"schema ","[Config]"),(0,r.yg)("h4",{id:"fields-config"},"fields ","[Config]"),(0,r.yg)("p",null,"the schema fields of upstream data."),(0,r.yg)("h3",{id:"network_recovery_interval-int"},"network_recovery_interval ","[int]"),(0,r.yg)("p",null,"how long will automatic recovery wait before attempting to reconnect, in ms"),(0,r.yg)("h3",{id:"topology_recovery-string"},"topology_recovery ","[string]"),(0,r.yg)("p",null,"if true, enables topology recovery"),(0,r.yg)("h3",{id:"automatic_recovery-string"},"automatic_recovery ","[string]"),(0,r.yg)("p",null,"if true, enables connection recovery"),(0,r.yg)("h3",{id:"connection_timeout-int"},"connection_timeout ","[int]"),(0,r.yg)("p",null,"connection tcp establishment timeout in milliseconds; zero for infinite"),(0,r.yg)("h3",{id:"requested_channel_max-int"},"requested_channel_max ","[int]"),(0,r.yg)("p",null,"initially requested maximum channel number; zero for unlimited\n**Note: Note the value must be between 0 and 65535 (unsigned short in AMQP 0-9-1)."),(0,r.yg)("h3",{id:"requested_frame_max-int"},"requested_frame_max ","[int]"),(0,r.yg)("p",null,"the requested maximum frame size"),(0,r.yg)("h3",{id:"requested_heartbeat-int"},"requested_heartbeat ","[int]"),(0,r.yg)("p",null,"Set the requested heartbeat timeout\n**Note: Note the value must be between 0 and 65535 (unsigned short in AMQP 0-9-1)."),(0,r.yg)("h3",{id:"prefetch_count-int"},"prefetch_count ","[int]"),(0,r.yg)("p",null,"prefetchCount the max number of messages to receive without acknowledgement"),(0,r.yg)("h3",{id:"delivery_timeout-long"},"delivery_timeout ","[long]"),(0,r.yg)("p",null,"deliveryTimeout maximum wait time, in milliseconds, for the next message delivery"),(0,r.yg)("h3",{id:"common-options"},"common options"),(0,r.yg)("p",null,"Source plugin common parameters, please refer to ",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/connector-v2/source/common-options"},"Source Common Options")," for details"),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)("p",null,"simple:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'source {\n    RabbitMQ {\n        host = "rabbitmq-e2e"\n        port = 5672\n        virtual_host = "/"\n        username = "guest"\n        password = "guest"\n        queue_name = "test"\n        schema = {\n            fields {\n                id = bigint\n                c_map = "map<string, smallint>"\n                c_array = "array<tinyint>"\n            }\n        }\n    }\n}\n')),(0,r.yg)("h2",{id:"changelog"},"Changelog"),(0,r.yg)("h3",{id:"next-version"},"next version"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Add Rabbitmq source Connector")))}p.isMDXComponent=!0}}]);