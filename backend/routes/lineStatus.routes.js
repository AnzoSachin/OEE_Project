let express = require('express');
let router = express.Router();


const LineStatus = require("../controller/lineStatus.controller")


router.post("/breakdowndetail", LineStatus.getBreakDownDetail);
router.post("/previousbreakdowndetail",LineStatus.getPreviousBreakDownDetail)
router.post("/excelexportbreakdowndetail",LineStatus.getExcelExportBreakDownDetail)
router.post("/shiftwisebreakdowndetail",LineStatus.getShiftWiseBreakDownDetail)
router.post("/officercomment",LineStatus.getOfficerCommentOnBreakdown)


module.exports = router;