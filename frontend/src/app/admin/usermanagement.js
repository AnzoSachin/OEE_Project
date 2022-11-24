
import React, { Component, useCallback, useState ,useEffect} from "react";
import Select from "react-select";
import { Table } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import { Form } from "react-bootstrap";
import InputGroup from 'react-bootstrap/InputGroup';
import AdminApi from '../../api/adminApi'

const UserManagement = () =>{
  const[userrole,setUserRole] = useState([])
  const[userlist,setUserList] = useState([])
  const[username,setUsername] = useState([])
  const[userid,setUserId] = useState([])
  const[userR,setUserR] = useState([])
  const[emailId,setEmailId] = useState([])
  const[password,setPassword] = useState([])
  const[repassword,setRePassword] = useState([])
  const[isactive,setIsActive] = useState("N")


  const getuserrole = useCallback(() =>{
AdminApi.getUserRole()
.then((res)=>{
  console.log("getuserrole",res.data)
  setUserRole(res.data)
})
  })
  
  const getuserlist = useCallback(() =>{
    AdminApi.getUserList()
    .then((res)=>{
      console.log("getuserlist",res.data)
      setUserList(res.data)
    })
      })

      const addUser = useCallback(() =>{
        AdminApi.addUser({username,userid,userR,emailId,password,repassword,isactive})
        .then((res) => res.json())
        .then((data) => {
         
               console.log("addUser",data)
               getuserlist()
             //  setComplaintID(data.output.ComplaintID)
           
             //  setComplaint(data.recordsets[2])
            //   this.setState({ pieChartData: data });
              })
        
      })

      const handleUsername = (e) => {
       
        setUsername(e.target.value)

      }

      const handleUserId = (e) => {
       
        setUserId(e.target.value)
      

      }
      const  handleUserRole = (value) => {
        let line = value.value
      
        setUserR(value.label)
       

      }
      const handleEmailId =(e) => {
     
        setEmailId(e.target.value)
      }

      const handlePassword =(e) =>{
      
        setPassword(e.target.value)
      }

      const handleRePassword =(e) =>{
       
        setRePassword(e.target.value)
      }

      const handleIsActive =(e) =>{
      
        setIsActive("Y")
      }

      const usernameselected =(name,id,role) =>{
     
        setUsername(name)
        setUserId(id)
      //  setUserRole(role)
        
      }

      const Reset = () =>{
        setUsername(" ")
        setUserId(" ")
       // setUserRole("")
        // setEmailId(" ")
        // setPassword(" ")
        // setRePassword(" ")
      }

  useEffect(() =>{
    getuserrole()
    getuserlist()
   
   
  },[]
  )


    return(
        <div className="batch">
     
       
        <div className="card card-usermanagement-one">
        <div className="card-header">
            <h7>User Master</h7>
        
    
                  
                  </div>
                
               
                <div className="card-body">
                    <h4>Add\Update User </h4>
                 <div className="card card-usermanagement-child">
                    <div className="card-header">
                    <div className="line-b-select-1">
                      <p className="">UserName:</p>
                      <div className="container-1">
                      <InputGroup className="mb-3">
        {/* <InputGroup.Text id="basic-addon1"></InputGroup.Text> */}
                      <Form.Control
                       placeholder=""
                       value = {username}
                       onChange = {(e) => handleUsername(e)}
                       aria-label=""
                        aria-describedby="basic-addon1"
                          />
                       </InputGroup>
                      </div>
                      
                    </div>
                    <div className="line-b-select-2">
                      <p className="">User Id:</p>
                      <div className="container-2">
                      <InputGroup className="mb-3">
        {/* <InputGroup.Text id="basic-addon1"></InputGroup.Text> */}
                      <Form.Control
                       placeholder=""
                       value = {userid}
                       onChange = {(e) => handleUserId(e)}
                         aria-label=""
                        aria-describedby="basic-addon1"
                          />
                       </InputGroup>
                      </div>
                      
                    </div>
                    <div className="line-b-select-3">
                      <p>User Role:</p>
                      <div className="container-3">
                      <Select
                        onChange={(value) => handleUserRole(value)}
                         value={userrole.value}
                        options={[
                          ...userrole.map((ele) => {
                          
                           
                             return {
                               value: ele.Id,
                               label: ele.RoleName,
                             };
                           }),
                        ]}
                      />
                      </div>
                      
                    </div>
                    <div className="line-b-select-4">
                      <p>Email Id:</p>
                      <div className="container-4">
                      <InputGroup className="mb-3">
        {/* <InputGroup.Text id="basic-addon1"></InputGroup.Text> */}
                      <Form.Control
                       placeholder=""
                        onChange = {(e) => handleEmailId(e)}
                         aria-label=""
                        aria-describedby="basic-addon1"
                          />
                       </InputGroup>
                      </div>
                      
                    </div>

                      
                      <div className="line-b-select-6">
                      <p>Password:</p>
                      <div className="container-6">
                      <InputGroup className="mb-3">
        {/* <InputGroup.Text id="basic-addon1"></InputGroup.Text> */}
        <Form.Control
          placeholder=""
          onChange = {(e) => handlePassword(e)}
          aria-label=""
          aria-describedby="basic-addon1"
        />
      </InputGroup>
                      </div>
                      </div>

                      <div className="line-b-select-7">
                      <p className="">Re-Type Password:</p>
                      <div className="container-7">
                      <InputGroup className="mb-3">
        {/* <InputGroup.Text id="basic-addon1"></InputGroup.Text> */}
                      <Form.Control
                       placeholder=""
                       onChange = {(e) => handleRePassword(e)}
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

                      
                      
                  
                    <button className="classbutton1"
                      onClick={(e) => {
                        addUser()
                      }}
                    >
                      Save
                    </button>

                    <button className="classbutton2"
                      onClick={(e) => {
                        this.getAllData()
                      }}
                    >
                     Update
                    </button>

                    <button className="classbutton3"
                      onClick={(e) => {
                        Reset()
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
                    <th>Name</th>
                    <th>User Id</th>
                    <th>Email Id</th>
                    <th>UserRole</th>
                    <th>IsActive</th>
                   
                   
                    
                    
                  </tr>
                </thead>
                <tbody>
                {userlist.map((item) => (
                <tr key={item._id}>
              <td>
                <div onClick={(e) =>usernameselected(item.Name,item.UserId,item.UserRole)}> {item.Name}</div>
               
              
              </td>
              <td>{item.UserId}</td>
              <td>{item.EmailId}</td>
              <td>{item.UserRole}</td>
              <td>{item.IsActive}</td>
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

export default UserManagement