const router = require("express").Router();
const workoutapi = require("./workoutapi")

router.use("/api/workouts", workoutapi)

module.exports = router;