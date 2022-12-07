
import React, { useCallback, useEffect, useState } from "react";
import Select from "react-select";
import { Table } from 'react-bootstrap';
// import DatePicker from "react-datepicker";
import { Form } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import InputGroup from 'react-bootstrap/InputGroup';
import dasboardApi from "../../api/dashboardApi"
import AdminApi from '../../api/adminApi'

// import ComplaintApi from "../../api/complaintApi"

const Calendar = () =>{
  const[linedata,setLineData] = useState([])
  const[shiftdata,setShiftData] = useState([])
  const[shutdownreason,setShutDownReason] = useState([])
  const[shutdowndetail,setShutDownDataDetail] = useState([])

  const[line,setLine] = useState([])
  const[shift,setShift] = useState([])
  const[report,setReport] = useState([])
  const[reason,setReason] = useState([])
  const[comment,setComment] = useState([])
  const[isactive,setIsActive] = useState([])
  const[lineFlag,setLineFlag] = useState(false)
  const[shiftFlag,setShiftFlag] = useState(false)
  const[selectdate,setSelectDate] = useState([])
  
 


  

  const alllines = linedata.map((item) => {
    return item.LineCode
  })
    

 
  const allshift = shiftdata.map((item) => {
    return item.ShiftKey
  })
 

  const reporttype = 
  [
 {ReportCode:"101",  ReportName: "ShiftReport"},
{ ReportCode:"102" , ReportName: "PlantShiftReport"},
{ ReportCode:"103",  ReportName: "PlantDailyReport"}
  ]

  const getLineData = useCallback(()=>{
    dasboardApi.getLineData()
    .then((res)=>{
      console.log("getLineData",res.data)
      setLineData(res.data)
    })
  })

  const getShift = useCallback(()=>{
    AdminApi.getShift()
    .then((res)=>{
      console.log("getShift",res.data)
      setShiftData(res.data)
    })
  })

  const GetShutDownDetails = useCallback(()=>{
    AdminApi.GetShutDownDetails()
    .then((res)=>{
      console.log("GetShutDownDetails",res.data)
      setShutDownDataDetail(res.data)
    })
  })

  const GetShutDownReason = useCallback(()=>{
    AdminApi.GetShutDownReason()
    .then((res)=>{
      console.log("GetShutDownReason",res.data)
      setShutDownReason(res.data)
    })
  })




 

 

  const saveData = useCallback(()=>{
  let Action = "ADD"
      
     if (lineFlag === true && shiftFlag === true) {
      AdminApi.SaveCalendar({Action,alllines,allshift,report,reason,selectdate,comment,isactive})
    .then((res) => res.json())
    .then((data) => {
      toast.info('Calendar Updated Successfully!');
           console.log("response with all flag true",data)
           GetShutDownDetails()
           
       
        
          })
        } 
        else if(lineFlag === true){
            AdminApi.SaveCalendar({Action,alllines,shift,report,reason,selectdate,comment,isactive})
          .then((res) => res.json())
          .then((data) => {
            toast.info('Calendar Updated Successfully!');
                 console.log("response with alllines",data)
                 GetShutDownDetails()

              
                })
      
     }
     else if(shiftFlag === true){
        AdminApi.SaveCalendar({Action,line,allshift,report,reason,selectdate,comment,isactive})
      .then((res) => res.json())
      .then((data) => {
        toast.info('Calendar Updated Successfully!');
             console.log("response with all shift",data)
             GetShutDownDetails()

         
          
            })
  
 } 
  else{
    AdminApi.SaveCalendar({Action,line,shift,report,reason,selectdate,comment,isactive})
  .then((res) => res.json())
  .then((data) => {
    toast.info('Calendar Updated Successfully!');
         console.log("response with no all",data)
         GetShutDownDetails()
         
     
      
        })
}
    
   })


 

  const handleline = (value) =>{
    setLine(value.value)
  
   
}

const handleReportType = (label) => {
     setReport(label.label)
 
}



const handleshift = (value) => {
 
    setShift(value.value)

  
}
const handleReason = (value) =>{
   
   setReason(value.value.toString())


}



const handleSelectDate =(e)=> {
 
  setSelectDate(e.target.value)

  
}

const handleComment = (e) =>{
    setComment(e.target.value)
}

const handleIsActive =(e) => {
    setIsActive("Y")
}

const handleallline =(e) => {

  setLineFlag(true)
  
}

const handleallshift =(e) => {
 
  setShiftFlag(true)
}



  useEffect(() =>{
    getShift()
    getLineData()
    GetShutDownReason()
    GetShutDownDetails()
  },[]
  )


    return(
        <div className="Calendar">
     
       
        <div className="card card-Calendar-one">
        <div className="card-header">
            <h7>Calendar</h7>
        
    
                  
                  </div>
                  <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          theme="light"/>
<ToastContainer />
               
                <div className="card-body">
                    <h4>ShutDown Calendar  </h4>
                 <div className="card card-Calendar-child">
                    <div className="card-header">

                    <div className="line-b-select-2">
                      <p className="">Report Type:</p>
                      <div className="container-2">
                      <Select
                        onChange={(label) => handleReportType(label)}
                        value={reporttype.label}
                        options={[
                          ...reporttype.map((ele) => {
                        
                           
                             return {
                                value: ele.ReportCode,
                                label: ele.ReportName,
                             
                             };
                           }),
                        ]}
                      />
                      </div>
                      </div>
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


                   

                      

                    <div className="line-b-select-3">
                      <p>Shift:</p>
                      <div className="container-3">
                      <Select
                        onChange={(value) => handleshift(value)}
                        value={shiftdata.value}
                        options={[
                          ...shiftdata.map((ele) => {
                           
                             return {
                               value: ele.ShiftKey,
                               label: ele.ShiftValue,
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
            onChange={(e) => handleallshift(e)}
            label="All Shift"
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
                      <p>Reason:</p>
                      <div className="container-4">
                      <Select
                        onChange={(value) => handleReason(value)}
                        value={shutdownreason.value}
                        options={[
                          ...shutdownreason.map((ele) => {
                           
                             return {
                               value: ele.ReasonCode,
                               label: ele.Reason,
                             };
                           }),
                        ]}
                      />
                      </div>
                      
                    </div>

                   

                  
                      
                      <div className="line-b-select-6">
                      <p>Select Date:</p>
                      <div className="container-6">
                      <Form.Group controlId="dob">
                          
                      <Form.Control
                            type="date"
                            name="dob"
                            value={selectdate}
                            onChange={(e) => handleSelectDate(e)}
                            placeholder=""
                          />
                        </Form.Group>
                      </div>
                      </div>

                      <div className="line-b-select-7">
                      <p className="">Comment:</p>
                      <div className="container-7">
                      <InputGroup className="mb-3">
        {/* <InputGroup.Text id="basic-addon1"></InputGroup.Text> */}
                      <Form.Control
                       placeholder=""
                       value={comment}
                       onChange={(e) => handleComment(e)}
                         aria-label=""
                        aria-describedby="basic-addon1"
                          />
                       </InputGroup>
                      </div>
                      </div>

                      <div className="line-b-select-9">
                      
                      <div className="container-9">
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
                        saveData()
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
                    <th>ID</th>
                    <th>ReportType</th>
                    <th>Reason</th>
                    <th>LineId</th>
                    <th>Select Date</th>
                    <th>Shift</th>
                    <th>Is Active</th>
                    <th>Comments</th>

                    
                   
                    
                    
                  </tr>
                </thead>
                <tbody>
                {shutdowndetail.map((item) => (
                <tr key={item._id}>


              <td>{item.ID}</td>
              <td>{item.ReportType}</td>
              <td>{item.Reason}</td>
              <td>{item.lineId}</td>
              <td>{item.SelectDate}</td>
              <td>{item.Shift}</td>
              <td>{item.IsActive}</td>
              <td>{item.Comments}</td>
             
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

export default Calendar