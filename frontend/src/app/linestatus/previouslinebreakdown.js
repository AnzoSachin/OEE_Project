
import React, { Component, useCallback, useEffect, useState } from "react";
import Select from "react-select";
import { Table } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import { Form } from "react-bootstrap";
import dasboardApi from "../../api/dashboardApi"
import lineStatusApi from "../../api/lineStatusApi"
import moment from 'moment'

const PreviousLineBreakDown = () =>{
  const[linedata,setLineData] = useState([])
  const[line,setLine] = useState({})
  const[startdate,setStartDate] = useState([])
  const[enddate,setEndDate] = useState([])
  const[previousbreakdowndetail,setGetPreviousBreadkDowndetail] = useState([])


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
  const handleStartdate =(e)=> {
   
    setStartDate(e.target.value)

    
  }
  const handleEnddate =(e)=>{
   
   setEndDate(e.target.value)
  }

  const getAllData =(e) =>{
    lineStatusApi.getPreviousBreakDownDetail({startdate,enddate,line})
    .then((res) => res.json())
    .then((data) => {
     
           console.log("res",data)
           setGetPreviousBreadkDowndetail(data.recordset)
         
          })
  }
  useEffect(() =>{
    getLineData()
  },[]
  )


 
    return(
        <div className="PreviousLineBreakDown">
     
       
        <div className="card card-previouslinebreakdown-one">
        <div className="card-header">
            <h7>Line Status</h7>
        
    
                  
                  </div>
                
               
                <div className="card-body">
                    <h4>Fill Previous Breakdown Reason</h4>
                 <div className="card card-previouslinebreakdown-child">
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
                    <div className="line-b-select">
                      <p className="">Start Date:</p>
                      <div className="container">
                      <Form.Group controlId="dob">
                          
                          <Form.Control
                            type="date"
                            name="dob"
                            value={startdate}
                            onChange={(e) => handleStartdate(e)}
                            placeholder=""
                          />
                        </Form.Group>
                      </div>
                      
                    </div>
                    <div className="line-b-select">
                      <p className="">End Date:</p>
                      <div className="container">
                      <Form.Group controlId="dob">
                          
                          <Form.Control
                            type="date"
                            name="dob"
                            value={enddate}
                           onChange={(e) => handleEnddate(e)}
                            placeholder=""
                          />
                        </Form.Group>
                      </div>
                      
                    </div>
                    <button className="classbutton"
                      onClick={(e) => {
                        getAllData()
                      }}
                    >
                      Get Breakdown
                    </button>

                   

                    </div>
                    <div className="card-body">
                    <Table bordered className="mg-b-0 table-plb">
               
               <thead>
                 <tr>
                 <th>ID</th>
                   <th>MachineUpTime</th>
                   <th>MachineDownTime</th>
                   <th>DownPeriod</th>
                   <th>Process</th>
                   <th>Reason</th>
                   <th>SAP Notify</th>
                   <th>UserName</th>
                   <th>InputTime</th>
                   
                  
                   
                   
                 </tr>
               </thead>
               <tbody>

               {previousbreakdowndetail.map((item) => (
                <tr key={item._id}>
              <td>{item.Id}</td>
              <td>{moment(item.MachineUpTime).format('YYYY-MM-DD HH:mm:ss')}</td>
              <td>{moment(item.MachineDownTime).format('YYYY-MM-DD HH:mm:ss')}</td>
              <td>{item.DownPeriod}</td>
              <td>{item.Process}</td>
              <td>{item.Reason}</td>
              <td>{item.SAPNotify}</td>
              <td>{item.UserName}</td>
              <td>{moment(item.InputTime).format('YYYY-MM-DD HH:mm:ss')}</td>
             

              
              
             
             
            </tr>
          ))}
               
               
               
               
                
                
                
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

export default PreviousLineBreakDown