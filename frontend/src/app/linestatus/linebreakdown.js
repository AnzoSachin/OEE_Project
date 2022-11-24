
import React, { Component, useCallback, useEffect, useState } from "react";
import Select from "react-select";
import { Table } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import { Form } from "react-bootstrap";
import dasboardApi from "../../api/dashboardApi"
import lineStatusApi from "../../api/lineStatusApi"

const LineBreakDown = () =>{
  const[linedata,setLineData] = useState([])
  const[line,setLine] = useState({})
  const[BreakDownStatus,setStatus] = useState({}) 


 

  const getLineData = useCallback(()=>{
    dasboardApi.getLineData()
    .then((res)=>{
      console.log("res",res.data)
      setLineData(res.data)
    })
  })
  const handleline = (value) =>{
   
  
    setLine(value.value)

   
  }

  const GetBreakDownData = ()=>{
    lineStatusApi.getBreakDownDetail({line})
    .then((res) => res.json())
    .then((data) => {
     
           console.log("getBreakDownDetail",data.recordsets )
           setStatus(data.recordsets)
          
          })
   
  }
  useEffect(() =>{
    getLineData()
  },[]
  )
 
    return(

     
    <div className="LineBreakDown">
     
       
        <div className="card card-linebreakdown-one">
        <div className="card-header">
            <h7>Line Status</h7>
        
    
                  
                  </div>
                
               
                <div className="card-body">
                    <h4>Line Breakdown Status</h4>
                 <div className="card card-linebreakdown-child">
                    <div className="card-header">
                    <div className="line-b-select">
                      <p className="">Select Line:</p>
                      <div className="container">
                      <Select
                        onChange={(value) => handleline(value)}
                        value={linedata.value}
                        options={[
                          ...linedata.map((ele) => {
                           
                             return {
                               value: ele.LineCode,
                               label: ele.LineName,
                             };
                           }),
                        ]}
                      />
                      </div>
                      
                    </div>
                    <button className="classbutton"
                      onClick={(e) => {GetBreakDownData()}}
                    >
                      Refresh
                    </button>

                    <h4>N/A</h4>

                    </div>
                    <div className="card-body">
                    <Table bordered className="mg-b-0">
               
               <thead>
                 <tr>
                   <th>MachineUpTime</th>
                   <th>MachineDownTime</th>
                   <th>DownPeriod</th>
                   <th>Process</th>
                   <th>Reason</th>
                   <th>SAP Notify</th>
                   <th>UserName</th>
                   <th>Comment</th>
                   
                  
                   
                   
                 </tr>
               </thead>
               <tbody>
                 <tr>
                   <th scope="row">A202</th>
                   <td>Machical</td>
                   <td>Red</td>
                   <td>Open</td>
                   <td>unknown</td>
                   <td>Open</td>
                   <td>Mhomad</td>
                   <td>Due to lunch</td>
                   
                   
                  
                 </tr>
               
               
               
               
                
                
                
               </tbody>
             </Table>
                    </div>

                 </div>
                 

                  
                </div>
                {/* card-body */}
              </div>
    </div>
 
   
    
    


    )
}
export default LineBreakDown