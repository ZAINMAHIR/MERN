const asynHandler=require('express-async-handler')
//GET
// uses /api/goal/
const getGoals =asynHandler(async(req,res)=>{
    //To use the line of code below export module.export and set it to an object
    res.status(200).json({message: 'Get goals'});
})
//POST
// uses /api/goal/
const setGoal =asynHandler(async(req,res)=>{
    //To use the line of code below export module.export and set it to an object
    if(!req.body.text){
        res.status(400)
        throw new Error('please add a text field')
    }
    res.status(200).json({message:'Set goal'});
})
//PUT
// /api/goals/id
const updateGoal=asynHandler(async(req,res)=>{
    //To use the line of code below export module.export and set it to an object
    res.status(200).json({message: `Updated goal ${req.params.id}`});
})
//PUT
// /api/goals/id
const deleteGoal =asynHandler(async(req,res)=>{
    //To use the line of code below export module.export and set it to an object
    res.status(200).json({message: `Delete goal ${req.params.id}`});
})
//setting module.export to an object.
module.exports = {
 getGoals,
 setGoal,
 updateGoal,
 deleteGoal,
}