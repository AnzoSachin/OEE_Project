
import React, { Component, useCallback, useEffect,useState } from "react";
import Select from "react-select";
import { Table } from 'react-bootstrap';
import { Form } from "react-bootstrap";
import InputGroup from 'react-bootstrap/InputGroup';
import AdminApi from '../../api/adminApi'
import dasboardApi from "../../api/dashboardApi"
  

const FaultManagement = () =>{
  const[filetype,setFileType] = useState({})

 

  return(
    <div className="batch">
     
       
             <div className="card card-faultmanagement-one">
             <div className="card-header">
                 <h7>Fault Management</h7>
            
        
                      
                       </div>
                    
                   
                    <div className="card-body">
                         <h4>Add\Update Fault </h4>
                      <div className="card card-faultmanagement-child">
                         <div className="card-header">
                     
                      
                         <div className="line-b-select-3">
                           <p>Line Type:</p>
                           <div className="container-3">
                          <Select
                           // onChange={(e) => this.handleline(e)}
                           // value={this.state.selectedLine}
                            options={[
                              // ...lineData.map((ele) => {
                              //   return {
                              //     value: ele.LineCode,
                              //     label: ele.LineName,
                              //   };
                              // }),
                            ]}
                          />
                          </div>
                          
                        </div>
    
                        <div className="line-b-select-4">
                          <p>Machine/Process:</p>
                          <div className="container-4">
                          <Select
                           // onChange={(e) => this.handleline(e)}
                           // value={this.state.selectedLine}
                            options={[
                              // ...lineData.map((ele) => {
                              //   return {
                              //     value: ele.LineCode,
                              //     label: ele.LineName,
                              //   };
                              // }),
                            ]}
                          />
                          </div>
                          
                        </div>
                       
    
                          
                          
    
                          <div className="line-b-select-7">
                          <p className="">Fault:</p>
                          <div className="container-7">
                          <InputGroup className="mb-3">
                           {/* <InputGroup.Text id="basic-addon1"></InputGroup.Text> */}
                          <Form.Control
                             placeholder=""
                             aria-label=""
                             aria-describedby="basic-addon1"
                              />
                           </InputGroup>
                          </div>
                          </div>
    
                          <div className="line-b-select-8">
                          
                          <div className="container-8">
                          <Form>
          {['checkbox'].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                label="All Status"
                name="group1"
                type={type}
                id={`inline-${type}-1`}
              />
             
             
            </div>
          ))}
        </Form>
                          </div>
                          </div>    <div className="line-b-select-9">
                          
                          <div className="container-9">
                          <Form>
          {['checkbox'].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                label="Is Planned"
                name="group1"
                type={type}
                id={`inline-${type}-1`}
              />
             
             
            </div>
          ))}
        </Form>
                          </div>
                          </div>
    
                          
                          
                      
                        <button className="classbutton1"
                          onClick={(e) => {
                            this.getAllData()
                          }}
                        >
                          Save
                        </button>
    
                        <button className="classbutton2"
                          onClick={(e) => {
                            this.getAllData()
                          }}
                        >
                         Update
                        </button>
    
                        <button className="classbutton3"
                          onClick={(e) => {
                            this.getAllData()
                          }}
                        >
                       Reset
                        </button>
    
                       
    
                        </div>
                        <div className="card-body">
                        <div className="table-responsive">
                  <Table bordered className="mg-b-0">
                   
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>User Id</th>
                        <th>Email Id</th>
                        <th>UserRole</th>
                        <th>IsActive</th>
                       
                       
                        
                        
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">Abdul</th>
                        <td>A202</td>
                        <td>AP Premium</td>
                        <td>operator</td>
                        <td>Y</td>
                  
                      </tr>
                      <tr>
                        <th scope="row">Vinesh</th>
                        <td>A202</td>
                        <td>AP Premium</td>
                        <td>operator</td>
                        <td>Y</td>
                       
                      </tr>
                      <tr>
                        <th scope="row">Ramesh</th>
                        <td>A202</td>
                        <td>AP Premium</td>
                        <td>operator</td>
                        <td>Y</td>
                        
                      </tr>
                      <tr>
                        <th scope="row">Amit</th>
                        <td>A202</td>
                        <td>AP Premium</td>
                        <td>operator</td>
                        <td>Y</td>
                      
                      </tr>
                      <tr>
                        <th scope="row">Sumit</th>
                        <td>A202</td>
                        <td>AP Premium</td>
                        <td>operator</td>
                        <td>Y</td>
                       
                      </tr>
                    
                    
                    
                    
                     
                     
                     
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
export default FaultManagement