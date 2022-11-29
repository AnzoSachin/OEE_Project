
import React, { Component, useCallback, useEffect, useState } from "react";
import Select from "react-select";
import { Table } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import { Form } from "react-bootstrap";
import InputGroup from 'react-bootstrap/InputGroup';
import dasboardApi from "../../api/dashboardApi"
import BatchApi from "../../api/batchApi"
import UpdateBatch from "./updatebatch"
import StopB from "./stopbatch"
import timepicker from 'react-time-picker';
import Spinner from 'react-bootstrap/Spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import moment from 'moment'


const myComponentStyle = {
  backgroundColor: 'lightgreen',
 
}
const mydefault = {
  backgroundColor: 'white',
 
}

const Batch = () =>{
  const[linedata,setLineData] = useState([])
  const[containersize,setContainerSize] = useState([])
  const[batchNameList,setBatchNameList] = useState([])
  const[mixerList,setMixerList] = useState([])
  const[batchList,setBatchList] = useState([])
  const[pgList,setPGList] = useState([])
  const[line,setLine] = useState("202")
  const[flag,setFlag] = useState(false)
  const[batchid,setBatchId] = useState([])
  const[starttime,setStartTime] = useState([])
  const[stoptime,setStopTime] = useState([])
  const[pgl,setPGL] = useState([])
  const[product,setProduct] = useState([])
  const[mixer,setMixer] = useState([])
  const[container,setContainer] = useState([])
  const[batchNo,setBatchNo] = useState([])
  const[poNo,setPONo] = useState([])
  const[sku,setSKU] = useState([])
  const[datetime,setDateTime] = useState([])
  const[time,setTime] = useState([])
  const[stopflag,setStopFlag] = useState(false)
  const[Indexarray,setSetIndex] = useState([])
  const[loader,setSetLoader] = useState(false)

  const batchstoptime = batchList.map((item)=>{
    return item.BatchStopTime
  })

  
  const getLineData = useCallback(()=>{
    dasboardApi.getLineData()
    .then((res)=>{
      console.log("getLineData",res.data)
      setLineData(res.data)
    })
  })
  const getBatchNameList = useCallback(()=>{
    BatchApi.getBatchNameList()
    .then((res)=>{
      console.log("getBatchNameList",res.data)
      setBatchNameList(res.data)
    })
  })
  const getMixerList = useCallback(()=>{
    BatchApi.getMixerList()
    .then((res)=>{
      console.log("getMixerList",res.data)
      setMixerList(res.data)
    })
  })
  const getPGList = useCallback(()=>{
    BatchApi.getPGList()
    .then((res)=>{
      console.log("getPGList",res.data)
      setPGList(res.data)
    })
  })
  const getBatchList = useCallback(()=>{
    BatchApi.getBatchList({line})
    .then((res) => res.json())
    .then((data) => {
     
           console.log("getBatchList",data.recordset)
           setBatchList(data.recordset)
           setSetLoader(false)
        
          })
  })
  const getContainerSize = useCallback(()=>{
    BatchApi.getContainerSize({line})
    .then((res) => res.json())
    .then((data) => {
     
           console.log("getComplaintData",data.recordset)
           setContainerSize(data.recordset)
        
          })
   

  })

  const addBatch = useCallback(()=>{
    setSetLoader(true)
    let BatchStartTime = datetime+" "+time
  
   BatchApi.addBatch({line,container,batchNo,sku,BatchStartTime,poNo,pgl,product,mixer})
     .then((res) => {
    
        
          setSetLoader(false)
          toast.info('Batch Started Successfully ')
          getBatchList()
         // setContainerSize(data.recordset)
       
         })
         
  })
 
  const updateBatch = (Id,StartTime,StopTime,index) =>{
   
    setSetIndex(index)
    
  
    setFlag(true)
    setBatchId(Id)
    setStartTime(StartTime)
    setStopTime(StopTime)
    

  }
  const StopBatch = (Id,StopTime) =>{
    setStopFlag(true)
    setBatchId(Id)
    setStopTime(StopTime)

  }
  const disableflag = () =>{
       
    setFlag(false)
    setStopFlag(false)
    getBatchList()
}

  const handleline = (value) =>{
    setSetLoader(true)
    let line = value.value
      setLine(value.value)
      BatchApi.getContainerSize({line})
      .then((res) => res.json())
      .then((data) => {
        setSetLoader(false)
         
             setContainerSize(data.recordset)
          
            })
            BatchApi.getBatchList({line})
            .then((res) => res.json())
            .then((data) => {
              setSetLoader(false)
                
                   setBatchList(data.recordset)
                
                  })
     
  }

  const handlePGL = (value) =>{
 
    setPGL(value.label)
  }
  const handleProduct = (value) =>{
    
    setProduct(value.label)
  }
  const handleMixer = (value) =>{
  
    setMixer(value.label)
  }
  const handleContainer = (value) =>{
  
    setContainer(value.value)
  }

  const handleBatchNo = (e) =>{
    setBatchNo(e.target.value)
  }
  const handlePONo = (e) =>{
    setPONo(e.target.value)
  }
  const handleSKU = (e) =>{
    setSKU(e.target.value)
  }
  const handleDate = (e) =>{
    setDateTime(e.target.value)
  }
  const handleTime = (e) =>{
   setTime(e.target.value)
  }

  useEffect(() =>{
    getPGList()
    getLineData()
   // getBatchList()
    getMixerList()
   // getContainerSize()
    getBatchNameList()
   

    
  
   
   
  },[line]
  )
 
 
    return(
        <div className="batch">
        
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
          <div className="updatebatch">
            {
              flag ?
              <UpdateBatch batchid = {batchid} starttime = {starttime} stoptime = {stoptime} disableflag = {disableflag}/>
              : ""
            }
          </div>
          <div className="stopbatch">
            {
              stopflag ?
              <StopB batchid = {batchid}   disableflag = {disableflag}/>
              : ""
            }
          </div>
     
       
        <div className="card card-batch-one">
       
        <div className="Spinner">
        {loader?<Spinner animation="border" />:""}
        </div>
       
       
        <div className="card-header">
            <h7>Batch</h7>
        
    
                  
                  </div>
                
               
                <div className="card-body">
                    <h4>Start\Stop Batch </h4>
                 <div className="card card-batch-child">
                    <div className="card-header">
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
                      <p className="">PGL No:</p>
                      <div className="container-8">
                       
                      <Select
                        onChange={(value) => handlePGL(value)}
                         value={pgList.value}
                        options={[
                          ...pgList.map((ele) => {
                           
                             return {
                               value: ele.Id,
                               label: ele.PGLNo,
                             };
                           }),
                        ]}
                      />
                      </div>
                      
                    </div>
                    <div className="line-b-select-9">
                      <p className="">Product:</p>
                      <div className="container-9">
                       
                      <Select
                        onChange={(value) => handleProduct(value)}
                         value={batchNameList.value}
                        options={[
                          ...batchNameList.map((ele) => {
                           
                             return {
                               value: ele.Id,
                               label: ele.BatchName,
                             };
                           }),
                        ]}
                      />
                      </div>
                      
                    </div>
                    <div className="line-b-select-10">
                      <p className="">Mixer:</p>
                      <div className="container-10">
                       
                      <Select
                        onChange={(value) => handleMixer(value)}
                         value={mixerList.value}
                        options={[
                          ...mixerList.map((ele) => {
                           
                             return {
                               value: ele.Id,
                               label: ele.Mixer,
                             };
                           }),
                        ]}
                      />
                      </div>
                      
                    </div>
                    <div className="line-b-select-2">
                      <p className="">Container Size:</p>
                      <div className="container-2">
                      <Select
                       onChange={(value) => handleContainer(value)}
                         value={containersize.value}
                        options={[
                          ...containersize.map((ele) => {
                           
                             return {
                               value: ele.ID,
                               label: ele.ContainerName,
                             };
                           }),
                        ]}
                      />
                      </div>
                      
                    </div>
                    <div className="line-b-select-3">
                      <p>Batch No:</p>
                      <div className="container-3">
                      <InputGroup className="mb-3">
        {/* <InputGroup.Text id="basic-addon1"></InputGroup.Text> */}
                      <Form.Control
                        onChange={(e) => handleBatchNo(e)}
                       placeholder=""
                         aria-label=""
                        aria-describedby="basic-addon1"
                          />
                       </InputGroup>
                      </div>
                      
                    </div>
                    <div className="line-b-select-4">
                      <p>SKU:</p>
                      <div className="container-4">
                      <InputGroup className="mb-3">
        {/* <InputGroup.Text id="basic-addon1"></InputGroup.Text>handleSKU */}
                      <Form.Control
                      onChange={(e) => handleSKU(e)}
                       placeholder=""
                         aria-label=""
                        aria-describedby="basic-addon1"
                          />
                       </InputGroup>
                      </div>
                      
                    </div>

                    <div className="line-b-select-5">
                      <p>Batch Start Time:</p>
                      <div className="container-5">
                      <Form.Group>
                         <p id="sd">Start Date</p>
                         <div className="batchdate">
                      <Form.Control
                            type="date"
                            onChange={(e) => handleDate(e)}
                            name="dob"
                         
                            placeholder="Date of Birth"
                          />
                          </div>
                          <p id="t">Time</p>
                          <div className="batchtime">
                          <InputGroup className="mb-3">
       
        <Form.Control
          onChange={(e) => handleTime(e)}
          type="time"
          placeholder="HH:mm:ss"
          aria-label=""
          aria-describedby="basic-addon1"
        />
      </InputGroup>
                          </div>
      </Form.Group>
                      </div>
                      </div>
                      
                      <div className="line-b-select-6">
                      <p>PO No:</p>
                      <div className="container-6">
                      <InputGroup className="mb-3">
       
        <Form.Control
          onChange={(e) => handlePONo(e)}
          placeholder=""
          aria-label=""
          aria-describedby="basic-addon1"
        />
      </InputGroup>
                      </div>
                      </div>

                   
                     

                      
                      
                  
                 

                    <button className="classbutton2"
                      onClick={(e) => {
                        addBatch()
                      }}
                    >
                      Start Batch
                    </button>
        

                  

                   

                    </div>
                    <div className="card-body">
                    <div className="table-responsive">
              <Table bordered className="mg-b-0">
               
                <thead>
                  <tr>
                    <th>Batch Id</th>
                    <th>LineCode</th>
                    <th>Product</th>
                    <th>Container</th>
                    <th>Batch Start Time</th>
                    <th>Batch Stop Time</th>
                    <th>Mixer</th>
                    <th>Batch Code</th>
                    {/* <th>Update</th> */}
                    <th>StopBatch</th>
                   
                    
                    
                  </tr>
                </thead>
                <tbody>
               
                {batchList.map((item,index) => (
                <tr  
                style={item.BatchStopTime === null ? myComponentStyle : mydefault}
                 key={index}>
              <td>{item.BatchID}</td>
              <td>{item.LineCode}</td>
              <td>{item.Product}</td>
              <td>{item.Container}</td>
              <td>{ moment.utc(item.BatchStartTime).format('YYYY-MM-DD HH:mm:ss') }</td>
              <td>{ moment(item.BatchStopTime).format('YYYY-MM-DD HH:mm:ss')}</td>
              <td>{item.Mixer}</td>
              <td>{item.Batchcode}</td>
              {/* <td><button onClick={()=>updateBatch(item.BatchID,item.BatchStartTime,item.BatchStopTime,index)}>
                Update</button></td> */}
                  {item.BatchStopTime !== null ?
                  <td><button 
                  onClick={()=>StopBatch(item.BatchID,item.BatchStopTime)}
                  disabled={true}
                  >
                  Stop</button></td>:
                  <td><button 
                  onClick={()=>StopBatch(item.BatchID,item.BatchStopTime)}
                
                  >
                  Stop</button></td>
                  }
                
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

export default Batch