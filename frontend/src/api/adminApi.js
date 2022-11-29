import axios from "axios"
let baseurl='http://localhost:5000/anzo/admin'


const AdminApi = {
  getLineData:function()
  {
      return  axios({
          "method": "GET",
          "url": `${baseurl}/linedata`,
          "headers": {
            "content-type": "application/json",
            
          }
        })
  },
    getUserRole:function()
    {
        return  axios({
            "method": "GET",
            "url": `${baseurl}/userrole`,
            "headers": {
              "content-type": "application/json",
              
            }
          })
    },
    getShift:function()
    {
        return  axios({
            "method": "GET",
            "url": `${baseurl}/shift`,
            "headers": {
              "content-type": "application/json",
              
            }
          })
    },
    GetShutDownDetails:function()
    {
        return  axios({
            "method": "GET",
            "url": `${baseurl}/calendarshutdowndetails`,
            "headers": {
              "content-type": "application/json",
              
            }
          })
    },
    GetShutDownReason:function()
    {
        return  axios({
            "method": "GET",
            "url": `${baseurl}/calendarshutdownreason`,
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
    getManagealert:function()
    {
        return  axios({
            "method": "GET",
            "url": `${baseurl}/managealert`,
            "headers": {
              "content-type": "application/json",
              
            }
          })
    },
    getFileCategoryList:function()
    {
        return  axios({
            "method": "GET",
            "url": `${baseurl}/filecategory`,
            "headers": {
              "content-type": "application/json",
              
            }
          })
    },
    addUser : function(data)
    {
   
            console.log("getComplaintData api",data)
            return fetch(`${baseurl}/addUser`, {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                  
                },
                body: JSON.stringify(data),
              })
         
    },
    SaveCalendar : function(data)
    {
   
            console.log("SaveCalendar api",data)
            return fetch(`${baseurl}/savecalendar`, {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                  
                },
                body: JSON.stringify(data),
              })
         
    },
    // UploadFile : function(data)
    // {
   
    //         console.log("getComplaintData api",data)
    //         return fetch(`${baseurl}/uploadFile`, {
    //             method: "POST",
    //             headers: {
    //               "content-type": "application/json",
                  
    //             },
    //             body: JSON.stringify(data),
    //           })
         
    // },

    UploadFile : function(data)
    {
   
            console.log("UploadFile api",data.get("Comment"))
            return axios.post(`${baseurl}/uploadFile`,data,{
                headers: {
                  "content-type": "multipart/form-data",
                  
                },
               
              })
         
    },

    UploadFile1 : function(data)
    {
   
            console.log("UploadFile api",data)
            return fetch(`${baseurl}/uploadFile1`, {
                method: "POST",
             
                header:{
                  "Content-Type":"multipart/form-data"
                },
                body: data,
               
              }
              )
         
    },

    saveMachine : function(data)
    {
   
            console.log("saveMachine api",data)
            return fetch(`${baseurl}/saveMachine`, {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                  
                },
                body: JSON.stringify(data),
              })
         
    },

    updateMachine : function(data)
    {
   
            console.log("updateMachine api",data)
            return fetch(`${baseurl}/updateMachine`, {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                  
                },
                body: JSON.stringify(data),
              })
         
    },
  
    getAllMachine:function()
    {
        return  axios({
            "method": "GET",
            "url": `${baseurl}/allMachine`,
            "headers": {
              "content-type": "application/json",
              
            }
          })
    },

    getFaultList:function()
    {
        return  axios({
            "method": "GET",
            "url": `${baseurl}/faultlist`,
            "headers": {
              "content-type": "application/json",
              
            }
          })
    },
    getFaultList1: function(data)
    {
   
            console.log("getComplaintData api",data)
            return fetch(`${baseurl}/faultlist`, {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                  
                },
                body: JSON.stringify(data),
              })
         
    },

    addFault: function(data)
    {
   
            console.log("getComplaintData api",data)
            return fetch(`${baseurl}/addFault`, {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                  
                },
                body: JSON.stringify(data),
              })
         
    },

    updateFault: function(data)
    {
   
            console.log("getComplaintData api",data)
            return fetch(`${baseurl}/updateFault`, {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                  
                },
                body: JSON.stringify(data),
              })
         
    },

    getAllMachine:function()
    {
        return  axios({
            "method": "GET",
            "url": `${baseurl}/allMachine`,
            "headers": {
              "content-type": "application/json",
              
            }
          })
    },
    getMachineData:function()
    {
        return  axios({
            "method": "GET",
            "url": `${baseurl}/machinedata`,
            "headers": {
              "content-type": "application/json",
              
            }
          })
    },
   

    updateAlert: function(data)
    {
   
            console.log("updateAlert api",data)
            return fetch(`${baseurl}/updatealert`, {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                  
                },
                body: JSON.stringify(data),
              })
         
    },
    
    getAlertDetail: function(data)
    {
   
            console.log("getAlertDetail api",data)
            return fetch(`${baseurl}/getalertdetail`, {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                  
                },
                body: JSON.stringify(data),
              })
         
    },

    // getLineType : function()
    // {
   
          
    //         return fetch(`${baseurl}/linetype`, {
    //             method: "POST",
    //             headers: {
    //               "content-type": "application/json",
                  
    //             },
               
    //           })
         
    // },
    
}



export default AdminApi