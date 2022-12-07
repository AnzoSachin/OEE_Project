const config = {
    user :'dj',
    password :'dj@123',
    // password :'Vish@123',
   // server:'192.168.31.170',
     server:'localhost',
    // server:'192.168.31.170',
    database:'OEE',
    options:{
        trustedconnection: true,
        enableArithAbort : true, 
        trustServerCertificate: true
    },
    port : 1433
}

module.exports = config