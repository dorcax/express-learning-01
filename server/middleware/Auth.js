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


// const Authentication =(req,res,next)=>{
//    const token =req.cookies.token
//    // console.log)
//    if(!token){
//       return res.status(401).json("Access denied")
//    }
//   //  verify the token
//   const verified =jwt.verify(token,process.env.JWT_SECRET)
//   console.log(verified)
//   req.User=verified
//    next()
  
//   }

//   role permission

const Authrestrict =(role)=>{
   return(req,res,next)=>{
      if(req.User.role !==role){
       res.send("you are not permitted to access this route")
      }
      next()
   }
}

module.exports={Authentication,Authrestrict
}