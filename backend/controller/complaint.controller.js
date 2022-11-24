var config = require('../dbconfig')
const sql = require('mssql');



const getDepartmentList=async(req,res)=> {
    try {
        let pool = await sql.connect(config);
        let line = await pool.request()
                      .execute('spGetDepartment')
        let data=line.recordsets;
        
        res.json(data[0]);
    }
    catch (error) {
        console.log(error);
    }
}

const getUserList=async(req,res)=> {
    try {
        let pool = await sql.connect(config);
        let line = await pool.request()
                      .execute('spGetUsers')
        let data=line.recordsets;
        
        res.json(data[0]);
    }
    catch (error) {
        console.log(error);
    }
}

const getMachineList=async(req,res)=> {
    try {
        let pool = await sql.connect(config);
        let line = await pool.request()
                      .execute('spGetLineMachines')
        let data=line.recordsets;
        
        res.json(data[0]);
    }
    catch (error) {
        console.log(error);
    }
}

const getComplaintStatus=async(req,res)=> {
    try {
        let pool = await sql.connect(config);
        let line = await pool.request()
                      .execute('spGetComplaintStatus')
        let data=line.recordsets;
        
        res.json(data[0]);
    }
    catch (error) {
        console.log(error);
    }
}


const getComplaintData = async(req,res) => {
   
    let data = req.body
    console.log("daaataaa",data)
    try {
        let pool = await sql.connect(config)
               await pool.request()
               .input("MachineCode",sql.NVarChar,data.line)
               .execute("spGetComplaintData")
               .then(result => {
               console.log("getComplaintDataresult",result)
                res.json(result);
    
    
            })
        
    } catch (error) {
        console.log(error)
    }
    }

    const insertComplaintData = async(req,res) => {
   
        let data = req.body
       let machineid = toString(data.machine)
       
        console.log("daaataaa",data)
        try {
            let pool = await sql.connect(config)
                   await pool.request()
                   .output("ComplaintID",sql.BigInt,)
                   .input("LineCode",sql.NVarChar,data.line)
                   .input("MachineId",sql.NVarChar,data.machineid)
                   .input("DepartmentKey",sql.NVarChar,data.department)
                   .input("UserId",sql.NVarChar,data.user)
                   .input("Tag",sql.NVarChar,data.tag)
                   .input("Comment",sql.NVarChar,data.comment)
                   .input("Status",sql.NVarChar,data.status)
                   .input("Comments",sql.NVarChar,data.comments)
                   .execute("spInsertComplaints")
                   .then(result => {
                   
                    res.json(result);
        
        
                })
      
             
            
        } catch (error) {
            console.log(error)
        }
        }

        const saveComplaintData = async(req,res) => {
   
            let data = req.body
           let machineid = toString(data.machine)
           
            console.log("saveComplaintData",data)
            try {
                let pool = await sql.connect(config)
                       await pool.request()
                     
                       .input("LineCode",sql.NVarChar,data.line)
                       .input("MachineId",sql.NVarChar,data.machineid)
                       .input("DepartmentKey",sql.NVarChar,data.department)
                       .input("UserId",sql.NVarChar,data.user)
                       .input("Tag",sql.NVarChar,data.tag)
                       .input("Comment",sql.NVarChar,data.comment)
                       .input("Status",sql.NVarChar,data.status)
                       .input("Comments",sql.NVarChar,data.comments)
                       .input("ComplaintID",sql.NVarChar,data.complaintID)
                       .execute("spInsertComplaints")
                       .then(result => {
                       
                        res.json(result);
            
            
                    })
          
                 
                
            } catch (error) {
                console.log(error)
            }
            }
        
    // const getComplaintId = async(req,res) => {
   
    //     let data = req.body
    //    let machineid = toString(data.machine)
    //    let cmId = ""
    //     console.log("daaataaa",data)
    //     try {
    //         let pool = await sql.connect(config)
    //                await pool.request()
    //                .output("ComplaintID",sql.BigInt,cmId)
                 
    //                .execute("spInsertComplaints")
    //                .then(result => {
                   
    //                 res.json(result);
        
        
    //             })
      
               
            
    //     } catch (error) {
    //         console.log(error)
    //     }
    //     }


    const exportComplaintData = async(req,res) => {
   
        let data = req.body
        console.log("exportComplaintData",data)
       //   let machineid = data.machine.toString()
     
      
        try {
            let pool = await sql.connect(config)
                   await pool.request()
                 
                   .input("LineCode",sql.NVarChar,data.line)
                   .input("MachineId",sql.NVarChar,data.machine)
                   .input("DepartmentKey",sql.NVarChar,data.department)
                   .input("Status",sql.NVarChar,data.status)
                   .input("StartDate",sql.NVarChar,data.startdate)
                   .input("EndDate",sql.NVarChar,data.enddate)
                   .execute("spExportComplaints")
                   .then(result => {
                   
                    res.json(result.recordsets[1]);
        
        
                })
      
             
            
        } catch (error) {
            console.log(error)
        }
        }

module.exports = {
    getUserList,
    getMachineList,
    
    getComplaintData,
    getDepartmentList,
    saveComplaintData,
    getComplaintStatus,
    insertComplaintData,
    exportComplaintData,
 
}