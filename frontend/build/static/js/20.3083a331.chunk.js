(this.webpackJsonpdemo=this.webpackJsonpdemo||[]).push([[20],{100:function(e,t,a){"use strict";var n=a(1),r=a(3),c=a(5),l=a.n(c),o=a(0),i=a.n(o),s=a(7),d=i.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,o=e.striped,d=e.bordered,u=e.borderless,m=e.hover,f=e.size,b=e.variant,p=e.responsive,h=Object(r.a)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),v=Object(s.a)(a,"table"),y=l()(c,v,b&&v+"-"+b,f&&v+"-"+f,o&&v+"-striped",d&&v+"-bordered",u&&v+"-borderless",m&&v+"-hover"),O=i.a.createElement("table",Object(n.a)({},h,{className:y,ref:t}));if(p){var E=v+"-responsive";return"string"===typeof p&&(E=E+"-"+p),i.a.createElement("div",{className:E},O)}return O}));t.a=d},144:function(e,t,a){"use strict";a(63);var n="http://localhost:5000/anzo/linestatus",r={getBreakDownDetail:function(e){return console.log("linecode",e),fetch("".concat(n,"/breakdowndetail"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)})},getPreviousBreakDownDetail:function(e){return console.log("data in api",e),fetch("".concat(n,"/previousbreakdowndetail"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)})},getExcelExportBreakDownDetail:function(e){return console.log("data in api",e),fetch("".concat(n,"/excelexportbreakdowndetail"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)})},getShiftWiseBreakDownDetail:function(e){return console.log("data in api",e),fetch("".concat(n,"/shiftwisebreakdowndetail"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)})},getOfficerCommentOnBreakdown:function(e){return console.log("data in api",e),fetch("".concat(n,"/officercomment"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)})}};t.a=r},147:function(e,t,a){"use strict";var n=a(1),r=a(3),c=a(5),l=a.n(c),o=a(0),i=a.n(o),s=(a(84),a(68)),d=a(58),u=a(7),m=i.a.forwardRef((function(e,t){var a=e.id,c=e.bsPrefix,s=e.bsCustomPrefix,m=e.className,f=e.isValid,b=e.isInvalid,p=e.isStatic,h=e.as,v=void 0===h?"input":h,y=Object(r.a)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","isStatic","as"]),O=Object(o.useContext)(d.a),E=O.controlId;return c=O.custom?Object(u.a)(s,"custom-control-input"):Object(u.a)(c,"form-check-input"),i.a.createElement(v,Object(n.a)({},y,{ref:t,id:a||E,className:l()(m,c,f&&"is-valid",b&&"is-invalid",p&&"position-static")}))}));m.displayName="FormCheckInput",m.defaultProps={type:"checkbox"};var f=m,b=i.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.bsCustomPrefix,s=e.className,m=e.htmlFor,f=Object(r.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),b=Object(o.useContext)(d.a),p=b.controlId;return a=b.custom?Object(u.a)(c,"custom-control-label"):Object(u.a)(a,"form-check-label"),i.a.createElement("label",Object(n.a)({},f,{ref:t,htmlFor:m||p,className:l()(s,a)}))}));b.displayName="FormCheckLabel";var p=b,h=i.a.forwardRef((function(e,t){var a=e.id,c=e.bsPrefix,m=e.bsCustomPrefix,b=e.inline,h=e.disabled,v=e.isValid,y=e.isInvalid,O=e.feedback,E=e.className,j=e.style,N=e.title,g=e.type,P=e.label,x=e.children,S=e.custom,w=e.as,k=void 0===w?"input":w,C=Object(r.a)(e,["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedback","className","style","title","type","label","children","custom","as"]),T="switch"===g||S;c=T?Object(u.a)(m,"custom-control"):Object(u.a)(c,"form-check");var D=Object(o.useContext)(d.a).controlId,I=Object(o.useMemo)((function(){return{controlId:a||D,custom:T}}),[D,T,a]),R=null!=P&&!1!==P&&!x,F=i.a.createElement(f,Object(n.a)({},C,{type:"switch"===g?"checkbox":g,ref:t,isValid:v,isInvalid:y,isStatic:!R,disabled:h,as:k}));return i.a.createElement(d.a.Provider,{value:I},i.a.createElement("div",{style:j,className:l()(E,c,T&&"custom-"+g,b&&c+"-inline")},x||i.a.createElement(i.a.Fragment,null,F,R&&i.a.createElement(p,{title:N},P),(v||y)&&i.a.createElement(s.a,{type:v?"valid":"invalid"},O))))}));h.displayName="FormCheck",h.defaultProps={type:"checkbox",inline:!1,disabled:!1,isValid:!1,isInvalid:!1,title:""},h.Input=f,h.Label=p;var v=h,y=a(83),O=i.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,s=e.children,m=e.controlId,f=e.as,b=void 0===f?"div":f,p=Object(r.a)(e,["bsPrefix","className","children","controlId","as"]);a=Object(u.a)(a,"form-group");var h=Object(o.useMemo)((function(){return{controlId:m}}),[m]);return i.a.createElement(d.a.Provider,{value:h},i.a.createElement(b,Object(n.a)({},p,{ref:t,className:l()(c,a)}),s))}));O.displayName="FormGroup";var E=O,j=(a(26),a(73)),N=i.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.column,s=e.srOnly,m=e.className,f=e.htmlFor,b=Object(r.a)(e,["bsPrefix","column","srOnly","className","htmlFor"]),p=Object(o.useContext)(d.a).controlId;a=Object(u.a)(a,"form-label");var h=l()(m,a,s&&"sr-only",c&&"col-form-label");return f=f||p,c?i.a.createElement(j.a,Object(n.a)({as:"label",className:h,htmlFor:f},b)):i.a.createElement("label",Object(n.a)({ref:t,className:h,htmlFor:f},b))}));N.displayName="FormLabel",N.defaultProps={column:!1,srOnly:!1};var g=N,P=i.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,o=e.as,s=void 0===o?"small":o,d=e.muted,m=Object(r.a)(e,["bsPrefix","className","as","muted"]);return a=Object(u.a)(a,"form-text"),i.a.createElement(s,Object(n.a)({},m,{ref:t,className:l()(c,a,d&&"text-muted")}))}));P.displayName="FormText";var x=P,S=i.a.forwardRef((function(e,t){return i.a.createElement(v,Object(n.a)({},e,{ref:t,type:"switch"}))}));S.displayName="Switch",S.Input=v.Input,S.Label=v.Label;var w=S,k=a(22),C=i.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.inline,o=e.className,s=e.validated,d=e.as,m=void 0===d?"form":d,f=Object(r.a)(e,["bsPrefix","inline","className","validated","as"]);return a=Object(u.a)(a,"form"),i.a.createElement(m,Object(n.a)({},f,{ref:t,className:l()(o,s&&"was-validated",c&&a+"-inline")}))}));C.displayName="Form",C.defaultProps={inline:!1},C.Row=Object(k.a)("form-row"),C.Group=E,C.Control=y.a,C.Check=v,C.Switch=w,C.Label=g,C.Text=x;t.a=C},58:function(e,t,a){"use strict";var n=a(0),r=a.n(n).a.createContext({controlId:void 0});t.a=r},64:function(e,t,a){"use strict";function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var a=[],n=!0,r=!1,c=void 0;try{for(var l,o=e[Symbol.iterator]();!(n=(l=o.next()).done)&&(a.push(l.value),!t||a.length!==t);n=!0);}catch(i){r=!0,c=i}finally{try{n||null==o.return||o.return()}finally{if(r)throw c}}return a}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}a.d(t,"a",(function(){return n}))},67:function(e,t,a){"use strict";var n=a(63),r=a.n(n),c="http://localhost:5000/anzo/dashboard",l={getLineData:function(){return r()({method:"GET",url:"".concat(c,"/linedata"),headers:{"content-type":"application/json"}})},getShiftData:function(){return r()({method:"GET",url:"".concat(c,"/shiftdata"),headers:{"content-type":"application/json"}})},getBlock:function(){return r()({method:"GET",url:"".concat(c,"/block"),headers:{"content-type":"application/json"}})},getCurrentLineStatus:function(){return r()({method:"GET",url:"".concat(c,"/currentlinestatus"),headers:{"content-type":"application/json"}})},getChartData:function(e){return fetch("".concat(c,"/chartdata"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)})},getPieChartData:function(e){return fetch("".concat(c,"/piechartdata"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)})},getGridData:function(e){return fetch("".concat(c,"/griddata"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)})},getLineBreakageTimmings:function(e){return fetch("".concat(c,"/linebreakagetimmings"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)})},getLabelsData:function(e){return fetch("".concat(c,"/labeldata"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)})},getOEETrendData:function(e){return fetch("".concat(c,"/oeetrenddata"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)})},getComplainData:function(e){return fetch("".concat(c,"/complaindata"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)})},getLineDetails:function(e){return fetch("".concat(c,"/linedetails"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)})}};t.a=l},68:function(e,t,a){"use strict";var n=a(1),r=a(3),c=a(5),l=a.n(c),o=a(0),i=a.n(o),s=a(4),d=a.n(s),u={type:d.a.string.isRequired,as:d.a.elementType},m=i.a.forwardRef((function(e,t){var a=e.as,c=void 0===a?"div":a,o=e.className,s=e.type,d=Object(r.a)(e,["as","className","type"]);return i.a.createElement(c,Object(n.a)({},d,{ref:t,className:l()(o,s&&s+"-feedback")}))}));m.displayName="Feedback",m.propTypes=u,m.defaultProps={type:"valid"},t.a=m},73:function(e,t,a){"use strict";var n=a(1),r=a(3),c=a(5),l=a.n(c),o=a(0),i=a.n(o),s=a(7),d=["xl","lg","md","sm","xs"],u=i.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,o=e.as,u=void 0===o?"div":o,m=Object(r.a)(e,["bsPrefix","className","as"]),f=Object(s.a)(a,"col"),b=[],p=[];return d.forEach((function(e){var t,a,n,r=m[e];if(delete m[e],null!=r&&"object"===typeof r){var c=r.span;t=void 0===c||c,a=r.offset,n=r.order}else t=r;var l="xs"!==e?"-"+e:"";null!=t&&b.push(!0===t?""+f+l:""+f+l+"-"+t),null!=n&&p.push("order"+l+"-"+n),null!=a&&p.push("offset"+l+"-"+a)})),b.length||b.push(f),i.a.createElement(u,Object(n.a)({},m,{ref:t,className:l.a.apply(void 0,[c].concat(b,p))}))}));u.displayName="Col",t.a=u},74:function(e,t,a){"use strict";var n=a(1),r=a(3),c=a(5),l=a.n(c),o=a(0),i=a.n(o),s=a(22),d=a(7),u=i.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.size,o=e.className,s=e.as,u=void 0===s?"div":s,m=Object(r.a)(e,["bsPrefix","size","className","as"]);return a=Object(d.a)(a,"input-group"),i.a.createElement(u,Object(n.a)({ref:t},m,{className:l()(o,a,c&&a+"-"+c)}))})),m=Object(s.a)("input-group-append"),f=Object(s.a)("input-group-prepend"),b=Object(s.a)("input-group-text",{Component:"span"});u.displayName="InputGroup",u.Text=b,u.Radio=function(e){return i.a.createElement(b,null,i.a.createElement("input",Object(n.a)({type:"radio"},e)))},u.Checkbox=function(e){return i.a.createElement(b,null,i.a.createElement("input",Object(n.a)({type:"checkbox"},e)))},u.Append=m,u.Prepend=f,t.a=u},792:function(e,t,a){"use strict";a.r(t);var n=a(75),r=a(64),c=a(0),l=a.n(c),o=a(89),i=a(100),s=a(147),d=a(74),u=a(67),m=a(144),f=a(87),b=a.n(f);t.default=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),a=t[0],f=t[1],p=Object(c.useState)({}),h=Object(r.a)(p,2),v=h[0],y=h[1],O=Object(c.useState)([]),E=Object(r.a)(O,2),j=E[0],N=E[1],g=Object(c.useState)([]),P=Object(r.a)(g,2),x=P[0],S=P[1],w=Object(c.useState)([]),k=Object(r.a)(w,2),C=k[0],T=k[1],D=Object(c.useState)("N"),I=Object(r.a)(D,2),R=I[0],F=I[1],L=Object(c.useState)([]),J=Object(r.a)(L,2),M=J[0],B=J[1],G=Object(c.useCallback)((function(){u.a.getLineData().then((function(e){console.log("res",e.data),f(e.data)}))}));return Object(c.useEffect)((function(){G()}),[]),l.a.createElement("div",{className:"officercomments"},l.a.createElement("div",{className:"card card-officercomments-one"},l.a.createElement("div",{className:"card-header"},l.a.createElement("h7",null,"Line Status")),l.a.createElement("div",{className:"card-body"},l.a.createElement("h4",null,"Fill Officer Comments for Breakdown "),l.a.createElement("div",{className:"card card-officercomments-child"},l.a.createElement("div",{className:"card-header"},l.a.createElement("div",{className:"line-b-select-1"},l.a.createElement("p",{className:""},"Select Line:"),l.a.createElement("div",{className:"container-1"},l.a.createElement(o.a,{onChange:function(e){return function(e){y(e.value)}(e)},value:a.value,options:Object(n.a)(a.map((function(e){return{value:e.LineCode,label:e.LineName}})))}))),l.a.createElement("div",{className:"line-b-select-2"},l.a.createElement("p",{className:""},"Start Date:"),l.a.createElement("div",{className:"container-2"},l.a.createElement(s.a.Group,{controlId:"dob"},l.a.createElement(s.a.Control,{type:"date",name:"dob",value:j,onChange:function(e){return function(e){N(e.target.value)}(e)},placeholder:""})))),l.a.createElement("div",{className:"line-b-select-3"},l.a.createElement("p",{className:""},"End Date:"),l.a.createElement("div",{className:"container-3"},l.a.createElement(s.a.Group,{controlId:"dob"},l.a.createElement(s.a.Control,{type:"date",name:"dob",value:x,onChange:function(e){return function(e){S(e.target.value)}(e)},placeholder:""})))),l.a.createElement("div",{className:"line-b-select-4"},l.a.createElement("p",{className:""},"Duration:"),l.a.createElement("div",{className:"container-4"},l.a.createElement(d.a,{className:"mb-3"},l.a.createElement(s.a.Control,{onChange:function(e){return function(e){T(e.target.value)}(e)},placeholder:"Enter Time in hour","aria-label":"Username","aria-describedby":"basic-addon1"})))),l.a.createElement("div",{className:"line-b-select-5"},l.a.createElement("div",{className:"container-5"},l.a.createElement(s.a,null,["checkbox"].map((function(e){return l.a.createElement("div",{key:"inline-".concat(e),className:"mb-3"},l.a.createElement(s.a.Check,{inline:!0,onChange:function(e){F("Y")},label:"Include Rework",name:"group1",type:e,id:"inline-".concat(e,"-1")}))}))))),l.a.createElement("button",{className:"classbutton",onClick:function(e){m.a.getOfficerCommentOnBreakdown({startdate:j,enddate:x,line:v,duration:C,isRework:R}).then((function(e){return e.json()})).then((function(e){console.log("res OF getOfficerCommentOnBreakdown",e),B(e.recordset)}))}},"Get Breakdown")),l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"table-responsive"},l.a.createElement(i.a,{bordered:!0,className:"mg-b-0"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Id"),l.a.createElement("th",null,"MachineDown Time"),l.a.createElement("th",null,"MachineUP Time"),l.a.createElement("th",null,"DownPeriod"),l.a.createElement("th",null,"Process"),l.a.createElement("th",null,"Reason"),l.a.createElement("th",null,"DamageCode"),l.a.createElement("th",null,"SAP Notify"),l.a.createElement("th",null,"Username"),l.a.createElement("th",null,"InputTime"))),l.a.createElement("tbody",null,M.map((function(e){return l.a.createElement("tr",{key:e._id},l.a.createElement("td",null,e.Id),l.a.createElement("td",null,b()(e.MachineDownTime).format("YYYY-MM-DD HH:mm:ss")),l.a.createElement("td",null,b()(e.MachineUpTime).format("YYYY-MM-DD HH:mm:ss")),l.a.createElement("td",null,e.DownPeriod),l.a.createElement("td",null,e.Process),l.a.createElement("td",null,e.Reason),l.a.createElement("td",null,e.DamageCode),l.a.createElement("td",null,e.SAPNotify),l.a.createElement("td",null,e.UserName),l.a.createElement("td",null,e.InputTime))}))))))))))}},83:function(e,t,a){"use strict";var n=a(1),r=a(3),c=a(5),l=a.n(c),o=a(0),i=a.n(o),s=(a(26),a(68)),d=a(58),u=a(7),m=i.a.forwardRef((function(e,t){var a,c,s=e.bsPrefix,m=e.type,f=e.size,b=e.id,p=e.className,h=e.isValid,v=e.isInvalid,y=e.plaintext,O=e.readOnly,E=e.as,j=void 0===E?"input":E,N=Object(r.a)(e,["bsPrefix","type","size","id","className","isValid","isInvalid","plaintext","readOnly","as"]),g=Object(o.useContext)(d.a).controlId;if(s=Object(u.a)(s,"form-control"),y)(c={})[s+"-plaintext"]=!0,a=c;else if("file"===m){var P;(P={})[s+"-file"]=!0,a=P}else{var x;(x={})[s]=!0,x[s+"-"+f]=f,a=x}return i.a.createElement(j,Object(n.a)({},N,{type:m,ref:t,readOnly:O,id:b||g,className:l()(p,a,h&&"is-valid",v&&"is-invalid")}))}));m.displayName="FormControl",m.Feedback=s.a,t.a=m},84:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];function n(){for(var e=arguments.length,a=Array(e),n=0;n<e;n++)a[n]=arguments[n];var r=null;return t.forEach((function(e){if(null==r){var t=e.apply(void 0,a);null!=t&&(r=t)}})),r}return(0,c.default)(n)};var n,r=a(85),c=(n=r)&&n.__esModule?n:{default:n};e.exports=t.default},85:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t,a,n,r,c,l){var o=r||"<<anonymous>>",i=l||n;if(null==a[n])return t?new Error("Required "+c+" `"+i+"` was not specified in `"+o+"`."):null;for(var s=arguments.length,d=Array(s>6?s-6:0),u=6;u<s;u++)d[u-6]=arguments[u];return e.apply(void 0,[a,n,o,c,i].concat(d))}var a=t.bind(null,!1);return a.isRequired=t.bind(null,!0),a},e.exports=t.default}}]);
//# sourceMappingURL=20.3083a331.chunk.js.map