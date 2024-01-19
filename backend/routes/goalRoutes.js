const express = require('express');
const router = express.Router();
//out of the routes to controller ..
const{getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}=require('../controllers/goalsController')

const { protect } = require('../middleware/authMiddleware')

//The first two method have the same route therefore an alternative to write the two line is 
//router.get("/",getGoals);
//router.post("/",setGoal);
router.route('/').get(protect,getGoals).post(protect,setGoal);
//The second two method have the same route therefore an alternative to write the two line is 
//router.put("/:id",updateGoal);
//router.delete("/:id",deleteGoal);
router.route('/:id').delete(protect,deleteGoal).put(protect,updateGoal)

module.exports = router;