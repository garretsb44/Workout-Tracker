const router = require("express").Router();
const path = require("path");
const Workout = require("../models/workout.js");
router.get("/api/workouts", (req, res) => {
  Workout.find()
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});
router.put("/api/workouts/:id", ({ body, params }, res) => {
  Workout.findOneAndUpdate(
    {_id: params.id},
    {
      $push: {
        exercises: body
      }
    },
    {
      new: true,
    }
  )
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});
router.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});
router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    .limit(5)
    //   .sort({ date: -1 })
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});
module.exports = router;