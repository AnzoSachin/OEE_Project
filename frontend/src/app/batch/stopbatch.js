
import React, { Component, useCallback, useEffect, useState } from "react";

import { Form } from "react-bootstrap";
import InputGroup from 'react-bootstrap/InputGroup';
import BatchApi from "../../api/batchApi"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StopB = (props) =>{
  const[stopdate,setStopDate] = useState([])
  const[stoptime,setStopTime] = useState([])
  const[loader,setSetLoader] = useState(false)
 


  var batchid = props.batchid



 
 


  const stopBatch = useCallback(()=>{
   
    let stoptimedate = stopdate+" "+stoptime+".000"
    BatchApi.stopBatch({batchid,stoptimedate})
    .then((res) => {

      
     toast.info('Batch Stoped')
        props.disableflag()
     
     
       })
         
  })

  const handleStopDate = (e) =>{
    setStopDate(e.target.value)
  }
  const handleStopTime = (e) =>{
    setStopTime(e.target.value)
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
                    <h4>Stop Batch Time </h4>
                 <div className="card card-updatebatch-child">
                    <div className="card-header">
                 
                   
                 
                 
                   
                 
                  
                    
                    <div className="line-b-select-4">
                      <p>Batch Stop Time:</p>
                      <div className="container-4">
                      <Form.Group>
                         <p id="sd"> Date</p>
                         <div className="batchdate">
                      <Form.Control
                            type="date"
                            name="dob"
                           // value={this.state.date}
                            onChange={(e) => handleStopDate(e)}
                            placeholder=""
                          />
                          </div>
                          <p id="t">Time</p>
                          <div className="batchtime">
                          <InputGroup className="mb-3">
      
                           <Form.Control
                            onChange={(e) => handleStopTime(e)}
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
                        stopBatch()
                      }}
                    >
                      Stop
                    </button>

                   

                   

                   

                    </div>
                   

                 </div>
                 

                  
                </div>
                {/* card-body */}
              </div>
    </div>


    )
}

export default StopB