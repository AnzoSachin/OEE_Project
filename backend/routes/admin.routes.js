let express = require('express');
const upload = require('express-fileupload');
let router = express.Router();

let admin = require("../controller/admin.controller")
router.get("/shift", admin.getShift);
router.get("/linetype", admin.getLineType);
router.get("/userrole", admin.getuserRole);
router.get("/userlist", admin.getuserList);
router.post("/addUser", admin.addUser);
router.get("/allMachine", admin.allMachine);
router.post("/saveMachine", admin.saveMachine);
router.post("/updateMachine", admin.updateMachine);
router.post("/uploadFile", admin.UploadFile);
router.post("/uploadFile1", admin.UploadFile1);
router.get("/managealert", admin.getManageAlert);
router.get("/filecategory", admin.getFileCategoryList);
router.post("/savecalendar", admin.saveCalendar);
router.get("/calendarshutdowndetails", admin.getShutDownDetails);
router.get("/calendarshutdownreason", admin.getShutDownReason);
router.get("/faultlist",admin.getfaultList);
router.post("/faultlist",admin.getfaultList1);

router.post("/addFault",admin.addFault);
router.post("/updateFault",admin.updateFault);
router.get("/machinedata", admin.machinedata);
router.post("/updatealert",admin.updateAlert);
router.post("/getalertdetail",admin.getAlertDetail);






module.exports = router