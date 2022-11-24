let express = require('express');
let router = express.Router();


const Complaint = require("../controller/complaint.controller")

router.get("/departmentlist", Complaint.getDepartmentList);
router.get("/userlist", Complaint.getUserList);
router.get("/machinelist", Complaint.getMachineList);
router.get("/complaintstatus", Complaint.getComplaintStatus);
router.post("/complaintdata", Complaint.getComplaintData);
router.post("/insertcomplaintdata", Complaint.insertComplaintData);
router.post("/savecomplaintdata", Complaint.saveComplaintData);
router.post("/exportcomplaint", Complaint.exportComplaintData);














module.exports = router;