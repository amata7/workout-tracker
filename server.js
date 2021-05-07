const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");
const db = require("./models/Workout");
const routes = require("./controllers");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

db.Workout.create({ name: "Workout" }).then((dbWorkouts) => {
  console.log(dbWorkouts);
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
