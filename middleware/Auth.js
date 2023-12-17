const jwt =require("jsonwebtoken")




const Authentication =(req,res,next)=>{
 const authHeader =req.headers.authorization
 console.log(authHeader)
 if(!authHeader || !authHeader.startsWith("Bearer")){
    return res.status(401).json("Access denied")
 }
 const token =authHeader.split(" ")[1]
//  verify the token
const verified =jwt.verify(token,process.env.JWT_SECRET)
console.log(verified)
req.User=verified
next()

}

module.exports=Authentication