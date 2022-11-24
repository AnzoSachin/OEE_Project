var config = require('../dbconfig')
const sql = require('mssql');



                
const getUsers = async(req,res) => {
   
    
        try {
            let pool = await sql.connect(config)
                   await pool.request()
                   .execute("spGetUsers")
                   .then(result => {
                   console.log("result",result)
                    res.json(result.recordset);
                    console.log(result)
           })
        } catch (error) {
            console.log(error)
        }
        }
                
const getData = async(req,res) => {
    let data = req.body
      console.log("getData",data)
        try {
            let pool = await sql.connect(config)
                   await pool.request()
                 
                   .input("LineNumber",sql.NVarChar,data.line)
                   .input("StartDate",sql.DateTime,data.startdate)
                   .input("EndDate",sql.DateTime,data.enddate)
                  
                  
                   .execute("spGetFailureReasonsForDates")
                   .then(result => {
                   
                    res.json(result);
           })
        } catch (error) {
            console.log(error)
        }
        }

                 
const getChildData = async(req,res) => {
    let data = req.body
      console.log("getChildData",data)
      let reasonId = data.reasonId.toString()
        try {
            let pool = await sql.connect(config)
                   await pool.request()
                 
                   .input("LineNumber",sql.NVarChar,data.line) 
                   .input("StartDate",sql.DateTime,data.startdate)
                   .input("EndDate",sql.DateTime,data.enddate)
                   .input("MainReasonIDFromUI",sql.NVarChar,reasonId)
                  
                  
                   .execute("spGetProcessWiseBreakDownDetails")
                   .then(result => {
                       console.log(" getChildData result",result)
                    res.json(result.recordset);
        
        
                })
      
             
            
        } catch (error) {
            console.log(error)
        }
        }
                
const getOEETrendChartData = async(req,res) => {
    let data = req.body
      console.log("getData",data)
        try {
            let pool = await sql.connect(config)
                   await pool.request()
                 
                   .input("LineCode",sql.NVarChar,data.line)
                   .input("StartDate",sql.DateTime,data.startdate)
                   .input("EndDate",sql.DateTime,data.enddate)
                  
                  
                   .execute("spGetEfficiencyValueForDate")
                   .then(result => {
                   
                    res.json(result);
        
        
                })
      
             
            
        } catch (error) {
            console.log(error)
        }
        }
        const getBreakDownTrendTableData = async(req,res) => {
            let data = req.body
              console.log("getData",data)
                try {
                    let pool = await sql.connect(config)
                           await pool.request()
                         
                           .input("LineNumber",sql.NVarChar,data.line)
                           .input("StartDate",sql.DateTime,data.startdate)
                           .input("EndDate",sql.DateTime,data.enddate)
                          
                          
                           .execute("spGetFailureReasonsWithIDForDates")
                           .then(result => {
                           
                            res.json(result);
                
                
                        })
              
                     
                    
                } catch (error) {
                    console.log(error)
                }
                }

                const getBreakDownTrendChartData = async(req,res) => {
                    let data = req.body
                      console.log("getBreakDownTrendChartData",data)
                        try {
                            let pool = await sql.connect(config)
                                   await pool.request()
                                 
                                   .input("LineNumber",sql.NVarChar,data.line)
                                   .input("StartDate",sql.DateTime,data.startdate)
                                   .input("EndDate",sql.DateTime,data.enddate)
                                   .input("BreakingProcessID",sql.Int,data.processId)
                                   .input("BreakingReasonID",sql.Int,data.reasonId)
                                  
                                  
                                   .execute("spGetBreakDownReasonTrend")
                                   .then(result => {
                                   
                                    res.json(result);
                        
                        
                                })
                      
                             
                            
                        } catch (error) {
                            console.log(error)
                        }
                        }
                        const getredTagAndWhiteTagStatus = async(req,res) => {
                            let data = req.body
                              console.log("getData",data)
                                try {
                                    let pool = await sql.connect(config)
                                           await pool.request()
                                         
                                           .input("LineNumber",sql.NVarChar,data.line)
                                           .input("StartDate",sql.DateTime,data.startdate)
                                           .input("EndDate",sql.DateTime,data.enddate)
                                          
                                          
                                           .execute("spGetRedAndWhiteTagCount")
                                           .then(result => {
                                           
                                            res.json(result.recordsets[0]);
                                           // res.json(result.recordsets[0]);
                                
                                
                                        })
                              
                                     
                                    
                                } catch (error) {
                                    console.log(error)
                                }
                                }
                                const getredTagAndWhiteTagStatusByEmp = async(req,res) => {
                                    let data = req.body
                                      console.log("getData",data)
                                        try {
                                            let pool = await sql.connect(config)
                                                   await pool.request()
                                                 
                                                   .input("LineNumber",sql.NVarChar,data.line)
                                                   .input("StartDate",sql.DateTime,data.startdate)
                                                   .input("EndDate",sql.DateTime,data.enddate)
                                                  
                                                  
                                                   .execute("spGetFugaiDetailsByEmployee")
                                                   .then(result => {
                                                   
                                                    res.json(result.recordsets[0]);
                                        
                                        
                                                })
                                      
                                             
                                            
                                        } catch (error) {
                                            console.log(error)
                                        }
                                        }

                                        const getredTagWhiteTagEmployee = async(req,res) => {
                                            let data = req.body
                                              console.log("getData",data)
                                                try {
                                                    let pool = await sql.connect(config)
                                                           await pool.request()
                                                         
                                                           .input("EmployeeNumber",sql.NVarChar,data.employee)
                                                           .input("StartDate",sql.DateTime,data.startdate)
                                                           .input("EndDate",sql.DateTime,data.enddate)
                                                          
                                                          
                                                           .execute("spGetFugaiDetailsByEmployeeForReport")
                                                           .then(result => {
                                                              
                                                            res.json(result.recordsets[0]);
                                                
                                                
                                                        })
                                              
                                                     
                                                    
                                                } catch (error) {
                                                    console.log(error)
                                                }
                                                }
                        

        module.exports = {
            getData,
            getUsers,
            getChildData,
            getOEETrendChartData,
            getredTagWhiteTagEmployee,
            getBreakDownTrendTableData,
            getBreakDownTrendChartData,
            getredTagAndWhiteTagStatus,
            getredTagAndWhiteTagStatusByEmp,
        }