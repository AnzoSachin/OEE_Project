
import React, { Component, useCallback, useEffect, useState } from "react";
import Select from "react-select";
import { Table } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import { Form } from "react-bootstrap";
import InputGroup from 'react-bootstrap/InputGroup';
import dasboardApi from "../../api/dashboardApi"
import AdminApi from '../../api/adminApi'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MachineManagement = () =>{
  const[linedata,setLineData] = useState([])
  const[allmachine,setAllMachine] = useState([])
  const[line,setLine] = useState([])
  const[machineprocess,setMachineProcess] = useState([])
  const[isactive,setIsActive] = useState('')


  const getLineData = useCallback(()=>{
    dasboardApi.getLineData()
    .then((res)=>{
      console.log("getLineData",res.data)
      setLineData(res.data)
   
    })
  })
  const getAllMachine = useCallback(()=>{
    AdminApi.getAllMachine()
    .then((res)=>{
      console.log("getAllMachine",res.data.recordset)
      setAllMachine(res.data.recordset)
   
    })
  })


  const save = useCallback(()=>{
    let Isactive = isactive ? "Y" : "N"
    let action = "ADD"
    AdminApi.saveMachine({line,machineprocess,action,Isactive})
    .then((res)=>{
     
        toast.info('Machine Created')
        getAllMachine()
     
   
    })
  })

  
  const update = useCallback(()=>{
    let Isactive = isactive ? "Y" : "N"
    let action = "UPDATE"
    AdminApi.updateMachine({line,machineprocess,action,Isactive})
    .then((res)=>{
     
        toast.info('Machine Updated')
        getAllMachine()
     
   
    })
  })
  const handleline = (value) =>{
    setLine(value.value)
  }

  const handleMachineProcess = (e) =>{
    setMachineProcess(e.target.value)
  }

const handleIsActive = (e) =>{
  setIsActive("Y")
}

const OnSelect = (machinename)=>{
 
  setMachineProcess(pre=>pre=machinename)
}

  
  useEffect(() =>{
   
    getLineData()
    getAllMachine()

  },[]
  )
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
       
        <div className="card card-machinemanagement-one">
        <div className="card-header">
            <h7>Machine/Process</h7>
        
    
                  
                  </div>
                
               
                <div className="card-body">
                    <h4>Add\Update Machine </h4>
                 <div className="card card-machinemanagement-child">
                    <div className="card-header">
                 
                  
                    <div className="line-b-select-3">
                      <p>Line Type:</p>
                      <div className="container-3">
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
                   

                      
                      

                      <div className="line-b-select-7">
                      <p className="">Machine/Process:</p>
                      <div className="container-7">
                      <InputGroup className="mb-3">
       
                      <Form.Control
                       placeholder=""
                       value={machineprocess}
                       onChange={(e) => handleMachineProcess(e)}
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
            label="Is Active"
            onChange={(e) => handleIsActive(e)}
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
                        save()
                      }}
                    >
                      Save
                    </button>

                    <button className="classbutton2"
                      onClick={(e) => {
                      update()
                      }}
                    >
                     Update
                    </button>

                    <button className="classbutton3"
                      onClick={(e) => {
                       // ()
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
                    <th>Id</th>
                    <th>Machine Name</th>
                    <th>IsActive</th>
                    <th>update</th>
                 
                   
                   
                    
                    
                  </tr>
                </thead>
                <tbody>
                {allmachine.map((item) => (
                <tr key={item._id}>


              <td>{item.Id}</td>
              <td>{item.MachineName}</td>
              <td>{item.IsActive}</td>
              <td><button onClick={()=>OnSelect(item.MachineName)}>
                select</button>
                </td>
             
             
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

export default MachineManagement