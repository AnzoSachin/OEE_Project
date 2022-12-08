
import React, { useCallback, useEffect, useState } from "react";
import Select from "react-select";
// import { Table } from 'react-bootstrap';
// import DatePicker from "react-datepicker";
import { Form } from "react-bootstrap";
// import dasboardApi from "../../api/dashboardApi"
// import lineStatusApi from "../../api/lineStatusApi"
import InputGroup from 'react-bootstrap/InputGroup';
// import * as FileSaver from "file-saver";
// import * as XLSX from "xlsx";
import AdminApi from "../../api/adminApi";
// import base64 from 'base-64'
// import axios from "axios";


const UloadFile = () =>{
  
  const[filetype,setFileType] = useState({})
  const[filecategory,setFileCategoryData] = useState([])
  const[file,setFile] = useState()
  const[comment,setComment] = useState([])
  const[filename,setFileName] = useState()
  const[filesize,setFileSize] = useState()
  const[inputFileType,setInputFileType] = useState()

  const [selectedFile, setSelectedFile] = useState();
  

    
    const[fileContent,setFileContent] = useState()


  const getFileCategoryList = useCallback(()=>{
    AdminApi.getFileCategoryList()
    .then((res)=>{
      console.log("getFileCategoryList",res.data)
      setFileCategoryData(res.data)
    })
  })

  const handlefile = (label) =>{
   
    console.log("value",label)
    setFileType(label.label)

   
  }


  const handlesFileChange = (e)=>{
    console.log("handlesFileChange",e.target.files[0])
    setSelectedFile(e.target.files[0])

     


  
 }

  const handlescomment = (e)=>{
    setComment(e.target.value)
  }

 const OnuploadClick = (e) =>{
  const formData = new FormData()
  formData.append('uloadFile',selectedFile)
  formData.append('Comment',comment)
  formData.append('FileType',filetype)
    // axios.post("http://localhost:5000/anzo/admin/uploadFile", formData ,{
    //   headers: {
    //     'Content-Type' : 'multipart/form-data'
    //   }

     
    // })
   
    AdminApi.UploadFile(formData)
    
    .then((res) => {
     
        console.log("UploadFile",res)
        //setFile(data[0].FileContent.data)
      
          })
   
    
   
 }

 
 
  
  useEffect(() =>{
   
    getFileCategoryList()

  },[]
  )
console.log("filetype",filetype)
console.log("filename",filename)
console.log("filesize",filesize)
console.log("inputfiletype",inputFileType)
console.log("fileContent",fileContent)
console.log("comment",comment)
    return(
        <div className="Upload">
         
     
       
        <div className="card card-Upload-one">
        <div className="card-header">
            <h7>Upload</h7>
        
    
                  
                  </div>
                
               
                <div className="card-body">
                    <h4>Upload Document</h4>
                 <div className="card card-Upload-child">
                   
                    <div className="card-body">
                       
                    <div className="select-1">
                      <p1>Select Line:</p1>
                     <div className="select-line">
                     <Select
                        onChange={(label) => handlefile(label)}
                        value={filecategory.value}
                        options={[
                          ...filecategory.map((ele) => {
                           
                             return {
                               value: ele.FileCategoryKey,
                               label: ele.FileCategoryValue,
                             };
                           }),
                        ]}
                      />
                   </div>
                      
                    </div>
                  
                    <div className="select-2">
                      <p>File Path:</p>
                      <div className="select-start">
                      <InputGroup className="mb-3">
        {/* <InputGroup.Text id="basic-addon1"></InputGroup.Text> */}
        <Form.Control
          placeholder="file"
          type="file"
         // value = {inputFileType}
          id = "file1"
          multiple={true}
          accept=".xlsx,.xls,.doc, .docx,.ppt, .pptx,.txt,.pdf"
         onChange={(e) => handlesFileChange(e)}
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
                      </div>
                     
                    </div>
                   
                    <div className="select-3">
                      <p>Description:</p>
                      <div className="select-end">
                      <InputGroup className="mb-3">
        {/* <InputGroup.Text id="basic-addon1"></InputGroup.Text> */}
        <Form.Control
          placeholder="Comment"
          onChange={(e) => handlescomment(e)}
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
                      </div>
                      
                    </div>
                  

                    <button className="buttonbreakdown"
                       onClick={(e) => {
                        OnuploadClick()
                      }}
                    >
                        Upload File
                      
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

export default UloadFile