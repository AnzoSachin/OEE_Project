let express = require('express');
let router = express.Router();


const DM = require("../controller/downloadM.controller")

router.get("/filedata", DM.getFileData);
router.post("/filecontent", DM.getFileContent);















module.exports = router