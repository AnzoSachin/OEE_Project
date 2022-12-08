// import axios from "axios"
let baseurl='http://localhost:5000/anzo/login'

const LoginApi = {
    login : function(data) {
        console.log("login api",data)
        return fetch(`${baseurl}/login`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
              
            },
            body: JSON.stringify(data),
          })
    }
}

export default LoginApi