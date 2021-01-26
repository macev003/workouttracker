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

router.put("/api/workouts/:id", function(req, res){
  Workout.findByIdAndUpdate(
    req.params.id,
    { $push: {exercises:req.body}},
    {new: true, runValidators: true}
  ).then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.json(err);
  });
})

router.post("/api/workouts", function(req,res){
  Workout.create({})
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.json(err);
  });
})

router.get("/api/workouts/range", function(req, res){
  Workout.find({}).limit(7)
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.json(err);
  });
})


















module.exports = router;