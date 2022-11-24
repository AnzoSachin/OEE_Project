
import React, { Component, useEffect, useState } from "react";

import { Table } from 'react-bootstrap';

import AdminApi from '../../api/adminApi'
import UpdateAlerts from './updatealert'

const ManageAlerts = () =>{
    const [alert,setAlert] = useState([])
    const [alerttype,setAlertType] = useState([])
    const [updatealert,setUpdateAlert] = useState([])
    const [flag,setflag] = useState(false)
    const [show,setShow] = useState(true)

    const updateFlag = (AlertType,Alert) =>{
        
       setShow(!show)
       setAlertType(AlertType)
       setUpdateAlert(Alert)
    }

    const disableflag = () =>{
       
        setShow(true)
    }

    const getAlert = () =>{
        
        AdminApi.getManagealert()
        .then((res)=>{
          console.log("getManagealert",res.data)
          setAlert(res.data)
         // setShiftData(res.data)
        })
    }

    useEffect(() => {
        getAlert()
    },[]
    )
  
    return(
        <div className="ManageAlerts">
           <div className="UpdatePopup">
                </div> 
       {show?
      <div className="card card-ManageAlerts-one">
      <div className="card-header">
          <h7>Alert</h7>
      
  
                
                </div>
              
             
              <div className="card-body">
                  <h4>Modified Alert </h4>
               <div className="card card-ManageAlerts-child">
                  <div className="card-header">
                  
                  
                
                 

                 
                   
                    
                  

                  

                    
                    
                

                 

                  </div>
                  <div className="card-body">
                  <div className="table-responsive">
            <Table bordered className="mg-b-0">
             
              <thead>
                <tr>
               
                  <th>Update</th>
                  <th>Alert Type</th>
                  <th>Alert</th>
                  <th>Description</th>
                   <th>Department Name</th>
                  <th>IsActive</th>
                  </tr>
                  
              </thead>
              <tbody>
              {alert.map((item) => (
              <tr key={item._id}>


            <td>{  <div onClick={() => updateFlag(item.AlertType,item.Alert)}>Update</div>}</td>
            <td>{item.AlertType}</td>
            <td>{item.Alert}</td>
            <td>{item.Description}</td>
            <td>{item.DepartmentName}</td>
            <td>{item.IsActive}</td>
           
           
           </tr>
        ))}
             
              </tbody>
            </Table>
          </div>
                      
                  </div>

               </div>
               

                
              </div>
              {/* card-body */}
            </div>:<UpdateAlerts AlertType = {alerttype} Alert = {alert} disableflag = {disableflag}/> 
      }
        
    </div>


    )
}

export default ManageAlerts