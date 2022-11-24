import axios from "axios"
let baseurl='http://localhost:5000/anzo/reports'


const ReportsApi = {
    getData : function(data)
    {
   
            console.log("getComplaintData api",data)
            return fetch(`${baseurl}/getdata`, {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                  
                },
                body: JSON.stringify(data),
              })
         
    },
    getChildTableData: function(data)
    {
        console.log("getChildTableData api",data)
        return fetch(`${baseurl}/childdata`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
              
            },
            body: JSON.stringify(data),
          })

    },
    getOEETrendChartData: function(data)
    {
        console.log("getChildTableData api",data)
        return fetch(`${baseurl}/oeecharttrenddata`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
              
            },
            body: JSON.stringify(data),
          })

    },
    getBreakDownTrendTableData: function(data)
    {
        console.log("getChildTableData api",data)
        return fetch(`${baseurl}/breakdowntrendtabledata`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
              
            },
            body: JSON.stringify(data),
          })

    },
    getBreakDownChartData: function(data)
    {
        console.log("getChildTableData api",data)
        return fetch(`${baseurl}/breakdownchartdata`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
              
            },
            body: JSON.stringify(data),
          })

    },
    getRedTagWhiteTagStatus: function(data)
    {
        console.log("getChildTableData api",data)
        return fetch(`${baseurl}/redTagAndWhiteTagStatus`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
              
            },
            body: JSON.stringify(data),
          })

    },
    getRedTagWhiteTagStatusEmployee: function(data)
    {
        console.log("getChildTableData api",data)
        return fetch(`${baseurl}/redTagWhiteTagEmployee`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
              
            },
            body: JSON.stringify(data),
          })

    },
    getRedTagWhiteTagStatusByEmp: function(data)
    {
        console.log("getChildTableData api",data)
        return fetch(`${baseurl}/redTagAndWhiteTagStatusByEmp`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
              
            },
            body: JSON.stringify(data),
          })

    },
    getUsers:function() {
      return fetch(`${baseurl}/users`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          
        },
       
      })
    }
}

export default ReportsApi