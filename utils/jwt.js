const jwt = require("jsonwebtoken")

const isToken =({token})=>{
    return jwt.verify(token,process.env.JWT_SECRET)
}



module.exports =isToken