(this.webpackJsonpdemo=this.webpackJsonpdemo||[]).push([[39],{376:function(e,a,t){"use strict";t.r(a);var l=t(64),n=t(0),r=t.n(n),c=t(100),m=t(147),i=t(74),s=t(282),d=t.n(s),o=t(283),E=t.n(o),u=t(284),b=t.n(u);E()(d.a);a.default=function(e){var a=Object(n.useState)([]),t=Object(l.a)(a,2),s=t[0],d=t[1],o=e.labelData.OEE,E={chart:{caption:"Production Line Status",showvalues:"0",formatnumberscale:"0",showpercentvalues:"1",showsum:"0",plottooltext:"<b>$dataValue</b> from $seriesName in $label {br}<b>$percentValue</b> of total",theme:"fusion"},categories:[{category:[{label:"Data"}]}],dataset:[{seriesname:"BStart Time",data:e.lineBreakageTimmingData[0].filter((function(e){return e.BStartTime>0})).map((function(e){return{value:e.BStartTime}}))},{seriesname:"BStop Time",data:e.lineBreakageTimmingData[0].map((function(e){return{value:e.BStopTime}}))},{seriesname:"BNext Start Time",data:e.lineBreakageTimmingData[0].map((function(e){return{value:e.NextBStartTime}}))}]};return r.a.createElement("div",{className:"OEEAnalysis"},r.a.createElement("div",{className:"card card-OEEAnalysis-one"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h7",null,"Production Time Line Analysis"),r.a.createElement("button",{onClick:e.FlagUpdate,type:"button",class:"btn-close","aria-label":"Close"},"X")),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"card card-OEEAnalysis-child1"},r.a.createElement(b.a,{type:"stackedbar3d",width:"100%",height:"80%",dataFormat:"JSON",dataSource:E})),r.a.createElement("h4",null,"OEE Analysis"),r.a.createElement("div",{className:"card card-OEEAnalysis-child"},r.a.createElement("div",{className:"card-header"},r.a.createElement("div",{className:"line-b-select"},r.a.createElement("p",{className:""},"Actual OEE:"),r.a.createElement("div",{className:"container"},r.a.createElement(i.a,{className:"mb-3"},r.a.createElement(m.a.Control,{placeholder:"",value:o,"aria-label":"","aria-describedby":"basic-addon1"})))),r.a.createElement("div",{className:"line-b-select"},r.a.createElement("p",{className:""},"New OEE:"),r.a.createElement("div",{className:"container"},r.a.createElement(i.a,{className:"mb-3"},r.a.createElement(m.a.Control,{placeholder:"",value:s,"aria-label":"","aria-describedby":"basic-addon1"}))))),r.a.createElement("div",{className:"card-body"},r.a.createElement(c.a,{bordered:!0,className:"mg-b-0"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Start Time"),r.a.createElement("th",null,"End Time"),r.a.createElement("th",null,"Down Time"),r.a.createElement("th",null,"Breaking Process"),r.a.createElement("th",null,"Select"))),r.a.createElement("tbody",null,e.lineBreakageTimmingData[1].map((function(a){return r.a.createElement("tr",{key:a._id},r.a.createElement("th",{scope:"row"},a.STARTTIME),r.a.createElement("td",null,a.ENDTIME),r.a.createElement("td",null,a.timediff),r.a.createElement("td",null,a.MachineName),r.a.createElement("td",null,"               ",r.a.createElement(m.a,null,["checkbox"].map((function(t){return r.a.createElement("div",{key:"inline-".concat(t),className:"mb-3"},r.a.createElement(m.a.Check,{inline:!0,label:"",onClick:function(t){return function(a){var t=parseInt(e.labelData.Avail)+a/480*100,l=e.labelData.Performance*t/100;d(l)}(a.timediff)},name:"group1",type:t,id:"inline-".concat(t,"-1")}))})))))})))))))))}}}]);
//# sourceMappingURL=39.07d1fa25.chunk.js.map