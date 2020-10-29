const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema({
    day:  {
        type: Date,
        default: Date.now,
      },
    exercises: [{
        type: {
            type: String,
         enum: ["cardio", "resistance"],
         lowercase: true,
         required: true,
         trim: true
        },
        name: {
        type: String,
        required: true,
        trim: true 
        },
        duration: {
            type: Number,
            required: true,
        },
        weights: {
            type: Number,
        },
        reps: {
            type: Number,
        },
        sets: {
            type: Number,
        },
        distance: {
            type: Number,
        }
    }]
})

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;