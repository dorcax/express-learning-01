const express =require("express")
const router =express.Router()
const UserRouter =require("../controller/User/user")
const hashedPassword =require("../middleware/hashedPassword")
 const  Authentication = require("../middleware/Auth")



router.route("/")
      .post(UserRouter.createUser)
      
router.route("/login")
      .post(UserRouter.loginUser)
router.route("/delete/:userId")
      .delete(UserRouter.deleteUser)


module.exports =router