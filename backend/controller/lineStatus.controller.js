var config = require('../dbconfig')
const sql = require('mssql');

const getBreakDownDetail = async(req,res) =>{
    let data = req.body
    console.log("daaata",data)
  try {
        let pool = await sql.connect(config)
          await pool.request()
          .input("MachineCode", sql.NVarChar,data.machinecode)
          .execute("spGetBreakDowndetail")
          .then(result => {
            console.log("result",result)
            res.json(result);
        })
      } catch (error) {
        console.log(error)  
      }}

const getPreviousBreakDownDetail = async(req,res) => {
   let data = req.body
console.log("daaataaa",data)
try {
    let pool = await sql.connect(config)
           await pool.request()
           .input("MachineCode",sql.NVarChar,data.line)
           .input("StartDate",sql.NVarChar,data.startdate)
           .input("EndDate",sql.NVarChar,data.enddate)
           .execute("spGetPreviousBreadkDowndetail")
           .then(result => {
            console.log("result",result)
            res.json(result);
})  
} catch (error) {
    console.log(error)
}
}


const getExcelExportBreakDownDetail = async(req,res) => {
   
    let data = req.body
    console.log("daaataaa",data)
    try {
        let pool = await sql.connect(config)
               await pool.request()
               .input("MachineCode",sql.NVarChar,data.line)
               .input("StartDate",sql.NVarChar,data.startdate)
               .input("EndDate",sql.NVarChar,data.enddate)
               .execute("spGetLineBreakDown")
               .then(result => {
                console.log("result",result)
                res.json(result);
    
    
            })
        
    } catch (error) {
        console.log(error)
    }
    }
    
const getShiftWiseBreakDownDetail = async(req,res) => {
   
    let data = req.body
    console.log("daaataaa",data)
    try {
        let pool = await sql.connect(config)
               await pool.request()
               .input("MachineCode",sql.NVarChar,data.line)
               .input("StartDate",sql.DateTime,data.StartD)
               .input("EndDate",sql.DateTime,data.EndD)
               .execute("spGetShiftwiseLineBreakDown")
               .then(result => {
                console.log("result",result)
                res.json(result);
    
    
            })
        
    } catch (error) {
        console.log(error)
    }
    }
    const getOfficerCommentOnBreakdown = async(req,res) => {
   
        let data = req.body
        console.log("daaataaa",data)
        try {
            let pool = await sql.connect(config)
                   await pool.request()
                   .input("MachineCode",sql.NVarChar,data.line)
                   .input("StartDate",sql.NVarChar,data.startdate)
                   .input("EndDate",sql.NVarChar,data.enddate)
                   .input("Duration",sql.Int, data.duration)
                   .input("IsRework",sql.NVarChar,data.isRework)
                   .execute("spGetFilterBreakdownForOfficer")
                   .then(result => {
                   
                    res.json(result);
        
        
                })
            
        } catch (error) {
            console.log(error)
        }
        }

module.exports = {
    getBreakDownDetail,
    getPreviousBreakDownDetail,
    getShiftWiseBreakDownDetail,
    getOfficerCommentOnBreakdown,
    getExcelExportBreakDownDetail,
    
    
}