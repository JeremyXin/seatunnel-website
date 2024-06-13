"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[22962],{15680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>u});var a=n(96540);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),g=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=g(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=g(n),y=l,u=s["".concat(p,".").concat(y)]||s[y]||d[y]||i;return n?a.createElement(u,r(r({ref:t},m),{},{components:n})):a.createElement(u,r({ref:t},m))}));function u(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=y;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:l,r[1]=o;for(var g=2;g<i;g++)r[g]=n[g];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},79217:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>g});var a=n(58168),l=(n(96540),n(15680));const i={},r="FtpFile",o={unversionedId:"connector-v2/sink/FtpFile",id:"connector-v2/sink/FtpFile",title:"FtpFile",description:"Ftp file sink connector",source:"@site/docs/connector-v2/sink/FtpFile.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/FtpFile",permalink:"/zh-CN/docs/connector-v2/sink/FtpFile",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/sink/FtpFile.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"\u98de\u4e66",permalink:"/zh-CN/docs/connector-v2/sink/Feishu"},next:{title:"GoogleFirestore",permalink:"/zh-CN/docs/connector-v2/sink/GoogleFirestore"}},p={},g=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"host string",id:"host-string",level:3},{value:"port int",id:"port-int",level:3},{value:"user string",id:"user-string",level:3},{value:"password string",id:"password-string",level:3},{value:"path string",id:"path-string",level:3},{value:"connection_mode string",id:"connection_mode-string",level:3},{value:"custom_filename boolean",id:"custom_filename-boolean",level:3},{value:"file_name_expression string",id:"file_name_expression-string",level:3},{value:"filename_time_format string",id:"filename_time_format-string",level:3},{value:"file_format_type string",id:"file_format_type-string",level:3},{value:"field_delimiter string",id:"field_delimiter-string",level:3},{value:"row_delimiter string",id:"row_delimiter-string",level:3},{value:"have_partition boolean",id:"have_partition-boolean",level:3},{value:"partition_by array",id:"partition_by-array",level:3},{value:"partition_dir_expression string",id:"partition_dir_expression-string",level:3},{value:"is_partition_field_write_in_file boolean",id:"is_partition_field_write_in_file-boolean",level:3},{value:"sink_columns array",id:"sink_columns-array",level:3},{value:"is_enable_transaction boolean",id:"is_enable_transaction-boolean",level:3},{value:"batch_size int",id:"batch_size-int",level:3},{value:"compress_codec string",id:"compress_codec-string",level:3},{value:"common options",id:"common-options",level:3},{value:"max_rows_in_memory int",id:"max_rows_in_memory-int",level:3},{value:"sheet_name string",id:"sheet_name-string",level:3},{value:"xml_root_tag string",id:"xml_root_tag-string",level:3},{value:"xml_row_tag string",id:"xml_row_tag-string",level:3},{value:"xml_use_attr_format boolean",id:"xml_use_attr_format-boolean",level:3},{value:"parquet_avro_write_timestamp_as_int96 boolean",id:"parquet_avro_write_timestamp_as_int96-boolean",level:3},{value:"parquet_avro_write_fixed_as_int96 array",id:"parquet_avro_write_fixed_as_int96-array",level:3},{value:"encoding string",id:"encoding-string",level:3},{value:"Example",id:"example",level:2},{value:"Changelog",id:"changelog",level:2},{value:"2.2.0-beta 2022-09-26",id:"220-beta-2022-09-26",level:3},{value:"2.3.0-beta 2022-10-20",id:"230-beta-2022-10-20",level:3},{value:"Next version",id:"next-version",level:3}],m={toc:g},s="wrapper";function d(e){let{components:t,...n}=e;return(0,l.yg)(s,(0,a.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"ftpfile"},"FtpFile"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Ftp file sink connector")),(0,l.yg)("h2",{id:"description"},"Description"),(0,l.yg)("p",null,"Output data to Ftp ."),(0,l.yg)("admonition",{type:"tip"},(0,l.yg)("p",{parentName:"admonition"},"If you use spark/flink, In order to use this connector, You must ensure your spark/flink cluster already integrated hadoop. The tested hadoop version is 2.x."),(0,l.yg)("p",{parentName:"admonition"},"If you use SeaTunnel Engine, It automatically integrated the hadoop jar when you download and install SeaTunnel Engine. You can check the jar package under ${SEATUNNEL_HOME}/lib to confirm this.")),(0,l.yg)("h2",{id:"key-features"},"Key features"),(0,l.yg)("ul",{className:"contains-task-list"},(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"exactly-once"))),(0,l.yg)("p",null,"By default, we use 2PC commit to ensure ",(0,l.yg)("inlineCode",{parentName:"p"},"exactly-once")),(0,l.yg)("ul",{className:"contains-task-list"},(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","file format",(0,l.yg)("ul",{parentName:"li",className:"contains-task-list"},(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","text"),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","csv"),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","parquet"),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","orc"),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","json"),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","excel"),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","xml"),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","binary")))),(0,l.yg)("h2",{id:"options"},"Options"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Name"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Required"),(0,l.yg)("th",{parentName:"tr",align:null},"Default"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"host"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"port"),(0,l.yg)("td",{parentName:"tr",align:null},"int"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"user"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"password"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"path"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"tmp_path"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"/tmp/seatunnel"),(0,l.yg)("td",{parentName:"tr",align:null},"The result file will write to a tmp path first and then use ",(0,l.yg)("inlineCode",{parentName:"td"},"mv")," to submit tmp dir to target dir. Need a FTP dir.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"connection_mode"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"active_local"),(0,l.yg)("td",{parentName:"tr",align:null},"The target ftp connection mode")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"custom_filename"),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"Whether you need custom the filename")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"file_name_expression"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},'"${transactionId}"'),(0,l.yg)("td",{parentName:"tr",align:null},"Only used when custom_filename is true")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"filename_time_format"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},'"yyyy.MM.dd"'),(0,l.yg)("td",{parentName:"tr",align:null},"Only used when custom_filename is true")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"file_format_type"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},'"csv"'),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"field_delimiter"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"'\\001'"),(0,l.yg)("td",{parentName:"tr",align:null},"Only used when file_format_type is text")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"row_delimiter"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},'"\\n"'),(0,l.yg)("td",{parentName:"tr",align:null},"Only used when file_format_type is text")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"have_partition"),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"Whether you need processing partitions.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"partition_by"),(0,l.yg)("td",{parentName:"tr",align:null},"array"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Only used then have_partition is true")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"partition_dir_expression"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},'"${k0}=${v0}/${k1}=${v1}/.../${kn}=${vn}/"'),(0,l.yg)("td",{parentName:"tr",align:null},"Only used then have_partition is true")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"is_partition_field_write_in_file"),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"Only used then have_partition is true")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"sink_columns"),(0,l.yg)("td",{parentName:"tr",align:null},"array"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"When this parameter is empty, all fields are sink columns")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"is_enable_transaction"),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"true"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"batch_size"),(0,l.yg)("td",{parentName:"tr",align:null},"int"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"1000000"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"compress_codec"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"none"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"common-options"),(0,l.yg)("td",{parentName:"tr",align:null},"object"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"max_rows_in_memory"),(0,l.yg)("td",{parentName:"tr",align:null},"int"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Only used when file_format_type is excel.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"sheet_name"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"Sheet${Random number}"),(0,l.yg)("td",{parentName:"tr",align:null},"Only used when file_format_type is excel.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"xml_root_tag"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"RECORDS"),(0,l.yg)("td",{parentName:"tr",align:null},"Only used when file_format is xml.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"xml_row_tag"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"RECORD"),(0,l.yg)("td",{parentName:"tr",align:null},"Only used when file_format is xml.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"xml_use_attr_format"),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Only used when file_format is xml.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"parquet_avro_write_timestamp_as_int96"),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"Only used when file_format is parquet.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"parquet_avro_write_fixed_as_int96"),(0,l.yg)("td",{parentName:"tr",align:null},"array"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Only used when file_format is parquet.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"encoding"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},'"UTF-8"'),(0,l.yg)("td",{parentName:"tr",align:null},"Only used when file_format_type is json,text,csv,xml.")))),(0,l.yg)("h3",{id:"host-string"},"host ","[string]"),(0,l.yg)("p",null,"The target ftp host is required"),(0,l.yg)("h3",{id:"port-int"},"port ","[int]"),(0,l.yg)("p",null,"The target ftp port is required"),(0,l.yg)("h3",{id:"user-string"},"user ","[string]"),(0,l.yg)("p",null,"The target ftp username is required"),(0,l.yg)("h3",{id:"password-string"},"password ","[string]"),(0,l.yg)("p",null,"The target ftp password is required"),(0,l.yg)("h3",{id:"path-string"},"path ","[string]"),(0,l.yg)("p",null,"The target dir path is required."),(0,l.yg)("h3",{id:"connection_mode-string"},"connection_mode ","[string]"),(0,l.yg)("p",null,"The target ftp connection mode , default is active mode, supported as the following modes:"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"active_local")," ",(0,l.yg)("inlineCode",{parentName:"p"},"passive_local")),(0,l.yg)("h3",{id:"custom_filename-boolean"},"custom_filename ","[boolean]"),(0,l.yg)("p",null,"Whether custom the filename"),(0,l.yg)("h3",{id:"file_name_expression-string"},"file_name_expression ","[string]"),(0,l.yg)("p",null,"Only used when ",(0,l.yg)("inlineCode",{parentName:"p"},"custom_filename")," is ",(0,l.yg)("inlineCode",{parentName:"p"},"true")),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"file_name_expression")," describes the file expression which will be created into the ",(0,l.yg)("inlineCode",{parentName:"p"},"path"),". We can add the variable ",(0,l.yg)("inlineCode",{parentName:"p"},"${now}")," or ",(0,l.yg)("inlineCode",{parentName:"p"},"${uuid}")," in the ",(0,l.yg)("inlineCode",{parentName:"p"},"file_name_expression"),", like ",(0,l.yg)("inlineCode",{parentName:"p"},"test_${uuid}_${now}"),",\n",(0,l.yg)("inlineCode",{parentName:"p"},"${now}")," represents the current time, and its format can be defined by specifying the option ",(0,l.yg)("inlineCode",{parentName:"p"},"filename_time_format"),"."),(0,l.yg)("p",null,"Please note that, If ",(0,l.yg)("inlineCode",{parentName:"p"},"is_enable_transaction")," is ",(0,l.yg)("inlineCode",{parentName:"p"},"true"),", we will auto add ",(0,l.yg)("inlineCode",{parentName:"p"},"${transactionId}_")," in the head of the file."),(0,l.yg)("h3",{id:"filename_time_format-string"},"filename_time_format ","[string]"),(0,l.yg)("p",null,"Only used when ",(0,l.yg)("inlineCode",{parentName:"p"},"custom_filename")," is ",(0,l.yg)("inlineCode",{parentName:"p"},"true")),(0,l.yg)("p",null,"When the format in the ",(0,l.yg)("inlineCode",{parentName:"p"},"file_name_expression")," parameter is ",(0,l.yg)("inlineCode",{parentName:"p"},"xxxx-${now}")," , ",(0,l.yg)("inlineCode",{parentName:"p"},"filename_time_format")," can specify the time format of the path, and the default value is ",(0,l.yg)("inlineCode",{parentName:"p"},"yyyy.MM.dd")," . The commonly used time formats are listed as follows:"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Symbol"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"y"),(0,l.yg)("td",{parentName:"tr",align:null},"Year")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"M"),(0,l.yg)("td",{parentName:"tr",align:null},"Month")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"d"),(0,l.yg)("td",{parentName:"tr",align:null},"Day of month")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"H"),(0,l.yg)("td",{parentName:"tr",align:null},"Hour in day (0-23)")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"m"),(0,l.yg)("td",{parentName:"tr",align:null},"Minute in hour")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"s"),(0,l.yg)("td",{parentName:"tr",align:null},"Second in minute")))),(0,l.yg)("h3",{id:"file_format_type-string"},"file_format_type ","[string]"),(0,l.yg)("p",null,"We supported as the following file types:"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"text")," ",(0,l.yg)("inlineCode",{parentName:"p"},"csv")," ",(0,l.yg)("inlineCode",{parentName:"p"},"parquet")," ",(0,l.yg)("inlineCode",{parentName:"p"},"orc")," ",(0,l.yg)("inlineCode",{parentName:"p"},"json")," ",(0,l.yg)("inlineCode",{parentName:"p"},"excel")," ",(0,l.yg)("inlineCode",{parentName:"p"},"xml")," ",(0,l.yg)("inlineCode",{parentName:"p"},"binary")),(0,l.yg)("p",null,"Please note that, The final file name will end with the file_format_type's suffix, the suffix of the text file is ",(0,l.yg)("inlineCode",{parentName:"p"},"txt"),"."),(0,l.yg)("h3",{id:"field_delimiter-string"},"field_delimiter ","[string]"),(0,l.yg)("p",null,"The separator between columns in a row of data. Only needed by ",(0,l.yg)("inlineCode",{parentName:"p"},"text")," file format."),(0,l.yg)("h3",{id:"row_delimiter-string"},"row_delimiter ","[string]"),(0,l.yg)("p",null,"The separator between rows in a file. Only needed by ",(0,l.yg)("inlineCode",{parentName:"p"},"text")," file format."),(0,l.yg)("h3",{id:"have_partition-boolean"},"have_partition ","[boolean]"),(0,l.yg)("p",null,"Whether you need processing partitions."),(0,l.yg)("h3",{id:"partition_by-array"},"partition_by ","[array]"),(0,l.yg)("p",null,"Only used when ",(0,l.yg)("inlineCode",{parentName:"p"},"have_partition")," is ",(0,l.yg)("inlineCode",{parentName:"p"},"true"),"."),(0,l.yg)("p",null,"Partition data based on selected fields."),(0,l.yg)("h3",{id:"partition_dir_expression-string"},"partition_dir_expression ","[string]"),(0,l.yg)("p",null,"Only used when ",(0,l.yg)("inlineCode",{parentName:"p"},"have_partition")," is ",(0,l.yg)("inlineCode",{parentName:"p"},"true"),"."),(0,l.yg)("p",null,"If the ",(0,l.yg)("inlineCode",{parentName:"p"},"partition_by")," is specified, we will generate the corresponding partition directory based on the partition information, and the final file will be placed in the partition directory."),(0,l.yg)("p",null,"Default ",(0,l.yg)("inlineCode",{parentName:"p"},"partition_dir_expression")," is ",(0,l.yg)("inlineCode",{parentName:"p"},"${k0}=${v0}/${k1}=${v1}/.../${kn}=${vn}/"),". ",(0,l.yg)("inlineCode",{parentName:"p"},"k0")," is the first partition field and ",(0,l.yg)("inlineCode",{parentName:"p"},"v0")," is the value of the first partition field."),(0,l.yg)("h3",{id:"is_partition_field_write_in_file-boolean"},"is_partition_field_write_in_file ","[boolean]"),(0,l.yg)("p",null,"Only used when ",(0,l.yg)("inlineCode",{parentName:"p"},"have_partition")," is ",(0,l.yg)("inlineCode",{parentName:"p"},"true"),"."),(0,l.yg)("p",null,"If ",(0,l.yg)("inlineCode",{parentName:"p"},"is_partition_field_write_in_file")," is ",(0,l.yg)("inlineCode",{parentName:"p"},"true"),", the partition field and the value of it will be write into data file."),(0,l.yg)("p",null,"For example, if you want to write a Hive Data File, Its value should be ",(0,l.yg)("inlineCode",{parentName:"p"},"false"),"."),(0,l.yg)("h3",{id:"sink_columns-array"},"sink_columns ","[array]"),(0,l.yg)("p",null,"Which columns need be wrote to file, default value is all the columns get from ",(0,l.yg)("inlineCode",{parentName:"p"},"Transform")," or ",(0,l.yg)("inlineCode",{parentName:"p"},"Source"),".\nThe order of the fields determines the order in which the file is actually written."),(0,l.yg)("h3",{id:"is_enable_transaction-boolean"},"is_enable_transaction ","[boolean]"),(0,l.yg)("p",null,"If ",(0,l.yg)("inlineCode",{parentName:"p"},"is_enable_transaction")," is true, we will ensure that data will not be lost or duplicated when it is written to the target directory."),(0,l.yg)("p",null,"Please note that, If ",(0,l.yg)("inlineCode",{parentName:"p"},"is_enable_transaction")," is ",(0,l.yg)("inlineCode",{parentName:"p"},"true"),", we will auto add ",(0,l.yg)("inlineCode",{parentName:"p"},"${transactionId}_")," in the head of the file."),(0,l.yg)("p",null,"Only support ",(0,l.yg)("inlineCode",{parentName:"p"},"true")," now."),(0,l.yg)("h3",{id:"batch_size-int"},"batch_size ","[int]"),(0,l.yg)("p",null,"The maximum number of rows in a file. For SeaTunnel Engine, the number of lines in the file is determined by ",(0,l.yg)("inlineCode",{parentName:"p"},"batch_size")," and ",(0,l.yg)("inlineCode",{parentName:"p"},"checkpoint.interval")," jointly decide. If the value of ",(0,l.yg)("inlineCode",{parentName:"p"},"checkpoint.interval")," is large enough, sink writer will write rows in a file until the rows in the file larger than ",(0,l.yg)("inlineCode",{parentName:"p"},"batch_size"),". If ",(0,l.yg)("inlineCode",{parentName:"p"},"checkpoint.interval")," is small, the sink writer will create a new file when a new checkpoint trigger."),(0,l.yg)("h3",{id:"compress_codec-string"},"compress_codec ","[string]"),(0,l.yg)("p",null,"The compress codec of files and the details that supported as the following shown:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"txt: ",(0,l.yg)("inlineCode",{parentName:"li"},"lzo")," ",(0,l.yg)("inlineCode",{parentName:"li"},"none")),(0,l.yg)("li",{parentName:"ul"},"json: ",(0,l.yg)("inlineCode",{parentName:"li"},"lzo")," ",(0,l.yg)("inlineCode",{parentName:"li"},"none")),(0,l.yg)("li",{parentName:"ul"},"csv: ",(0,l.yg)("inlineCode",{parentName:"li"},"lzo")," ",(0,l.yg)("inlineCode",{parentName:"li"},"none")),(0,l.yg)("li",{parentName:"ul"},"orc: ",(0,l.yg)("inlineCode",{parentName:"li"},"lzo")," ",(0,l.yg)("inlineCode",{parentName:"li"},"snappy")," ",(0,l.yg)("inlineCode",{parentName:"li"},"lz4")," ",(0,l.yg)("inlineCode",{parentName:"li"},"zlib")," ",(0,l.yg)("inlineCode",{parentName:"li"},"none")),(0,l.yg)("li",{parentName:"ul"},"parquet: ",(0,l.yg)("inlineCode",{parentName:"li"},"lzo")," ",(0,l.yg)("inlineCode",{parentName:"li"},"snappy")," ",(0,l.yg)("inlineCode",{parentName:"li"},"lz4")," ",(0,l.yg)("inlineCode",{parentName:"li"},"gzip")," ",(0,l.yg)("inlineCode",{parentName:"li"},"brotli")," ",(0,l.yg)("inlineCode",{parentName:"li"},"zstd")," ",(0,l.yg)("inlineCode",{parentName:"li"},"none"))),(0,l.yg)("p",null,"Tips: excel type does not support any compression format"),(0,l.yg)("h3",{id:"common-options"},"common options"),(0,l.yg)("p",null,"Sink plugin common parameters, please refer to ",(0,l.yg)("a",{parentName:"p",href:"common-options.md"},"Sink Common Options")," for details."),(0,l.yg)("h3",{id:"max_rows_in_memory-int"},"max_rows_in_memory ","[int]"),(0,l.yg)("p",null,"When File Format is Excel,The maximum number of data items that can be cached in the memory."),(0,l.yg)("h3",{id:"sheet_name-string"},"sheet_name ","[string]"),(0,l.yg)("p",null,"Writer the sheet of the workbook"),(0,l.yg)("h3",{id:"xml_root_tag-string"},"xml_root_tag ","[string]"),(0,l.yg)("p",null,"Specifies the tag name of the root element within the XML file."),(0,l.yg)("h3",{id:"xml_row_tag-string"},"xml_row_tag ","[string]"),(0,l.yg)("p",null,"Specifies the tag name of the data rows within the XML file."),(0,l.yg)("h3",{id:"xml_use_attr_format-boolean"},"xml_use_attr_format ","[boolean]"),(0,l.yg)("p",null,"Specifies Whether to process data using the tag attribute format."),(0,l.yg)("h3",{id:"parquet_avro_write_timestamp_as_int96-boolean"},"parquet_avro_write_timestamp_as_int96 ","[boolean]"),(0,l.yg)("p",null,"Support writing Parquet INT96 from a timestamp, only valid for parquet files."),(0,l.yg)("h3",{id:"parquet_avro_write_fixed_as_int96-array"},"parquet_avro_write_fixed_as_int96 ","[array]"),(0,l.yg)("p",null,"Support writing Parquet INT96 from a 12-byte field, only valid for parquet files."),(0,l.yg)("h3",{id:"encoding-string"},"encoding ","[string]"),(0,l.yg)("p",null,"Only used when file_format_type is json,text,csv,xml.\nThe encoding of the file to write. This param will be parsed by ",(0,l.yg)("inlineCode",{parentName:"p"},"Charset.forName(encoding)"),"."),(0,l.yg)("h2",{id:"example"},"Example"),(0,l.yg)("p",null,"For text file format simple config"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},'\nFtpFile {\n    host = "xxx.xxx.xxx.xxx"\n    port = 21\n    user = "username"\n    password = "password"\n    path = "/data/ftp"\n    file_format_type = "text"\n    field_delimiter = "\\t"\n    row_delimiter = "\\n"\n    sink_columns = ["name","age"]\n}\n\n')),(0,l.yg)("p",null,"For text file format with ",(0,l.yg)("inlineCode",{parentName:"p"},"have_partition")," and ",(0,l.yg)("inlineCode",{parentName:"p"},"custom_filename")," and ",(0,l.yg)("inlineCode",{parentName:"p"},"sink_columns")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},'\nFtpFile {\n    host = "xxx.xxx.xxx.xxx"\n    port = 21\n    user = "username"\n    password = "password"\n    path = "/data/ftp/seatunnel/job1"\n    tmp_path = "/data/ftp/seatunnel/tmp"\n    file_format_type = "text"\n    field_delimiter = "\\t"\n    row_delimiter = "\\n"\n    have_partition = true\n    partition_by = ["age"]\n    partition_dir_expression = "${k0}=${v0}"\n    is_partition_field_write_in_file = true\n    custom_filename = true\n    file_name_expression = "${transactionId}_${now}"\n    sink_columns = ["name","age"]\n    filename_time_format = "yyyy.MM.dd"\n}\n\n')),(0,l.yg)("h2",{id:"changelog"},"Changelog"),(0,l.yg)("h3",{id:"220-beta-2022-09-26"},"2.2.0-beta 2022-09-26"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Add Ftp File Sink Connector")),(0,l.yg)("h3",{id:"230-beta-2022-10-20"},"2.3.0-beta 2022-10-20"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"[BugFix]"," Fix the bug of incorrect path in windows environment (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/2980"},"2980"),")"),(0,l.yg)("li",{parentName:"ul"},"[BugFix]"," Fix filesystem get error (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/3117"},"3117"),")"),(0,l.yg)("li",{parentName:"ul"},"[BugFix]"," Solved the bug of can not parse '\\t' as delimiter from config file (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/3083"},"3083"),")")),(0,l.yg)("h3",{id:"next-version"},"Next version"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"[BugFix]"," Fixed the following bugs that failed to write data to files (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/3258"},"3258"),")",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"When field from upstream is null it will throw NullPointerException"),(0,l.yg)("li",{parentName:"ul"},"Sink columns mapping failed"),(0,l.yg)("li",{parentName:"ul"},"When restore writer from states getting transaction directly failed"))),(0,l.yg)("li",{parentName:"ul"},"[Improve]"," Support setting batch size for every file (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/3625"},"3625"),")"),(0,l.yg)("li",{parentName:"ul"},"[Improve]"," Support file compress (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/3899"},"3899"),")")))}d.isMDXComponent=!0}}]);