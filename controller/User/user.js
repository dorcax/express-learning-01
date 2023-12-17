const db = require("../../config/db");
const argon2 =require("argon2");
const jwt =require("jsonwebtoken")

// an endpoint to create user
module.exports.createUser = async (req, res) => {
  try {
    const {name,email ,password} = req.body;
     const hashedPassword = await argon2.hash(req.body.password)
     console.log(name,email,password)
     const user ={name,email,password:hashedPassword}
    
   const newUser = await db.user.create({
      data: { ...user},
    });
    console.log(newUser);
     res.status(201).json("User successfully registered");
  } catch (error) {
     res.status(500).json("user is not registered")
   }
  
  };


  // user endpoint to login 
  module.exports.loginUser =async(req,res)=>{
    // try {
      const{email,password} =req.body
      const User =await db.user.findUnique({
        where:{email:email}
      })
      console.log(User)
      // verify the password
      const IsMatch = await argon2.verify(User.password,password)
      console.log(IsMatch)

      if(!IsMatch){
        return res.status(401).json("Invalid username or password")
      }
      const createToken= jwt.sign({email:User.email,id:User.id,name:User.name},process.env.JWT_SECRET,{
        expiresIn:"1h"
      })
      res.status(200).json({User,createToken})
    // } catch (error) {
    //   res.status(401).json("unable to login ")
    // }
  }

// an endpoint to deleteUser
module.exports.deleteUser =async(req,res)=>{
  const{userId} =req.params
  const deleteuser =await db.user.delete({
    where:{id:+userId}
  })

  res.status(200).json(deleteuser)
}