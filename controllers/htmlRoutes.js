const router = require("express").Router();
const path = require("path");
const db = require("../models/Workout");

router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.post("/api/workouts", ({ body }, res) => {
  db.Workout.create(body)
    .then((workoutdb) => {
      res.json(workoutdb);
    })
    .catch((err) => {
      res.json(err);
    });
});
module.exports = router;
