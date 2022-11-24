import axios from "axios"
let baseurl='http://localhost:5000/anzo/downloadM'

const downloadManual = {
    getFileData:function()
    {
        return  axios({
            "method": "GET",
            "url": `${baseurl}/filedata`,
            "headers": {
              "content-type": "application/json",
              
            }
          })
    },
    getFileContent : function(data)
    {
   
            console.log("stopBatch",data)
            return fetch(`${baseurl}/filecontent`, {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                  
                },
                body: JSON.stringify(data),
              })
         
    },
}

export default downloadManual