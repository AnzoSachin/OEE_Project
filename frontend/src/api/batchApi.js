import axios from "axios"
let baseurl='http://localhost:5000/anzo/batch'


const BatchApi = {
    getBatchNameList:function()
    {
        return  axios({
            "method": "GET",
            "url": `${baseurl}/batchnamelist`,
            "headers": {
              "content-type": "application/json",
              
            }
          })
    },
    getMixerList:function()
    {
        return  axios({
            "method": "GET",
            "url": `${baseurl}/mixerlist`,
            "headers": {
              "content-type": "application/json",
              
            }
          })
    },
    getPGList:function()
    {
        return  axios({
            "method": "GET",
            "url": `${baseurl}/PGlist`,
            "headers": {
              "content-type": "application/json",
              
            }
          })
    },
    getContainerSize : function(data)
    {
   
            console.log("getComplaintData api",data)
            return fetch(`${baseurl}/containersize`, {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                  
                },
                body: JSON.stringify(data),
              })
         
    },
    getBatchList : function(data)
    {
   
            console.log("getComplaintData api",data)
            return fetch(`${baseurl}/batchlist`, {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                  
                },
                body: JSON.stringify(data),
              })
         
    },
    addBatch : function(data)
    {
   
            console.log("addBatch",data)
            return fetch(`${baseurl}/addbatch`, {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                  
                },
                body: JSON.stringify(data),
              })
         
    },
    updateBatch : function(data)
    {
   
            console.log("updateBatch",data)
            return fetch(`${baseurl}/updatebatch`, {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                  
                },
                body: JSON.stringify(data),
              })
         
    },
    stopBatch : function(data)
    {
   
            console.log("stopBatch",data)
            return fetch(`${baseurl}/stopbatch`, {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                  
                },
                body: JSON.stringify(data),
              })
         
    },
  
}

export default BatchApi