"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[35632],{15680:(e,n,t)=>{t.d(n,{xA:()=>g,yg:()=>u});var a=t(96540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},g=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},y=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),d=p(t),y=i,u=d["".concat(s,".").concat(y)]||d[y]||m[y]||l;return t?a.createElement(u,r(r({ref:n},g),{},{components:t})):a.createElement(u,r({ref:n},g))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,r=new Array(l);r[0]=y;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[d]="string"==typeof e?e:i,r[1]=o;for(var p=2;p<l;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},70753:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=t(58168),i=(t(96540),t(15680));const l={},r="OssJindoFile",o={unversionedId:"connector-v2/sink/OssJindoFile",id:"version-2.3.2/connector-v2/sink/OssJindoFile",title:"OssJindoFile",description:"OssJindo file sink connector",source:"@site/versioned_docs/version-2.3.2/connector-v2/sink/OssJindoFile.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/OssJindoFile",permalink:"/docs/2.3.2/connector-v2/sink/OssJindoFile",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.3.2/connector-v2/sink/OssJindoFile.md",tags:[],version:"2.3.2",frontMatter:{},sidebar:"docs",previous:{title:"OssFile",permalink:"/docs/2.3.2/connector-v2/sink/OssFile"},next:{title:"Paimon",permalink:"/docs/2.3.2/connector-v2/sink/Paimon"}},s={},p=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"path string",id:"path-string",level:3},{value:"bucket string",id:"bucket-string",level:3},{value:"access_key string",id:"access_key-string",level:3},{value:"access_secret string",id:"access_secret-string",level:3},{value:"endpoint string",id:"endpoint-string",level:3},{value:"custom_filename boolean",id:"custom_filename-boolean",level:3},{value:"file_name_expression string",id:"file_name_expression-string",level:3},{value:"filename_time_format string",id:"filename_time_format-string",level:3},{value:"file_format_type string",id:"file_format_type-string",level:3},{value:"field_delimiter string",id:"field_delimiter-string",level:3},{value:"row_delimiter string",id:"row_delimiter-string",level:3},{value:"have_partition boolean",id:"have_partition-boolean",level:3},{value:"partition_by array",id:"partition_by-array",level:3},{value:"partition_dir_expression string",id:"partition_dir_expression-string",level:3},{value:"is_partition_field_write_in_file boolean",id:"is_partition_field_write_in_file-boolean",level:3},{value:"sink_columns array",id:"sink_columns-array",level:3},{value:"is_enable_transaction boolean",id:"is_enable_transaction-boolean",level:3},{value:"batch_size int",id:"batch_size-int",level:3},{value:"compress_codec string",id:"compress_codec-string",level:3},{value:"common options",id:"common-options",level:3},{value:"max_rows_in_memory int",id:"max_rows_in_memory-int",level:3},{value:"sheet_name string",id:"sheet_name-string",level:3},{value:"Example",id:"example",level:2},{value:"Changelog",id:"changelog",level:2},{value:"2.3.0 2022-12-30",id:"230-2022-12-30",level:3},{value:"Next version",id:"next-version",level:3}],g={toc:p},d="wrapper";function m(e){let{components:n,...t}=e;return(0,i.yg)(d,(0,a.A)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"ossjindofile"},"OssJindoFile"),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"OssJindo file sink connector")),(0,i.yg)("h2",{id:"description"},"Description"),(0,i.yg)("p",null,"Output data to oss file system using jindo api."),(0,i.yg)("admonition",{type:"tip"},(0,i.yg)("p",{parentName:"admonition"},"If you use spark/flink, In order to use this connector, You must ensure your spark/flink cluster already integrated hadoop. The tested hadoop version is 2.x."),(0,i.yg)("p",{parentName:"admonition"},"If you use SeaTunnel Engine, It automatically integrated the hadoop jar when you download and install SeaTunnel Engine. You can check the jar package under ${SEATUNNEL_HOME}/lib to confirm this."),(0,i.yg)("p",{parentName:"admonition"},"We made some trade-offs in order to support more file types, so we used the HDFS protocol for internal access to OSS and this connector need some hadoop dependencies.\nIt only supports hadoop version ",(0,i.yg)("strong",{parentName:"p"},"2.9.X+"),".")),(0,i.yg)("h2",{id:"key-features"},"Key features"),(0,i.yg)("ul",{className:"contains-task-list"},(0,i.yg)("li",{parentName:"ul",className:"task-list-item"},(0,i.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,i.yg)("a",{parentName:"li",href:"/docs/2.3.2/concept/connector-v2-features"},"exactly-once"))),(0,i.yg)("p",null,"By default, we use 2PC commit to ensure ",(0,i.yg)("inlineCode",{parentName:"p"},"exactly-once")),(0,i.yg)("ul",{className:"contains-task-list"},(0,i.yg)("li",{parentName:"ul",className:"task-list-item"},(0,i.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","file format type",(0,i.yg)("ul",{parentName:"li",className:"contains-task-list"},(0,i.yg)("li",{parentName:"ul",className:"task-list-item"},(0,i.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","text"),(0,i.yg)("li",{parentName:"ul",className:"task-list-item"},(0,i.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","csv"),(0,i.yg)("li",{parentName:"ul",className:"task-list-item"},(0,i.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","parquet"),(0,i.yg)("li",{parentName:"ul",className:"task-list-item"},(0,i.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","orc"),(0,i.yg)("li",{parentName:"ul",className:"task-list-item"},(0,i.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","json"),(0,i.yg)("li",{parentName:"ul",className:"task-list-item"},(0,i.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","excel")))),(0,i.yg)("h2",{id:"options"},"Options"),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"name"),(0,i.yg)("th",{parentName:"tr",align:null},"type"),(0,i.yg)("th",{parentName:"tr",align:null},"required"),(0,i.yg)("th",{parentName:"tr",align:null},"default value"),(0,i.yg)("th",{parentName:"tr",align:null},"remarks"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"path"),(0,i.yg)("td",{parentName:"tr",align:null},"string"),(0,i.yg)("td",{parentName:"tr",align:null},"yes"),(0,i.yg)("td",{parentName:"tr",align:null},"-"),(0,i.yg)("td",{parentName:"tr",align:null})),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"bucket"),(0,i.yg)("td",{parentName:"tr",align:null},"string"),(0,i.yg)("td",{parentName:"tr",align:null},"yes"),(0,i.yg)("td",{parentName:"tr",align:null},"-"),(0,i.yg)("td",{parentName:"tr",align:null})),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"access_key"),(0,i.yg)("td",{parentName:"tr",align:null},"string"),(0,i.yg)("td",{parentName:"tr",align:null},"yes"),(0,i.yg)("td",{parentName:"tr",align:null},"-"),(0,i.yg)("td",{parentName:"tr",align:null})),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"access_secret"),(0,i.yg)("td",{parentName:"tr",align:null},"string"),(0,i.yg)("td",{parentName:"tr",align:null},"yes"),(0,i.yg)("td",{parentName:"tr",align:null},"-"),(0,i.yg)("td",{parentName:"tr",align:null})),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"endpoint"),(0,i.yg)("td",{parentName:"tr",align:null},"string"),(0,i.yg)("td",{parentName:"tr",align:null},"yes"),(0,i.yg)("td",{parentName:"tr",align:null},"-"),(0,i.yg)("td",{parentName:"tr",align:null})),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"custom_filename"),(0,i.yg)("td",{parentName:"tr",align:null},"boolean"),(0,i.yg)("td",{parentName:"tr",align:null},"no"),(0,i.yg)("td",{parentName:"tr",align:null},"false"),(0,i.yg)("td",{parentName:"tr",align:null},"Whether you need custom the filename")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"file_name_expression"),(0,i.yg)("td",{parentName:"tr",align:null},"string"),(0,i.yg)("td",{parentName:"tr",align:null},"no"),(0,i.yg)("td",{parentName:"tr",align:null},'"${transactionId}"'),(0,i.yg)("td",{parentName:"tr",align:null},"Only used when custom_filename is true")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"filename_time_format"),(0,i.yg)("td",{parentName:"tr",align:null},"string"),(0,i.yg)("td",{parentName:"tr",align:null},"no"),(0,i.yg)("td",{parentName:"tr",align:null},'"yyyy.MM.dd"'),(0,i.yg)("td",{parentName:"tr",align:null},"Only used when custom_filename is true")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"file_format_type"),(0,i.yg)("td",{parentName:"tr",align:null},"string"),(0,i.yg)("td",{parentName:"tr",align:null},"no"),(0,i.yg)("td",{parentName:"tr",align:null},'"csv"'),(0,i.yg)("td",{parentName:"tr",align:null})),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"field_delimiter"),(0,i.yg)("td",{parentName:"tr",align:null},"string"),(0,i.yg)("td",{parentName:"tr",align:null},"no"),(0,i.yg)("td",{parentName:"tr",align:null},"'\\001'"),(0,i.yg)("td",{parentName:"tr",align:null},"Only used when file_format is text")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"row_delimiter"),(0,i.yg)("td",{parentName:"tr",align:null},"string"),(0,i.yg)("td",{parentName:"tr",align:null},"no"),(0,i.yg)("td",{parentName:"tr",align:null},'"\\n"'),(0,i.yg)("td",{parentName:"tr",align:null},"Only used when file_format is text")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"have_partition"),(0,i.yg)("td",{parentName:"tr",align:null},"boolean"),(0,i.yg)("td",{parentName:"tr",align:null},"no"),(0,i.yg)("td",{parentName:"tr",align:null},"false"),(0,i.yg)("td",{parentName:"tr",align:null},"Whether you need processing partitions.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"partition_by"),(0,i.yg)("td",{parentName:"tr",align:null},"array"),(0,i.yg)("td",{parentName:"tr",align:null},"no"),(0,i.yg)("td",{parentName:"tr",align:null},"-"),(0,i.yg)("td",{parentName:"tr",align:null},"Only used then have_partition is true")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"partition_dir_expression"),(0,i.yg)("td",{parentName:"tr",align:null},"string"),(0,i.yg)("td",{parentName:"tr",align:null},"no"),(0,i.yg)("td",{parentName:"tr",align:null},'"${k0}=${v0}/${k1}=${v1}/.../${kn}=${vn}/"'),(0,i.yg)("td",{parentName:"tr",align:null},"Only used then have_partition is true")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"is_partition_field_write_in_file"),(0,i.yg)("td",{parentName:"tr",align:null},"boolean"),(0,i.yg)("td",{parentName:"tr",align:null},"no"),(0,i.yg)("td",{parentName:"tr",align:null},"false"),(0,i.yg)("td",{parentName:"tr",align:null},"Only used then have_partition is true")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"sink_columns"),(0,i.yg)("td",{parentName:"tr",align:null},"array"),(0,i.yg)("td",{parentName:"tr",align:null},"no"),(0,i.yg)("td",{parentName:"tr",align:null}),(0,i.yg)("td",{parentName:"tr",align:null},"When this parameter is empty, all fields are sink columns")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"is_enable_transaction"),(0,i.yg)("td",{parentName:"tr",align:null},"boolean"),(0,i.yg)("td",{parentName:"tr",align:null},"no"),(0,i.yg)("td",{parentName:"tr",align:null},"true"),(0,i.yg)("td",{parentName:"tr",align:null})),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"batch_size"),(0,i.yg)("td",{parentName:"tr",align:null},"int"),(0,i.yg)("td",{parentName:"tr",align:null},"no"),(0,i.yg)("td",{parentName:"tr",align:null},"1000000"),(0,i.yg)("td",{parentName:"tr",align:null})),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"compress_codec"),(0,i.yg)("td",{parentName:"tr",align:null},"string"),(0,i.yg)("td",{parentName:"tr",align:null},"no"),(0,i.yg)("td",{parentName:"tr",align:null},"none"),(0,i.yg)("td",{parentName:"tr",align:null})),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"common-options"),(0,i.yg)("td",{parentName:"tr",align:null},"object"),(0,i.yg)("td",{parentName:"tr",align:null},"no"),(0,i.yg)("td",{parentName:"tr",align:null},"-"),(0,i.yg)("td",{parentName:"tr",align:null})),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"max_rows_in_memory"),(0,i.yg)("td",{parentName:"tr",align:null},"int"),(0,i.yg)("td",{parentName:"tr",align:null},"no"),(0,i.yg)("td",{parentName:"tr",align:null},"-"),(0,i.yg)("td",{parentName:"tr",align:null},"Only used when file_format is excel.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"sheet_name"),(0,i.yg)("td",{parentName:"tr",align:null},"string"),(0,i.yg)("td",{parentName:"tr",align:null},"no"),(0,i.yg)("td",{parentName:"tr",align:null},"Sheet${Random number}"),(0,i.yg)("td",{parentName:"tr",align:null},"Only used when file_format is excel.")))),(0,i.yg)("h3",{id:"path-string"},"path ","[string]"),(0,i.yg)("p",null,"The target dir path is required."),(0,i.yg)("h3",{id:"bucket-string"},"bucket ","[string]"),(0,i.yg)("p",null,"The bucket address of oss file system, for example: ",(0,i.yg)("inlineCode",{parentName:"p"},"oss://tyrantlucifer-image-bed")),(0,i.yg)("h3",{id:"access_key-string"},"access_key ","[string]"),(0,i.yg)("p",null,"The access key of oss file system."),(0,i.yg)("h3",{id:"access_secret-string"},"access_secret ","[string]"),(0,i.yg)("p",null,"The access secret of oss file system."),(0,i.yg)("h3",{id:"endpoint-string"},"endpoint ","[string]"),(0,i.yg)("p",null,"The endpoint of oss file system."),(0,i.yg)("h3",{id:"custom_filename-boolean"},"custom_filename ","[boolean]"),(0,i.yg)("p",null,"Whether custom the filename"),(0,i.yg)("h3",{id:"file_name_expression-string"},"file_name_expression ","[string]"),(0,i.yg)("p",null,"Only used when ",(0,i.yg)("inlineCode",{parentName:"p"},"custom_filename")," is ",(0,i.yg)("inlineCode",{parentName:"p"},"true")),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"file_name_expression")," describes the file expression which will be created into the ",(0,i.yg)("inlineCode",{parentName:"p"},"path"),". We can add the variable ",(0,i.yg)("inlineCode",{parentName:"p"},"${now}")," or ",(0,i.yg)("inlineCode",{parentName:"p"},"${uuid}")," in the ",(0,i.yg)("inlineCode",{parentName:"p"},"file_name_expression"),", like ",(0,i.yg)("inlineCode",{parentName:"p"},"test_${uuid}_${now}"),",\n",(0,i.yg)("inlineCode",{parentName:"p"},"${now}")," represents the current time, and its format can be defined by specifying the option ",(0,i.yg)("inlineCode",{parentName:"p"},"filename_time_format"),"."),(0,i.yg)("p",null,"Please note that, If ",(0,i.yg)("inlineCode",{parentName:"p"},"is_enable_transaction")," is ",(0,i.yg)("inlineCode",{parentName:"p"},"true"),", we will auto add ",(0,i.yg)("inlineCode",{parentName:"p"},"${transactionId}_")," in the head of the file."),(0,i.yg)("h3",{id:"filename_time_format-string"},"filename_time_format ","[string]"),(0,i.yg)("p",null,"Only used when ",(0,i.yg)("inlineCode",{parentName:"p"},"custom_filename")," is ",(0,i.yg)("inlineCode",{parentName:"p"},"true")),(0,i.yg)("p",null,"When the format in the ",(0,i.yg)("inlineCode",{parentName:"p"},"file_name_expression")," parameter is ",(0,i.yg)("inlineCode",{parentName:"p"},"xxxx-${now}")," , ",(0,i.yg)("inlineCode",{parentName:"p"},"filename_time_format")," can specify the time format of the path, and the default value is ",(0,i.yg)("inlineCode",{parentName:"p"},"yyyy.MM.dd")," . The commonly used time formats are listed as follows:"),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Symbol"),(0,i.yg)("th",{parentName:"tr",align:null},"Description"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"y"),(0,i.yg)("td",{parentName:"tr",align:null},"Year")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"M"),(0,i.yg)("td",{parentName:"tr",align:null},"Month")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"d"),(0,i.yg)("td",{parentName:"tr",align:null},"Day of month")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"H"),(0,i.yg)("td",{parentName:"tr",align:null},"Hour in day (0-23)")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"m"),(0,i.yg)("td",{parentName:"tr",align:null},"Minute in hour")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"s"),(0,i.yg)("td",{parentName:"tr",align:null},"Second in minute")))),(0,i.yg)("h3",{id:"file_format_type-string"},"file_format_type ","[string]"),(0,i.yg)("p",null,"We supported as the following file types:"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"text")," ",(0,i.yg)("inlineCode",{parentName:"p"},"json")," ",(0,i.yg)("inlineCode",{parentName:"p"},"csv")," ",(0,i.yg)("inlineCode",{parentName:"p"},"orc")," ",(0,i.yg)("inlineCode",{parentName:"p"},"parquet")," ",(0,i.yg)("inlineCode",{parentName:"p"},"excel")),(0,i.yg)("p",null,"Please note that, The final file name will end with the file_format's suffix, the suffix of the text file is ",(0,i.yg)("inlineCode",{parentName:"p"},"txt"),"."),(0,i.yg)("h3",{id:"field_delimiter-string"},"field_delimiter ","[string]"),(0,i.yg)("p",null,"The separator between columns in a row of data. Only needed by ",(0,i.yg)("inlineCode",{parentName:"p"},"text")," file format."),(0,i.yg)("h3",{id:"row_delimiter-string"},"row_delimiter ","[string]"),(0,i.yg)("p",null,"The separator between rows in a file. Only needed by ",(0,i.yg)("inlineCode",{parentName:"p"},"text")," file format."),(0,i.yg)("h3",{id:"have_partition-boolean"},"have_partition ","[boolean]"),(0,i.yg)("p",null,"Whether you need processing partitions."),(0,i.yg)("h3",{id:"partition_by-array"},"partition_by ","[array]"),(0,i.yg)("p",null,"Only used when ",(0,i.yg)("inlineCode",{parentName:"p"},"have_partition")," is ",(0,i.yg)("inlineCode",{parentName:"p"},"true"),"."),(0,i.yg)("p",null,"Partition data based on selected fields."),(0,i.yg)("h3",{id:"partition_dir_expression-string"},"partition_dir_expression ","[string]"),(0,i.yg)("p",null,"Only used when ",(0,i.yg)("inlineCode",{parentName:"p"},"have_partition")," is ",(0,i.yg)("inlineCode",{parentName:"p"},"true"),"."),(0,i.yg)("p",null,"If the ",(0,i.yg)("inlineCode",{parentName:"p"},"partition_by")," is specified, we will generate the corresponding partition directory based on the partition information, and the final file will be placed in the partition directory."),(0,i.yg)("p",null,"Default ",(0,i.yg)("inlineCode",{parentName:"p"},"partition_dir_expression")," is ",(0,i.yg)("inlineCode",{parentName:"p"},"${k0}=${v0}/${k1}=${v1}/.../${kn}=${vn}/"),". ",(0,i.yg)("inlineCode",{parentName:"p"},"k0")," is the first partition field and ",(0,i.yg)("inlineCode",{parentName:"p"},"v0")," is the value of the first partition field."),(0,i.yg)("h3",{id:"is_partition_field_write_in_file-boolean"},"is_partition_field_write_in_file ","[boolean]"),(0,i.yg)("p",null,"Only used when ",(0,i.yg)("inlineCode",{parentName:"p"},"have_partition")," is ",(0,i.yg)("inlineCode",{parentName:"p"},"true"),"."),(0,i.yg)("p",null,"If ",(0,i.yg)("inlineCode",{parentName:"p"},"is_partition_field_write_in_file")," is ",(0,i.yg)("inlineCode",{parentName:"p"},"true"),", the partition field and the value of it will be write into data file."),(0,i.yg)("p",null,"For example, if you want to write a Hive Data File, Its value should be ",(0,i.yg)("inlineCode",{parentName:"p"},"false"),"."),(0,i.yg)("h3",{id:"sink_columns-array"},"sink_columns ","[array]"),(0,i.yg)("p",null,"Which columns need be written to file, default value is all the columns get from ",(0,i.yg)("inlineCode",{parentName:"p"},"Transform")," or ",(0,i.yg)("inlineCode",{parentName:"p"},"Source"),".\nThe order of the fields determines the order in which the file is actually written."),(0,i.yg)("h3",{id:"is_enable_transaction-boolean"},"is_enable_transaction ","[boolean]"),(0,i.yg)("p",null,"If ",(0,i.yg)("inlineCode",{parentName:"p"},"is_enable_transaction")," is true, we will ensure that data will not be lost or duplicated when it is written to the target directory."),(0,i.yg)("p",null,"Please note that, If ",(0,i.yg)("inlineCode",{parentName:"p"},"is_enable_transaction")," is ",(0,i.yg)("inlineCode",{parentName:"p"},"true"),", we will auto add ",(0,i.yg)("inlineCode",{parentName:"p"},"${transactionId}_")," in the head of the file."),(0,i.yg)("p",null,"Only support ",(0,i.yg)("inlineCode",{parentName:"p"},"true")," now."),(0,i.yg)("h3",{id:"batch_size-int"},"batch_size ","[int]"),(0,i.yg)("p",null,"The maximum number of rows in a file. For SeaTunnel Engine, the number of lines in the file is determined by ",(0,i.yg)("inlineCode",{parentName:"p"},"batch_size")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"checkpoint.interval")," jointly decide. If the value of ",(0,i.yg)("inlineCode",{parentName:"p"},"checkpoint.interval")," is large enough, sink writer will write rows in a file until the rows in the file larger than ",(0,i.yg)("inlineCode",{parentName:"p"},"batch_size"),". If ",(0,i.yg)("inlineCode",{parentName:"p"},"checkpoint.interval")," is small, the sink writer will create a new file when a new checkpoint trigger."),(0,i.yg)("h3",{id:"compress_codec-string"},"compress_codec ","[string]"),(0,i.yg)("p",null,"The compress codec of files and the details that supported as the following shown:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"txt: ",(0,i.yg)("inlineCode",{parentName:"li"},"lzo")," ",(0,i.yg)("inlineCode",{parentName:"li"},"none")),(0,i.yg)("li",{parentName:"ul"},"json: ",(0,i.yg)("inlineCode",{parentName:"li"},"lzo")," ",(0,i.yg)("inlineCode",{parentName:"li"},"none")),(0,i.yg)("li",{parentName:"ul"},"csv: ",(0,i.yg)("inlineCode",{parentName:"li"},"lzo")," ",(0,i.yg)("inlineCode",{parentName:"li"},"none")),(0,i.yg)("li",{parentName:"ul"},"orc: ",(0,i.yg)("inlineCode",{parentName:"li"},"lzo")," ",(0,i.yg)("inlineCode",{parentName:"li"},"snappy")," ",(0,i.yg)("inlineCode",{parentName:"li"},"lz4")," ",(0,i.yg)("inlineCode",{parentName:"li"},"zlib")," ",(0,i.yg)("inlineCode",{parentName:"li"},"none")),(0,i.yg)("li",{parentName:"ul"},"parquet: ",(0,i.yg)("inlineCode",{parentName:"li"},"lzo")," ",(0,i.yg)("inlineCode",{parentName:"li"},"snappy")," ",(0,i.yg)("inlineCode",{parentName:"li"},"lz4")," ",(0,i.yg)("inlineCode",{parentName:"li"},"gzip")," ",(0,i.yg)("inlineCode",{parentName:"li"},"brotli")," ",(0,i.yg)("inlineCode",{parentName:"li"},"zstd")," ",(0,i.yg)("inlineCode",{parentName:"li"},"none"))),(0,i.yg)("p",null,"Tips: excel type does not support any compression format"),(0,i.yg)("h3",{id:"common-options"},"common options"),(0,i.yg)("p",null,"Sink plugin common parameters, please refer to ",(0,i.yg)("a",{parentName:"p",href:"/docs/2.3.2/connector-v2/sink/common-options"},"Sink Common Options")," for details."),(0,i.yg)("h3",{id:"max_rows_in_memory-int"},"max_rows_in_memory ","[int]"),(0,i.yg)("p",null,"When File Format is Excel,The maximum number of data items that can be cached in the memory."),(0,i.yg)("h3",{id:"sheet_name-string"},"sheet_name ","[string]"),(0,i.yg)("p",null,"Writer the sheet of the workbook"),(0,i.yg)("h2",{id:"example"},"Example"),(0,i.yg)("p",null,"For text file format with ",(0,i.yg)("inlineCode",{parentName:"p"},"have_partition")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"custom_filename")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"sink_columns")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-hocon"},'\n  OssJindoFile {\n    path="/seatunnel/sink"\n    bucket = "oss://tyrantlucifer-image-bed"\n    access_key = "xxxxxxxxxxx"\n    access_secret = "xxxxxxxxxxx"\n    endpoint = "oss-cn-beijing.aliyuncs.com"\n    file_format_type = "text"\n    field_delimiter = "\\t"\n    row_delimiter = "\\n"\n    have_partition = true\n    partition_by = ["age"]\n    partition_dir_expression = "${k0}=${v0}"\n    is_partition_field_write_in_file = true\n    custom_filename = true\n    file_name_expression = "${transactionId}_${now}"\n    filename_time_format = "yyyy.MM.dd"\n    sink_columns = ["name","age"]\n    is_enable_transaction = true\n  }\n\n')),(0,i.yg)("p",null,"For parquet file format with ",(0,i.yg)("inlineCode",{parentName:"p"},"sink_columns")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-hocon"},'\n  OssJindoFile {\n    path = "/seatunnel/sink"\n    bucket = "oss://tyrantlucifer-image-bed"\n    access_key = "xxxxxxxxxxx"\n    access_secret = "xxxxxxxxxxxxxxxxx"\n    endpoint = "oss-cn-beijing.aliyuncs.com"\n    file_format_type = "parquet"\n    sink_columns = ["name","age"]\n  }\n\n')),(0,i.yg)("p",null,"For orc file format simple config"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},'\n  OssFile {\n    path="/seatunnel/sink"\n    bucket = "oss://tyrantlucifer-image-bed"\n    access_key = "xxxxxxxxxxx"\n    access_secret = "xxxxxxxxxxx"\n    endpoint = "oss-cn-beijing.aliyuncs.com"\n    file_format_type = "orc"\n  }\n\n')),(0,i.yg)("h2",{id:"changelog"},"Changelog"),(0,i.yg)("h3",{id:"230-2022-12-30"},"2.3.0 2022-12-30"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Add OSS Jindo File Sink Connector")),(0,i.yg)("h3",{id:"next-version"},"Next version"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"[Improve]"," Support file compress (",(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/3899"},"3899"),")")))}m.isMDXComponent=!0}}]);