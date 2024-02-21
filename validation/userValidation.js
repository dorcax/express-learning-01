const Joi =require("@hapi/joi")




const validateSignup = (user)=>{
   const schema =  Joi.object({
    name:Joi.string().required().min(6),
    email:Joi.string().email().required(),
    password:Joi.string().required().min(4)
    

})
return schema.validate(user)
}


const validateSignIn =(user)=>{
    const schema =Joi.object({
        email:Joi.string().email().required(),
        password:Joi.string().required()
    })
    return schema.validate(user)
}

const validateBlog =(user)=>{
    const schema =Joi.object({
      content:Joi.string().required(),
      title:Joi.string().required(),
      isPublised :Joi.boolean().required()
    })
    return schema.validate(userr)
}

module.exports ={validateSignIn,validateSignup,validateBlog}