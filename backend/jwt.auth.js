var jwt = require('jsonwebtoken')
const { sign,verify} = require('jsonwebtoken')



const createToken = () =>{ 
  const createToken =   jwt.sign(data,process.env.ACCESS_TOKEN_SECRET);
    return createToken

}