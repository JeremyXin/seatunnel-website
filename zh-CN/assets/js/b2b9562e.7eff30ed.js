"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[55074],{15680:(e,t,a)=>{a.d(t,{xA:()=>y,yg:()=>m});var n=a(96540);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var g=n.createContext({}),p=function(e){var t=n.useContext(g),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},y=function(e){var t=p(e.components);return n.createElement(g.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,g=e.parentName,y=o(e,["components","mdxType","originalType","parentName"]),u=p(a),s=l,m=u["".concat(g,".").concat(s)]||u[s]||d[s]||r;return a?n.createElement(m,i(i({ref:t},y),{},{components:a})):n.createElement(m,i({ref:t},y))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=s;var o={};for(var g in t)hasOwnProperty.call(t,g)&&(o[g]=t[g]);o.originalType=e,o[u]="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},88063:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=a(58168),l=(a(96540),a(15680));const r={},i="OceanBase",o={unversionedId:"connector-v2/sink/OceanBase",id:"version-2.3.6/connector-v2/sink/OceanBase",title:"OceanBase",description:"JDBC OceanBase Sink Connector",source:"@site/versioned_docs/version-2.3.6/connector-v2/sink/OceanBase.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/OceanBase",permalink:"/zh-CN/docs/2.3.6/connector-v2/sink/OceanBase",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.3.6/connector-v2/sink/OceanBase.md",tags:[],version:"2.3.6",frontMatter:{},sidebar:"docs",previous:{title:"ObsFile",permalink:"/zh-CN/docs/2.3.6/connector-v2/sink/ObsFile"},next:{title:"Oracle",permalink:"/zh-CN/docs/2.3.6/connector-v2/sink/Oracle"}},g={},p=[{value:"Support Those Engines",id:"support-those-engines",level:2},{value:"Key Features",id:"key-features",level:2},{value:"Description",id:"description",level:2},{value:"Supported DataSource Info",id:"supported-datasource-info",level:2},{value:"Database Dependency",id:"database-dependency",level:2},{value:"Data Type Mapping",id:"data-type-mapping",level:2},{value:"Mysql Mode",id:"mysql-mode",level:3},{value:"Oracle Mode",id:"oracle-mode",level:3},{value:"Sink Options",id:"sink-options",level:2},{value:"Tips",id:"tips",level:3},{value:"Task Example",id:"task-example",level:2},{value:"Simple:",id:"simple",level:3},{value:"Generate Sink SQL",id:"generate-sink-sql",level:3},{value:"CDC(Change Data Capture) Event",id:"cdcchange-data-capture-event",level:3}],y={toc:p},u="wrapper";function d(e){let{components:t,...a}=e;return(0,l.yg)(u,(0,n.A)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"oceanbase"},"OceanBase"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"JDBC OceanBase Sink Connector")),(0,l.yg)("h2",{id:"support-those-engines"},"Support Those Engines"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Spark",(0,l.yg)("br",null),"\nFlink",(0,l.yg)("br",null),"\nSeaTunnel Zeta",(0,l.yg)("br",null))),(0,l.yg)("h2",{id:"key-features"},"Key Features"),(0,l.yg)("ul",{className:"contains-task-list"},(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"exactly-once")),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"cdc"))),(0,l.yg)("h2",{id:"description"},"Description"),(0,l.yg)("p",null,"Write data through jdbc. Support Batch mode and Streaming mode, support concurrent writing, support exactly-once semantics."),(0,l.yg)("h2",{id:"supported-datasource-info"},"Supported DataSource Info"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Datasource"),(0,l.yg)("th",{parentName:"tr",align:null},"Supported versions"),(0,l.yg)("th",{parentName:"tr",align:null},"Driver"),(0,l.yg)("th",{parentName:"tr",align:null},"Url"),(0,l.yg)("th",{parentName:"tr",align:null},"Maven"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"OceanBase"),(0,l.yg)("td",{parentName:"tr",align:null},"All OceanBase server versions."),(0,l.yg)("td",{parentName:"tr",align:null},"com.oceanbase.jdbc.Driver"),(0,l.yg)("td",{parentName:"tr",align:null},"jdbc:oceanbase://localhost:2883/test"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/com.oceanbase/oceanbase-client"},"Download"))))),(0,l.yg)("h2",{id:"database-dependency"},"Database Dependency"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Please download the support list corresponding to 'Maven' and copy it to the '$SEATNUNNEL_HOME/plugins/jdbc/lib/' working directory",(0,l.yg)("br",null),"\nFor example: cp oceanbase-client-xxx.jar $SEATNUNNEL_HOME/plugins/jdbc/lib/")),(0,l.yg)("h2",{id:"data-type-mapping"},"Data Type Mapping"),(0,l.yg)("h3",{id:"mysql-mode"},"Mysql Mode"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Mysql Data type"),(0,l.yg)("th",{parentName:"tr",align:null},"SeaTunnel Data type"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"BIT(1)",(0,l.yg)("br",null),"INT UNSIGNED"),(0,l.yg)("td",{parentName:"tr",align:null},"BOOLEAN")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"TINYINT",(0,l.yg)("br",null),"TINYINT UNSIGNED",(0,l.yg)("br",null),"SMALLINT",(0,l.yg)("br",null),"SMALLINT UNSIGNED",(0,l.yg)("br",null),"MEDIUMINT",(0,l.yg)("br",null),"MEDIUMINT UNSIGNED",(0,l.yg)("br",null),"INT",(0,l.yg)("br",null),"INTEGER",(0,l.yg)("br",null),"YEAR"),(0,l.yg)("td",{parentName:"tr",align:null},"INT")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"INT UNSIGNED",(0,l.yg)("br",null),"INTEGER UNSIGNED",(0,l.yg)("br",null),"BIGINT"),(0,l.yg)("td",{parentName:"tr",align:null},"BIGINT")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"BIGINT UNSIGNED"),(0,l.yg)("td",{parentName:"tr",align:null},"DECIMAL(20,0)")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"DECIMAL(x,y)(Get the designated column's specified column size.<38)"),(0,l.yg)("td",{parentName:"tr",align:null},"DECIMAL(x,y)")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"DECIMAL(x,y)(Get the designated column's specified column size.>38)"),(0,l.yg)("td",{parentName:"tr",align:null},"DECIMAL(38,18)")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"DECIMAL UNSIGNED"),(0,l.yg)("td",{parentName:"tr",align:null},"DECIMAL((Get the designated column's specified column size)+1,",(0,l.yg)("br",null),"(Gets the designated column's number of digits to right of the decimal point.)))")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"FLOAT",(0,l.yg)("br",null),"FLOAT UNSIGNED"),(0,l.yg)("td",{parentName:"tr",align:null},"FLOAT")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"DOUBLE",(0,l.yg)("br",null),"DOUBLE UNSIGNED"),(0,l.yg)("td",{parentName:"tr",align:null},"DOUBLE")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"CHAR",(0,l.yg)("br",null),"VARCHAR",(0,l.yg)("br",null),"TINYTEXT",(0,l.yg)("br",null),"MEDIUMTEXT",(0,l.yg)("br",null),"TEXT",(0,l.yg)("br",null),"LONGTEXT",(0,l.yg)("br",null),"JSON"),(0,l.yg)("td",{parentName:"tr",align:null},"STRING")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"DATE"),(0,l.yg)("td",{parentName:"tr",align:null},"DATE")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"TIME"),(0,l.yg)("td",{parentName:"tr",align:null},"TIME")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"DATETIME",(0,l.yg)("br",null),"TIMESTAMP"),(0,l.yg)("td",{parentName:"tr",align:null},"TIMESTAMP")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"TINYBLOB",(0,l.yg)("br",null),"MEDIUMBLOB",(0,l.yg)("br",null),"BLOB",(0,l.yg)("br",null),"LONGBLOB",(0,l.yg)("br",null),"BINARY",(0,l.yg)("br",null),"VARBINAR",(0,l.yg)("br",null),"BIT(n)"),(0,l.yg)("td",{parentName:"tr",align:null},"BYTES")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"GEOMETRY",(0,l.yg)("br",null),"UNKNOWN"),(0,l.yg)("td",{parentName:"tr",align:null},"Not supported yet")))),(0,l.yg)("h3",{id:"oracle-mode"},"Oracle Mode"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Oracle Data type"),(0,l.yg)("th",{parentName:"tr",align:null},"SeaTunnel Data type"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Number(p), p <= 9"),(0,l.yg)("td",{parentName:"tr",align:null},"INT")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Number(p), p <= 18"),(0,l.yg)("td",{parentName:"tr",align:null},"BIGINT")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Number(p), p > 18"),(0,l.yg)("td",{parentName:"tr",align:null},"DECIMAL(38,18)")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"REAL",(0,l.yg)("br",null)," BINARY_FLOAT"),(0,l.yg)("td",{parentName:"tr",align:null},"FLOAT")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"BINARY_DOUBLE"),(0,l.yg)("td",{parentName:"tr",align:null},"DOUBLE")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"CHAR",(0,l.yg)("br",null),"NCHAR",(0,l.yg)("br",null),"NVARCHAR2",(0,l.yg)("br",null),"NCLOB",(0,l.yg)("br",null),"CLOB",(0,l.yg)("br",null),"ROWID"),(0,l.yg)("td",{parentName:"tr",align:null},"STRING")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"DATE"),(0,l.yg)("td",{parentName:"tr",align:null},"DATE")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"TIMESTAMP",(0,l.yg)("br",null),"TIMESTAMP WITH LOCAL TIME ZONE"),(0,l.yg)("td",{parentName:"tr",align:null},"TIMESTAMP")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"BLOB",(0,l.yg)("br",null),"RAW",(0,l.yg)("br",null),"LONG RAW",(0,l.yg)("br",null),"BFILE"),(0,l.yg)("td",{parentName:"tr",align:null},"BYTES")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"UNKNOWN"),(0,l.yg)("td",{parentName:"tr",align:null},"Not supported yet")))),(0,l.yg)("h2",{id:"sink-options"},"Sink Options"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Name"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Required"),(0,l.yg)("th",{parentName:"tr",align:null},"Default"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"url"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"Yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"The URL of the JDBC connection. Refer to a case: jdbc:oceanbase://localhost:2883/test")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"driver"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"Yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"The jdbc class name used to connect to the remote data source, should be ",(0,l.yg)("inlineCode",{parentName:"td"},"com.oceanbase.jdbc.Driver"),".")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"user"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Connection instance user name")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"password"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Connection instance password")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"query"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Use this sql write upstream input datas to database. e.g ",(0,l.yg)("inlineCode",{parentName:"td"},"INSERT ..."),",",(0,l.yg)("inlineCode",{parentName:"td"},"query")," have the higher priority")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"compatible_mode"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"Yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"The compatible mode of OceanBase, can be 'mysql' or 'oracle'.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"database"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Use this ",(0,l.yg)("inlineCode",{parentName:"td"},"database")," and ",(0,l.yg)("inlineCode",{parentName:"td"},"table-name")," auto-generate sql and receive upstream input datas write to database.",(0,l.yg)("br",null),"This option is mutually exclusive with ",(0,l.yg)("inlineCode",{parentName:"td"},"query")," and has a higher priority.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"table"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Use database and this table-name auto-generate sql and receive upstream input datas write to database.",(0,l.yg)("br",null),"This option is mutually exclusive with ",(0,l.yg)("inlineCode",{parentName:"td"},"query")," and has a higher priority.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"primary_keys"),(0,l.yg)("td",{parentName:"tr",align:null},"Array"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"This option is used to support operations such as ",(0,l.yg)("inlineCode",{parentName:"td"},"insert"),", ",(0,l.yg)("inlineCode",{parentName:"td"},"delete"),", and ",(0,l.yg)("inlineCode",{parentName:"td"},"update")," when automatically generate sql.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"support_upsert_by_query_primary_key_exist"),(0,l.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"Choose to use INSERT sql, UPDATE sql to process update events(INSERT, UPDATE_AFTER) based on query primary key exists. This configuration is only used when database unsupport upsert syntax. ",(0,l.yg)("strong",{parentName:"td"},"Note"),": that this method has low performance")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"connection_check_timeout_sec"),(0,l.yg)("td",{parentName:"tr",align:null},"Int"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"30"),(0,l.yg)("td",{parentName:"tr",align:null},"The time in seconds to wait for the database operation used to validate the connection to complete.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"max_retries"),(0,l.yg)("td",{parentName:"tr",align:null},"Int"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"0"),(0,l.yg)("td",{parentName:"tr",align:null},"The number of retries to submit failed (executeBatch)")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"batch_size"),(0,l.yg)("td",{parentName:"tr",align:null},"Int"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"1000"),(0,l.yg)("td",{parentName:"tr",align:null},"For batch writing, when the number of buffered records reaches the number of ",(0,l.yg)("inlineCode",{parentName:"td"},"batch_size")," or the time reaches ",(0,l.yg)("inlineCode",{parentName:"td"},"checkpoint.interval"),(0,l.yg)("br",null),", the data will be flushed into the database")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"generate_sink_sql"),(0,l.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"Generate sql statements based on the database table you want to write to")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"max_commit_attempts"),(0,l.yg)("td",{parentName:"tr",align:null},"Int"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"3"),(0,l.yg)("td",{parentName:"tr",align:null},"The number of retries for transaction commit failures")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"transaction_timeout_sec"),(0,l.yg)("td",{parentName:"tr",align:null},"Int"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"-1"),(0,l.yg)("td",{parentName:"tr",align:null},"The timeout after the transaction is opened, the default is -1 (never timeout). Note that setting the timeout may affect",(0,l.yg)("br",null),"exactly-once semantics")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"auto_commit"),(0,l.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"true"),(0,l.yg)("td",{parentName:"tr",align:null},"Automatic transaction commit is enabled by default")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"properties"),(0,l.yg)("td",{parentName:"tr",align:null},"Map"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Additional connection configuration parameters,when properties and URL have the same parameters, the priority is determined by the ",(0,l.yg)("br",null),"specific implementation of the driver. For example, in MySQL, properties take precedence over the URL.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"common-options"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Sink plugin common parameters, please refer to ",(0,l.yg)("a",{parentName:"td",href:"common-options.md"},"Sink Common Options")," for details")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"enable_upsert"),(0,l.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"true"),(0,l.yg)("td",{parentName:"tr",align:null},"Enable upsert by primary_keys exist, If the task has no key duplicate data, setting this parameter to ",(0,l.yg)("inlineCode",{parentName:"td"},"false")," can speed up data import")))),(0,l.yg)("h3",{id:"tips"},"Tips"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"If partition_column is not set, it will run in single concurrency, and if partition_column is set, it will be executed  in parallel according to the concurrency of tasks.")),(0,l.yg)("h2",{id:"task-example"},"Task Example"),(0,l.yg)("h3",{id:"simple"},"Simple:"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"This example defines a SeaTunnel synchronization task that automatically generates data through FakeSource and sends it to JDBC Sink. FakeSource generates a total of 16 rows of data (row.num=16), with each row having two fields, name (string type) and age (int type). The final target table is test_table will also be 16 rows of data in the table. Before run this job, you need create database test and table test_table in your mysql. And if you have not yet installed and deployed SeaTunnel, you need to follow the instructions in ",(0,l.yg)("a",{parentName:"p",href:"../../start-v2/locally/deployment.md"},"Install SeaTunnel")," to install and deploy SeaTunnel. And then follow the instructions in ",(0,l.yg)("a",{parentName:"p",href:"../../start-v2/locally/quick-start-seatunnel-engine.md"},"Quick Start With SeaTunnel Engine")," to run this job.")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'# Defining the runtime environment\nenv {\n  parallelism = 1\n  job.mode = "BATCH"\n}\n\nsource {\n  # This is a example source plugin **only for test and demonstrate the feature source plugin**\n  FakeSource {\n    parallelism = 1\n    result_table_name = "fake"\n    row.num = 16\n    schema = {\n      fields {\n        name = "string"\n        age = "int"\n      }\n    }\n  }\n  # If you would like to get more information about how to configure seatunnel and see full list of source plugins,\n  # please go to https://seatunnel.apache.org/docs/category/source-v2\n}\n\ntransform {\n  # If you would like to get more information about how to configure seatunnel and see full list of transform plugins,\n    # please go to https://seatunnel.apache.org/docs/category/transform-v2\n}\n\nsink {\n    jdbc {\n        url = "jdbc:oceanbase://localhost:2883/test"\n        driver = "com.oceanbase.jdbc.Driver"\n        user = "root"\n        password = "123456"\n        compatible_mode = "mysql"\n        query = "insert into test_table(name,age) values(?,?)"\n    }\n  # If you would like to get more information about how to configure seatunnel and see full list of sink plugins,\n  # please go to https://seatunnel.apache.org/docs/category/sink-v2\n}\n')),(0,l.yg)("h3",{id:"generate-sink-sql"},"Generate Sink SQL"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"This example  not need to write complex sql statements, you can configure the database name table name to automatically generate add statements for you")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'sink {\n    jdbc {\n        url = "jdbc:oceanbase://localhost:2883/test"\n        driver = "com.oceanbase.jdbc.Driver"\n        user = "root"\n        password = "123456"\n        compatible_mode = "mysql"\n        # Automatically generate sql statements based on database table names\n        generate_sink_sql = true\n        database = test\n        table = test_table\n    }\n}\n')),(0,l.yg)("h3",{id:"cdcchange-data-capture-event"},"CDC(Change Data Capture) Event"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"CDC change data is also supported by us In this case, you need config database, table and primary_keys.")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'sink {\n    jdbc {\n        url = "jdbc:oceanbase://localhost:3306/test"\n        driver = "com.oceanbase.jdbc.Driver"\n        user = "root"\n        password = "123456"\n        compatible_mode = "mysql"\n        generate_sink_sql = true\n        # You need to configure both database and table\n        database = test\n        table = sink_table\n        primary_keys = ["id","name"]\n    }\n}\n')))}d.isMDXComponent=!0}}]);