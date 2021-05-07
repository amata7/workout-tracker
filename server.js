const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const path = require('path');
const db = require('./models/Workout');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workoutdb', {
  useNewUrlParser: true,
});

db.Workout.create({ name: 'Workout' })
.then((dbWorkouts) => {
  console.log(dbWorkouts);
});

app.get('/stats', (req, res) => {
    res.sendFile(path.join(`${__dirname}/public/stats.html`));
});

app.get('/exercise', (req, res) => {
  res.sendFile(path.join(`${__dirname}/public/exercise.html`));
});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
  