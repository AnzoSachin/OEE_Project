import React, {  useCallback, useEffect, useRef, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card, { CardHeader } from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Select from "react-select";
import { Form } from "react-bootstrap";
import { Table } from 'react-bootstrap';
// import dasboardApi from "../../api/dashboardApi"
import ReportsApi from "../../api/reportsApi"
// import moment from 'moment'
// import { Line } from "react-chartjs-2";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Chart } from "react-google-charts";
import {jsPDF} from 'jspdf'

 const data = [
    ["", ""],
    ["", ""],
    ["Total Tags Open", 11],
    ["", ""],
    ["Total Tag Closed",  2],
    ["", ""],
  ];


 

   const options = {
    title: "Over All Status of Fugai",
    is3D: true,
  };
 



function EmployewiseFugaiReport() {
  const[users,setUsersData] = useState([])
  const[fugaidetailtable,setFugaiDetailTableData] = useState([])
  const[redtagwhitetagstatusbyemp,setRedTagWhiteTagStatusByEmp] = useState([])
  const[employee,setEmployee] = useState([])
  const[startdate,setStartDate] = useState([])
  const[enddate,setEndDate] = useState([])
  const printRef = useRef()
   //let redopen  =  redtagwhitetagstatus[0] !== null ? redtagwhitetagstatus[0].map((value)=>{return value.RedTagOpen}): 0
 // console.log("redopen===>",redopen)

  const redTagdata = [
    ["", ""],
    ["", ""],
    ["Red Tag Open",1],
    ["", ""],
    ["Red Tag Closed",1],
    ["", ""],
  ];
  const redtagoptions = {
    title: "Status of Red Fugai",
    is3D: true,
  };
  const whiteTagdata = [
    ["", ""],
    ["", ""],
    ["White Tags Open",1],
    ["", ""],
    ["White Tag Closed",1],
    ["", ""],
  ];

  const whitetagoptions = {
    title: "Status of White Fugai",
    is3D: true,
  };

  console.log("ref",printRef.current)

    const handlePdfDownload = (e) =>{
      console.log("In the handlepdf")
      const element = printRef.current
      const pdf = new jsPDF("p","pt","a4")
      pdf.html(element, {
        callback:function(pdf){
          var pagecount = pdf.internal.getNumberOfPages();
          pdf.deletePage(pagecount)
          pdf.save("/files/myPdf.pdf")
        }
      })

    }

    const print = () =>{
      window.print();
    }

  
  
  


  const getUsers = useCallback(()=>{
    ReportsApi.getUsers()
    .then((res) => res.json())
    .then((data)=>{
      console.log("getUsers",data)
      setUsersData(data)
    })
  })

  const getData = useCallback(()=>{

  
  
    ReportsApi.getRedTagWhiteTagStatusEmployee({employee,startdate,enddate})
    .then((res) => res.json())
    .then((data) => {
                   console.log("getRedTagWhiteTagStatus",data)
      toast.info('Data fetch Successfully ')
      setFugaiDetailTableData(data)
         //  setContainerSize(data.recordset)
        
          })
         
         
  })
 


  const handleEmp = (value) =>{
        console.log("value",value)
        setEmployee(value.value)
  }
  const handleStartDate = (e) =>{
    setStartDate(e.target.value)
    
  }
  const handleEndDate = (e) =>{
    setEndDate(e.target.value)
    
  }

  

 

  useEffect(() =>{
 
    getUsers()
  
   
  },[]
  )

  return (
    <div className="EmployewiseFugaiReport">
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
     <Row>
    <Card className="card1">
     
     <Card.Body>
      {/* <h1>Break Down Analysis</h1> */}
        <Card.Title>
                  <div className="insertform">
                      <div className="line-b-select-3">
                      <p style={{fontWeight:"400"}}>Select Employee:</p>
                      <div className="container-3">
                      <Select
                        onChange={(value) => handleEmp(value)}
                        value={users.value}
                        options={[
                          ...users.map((ele) => {
                           
                             return {
                               value: ele.Id,
                               label: ele.UserName,
                             };
                           }),
                        ]}
                      />
                      </div>
                      
                    </div>
                    
                    <div className="line-b-select-5">
                      <p style={{fontWeight:"400"}}> Start Date:</p>
                      <div className="container-5">
                      <Form.Group>
                
                         <div className="batchdate">
                      <Form.Control
                            type="date"
                            onChange={(e) => handleStartDate(e)}
                            name="dob"
                         
                            placeholder=""
                          />
                          </div>
                          </Form.Group>
                      </div>
                      </div>
                      <div className="line-b-select-6">
                      <p style={{fontWeight:"400"}}>End Date:</p>
                      <div className="container-6">
                      <Form.Group>
                      
                         <div className="batchdate">
                      <Form.Control
                            type="date"
                            onChange={(e) => handleEndDate(e)}
                            name="dob"
                         
                            placeholder=""
                          />
                          </div>
                          </Form.Group>
                      </div>
                      </div>
                      </div>

        </Card.Title>
        <Card.Text>
   
        </Card.Text>
        <Button className="refreshbutton" onClick={(e) => {getData()}}>Get</Button>
      </Card.Body>
    </Card>
    </Row>
    <Card className="card5">
   
    <Card.Body>
    <button className="pdfbutton" 
      style={{float:'right',}}
        onClick={(e)=>handlePdfDownload(e)}
        >
          Download as PDF</button>
      
          <div ref={printRef}>
        <h3 style={{textAlign:"center", textDecoration:"underline"}}>Fugai Report-(ByEmployee)</h3> <br></br>
       
        <t1>DATE : -  {startdate} __ {enddate}</t1>
        <br></br>
       
        <t2>ASAIAN PANTS :- Ankleshwar</t2>
        <br></br>

        <h3 style={{textAlign:"center", textDecoration:"underline"}}>Fugai Details for  {employee}</h3> <br></br>
      
        <div className="table-responsive">
              <Table bordered className="mg-b-0">
               
                <thead style={{backgroundColor:"grey"}}>
                  <tr>
                    <th>User Name</th>
                    <th>User Id</th>
                    <th>Tag Count</th>
                    <th>Tag</th>
                    <th>States value</th>
                 </tr>
                </thead>
                <tbody>
               
                {fugaidetailtable.map((item) => (
                <tr  
              >
              <td>{item.UserName}</td>
              <td>{item.UserId}</td>
              <td>{item.TagsCount}</td>
              <td>{item.Tag}</td>
              <td>{item.StatusValue}</td>
              
            </tr>
          ))}
           
           
        
           </tbody>
              </Table>
            </div>
            <br></br>
           
           
              <div className="tagCharts">
              <Card className="overallTagStatsChart">
              <Card.Body>
               
                <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"200px"}
    />
              </Card.Body>

</Card>
            <Card className="redTagStatsChart">
            <Card.Body>
               
               <Chart
     chartType="PieChart"
     data={redTagdata}
     options={redtagoptions}
     width={"100%"}
     height={"200px"}
   />
             </Card.Body>
            </Card>

            <Card className="whiteTagStatsChart">
            <Card.Body>
               
               <Chart
     chartType="PieChart"
     data={whiteTagdata}
     options={whitetagoptions}
     width={"100%"}
     height={"200px"}
   />
   
             </Card.Body>
            </Card>
                  
</div>
<br></br>


</div>

   
    </Card.Body>
  </Card>

  

  
  


 
    </div>
  );
}

export default EmployewiseFugaiReport;