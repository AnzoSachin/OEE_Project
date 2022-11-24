var config = require('../dbconfig')
const sql = require('mssql');

          
const login = async(req,res) => {
    let data = req.body
      console.log("login",data)
    
        try {
            let pool = await sql.connect(config)
                   await pool.request()
                 
                   .input("UserId",sql.NVarChar,data.userid)
                   .input("Password",sql.NVarChar,data.password)
                   .output("UserName",sql.NVarChar,)
                 
                  
                  
                   .execute("spValidateUser")
                   .then(result => {
                       console.log(" login result",result.recordset)
                    res.json(result.recordset);
        
        
                })
      
             
            
        } catch (error) {
            console.log(error)
        }
        }







module.exports = {
    login
}