const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');

const PORT = process.env.PORT || 3000;
const app = express();
const db = require('./models/Workout');

app.use(logger('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', {
  useNewUrlParser: true,
});

db.Workout.create({ name: 'Workouts' })
.then((workouts) => {
  console.log(workouts);
});



app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
  