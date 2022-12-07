let express = require('express');
let cors = require ('cors')
let https = require('https')
const limit = require('express-limit').limit;
let app = express();
let router = express.Router();
const upload = require('express-fileupload')
let dasboardRoutes = require("./routes/dashboard.routes")
let lineStatusRoutes = require("./routes/lineStatus.routes")
let complaintRoutes = require("./routes/complaint.routes")
let batchRoutes = require("./routes/batch.routes") 
let adminRoutes = require("./routes/admin.routes")
let reportsRoutes = require("./routes/reports.routes")
let loginRoutes = require("./routes/login.routes") 
let downloadMRoutes = require("./routes/downloadM.routes")
var bodyParser = require('body-parser');


// var jsonParser       = bodyParser.json({limit:1024*1024*20, type:'application/json'});
// var urlencodedParser = bodyParser.urlencoded({ extended:true,limit:1024*1024*20,type:'application/x-www-form-urlencoded' })

var allowCrossDomain=function(req,res,next){
  
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers','Content-type');
    next()
  }
  let corsOptions = {
      origin:"http://localhost:3000",
      credentials:true
    };





app.use(router)
 app.use(upload())
app.use(express.json());
app.use(allowCrossDomain);
app.use(cors(corsOptions));

// app.use(jsonParser);
// app.use(urlencodedParser);
app.use(express.json({limit: "50mb", extended: true}))
app.use(express.urlencoded({limit: "50mb", extended: true, parameterLimit: 50000}))
//app.use(express.limit(100000000));

// routes
app.use('/anzo/dashboard',dasboardRoutes);
app.use('/anzo/linestatus',lineStatusRoutes);
app.use('/anzo/complaint',complaintRoutes);
app.use('/anzo/batch',batchRoutes);
app.use('/anzo/admin',adminRoutes);
app.use('/anzo/reports',reportsRoutes);
app.use('/anzo/login',loginRoutes);
app.use('/anzo/downloadM',downloadMRoutes);
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));

app.post('/test', async(req,res) =>{
  req.files 
})
let port =  5000;
app.listen(port)
console.log('API is runnning at ' + port);