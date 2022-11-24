import React, { Component, useState } from 'react'
import {Link} from 'react-router-dom'
//import logo from "../../assets/images/anzologo.png"
import logo from "../../assets/images/anzologo.png"
import LoginApi from "../../api/loginApi"

const Signin = () => {
  const[userid,setUserId] = useState([])
  const[password,setPassword] = useState([])

  const loginuser = () =>{
    LoginApi.login({userid,password})
    .then((res)=>{
      console.log("loginuser",res)
   
    })
  }

  const handleUserId = (e) =>{
    setUserId(e.target.value)
  }

  const handlePassword = (e) =>{
    setPassword(e.target.value)
  }



  
    return (
      <div>
        <div className="az-signin-wrapper">
          <div className="az-card-signin">
          <img src={logo} style = {{height:"70px", width:"70px", margin:"0 auto"}}></img>
            <div className="az-signin-header">
           
              <h4>Please sign in to continue</h4>

              <form action="#/">
                <div className="form-group">
                  <label>UserID</label>
                  <input 
                  onChange={(e) => handleUserId(e)}
                  type="text"
                  className="form-control" 
                  placeholder="Enter your userId" 
                  defaultValue=" "/>
                </div>{/* form-group */}
                <div className="form-group">   
                  <label>Password</label>
                  <input type="password" 
                  onChange={(e) => handlePassword(e)}
                  className="form-control" 
                  placeholder="Enter your password" 
                  defaultValue=""/>
                </div>{/* form-group */}
                <button onClick={(e) => {loginuser()}}  className="btn btn-az-primary btn-block">Sign In</button>
              </form>
            </div>{/* az-signin-header */}
            <div className="az-signin-footer">
              <p><a href="#/">Forgot password?</a></p>
              {/* <p>Don't have an account? <Link to="/login/signup">Create an Account</Link></p> */}
            </div>{/* az-signin-footer */}
          </div>{/* az-card-signin */}
        </div>{/* az-signin-wrapper */}
      </div>
    )
  }


export default Signin
