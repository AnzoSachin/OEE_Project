
import React, { Component, useCallback, useEffect, useState } from "react";
import Select from "react-select";
import { Table } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import { Form } from "react-bootstrap";
import InputGroup from 'react-bootstrap/InputGroup';
import dasboardApi from "../../api/dashboardApi"
import downloadManual from "../../api/downloadmanualApi"
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import moment from 'moment'

const DownloadManual = () =>{
  const[filedata,setFileData] = useState([])
  const[exceldata,setExcelExport] = useState([])

  const fileType =
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
//const filename = "downloadmanual"
  const fileExtension = ".xlsx";

  const getFileData = useCallback(()=>{
    downloadManual.getFileData()
    .then((res)=>{
      console.log("getFileData",res.data)
      setFileData(res.data)
    })
  })

  const getFileContent =(fileid) =>{
    downloadManual.getFileContent({fileid})
    .then((res) => res.json())
    .then((data) => {
     
           console.log("getFileContent",data)
          // setExcelExport(data.recordset)
           exportToCSV(data[0].FContent.data
            ,data[0].FileName
            )
          
          
         
          })
  }

  const exportToCSV = (fContent, filename) => {
  
    const ws = XLSX.utils.json_to_sheet(fContent);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, filename + fileExtension);
  };

  useEffect(() =>{
    getFileData()
   
   
   
  },[]
  )
    return(
        <div className="batch">
     
       
        <div className="card card-dm-one">
        <div className="card-header">
            <h7>Download</h7>
        
    
                  
                  </div>
                
               
                <div className="card-body">
                    <h4>Download Document </h4>
                 <div className="card card-dm-child">
                    <div className="card-header">
                     </div>
                    <div className="card-body">
                    <div className="table-responsive">
              <Table bordered className="mg-b-0">
               
                <thead>
                  <tr>
                    <th>Download</th>
                    <th>Category</th>
                    <th>FileName</th>
                    <th>Discription</th>
                    <th>Upload Date</th>
                    </tr>
                    
                </thead>
                <tbody>
                {filedata.map((item) => (
                <tr  
              
                >
              <td>  <td><button onClick={()=>getFileContent(item.FileId)}
              >
                Download</button></td></td>
              <td>{item.Category}</td>
              <td>{item.FileName}</td>
              <td>{item.Description}</td>
              <td>{moment(item.UploadDate).format('YYYY-MM-DD HH:mm:ss')}</td>
              
            
               
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

export default DownloadManual