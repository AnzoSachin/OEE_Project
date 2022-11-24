import React, { Component, useCallback, useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card, { CardHeader } from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Select from "react-select";
import { Form } from "react-bootstrap";
import { Table } from 'react-bootstrap';
import dasboardApi from "../../api/dashboardApi"
import ReportsApi from "../../api/reportsApi"
import moment from 'moment'
import ReactApexChart from "react-apexcharts"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function BreakDownAnalysis() {
  const[linedata,setLineData] = useState([])
  const[breakdownprocessTable,setTable] = useState([])
  const[childTable,setChildTable] = useState([])
  const[line,setLine] = useState([])
  const[startdate,setStartDate] = useState([])
  const[enddate,setEndDate] = useState([])
  //['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
 const pieChartData = {
          
  series: breakdownprocessTable.map((value) =>{return value.BreakDownTime}),

  options: {

    chart: {
      type: 'donut',
    },
    labels: breakdownprocessTable.map((value) =>{return value.MainBreakDownReason}),
    responsive: [{
      breakpoint: 200,
      options: {
        chart: {
          width: 400,
         
          
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  },


};

const barChartData = {
          
  series: [{
    data: childTable.map((value)=>{return value.DownTime})
  }],
  options: {
    chart: {
      type: 'bar',
      height: 350
    },
    plotOptions: { 
      bar: {
        borderRadius: 4,
        horizontal: true,
      }
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: childTable.map((value)=>{return value.Reason})
    }
  },


};
  
  
  


  const getLineData = useCallback(()=>{
    dasboardApi.getLineData()
    .then((res)=>{
      console.log("getLineData",res.data)
      setLineData(res.data)
    })
  })

  const getData = useCallback(()=>{

  
  
    ReportsApi.getData({line,startdate,enddate})
    .then((res) => res.json())
    .then((data) => {
                   
      toast.info('Data fetch Successfully ')
           setTable(data.recordsets[1])
         //  setContainerSize(data.recordset)
        
          })
         
  })
 
 const getChildTableData = (reasonId) =>{
  ReportsApi.getChildTableData({line,startdate,enddate,reasonId})
  .then((res) => res.json())
  .then((data) => {
                  console.log("data",data)
    toast.info('Subreason data fetch Successfully')
         setChildTable(data)
        // setTable(data.recordsets[1])
       //  setContainerSize(data.recordset)
      
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
    <div className="breakdownanalysis">
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
        <div className="card2card3">
    <Card className="card2">
    <Card.Body>
     <Card.Title>BreakDown Process Total DownTime 298min</Card.Title>

    
     <div id="chart">
  <ReactApexChart options={pieChartData.options} series={pieChartData.series} type="donut" width={380} height={400} />
</div>
    </Card.Body>
  </Card>

  <Card className="card3">
    <Card.Body>
    <Card.Title>BreakDown Process</Card.Title>
    <div className="table-responsive">
              <Table bordered className="mg-b-0">
               
                <thead>
                  <tr>
                    <th>Process</th>
                    <th>Count</th>
                    <th>Time</th>
                    <th>Detail</th>
                 </tr>
                </thead>
                <tbody>
                {breakdownprocessTable.map((item) => (
                <tr  
              >
              <td>{item.MainBreakDownReason}</td>
              <td>{item.MainBreakDownReasonCount}</td>
              <td>{item.BreakDownTime}</td>
              <td><button 
              onClick={()=>getChildTableData(item.MainBreakDownReasonID)}
              >
               Details</button></td>
            </tr>
          ))}
           </tbody>
              </Table>
            </div>

    </Card.Body>
  </Card>
  </div>
  <div className="card4card5">
  <Card className="card4">
    <Card.Body>
    <Card.Title>BreakDown Process With Reason</Card.Title>
    <div className="table-responsive2">
              <Table bordered className="mg-b-0">
               
                <thead>
                  <tr>
                    <th>Process</th>
                    <th>Reason</th>
                    <th>StartTime</th>
                    <th>EndTime</th>
                    <th>DownTime</th>
                 </tr>
                </thead>
                <tbody>
                {   childTable.map((item) => (
                <tr  
              >
              <td>{item.Process}</td>
              <td>{item.Reason}</td>
              <td>{moment(item.StartTime).format("YYYY/MM/DD hh:mm:ss")}</td>
              <td>{moment(item.EndTime).format("YYYY/MM/DD hh:mm:ss")}</td>
              <td>{item.DownTime}</td>
             
            </tr>
          ))
          
          }
           </tbody>
              </Table>
            </div>
    </Card.Body>
  </Card>
  <Card className="card5">
    <Card.Body>
    <Card.Title>BreakDown Process With Reason</Card.Title>
    <div id="chart">
  <ReactApexChart options={barChartData.options} series={barChartData.series} type="bar" height={350} />
</div>
    </Card.Body>
  </Card>
  </div>

 
    </div>
  );
}

export default BreakDownAnalysis;