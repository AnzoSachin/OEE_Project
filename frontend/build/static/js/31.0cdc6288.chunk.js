(this.webpackJsonpdemo=this.webpackJsonpdemo||[]).push([[31],{100:function(e,t,a){"use strict";var n=a(1),c=a(3),o=a(5),i=a.n(o),r=a(0),l=a.n(r),s=a(7),d=l.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,r=e.striped,d=e.bordered,u=e.borderless,p=e.hover,h=e.size,m=e.variant,f=e.responsive,b=Object(c.a)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),g=Object(s.a)(a,"table"),y=i()(o,g,m&&g+"-"+m,h&&g+"-"+h,r&&g+"-striped",d&&g+"-bordered",u&&g+"-borderless",p&&g+"-hover"),E=l.a.createElement("table",Object(n.a)({},b,{className:y,ref:t}));if(f){var O=g+"-responsive";return"string"===typeof f&&(O=O+"-"+f),l.a.createElement("div",{className:O},E)}return E}));t.a=d},139:function(e,t,a){"use strict";var n,c=a(115),o=a(63),i=a.n(o),r="http://localhost:5000/anzo/admin",l=(n={getLineData:function(){return i()({method:"GET",url:"".concat(r,"/linedata"),headers:{"content-type":"application/json"}})},getUserRole:function(){return i()({method:"GET",url:"".concat(r,"/userrole"),headers:{"content-type":"application/json"}})},getShift:function(){return i()({method:"GET",url:"".concat(r,"/shift"),headers:{"content-type":"application/json"}})},GetShutDownDetails:function(){return i()({method:"GET",url:"".concat(r,"/calendarshutdowndetails"),headers:{"content-type":"application/json"}})},GetShutDownReason:function(){return i()({method:"GET",url:"".concat(r,"/calendarshutdownreason"),headers:{"content-type":"application/json"}})},getUserList:function(){return i()({method:"GET",url:"".concat(r,"/userlist"),headers:{"content-type":"application/json"}})},getManagealert:function(){return i()({method:"GET",url:"".concat(r,"/managealert"),headers:{"content-type":"application/json"}})},getFileCategoryList:function(){return i()({method:"GET",url:"".concat(r,"/filecategory"),headers:{"content-type":"application/json"}})},addUser:function(e){return console.log("getComplaintData api",e),fetch("".concat(r,"/addUser"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)})},SaveCalendar:function(e){return console.log("SaveCalendar api",e),fetch("".concat(r,"/savecalendar"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)})},UploadFile:function(e){return console.log("UploadFile api",e.get("Comment")),i.a.post("".concat(r,"/uploadFile"),e,{headers:{"content-type":"multipart/form-data"}})},UploadFile1:function(e){return console.log("UploadFile api",e),fetch("".concat(r,"/uploadFile1"),{method:"POST",header:{"Content-Type":"multipart/form-data"},body:e})},saveMachine:function(e){return console.log("saveMachine api",e),fetch("".concat(r,"/saveMachine"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)})},updateMachine:function(e){return console.log("updateMachine api",e),fetch("".concat(r,"/updateMachine"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)})},getAllMachine:function(){return i()({method:"GET",url:"".concat(r,"/allMachine"),headers:{"content-type":"application/json"}})},getFaultList:function(){return i()({method:"GET",url:"".concat(r,"/faultlist"),headers:{"content-type":"application/json"}})},getFaultList1:function(e){return console.log("getComplaintData api",e),fetch("".concat(r,"/faultlist"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)})},addFault:function(e){return console.log("getComplaintData api",e),fetch("".concat(r,"/addFault"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)})},updateFault:function(e){return console.log("getComplaintData api",e),fetch("".concat(r,"/updateFault"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)})}},Object(c.a)(n,"getAllMachine",(function(){return i()({method:"GET",url:"".concat(r,"/allMachine"),headers:{"content-type":"application/json"}})})),Object(c.a)(n,"getMachineData",(function(){return i()({method:"GET",url:"".concat(r,"/machinedata"),headers:{"content-type":"application/json"}})})),Object(c.a)(n,"updateAlert",(function(e){return console.log("updateAlert api",e),fetch("".concat(r,"/updatealert"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)})})),Object(c.a)(n,"getAlertDetail",(function(e){return console.log("getAlertDetail api",e),fetch("".concat(r,"/getalertdetail"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)})})),n);t.a=l},67:function(e,t,a){"use strict";var n=a(63),c=a.n(n),o="http://localhost:5000/anzo/dashboard",i={getLineData:function(){return c()({method:"GET",url:"".concat(o,"/linedata"),headers:{"content-type":"application/json"}})},getShiftData:function(){return c()({method:"GET",url:"".concat(o,"/shiftdata"),headers:{"content-type":"application/json"}})},getBlock:function(){return c()({method:"GET",url:"".concat(o,"/block"),headers:{"content-type":"application/json"}})},getCurrentLineStatus:function(){return c()({method:"GET",url:"".concat(o,"/currentlinestatus"),headers:{"content-type":"application/json"}})},getChartData:function(e){return fetch("".concat(o,"/chartdata"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)})},getPieChartData:function(e){return fetch("".concat(o,"/piechartdata"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)})},getGridData:function(e){return fetch("".concat(o,"/griddata"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)})},getLineBreakageTimmings:function(e){return fetch("".concat(o,"/linebreakagetimmings"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)})},getLabelsData:function(e){return fetch("".concat(o,"/labeldata"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)})},getOEETrendData:function(e){return fetch("".concat(o,"/oeetrenddata"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)})},getComplainData:function(e){return fetch("".concat(o,"/complaindata"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)})},getLineDetails:function(e){return fetch("".concat(o,"/linedetails"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)})}};t.a=i},74:function(e,t,a){"use strict";var n=a(1),c=a(3),o=a(5),i=a.n(o),r=a(0),l=a.n(r),s=a(22),d=a(7),u=l.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.size,r=e.className,s=e.as,u=void 0===s?"div":s,p=Object(c.a)(e,["bsPrefix","size","className","as"]);return a=Object(d.a)(a,"input-group"),l.a.createElement(u,Object(n.a)({ref:t},p,{className:i()(r,a,o&&a+"-"+o)}))})),p=Object(s.a)("input-group-append"),h=Object(s.a)("input-group-prepend"),m=Object(s.a)("input-group-text",{Component:"span"});u.displayName="InputGroup",u.Text=m,u.Radio=function(e){return l.a.createElement(m,null,l.a.createElement("input",Object(n.a)({type:"radio"},e)))},u.Checkbox=function(e){return l.a.createElement(m,null,l.a.createElement("input",Object(n.a)({type:"checkbox"},e)))},u.Append=p,u.Prepend=h,t.a=u},796:function(e,t,a){"use strict";a.r(t);var n=a(75),c=a(64),o=a(0),i=a.n(o),r=a(89),l=a(100),s=a(147),d=a(74),u=a(67),p=a(139),h=a(134);a(132);t.default=function(){var e=Object(o.useState)([]),t=Object(c.a)(e,2),a=t[0],m=t[1],f=Object(o.useState)([]),b=Object(c.a)(f,2),g=b[0],y=b[1],E=Object(o.useState)([]),O=Object(c.a)(E,2),j=O[0],v=O[1],N=Object(o.useState)([]),S=Object(c.a)(N,2),T=S[0],C=S[1],P=Object(o.useState)(""),D=Object(c.a)(P,2),M=D[0],k=D[1],G=Object(o.useCallback)((function(){u.a.getLineData().then((function(e){console.log("getLineData",e.data),m(e.data)}))})),J=Object(o.useCallback)((function(){p.a.getAllMachine().then((function(e){console.log("getAllMachine",e.data.recordset),y(e.data.recordset)}))})),A=Object(o.useCallback)((function(){var e=M?"Y":"N";p.a.saveMachine({line:j,machineprocess:T,action:"ADD",Isactive:e}).then((function(e){h.b.info("Machine Created"),J()}))})),L=Object(o.useCallback)((function(){var e=M?"Y":"N";p.a.updateMachine({line:j,machineprocess:T,action:"UPDATE",Isactive:e}).then((function(e){h.b.info("Machine Updated"),J()}))}));return Object(o.useEffect)((function(){G(),J()}),[]),i.a.createElement("div",{className:"batch"},i.a.createElement(h.a,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,theme:"light"}),i.a.createElement(h.a,null),i.a.createElement("div",{className:"card card-machinemanagement-one"},i.a.createElement("div",{className:"card-header"},i.a.createElement("h7",null,"Machine/Process")),i.a.createElement("div",{className:"card-body"},i.a.createElement("h4",null,"Add\\Update Machine "),i.a.createElement("div",{className:"card card-machinemanagement-child"},i.a.createElement("div",{className:"card-header"},i.a.createElement("div",{className:"line-b-select-3"},i.a.createElement("p",null,"Line Type:"),i.a.createElement("div",{className:"container-3"},i.a.createElement(r.a,{onChange:function(e){return function(e){v(e.value)}(e)},value:a.value,options:Object(n.a)(a.map((function(e){return{value:e.LineCode,label:e.LineName}})))}))),i.a.createElement("div",{className:"line-b-select-7"},i.a.createElement("p",{className:""},"Machine/Process:"),i.a.createElement("div",{className:"container-7"},i.a.createElement(d.a,{className:"mb-3"},i.a.createElement(s.a.Control,{placeholder:"",value:T,onChange:function(e){return function(e){C(e.target.value)}(e)},"aria-label":"","aria-describedby":"basic-addon1"})))),i.a.createElement("div",{className:"line-b-select-8"},i.a.createElement("div",{className:"container-8"},i.a.createElement(s.a,null,["checkbox"].map((function(e){return i.a.createElement("div",{key:"inline-".concat(e),className:"mb-3"},i.a.createElement(s.a.Check,{inline:!0,label:"Is Active",onChange:function(e){k("Y")},name:"group1",type:e,id:"inline-".concat(e,"-1")}))}))))),i.a.createElement("button",{className:"classbutton1",onClick:function(e){A()}},"Save"),i.a.createElement("button",{className:"classbutton2",onClick:function(e){L()}},"Update"),i.a.createElement("button",{className:"classbutton3",onClick:function(e){}},"Reset")),i.a.createElement("div",{className:"card-body"},i.a.createElement("div",{className:"table-responsive"},i.a.createElement(l.a,{bordered:!0,className:"mg-b-0"},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"Id"),i.a.createElement("th",null,"Machine Name"),i.a.createElement("th",null,"IsActive"),i.a.createElement("th",null,"update"))),i.a.createElement("tbody",null,g.map((function(e){return i.a.createElement("tr",{key:e._id},i.a.createElement("td",null,e.Id),i.a.createElement("td",null,e.MachineName),i.a.createElement("td",null,e.IsActive),i.a.createElement("td",null,i.a.createElement("button",{onClick:function(){return t=e.MachineName,void C((function(e){return t}));var t}},"select")))}))))))))))}}}]);
//# sourceMappingURL=31.0cdc6288.chunk.js.map