
import React, { Component, useCallback, useEffect, useState } from "react";
import Select from "react-select";
import { Table } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import { Form } from "react-bootstrap";
import InputGroup from 'react-bootstrap/InputGroup';
import dasboardApi from "../../api/dashboardApi"
import lineStatusApi from "../../api/lineStatusApi"
import moment from 'moment'

const OfficerComments = () =>{
  const[linedata,setLineData] = useState([])
  const[line,setLine] = useState({})
  const[startdate,setStartDate] = useState([])
  const[enddate,setEndDate] = useState([])
  const[duration,setDuration] = useState([])
  const[isRework,setisRework] = useState("N")
  const[officercommentData,setOfficerCommentData] = useState([])

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

  const handleduration =(e)=>{
   
    setDuration(e.target.value)
  }
  const handleReWork =(e)=>{
    
    setisRework("Y")
  }
  const getAllData =(e) =>{
    
     lineStatusApi.getOfficerCommentOnBreakdown({startdate,enddate,line,duration,isRework})
     .then((res) => res.json())
     .then((data) => {
     
            console.log("res OF getOfficerCommentOnBreakdown",data)
            setOfficerCommentData(data.recordset)
          
         
          })
  }
  useEffect(() =>{
    getLineData()
  },[]
  )
    return(
        <div className="officercomments">
     
       
        <div className="card card-officercomments-one">
        <div className="card-header">
            <h7>Line Status</h7>
        
    
                  
                  </div>
                
               
                <div className="card-body">
                    <h4>Fill Officer Comments for Breakdown </h4>
                 <div className="card card-officercomments-child">
                    <div className="card-header">
                    <div className="line-b-select-1">
                      <p className="">Select Line:</p>
                      <div className="container-1">
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
                    <div className="line-b-select-2">
                      <p className="">Start Date:</p>
                      <div className="container-2">
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
                    <div className="line-b-select-3">
                      <p className="">End Date:</p>
                      <div className="container-3">
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
                    <div className="line-b-select-4">
                      <p className="">Duration:</p>
                      <div className="container-4">
                      <InputGroup className="mb-3">
        {/* <InputGroup.Text id="basic-addon1"></InputGroup.Text> */}
        <Form.Control
         onChange = {(e) => handleduration(e)}
          placeholder="Enter Time in hour"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
                      </div>
                      
                    </div>

                    <div className="line-b-select-5">
                      
                      <div className="container-5">
                      <Form>
      {['checkbox'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            onChange = {(e) => handleReWork(e)}
            label="Include Rework"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
          />
         
         
        </div>
      ))}
    </Form>
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
                    <div className="table-responsive">
              <Table bordered className="mg-b-0">
               
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>MachineDown Time</th>
                    <th>MachineUP Time</th>
                    <th>DownPeriod</th>
                    <th>Process</th>
                    <th>Reason</th>
                    <th>DamageCode</th>
                    <th>SAP Notify</th>
                    <th>Username</th>
                    <th>InputTime</th>
                    
                    
                  </tr>
                </thead>
                <tbody>
                {officercommentData.map((item) => (
                <tr key={item._id}>
              <td>{item.Id}</td>
              <td>{  moment(item.MachineDownTime).format('YYYY-MM-DD HH:mm:ss')}</td>
              <td>{ moment(item.MachineUpTime).format('YYYY-MM-DD HH:mm:ss')}</td>
              <td>{item.DownPeriod}</td>
              <td>{item.Process}</td>
              <td>{item.Reason}</td>
              <td>{item.DamageCode}</td>
              <td>{item.SAPNotify}</td>
              <td>{item.UserName}</td>
              <td>{item.InputTime}</td>
             

              
              
             
             
            </tr>
          ))}
                
                 
                
                
                
                 
                 
                 
                </tbody>
              </Table>
            </div>
                        
                    </div>

                 </div>
                 

                  
                </div>
                {/* card-body */}
              </div>
    </div>


    )
}

export default OfficerComments