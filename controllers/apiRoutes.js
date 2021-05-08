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

router.post("/exercise", ({ body }, res) => {
  db.Workout.create(body)
    .then((workoutdb) => {
      res.json(workoutdb);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
