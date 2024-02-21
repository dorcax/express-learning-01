class customApiError extends Error{
    constructor(message,statusCode){
        super(message)
        this.statusCode=statusCode
    }
}

// function for new instance of our class
const createCustomError =(msg,statusCode)=>{
    return new customApiError(msg,statusCode)
}

module.exports={customApiError,createCustomError}