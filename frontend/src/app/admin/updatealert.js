
import React, { Component, useEffect, useState,useCallback } from "react";
import { Table } from 'react-bootstrap';
import AdminApi from '../../api/adminApi'
import { Form } from "react-bootstrap";
import InputGroup from 'react-bootstrap/InputGroup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateAlerts = (props) =>{
  const[sender,setSender] = useState([])
  const[escaltion1,setEscaltion1] = useState([])
  const[time1,setTime1] = useState([])
  const[escaltion2,setEscaltion2] = useState([])
  const[time2,setTime2] = useState([])
  const[escaltion3,setEscaltion3] = useState([])
  const[time3,setTime3] = useState([])
  const[IsActive,setIsActive] = useState('N')
  console.log("props",props)

    let id =  props.ID
  const handleSendTo = (e) =>{
    setSender(e.target.value)
  }
  const handleEscaltion1 = (e) =>{
    setEscaltion1(e.target.value)
  }
  const handleEscaltion2 = (e) =>{
    setEscaltion2(e.target.value)
  }
  const handleEscaltion3 = (e) =>{
    setEscaltion3(e.target.value)
  }
  const handleTime1 = (e) =>{
    setTime1(e.target.value)
  }
  const handleTime2 = (e) =>{
    setTime2(e.target.value)
  }
  const handleTime3 = (e) =>{
    setTime3(e.target.value)
  }

  const handleIsActive = (e) =>{
    setIsActive('Y')
  }

  const updateAlert = useCallback(() =>{
    AdminApi.updateAlert({id,sender,escaltion1,time1,escaltion2,time2,escaltion3,time3,IsActive})
    .then((res)=>{
      console.log("getfaultlist",res.data)
      toast.info('Alert updated successfully!');
     
    })
      })

      const getAlertDetail = useCallback(() =>{
        AdminApi.getAlertDetail({id})
        .then((res) => res.json())
        .then((data) => {
             console.log("getAlertDetail",data)
            
              })
          })

          useEffect(() =>{
           getAlertDetail()
           },[]
          )
  
   
    return(
        <div className="UpdateAlerts">
          <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
theme="light"
/>
<ToastContainer/>
     
       
        <div className="card card-UpdateAlerts-one">
        <div className="card-header">
            <h7>Alert</h7>
        
           <button onClick={props.disableflag} type="button" class="btn-close" aria-label="Close">X</button>
                  
                  </div>
                
               
                <div className="card-body">
                    <h4>Update Alert Detail </h4>
                 <div className="card card-UpdateAlerts-child">
                    <div className="card-header">
                     </div>
                    <div className="card-body">
                    <div className="line-b-select-7">
                      <p className="">Alert Type:</p>
                      <div className="container-7">
                      <InputGroup className="mb-3">
        
                      <Form.Control
                       placeholder=""
                       value={props.AlertType}
                        aria-label=""
                        aria-describedby="basic-addon1"
                          />
                       </InputGroup>
                      </div>
                      </div>
                      <div className="line-b-select-8">
                      <p className="">Alert:</p>
                      <div className="container-8">
                      <InputGroup className="mb-3">
        
                      <Form.Control
                       placeholder=""
                       value={props.Alert}
                        aria-label=""
                        aria-describedby="basic-addon1"
                          />
                       </InputGroup>
                      </div>
                      </div>
                      <div className="line-b-select-9">
                      <p className="">Alert SendTo:</p>
                      <div className="container-9">
                      <InputGroup className="mb-3">
        
                      <Form.Control
                       placeholder="Ex:- 9734562756,9678345676"
                       onChange={(e) => handleSendTo(e)}
                      // value={comment}
                        aria-label=""
                        aria-describedby="basic-addon1"
                          />
                       </InputGroup>
                      </div>
                      </div>
                     
                      <div className="line-b-select-10">
                       <p className="">level 1:</p>
                       </div>
                       <div className="line-b-select-11">
                      <p className="">Esclate SendTo:</p>
                      <div className="container-11">
                      <InputGroup className="mb-3">
        
                      <Form.Control
                       placeholder="Ex:- xyz@gmail.com"
                       onChange={(e) => handleEscaltion1(e)}
                      // value={comment}
                        aria-label=""
                        aria-describedby="basic-addon1"
                          />
                       </InputGroup>
                      </div>
                      </div>
                      <div className="line-b-select-12">
                      <p className="">Esclate Time:</p>
                      <div className="container-12">
                      <InputGroup className="mb-3">
        
                      <Form.Control
                       placeholder="in hour"
                       onChange={(e) => handleTime1(e)}
                       type="time"
                      // value={comment}
                        aria-label=""
                        aria-describedby="basic-addon1"
                          />
                       </InputGroup>
                      </div>
                      </div>
                      <div className="line-b-select-13">
                       <p className="">level 2:</p>
                       </div>
                       <div className="line-b-select-14">
                      <p className="">Esclate SendTo:</p>
                      <div className="container-14">
                      <InputGroup className="mb-3">
        
                      <Form.Control
                       placeholder="Ex:- xyz@gmail.com"
                       onChange={(e) => handleEscaltion2(e)}
                      // value={comment}
                        aria-label=""
                        aria-describedby="basic-addon1"
                          />
                       </InputGroup>
                      </div>
                      </div>
                      <div className="line-b-select-15">
                      <p className="">Esclate Time:</p>
                      <div className="container-15">
                      <InputGroup className="mb-3">
        
                      <Form.Control
                       placeholder="in hour"
                       onChange={(e) => handleTime2(e)}
                       type="time"
                      // value={comment}
                        aria-label=""
                        aria-describedby="basic-addon1"
                          />
                       </InputGroup>
                      </div>
                      </div>
                      <div className="line-b-select-16">
                       <p className="">level 3:</p>
                       </div>
                       <div className="line-b-select-17">
                      <p className="">Esclate SendTo:</p>
                      <div className="container-17">
                      <InputGroup className="mb-3">
        
                      <Form.Control
                       placeholder="Ex:- xyz@gmail.com"
                       onChange={(e) => handleEscaltion3(e)}
                      // value={comment}
                        aria-label=""
                        aria-describedby="basic-addon1"
                          />
                       </InputGroup>
                      </div>
                      </div>
                      <div className="line-b-select-18">
                      <p className="">Esclate Time:</p>
                      <div className="container-18">
                      <InputGroup className="mb-3">
        
                      <Form.Control
                       placeholder="in hour"
                       onChange={(e) => handleTime3(e)}
                       type="time"
                      // value={comment}
                        aria-label=""
                        aria-describedby="basic-addon1"
                          />
                       </InputGroup>
                      </div>
                      </div>
                      
                      <div className="line-b-select-19">
                      
                      <div className="container-19">
                      <Form>
      {['checkbox'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
          onChange={(e) => handleIsActive(e)}
            label="Is Active"
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
                        updateAlert()
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

export default UpdateAlerts