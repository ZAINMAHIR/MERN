// bring in mongoose to create schemma and models 
const mongoose = require('mongoose')
//creating the user schemma fields we want a user to have
const userSchemma = mongoose.Schema({
    name:{
        type:String,
        required: [true, 'Please add a name'],
    },
    
    email:{
        type:String,
        required: [true, 'Please add an email'],
        unique: true
    },

    password:{
        type:String,
        required: [true, 'Please add password'],
    },
},
{
   timestamps: true
})
module.exports = mongoose.model('User',userSchemma)