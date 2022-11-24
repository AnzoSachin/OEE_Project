import axios from "axios"
let baseurl='http://localhost:5000/anzo/linestatus'


const lineStatusApi = {

    getBreakDownDetail: function(linecode) {
        console.log("linecode",linecode)
        return fetch(`${baseurl}/breakdowndetail`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
              
            },
            body: JSON.stringify(linecode),
          })
    },

    getPreviousBreakDownDetail: function(data) {
      console.log("data in api",data)
      return fetch(`${baseurl}/previousbreakdowndetail`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
            
          },
          body: JSON.stringify(data),
        })
  },
  getExcelExportBreakDownDetail: function(data) {
    console.log("data in api",data)
    return fetch(`${baseurl}/excelexportbreakdowndetail`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          
        },
        body: JSON.stringify(data),
      })
},
getShiftWiseBreakDownDetail: function(data) {
  console.log("data in api",data)
  return fetch(`${baseurl}/shiftwisebreakdowndetail`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        
      },
      body: JSON.stringify(data),
    })
},
getOfficerCommentOnBreakdown: function(data) {

  console.log("data in api",data)
  return fetch(`${baseurl}/officercomment`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        
      },
      body: JSON.stringify(data),
    })
},
}

export default lineStatusApi