const db = require("../../config/db");
const path =require("path")

module.exports.uploadImage =async(req,res)=>{
    // check if file exist
    // check format
    // check size
    // console.log(req.files)
    if(!req.files){
        throw new Error("no file uploaded")
    }
    const productImage =req.files.image
    // check for image format
    if(!productImage.mimetype.startsWith("image")){
        throw new Error("please upload image")
    }
    const maxsize =1024 *1024
    if(productImage.size <maxsize){

     throw new Error("please uplooad a smaller image")
    }
    const imagepath =path.join(__dirname,"../../Image/uploads/" +`${productImage.name}`)
    await productImage.mv(imagepath)
   return res.status(200).json({image:{src:`uploads/${productImage.name}`}})

}


module.exports.getImage =async(req,res)=>{
    res.send("file upload")
}


