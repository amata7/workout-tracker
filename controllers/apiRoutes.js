const router = require("express").Router();
const db = require("../models/Workout");

router.get("/workouts", (req, res) => {
  db.Workout.find({})
    .then((workoutdb) => {
      res.json(workoutdb);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put("/exercise", ({ body }, res) => {
  db.Workout.create(body)
    .then((workoutdb) => {
      res.json(workoutdb);
    })
    .catch((err) => {
      res.json(err);
    });
});

// how to aggregate fields an array using mongoose
module.exports = router;
