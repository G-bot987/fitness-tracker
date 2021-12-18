const router = require("express").Router();

const Workout = require("../models/Workout.js");

router.post("/", (req, res) => {
  Workout.create(req.body)
    .then((workoutdata) => {
      res.status(200).json(workoutdata);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.put("/:exerciseId", (req, res) => {
  Workout.findByIdAndUpdate(
    req.params.exerciseId,
    {
      $push: { exercises: req.body },
    },
    { runValidators: true }
  )
    .then((updatedWorkout) => {
      console.log(
        "I am the updpated workout: " + JSON.stringify(updatedWorkout)
      );
      res.json(updatedWorkout);
    })
    .catch((err) => res.status(500).json(err));
});

router.get("/", (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: { $sum: "$exercises.duration" },
        totalWeight: { $sum: "$exercises.weight" },
      },
    },
  ])
    .then((workouts) => res.json(workouts))
    .catch((err) => res.json(err));
});

router.get("/range", (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: { $sum: "$exercises.duration" },
        totalWeight: { $sum: "$exercises.weight" },
      },
    },
  ])
    .limit(7)
    .then((workoutdata) => {
      res.status(200).json(workoutdata);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
