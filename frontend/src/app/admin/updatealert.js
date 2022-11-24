
import React, { Component, useEffect, useState } from "react";

import { Table } from 'react-bootstrap';

import AdminApi from '../../api/adminApi'
import { Form } from "react-bootstrap";
import InputGroup from 'react-bootstrap/InputGroup';

const UpdateAlerts = (props) =>{

  
   
    return(
        <div className="UpdateAlerts">
     
       
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
                       value={props.alerttype}
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
                       value={props.updatealert}
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
          //  onChange={(e) => handleIsActive(e)}
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
                       // saveData()
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