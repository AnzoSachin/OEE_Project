(this.webpackJsonpdemo=this.webpackJsonpdemo||[]).push([[25],{144:function(e,t,a){"use strict";a(63);var n="http://localhost:5000/anzo/linestatus",r={getBreakDownDetail:function(e){return console.log("linecode",e),fetch("".concat(n,"/breakdowndetail"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)})},getPreviousBreakDownDetail:function(e){return console.log("data in api",e),fetch("".concat(n,"/previousbreakdowndetail"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)})},getExcelExportBreakDownDetail:function(e){return console.log("data in api",e),fetch("".concat(n,"/excelexportbreakdowndetail"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)})},getShiftWiseBreakDownDetail:function(e){return console.log("data in api",e),fetch("".concat(n,"/shiftwisebreakdowndetail"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)})},getOfficerCommentOnBreakdown:function(e){return console.log("data in api",e),fetch("".concat(n,"/officercomment"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)})}};t.a=r},147:function(e,t,a){"use strict";var n=a(1),r=a(3),o=a(5),c=a.n(o),i=a(0),l=a.n(i),s=(a(84),a(68)),d=a(58),u=a(7),f=l.a.forwardRef((function(e,t){var a=e.id,o=e.bsPrefix,s=e.bsCustomPrefix,f=e.className,m=e.isValid,b=e.isInvalid,p=e.isStatic,h=e.as,v=void 0===h?"input":h,y=Object(r.a)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","isStatic","as"]),O=Object(i.useContext)(d.a),j=O.controlId;return o=O.custom?Object(u.a)(s,"custom-control-input"):Object(u.a)(o,"form-check-input"),l.a.createElement(v,Object(n.a)({},y,{ref:t,id:a||j,className:c()(f,o,m&&"is-valid",b&&"is-invalid",p&&"position-static")}))}));f.displayName="FormCheckInput",f.defaultProps={type:"checkbox"};var m=f,b=l.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.bsCustomPrefix,s=e.className,f=e.htmlFor,m=Object(r.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),b=Object(i.useContext)(d.a),p=b.controlId;return a=b.custom?Object(u.a)(o,"custom-control-label"):Object(u.a)(a,"form-check-label"),l.a.createElement("label",Object(n.a)({},m,{ref:t,htmlFor:f||p,className:c()(s,a)}))}));b.displayName="FormCheckLabel";var p=b,h=l.a.forwardRef((function(e,t){var a=e.id,o=e.bsPrefix,f=e.bsCustomPrefix,b=e.inline,h=e.disabled,v=e.isValid,y=e.isInvalid,O=e.feedback,j=e.className,N=e.style,g=e.title,E=e.type,S=e.label,x=e.children,P=e.custom,w=e.as,k=void 0===w?"input":w,D=Object(r.a)(e,["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedback","className","style","title","type","label","children","custom","as"]),C="switch"===E||P;o=C?Object(u.a)(f,"custom-control"):Object(u.a)(o,"form-check");var T=Object(i.useContext)(d.a).controlId,I=Object(i.useMemo)((function(){return{controlId:a||T,custom:C}}),[T,C,a]),F=null!=S&&!1!==S&&!x,L=l.a.createElement(m,Object(n.a)({},D,{type:"switch"===E?"checkbox":E,ref:t,isValid:v,isInvalid:y,isStatic:!F,disabled:h,as:k}));return l.a.createElement(d.a.Provider,{value:I},l.a.createElement("div",{style:N,className:c()(j,o,C&&"custom-"+E,b&&o+"-inline")},x||l.a.createElement(l.a.Fragment,null,L,F&&l.a.createElement(p,{title:g},S),(v||y)&&l.a.createElement(s.a,{type:v?"valid":"invalid"},O))))}));h.displayName="FormCheck",h.defaultProps={type:"checkbox",inline:!1,disabled:!1,isValid:!1,isInvalid:!1,title:""},h.Input=m,h.Label=p;var v=h,y=a(83),O=l.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,s=e.children,f=e.controlId,m=e.as,b=void 0===m?"div":m,p=Object(r.a)(e,["bsPrefix","className","children","controlId","as"]);a=Object(u.a)(a,"form-group");var h=Object(i.useMemo)((function(){return{controlId:f}}),[f]);return l.a.createElement(d.a.Provider,{value:h},l.a.createElement(b,Object(n.a)({},p,{ref:t,className:c()(o,a)}),s))}));O.displayName="FormGroup";var j=O,N=(a(26),a(73)),g=l.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.column,s=e.srOnly,f=e.className,m=e.htmlFor,b=Object(r.a)(e,["bsPrefix","column","srOnly","className","htmlFor"]),p=Object(i.useContext)(d.a).controlId;a=Object(u.a)(a,"form-label");var h=c()(f,a,s&&"sr-only",o&&"col-form-label");return m=m||p,o?l.a.createElement(N.a,Object(n.a)({as:"label",className:h,htmlFor:m},b)):l.a.createElement("label",Object(n.a)({ref:t,className:h,htmlFor:m},b))}));g.displayName="FormLabel",g.defaultProps={column:!1,srOnly:!1};var E=g,S=l.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,i=e.as,s=void 0===i?"small":i,d=e.muted,f=Object(r.a)(e,["bsPrefix","className","as","muted"]);return a=Object(u.a)(a,"form-text"),l.a.createElement(s,Object(n.a)({},f,{ref:t,className:c()(o,a,d&&"text-muted")}))}));S.displayName="FormText";var x=S,P=l.a.forwardRef((function(e,t){return l.a.createElement(v,Object(n.a)({},e,{ref:t,type:"switch"}))}));P.displayName="Switch",P.Input=v.Input,P.Label=v.Label;var w=P,k=a(22),D=l.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.inline,i=e.className,s=e.validated,d=e.as,f=void 0===d?"form":d,m=Object(r.a)(e,["bsPrefix","inline","className","validated","as"]);return a=Object(u.a)(a,"form"),l.a.createElement(f,Object(n.a)({},m,{ref:t,className:c()(i,s&&"was-validated",o&&a+"-inline")}))}));D.displayName="Form",D.defaultProps={inline:!1},D.Row=Object(k.a)("form-row"),D.Group=j,D.Control=y.a,D.Check=v,D.Switch=w,D.Label=E,D.Text=x;t.a=D},58:function(e,t,a){"use strict";var n=a(0),r=a.n(n).a.createContext({controlId:void 0});t.a=r},64:function(e,t,a){"use strict";function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var a=[],n=!0,r=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done)&&(a.push(c.value),!t||a.length!==t);n=!0);}catch(l){r=!0,o=l}finally{try{n||null==i.return||i.return()}finally{if(r)throw o}}return a}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}a.d(t,"a",(function(){return n}))},67:function(e,t,a){"use strict";var n=a(63),r=a.n(n),o="http://localhost:5000/anzo/dashboard",c={getLineData:function(){return r()({method:"GET",url:"".concat(o,"/linedata"),headers:{"content-type":"application/json"}})},getShiftData:function(){return r()({method:"GET",url:"".concat(o,"/shiftdata"),headers:{"content-type":"application/json"}})},getBlock:function(){return r()({method:"GET",url:"".concat(o,"/block"),headers:{"content-type":"application/json"}})},getCurrentLineStatus:function(){return r()({method:"GET",url:"".concat(o,"/currentlinestatus"),headers:{"content-type":"application/json"}})},getChartData:function(e){return fetch("".concat(o,"/chartdata"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)})},getPieChartData:function(e){return fetch("".concat(o,"/piechartdata"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)})},getGridData:function(e){return fetch("".concat(o,"/griddata"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)})},getLineBreakageTimmings:function(e){return fetch("".concat(o,"/linebreakagetimmings"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)})},getLabelsData:function(e){return fetch("".concat(o,"/labeldata"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)})},getOEETrendData:function(e){return fetch("".concat(o,"/oeetrenddata"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)})},getComplainData:function(e){return fetch("".concat(o,"/complaindata"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)})},getLineDetails:function(e){return fetch("".concat(o,"/linedetails"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)})}};t.a=c},68:function(e,t,a){"use strict";var n=a(1),r=a(3),o=a(5),c=a.n(o),i=a(0),l=a.n(i),s=a(4),d=a.n(s),u={type:d.a.string.isRequired,as:d.a.elementType},f=l.a.forwardRef((function(e,t){var a=e.as,o=void 0===a?"div":a,i=e.className,s=e.type,d=Object(r.a)(e,["as","className","type"]);return l.a.createElement(o,Object(n.a)({},d,{ref:t,className:c()(i,s&&s+"-feedback")}))}));f.displayName="Feedback",f.propTypes=u,f.defaultProps={type:"valid"},t.a=f},73:function(e,t,a){"use strict";var n=a(1),r=a(3),o=a(5),c=a.n(o),i=a(0),l=a.n(i),s=a(7),d=["xl","lg","md","sm","xs"],u=l.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,i=e.as,u=void 0===i?"div":i,f=Object(r.a)(e,["bsPrefix","className","as"]),m=Object(s.a)(a,"col"),b=[],p=[];return d.forEach((function(e){var t,a,n,r=f[e];if(delete f[e],null!=r&&"object"===typeof r){var o=r.span;t=void 0===o||o,a=r.offset,n=r.order}else t=r;var c="xs"!==e?"-"+e:"";null!=t&&b.push(!0===t?""+m+c:""+m+c+"-"+t),null!=n&&p.push("order"+c+"-"+n),null!=a&&p.push("offset"+c+"-"+a)})),b.length||b.push(m),l.a.createElement(u,Object(n.a)({},f,{ref:t,className:c.a.apply(void 0,[o].concat(b,p))}))}));u.displayName="Col",t.a=u},791:function(e,t,a){"use strict";a.r(t);var n=a(75),r=a(64),o=a(0),c=a.n(o),i=a(89),l=a(147),s=a(67),d=a(144),u=a(87),f=a.n(u),m=a(255),b=a(266);t.default=function(){var e=Object(o.useState)([]),t=Object(r.a)(e,2),a=t[0],u=t[1],p=Object(o.useState)([]),h=Object(r.a)(p,2),v=h[0],y=h[1],O=Object(o.useState)({}),j=Object(r.a)(O,2),N=j[0],g=j[1],E=Object(o.useState)({}),S=Object(r.a)(E,2),x=S[0],P=S[1],w=Object(o.useState)([]),k=Object(r.a)(w,2),D=k[0],C=k[1],T=Object(o.useState)([]),I=Object(r.a)(T,2),F=(I[0],I[1]),L=Object(o.useState)([]),R=Object(r.a)(L,2),J=(R[0],R[1]),B=Object(o.useState)([]),_=Object(r.a)(B,2),M=(_[0],_[1],Object(o.useState)(!1)),A=Object(r.a)(M,2),V=A[0],G=A[1],H=Object(o.useCallback)((function(){s.a.getLineData().then((function(e){console.log("res",e.data),u(e.data)}))})),z=Object(o.useCallback)((function(){s.a.getShiftData().then((function(e){console.log("Shift",e.data),y(e.data)}))})),q=function(e,t){var a={Sheets:{data:b.a.json_to_sheet(e)},SheetNames:["data"]},n=b.b(a,{bookType:"xlsx",type:"array"}),r=new Blob([n],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8"});m.saveAs(r,t+".xlsx")};return Object(o.useEffect)((function(){H(),z()}),[]),c.a.createElement("div",{className:"BreakDown"},c.a.createElement("div",{className:"card card-shiftbreakdownreport-one"},c.a.createElement("div",{className:"card-header"},c.a.createElement("h7",null,"Line Status")),c.a.createElement("div",{className:"card-body"},c.a.createElement("h4",null,"Export Shiftwise Breakdown Report"),c.a.createElement("div",{className:"card card-shiftbreakdownreport-child"},c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"select-1"},c.a.createElement("p1",null,"Select Line:"),c.a.createElement("div",{className:"select-line"},c.a.createElement(i.a,{onChange:function(e){return function(e){g(e.value)}(e)},isDisabled:V,value:a.value,options:Object(n.a)(a.map((function(e){return{value:e.LineCode,label:e.LineName}})))}))),c.a.createElement(l.a,null,["checkbox"].map((function(e){return c.a.createElement("div",{key:"inline-".concat(e),className:"mb-3"},c.a.createElement(l.a.Check,{inline:!0,onChange:function(e){G(!V)},label:"All Lines",name:"group1",type:e,id:"inline-".concat(e,"-1")}))}))),c.a.createElement("div",{className:"select-2"},c.a.createElement("p",null,"Shift:"),c.a.createElement("div",{className:"select-start"},c.a.createElement(i.a,{onChange:function(e){return function(e){P(e.value)}(e)},value:v.value,options:Object(n.a)(v.map((function(e){return{value:e.ShiftKey,label:e.ShiftValue}})))}))),c.a.createElement("div",{className:"select-3"},c.a.createElement("p",null,"Report Date:"),c.a.createElement("div",{className:"select-end"},c.a.createElement(l.a.Group,{controlId:"dob"},c.a.createElement(l.a.Control,{type:"date",name:"dob",value:D,onChange:function(e){return function(e){C(e.target.value)}(e)},placeholder:""})))),c.a.createElement("button",{className:"buttonbreakdown",onClick:function(e){!function(){var e="",t="";if("A"===x?(F(e=D+" 06:59:59"),t=f()(e).add(8,"hour").format("Y-MM-DD HH:mm:ss"),J(t)):"B"===x?(F(e=D+" 14:59:59"),t=f()(e).add(8,"hour").format("Y-MM-DD HH:mm:ss"),J(t)):(F(e=D+" 22:59:59"),t=f()(e).add(8,"hour").format("Y-MM-DD HH:mm:ss"),J(t)),!0===V){d.a.getShiftWiseBreakDownDetail({StartD:e,EndD:t,line:"All"}).then((function(e){return e.json()})).then((function(e){console.log("res",e),q(e.recordset,"shift_breakdown_report")}))}else d.a.getShiftWiseBreakDownDetail({StartD:e,EndD:t,line:N}).then((function(e){return e.json()})).then((function(e){console.log("res",e),q(e.recordset,"shift_breakdown_report")}))}()}},"ExportToExcel"))))))}},83:function(e,t,a){"use strict";var n=a(1),r=a(3),o=a(5),c=a.n(o),i=a(0),l=a.n(i),s=(a(26),a(68)),d=a(58),u=a(7),f=l.a.forwardRef((function(e,t){var a,o,s=e.bsPrefix,f=e.type,m=e.size,b=e.id,p=e.className,h=e.isValid,v=e.isInvalid,y=e.plaintext,O=e.readOnly,j=e.as,N=void 0===j?"input":j,g=Object(r.a)(e,["bsPrefix","type","size","id","className","isValid","isInvalid","plaintext","readOnly","as"]),E=Object(i.useContext)(d.a).controlId;if(s=Object(u.a)(s,"form-control"),y)(o={})[s+"-plaintext"]=!0,a=o;else if("file"===f){var S;(S={})[s+"-file"]=!0,a=S}else{var x;(x={})[s]=!0,x[s+"-"+m]=m,a=x}return l.a.createElement(N,Object(n.a)({},g,{type:f,ref:t,readOnly:O,id:b||E,className:c()(p,a,h&&"is-valid",v&&"is-invalid")}))}));f.displayName="FormControl",f.Feedback=s.a,t.a=f},84:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];function n(){for(var e=arguments.length,a=Array(e),n=0;n<e;n++)a[n]=arguments[n];var r=null;return t.forEach((function(e){if(null==r){var t=e.apply(void 0,a);null!=t&&(r=t)}})),r}return(0,o.default)(n)};var n,r=a(85),o=(n=r)&&n.__esModule?n:{default:n};e.exports=t.default},85:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t,a,n,r,o,c){var i=r||"<<anonymous>>",l=c||n;if(null==a[n])return t?new Error("Required "+o+" `"+l+"` was not specified in `"+i+"`."):null;for(var s=arguments.length,d=Array(s>6?s-6:0),u=6;u<s;u++)d[u-6]=arguments[u];return e.apply(void 0,[a,n,i,o,l].concat(d))}var a=t.bind(null,!1);return a.isRequired=t.bind(null,!0),a},e.exports=t.default}}]);
//# sourceMappingURL=25.2174f8d4.chunk.js.map