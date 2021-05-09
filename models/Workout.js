const mongoose = require("mongoose");

const WorkoutSchema = new mongoose.Schema({
  day: {
    type: Date,
    default: Date.now(),
  },
  exercises: [
    {
      type: { type: String },
      name: { type: String },
      weight: { type: Number },
      reps: { type: Number },
      sets: { type: Number },
      duration: { type: Number },
      distance: { type: Number },
    },
  ],
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = { Workout };
