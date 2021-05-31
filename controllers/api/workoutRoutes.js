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
        const response = await db.Workout.create({})
        res.json(response);
    }
    catch(err){
        console.log("error occurred creating a workout: ", err)
    }
})

//adds new exercise
router.put("/:id", ({ body, params }, res) => {

    db.Workout.findByIdAndUpdate(params.id, { $push: { exercises: body } })
        .then((updateWorkout) => {
            res.json(updateWorkout);
        })
        .catch((err) => {
            res.json(err);
        });
});

module.exports = router;