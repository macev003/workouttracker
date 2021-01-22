const router = require("express").Router();

const Workout = require("../models/workout");

router.get("/api/workouts", function(req, res) {
    Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
})





















module.exports = router;