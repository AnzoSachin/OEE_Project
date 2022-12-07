
import React, {  useCallback, useEffect, useState } from "react";
import Select from "react-select";
// import { Table } from 'react-bootstrap';
// import DatePicker from "react-datepicker";
import { Form } from "react-bootstrap";
import dasboardApi from "../../api/dashboardApi"
import lineStatusApi from "../../api/lineStatusApi"
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";


const BreakDownReport = () =>{
  const[linedata,setLineData] = useState([])
  const[line,setLine] = useState({})
  const[startdate,setStartDate] = useState([])
  const[enddate,setEndDate] = useState([])
  const[excelexport,setExcelExport] = useState([])
  const[lineflag,setLineFlag] = useState(false)
  const fileType =
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
const filename = "breakdownreport"
  const fileExtension = ".xlsx";


  const getLineData = useCallback(()=>{
    dasboardApi.getLineData()
    .then((res)=>{
      console.log("res",res.data)
      setLineData(res.data)
    })
  })

  const handleline = (value) =>{
   
  
    setLine(value.value)

   
  }
  const handleStartdate =(e)=> {
   
    setStartDate(e.target.value)

    
  }
  const handleEnddate =(e)=>{
  
   setEndDate(e.target.value)
  }

  const getAllData =(e) =>{
    if (lineflag === true) {
      let line = 'All'
      lineStatusApi.getExcelExportBreakDownDetail({startdate,enddate,line})
      .then((res) => res.json())
      .then((data) => {
       
             console.log("res",data)
             setExcelExport(data.recordset)
             exportToCSV(data.recordset,filename)
            
            
           
            })
      
    } else {
      lineStatusApi.getExcelExportBreakDownDetail({startdate,enddate,line})
      .then((res) => res.json())
      .then((data) => {
       
             console.log("res",data)
             setExcelExport(data.recordset)
             exportToCSV(data.recordset,filename)
            
            
           
            })
    }
   
  }

  const handlealline = (e) =>{
    setLineFlag(!lineflag)
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

  },[]
  )

 
    return(
        <div className="BreakDown">
         
     
       
        <div className="card card-breakdownreport-one">
        <div className="card-header">
            <h7>Line Status</h7>
        
    
                  
                  </div>
                
               
                <div className="card-body">
                    <h4>Export Breakdown Report</h4>
                 <div className="card card-breakdownreport-child">
                   
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
                      <p>Start Date:</p>
                      <div className="select-start">
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
                    <div className="select-3">
                      <p>End Date:</p>
                      <div className="select-end">
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
                  

                    <button className="buttonbreakdown"
                       onClick={(e) => {
                        getAllData()
                      }}
                    >
                        Get Data
                      
                    </button>
                    </div>
                    </div>

                 
                 

                  
                </div>
                <div className="breakdownReportTable">
                {/* <Table bordered className="mg-b-0" id="table-to-xls">
               
               <thead>
                 <tr>
                 <th>ID</th>
                 <th>LineCode</th>
                   <th>MachineUpTime</th>
                   <th>MachineDownTime</th>
                   <th>DownPeriod</th>
                   <th>Process</th>
                   <th>Reason</th>
                   <th>Comment</th>
                   <th>Officer Comment</th>
                   <th>UserName</th>
                   <th>InputTime</th>
                   
                  
                   
                   
                 </tr>
               </thead>
               <tbody>

               {excelexoprtData.map((item) => (
                <tr key={item._id}>
              <td>{item.Id}</td>
              <td>{item.LineCode}</td>
              <td>{item.MachineUpTime}</td>
              <td>{item.MachineDownTime}</td>
              <td>{item.DownPeriod}</td>
              <td>{item.Process}</td>
              <td>{item.Reason}</td>
              <td>{item.Comments}</td>
              <td>{item.OfficerComment}</td>
              
              <td>{item.UserName}</td>
              <td>{item.InputTime}</td>
             

              
              
             
             
            </tr>
          ))}
               
               
               
               
                
                
                
               </tbody>
             </Table> */}
                </div>
                
                {/* card-body */}
              </div>
    </div>


    )
}

export default BreakDownReport