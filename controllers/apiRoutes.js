const router = require("express").Router();
const db = require("../models/Workout");

// router.get("/workouts", (req, res) => {
//   db.Workout.find({})
//     .then((workoutdb) => {
//       res.json(workoutdb);
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// });

router.get("/workouts", async (req, res) => {
  const workOuts = await db.Workout.aggregate([
    {
      $addFields: {
        totalDuration: { $sum: "$exercises.duration" },
        totalWeight: { $sum: "$exercises.weight" },
      },
    },
  ]);
  res.json(workOuts);
});

router.post("/workouts", async (req, res) => {
  const newWorkout = await db.Workout.create(req.body);
  res.json(newWorkout);
});

router.put("/workouts/:id", async (req, res) => {
  const exercise = await db.Workout.findByIdAndUpdate(req.params.id, {
    $push: { exercises: req.body },
  });
  res.json(exercise);
});

module.exports = router;
