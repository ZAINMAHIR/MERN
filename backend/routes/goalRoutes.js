const express = require('express');
const router = express.Router();
//out of the routes to controller ..
const{getGoals,setGoal,updateGoal,deleteGoal}=require('../controllers/goalsController')
//The first two method have the same route therefore an alternative to write the two line is 
//router.get("/",getGoals);
//router.post("/",setGoal);
router.route('/').get(getGoals).post(setGoal);
//The second two method have the same route therefore an alternative to write the two line is 
//router.put("/:id",updateGoal);
//router.delete("/:id",deleteGoal);
router.route('/:id').delete(deleteGoal).put(updateGoal)

module.exports = router;