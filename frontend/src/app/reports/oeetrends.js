import React, { useCallback, useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card,{CardHeader} from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Select from "react-select";
import { Form } from "react-bootstrap";
// import { Table } from 'react-bootstrap';
import dasboardApi from "../../api/dashboardApi"
import ReportsApi from "../../api/reportsApi"
import moment from 'moment'
import { Line } from "react-chartjs-2";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





function OEETrend() {
  const[linedata,setLineData] = useState([])
  const[oeeChartTrendData,setOEEChartData] = useState([])
  const[line,setLine] = useState([])
  const[startdate,setStartDate] = useState([])
  const[enddate,setEndDate] = useState([])
  //['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
  const data = {
    labels: oeeChartTrendData.map((value) => {return moment(value.ReportDate).format('YYYY-MM-DD')}),
    datasets: [
      {
        label: "OEE",
        data: oeeChartTrendData.map((value) =>{return value.OEE}),
        fill: false,
        backgroundColor: "#46aefc",
        borderColor: "#46aefc"
      },
      {
        label: "Performance",
        data: oeeChartTrendData.map((value) =>{return value.Performance}),
        fill: false,
        borderColor: "#FF0000"
      },
      {
        label: "Availability",
        data: oeeChartTrendData.map((value) =>{return value.Availability}),
        fill: false,
        borderColor: "#FFA500"
      }
    ]
  };
  
  
  


  const getLineData = useCallback(()=>{
    dasboardApi.getLineData()
    .then((res)=>{
      console.log("getLineData",res.data)
      setLineData(res.data)
    })
  })

  const getData = useCallback(()=>{

  
  
    ReportsApi.getOEETrendChartData({line,startdate,enddate})
    .then((res) => res.json())
    .then((data) => {
                   console.log("data",data)
      toast.info('Data fetch Successfully ')
      setOEEChartData(data.recordset)
         //  setContainerSize(data.recordset)
        
          })
         
  })
 


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
    <div className="OEETrends">
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
        <Button className="refreshbutton" onClick={(e) => {getData()}}>Refresh</Button>
      </Card.Body>
    </Card>
    </Row>
    <Card className="card5">
    <Card.Body>
        <h3>OEE Trends</h3>
   
    <Line data={data} />
    <div className="oeeshift">
        OEE Shift Date
    </div>
   
    </Card.Body>
  </Card>

  

  
  


 
    </div>
  );
}

export default OEETrend;