const cloudinary = require("cloudinary").v2

const asyncWrapper =require("../../middleware/asyncWrapper")


const imageUpload = asyncWrapper(async(image)=>{

    const result =await cloudinary.uploader.upload(image)
     return result.secure_url




})

module.exports =imageUpload