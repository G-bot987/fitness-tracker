const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: {
        type: String,
        required: "type is required",
      },
      name: {
        type: String,
        required: "name is required",
      },
      duration: {
        type: Number,
        required: "duration is required",
      },
      distance: Number,
      reps: Number,
      sets: Number,
      weight: Number,
    },
  ],
});

const Workout = mongoose.model("workout", workoutSchema);

module.exports = Workout;
