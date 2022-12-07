import axios from "axios"
let baseurl='http://localhost:5000/anzo/complaint'


const ComplaintApi = {
    getDepartmentList:function()
    {
        return  axios({
            "method": "GET",
            "url": `${baseurl}/departmentlist`,
            "headers": {
              "content-type": "application/json",
              
            }
          })
    },
    getUserList:function()
    {
        return  axios({
            "method": "GET",
            "url": `${baseurl}/userlist`,
            "headers": {
              "content-type": "application/json",
              
            }
          })
    },
    getMachineList:function()
    {
        return  axios({
            "method": "GET",
            "url": `${baseurl}/machinelist`,
            "headers": {
              "content-type": "application/json",
              
            }
          })
    },

    getComplaintStatus:function()
    {
        return  axios({
            "method": "GET",
            "url": `${baseurl}/complaintstatus`,
            "headers": {
              "content-type": "application/json",
              
            }
          })
    },
    getComplaintData:function(data1) {
        console.log("getComplaintData api",data1)
        return fetch(`${baseurl}/complaintdata`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
              
            },
            body: JSON.stringify(data1),
          })
      }, 
      insertComplaintData:function(data) {
        console.log("getComplaintData api",data)
        return fetch(`${baseurl}/insertcomplaintdata`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
              
            },
            body: JSON.stringify(data),
          })
      } ,

      saveComplaintData:function(data) {
        console.log("getComplaintData api",data)
        return fetch(`${baseurl}/savecomplaintdata`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
              
            },
            body: JSON.stringify(data),
          })
      } ,

      checkCount:function(data) {
        console.log("checkcount",data)
        return fetch(`${baseurl}/exportcomplaint`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
              
            },
            body: JSON.stringify(data),
          })
      } ,
}



export default ComplaintApi