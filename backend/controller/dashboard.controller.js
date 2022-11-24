//var config = require('../dbconfig');
var config = require('../dbconfig')
const sql = require('mssql');

const getLine=async(req,res)=> {
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

const getshift=async(req,res)=>{
    try {
        let pool = await sql.connect(config);
        let shift = await pool.request().execute('spGetShifts')
        let data = shift.recordsets;
        res.json(data[0]);


        
    } catch (error) {
        console.log(error)
    }
}

const getblock=async(req,res)=> {
    try {
        let pool = await sql.connect(config);
        let block = await pool.request()
                      .execute('spGetBlock')
        let data=block.recordsets;
        
        res.json(data[0]);
    }
    catch (error) {
        console.log(error);
    }
}

const getCurrentLineStatus=async(req,res)=> {
    try {
        let pool = await sql.connect(config);
        let line = await pool.request()
                      .execute('getLineCurrentStatus')
        let data=line.recordsets;
        
        res.json(data[0]);
    }
    catch (error) {
        console.log(error);
    }
}
const getChartData=async(req,res)=>{
    let data = req.body
    console.log("data----",data)
    try {
        let pool = await sql.connect(config);
            await pool.request()
            .input('LineNumber', sql.NVarChar, data.selectedLine)
            .input('SelectedDate', sql.NVarChar, data.date)
            .input('Shift', sql.NVarChar, data.selectedShift)
            .execute('spGetLineData')
            .then(result => {
                res.json(result.recordset[0]);


            }
            )
      


        
    } catch (error) {
        console.log(error)
    }
}
const getPieChartData=async(req,res)=>{
    let data = req.body
    console.log("data----",data)
    try {
        let pool = await sql.connect(config);
            await pool.request()
            .input('LineNumber', sql.NVarChar, data.selectedLine)
            .input('SelectedDate', sql.NVarChar, data.date)
            .input('Shift', sql.NVarChar, data.selectedShift)
            .execute('spGetFailureReasons')
            .then(result => {
                res.json(result.recordset);


            }
            )
      


        
    } catch (error) {
        console.log(error)
    }
}
const getGridData=async(req,res)=>{
    let data = req.body
    console.log("data----",data)
    try {
        let pool = await sql.connect(config);
            await pool.request()
            .input('LineNumber', sql.NVarChar, data.selectedLine)
            .input('SelectedDate', sql.NVarChar, data.date)
            .input('Shift', sql.NVarChar, data.selectedShift)
            .execute('spGetFailureReasonsWithTime')
            .then(result => {
                res.json(result.recordset);


            }
            )
      


        
    } catch (error) {
        console.log(error)
    }
}

const getLineBreakageTimmings=async(req,res)=>{
    let data = req.body
    
    try {
        let pool = await sql.connect(config);
            await pool.request()
            .input('LineNumber', sql.NVarChar, data.selectedLine)
            .input('SelectedDate', sql.NVarChar, data.date)
            .input('Shift', sql.NVarChar, data.selectedShift)
            .execute('spGetLineBreakageTimings')
            .then(result => {
                res.json(result.recordsets);


            }
            )
      


        
    } catch (error) {
        console.log(error)
    }
}
const getLabelsData=async(req,res)=>{
    let data = req.body
    
    try {
        let pool = await sql.connect(config);
            await pool.request()
            .input('LineCode', sql.NVarChar, data.selectedLine)
            .input('SelectedDate', sql.NVarChar, data.date)
            .input('Shift', sql.NVarChar, data.selectedShift)
            .execute('getDashboardData')
            .then(result => {
               
                res.json(result);


            }
            )
      


        
    } catch (error) {
        console.log(error)
    }
}
const getOEETrendData=async(req,res)=>{
    let data = req.body
    
    try {
        let pool = await sql.connect(config);
            await pool.request()
            .input('LineNumber', sql.NVarChar, data.selectedLine)
            .input('SelectedDate', sql.NVarChar, data.date)
            .input('Shift', sql.NVarChar, data.selectedShift)
            .execute('spGetOEETrendforDashBoard')
            .then(result => {
                res.json(result.recordset);


            }
            )
       } catch (error) {
        console.log(error)
    }
}
const getComplainData=async(req,res)=>{
    let data = req.body
    
    try {
        let pool = await sql.connect(config);
            await pool.request()
            .input('LineNumber', sql.NVarChar, data.selectedLine)
            .input('SelectedDate', sql.NVarChar, data.date)
            .input('Shift', sql.NVarChar, data.selectedShift)
            .execute('getComplaintsDataForReport')
            .then(result => {
                console.log("getOEETrendData----",result)
                res.status(200).json(
                    {
                        result: result,
                        success: true,
                        message: ""
                    })


            }
            )
      


        
    } catch (error) {
        console.log(error)
    }
}

const getLineDetails=async(req,res)=>{
    let data = req.body
    
    try {
        let pool = await sql.connect(config);
            await pool.request()
            .input('BlockKey', sql.NVarChar, data.selectedBlock)
            .input('SelectedDate', sql.NVarChar, data.date)
            .input('Shift', sql.NVarChar, data.selectedShift)
            .execute('getCombinedDashboardData')
            .then(result => {
                console.log("getLineDetails",result.recordset)
                res.json(result.recordset);


            }
            )
       } catch (error) {
        console.log(error)
    }
}


module.exports = {
    getLine,
    getshift,
    getblock,
    getGridData,
    getChartData,
    getLabelsData,
    getLineDetails,
    getComplainData,
    getPieChartData,
    getOEETrendData,
    getCurrentLineStatus,
    getLineBreakageTimmings
}

//spGetShifts