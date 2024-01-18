//Changing the default express error handler 
//creating a new function that takes err,req,res.next to overwrite the default middleware
const errorHandler =(err,req,res,next)=>{
const statusCode = res.statusCode ? res.statusCode : 500;

res.status(statusCode);

res.json({
    message: err.message,
    //stack for aditional message if in dev mode 
    stack: process.env.NODE_ENV ==='production'? null : err.stack
});

};

module.exports={
    errorHandler,

};