
import React, { Component, useCallback, useEffect, useState } from "react";
import Select from "react-select";
import { Table } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import { Form } from "react-bootstrap";
import InputGroup from 'react-bootstrap/InputGroup';
import dasboardApi from "../../api/dashboardApi"
import ComplaintApi from "../../api/complaintApi"
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const ComplaintReport = () =>{
  const[line,setLine] = useState([])
  const[status,setStatus] = useState("1")
  const[enddate,setEndDate] = useState([])
  const[machine,setMachine] = useState([])
  const[linedata,setLineData] = useState([])
  const[startdate,setStartDate] = useState([])
  const[countData,setCountData] = useState([])
  const[complaint,setComplaint] = useState([])
  const[lineFlag,setLineFlag] = useState(false)
  const[department,setDepartment] = useState([])
  const[machinedata,setMachineData] = useState([])
  const[statusFlag,setStatusFlag] = useState(false)
  const[machineFlag,setMachineFlag] = useState(false)
  const[complaintdata,setComplaintData] = useState([])
  const[deparmentdata,setDepartmentData] = useState([])
  const[departmentFlag,setDepartmentFlag] = useState(false)
 

  const fileType =
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const filename = "complaintStatus_All"
  const fileExtension = ".xlsx";



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
  // const getComplaintData = useCallback(()=>{
  //   ComplaintApi.getComplaintData({line})
  //   .then((res) => res.json())
  //   .then((data) => {
     
  //          console.log("getComplaintDataoooo",data.recordsets[2])
  //          setComplaint(data.recordsets[2])
     
  //         })
    
  // })
  const getData = useCallback(()=>{
    if (line.length == 0 || machine.length == 0 || department.length == 0 || status == 0 || startdate == 0 || enddate == 0) {
     toast.warn("Some field is missing")
      
    } else {
      ComplaintApi.checkCount({line,machine,department,status,startdate,enddate})
      .then((res) => res.json())
      .then((data) => {
       
              console.log("allllllllll",data)
            data.length?  toast.info(`Status fetch Successfully`) : toast.info(`No data available for Current Inputs`)
              setCountData(data)
           
         
          
            })
    }
   
    
        

//         else if(lineFlag === true){
//           let line = 'All'
//           ComplaintApi.checkCount({line,machine,department,status,startdate,enddate})
//           .then((res) => res.json())
//           .then((data) => {
           
//                  console.log("response with allline",data)
//                  setCountData(data)
             
              
//                 })
      
//      }
//      else if(machineFlag === true){
//       ComplaintApi.checkCount({line,allmachines,department,status,startdate,enddate})
//       .then((res) => res.json())
//       .then((data) => {
       
//              console.log("response with all machine",data)
//              setCountData()
         
          
//             })
  
//  }   else if(departmentFlag=== true){
//   ComplaintApi.checkCount({line,machine,alldepartment,status,startdate,enddate})
//   .then((res) => res.json())
//   .then((data) => {
   
//          console.log("response with all department",data)
//          setCountData()
     
      
//         })

// }  else if(statusFlag=== true){
//   ComplaintApi.checkCount({line,machine,department,allstatus,startdate,enddate})
//   .then((res) => res.json())
//   .then((data) => {
   
//          console.log("response with all status",data)
//          setCountData()
     
      
//         })

// } else{
//   ComplaintApi.checkCount({line,machine,department,status,startdate,enddate})
//   .then((res) => res.json())
//   .then((data) => {
   
//          console.log("response with no all",data)
//          setCountData()
     
      
//         })
// }
    
  })

  


 

  const handleline = (value) =>{
   
 
    setLine(value.value)
   
  
   
}

const handlemachine = (label) => {
  
  setMachine(label.value.toString())
 
}



const handledepartment = (label) => {
 

  setDepartment(label.value)
  //setMachine(lablel)
}
const handlestatus = (label) =>{

  setStatus(label.value)


}



const handleStartdate =(e)=> {

  setStartDate(e.target.value)

  
}
const handleEnddate =(e)=>{
 
 setEndDate(e.target.value)
}
const handleallline =(e) => {
   setLine('All')
  setLineFlag(!lineFlag)
  
}
const handleallmachine =(e) => {
   setMachine('All')
  setMachineFlag(!machineFlag)
  
}
const handlealldepart =(e) => {
    setDepartment('All')
  setDepartmentFlag(!departmentFlag)
}
const handleallstatus =(e) => {
   setStatus('All')
  setStatusFlag(!statusFlag)
  
}
const exportToCSV = (apiData, filename) => {
  const ws = XLSX.utils.json_to_sheet(apiData);
  const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
  const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
  const data = new Blob([excelBuffer], { type: fileType });
  FileSaver.saveAs(data, filename + fileExtension);
};

const excelExport = () =>{
  exportToCSV(countData,filename)
}

  useEffect(() =>{
    getLineData()
   
  
    getMachineList()
  
    getDepartmentList()
    getComplaintStatus()
  },[]
  )

  console.log("countdata",countData)

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
       
        <div className="card card-complaintsreport-one">
        <div className="card-header">
            <h7>Complaint</h7>
        
    
                  
                  </div>
                
               
                <div className="card-body">
                    <h4>Export Complaint Report </h4>
                 <div className="card card-complaintsreport-child">
                    <div className="card-header">
                    <div className="line-b-select-1">
                      <p className="">Select Line:</p>
                      <div className="container-1">
                      <Select
                        onChange={(value) => handleline(value)}
                       
                      
                        value={linedata.value}
                        isDisabled={lineFlag}
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

                      <div className="line-b-select-8">
                      
                      <div className="container-8">
                      <Form>
      {['checkbox'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="All Line"
            onChange={(e) => handleallline(e)}
            name="group1"
            type={type}
            id={`inline-${type}-1`}
          />
         
         
        </div>
      ))}
    </Form>
                      </div>
                      
                    </div>


                    <div className="line-b-select-2">
                      <p className="">Machine:</p>
                      <div className="container-2">
                      <Select
                        onChange={(label) => handlemachine(label)}
                        value={machinedata.label}
                        isDisabled={machineFlag}
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

                      <div className="line-b-select-9">
                      
                      <div className="container-9">
                      <Form>
      {['checkbox'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            onChange={(e) => handleallmachine(e)}
            label="All Machines"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
          />
         
         
        </div>
      ))}
    </Form>
                      </div>
                      </div>

                    <div className="line-b-select-3">
                      <p>Department:</p>
                      <div className="container-3">
                      <Select
                        onChange={(label) => handledepartment(label)}
                        value={linedata.label}
                        isDisabled={departmentFlag}
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

                      <div className="line-b-select-10">
                      
                      <div className="container-10">
                      <Form>
      {['checkbox'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            onChange={(e) => handlealldepart(e)}
            label="All Department"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
          />
         
         
        </div>
      ))}
    </Form>
                      </div>
                      
                    </div>
                    <div className="line-b-select-4">
                      <p>Status:</p>
                      <div className="container-4">
                      <Select
                        onChange={(label) => handlestatus(label)}
                        value={complaintdata.label}
                        isDisabled={statusFlag}
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

                    <div className="line-b-select-5">
                      
                      <div className="container-5">
                      <Form>
      {['checkbox'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            onChange={(e) => handleallstatus(e)}
            label="All Status"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
          />
         
         
        </div>
      ))}
    </Form>
                      </div>
                      
                    </div>

                  
                      
                      <div className="line-b-select-6">
                      <p>Start Date:</p>
                      <div className="container-6">
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

                      <div className="line-b-select-7">
                      <p className="">End Date:</p>
                      <div className="container-7">
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
                        getData()
                      }}
                    >
                      Check Count
                    </button>
                     
                    <button className="excelbutton"
                      onClick={(e) => { excelExport()}}
                      disabled = {countData.length ? false: true}
                    >
                      ExportExcel
                    </button>

                   

                    </div>
                    <div className="card-body">
                    <div className="table-responsive">
              <Table bordered className="mg-b-0">
               
                <thead>
                  <tr>
                    <th>LineCode</th>
                    <th>Department</th>
                    <th>Tag</th>
                    <th>Status</th>
                    <th>Count</th>
                    
                   
                    
                    
                  </tr>
                </thead>
                <tbody>
                {countData.map((item) => (
                <tr key={item._id}>
              <td>{item.LineCode}</td> 
              <td>{item.Department}</td>
              <td>{item.Tag}</td>
              <td>{item.Status}</td>
              <td>{item.Count}</td>
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

export default ComplaintReport