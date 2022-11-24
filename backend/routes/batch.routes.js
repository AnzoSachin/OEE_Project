let express = require('express');
let router = express.Router();


const batch = require("../controller/batch.controller")


router.post("/containersize", batch.getContainerSize);
router.get("/batchnamelist", batch.getBatchNameList);
router.get("/mixerlist", batch.getMixerList);
router.post("/batchlist", batch.getBatchList);
router.post("/addbatch", batch.addBatch);
router.post("/updatebatch", batch.updateBatch);
router.post("/stopbatch", batch.stopBatch);
router.get("/PGlist", batch.getPGList);


module.exports = router