const Joi =require("joi")


const options = {
	stripUnknown: true,
	abortEarly: false,
	errors: {
		wrap: {
			label: ""
		}
	}
};

const validateSignup = (user)=>{
   const schema =  Joi.object({
    name:Joi.string().required().min(6),
    email:Joi.string().email().required(),
    password:Joi.string().required().min(4)
    

})
return schema.validate(user,options)
}


const validateSignIn =(user)=>{
    const schema =Joi.object({
        email:Joi.string().email().required(),
        password:Joi.string().required()
    })
    return schema.validate(user,options)
}

const validateBlog =(user)=>{
    const schema =Joi.object({
      content:Joi.string().required(),
      title:Joi.string().required(),
      isPublished :Joi.boolean().required(),
      category:Joi.string().required()
    })
    return schema.validate(user,options)
}

module.exports ={validateSignIn,validateSignup,validateBlog}