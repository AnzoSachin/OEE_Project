
import React, { Component, useCallback, useEffect, useState } from "react";
import Select from "react-select";
import { Table } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import { Form } from "react-bootstrap";
import dasboardApi from "../../api/dashboardApi"
import lineStatusApi from "../../api/lineStatusApi"
import moment from 'moment';
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";

const ShiftBreakDownReport = () =>{
  const[linedata,setLineData] = useState([])
  const[shiftdata,setShiftData] = useState([])
  const[line,setLine] = useState({})
  const[shift,setShift] = useState({})
  const[reportdate,setReportDate] = useState([])
  const[startdate,setStartDate] = useState([])
  const[enddate,setEndDate] = useState([])
  const[excelexoprtData,setExcelExport] = useState([])
  const[lineflag,setLineFlag] = useState(false)

  const fileType =
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
const filename = "shift_breakdown_report"
  const fileExtension = ".xlsx";

  // const alllines = linedata.map((item) => {
  //   return item.LineCode
  // })

  const getLineData = useCallback(()=>{
    dasboardApi.getLineData()
    .then((res)=>{
      console.log("res",res.data)
      setLineData(res.data)
    })
  })
  const getShiftData = useCallback(()=>{
    dasboardApi.getShiftData().then((response) => {
      console.log("Shift", response.data);
      setShiftData(response.data)
    });
  })

  const handleline = (value) =>{
   
  
    setLine(value.value)

   
  }
  const handleStartdate =(e)=> {
   
    setStartDate(e.target.value)

    
  }

  const handlealline = (e) =>{
    setLineFlag(!lineflag)
  }
  const handleReportdate =(e)=>{
    
    setReportDate(e.target.value)
  }
  const handlesift = (value) => {
   
    setShift(value.value)
   
  }
  const dataforexcel = () =>{
    let StartD = ""
    let EndD = ""
    if(shift === 'A')
    {
       StartD = reportdate + ' 06:59:59'
      setStartDate(StartD)
       EndD = moment(StartD).add(8,'hour').format('Y-MM-DD HH:mm:ss')
      setEndDate(EndD)
    }else if(shift === 'B'){
       StartD = reportdate + ' 14:59:59'
      setStartDate(StartD)
      EndD = moment(StartD).add(8,'hour').format('Y-MM-DD HH:mm:ss')
      setEndDate(EndD)

    }else {
       StartD = reportdate + ' 22:59:59'
      setStartDate(StartD)
      EndD = moment(StartD).add(8,'hour').format('Y-MM-DD HH:mm:ss')
      setEndDate(EndD)
    }
  
  if(lineflag === true){
    let line = 'All'
    lineStatusApi.getShiftWiseBreakDownDetail({StartD,EndD,line})
    .then((res) => res.json())
    .then((data) => {
     
           console.log("res",data)
           exportToCSV(data.recordset,filename)
          
         
          })
  }else {

    lineStatusApi.getShiftWiseBreakDownDetail({StartD,EndD,line})
    .then((res) => res.json())
    .then((data) => {
     
           console.log("res",data)
           exportToCSV(data.recordset,filename)
          
         
          })
    
  }
   

  }

 
  const exportToCSV = (apiData, filename) => {
    const ws = XLSX.utils.json_to_sheet(apiData);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, filename + fileExtension);
  };
  useEffect(() =>{
    getLineData()
    getShiftData()
  },[]
  )

  
    return(
        <div className="BreakDown">

       
        <div className="card card-shiftbreakdownreport-one">
        <div className="card-header">
            <h7>Line Status</h7>
        
    
                  
                  </div>
                
               
                <div className="card-body">
                    <h4>Export Shiftwise Breakdown Report</h4>
                 <div className="card card-shiftbreakdownreport-child">
                   
                    <div className="card-body">
                       
                    <div className="select-1">
                      <p1>Select Line:</p1>
                     <div className="select-line">
                     <Select
                        onChange={(value) => handleline(value)}
                        isDisabled = {lineflag}
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
                    <Form>
      {['checkbox'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            onChange={(e) => handlealline(e)}
            label="All Lines"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
          />
         
         
        </div>
      ))}
    </Form>
                    <div className="select-2">
                      <p>Shift:</p>
                      <div className="select-start">
                      <Select
                         
                          onChange={(value) => handlesift(value)}
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
                    <div className="select-3">
                      <p>Report Date:</p>
                      <div className="select-end">
                      <Form.Group controlId="dob">
                          
                          <Form.Control
                            type="date"
                            name="dob"
                            value={reportdate}
                           onChange={(e) => handleReportdate(e)}
                            placeholder=""
                          />
                        </Form.Group>
                      </div>
                      
                    </div>
                    <button className="buttonbreakdown"
                      onClick={(e) => {
                        dataforexcel()
                      }}
                    >
                        ExportToExcel
                      
                    </button>
                    </div>
                    </div>

                 
                 

                  
                </div>
                {/* card-body */}
              </div>
    </div>


    )
}

export default ShiftBreakDownReport