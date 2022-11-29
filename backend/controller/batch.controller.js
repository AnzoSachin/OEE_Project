var config = require('../dbconfig')
const sql = require('mssql');

const getBatchNameList=async(req,res)=> {
    try {
        let pool = await sql.connect(config);
        let line = await pool.request()
                      .execute('spGetBatchName')
        let data=line.recordsets;
        
        res.json(data[0]);
    }
    catch (error) {
        console.log(error);
    }
}
const getMixerList=async(req,res)=> {
    try {
        let pool = await sql.connect(config);
        let line = await pool.request()
                      .execute('spGetMixer')
        let data=line.recordsets;
        
        res.json(data[0]);
    }
    catch (error) {
        console.log(error);
    }
}

const getPGList=async(req,res)=> {
    try {
        let pool = await sql.connect(config);
        let line = await pool.request()
                      .execute('spGetPGL')
        let data=line.recordsets;
        
        res.json(data[0]);
    }
    catch (error) {
        console.log(error);
    }
}



const getContainerSize = async(req,res) => {
   
    let data = req.body
    let line = "202"
    console.log("daaataaa",data)
    try {
        let pool = await sql.connect(config)
               await pool.request()
               .input("LineCode",sql.NVarChar,line)
               .execute("spGetContainer")
               .then(result => {
              //  console.log("result",result)
                res.json(result);
    
    
            })
        
    } catch (error) {
        console.log(error)
    }
    }

    
const getBatchList = async(req,res) => {
   
    let data = req.body
    console.log("daaataaa",data)
    try {
        let pool = await sql.connect(config)
               await pool.request()
               .input("LineCode",sql.NVarChar,data.line)
               .execute("spGetBatches")
               .then(result => {
              //  console.log("result",result)
                res.json(result);
    
    
            })
        
    } catch (error) {
        console.log(error)
    }
    }
    const addBatch = async(req,res) => {
   
        let data = req.body
        let containerCode = data.container.toString()
      //  let BatchStartTime = new Date(data.BatchStartTime);
        console.log("daaataaa",data)
        try {
            let pool = await sql.connect(config)
                   await pool.request()
                   .input("LineCode",sql.NVarChar,data.line)
                   .input("FlavourSizeCode",sql.NVarChar,containerCode)
                   .input("BatchStartTime",sql.NVarChar,data.BatchStartTime)
                   .input("BatchName",sql.NVarChar,data.product)
                   .input("Mixer",sql.NVarChar,data.mixer)
                   .input("PGLNo",sql.NVarChar,data.pgl)
                   .input("BatchCode",sql.NVarChar,data.batchNo)
                   .input("SKU",sql.NVarChar,data.sku)
                   .input("PONo",sql.NVarChar,data.poNo)
                   .output("ErrMsg",sql.NVarChar)
                   .execute("spInsertBatchInfo")
                   .then(result => {
                  //  console.log("result",result)
                  res.status(200).json(
                    { 
                        result:result,
                        success:true,
                        message:"Batch added Successfully"
                    }  )
                  
        
        
                })
            
        } catch (error) {
            console.log(error)
        }
        }

        const updateBatch = async(req,res) => {
           let data = req.body
            console.log("daaataaa",data)
            let startdate = new Date(data.StartDate);
            let enddate= new Date(data.EndDate)
            console.log("startdate",startdate)
            try {
                let pool = await sql.connect(config)
                       await pool.request()
                       .input("BatchId",sql.NVarChar,data.batchid)
                       .input("BatchStartTime",sql.DateTime,startdate)
                       .input("BatchStopTime",sql.DateTime,enddate)
                       .execute("spUpdateBatchTime")
                       .then(result => {
                      //  console.log("result",result)
                        res.json(result);
            
            
                    })
                
            } catch (error) {
                console.log(error)
            }
            }
            
        const stopBatch = async(req,res) => {
            let data = req.body
             console.log("daaataaa",data)
           //  const dateTime = moment().format('YYYY-MM-DDTHH:mm:ss.SSS000');
           //  let stopdate= new Date(data.stoptimedate)
           ///  const dateTime = moment(data.stoptimedate).format('YYYY-MM-DDTHH:mm:ss.SSS000');
        //     console.log("stopdate",stopdate)
             try {
                 let pool = await sql.connect(config)
                        await pool.request()
                        .input("BatchId",sql.NVarChar,data.batchid)
                        .input("BatchStopTime",sql.DateTime,data.stoptimedate)
                        .execute("spUpdateBatchInfo")
                        .then(result => {
                       //  console.log("result",result)
                         res.json(result);
             
             
                     })
                 
             } catch (error) {
                 console.log(error)
             }
             }



module.exports = {
    addBatch,
    stopBatch,
    getPGList,
    updateBatch,
    getMixerList,
    getBatchList,
    getContainerSize,
    getBatchNameList,
}