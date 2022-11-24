import axios from "axios"
let baseurl='http://localhost:5000/anzo/dashboard'

const dasboardApi = {
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

    getShiftData:function()
    {
        return axios({
          "method":"GET",
          "url": `${baseurl}/shiftdata`,
          "headers": {
            "content-type":"application/json",
          }
        })
    },

    getBlock:function()
    {
        return axios({
          "method":"GET",
          "url": `${baseurl}/block`,
          "headers": {
            "content-type":"application/json",
          }
        })
    },

    getCurrentLineStatus:function()
    {
        return axios({
          "method":"GET",
          "url": `${baseurl}/currentlinestatus`,
          "headers": {
            "content-type":"application/json",
          }
        })
    },
    getChartData:function(data)
    
    {  
      
    return fetch(`${baseurl}/chartdata`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        
      },
      body: JSON.stringify(data),
    })
           
        // return axios({
        //   "method":"GET",
        //   "url": `${baseurl}/chartdata`,
        //   "headers": {
        //     "content-type":"application/json",
        //   },
        //   body: JSON.stringify(data),
        // })
    },
    getPieChartData:function(data)
    {
      return fetch(`${baseurl}/piechartdata`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          
        },
        body: JSON.stringify(data),
      })
    },
    getGridData:function(data)
    {
      return fetch(`${baseurl}/griddata`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          
        },
        body: JSON.stringify(data),
      })
    },
    getLineBreakageTimmings:function(data)
    {
      return fetch(`${baseurl}/linebreakagetimmings`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          
        },
        body: JSON.stringify(data),
      })
    },
    getLabelsData:function(data)
    {
      return fetch(`${baseurl}/labeldata`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          
        },
        body: JSON.stringify(data),
      })
    },
    getOEETrendData:function(data)
    {
      return fetch(`${baseurl}/oeetrenddata`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          
        },
        body: JSON.stringify(data),
      })
    },
    getComplainData:function(data)
    {
      return fetch(`${baseurl}/complaindata`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          
        },
        body: JSON.stringify(data),
      })
    },

    getLineDetails:function(data)
    {
      return fetch(`${baseurl}/linedetails`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          
        },
        body: JSON.stringify(data),
      })
    },
}

export default dasboardApi