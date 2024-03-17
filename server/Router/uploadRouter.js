const express =require("express")
const router =express.Router()
const uploadRouter =require("../controller/Blog/upload")



router.route("/")
      .post(uploadRouter.uploadImage)
      .get(uploadRouter.getImage)


module.exports =router