const argon2 =require("argon2")


module.exports.hashedPassword =async (req,res,next)=>{
    try {
        const hashedPassword =await argon2.hash(req.body.password)
        req.hashedPassword =hashedPassword
        next()
    } catch (error) {
        return res.status(500).json("error hashing password")
        
    }
}