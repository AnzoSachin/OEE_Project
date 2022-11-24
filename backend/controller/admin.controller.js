var config = require('../dbconfig')
let express = require('express');
const sql = require('mssql');
let app = express();
//var fs = require("fs");
const upload = require('express-fileupload')

const { application } = require('express');
app.use(upload())


const getuserRole=async(req,res)=> {
    try {
        let pool = await sql.connect(config);
        let line = await pool.request()
                      .execute('spGetUserRoles')
        let data=line.recordsets;
        
        res.json(data[0]);
    }
    catch (error) {
        console.log(error);
    }
}
const getShift=async(req,res)=> {
    try {
        let pool = await sql.connect(config);
        let line = await pool.request()
                      .execute('spGetShift')
        let data=line.recordsets;
        
        res.json(data[0]);
    }
    catch (error) {
        console.log(error);
    }
}
const getLineType=async(req,res)=> {
    try {
        let pool = await sql.connect(config);
        let line = await pool.request()
                      .execute('spGetLine')
        let data=line.recordsets;
        
        res.json(data[0]);
    }
    catch (error) {
        console.log(error);
    }
}
const getManageAlert=async(req,res)=> {
    try {
        let pool = await sql.connect(config);
        let line = await pool.request()
                      .execute('spGetAlert')
        let data=line.recordsets;
        
        res.json(data[0]);
    }
    catch (error) {
        console.log(error);
    }
}
const getShutDownDetails=async(req,res)=> {
    try {
        let pool = await sql.connect(config);
        let line = await pool.request()
                      .execute('spGetCalendarShutdownDetail')
        let data=line.recordsets;
        
        res.json(data[0]);
    }
    catch (error) {
        console.log(error);
    }
}
const getShutDownReason=async(req,res)=> {
    try {
        let pool = await sql.connect(config);
        let line = await pool.request()
                      .execute('spGetPlannedShutDownReason')
        let data=line.recordsets;
        
        res.json(data[0]);
    }
    catch (error) {
        console.log(error);
    }
}
const getuserList=async(req,res)=> {
    try {
        let pool = await sql.connect(config);
        let line = await pool.request()
                      .execute('spGetUserList')
        let data=line.recordsets;
        
        res.json(data[0]);
    }
    catch (error) {
        console.log(error);
    }
}
const getFileCategoryList=async(req,res)=> {
    try {
        let pool = await sql.connect(config);
        let line = await pool.request()
                      .execute('spGetFileCategory')
        let data=line.recordsets;
        
        res.json(data[0]);
    }
    catch (error) {
        console.log(error);
    }
}

const addUser = async(req,res) => {
   
    let data = req.body
  
 
    console.log("addUser",data)
    try {
        let pool = await sql.connect(config)
               await pool.request()
             
               .input("UserName",sql.NVarChar,data.username)
               .input("UserId",sql.NVarChar,data.userid)
               .input("Pass",sql.NVarChar,data.password)
               .input("Role",sql.NVarChar,data.userR)
               .input("EmailId",sql.NVarChar,data.emailId)
               .input("IsActive",sql.NVarChar,data.isactive)
               .output("ErrorMsg",sql.NVarChar,)
               .execute("spAddUser")
               .then(result => {
               
                res.json(result);
    
    
            })
  
         
        
    } catch (error) {
        console.log(error)
    }
    }

    
const saveCalendar = async(req,res) => {
   
    let data = req.body
    let allL = data.line ? data.line.toString() : data.alllines.toString()
    let allS = data.shift ? data.shift.toString() : data.allshift.toString()
    let active = data.isactive === 'Y' ? 'Y' :'N'
    console.log("allL",allL)
 
    console.log("saveCalendar",data)
    try {
        let pool = await sql.connect(config)
               await pool.request()
             
               .input("ReportType",sql.NVarChar,data.report)
               .input("ResonCode",sql.NVarChar,data.reason)
               .input("LineIds",sql.NVarChar,allL)
               .input("SelectDate",sql.NVarChar,data.selectdate)
               .input("Shift",sql.NVarChar,allS)
               .input("Comment",sql.NVarChar,data.comment)
               .input("IsActive",sql.NVarChar,active)
               .input("Action",sql.NVarChar,data.Action)
               .output("ErrMsg",sql.NVarChar,)
               .execute("spAddUpdateCalendarShutdown")
               .then(result => {
               
                res.json(result);
    
    
            })
  
         
        
    } catch (error) {
        console.log(error)
    }
    }

    const UploadFile = async(req,res) => {
        let data = req.body
        console.log("daratata",data)
        let fileEx = '.xlsx'
    let file  = req.files
    console.log("filesss",file)
    console.log("fileSize",file.uloadFile.size)
    console.log("filename",file.uloadFile.name)
    console.log("mimetype",file.uloadFile.mimetype)
    console.log("FileContent",file.uloadFile.data)
         try {
            let pool = await sql.connect(config)
                   await pool.request()
                 
                   .input("FileName",sql.NVarChar,file.uloadFile.name)
                   .input("FileExtn",sql.NVarChar,fileEx)
                   .input("MimeType",sql.NVarChar,file.uloadFile.mimetype)
                   .input("FileContent",sql.VarBinary,file.uloadFile.data)
                   .input("FileSize",sql.Float,file.uloadFile.size)
                   .input("FileCategory",sql.NVarChar,data.FileType)
                   .input("Description",sql.NVarChar,data.Comment)  
                  
                   .execute("spUploadFile")
                   .then(result => {
                   
                    res.json(result);
        
        
               })
      
             
            
        } catch (error) {
            console.log(error)
        }
        }

        const saveMachine = async(req,res) => {
            let data = req.body
              console.log("saveMachine",data)
                try {
                    let pool = await sql.connect(config)
                           await pool.request()
                         
                           .input("Block",sql.NVarChar,data.line)
                           .input("MachineName",sql.NVarChar,data.machineprocess)
                           .input("Action",sql.NVarChar,data.action)
                           .input("IsActive",sql.NVarChar,data.Isactive)
                           .output("ErrMsg",sql.NVarChar,)
                          
                           .execute("spAddUpdateMachine")
                           .then(result => {
                           
                            res.json(result);
                
                
                        })
              
                     
                    
                } catch (error) {
                    console.log(error)
                }
                }

                
        const updateMachine = async(req,res) => {
            let data = req.body
              console.log("updateMachine",data)
                try {
                    let pool = await sql.connect(config)
                           await pool.request()
                         
                           .input("Block",sql.NVarChar,data.line)
                           .input("MachineName",sql.NVarChar,data.machineprocess)
                           .input("Action",sql.NVarChar,data.action)
                           .input("IsActive",sql.NVarChar,data.Isactive)
                           .output("ErrMsg",sql.NVarChar,)
                          
                           .execute("spAddUpdateMachine")
                           .then(result => {
                           
                            res.json(result);
                
                
                        })
              
                     
                    
                } catch (error) {
                    console.log(error)
                }
                }
                
        const allMachine = async(req,res) => {
            let data = req.body
              console.log("allMachine",data)
                try {
                    let pool = await sql.connect(config)
                           await pool.request()
                           .execute('spGetAllMachine')
                           .then(result => {
                           
                            res.json(result);
                
                
                        })
              
                     
                    
                } catch (error) {
                    console.log(error)
                }
                }
               var save=0; 
               const sav =async(sav)=>{
                let filname = "abc"
                let fileex = "xls"
                let filesize = 15779
                let filecategory = "OPL"
                let discription = "swadd"
                let mimtype = "hdhh"
                let pool = await sql.connect(config)
                await pool.request()
                .input("FileName",sql.NVarChar,filname)
                .input("FileExtn",sql.NVarChar,fileex)
                .input("FileContent",sql.VarBinary,sav)
                .input("FileSize",sql.Float,filesize)
                .input("FileCategory",sql.NVarChar,filecategory)
                .input("Description",sql.NVarChar,discription)  
                .input("MimeType",sql.NVarChar,mimtype)
               
                .execute("spUploadFile")
                .then(result => {
                
                // res.json(result);
               })

            }

        const UploadFile1 = async(req,res) => {
            let data = req.files
            console.log("UploadFile1 for test",data)
                try {
                    let pool = await sql.connect(config)
                           await pool.request()
                        //    .input("FileName",sql.NVarChar,"abc")
                        //    .input("FileExtn",sql.NVarChar,"xls")
                        //    .input("FileContent",sql.VarBinary,new Buffer.alloc(data.fileContent,'base64').toString('hex'))
                        //    .input("FileSize",sql.Float,15779)
                        //    .input("FileCategory",sql.NVarChar,"OPL")
                        //    .input("Description",sql.NVarChar,"asdsdsdsdsd")  
                        //    .execute("spUploadFile1")
                        //    .then(result => {
                        //   console.log(result.recordsets[0][0].FileContent)
                        //     res.json(result.recordsets[0]);
                        //     save=result.recordsets[0][0].FileContent
                        //    sav(save)
                
                
                        // })
              
             } catch (error) {
                    console.log(error)
                }
                }

module.exports = {
    addUser,
    getShift,
    UploadFile,
    allMachine,
    getLineType,
    UploadFile1,
    getuserRole,
    getuserList,
    saveMachine,
    saveCalendar,
    updateMachine,
    getManageAlert,
    getShutDownReason,
    getShutDownDetails,
    getFileCategoryList
}