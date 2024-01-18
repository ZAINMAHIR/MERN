const asynHandler=require('express-async-handler')

const Goal = require('../models/goalModel')
//GET
// uses /api/goal/
const getGoals =asynHandler(async(req,res)=>{
    const goals = await Goal.find()
    //To use the line of code below export module.export and set it to an object
    res.status(200).json(goals);
})
//POST
// uses /api/goal/
const setGoal =asynHandler(async(req,res)=>{
    //To use the line of code below export module.export and set it to an object
    if(!req.body.text){
        res.status(400)
        throw new Error('please add a text field')
    }
    const goal = await Goal.create({
        text: req.body.text,
    })
    res.status(200).json(goal);
})
//PUT
// /api/goals/id
const updateGoal=asynHandler(async(req,res)=>{
    // First getting the goal trying to be updated 
    const goal = await Goal.findById(req.params.id)
    // check if not goal 
    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }
    // creating our updated goal 
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.
    body, {
        new: true,
    })
    //To use the line of code below export module.export and set it to an object
    res.status(200).json(updatedGoal);
})
//PUT
// /api/goals/id
const deleteGoal =asynHandler(async(req,res)=>{
    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }
   // used delete one remove was not recognized
    await goal.deleteOne();

    //To use the line of code below export module.export and set it to an object
    res.status(200).json({id: req.params.id});
})
//setting module.export to an object.
module.exports = {
 getGoals,
 setGoal,
 updateGoal,
 deleteGoal,
}