let express = require('express');
let router = express.Router();


const DashBoard = require("../controller/dashboard.controller")


router.get("/linedata", DashBoard.getLine);
router.get("/shiftdata",DashBoard.getshift);
router.get("/block", DashBoard.getblock);
router.get("/currentlinestatus", DashBoard.getCurrentLineStatus);
router.post("/linedetails",DashBoard.getLineDetails)
router.post("/chartdata",DashBoard.getChartData)
router.post("/piechartdata",DashBoard.getPieChartData)
router.post("/griddata",DashBoard.getGridData)
router.post("/linebreakagetimmings",DashBoard.getLineBreakageTimmings)
router.post("/labeldata",DashBoard.getLabelsData)
router.post("/oeetrenddata",DashBoard.getOEETrendData)
router.post("/complaindata",DashBoard.getComplainData)

module.exports = router;