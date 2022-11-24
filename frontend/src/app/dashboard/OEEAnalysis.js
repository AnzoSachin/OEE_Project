
import React, { Component, useState } from "react";

import { Table } from 'react-bootstrap';

import { Form } from "react-bootstrap";

import InputGroup from 'react-bootstrap/InputGroup';
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

charts(FusionCharts);


const OEEAnalysis = (props) =>{
  const [newoee,setOee] = useState([])
  
  
  var  Ioee = props.labelData.OEE
 
 

 const onselect =(downtime)=>{
 
 
  let newAvail =  parseInt(props.labelData.Avail)+downtime/480*100
  let nOee = props.labelData.Performance*newAvail/100
  setOee(nOee)
  


}

  const BStartTime = props.lineBreakageTimmingData[0].filter((item) =>{
    
     
      return item.BStartTime > 0 //graph problem
    
  }).map((value)=>{
       return {value:value.BStartTime}
  })
  

  
  
  const BStopTime = props.lineBreakageTimmingData[0].map((item) =>{
    return {value:item.BStopTime}
  })
  const NextBStartTime = props.lineBreakageTimmingData[0].map((item) =>{
    return {value:item.NextBStartTime}
  })
  
 


 
  
  const dataSource = {
    chart: {
      caption: "Production Line Status",
      showvalues: "0",
      formatnumberscale: "0",
      showpercentvalues: "1",
      showsum: "0",
      plottooltext:
      "<b>$dataValue</b> from $seriesName in $label {br}<b>$percentValue</b> of total",
      theme: "fusion"
    },
    categories: [
      {
        category: [
         
          
          {
            label: "Data"
          }
        ]
      }
    ],
    dataset: [
      {
        seriesname: "BStart Time",
        data: BStartTime
        
      },
      {
        seriesname: "BStop Time",
        data:BStopTime
        
      },
      {
        seriesname: "BNext Start Time",
        data:NextBStartTime
        
      }
    ]


  };

 


    return(
    <div className="OEEAnalysis">
     
       
        <div className="card card-OEEAnalysis-one">
        <div className="card-header">
            <h7>Production Time Line Analysis</h7>
              
          
            <button onClick={props.FlagUpdate} type="button" class="btn-close" aria-label="Close">X</button>
         
                  
                  </div>


                
               
                <div className="card-body">
                  <div className="card card-OEEAnalysis-child1">
                  <ReactFusioncharts
        type="stackedbar3d"
        width="100%"
        height="80%"
        dataFormat="JSON"
        dataSource={dataSource }
      />
                  </div>
                    <h4>OEE Analysis</h4>
                 <div className="card card-OEEAnalysis-child">
                    <div className="card-header">
                    <div className="line-b-select">
                      <p className="">Actual OEE:</p>
                      <div className="container">
                      <InputGroup className="mb-3">
        {/* <InputGroup.Text id="basic-addon1"></InputGroup.Text> */}
                      <Form.Control
                       placeholder=""
                        value = {Ioee}
                         aria-label=""
                        aria-describedby="basic-addon1"
                          />
                       </InputGroup>
                      </div>
                      
                    </div>

                    <div className="line-b-select">
                      <p className="">New OEE:</p>
                      <div className="container">
                      <InputGroup className="mb-3">
        {/* <InputGroup.Text id="basic-addon1"></InputGroup.Text> */}
                      <Form.Control
                       placeholder=""
                       value = {newoee}
                         aria-label=""
                        aria-describedby="basic-addon1"
                          />
                       </InputGroup>
                      </div>
                      
                    </div>
                    

                   

                    </div>
                    <div className="card-body">
                    <Table bordered className="mg-b-0">
               
               <thead>
                 <tr>
                   <th>Start Time</th>
                   <th>End Time</th>
                   <th>Down Time</th>
                   <th>Breaking Process</th>
                   <th>Select</th>
                  
                  
                   
                   
                 </tr>
               </thead>
               <tbody>

               {props.lineBreakageTimmingData[1].map((item) => (
               
            <tr key={item._id}>
                    <th scope="row">{item.STARTTIME}</th>
                    <td>{item.ENDTIME}</td>
                    <td>{item.timediff}</td>
                    <td>{item.MachineName}</td>
                    <td>               <Form>
      {['checkbox'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label=""
            onClick={(e)=>onselect(item.timediff)}
            name="group1"
            type={type}
            id={`inline-${type}-1`}
          />
         
         
        </div>
      ))}
    </Form></td>

              
              
             
             
            </tr>
          ))}
                 
                 {/* <tr>
                   <th scope="row">10001</th>
                   <td>A202</td>
                   <td>Machical</td>
                   <td>Red</td>
                   <td>Open</td>
                 </tr> */}
               
               
                 {/* {props.lineBreakageTimmingData[1].map((item) => {
                    <tr key={item._id}>
                    <th scope="row">{item.STARTTIME}</th>
                    <td>{item.ENDTIME}</td>
                    <td>{item.timediff}</td>
                    <td>{item.MachineName}</td>
                    <td>not ready yet...</td>
                  </tr>

                 })} */}
               
                
                
                
               </tbody>
             </Table>
                    </div>

                 </div>
                 

                  
                </div>
                {/* card-body */}
              </div>
    </div>
 
   
    
    


    )
}
export default OEEAnalysis