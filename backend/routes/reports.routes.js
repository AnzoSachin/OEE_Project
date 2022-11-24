let express = require('express');
let router = express.Router();

let reports = require("../controller/reports.controller")
router.get("/users", reports.getUsers);
router.post("/getdata", reports.getData);
router.post("/childdata", reports.getChildData);
router.post("/oeecharttrenddata", reports.getOEETrendChartData);
router.post("/breakdownchartdata", reports.getBreakDownTrendChartData);
router.post("/redTagWhiteTagEmployee", reports.getredTagWhiteTagEmployee);
router.post("/redTagAndWhiteTagStatus", reports.getredTagAndWhiteTagStatus);
router.post("/breakdowntrendtabledata", reports.getBreakDownTrendTableData);

router.post("/redTagAndWhiteTagStatusByEmp", reports.getredTagAndWhiteTagStatusByEmp);






module.exports = router