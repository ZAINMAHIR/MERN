//bringing in moongose 
const mongoose=require('mongoose')

//creting our schemma 
//Then passing object in the schemma with fields
const goalSchemma = mongoose.Schema(
    {
      user:{
          type:mongoose.Schema.Types.ObjectId,
          required: true,
          ref: 'User',
      },
    //sting text to an objext with a type of string
   text:{
    type:String,
    required:['please add a text value'],
   }
},{
    timestamps: true,
})

module.exports=mongoose.model('Goal',goalSchemma)
