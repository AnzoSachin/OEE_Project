











import React, { Component, useCallback, useEffect,useState } from "react";
import Select from "react-select";
import { Table } from 'react-bootstrap';
import { Form } from "react-bootstrap";
import InputGroup from 'react-bootstrap/InputGroup';
import AdminApi from '../../api/adminApi'
import dasboardApi from "../../api/dashboardApi"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const FaultManagement = () =>{
const[linedata,setLineData] = useState([])
const[machinedata ,setAllMachine] = useState([])
const[userlist,setUserList] = useState([])
const[faultlist,setFaultList] = useState([])
const[fault,setFault] = useState([])
const[machineprocess,setMachineProcess] = useState([])
const[line,setLine] = useState('202')
const[linetype,setLineType] = useState([])
const[isactive,setIsActive] = useState('')
const[isplanned,setIsPlanned] = useState('N')
const[planneddowntime,setPlannedDownTime] = useState('')
 
const getLineData = useCallback(()=>{
  dasboardApi.getLineData()
  .then((res)=>{
    console.log("getLineData",res.data)
    setLineData(res.data)
 
  })
})
const getAllMachine = useCallback(()=>{
  AdminApi.getMachineData()
  .then((res)=>{
    console.log("getMachineData",res.data.recordset)
    setAllMachine(res.data.recordset)
 
  })
})



// const getuserlist = useCallback(() =>{
//   AdminApi.getUserList()
//   .then((res)=>{
//     console.log("getuserlist",res.data)
//     setUserList(res.data)
//   })
//     })
const getfaultlist = useCallback(() =>{
  AdminApi.getFaultList({})
  .then((res)=>{
    console.log("getfaultlist",res.data)
    setFaultList(res.data)
  })
    })
           
const addFault = useCallback(() => {
  let Isactive = isactive ? "Y" : "N"
  let action = "ADD"
  AdminApi.addFault({line,machineprocess,fault,action,Isactive,isplanned,planneddowntime})
  .then((res) => res.json())
  .then((data) => {
   toast.info('Fault added successfully!');
         console.log("addFault",data)
         getfaultlist()
  })
})

const updateFault = useCallback(() => {
  let Isplanned = isplanned ? "Y" : "N"
  let action = "UPDATE"
  AdminApi.updateFault({line,machineprocess,fault,action,isactive,Isplanned,planneddowntime})
  .then((res) => res.json())
  .then((data) => {
   toast.info('Updated successfully!');
         console.log("updateFault",data)
         getfaultlist()
  })
})

const handlefault = (e) => {
       setFault(e.target.value)

}
const handleline = (value) =>{
  // console.log("value===",value)
 setLine(value.value)

 AdminApi.getFaultList1({line})
 .then((res) => res.json())
 .then((data) => {
       console.log("getFaultList",data)
    
       // setContainerSize(data.recordset)
     
       })
}
const handleMachineProcess = (value) =>{
  setMachineProcess(value.value)
}

const handleIsActive = (e) =>{
  setIsActive("Y" )
}

const handleIsPlanned = (e) =>{
  setIsPlanned("Y")
}
const handleplanneddowntime = (e) => {
       setPlannedDownTime(e.target.value)
}



const update = (fault) =>{
     
  setFault(fault)


  
}
useEffect(() =>{
   getLineData()
   getAllMachine()
   getfaultlist()
  // getuserlist()
},[]
)

  return(
    <div className="batch">

<ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
theme="light"
/>
<ToastContainer/>
     <div className="card card-faultmanagement-one">
             <div className="card-header">
                 <h7>Fault Management</h7>
               </div>
                    <div className="card-body">
                         <h4>Add\Update Fault </h4>
                      <div className="card card-faultmanagement-child">
                         <div className="card-header">
                     
                      
                         <div className="line-b-select-3">
                           <p>Line Type:</p>
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
    
                        <div className="line-b-select-4">
                          <p>Machine/Process:</p>
                          <div className="container-4">
                          <Select
                            onChange={(value) => handleMachineProcess(value)}
                            value={machinedata.value}
                              options={[
                                ...machinedata.map((ele) => {
                                  return {
                                   value: ele.Id,
                                    label: ele.MachineName,
                                  };
                                }),
                              ]}
                          />
                          </div>
                          
                        </div>
                       <div className="line-b-select-7">
                          <p className="">Fault:</p>
                          <div className="container-7">
                          <InputGroup className="mb-3">
            {/* <InputGroup.Text id="basic-addon1"></InputGroup.Text> */}
                          <Form.Control
                           placeholder=""
                           value = {fault}
                           onChange = {(e) => handlefault(e)}
                             aria-label=""
                            aria-describedby="basic-addon1"
                              />
                           </InputGroup>
                          </div>
                          </div>
   
                          <div className="line-b-select-8">
                          
                          <div className="container-8">
                          <Form>
          {['checkbox'].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                label="Is Active"
                onChange = {(e) => handleIsActive(e)}
                name="group1"
                type={type}
                id={`inline-${type}-1`}
              />
             </div>
          ))}
        </Form>
            </div>
                </div>    
                <div className="line-b-select-9">
                          <div className="container-9">
                          <Form>
          {['checkbox'].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                label="Is Planned"
                onChange = {(e) => handleIsPlanned(e)}
                name="group1"
                type={type}
                id={`inline-${type}-1`}
              />
             </div>
          ))}
        </Form></div></div>
   
        <div className="line-b-select-15">
        <p className="PD">Planned DownTime:</p>
                          <div className="container-15" >
                        <InputGroup className="mb-3">
                          <Form.Control
                           inline
                           label="Planned DownTime :"
                           placeholder=""
                           value = {planneddowntime}
                           onChange = {(e) => handleplanneddowntime(e)}
                             aria-label=""
                            aria-describedby="basic-addon1"
                              />
                               <p className="minutes">(Inminutes)</p>
                               </InputGroup>
                         </div></div>
                          
                          
               




                        <button className="classbutton1"
                          onClick={() => {
                            addFault()
                          }}
                        >
                          Save
                        </button>
    
                        <button className="classbutton2"
                          onClick={(e) => {
                            updateFault()
                          }}
                        >
                         Update
                        </button>
    
                        <button className="classbutton3"
                          onClick={(e) => {
                            // this.getAllData()
                          }}
                        >
                       Reset
                        </button>
    
                       
    
                        </div>
                        <div className="card-body">
                        <div className="table-responsive">
                  <Table bordered className="mg-b-0">
                   
                    <thead>
                      <tr>
                        
                        <th>Machine Process</th>
                        <th>Fault</th>
                        <th>IsPlanned</th>
                        <th>IsActive</th>
                        <th>Update</th>
                      
                        </tr>
                    </thead>
                    <tbody>
                    {faultlist.map((item) => (
                <tr key={item._id}>
                  <td>{item.MachineName}</td>
              <td>{item.Fault}</td>
              <td>{item.IsPlanned}</td>
              <td>{item.IsActive}</td>
              <td>{  <div onClick={() => update(item.Fault)}>Update</div>}</td>
           
             
             
             </tr>
          ))}
                    </tbody>
                  </Table>
                </div>
                            </div></div>
                     </div>
                    {/* card-body */}
                  </div>
        </div>
     )
}
export default FaultManagement




























// import React, { Component, useCallback, useEffect,useState } from "react";
// import Select from "react-select";
// import { Table } from 'react-bootstrap';
// import { Form } from "react-bootstrap";
// import InputGroup from 'react-bootstrap/InputGroup';
// import AdminApi from '../../api/adminApi'
// import dasboardApi from "../../api/dashboardApi"
  

// const FaultManagement = () =>{
//   const[filetype,setFileType] = useState({})
//   const [lineData, setLineData] = useState([])
//   const[line,setLine] = useState("")

//   const getLineData = useCallback(() => {
//     dasboardApi.getLineData()
//     .then((res)=>{
//       console.log("getLineData",res.data)
//       setLineData(res.data)
//     })
//   })

//   const getMachineData = useCallback(() => {
//     dasboardApi.getLineData()
//     .then((res)=>{
//       console.log("getLineData",res.data)
//       setLineData(res.data)
//     })
//   })

//   const handleline = (value) =>{
//    setLine(value.value)
//     }

//   useEffect(() =>{
//     getLineData()
//   },[])

 

//   return(
//     <div className="batch">
     
       
//              <div className="card card-faultmanagement-one">
//              <div className="card-header">
//                  <h7>Fault Management</h7>
            
        
                      
//                        </div>
                    
                   
//                     <div className="card-body">
//                          <h4>Add\Update Fault </h4>
//                       <div className="card card-faultmanagement-child">
//                          <div className="card-header">
                     
                      
//                          <div className="line-b-select-3">
//                            <p>Line Type:</p>
//                            <div className="container-3">
//                           <Select
//                           onChange={(value) => handleline(value)}
//                           value={lineData.value}
//                          options={[
//                            ...lineData.map((ele) => {
                            
//                               return {
//                                 value: ele.LineCode,
//                                 label: ele.LineName,
//                               };
//                             }),
//                          ]}
//                           />
//                           </div>
                          
//                         </div>
    
//                         <div className="line-b-select-4">
//                           <p>Machine/Process:</p>
//                           <div className="container-4">
//                           <Select
//                            // onChange={(e) => this.handleline(e)}
//                            // value={this.state.selectedLine}
//                             options={[
//                               // ...lineData.map((ele) => {
//                               //   return {
//                               //     value: ele.LineCode,
//                               //     label: ele.LineName,
//                               //   };
//                               // }),
//                             ]}
//                           />
//                           </div>
                          
//                         </div>
                       
    
                          
                          
    
//                           <div className="line-b-select-7">
//                           <p className="">Fault:</p>
//                           <div className="container-7">
//                           <InputGroup className="mb-3">
//                            {/* <InputGroup.Text id="basic-addon1"></InputGroup.Text> */}
//                           <Form.Control
//                              placeholder=""
//                              aria-label=""
//                              aria-describedby="basic-addon1"
//                               />
//                            </InputGroup>
//                           </div>
//                           </div>
    
//                           <div className="line-b-select-8">
                          
//                           <div className="container-8">
//                           <Form>
//           {['checkbox'].map((type) => (
//             <div key={`inline-${type}`} className="mb-3">
//               <Form.Check
//                 inline
//                 label="All Status"
//                 name="group1"
//                 type={type}
//                 id={`inline-${type}-1`}
//               />
             
             
//             </div>
//           ))}
//         </Form>
//                           </div>
//                           </div>    <div className="line-b-select-9">
                          
//                           <div className="container-9">
//                           <Form>
//           {['checkbox'].map((type) => (
//             <div key={`inline-${type}`} className="mb-3">
//               <Form.Check
//                 inline
//                 label="Is Planned"
//                 name="group1"
//                 type={type}
//                 id={`inline-${type}-1`}
//               />
             
             
//             </div>
//           ))}
//         </Form>
//                           </div>
//                           </div>
    
                          
                          
                      
//                         <button className="classbutton1"
//                           onClick={(e) => {
//                             this.getAllData()
//                           }}
//                         >
//                           Save
//                         </button>
    
//                         <button className="classbutton2"
//                           onClick={(e) => {
//                             this.getAllData()
//                           }}
//                         >
//                          Update
//                         </button>
    
//                         <button className="classbutton3"
//                           onClick={(e) => {
//                             this.getAllData()
//                           }}
//                         >
//                        Reset
//                         </button>
    
                       
    
//                         </div>
//                         <div className="card-body">
//                         <div className="table-responsive">
//                   <Table bordered className="mg-b-0">
                   
//                     <thead>
//                       <tr>
//                         <th>Name</th>
//                         <th>User Id</th>
//                         <th>Email Id</th>
//                         <th>UserRole</th>
//                         <th>IsActive</th>
                       
                       
                        
                        
//                       </tr>
//                     </thead>
//                     <tbody>
//                       <tr>
//                         <th scope="row">Abdul</th>
//                         <td>A202</td>
//                         <td>AP Premium</td>
//                         <td>operator</td>
//                         <td>Y</td>
                  
//                       </tr>
//                       <tr>
//                         <th scope="row">Vinesh</th>
//                         <td>A202</td>
//                         <td>AP Premium</td>
//                         <td>operator</td>
//                         <td>Y</td>
                       
//                       </tr>
//                       <tr>
//                         <th scope="row">Ramesh</th>
//                         <td>A202</td>
//                         <td>AP Premium</td>
//                         <td>operator</td>
//                         <td>Y</td>
                        
//                       </tr>
//                       <tr>
//                         <th scope="row">Amit</th>
//                         <td>A202</td>
//                         <td>AP Premium</td>
//                         <td>operator</td>
//                         <td>Y</td>
                      
//                       </tr>
//                       <tr>
//                         <th scope="row">Sumit</th>
//                         <td>A202</td>
//                         <td>AP Premium</td>
//                         <td>operator</td>
//                         <td>Y</td>
                       
//                       </tr>
                    
                    
                    
                    
                     
                     
                     
//                     </tbody>
//                   </Table>
//                 </div>
                            
//                         </div>
    
//                      </div>
                     
    
                      
//                     </div>
//                     {/* card-body */}
//                   </div>
//         </div>
    
    
//   )
// }
// export default FaultManagement