var config = require('../dbconfig')
let express = require('express');
const sql = require('mssql');
let app = express();
//var fs = require("fs");
const upload = require('express-fileupload')

const { application } = require('express');
app.use(upload())


const getuserRole = async (req, res) => {
    try {
        let pool = await sql.connect(config);
        let line = await pool.request()
            .execute('spGetUserRoles')
        let data = line.recordsets;

        res.json(data[0]);
    }
    catch (error) {
        console.log(error);
    }
}
const getShift = async (req, res) => {
    try {
        let pool = await sql.connect(config);
        let line = await pool.request()
            .execute('spGetShift')
        let data = line.recordsets;

        res.json(data[0]);
    }
    catch (error) {
        console.log(error);
    }
}
const getLineType = async (req, res) => {
    try {
        let pool = await sql.connect(config);
        let line = await pool.request()
            .execute('spGetLine')
        let data = line.recordsets;

        res.json(data[0]);
    }
    catch (error) {
        console.log(error);
    }
}
const getManageAlert = async (req, res) => {
    try {
        let pool = await sql.connect(config);
        let line = await pool.request()
            .execute('spGetAlert')
        let data = line.recordsets;

        res.json(data[0]);
    }
    catch (error) {
        console.log(error);
    }
}
const getShutDownDetails = async (req, res) => {
    try {
        let pool = await sql.connect(config);
        let line = await pool.request()
            .execute('spGetCalendarShutdownDetail')
        let data = line.recordsets;

        res.json(data[0]);
    }
    catch (error) {
        console.log(error);
    }
}
const getShutDownReason = async (req, res) => {
    try {
        let pool = await sql.connect(config);
        let line = await pool.request()
            .execute('spGetPlannedShutDownReason')
        let data = line.recordsets;

        res.json(data[0]);
    }
    catch (error) {
        console.log(error);
    }
}
const getuserList = async (req, res) => {
    try {
        let pool = await sql.connect(config);
        let line = await pool.request()
            .execute('spGetUserList')
        let data = line.recordsets;

        res.json(data[0]);
    }
    catch (error) {
        console.log(error);
    }
}

const getFileCategoryList = async (req, res) => {
    try {
        let pool = await sql.connect(config);
        let line = await pool.request()
            .execute('spGetFileCategory')
        let data = line.recordsets;

        res.json(data[0]);
    }
    catch (error) {
        console.log(error);
    }
}

const addUser = async (req, res) => {

    let data = req.body


    console.log("addUser", data)
    try {
        let pool = await sql.connect(config)
        await pool.request()

            .input("UserName", sql.NVarChar, data.username)
            .input("UserId", sql.NVarChar, data.userid)
            .input("Pass", sql.NVarChar, data.password)
            .input("Role", sql.NVarChar, data.userR)
            .input("EmailId", sql.NVarChar, data.emailId)
            .input("IsActive", sql.NVarChar, data.isactive)
            .output("ErrorMsg", sql.NVarChar,)
            .execute("spAddUser")
            .then(result => {

                res.json(result);


            })



    } catch (error) {
        console.log(error)
    }
}

const updateUser = async (req, res) => {

    let data = req.body


    console.log("updateUser", data)
    try {
        let pool = await sql.connect(config)
        await pool.request()

            .input("UserName", sql.NVarChar, data.username)
            .input("UserId", sql.NVarChar, data.userid)
            .input("Pass", sql.NVarChar, data.password)
            .input("Role", sql.NVarChar, data.userR)
            .input("EmailId", sql.NVarChar, data.emailId)
            .input("IsActive", sql.NVarChar, data.isactive)
            .output("ErrorMsg", sql.NVarChar,)
            .execute("spAddUser")
            .then(result => {

                res.json(result);


            })



    } catch (error) {
        console.log(error)
    }
}

const saveCalendar = async (req, res) => {

    let data = req.body
    let allL = data.line ? data.line.toString() : data.alllines.toString()
    let allS = data.shift ? data.shift.toString() : data.allshift.toString()
    let active = data.isactive === 'Y' ? 'Y' : 'N'
    console.log("allL", allL)

    console.log("saveCalendar", data)
    try {
        let pool = await sql.connect(config)
        await pool.request()

            .input("ReportType", sql.NVarChar, data.report)
            .input("ResonCode", sql.NVarChar, data.reason)
            .input("LineIds", sql.NVarChar, allL)
            .input("SelectDate", sql.NVarChar, data.selectdate)
            .input("Shift", sql.NVarChar, allS)
            .input("Comment", sql.NVarChar, data.comment)
            .input("IsActive", sql.NVarChar, active)
            .input("Action", sql.NVarChar, data.Action)
            .output("ErrMsg", sql.NVarChar,)
            .execute("spAddUpdateCalendarShutdown")
            .then(result => {

                res.json(result);


            })



    } catch (error) {
        console.log(error)
    }
}

const UploadFile = async (req, res) => {
    let data = req.body
    console.log("daratata", data)
    let fileEx = '.xlsx'
    let file = req.files
    console.log("filesss", file)
    console.log("fileSize", file.uploadFile.size)
    console.log("filename", file.uploadFile.name)
    console.log("mimetype", file.uploadFile.mimetype)
    console.log("FileContent", file.uploadFile.data)
    try {
        let pool = await sql.connect(config)
        await pool.request()

            .input("FileName", sql.NVarChar, file.uploadFile.name)
            .input("FileExtn", sql.NVarChar, fileEx)
            .input("MimeType", sql.NVarChar, file.uploadFile.mimetype)
            .input("FileContent", sql.VarBinary, file.uploadFile.data)
            .input("FileSize", sql.Float, file.uploadFile.size)
            .input("FileCategory", sql.NVarChar, data.FileType)
            .input("Description", sql.NVarChar, data.Comment)

            .execute("spUploadFile")
            .then(result => {

                res.json(result);


            })



    } catch (error) {
        console.log(error)
    }
}

const saveMachine = async (req, res) => {
    let data = req.body
    console.log("saveMachine", data)
    try {
        let pool = await sql.connect(config)
        await pool.request()

            .input("Block", sql.NVarChar, data.line)
            .input("MachineName", sql.NVarChar, data.machineprocess)
            .input("Action", sql.NVarChar, data.action)
            .input("IsActive", sql.NVarChar, data.Isactive)
            .output("ErrMsg", sql.NVarChar,)

            .execute("spAddUpdateMachine")
            .then(result => {

                res.json(result);


            })



    } catch (error) {
        console.log(error)
    }
}


const updateMachine = async (req, res) => {
    let data = req.body
    console.log("updateMachine", data)
    try {
        let pool = await sql.connect(config)
        await pool.request()

            .input("Block", sql.NVarChar, data.line)
            .input("MachineName", sql.NVarChar, data.machineprocess)
            .input("Action", sql.NVarChar, data.action)
            .input("IsActive", sql.NVarChar, data.Isactive)
            .output("ErrMsg", sql.NVarChar,)

            .execute("spAddUpdateMachine")
            .then(result => {

                res.json(result);


            })



    } catch (error) {
        console.log(error)
    }
}

const allMachine = async (req, res) => {
    let data = req.body
    console.log("allMachine", data)
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


var save = 0;
const sav = async (sav) => {
    let filname = "abc"
    let fileex = "xls"
    let filesize = 15779
    let filecategory = "OPL"
    let discription = "swadd"
    let mimtype = "hdhh"
    let pool = await sql.connect(config)
    await pool.request()
        .input("FileName", sql.NVarChar, filname)
        .input("FileExtn", sql.NVarChar, fileex)
        .input("FileContent", sql.VarBinary, sav)
        .input("FileSize", sql.Float, filesize)
        .input("FileCategory", sql.NVarChar, filecategory)
        .input("Description", sql.NVarChar, discription)
        .input("MimeType", sql.NVarChar, mimtype)

        .execute("spUploadFile")
        .then(result => {

            // res.json(result);
        })

}

const UploadFile1 = async (req, res) => {
    let data = req.files
    console.log("UploadFile1 for test", data)
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

const machinedata = async (req, res) => {
    let data = req.body
    console.log("machinedata", data)
    try {
        let pool = await sql.connect(config)
        await pool.request()
            .execute('spMachines')
            .then(result => {
                res.json(result);
            })
    } catch (error) {
        console.log(error)
    }
}
const addFault = async (req, res) => {
    let data = req.body
    console.log("addFault", data)
    try {
        let pool = await sql.connect(config)
        await pool.request()
            .input("Fault", sql.NVarChar, data.fault)
            .input("FaultId", sql.Int, data.faultid)
            .input("MachineId", sql.Int, data.machineid)
            .input("IsPlanned", sql.NVarChar, data.isplanned)
            .input("PlannedDuration", sql.NVarChar, data.plannedduration)
            .input("IsActive", sql.NVarChar, data.isactive)
            .input("Action", sql.NVarChar, data.action)
            .output("ErrMsg", sql.NVarChar,)
            .execute("spAddUpdateFault")
            .then(result => {
                res.json(result);
            })
    } catch (error) {
        console.log(error)
    }
}


const updateFault = async (req, res) => {
    let data = req.body
    console.log("updateFault", data)
    try {
        let pool = await sql.connect(config)
        await pool.request()
            .input("Fault", sql.NVarChar, data.fault)
            .input("FaultId", sql.Int, data.faultid)
            .input("MachineId", sql.Int, data.machineid)
            .input("IsPlanned", sql.NVarChar, data.isplanned)
            .input("PlannedDuration", sql.NVarChar, data.plannedduration)
            .input("IsActive", sql.NVarChar, data.isactive)
            .input("Action", sql.NVarChar, data.action)
            .output("ErrMsg", sql.NVarChar,)
            .execute("spAddUpdateFault")
            .then(result => {
                res.json(result);
            })
    } catch (error) {
        console.log(error)
    }
}
const getfaultList = async (req, res) => {
    let data = req.body
    console.log("getfaultList", data)

    try {
        let pool = await sql.connect(config);
        let line = await pool.request()
            .execute('spGetMachineFaultDetail')
        let data = line.recordsets;

        res.json(data[0]);
    }
    catch (error) {
        console.log(error);
    }
}



const getfaultList1 = async (req, res) => {
    let data = req.body
    console.log("getfaultList", data)

    try {
        let pool = await sql.connect(config);
        let line = await pool.request()
            .input("MachineCode", sql.NVarChar, data.line)
            .execute('spGetMachineFaultDetail')
        let data1 = line.recordsets;

        res.json(data1[0]);
    }
    catch (error) {
        console.log(error);
    }
}

const updateAlert = async (req, res) => {
    let data = req.body
    let ID = data.id.toString()
    console.log("updateAlert", data)
    try {
        let pool = await sql.connect(config)
        await pool.request()
            .input("Id", sql.NVarChar, ID)
            .input("Sender", sql.NVarChar, data.sender)
            .input("Escalation", sql.NVarChar, data.escaltion1)
            .input("EscalationTime", sql.NVarChar, data.time1)
            .input("Escalation2", sql.NVarChar, data.escaltion2)
            .input("EscalationTime2", sql.NVarChar, data.time2)
            .input("Escalation3", sql.NVarChar, data.escaltion3)
            .input("EscalationTime3", sql.NVarChar, data.time3)
            .input("IsActive", sql.NVarChar, data.IsActive)
            .execute("spUpdateAlert")
            .then(result => {
                res.json(result);
            })
    } catch (error) {
        console.log(error)
    }
}

const getAlertDetail = async (req, res) => {
    let data = req.body
    let ID = data.id.toString()
    console.log("getAlertDetail", ID)
    try {
        let pool = await sql.connect(config)
        await pool.request()
            .input("Id", sql.NVarChar, ID)

            .execute("spGetAlertDetail")
            .then(result => {
                console.log("result===", result.recordset)
                res.json(result.recordset);
            })
    } catch (error) {
        console.log(error)
    }
}


module.exports = {

    addUser,
    updateUser,
    addFault,
    getShift,
    UploadFile,
    updateAlert,
    updateFault,
    machinedata,
    getfaultList,
    getAlertDetail,
    getfaultList1,
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