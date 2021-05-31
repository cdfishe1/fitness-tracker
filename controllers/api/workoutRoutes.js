const router = require('express').Router();
const db = require('../../models');

router.get("/", (req, res) => {
    db.Workout.find({})
    .then(workout => {
        res.json(workout);
    })
    .catch(err => {
        res.json(err);
    });
});

router.post("/", async (req, res)=> {
    try{
        const response = await db.Workout.create({type: "workout"})
        res.json(response);
    }
    catch(err){
        console.log("error occurred creating a workout: ", err)
    }
})

module.exports = router;