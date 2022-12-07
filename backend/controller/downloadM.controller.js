var config = require('../dbconfig')
const sql = require('mssql');

const getFileData = async(req,res) =>{
    try {
        let pool = await sql.connect(config);
        let line = await pool.request()
                      .execute('spGetFile')
        let data=line.recordsets;
           console.log("datadata",line)
        res.json(data);
    }
    catch (error) {
        console.log(error);
    }
}
const getFileContent = async(req,res) => {
   
    let data = req.body
    console.log("daaataaa",data)
    try {
        let pool = await sql.connect(config)
               await pool.request()
               .input("Id",sql.Int,data.fileid)
               .execute("spGetFileContent")
               .then(result => {
              //  console.log("result",result)
                res.json(result.recordset);
    
    
            })
        
    } catch (error) {
        console.log(error)
    }
    }















module.exports = {
    getFileData,
    getFileContent,
   
}