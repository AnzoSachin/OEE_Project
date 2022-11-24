
import React, { Component, useCallback, useEffect, useState } from "react";
import Select from "react-select";
import { Table } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import { Form } from "react-bootstrap";
import InputGroup from 'react-bootstrap/InputGroup';
import dasboardApi from "../../api/dashboardApi"
import ComplaintApi from "../../api/complaintApi"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import moment from 'moment'


const BookComplaint = () =>{
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); 
  var yyyy = today.getFullYear();
  today = mm + '/' + dd + '/' + yyyy;
  
  const[tag,setTag] = useState("")
  const[user,setUser] = useState("")
  const[line,setLine] = useState("202")
  const[status,setStatus] = useState("")
  const[comment,setComment] = useState("")
  const[machine,setMachine] = useState("")
  const[linedata,setLineData] = useState([])
  const[complaint,setComplaint] = useState([])
  const[department,setDepartment] = useState("")
  const[userlistdata,setUserData] = useState([])
  const[complaintID,setComplaintID] = useState([])
  const[machinedata,setMachineData] = useState([])
  const[complaintdata,setComplaintData] = useState([])
  const[deparmentdata,setDepartmentData] = useState([])
 
 



  const getLineData = useCallback(()=>{
    dasboardApi.getLineData()
    .then((res)=>{
      console.log("getLineData",res.data)
      setLineData(res.data)
    })
  })

  const getDepartmentList = useCallback(()=>{
    ComplaintApi.getDepartmentList()
    .then((res)=>{
      console.log("getDepartmentList",res.data)
      setDepartmentData(res.data)
     
    })
    
  })
  const getUserList = useCallback(()=>{
    ComplaintApi.getUserList()
    .then((res)=>{
      console.log("getUserList",res.data)
      setUserData(res.data)
     
    })
    
  })

  const getMachineList = useCallback(()=>{
    ComplaintApi.getMachineList()
    .then((res)=>{
      console.log("getMachineList",res.data)
      setMachineData(res.data)
     
    })
    
  })

  const getComplaintStatus = useCallback(()=>{
    ComplaintApi.getComplaintStatus()
    .then((res)=>{
      console.log("getComplaintStatus",res.data)
      setComplaintData(res.data)
     // setMachineData(res.data)
     
    })
    
  })
  const getComplaintData = useCallback(()=>{
    let icn=0
    console.log("jhghj",icn++)
    ComplaintApi.getComplaintData({line})
    .then((res) => res.json())
    .then((data) => {
     
           console.log("getComplaintData",data.recordsets[2])
           setComplaint(data.recordsets[2])
      
          })
    
  })
  const insertComplaint = useCallback(()=>{
  
  
    let comments = user+status+comment+today
    ComplaintApi.saveComplaintData({line,machine,user,department,tag,comment,status,comments,complaintID})
    .then((res) => res.json())
    .then((data) => {
                     toast.info(`Complaint created with complaintid ${complaintID}`)
                     getComplaintData()
        
          
      
          })
    
  })

  const SaveAllData = useCallback(()=>{
    let comments = user+status+comment+today
  
     
        ComplaintApi.insertComplaintData({line,machine,user,department,tag,comment,status,comments})
        .then((res) => res.json())
        .then((data) => {
           toast.info(`Complaint Register successfully with complaintid: ${data.output.ComplaintID}`)
           getComplaintData()
          
          
              })
       
     
    
   
   
 })

  const handleline = (value) =>{
   
  let line = value.value
    setLine(value.value)
    ComplaintApi.getComplaintData({line})
    .then((res) => res.json())
    .then((data) => {
     
            console.log("commmmmmm",data.recordsets[2])
           setComplaint(data.recordsets[2])
          
     
          })
   
}

const handlemachine = (label) => {
  
  setMachine(label.value)

}

const handleuser = (label) => {

  setUser(label.value)
 
}

const handledepartment = (label) => {
 

  setDepartment(label.value)

}
const handlestatus = (label) =>{

  setStatus(label.value)


}

const handlescomment = (e) =>{
  
  setComment(e.target.value)


}
const handleredtag =(e) =>{
 
  setTag("Red")

}
const handlewhitetag = (e) => {
  setTag("White")
}


  useEffect(() =>{
    getLineData()
    getUserList()
    getMachineList()
    getComplaintData()
    getDepartmentList()
    getComplaintStatus()
  },[line]
  )



 

  
    return(
        <div className="bookcomplaints">
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
<ToastContainer />
       
        <div className="card card-bookcomplaints-one">
        <div className="card-header">
            <h7>Complaint</h7>
        
    
                  
                  </div>
                
               
                <div className="card-body">
                    <h4>Book Complaints </h4>
                 <div className="card card-bookcomplaints-child">
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
                      <p className="">Machine:</p>
                      <div className="container-2">
                      <Select
                        onChange={(label) => handlemachine(label)}
                        value={machinedata.label}
                        options={[
                          ...machinedata.map((ele) => {
                           
                           
                             return {
                              value: ele.Id,
                              label: ele.MachineName,
                             
                             };
                           }),
                        ]}
                      />
                      </div>
                      
                    </div>
                    <div className="line-b-select-3">
                      <p>Raised By:</p>
                      <div className="container-3">
                      <Select
                        onChange={(label) => handleuser(label)}
                        value={userlistdata.label}
                        options={[
                          ...userlistdata.map((ele) => {
                           
                             return {
                               value: ele.Id,
                               label: ele.User,
                             };
                           }),
                        ]}
                      />
                      </div>
                      
                    </div>
                    <div className="line-b-select-4">
                      <p>Raised To:</p>
                      <div className="container-4">
                      <Select
                        onChange={(label) => handledepartment(label)}
                        value={linedata.label}
                        options={[
                          ...deparmentdata.map((ele) => {
                           
                             return {
                               value: ele.DepartmentKey,
                               label: ele.Department,
                             };
                           }),
                        ]}
                      />
                      </div>
                      
                    </div>

                    <div className="line-b-select-5">
                      <p>Tag:</p>
                      <div className="container-5">
                      <Form.Group>
        <Form.Check
          value=""
          onChange = {(e) => {handlewhitetag(e)}}
          type="radio"
          name="group1"
          aria-label="radio 1"
          label="White"
        
          
        />
        <Form.Check
          value=""
          onChange = {(e) => {handleredtag(e)}}
          type="radio"
          name="group1"
          aria-label="radio 2"
          label="Red"
         
        />
      </Form.Group>
                      </div>
                      </div>
                      
                      <div className="line-b-select-6">
                      <p>Comment:</p>
                      <div className="container-6">
                      <InputGroup className="mb-3">
        {/* <InputGroup.Text id="basic-addon1"></InputGroup.Text> */}
        <Form.Control
          placeholder="Comment"
          onChange={(e) => handlescomment(e)}
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
                      </div>
                      </div>

                      <div className="line-b-select-7">
                      <p className="">Status:</p>
                      <div className="container-7">
                      <Select
                        onChange={(label) => handlestatus(label)}
                        value={complaintdata.label}
                        options={[
                          ...complaintdata.map((ele) => {
                           
                             return {
                               value: ele.StatusKey,
                               label: ele.StatusValue,
                             };
                           }),
                        ]}
                      />
                      </div>
                      </div>

                      
                      
                  
                    <button className="classbutton"
                      onClick={(e) => {
                        SaveAllData()
                      }}
                    >
                      Save
                    </button>

                   

                    </div>
                    <div className="card-body">
                    <div className="table-responsive">
              <Table bordered className="mg-b-0">
               
                <thead>
                  <tr>
                    <th>Complaint Id</th>
                    <th>Line</th>
                     <th>Tag</th>
                    <th>Status</th>
                    <th>Complaint Date</th>
                   
                    
                    
                  </tr>
                </thead>
                <tbody>
                {complaint.map((item) => (
                <tr key={item._id}>
              <td>{item.ComplaintID}</td> 
              <td>{item.Line}</td>
              <td>{item.Tag}</td>
              <td>{item.Status}</td>
              <td>{moment(item.ComplaintDate).format('YYYY-MM-DD HH:mm:ss')}</td>
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

export default BookComplaint