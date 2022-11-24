
import React, { Component, useCallback, useEffect, useState } from "react";

import { Form } from "react-bootstrap";
import InputGroup from 'react-bootstrap/InputGroup';
import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css";
import moment from 'moment'
import BatchApi from "../../api/batchApi"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const UpdateBatch = (props) =>{
  const[startdate,setStartDate] = useState([])
  const[starttime,setStartTime] = useState([])
  const[endDate,setEndDate] = useState([])
  const[endTime,setEndTime] = useState([])
  const[loader,setSetLoader] = useState(false)
  
 
 
  
  //  var startT= props.starttime
  //  var startformat = moment(startT).format('YYYY-MM-DD:h:mm')
  //  console.log("startformat",startformat)
    // var Sdate = startformat.substring(0,10)
    // var Stime = startformat.substring(11)
  var batchid = props.batchid

  // var EndT= props.stoptime
  // var endformat = moment(EndT).format('MM-DD-YYYY:h:mm')
  //  //var Edate = endformat.substring(0,10)
  //  var Etime = endformat.substring(11)
 
  // console.log("Sdate",Sdate,Stime)
  var splitStarttime = props.starttime ? props.starttime.split('T') : "00:00:00"

  var Stime = splitStarttime[1]
   var Sdateee = splitStarttime[0]
  var splitEndtime = props.stoptime ? props.stoptime.split('T') : "00:00:00"
  var Etime = splitEndtime[1]
  var Edate = splitEndtime[0]


 const UpdateBatch = useCallback(()=>{

  let StartDate = startdate+" "+starttime
  let EndDate = endDate+" "+endTime
 
    BatchApi.updateBatch({batchid,StartDate,EndDate})
      .then((res) => {
       
    
      toast.info('Batch Updated')
      props.disableflag()
    
   
     })
         
  })

  const handleStartDate = (e) =>{
    setStartDate(e.target.value)
  }
  const handleStartTime = (e) =>{
    setStartTime(e.target.value)
  }


      const handleEndDate = (e) =>{
        setEndDate(e.target.value)
      }
      const handleEndTime = (e) =>{
        setEndTime(e.target.value)
      }
    

 



    return(
        <div className="batch">
        <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
// closeOnClick
// rtl={false}
// pauseOnFocusLoss
// draggable
// pauseOnHover
theme="light"
/>
{/* Same as */}
<ToastContainer />
       
        <div className="card card-updatebatch-one">
        <div className="card-header">
            <h7>Batch id :- {props.batchid}</h7>
        
            <button onClick={props.disableflag} type="button" class="btn-close" aria-label="Close">X</button>
                  
                  </div>
                
               
                <div className="card-body">
                    <h4>Update Batch Time </h4>
                 <div className="card card-updatebatch-child">
                    <div className="card-header">

                    
                  
                    
                    <div className="line-b-select-4">
                      <p>Batch Start Time:</p>
                      <div className="container-4">
                      <Form.Group>
                         <p id="sd"> Date</p>
                         <div className="batchdate">
                      <Form.Control
                            type="date"
                            name="dob"
                            Value={Sdateee}
                           // value={this.state.date}
                            onChange={(e) => handleStartDate(e)}
                            placeholder="Date of Birth"
                          />
                          </div>
                          <p id="t">Time</p>
                          <div className="batchtime">
                          <InputGroup className="mb-3">
      
                      <Form.Control
                        onChange={(e) => handleStartTime(e)}
                      defaultValue={new Date()}
                      type="time"
                       placeholder=""
                         aria-label=""
                        aria-describedby="basic-addon1"
                          />
                       </InputGroup>
                          </div>
      </Form.Group>
                      </div>
                      </div>
                      
                  
                    
                    <div className="line-b-select-4">
                      <p>Batch Stop Time:</p>
                      <div className="container-4">
                      <Form.Group>
                         <p id="sd"> Date</p>
                         <div className="batchdate">
                      <Form.Control
                            type="date"
                            name="dob"
                            Value={Edate}
                            onChange={(e) => handleEndDate(e)}
                            placeholder="Date of Birth"
                          />
                          </div>
                          <p id="t">Time</p>
                          <div className="batchtime">
                          <InputGroup className="mb-3">
        {/* <InputGroup.Text id="basic-addon1"></InputGroup.Text> */}
                      <Form.Control
                        onChange={(e) => handleEndTime(e)}
                       defaultValue={Etime}
                       type="time"
                       placeholder=""
                         aria-label=""
                        aria-describedby="basic-addon1"
                          />
                       </InputGroup>
                          </div>
      </Form.Group>
                      </div>
                      </div>

                   
                      
                     

                     

                      
                      
                  
                    <button className="classbutton1"
                      onClick={(e) => {
                        UpdateBatch()
                      }}
                    >
                      Update
                    </button>

                   

                   

                   

                    </div>
                   

                 </div>
                 

                  
                </div>
                {/* card-body */}
              </div>
    </div>


    )
}

export default UpdateBatch