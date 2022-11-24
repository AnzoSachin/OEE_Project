let express = require('express');
let router = express.Router();

let login = require("../controller/login.controller")

router.post("/login", login.login);









module.exports = router