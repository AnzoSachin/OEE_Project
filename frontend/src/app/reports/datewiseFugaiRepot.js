import React, { useCallback, useEffect,useRef, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card, { CardHeader } from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Select from "react-select";
import { Form } from "react-bootstrap";
import { Table } from 'react-bootstrap';
import dasboardApi from "../../api/dashboardApi"
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
    title: "Over All Tag Status",
    is3D: true,
  };
 



function DatewiseFugaiReport() {
  const[linedata,setLineData] = useState([])
  const[redtagwhitetagstatus,setRedTagWhiteTagStatus] = useState([])
  const[redtagwhitetagstatusbyemp,setRedTagWhiteTagStatusByEmp] = useState([])
  const[line,setLine] = useState([])
  const[startdate,setStartDate] = useState([])
  const[enddate,setEndDate] = useState([])

  const printRef = useRef()
   let redopen  = redtagwhitetagstatus.length==1 ? redtagwhitetagstatus[0].RedTagOpen :redtagwhitetagstatus
   let redclose = redtagwhitetagstatus.length==1 ? redtagwhitetagstatus[0].RedTagClosed :redtagwhitetagstatus
   let whiteopen = redtagwhitetagstatus.length==1 ? redtagwhitetagstatus[0].WhiteTagOpen :redtagwhitetagstatus
   let whiteclose = redtagwhitetagstatus.length==1 ? redtagwhitetagstatus[0].WhiteTagClosed :redtagwhitetagstatus
   let totalopen = redopen + whiteopen
   let totalclose = redclose + whiteclose
   let totalComplaintRaise = totalopen + totalclose

  console.log("redopen===>",redopen)
 //let redopen  = redtagwhitetagstatus[0] !== null ?redtagwhitetagstatus[0].map((value) => {return value.RedTagOpen}): 0
 //console.log("redotagopen",redopen)
 console.log("redtagwhitetagstatus",redtagwhitetagstatus)
 const data = [
  ["", ""],
  ["", ""],
  ["Total Tags Open", totalopen],
  ["", ""],
  ["Total Tag Closed",  totalclose],
  ["", ""],
];




 const options = {
  title: "Over All Tag Status",
  is3D: true,
};

  const redTagdata = [
    ["", ""],
    ["", ""],
    ["Red Tag Open",redtagwhitetagstatus.length==1 ? redtagwhitetagstatus[0].RedTagOpen :redtagwhitetagstatus],
    ["", ""],
    ["Red Tag Closed",redtagwhitetagstatus.length==1 ? redtagwhitetagstatus[0].RedTagClosed :redtagwhitetagstatus],
    ["", ""],
  ];
  const redtagoptions = {
    title: "Red Tag Status",
    is3D: true,
  };
  const whiteTagdata = [
    ["", ""],
    ["", ""],
    ["White Tags Open", redtagwhitetagstatus.length==1 ? redtagwhitetagstatus[0].WhiteTagOpen :redtagwhitetagstatus],
    ["", ""],
    ["White Tag Closed",  redtagwhitetagstatus.length==1 ? redtagwhitetagstatus[0].WhiteTagClosed :redtagwhitetagstatus],
    ["", ""],
  ];

  const whitetagoptions = {
    title: "White Tag Status",
    is3D: true,
  };


  
  
  


  const getLineData = useCallback(()=>{
    dasboardApi.getLineData()
    .then((res)=>{
      console.log("getLineData",res.data)
      setLineData(res.data)
    })
  })

  const getData = useCallback(()=>{

  
  
    ReportsApi.getRedTagWhiteTagStatus({line,startdate,enddate})
    .then((res) => res.json())
    .then((data) => {
                   console.log("getRedTagWhiteTagStatus",data)
      toast.info('Data fetch Successfully ')
      setRedTagWhiteTagStatus(data)
         //  setContainerSize(data.recordset)
        
          })
          ReportsApi.getRedTagWhiteTagStatusByEmp({line,startdate,enddate})
          .then((res) => res.json())
          .then((data) => {
                         console.log("getRedTagWhiteTagStatusByEmp",data)
            // toast.info('Data fetch Successfully ')
            setRedTagWhiteTagStatusByEmp(data)
               //  setContainerSize(data.recordset)
              
                })
         
  })

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
 


  const handleline = (value) =>{
   
    let line = value.value
      setLine(value.value)
  }
  const handleStartDate = (e) =>{
    setStartDate(e.target.value)
    
  }
  const handleEndDate = (e) =>{
    setEndDate(e.target.value)
    
  }

  useEffect(() =>{
 
    getLineData()
  
   
  },[]
  )

  return (
    <div className="DatewiseFugaiReport">
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
                      <p style={{fontWeight:"400"}}>Line Type:</p>
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
        <Button className="refreshbutton" onClick={(e) => {getData()}}>Get Report</Button>
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
        <h3 style={{textAlign:"center", textDecoration:"underline"}}>Fugai Report</h3> <br></br>
        <t1>DATE : {startdate} __ {enddate}</t1>
        <br></br>
       
        <t2>ASAIAN PANTS :- Ankleswar</t2>
        <br></br>

        <h3 style={{textAlign:"center", textDecoration:"underline"}}>Fugai States</h3> <br></br>
      
        <div className="table-responsive">
              <Table bordered className="mg-b-0">
               
                <thead style={{backgroundColor:"grey"}}>
                  <tr>
                    <th >Red Tag Open</th>
                    <th>White Tag Open</th>
                    <th>Red Tag Close</th>
                    <th>White Tag Close</th>
                 </tr>
                </thead>
                <tbody>
               
                {redtagwhitetagstatus.map((item) => (
                <tr  
              >
              <td>{item.RedTagOpen}</td>
              <td>{item.WhiteTagOpen}</td>
              <td>{item.RedTagClosed}</td>
              <td>{item.WhiteTagClosed}</td>
              
            </tr>
          ))}
           
           
        
           </tbody>
              </Table>
            </div>
            <br></br>
            <h3 style={{textAlign:"center", textDecoration:"underline"}}>Total Complaint Raised :-  {totalComplaintRaise}</h3> 
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

<h3 style={{textAlign:"center", textDecoration:"underline"}}>Fugai Report For All Employee</h3> 
    <br></br>
<div className="table-responsive">
              <Table bordered className="mg-b-0">
               
                <thead style={{backgroundColor:"grey"}}>
                  <tr>
                    <th >Employee Name</th>
                    <th>Tag Count</th>
                    <th>Current Status</th>
                    <th>Tag</th>
                 </tr>
                </thead>
                <tbody>
               
                {redtagwhitetagstatusbyemp.map((item) => (
                <tr  
              >
              <td>{item.UserName}</td>
              <td>{item.TagsCount}</td>
              <td>{item.StatusValue}</td>
              <td>{item.Tag}</td>
              
            </tr>
          ))}
           
        
           </tbody>
              </Table>
            </div>
            </div>
   
    </Card.Body>
  </Card>

  

  
  


 
    </div>
  );
}

export default DatewiseFugaiReport;